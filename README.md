# Atlas etnográfico (v1.3, manual completo + línea temporal del cap. 2 correlacionada con «Ser humanos»)

Recurso web 3D (Three.js 0.160.0) basado en Miller, B. (2011). *Antropología cultural* (5.ª ed.). Pearson Educación.

## Despliegue
Necesita un servidor web: GitHub Pages, Apache/Nginx o, en local, `python3 -m http.server` dentro de esta carpeta.
Three.js y las fuentes se cargan desde CDN (jsDelivr, Google Fonts): hace falta conexión a internet.

## Arquitectura modular
- `js/globo.js`: escena 3D genérica (globo, marcadores, vuelo de cámara). No contiene contenido del manual.
- `js/app.js`: interfaz (índice, ficha, glosario, recorrido, autoevaluación, búsqueda, modo presentación).
- `js/tierra.js`: costas y máscara de tierra (Natural Earth 1:110m, dominio público).
- `modulos/manifiesto.js`: estructura completa del manual (5 partes, 16 capítulos) y registro de módulos.
- `modulos/parte-N.js`: contenido de cada parte (capítulos y casos geolocalizados).

## Añadir una parte
1. Copiar `modulos/parte-1.js` como `modulos/parte-N.js` y sustituir su contenido (mismo esquema, `id: "parte-N"`).
2. Añadir `<script src="modulos/parte-N.js"></script>` en `index.html`, después de `parte-1.js`.
3. El índice, el globo, la búsqueda y la leyenda la incorporan solos. El núcleo no se modifica.

## Criterios de contenido
- Síntesis, definiciones y preguntas de redacción propia; las páginas remiten al manual.
- `actualizacion`: datos posteriores a 2009 con referencia y DOI.
- `aprox: true`: ubicación inferida cuando el manual no precisa el lugar.

Licencia: CC BY-NC 4.0 (contenidos propios). Cartografía: Natural Earth (dominio público).

## Línea temporal y correlación con «Ser humanos» (v1.1)
- `js/cronologia.js`: vista SVG en escala logarítmica para los capítulos declarados en `ATLAS.cronologia`.
- `modulos/correlaciones.js`: edades numéricas de los casos del cap. 2 (manual y datación actual) y enlaces a «Ser humanos» (anclas `#e-<especie>` y `#sNN`). Copia las edades de especie y etapas de «Ser humanos» v0.8: si ese recurso cambia, actualice este fichero.
- Enlace directo: añada `#cronologia` a la dirección del atlas para abrirla.
