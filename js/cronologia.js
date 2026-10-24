/*
 * CRONOLOGÍA · línea temporal logarítmica (SVG) para los capítulos que declaran ATLAS.cronologia.
 * Carril superior: etapas y especies de «Ser humanos» (enlaces externos con ancla).
 * Carril inferior: casos del atlas; edad del manual (círculo vacío) y datación actual (círculo lleno).
 */
const NS = "http://www.w3.org/2000/svg";
const MAX = 1e7, MIN = 5e2;
const LOG_MAX = Math.log10(MAX), LOG_MIN = Math.log10(MIN);
const COLOR_LINAJE = { primeros: "--p4", australo: "--p1", parantropo: "--p3", homo: "--p5" };

function s(tag, attrs = {}, ...hijos) {
  const n = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null || v === false) continue;
    if (k.startsWith("on")) n.addEventListener(k.slice(2), v); else n.setAttribute(k, v);
  }
  for (const h of hijos.flat()) { if (h == null) continue; n.append(h.nodeType ? h : document.createTextNode(String(h))); }
  return n;
}
const fmtEdad = a => a >= 1e6 ? `${(a / 1e6).toLocaleString("es-ES", { maximumFractionDigits: 2 })} Ma`
  : a >= 1e3 ? `${Math.round(a).toLocaleString("es-ES")} años` : `${Math.round(a)} años`;

/* Reparte elementos en filas para que sus rótulos no se pisen. */
function enFilas(items, ancho) {
  const filas = [];
  for (const it of items.sort((a, b) => a.x0 - b.x0)) {
    let f = filas.findIndex(fin => it.x0 > fin + 6);
    if (f === -1) { f = filas.length; filas.push(0); }
    filas[f] = Math.min(ancho, it.x1);
    it.fila = f;
  }
  return filas.length;
}

