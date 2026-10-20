/*
 * APLICACIÓN · une el manifiesto, los módulos registrados y el globo.
 * Todo el contenido llega de ATLAS.modulos; añadir una parte no exige tocar este fichero.
 */
import { crearGlobo } from "./globo.js";

const A = window.ATLAS;
const $ = s => document.querySelector(s);

function el(tag, attrs = {}, ...hijos) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k === "class") n.className = v;
    else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
    else if (k === "style") n.setAttribute("style", v);
    else n.setAttribute(k, v === true ? "" : v);
  }
  for (const h of hijos.flat()) { if (h == null || h === false) continue; n.append(h.nodeType ? h : document.createTextNode(String(h))); }
  return n;
}
const poner = (nodo, ...h) => nodo.replaceChildren(...h.flat().filter(x => x != null && x !== false));
const colorParte = p => getComputedStyle(document.documentElement).getPropertyValue("--p" + p).trim();
const fmtCoord = (lat, lon) => `${Math.abs(lat).toFixed(2)}° ${lat >= 0 ? "N" : "S"}  ${Math.abs(lon).toFixed(2)}° ${lon >= 0 ? "E" : "O"}`;
const guardar = (k, v) => { try { sessionStorage.setItem(k, v); } catch (e) {} };
const leer = k => { try { return sessionStorage.getItem(k); } catch (e) { return null; } };

/* ---------- Datos unificados ---------- */
const casos = []; const capitulos = new Map();
for (const parte of A.partes) {
  const mod = A.modulos[parte.id];
  if (!mod) continue;
  for (const cap of mod.capitulos) capitulos.set(cap.n, { ...cap, parte: parte.parte });
  for (const c of mod.casos) casos.push({ ...c, parte: parte.parte });
}
const porId = new Map(casos.map(c => [c.id, c]));

const estado = { cap: null, caso: null, vista: "capitulo", busqueda: "", recorrido: null };

/* ---------- Globo ---------- */
const contGlobo = $("#globo");
const rotulo = $("#rotulo");
let hoverId = null;
let globo = null;
try {
  globo = crearGlobo(contGlobo, window.ATLAS_TIERRA, {
    onSeleccion: id => abrirCaso(id, { volar: true }),
    onHover: id => { hoverId = id; }
  });
  $("#carga").hidden = true;
  globo.setCasos(casos.map(c => ({ id: c.id, lat: c.lat, lon: c.lon, color: colorParte(c.parte) })));
  globo.onCuadro(pintarRotulo);
} catch (err) {
  console.error(err);
  $("#carga").textContent = "No se pudo iniciar la vista 3D en este navegador (WebGL desactivado). El índice y las fichas siguen disponibles.";
}

function pintarRotulo() {
  const id = hoverId || estado.caso;
  const c = id && porId.get(id);
  const p = c && globo.aPantalla(id);
  if (!c || !p || !p.visible) { rotulo.hidden = true; return; }
  rotulo.hidden = false;
  rotulo.style.left = p.x + "px"; rotulo.style.top = p.y + "px";
  if (rotulo.dataset.id !== id) {
    rotulo.dataset.id = id;
    rotulo.replaceChildren(c.nombre, el("small", {}, `Cap. ${c.cap} · p. ${c.p}`));
  }
}

/* Tema: el globo lee los tokens CSS */
const refrescarTema = () => { if (!globo) return; globo.actualizarTema(); globo.recolorear(c => colorParte(porId.get(c.id).parte)); pintarLeyenda(); };
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", refrescarTema);
new MutationObserver(refrescarTema).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

