/*
 * MÓDULO COMPLEMENTARIO · Cronología del capítulo 2 y correlación con «Ser humanos»
 *
 * 1) ATLAS.cronologia: edades numéricas (años antes del presente) de los casos del capítulo 2.
 *    manual = edad según Miller (2011); actual = datación revisada cuando difiere (ver ficha del caso);
 *    hito = referencia complementaria que no es el propio yacimiento.
 * 2) ATLAS.correlaciones.serHumanos: enlaces al aplicativo «Ser humanos» (museo 3D sobre los comienzos
 *    de la cultura), que admite anclas #e-<especie> y #sNN (salas). Las edades de especie y las etapas
 *    se copian de sus ficheros datos/especies.js y datos/expansion.js (versión 0.8, 24-10-2026).
 *    Si «Ser humanos» actualiza esos datos, conviene actualizar también este fichero.
 */
window.ATLAS = window.ATLAS || {};

ATLAS.cronologia = {
  2: {
    titulo: "Línea temporal del capítulo 2",
    nota: "Escala logarítmica: cada marca multiplica por diez la antigüedad. Círculo vacío: edad según el manual; círculo lleno: datación actual cuando difiere.",
    casos: {
      "c2-toros-menalla": { manual: 6.5e6, rango: [7e6, 6e6] },
      "c2-tugen": { manual: 6e6 },
      "c2-laetoli": { manual: 3.6e6 },
      "c2-hadar": { manual: 3.2e6 },
      "c2-olduvai": { manual: 1.8e6, rango: [2e6, 1.5e6], hito: { edad: 3.3e6, texto: "Lomekwi 3: herramientas más antiguas conocidas (3,3 Ma)" } },
      "c2-dmanisi": { manual: 1.8e6 },
      "c2-flores": { manual: 1.8e4, actual: 8e4, rangoActual: [1e5, 6e4] },
      "c2-neanderthal": { manual: 3e4, actual: 4e4, etiqueta: "desaparición" },
      "c2-herto": { manual: 1.6e5, actual: 3.15e5, etiquetaActual: "Jebel Irhoud" },
      "c2-les-eyzies": { manual: 4e4 },
      "c2-chauvet": { manual: 3.6e4, aprox: true },
      "c2-monte-verde": { manual: 1.25e4, actual: 1.45e4, hito: { edad: 2.2e4, texto: "Huellas de White Sands (23.000-21.000 años)" } },
      "c2-clovis": { manual: 1.1e4, actual: 1.3e4, etiquetaActual: "cal." },
      "c2-abu-hureyra": { manual: 1.15e4, aprox: true },
      "c2-catalhoyuk": { manual: 9e3 },
      "c2-stonehenge": { manual: 4.5e3, aprox: true },
      "c2-cahokia": { manual: 1e3 }
    }
  }
};

ATLAS.correlaciones = ATLAS.correlaciones || {};
ATLAS.correlaciones.serHumanos = {
  nombre: "Ser humanos",
  descripcion: "Museo 3D sobre los comienzos de la cultura humana",
  url: "https://danielulpgc.github.io/Diploma-de-Estudios-Africanos/",
  urlArtefacto: "https://claude.ai/artifact/4yXUw8ubNAshbArmZx8e4C",
  version: "0.8 (24-10-2026)",
  linajes: {
    primeros: "Primeros homininos",
    australo: "Australopithecus",
    parantropo: "Paranthropus",
    homo: "Homo"
  },
  especies: [
    { id: "sahelanthropus", corto: "Sahelanthropus", linaje: "primeros", edad: [7.0e6, 7.0e6] },
    { id: "ardipithecus", corto: "Ardipithecus", linaje: "primeros", edad: [5.8e6, 3.9e6] },
    { id: "afarensis", corto: "Au. afarensis", linaje: "australo", edad: [3.76e6, 2.92e6] },
    { id: "africanus", corto: "Au. africanus", linaje: "australo", edad: [3.0e6, 2.1e6] },
    { id: "boisei", corto: "P. boisei", linaje: "parantropo", edad: [2.3e6, 1.4e6] },
    { id: "rudolfensis", corto: "H. rudolfensis", linaje: "homo", edad: [2.5e6, 1.8e6] },
    { id: "habilis", corto: "H. habilis", linaje: "homo", edad: [2.3e6, 1.5e6] },
    { id: "ergaster", corto: "H. ergaster", linaje: "homo", edad: [1.9e6, 1.4e6] },
    { id: "erectus", corto: "H. erectus", linaje: "homo", edad: [2.04e6, 1.1e5] },
    { id: "heidelbergensis", corto: "H. heidelbergensis", linaje: "homo", edad: [6e5, 2e5] },
    { id: "neanderthalensis", corto: "H. neanderthalensis", linaje: "homo", edad: [4.3e5, 4e4] },
    { id: "sapiens", corto: "H. sapiens", linaje: "homo", edad: [3e5, 0] }
  ],
  etapas: [
    { id: "e1", titulo: "Formas bípedas tempranas", edad: [7.5e6, 4e6] },
    { id: "e2", titulo: "Australopitecos", edad: [4e6, 3e6] },
    { id: "e3", titulo: "Paranthropus, Homo y primera salida", edad: [3e6, 2e6] },
    { id: "e4", titulo: "H. erectus hasta Asia y Europa", edad: [2e6, 1e6] },
    { id: "e5", titulo: "H. heidelbergensis", edad: [1e6, 4e5] },
    { id: "e6", titulo: "Neandertales, denisovanos, sapiens", edad: [4e5, 0] }
  ],
  salaExpansion: "s11",
  /* Correspondencias caso del atlas → especies y salas de «Ser humanos» */
  casos: {
    "c2-toros-menalla": { especies: ["sahelanthropus"], salas: ["s11"] },
    "c2-tugen": { especies: [], salas: ["s11"] },
    "c2-laetoli": { especies: ["afarensis"], salas: ["s11"] },
    "c2-hadar": { especies: ["afarensis"], salas: ["s11"] },
    "c2-olduvai": { especies: ["habilis", "boisei"], salas: ["s04"] },
    "c2-dmanisi": { especies: ["erectus"], salas: ["s05", "s11"] },
    "c2-flores": { especies: [], salas: ["s11"] },
    "c2-neanderthal": { especies: ["neanderthalensis"], salas: ["s11"] },
    "c2-herto": { especies: ["sapiens"], salas: ["s11"] },
    "c2-les-eyzies": { especies: ["sapiens"], salas: [] },
    "c2-chauvet": { especies: ["sapiens"], salas: ["s08"] },
    "c2-monte-verde": { especies: ["sapiens"], salas: ["s11"] },
    "c2-clovis": { especies: ["sapiens"], salas: ["s11"] }
  },
  salas: {
    s04: "Las primeras herramientas: Lomekwiense y Olduvayense",
    s05: "De África al mundo: el Achelense",
    s08: "Dar un rodeo: el camino hacia el pensamiento humano",
    s11: "Más allá de las montañas: la expansión humana"
  }
};
