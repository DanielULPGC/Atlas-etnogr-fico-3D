/*
 * GLOBO · escena Three.js independiente del contenido.
 * Recibe casos genéricos {id, lat, lon, color} y emite eventos de selección.
 * No conoce el manual: cualquier módulo puede alimentarlo.
 */
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const R = 1;
const movimientoReducido = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function aVector(lat, lon, r = R) {
  const phi = (90 - lat) * Math.PI / 180;
  const theta = (lon + 180) * Math.PI / 180;
  return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(theta), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(theta));
}

function texturaPunto() {
  const c = document.createElement("canvas"); c.width = c.height = 64;
  const g = c.getContext("2d");
  g.fillStyle = "#fff"; g.beginPath(); g.arc(32, 32, 26, 0, Math.PI * 2); g.fill();
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

function leerToken(nombre) {
  return getComputedStyle(document.documentElement).getPropertyValue(nombre).trim() || "#888";
}

export function crearGlobo(contenedor, tierra, { onSeleccion, onHover } = {}) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  contenedor.appendChild(renderer.domElement);
  renderer.domElement.setAttribute("role", "img");
  renderer.domElement.setAttribute("aria-label", "Globo terráqueo interactivo con los casos etnográficos del manual. Use la lista de casos para navegar con el teclado.");

  const escena = new THREE.Scene();
  const camara = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camara.position.copy(aVector(12, 20, 3.9));

  const controles = new OrbitControls(camara, renderer.domElement);
  controles.enableDamping = true; controles.dampingFactor = 0.08;
  controles.enablePan = false; controles.minDistance = 1.55; controles.maxDistance = 6;
  controles.rotateSpeed = 0.5; controles.zoomSpeed = 0.7;
  controles.autoRotate = !movimientoReducido(); controles.autoRotateSpeed = 0.35;

  // Océano
  const matOceano = new THREE.MeshBasicMaterial({ color: leerToken("--ocean") });
  escena.add(new THREE.Mesh(new THREE.SphereGeometry(R, 96, 64), matOceano));

  // Retícula cada 30 grados
  const matReticula = new THREE.LineBasicMaterial({ color: leerToken("--grid"), transparent: true, opacity: 0.9 });
  const reticula = new THREE.Group();
  for (let lat = -60; lat <= 60; lat += 30) {
    const pts = []; for (let lon = -180; lon <= 180; lon += 3) pts.push(aVector(lat, lon, R * 1.0008));
    reticula.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), matReticula));
  }
  for (let lon = -180; lon < 180; lon += 30) {
    const pts = []; for (let lat = -90; lat <= 90; lat += 3) pts.push(aVector(lat, lon, R * 1.0008));
    reticula.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), matReticula));
  }
  escena.add(reticula);

  // Tierra: puntos
  const pos = new Float32Array((tierra.puntos.length / 2) * 3);
  for (let i = 0, j = 0; i < tierra.puntos.length; i += 2, j += 3) {
    const v = aVector(tierra.puntos[i + 1], tierra.puntos[i], R * 1.002);
    pos[j] = v.x; pos[j + 1] = v.y; pos[j + 2] = v.z;
  }
  const geoPuntos = new THREE.BufferGeometry(); geoPuntos.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  const matPuntos = new THREE.PointsMaterial({ color: leerToken("--land"), size: 0.0145, map: texturaPunto(), transparent: true, alphaTest: 0.4, sizeAttenuation: true });
  escena.add(new THREE.Points(geoPuntos, matPuntos));

  // Tierra: costas
  const matCosta = new THREE.LineBasicMaterial({ color: leerToken("--coast"), transparent: true, opacity: 0.85 });
  for (const linea of tierra.costas) {
    const pts = []; for (let i = 0; i < linea.length; i += 2) pts.push(aVector(linea[i + 1], linea[i], R * 1.003));
    escena.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), matCosta));
  }

  // Marcadores
  const grupoMarcas = new THREE.Group(); escena.add(grupoMarcas);
  const geoMarca = new THREE.SphereGeometry(0.0125, 16, 12);
  const geoHalo = new THREE.RingGeometry(0.02, 0.026, 40);
  const geoToque = new THREE.SphereGeometry(0.04, 8, 6);
  const matToque = new THREE.MeshBasicMaterial({ visible: false });
  let marcas = new Map();
  let seleccion = null, encima = null;

  function setCasos(casos) {
    for (const m of marcas.values()) { grupoMarcas.remove(m.grupo); m.mat.dispose(); m.matHalo.dispose(); }
    marcas = new Map();
    for (const c of casos) {
      const g = new THREE.Group();
      const normal = aVector(c.lat, c.lon).normalize();
      const mat = new THREE.MeshBasicMaterial({ color: c.color, transparent: true });
      const punto = new THREE.Mesh(geoMarca, mat); punto.position.copy(normal.clone().multiplyScalar(R * 1.012));
      const matHalo = new THREE.MeshBasicMaterial({ color: c.color, transparent: true, side: THREE.DoubleSide, opacity: 0 });
      const halo = new THREE.Mesh(geoHalo, matHalo); halo.position.copy(normal.clone().multiplyScalar(R * 1.006));
      halo.lookAt(normal.clone().multiplyScalar(3));
      const toque = new THREE.Mesh(geoToque, matToque); toque.position.copy(punto.position); toque.userData.id = c.id;
      g.add(punto, halo, toque); grupoMarcas.add(g);
      marcas.set(c.id, { grupo: g, punto, halo, mat, matHalo, toque, normal, caso: c, atenuado: false });
    }
  }

  function atenuar(fn) { for (const m of marcas.values()) { m.atenuado = !fn(m.caso); } }

  function marcar(id) {
    seleccion = id;
  }

  // Vuelo de cámara por círculo máximo
  let vuelo = null;
  function enfocar(lat, lon, distancia) {
    const destino = aVector(lat, lon).normalize();
    const d0 = camara.position.length();
    const d1 = distancia ?? Math.min(d0, 3.1);
    controles.autoRotate = false;
    if (movimientoReducido()) { camara.position.copy(destino.multiplyScalar(d1)); return; }
    vuelo = { desde: camara.position.clone().normalize(), hasta: destino, d0, d1, t0: performance.now(), dur: 1100 };
  }
  function pasoVuelo(ahora) {
    if (!vuelo) return;
    let t = Math.min(1, (ahora - vuelo.t0) / vuelo.dur);
    const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const q = new THREE.Quaternion().setFromUnitVectors(vuelo.desde, vuelo.hasta);
    const qi = new THREE.Quaternion().slerp(q, e);
    const dir = vuelo.desde.clone().applyQuaternion(qi);
    const arco = Math.sin(Math.PI * e) * 0.35 * vuelo.desde.angleTo(vuelo.hasta);
    camara.position.copy(dir.multiplyScalar(vuelo.d0 + (vuelo.d1 - vuelo.d0) * e + arco));
    if (t >= 1) vuelo = null;
  }

  // Interacción
  const ray = new THREE.Raycaster(); const raton = new THREE.Vector2();
  let pulsado = null;
  function idBajo(ev) {
    const r = renderer.domElement.getBoundingClientRect();
    raton.x = ((ev.clientX - r.left) / r.width) * 2 - 1; raton.y = -((ev.clientY - r.top) / r.height) * 2 + 1;
    ray.setFromCamera(raton, camara);
    const toques = [...marcas.values()].filter(m => visible(m)).map(m => m.toque);
    const hits = ray.intersectObjects(toques, false);
    const hit = hits.find(h => !marcas.get(h.object.userData.id)?.atenuado) || hits[0];
    return hit ? hit.object.userData.id : null;
  }
  function visible(m) {
    const cam = camara.position.clone().normalize();
    return m.normal.dot(cam) > 0.12;
  }
  renderer.domElement.addEventListener("pointerdown", ev => { pulsado = { x: ev.clientX, y: ev.clientY }; controles.autoRotate = false; vuelo = null; });
  renderer.domElement.addEventListener("pointerup", ev => {
    if (!pulsado) return;
    const mov = Math.hypot(ev.clientX - pulsado.x, ev.clientY - pulsado.y); pulsado = null;
    if (mov > 6) return;
    const id = idBajo(ev); if (id && onSeleccion) onSeleccion(id);
  });
  renderer.domElement.addEventListener("pointermove", ev => {
    if (ev.pointerType === "touch") return;
    const id = idBajo(ev);
    if (id !== encima) { encima = id; renderer.domElement.style.cursor = id ? "pointer" : ""; if (onHover) onHover(id); }
  });
  renderer.domElement.addEventListener("pointerleave", () => { if (encima) { encima = null; if (onHover) onHover(null); } });

  // Proyección a pantalla para rótulos HTML
  function aPantalla(id) {
    const m = marcas.get(id); if (!m) return null;
    const v = m.punto.getWorldPosition(new THREE.Vector3()).project(camara);
    const r = renderer.domElement.getBoundingClientRect();
    return { x: (v.x + 1) / 2 * r.width, y: (1 - v.y) / 2 * r.height, visible: visible(m) };
  }

  function actualizarTema() {
    matOceano.color.set(leerToken("--ocean")); matReticula.color.set(leerToken("--grid"));
    matPuntos.color.set(leerToken("--land")); matCosta.color.set(leerToken("--coast"));
  }
  function recolorear(fnColor) { for (const m of marcas.values()) { const c = fnColor(m.caso); m.mat.color.set(c); m.matHalo.color.set(c); } }

  function tamano() {
    const w = contenedor.clientWidth || 1, h = contenedor.clientHeight || 1;
    renderer.setSize(w, h, false); camara.aspect = w / h;
    camara.fov = w / h < 0.9 ? 48 : 35; camara.updateProjectionMatrix();
  }
  new ResizeObserver(tamano).observe(contenedor); tamano();

  let cuadro = 0; const oyentesCuadro = [];
  function bucle(ahora) {
    pasoVuelo(ahora);
    controles.update();
    const pulso = movimientoReducido() ? 0.5 : (Math.sin(ahora / 380) + 1) / 2;
    for (const [id, m] of marcas) {
      const sel = id === seleccion, hov = id === encima;
      const op = m.atenuado && !sel ? 0.22 : 1;
      m.mat.opacity = op;
      m.punto.scale.setScalar(sel ? 1.6 : hov ? 1.35 : 1);
      m.matHalo.opacity = sel ? 0.35 + 0.5 * pulso : hov ? 0.6 : 0;
      m.halo.scale.setScalar(sel ? 1 + 0.35 * pulso : 1);
    }
    renderer.render(escena, camara);
    cuadro++; for (const f of oyentesCuadro) f();
    requestAnimationFrame(bucle);
  }
  requestAnimationFrame(bucle);

  return {
    setCasos, atenuar, marcar, enfocar, aPantalla, actualizarTema, recolorear,
    onCuadro: f => oyentesCuadro.push(f),
    detenerGiro: () => { controles.autoRotate = false; }
  };
}