/* ---------- Índice ---------- */
function pintarIndice() {
  const ul = $("#partes"); ul.replaceChildren();
  for (const parte of A.partes) {
    const disponible = !!A.modulos[parte.id];
    const caps = el("ul", { class: "caps" });
    if (!disponible) {
      caps.append(el("li", { class: "vacio" }, `${parte.capitulos.length} capítulos: ${parte.capitulos.map(c => c.n).join(", ")}`));
    }
    for (const cap of disponible ? parte.capitulos : []) {
      const activo = estado.cap === cap.n;
      caps.append(el("li", {}, el("button", {
        class: "cap-btn", type: "button", disabled: !capitulos.has(cap.n), "aria-current": activo ? "true" : null,
        onclick: () => abrirCapitulo(cap.n, { volar: true })
      }, el("span", { class: "mono" }, String(cap.n).padStart(2, "0")), cap.titulo)));
    }
    ul.append(el("li", {},
      el("div", { class: "parte-cab" },
        el("span", { class: "muestra", style: `--c: var(--p${parte.parte})` }),
        el("span", { class: "num" }, ["I", "II", "III", "IV", "V"][parte.parte - 1]),
        el("span", {}, parte.titulo),
        disponible ? null : el("span", { class: "chip" }, "En preparación")),
      caps));
  }
  pintarListaCasos();
}

function casosVisibles() {
  const q = estado.busqueda.trim().toLowerCase();
  if (q) {
    return casos.filter(c => [c.nombre, c.lugar, c.estudio?.quien, ...(c.conceptos || [])].join(" ").toLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "")
      .includes(q.normalize("NFD").replace(/\p{Diacritic}/gu, "")));
  }
  return casos.filter(c => c.cap === estado.cap);
}

function pintarListaCasos() {
  const lista = casosVisibles();
  const q = estado.busqueda.trim();
  $("#titulo-casos").textContent = q ? `Resultados para «${q}»` : `Casos del capítulo ${estado.cap}`;
  const ul = $("#lista-casos"); ul.replaceChildren();
  if (!lista.length) { ul.append(el("li", { class: "vacio" }, "Ningún caso coincide. Pruebe con un pueblo, un lugar, un autor o un concepto, por ejemplo «kula» o «rapport».")); }
  for (const c of lista) {
    ul.append(el("li", {}, el("button", {
      class: "caso-btn", type: "button", "aria-current": estado.caso === c.id ? "true" : null,
      onclick: () => abrirCaso(c.id, { volar: true })
    }, el("span", { class: "muestra", style: `--c: var(--p${c.parte})` }), el("strong", {}, c.nombre), el("small", {}, c.lugar))));
  }
  if (globo) globo.atenuar(c => lista.some(x => x.id === c.id));
}

function pintarLeyenda() {
  const ley = $("#leyenda"); ley.replaceChildren();
  for (const parte of A.partes) {
    if (!A.modulos[parte.id]) continue;
    ley.append(el("span", {}, el("span", { class: "muestra", style: `--c: var(--p${parte.parte})` }), `Parte ${["I", "II", "III", "IV", "V"][parte.parte - 1]}`));
  }
  const total = A.partes.reduce((s, p) => s + p.capitulos.length, 0);
  ley.append(el("span", { class: "mono" }, `${casos.length} casos · ${capitulos.size}/${total} capítulos`));
}

/* ---------- Ficha ---------- */
const ficha = $("#ficha");

function cabecera(etq, titulo, sub) {
  return el("header", { class: "ficha-cab" }, el("span", { class: "etiqueta" }, etq), el("h2", { tabindex: "-1", id: "ficha-titulo" }, titulo), sub ? el("p", { class: "lugar" }, sub) : null);
}

