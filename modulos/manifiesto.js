/*
 * MANIFIESTO DEL ATLAS
 * Declara la estructura completa del manual (cinco partes, dieciséis capítulos).
 * Cada parte se desarrolla como un módulo independiente (modulos/parte-N.js)
 * que se registra con ATLAS.registrarModulo(). Para unificar una parte nueva:
 *   1. crear modulos/parte-N.js siguiendo el esquema de parte-1.js;
 *   2. añadir su <script> en index.html, después de este manifiesto;
 *   3. no hace falta tocar el núcleo (js/).
 */
window.ATLAS = window.ATLAS || {};
ATLAS.fuente = {
  cita: "Miller, B. (2011). Antropología cultural (5.ª ed.; trad. esp.). Pearson Educación.",
  isbn: "978-84-8322-642-1 (ISBN UNED: 978-84-362-5949-0)",
  nota: "Las síntesis, definiciones y preguntas del atlas son de redacción propia. Las páginas remiten a la edición citada para su consulta directa."
};
ATLAS.partes = [
  { parte: 1, id: "parte-1", titulo: "Introducción a la antropología cultural", capitulos: [
    { n: 1, titulo: "La antropología y el estudio de la cultura" },
    { n: 2, titulo: "La evolución de la humanidad y la cultura" },
    { n: 3, titulo: "Investigando la cultura" } ] },
  { parte: 2, id: "parte-2", titulo: "Fundamentos de la cultura", capitulos: [
    { n: 4, titulo: "Ganarse la vida" },
    { n: 5, titulo: "Consumo e intercambio" },
    { n: 6, titulo: "Reproducción y desarrollo humano" },
    { n: 7, titulo: "Salud, enfermedad y curación" } ] },
  { parte: 3, id: "parte-3", titulo: "Organización social", capitulos: [
    { n: 8, titulo: "Parentesco y vida doméstica" },
    { n: 9, titulo: "Grupos sociales y estratificación social" },
    { n: 10, titulo: "Política y liderazgo" },
    { n: 11, titulo: "Control social y conflicto social" } ] },
  { parte: 4, id: "parte-4", titulo: "Sistemas simbólicos", capitulos: [
    { n: 12, titulo: "Comunicación" },
    { n: 13, titulo: "Religión" },
    { n: 14, titulo: "Cultura expresiva" } ] },
  { parte: 5, id: "parte-5", titulo: "Cambios culturales contemporáneos", capitulos: [
    { n: 15, titulo: "Gente en movimiento" },
    { n: 16, titulo: "Gente definiendo el desarrollo" } ] }
];
ATLAS.modulos = {};
ATLAS.registrarModulo = function (m) {
  if (!m || !m.id || !Array.isArray(m.casos)) { console.warn("Módulo no válido", m); return; }
  ATLAS.modulos[m.id] = m;
};