export function crearCronologia(contenedor, { porId, onCaso }) {
  let cap = null, seleccion = null;
  const cuerpo = document.createElement("div"); cuerpo.className = "crono-cuerpo";
  const cab = document.createElement("div"); cab.className = "crono-cab";
  contenedor.append(cab, cuerpo);

  function pintar() {
    const def = window.ATLAS.cronologia?.[cap]; if (!def) return;
    const sh = window.ATLAS.correlaciones?.serHumanos;
    const W = Math.max(660, cuerpo.clientWidth - 2);
    const L = 112, R = 24, ancho = W - L - R;
    const x = a => L + (LOG_MAX - Math.log10(Math.max(MIN, Math.min(MAX, a || MIN)))) / (LOG_MAX - LOG_MIN) * ancho;

    // Especies de «Ser humanos»
    const esp = (sh?.especies || []).map(e => {
      const x0 = x(e.edad[0]), x1 = Math.max(x(e.edad[1] || MIN), x0 + 6);
      return { ...e, x0, x1: Math.max(x1, x0 + e.corto.length * 6.2 + 8) , xb: x1 };
    });
    const filasEsp = enFilas(esp, W);

    // Casos del atlas
    const cs = Object.entries(def.casos).filter(([id]) => porId.has(id)).map(([id, d]) => {
      const c = porId.get(id); const edad = d.actual ?? d.manual;
      const xm = x(d.manual), xa = d.actual ? x(d.actual) : null;
      const xt = Math.min(xm, xa ?? xm);
      return { id, c, d, xm, xa, x0: xt - 4, x1: Math.max(xm, xa ?? xm) + c.nombre.length * 6.4 + 14 };
    });
    const filasCasos = enFilas(cs, W);

    const yEt = 6, hEt = 22;
    const yEsp = yEt + hEt + 22, pasoEsp = 19;
    const yCasos = yEsp + filasEsp * pasoEsp + 30, pasoCaso = 22;
    const yEje = yCasos + filasCasos * pasoCaso + 14;
    const H = yEje + 30;

    const svg = s("svg", { viewBox: `0 0 ${W} ${H}`, width: W, height: H, role: "group", "aria-label": def.titulo });

    // Rejilla y eje
    for (const a of [1e7, 1e6, 1e5, 1e4, 1e3]) {
      const xx = x(a);
      svg.append(s("line", { x1: xx, x2: xx, y1: yEt, y2: yEje, class: "crono-rejilla" }),
        s("text", { x: xx, y: yEje + 16, "text-anchor": "middle", class: "crono-eje" }, a >= 1e6 ? `${a / 1e6} Ma` : `${(a).toLocaleString("es-ES")} años`));
    }
    svg.append(s("line", { x1: L, x2: W - R, y1: yEje, y2: yEje, class: "crono-linea" }));
    svg.append(s("text", { x: L - 10, y: yEje + 16, "text-anchor": "end", class: "crono-eje" }, "antes del presente"));

    // Etapas de expansión (sala 11 de «Ser humanos»)
    if (sh) {
      sh.etapas.forEach((e, i) => {
        const x0 = x(e.edad[0]), x1 = x(e.edad[1] || MIN);
        const a = s("a", { href: `${sh.url}#${sh.salaExpansion}`, target: "_blank", rel: "noopener", class: "crono-enlace" },
          s("title", {}, `${e.titulo} (${fmtEdad(e.edad[0])}${e.edad[1] ? " - " + fmtEdad(e.edad[1]) : " - hoy"}). Abre la sala de la expansión en «Ser humanos».`),
          s("rect", { x: x0, y: yEt, width: Math.max(2, x1 - x0), height: hEt, class: i % 2 ? "crono-etapa impar" : "crono-etapa" }),
          (x1 - x0 > 70) ? s("text", { x: x0 + 6, y: yEt + 15, class: "crono-etapa-txt" }, `${i + 1}. ${e.titulo}`) : (x1 - x0 > 12 ? s("text", { x: (x0 + x1) / 2, y: yEt + 15, "text-anchor": "middle", class: "crono-etapa-txt" }, String(i + 1)) : null));
        svg.append(a);
      });
      svg.append(s("text", { x: L - 10, y: yEt + 11, "text-anchor": "end", class: "crono-carril" }, "Etapas"));
      svg.append(s("text", { x: L - 10, y: yEt + 23, "text-anchor": "end", class: "crono-sub" }, "expansión (sala 11)"));
      svg.append(s("text", { x: L - 10, y: yEsp + 10, "text-anchor": "end", class: "crono-carril" }, "Especies"));
      svg.append(s("text", { x: L - 10, y: yEsp + 24, "text-anchor": "end", class: "crono-sub" }, "Ser humanos"));
      for (const e of esp) {
        const y = yEsp + e.fila * pasoEsp;
        const color = `var(${COLOR_LINAJE[e.linaje] || "--muted"})`;
        svg.append(s("a", { href: `${sh.url}#e-${e.id}`, target: "_blank", rel: "noopener", class: "crono-enlace" },
          s("title", {}, `${e.corto}: ${fmtEdad(e.edad[0])}${e.edad[1] ? " - " + fmtEdad(e.edad[1]) : " - hoy"}. Abre su ficha en «Ser humanos».`),
          s("rect", { x: e.x0, y: y, width: Math.max(6, e.xb - e.x0), height: 7, rx: 3.5, fill: color }),
          s("text", { x: e.x0, y: y + 17, class: "crono-esp" }, e.corto)));
      }
    }

    // Casos del atlas
    svg.append(s("text", { x: L - 10, y: yCasos + 4, "text-anchor": "end", class: "crono-carril" }, "Casos"));
    svg.append(s("text", { x: L - 10, y: yCasos + 18, "text-anchor": "end", class: "crono-sub" }, `Atlas · cap. ${cap}`));
    for (const it of cs) {
      const y = yCasos + it.fila * pasoCaso;
      const sel = it.id === seleccion;
      const g = s("a", { href: "#" + it.id, class: "crono-caso" + (sel ? " sel" : ""), "aria-label": `${it.c.nombre}, ${fmtEdad(it.d.actual ?? it.d.manual)}`,
        onclick: ev => { ev.preventDefault(); onCaso(it.id); } });
      const tit = [`${it.c.nombre} (${it.c.lugar})`, `Manual: ${fmtEdad(it.d.manual)}${it.d.aprox ? " (aprox.)" : ""}`];
      if (it.d.actual) tit.push(`Datación actual: ${fmtEdad(it.d.actual)}${it.d.etiquetaActual ? " · " + it.d.etiquetaActual : ""}`);
      if (it.d.hito) tit.push(it.d.hito.texto);
      g.append(s("title", {}, tit.join("\n")));
      if (it.d.rango) g.append(s("line", { x1: x(it.d.rango[0]), x2: x(it.d.rango[1]), y1: y, y2: y, class: "crono-rango" }));
      if (it.d.hito) {
        const xh = x(it.d.hito.edad);
        g.append(s("path", { d: `M${xh} ${y - 6} l5 6 l-5 6 l-5 -6 z`, class: "crono-hito" }));
      }
      if (it.xa != null) {
        if (it.d.rangoActual) g.append(s("line", { x1: x(it.d.rangoActual[0]), x2: x(it.d.rangoActual[1]), y1: y, y2: y, class: "crono-rango actual" }));
        g.append(s("line", { x1: it.xm, x2: it.xa, y1: y, y2: y, class: "crono-flecha" }));
        g.append(s("circle", { cx: it.xm, cy: y, r: 4.5, class: "crono-manual" }));
        g.append(s("circle", { cx: it.xa, cy: y, r: sel ? 6.5 : 5, class: "crono-actual" }));
      } else {
        g.append(s("circle", { cx: it.xm, cy: y, r: sel ? 6.5 : 5, class: it.d.aprox ? "crono-actual aprox" : "crono-actual" }));
      }
      g.append(s("text", { x: Math.max(it.xm, it.xa ?? it.xm) + 9, y: y + 4, class: "crono-txt" }, it.c.nombre));
      svg.append(g);
    }
    cuerpo.replaceChildren(svg);
  }

  function pintarCab() {
    const def = window.ATLAS.cronologia?.[cap]; const sh = window.ATLAS.correlaciones?.serHumanos;
    cab.replaceChildren();
    const h = document.createElement("strong"); h.textContent = def.titulo;
    const nota = document.createElement("span"); nota.className = "crono-nota"; nota.textContent = def.nota;
    const ley = document.createElement("span"); ley.className = "crono-ley";
    if (sh) {
      for (const [k, v] of Object.entries(sh.linajes)) {
        const i = document.createElement("span"); i.style.setProperty("--c", `var(${COLOR_LINAJE[k]})`); i.className = "crono-ley-i"; i.textContent = v; ley.append(i);
      }
      const a = document.createElement("a"); a.href = sh.url; a.target = "_blank"; a.rel = "noopener"; a.textContent = `Abrir «${sh.nombre}»`; ley.append(a);
    }
    const cerrar = document.createElement("button"); cerrar.type = "button"; cerrar.className = "boton crono-cerrar"; cerrar.textContent = "Cerrar";
    cerrar.addEventListener("click", () => api.cerrar());
    cab.append(h, nota, ley, cerrar);
  }

  new ResizeObserver(() => { if (cap != null && !contenedor.hidden) pintar(); }).observe(cuerpo);

  const api = {
    disponible: n => !!window.ATLAS.cronologia?.[n],
    abrir(n) { cap = n; contenedor.hidden = false; contenedor.closest(".escena")?.classList.add("con-cronologia"); pintarCab(); pintar(); },
    cerrar() { contenedor.hidden = true; contenedor.closest(".escena")?.classList.remove("con-cronologia"); cap = null; },
    abierta: () => !contenedor.hidden,
    capitulo: () => cap,
    marcar(id) { seleccion = id; if (cap != null && !contenedor.hidden) pintar(); }
  };
  return api;
}