function vistaCapitulo(n) {
  const cap = capitulos.get(n); const lista = casos.filter(c => c.cap === n);
  const conAct = lista.filter(c => c.actualizacion).length;
  poner(ficha, 
    cabecera(`Parte ${["I", "II", "III", "IV", "V"][cap.parte - 1]} · Capítulo ${n} · pp. ${cap.paginas}`, cap.titulo),
    el("div", { class: "cifras" },
      el("div", {}, el("strong", {}, String(lista.length)), "casos en el globo"),
      el("div", {}, el("strong", {}, String(cap.glosario.length)), "conceptos"),
      el("div", {}, el("strong", {}, String(conAct)), "notas de actualización")),
    el("section", { class: "seccion" }, el("h3", {}, "Grandes preguntas"), el("ol", { class: "preguntas" }, cap.preguntas.map(p => el("li", {}, p)))),
    el("section", { class: "seccion" }, el("h3", {}, "Recorrido guiado"), el("p", { class: "texto" }, cap.recorrido.intro)),
    el("div", { class: "nav-ficha" },
      el("button", { class: "boton primario", type: "button", onclick: () => iniciarRecorrido(n) }, "Iniciar recorrido"),
      el("button", { class: "boton", type: "button", onclick: () => vistaGlosario(n) }, "Glosario"),
      el("button", { class: "boton", type: "button", onclick: () => vistaTest(n) }, "Autoevaluación"))
  );
  $("#lectura").replaceChildren(el("span", { class: "etiqueta" }, "Capítulo " + n), el("br"), el("span", { class: "mono" }, `${lista.length} casos`));
}

function vistaCaso(c) {
  const cap = capitulos.get(c.cap);
  const meta = el("dl", { class: "meta" },
    el("dt", {}, "Estudio"), el("dd", {}, [c.estudio?.quien, c.estudio?.anio].filter(Boolean).join(", ")),
    c.antiguedad ? [el("dt", {}, "Antigüedad"), el("dd", { class: "mono" }, c.antiguedad)] : null,
    el("dt", {}, "Manual"), el("dd", {}, `Cap. ${c.cap}, ${cap.titulo}, p. ${c.p}`),
    el("dt", {}, "Ubicación"), el("dd", { class: "mono" }, fmtCoord(c.lat, c.lon) + (c.aprox ? "  (aprox.)" : "")));
  const act = c.actualizacion ? el("section", { class: "seccion aviso", "aria-label": "Nota de actualización" },
    el("h3", {}, "Actualización posterior al manual"), el("p", {}, c.actualizacion.texto),
    c.actualizacion.fuentes?.length ? el("ul", {}, c.actualizacion.fuentes.map(f => el("li", {}, f.cita, " ", f.doi ? el("a", { href: "https://doi.org/" + f.doi, target: "_blank", rel: "noopener" }, "doi:" + f.doi) : null))) : null) : null;
  const navs = navegacionCaso(c);
  poner(ficha, 
    cabecera(`Capítulo ${c.cap} · caso`, c.nombre, c.lugar),
    el("div", { class: "conceptos", "aria-label": "Conceptos" }, (c.conceptos || []).map(k => el("span", { class: "concepto" }, k))),
    meta,
    el("p", { class: "texto" }, c.sintesis),
    el("section", { class: "seccion" }, el("h3", {}, "Para pensar"), el("p", { class: "pensar" }, c.pensar)),
    act,
    c.critica ? el("section", { class: "seccion" }, el("h3", {}, "Lectura crítica"), el("p", { class: "critica" }, c.critica)) : null,
    navs
  );
  $("#lectura").replaceChildren(el("span", { class: "etiqueta" }, c.nombre), el("br"), el("span", { class: "mono" }, fmtCoord(c.lat, c.lon)));
}

function navegacionCaso(c) {
  const lista = estado.recorrido ? estado.recorrido.ids.map(id => porId.get(id)) : casosVisibles();
  const i = lista.findIndex(x => x.id === c.id);
  const ant = i > 0 ? lista[i - 1] : null, sig = i >= 0 && i < lista.length - 1 ? lista[i + 1] : null;
  return el("div", { class: "nav-ficha" },
    el("button", { class: "boton", type: "button", disabled: !ant, onclick: () => ant && abrirCaso(ant.id, { volar: true }) }, "Anterior"),
    el("button", { class: "boton", type: "button", disabled: !sig, onclick: () => sig && abrirCaso(sig.id, { volar: true }) }, "Siguiente"),
    el("button", { class: "boton", type: "button", onclick: () => abrirCapitulo(c.cap) }, "Volver al capítulo"));
}

function vistaGlosario(n) {
  estado.vista = "glosario";
  const cap = capitulos.get(n);
  poner(ficha, 
    cabecera(`Capítulo ${n} · glosario`, "Conceptos clave", "Definiciones de redacción propia; la página remite al manual."),
    el("dl", { class: "glosario" }, cap.glosario.map(g => el("div", {}, el("dt", {}, g.t, el("span", { class: "mono" }, "p. " + g.p)), el("dd", {}, g.d)))),
    el("div", { class: "nav-ficha" }, el("button", { class: "boton", type: "button", onclick: () => abrirCapitulo(n) }, "Volver al capítulo"), el("button", { class: "boton", type: "button", onclick: () => vistaTest(n) }, "Autoevaluación")));
  $("#ficha-titulo").focus({ preventScroll: true });
}

function vistaTest(n) {
  estado.vista = "test";
  const cap = capitulos.get(n);
  const form = el("form", { class: "test", id: "test-" + n });
  const resultado = el("p", { class: "resultado", "aria-live": "polite" });
  cap.test.forEach((pr, i) => {
    const fs = el("fieldset", {}, el("legend", {}, `${i + 1}. ${pr.q}`));
    pr.o.forEach((op, j) => fs.append(el("label", { class: "opcion" }, el("input", { type: "radio", name: `p${i}`, value: j, id: `t${n}-${i}-${j}` }), op)));
    fs.append(el("p", { class: "explicacion", hidden: true }, pr.e));
    form.append(fs);
  });
  form.append(el("div", { class: "nav-ficha" }, el("button", { class: "boton primario", type: "submit" }, "Comprobar respuestas"), el("button", { class: "boton", type: "reset" }, "Reiniciar")), resultado);
  form.addEventListener("submit", ev => {
    ev.preventDefault(); let ok = 0;
    cap.test.forEach((pr, i) => {
      const sel = form.querySelector(`input[name=p${i}]:checked`);
      form.querySelectorAll(`input[name=p${i}]`).forEach(inp => {
        const lab = inp.closest(".opcion"); lab.classList.remove("correcta", "incorrecta");
        if (Number(inp.value) === pr.c) lab.classList.add("correcta"); else if (inp === sel) lab.classList.add("incorrecta");
      });
      form.querySelectorAll("fieldset")[i].querySelector(".explicacion").hidden = false;
      if (sel && Number(sel.value) === pr.c) ok++;
    });
    resultado.textContent = `${ok} de ${cap.test.length} respuestas correctas. Revise las explicaciones y la página indicada.`;
  });
  form.addEventListener("reset", () => { form.querySelectorAll(".opcion").forEach(l => l.classList.remove("correcta", "incorrecta")); form.querySelectorAll(".explicacion").forEach(e => e.hidden = true); resultado.textContent = ""; });
  poner(ficha, cabecera(`Capítulo ${n} · autoevaluación`, "Compruebe lo aprendido", `${cap.test.length} preguntas de opción múltiple`), form,
    el("div", { class: "nav-ficha" }, el("button", { class: "boton", type: "button", onclick: () => abrirCapitulo(n) }, "Volver al capítulo")));
  $("#ficha-titulo").focus({ preventScroll: true });
}

/* ---------- Navegación ---------- */
function abrirCapitulo(n, { volar = false } = {}) {
  terminarRecorrido();
  estado.cap = n; estado.caso = null; estado.vista = "capitulo"; estado.busqueda = ""; $("#buscar").value = "";
  if (globo) globo.marcar(null);
  pintarIndice(); vistaCapitulo(n);
  if (volar && globo) {
    const lista = casos.filter(c => c.cap === n);
    const lat = lista.reduce((s, c) => s + c.lat, 0) / lista.length;
    const x = lista.reduce((s, c) => s + Math.cos(c.lon * Math.PI / 180), 0), y = lista.reduce((s, c) => s + Math.sin(c.lon * Math.PI / 180), 0);
    globo.enfocar(lat * 0.5, Math.atan2(y, x) * 180 / Math.PI, 3.9);
  }
  guardar("atlas-cap", String(n));
}

function abrirCaso(id, { volar = false } = {}) {
  const c = porId.get(id); if (!c) return;
  if (estado.recorrido && !estado.recorrido.ids.includes(id)) terminarRecorrido();
  if (c.cap !== estado.cap && !estado.busqueda) { estado.cap = c.cap; pintarIndice(); }
  estado.caso = id; estado.vista = "caso";
  if (globo) { globo.marcar(id); if (volar) globo.enfocar(c.lat, c.lon); }
  pintarListaCasos(); vistaCaso(c); actualizarRecorrido();
  if (window.matchMedia("(max-width: 900px)").matches) ficha.scrollIntoView({ block: "start", behavior: "smooth" });
}

/* ---------- Recorrido guiado ---------- */
function iniciarRecorrido(n) {
  const cap = capitulos.get(n);
  estado.recorrido = { cap: n, ids: cap.recorrido.casos.filter(id => porId.has(id)) };
  abrirCaso(estado.recorrido.ids[0], { volar: true });
}
function terminarRecorrido() { estado.recorrido = null; $("#recorrido").hidden = true; }
function actualizarRecorrido() {
  const r = estado.recorrido, barra = $("#recorrido");
  if (!r) { barra.hidden = true; return; }
  const i = r.ids.indexOf(estado.caso);
  barra.hidden = false;
  barra.replaceChildren(
    el("button", { class: "boton", type: "button", disabled: i <= 0, onclick: () => abrirCaso(r.ids[i - 1], { volar: true }), "aria-label": "Parada anterior" }, "‹"),
    el("span", { class: "paso" }, "Recorrido ", el("span", { class: "mono" }, `${i + 1}/${r.ids.length}`)),
    el("button", { class: "boton primario", type: "button", disabled: i >= r.ids.length - 1, onclick: () => abrirCaso(r.ids[i + 1], { volar: true }), "aria-label": "Parada siguiente" }, "›"),
    el("button", { class: "boton", type: "button", onclick: () => abrirCapitulo(r.cap) }, "Salir"));
}

/* ---------- Búsqueda ---------- */
$("#buscar").addEventListener("input", ev => { estado.busqueda = ev.target.value; terminarRecorrido(); pintarListaCasos(); });

/* ---------- Presentación ---------- */
function presentar(on) {
  document.body.classList.toggle("modo-presentacion", on);
  $("#btn-presentar").setAttribute("aria-pressed", on ? "true" : "false");
  $("#btn-presentar span").textContent = on ? "Salir de presentación" : "Presentar";
  guardar("atlas-presentacion", on ? "1" : "0");
}
$("#btn-presentar").addEventListener("click", () => presentar(!document.body.classList.contains("modo-presentacion")));
document.addEventListener("keydown", ev => {
  if (ev.key === "Escape" && document.body.classList.contains("modo-presentacion")) presentar(false);
  if (estado.recorrido && (ev.key === "ArrowRight" || ev.key === "ArrowLeft") && !/input|textarea/i.test(document.activeElement.tagName)) {
    const r = estado.recorrido, i = r.ids.indexOf(estado.caso), j = i + (ev.key === "ArrowRight" ? 1 : -1);
    if (j >= 0 && j < r.ids.length) abrirCaso(r.ids[j], { volar: true });
  }
});

/* ---------- Arranque ---------- */
$("#fuente").textContent = A.fuente.cita + " ISBN " + A.fuente.isbn + ". " + A.fuente.nota;
pintarLeyenda();
const capInicial = Number(leer("atlas-cap")) || [...capitulos.keys()][0];
abrirCapitulo(capitulos.has(capInicial) ? capInicial : [...capitulos.keys()][0]);
if (leer("atlas-presentacion") === "1") presentar(true);
const ancla = location.hash.slice(1);
if (porId.has(ancla)) abrirCaso(ancla, { volar: true });
