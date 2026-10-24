/*
 * MÓDULO · PARTE V · Cambios culturales contemporáneos (capítulos 15-16)
 * Fuente: Miller (2011), pp. 441-503. Redacción propia; las páginas remiten al manual.
 * Mismo esquema que parte-1.js.
 */
ATLAS.registrarModulo({
  id: "parte-5",
  parte: 5,
  titulo: "Cambios culturales contemporáneos",
  capitulos: [
    {
      n: 15,
      titulo: "Gente en movimiento",
      paginas: "443-471",
      preguntas: [
        "¿Cuáles son los principales tipos de migración?",
        "¿Qué ejemplos existen de nuevos inmigrantes en Estados Unidos y Canadá?",
        "¿Cómo contribuyen los antropólogos a las políticas y programas de migración?"
      ],
      glosario: [
        { t: "Migración interior / internacional / transnacional", d: "Desplazamiento dentro de un estado, entre estados, o con idas y venidas regulares que generan una identidad que supera una única unidad política.", p: "444-448" },
        { t: "Teoría de expulsión-atracción", d: "Explica la migración del campo a la ciudad por la falta de oportunidades rurales (expulsión) frente a las urbanas (atracción).", p: "445-446" },
        { t: "País transnacional", d: "Estado con una parte sustancial de su población fuera de sus fronteras, a la que suele conceder ciudadanía para mantener vínculos y remesas.", p: "448" },
        { t: "Remesas", d: "Dinero o bienes que los migrantes envían a sus familias; su uso en consumo o inversión es objeto de debate.", p: "448" },
        { t: "Migrante laboral, institucional y desplazado", d: "Clasificación según el motivo del desplazamiento: trabajo, pertenencia a una institución (estudiantes, militares, religiosos) o salida forzosa.", p: "448-453" },
        { t: "Refugiado / desplazado interno", d: "El refugiado cruza una frontera huyendo de persecución o guerra; el desplazado interno permanece en su país y queda fuera de muchas protecciones internacionales.", p: "450-453" },
        { t: "Desplazamiento por desarrollo", d: "Salida forzosa provocada por grandes proyectos como embalses o minas.", p: "451-452" },
        { t: "Anomia", d: "Sensación de alienación y aislamiento por la quiebra de valores tradicionales en contextos de cambio rápido.", p: "456" },
        { t: "Derecho al retorno", d: "Derecho de las poblaciones desplazadas internacionalmente a regresar, reconocido por la ONU y poco aplicado por los estados.", p: "469-471" }
      ],
      recorrido: {
        intro: "Por qué y cómo se mueve la gente: braceros, refugiados, desplazados por presas y nuevos inmigrantes, y lo que la antropología aporta a las políticas migratorias.",
        casos: ["c15-marismas", "c15-haiti", "c15-tonga", "c15-tres-gargantas", "c15-maya", "c15-madagascar", "c15-dominicanos", "c15-salvadorenos", "c15-vietnamitas", "c15-judios-sovieticos", "c15-silicon-valley"]
      },
      test: [
        { q: "Un país transnacional es aquel que…", o: ["no tiene fronteras", "tiene una parte sustancial de su población viviendo fuera y mantiene vínculos con ella", "recibe más inmigrantes de los que emite", "pertenece a una unión política"], c: 1, e: "Haití, México, Filipinas o Portugal son ejemplos citados (p. 448)." },
        { q: "El debate sobre las remesas se centra en…", o: ["si deben prohibirse", "si se destinan a inversión que mejora la vida o a consumo inmediato", "su efecto en la lengua", "su relación con el turismo"], c: 1, e: "La frontera entre gasto e inversión es difícil de trazar: vacunar a un niño, ¿qué es? (p. 448)." },
        { q: "El recuadro sobre los cortadores de caña haitianos plantea…", o: ["un caso de turismo", "el debate entre estructura y agencia en la migración laboral", "un ejemplo de migración institucional", "la abolición de la esclavitud"], c: 1, e: "¿Son víctimas de un sistema o actores que eligen? (pp. 446-447)." },
        { q: "Según el manual, los inmigrantes de Asia oriental y meridional en EE. UU. han logrado más éxito económico en parte porque…", o: ["llegaron como refugiados", "su migración fue con mayor frecuencia voluntaria y con más recursos formativos", "recibieron tierras", "no sufrieron discriminación"], c: 1, e: "El grado de voluntariedad influye en la adaptación (p. 470)." },
        { q: "Los desplazados internos se diferencian de los refugiados en que…", o: ["no han sufrido violencia", "no cruzan una frontera internacional y quedan fuera de muchas protecciones", "son siempre migrantes económicos", "tienen derecho automático al retorno"], c: 1, e: "Su número crece más rápido que el de refugiados (p. 470)." }
      ]
    },
    {
      n: 16,
      titulo: "Gente definiendo el desarrollo",
      paginas: "473-503",
      preguntas: [
        "¿Qué es el desarrollo y cuáles son los medios para alcanzarlo?",
        "¿Cómo ha afectado el desarrollo a los pueblos indígenas y a las mujeres?",
        "¿Cuáles son los asuntos urgentes relacionados con el desarrollo?"
      ],
      glosario: [
        { t: "Antropología del desarrollo", d: "Subcampo que estudia la relación entre cultura y desarrollo, con un componente aplicado (mejorar vidas) y otro crítico (preguntar por las causas de la pobreza).", p: "474" },
        { t: "Difusión, aculturación y asimilación", d: "Formas de cambio cultural: préstamo entre culturas; acercamiento de una cultura minoritaria a la dominante; desaparición de su identidad diferenciada.", p: "475-476" },
        { t: "Modelos de desarrollo", d: "Modernización, crecimiento, desarrollo distributivo, ajuste estructural y desarrollo humano, con prioridades distintas sobre crecimiento e igualdad.", p: "476-480" },
        { t: "Desarrollo distributivo", d: "Enfoque que prioriza el reparto equitativo de ingresos, alfabetización y salud y rechaza el «efecto goteo».", p: "478-479" },
        { t: "Evaluación de impacto social", d: "Estudio previo de los costes y beneficios sociales de una innovación antes de introducirla.", p: "480" },
        { t: "Antropología del desarrollo tradicional / crítica", d: "La tradicional ayuda a que los proyectos funcionen («añada un antropólogo y revuelva»); la crítica pregunta por qué se hacen y a quién benefician.", p: "488-489" },
        { t: "Intermediario cultural", d: "Persona que usa su conocimiento de la cultura donante y de la receptora para diseñar planes viables.", p: "488" },
        { t: "Terra nullius", d: "Doctrina de la «tierra de nadie» usada para justificar la ocupación colonial de territorios habitados.", p: "495" },
        { t: "Sesgo masculino del desarrollo", d: "Diseño de proyectos que benefician a los varones e ignoran su efecto sobre el estatus y el papel de las mujeres.", p: "496-497" },
        { t: "Violencia contra la mujer", d: "Según la declaración de la ONU de 1993, todo acto de violencia basado en el sexo que cause o pueda causar daño físico, sexual o psicológico, en público o en privado.", p: "497" }
      ],
      recorrido: {
        intro: "Quién define el desarrollo y quién paga sus costes: de la Revolución Verde y las presas a las luchas indígenas por la tierra y el lugar de las mujeres en los proyectos.",
        casos: ["c16-walpole", "c16-revolucion-verde", "c16-kerala", "c16-sami", "c16-haiti", "c16-senegal", "c16-burkina", "c16-mabo", "c16-nunavut", "c16-chittagong", "c16-tuareg", "c16-sudan", "c16-ogoni"]
      },
      test: [
        { q: "Según el análisis citado en el manual, la Revolución Verde en la India…", o: ["acabó con el hambre", "aumentó la producción, pero también la desigualdad entre ricos y pobres", "redujo el uso de fertilizantes", "favoreció a los pequeños campesinos"], c: 1, e: "Semillas, fertilizantes y riego costosos beneficiaron a quien podía pagarlos (p. 476)." },
        { q: "El estudio de Pelto sobre las motonieves entre los samis de Finlandia ilustra la necesidad de…", o: ["más tecnología", "evaluar el impacto social antes de introducir una innovación", "prohibir el pastoreo", "privatizar los rebaños"], c: 1, e: "Los rebaños se asilvestraron y disminuyeron, y el pastoreo se masculinizó (p. 480)." },
        { q: "El proyecto de reforestación en Haití fracasó hasta que Gerald Murray propuso…", o: ["prohibir la tala", "árboles que los campesinos pudieran plantar y aprovechar según su propia lógica", "importar más eucaliptos", "expropiar la tierra"], c: 1, e: "El desajuste estaba entre los plazos de la agencia y los de los peyizan yo (p. 488)." },
        { q: "La sentencia Mabo (1992) es relevante porque…", o: ["creó Nunavut", "rechazó la doctrina de terra nullius y abrió la vía a los títulos nativos en Australia", "prohibió la minería", "reconoció a los samis"], c: 1, e: "Sentó precedente para nuevas reclamaciones indígenas (p. 495)." },
        { q: "El fracaso del proyecto de reforestación en Burkina Faso se debió a…", o: ["la sequía", "excluir a las mujeres, que eran quienes regaban", "la falta de semillas", "la corrupción"], c: 1, e: "Un ejemplo del sesgo masculino del desarrollo (p. 497)." }
      ]
    }
  ],

  casos: [
    /* ------------------------- CAPÍTULO 15 ------------------------- */
    {
      id: "c15-marismas", cap: 15, nombre: "Árabes de las marismas", lugar: "Marismas del sur de Irak", lat: 31.0, lon: 47.0,
      conceptos: ["Desplazamiento", "Retorno"],
      sintesis: "La represión política y el drenaje de las marismas bajo el gobierno de Sadam Husein expulsaron a gran parte de esta población. Tras su caída, muchos refugiados regresan y se ponen en marcha planes de restauración del humedal.",
      estudio: { quien: "Ejemplo del manual (fotografía de apertura)", anio: "" }, p: "443",
      pensar: "¿Basta con restaurar un ecosistema para que una cultura se recupere?",
      actualizacion: { texto: "Las marismas del sur de Irak (Ahwar) se inscribieron en la Lista del Patrimonio Mundial de la UNESCO en 2016. Su recuperación sigue amenazada por la sequía y la gestión del agua.", fuentes: [] }
    },
    {
      id: "c15-haiti", cap: 15, nombre: "Braceros haitianos", lugar: "Bateyes azucareros (República Dominicana)", lat: 18.46, lon: -69.3, aprox: true,
      conceptos: ["Migración laboral", "Estructura y agencia"],
      sintesis: "Desde principios del siglo XX, los cultivadores dominicanos contratan cortadores de caña haitianos: el movimiento de población continuo más antiguo y quizá mayor del Caribe. El recuadro pregunta si son víctimas de un sistema o agentes que eligen.",
      estudio: { quien: "Samuel Martínez", anio: "1996" }, p: "446-447",
      pensar: "¿Qué margen de decisión tiene quien migra por necesidad?",
      critica: "El manual sitúa el acuerdo intergubernamental «entre 1852 y 1986»; la contratación regulada por convenio entre ambos estados corresponde al periodo 1952-1986."
    },
    {
      id: "c15-tonga", cap: 15, nombre: "Un país de remesas", lugar: "Tonga", lat: -21.13, lon: -175.2,
      conceptos: ["País transnacional", "Remesas"],
      sintesis: "Según el manual, al menos el 60 % del PIB de Tonga procedía de las remesas de su diáspora. Las remesas sostienen la salud y el bienestar familiar y financian escuelas, carreteras y clínicas, aunque se discute si se invierten o se consumen.",
      estudio: { quien: "Helen Lee", anio: "2003" }, p: "448",
      pensar: "¿Qué papel tienen las remesas en la economía de tu región?",
      actualizacion: { texto: "Tonga sigue figurando entre los países más dependientes de las remesas del mundo en proporción a su PIB, y la India continúa siendo el mayor receptor en cifras absolutas. Datos perecederos: consultar las series del Banco Mundial.", fuentes: [] }
    },
    {
      id: "c15-tres-gargantas", cap: 15, nombre: "Las Tres Gargantas", lugar: "Río Yangtsé (China)", lat: 30.82, lon: 111.0,
      conceptos: ["Desplazamiento por desarrollo"],
      sintesis: "El mayor embalse del mundo prometía controlar las crecidas y generar energía, pero obligó a desplazarse a cerca de un millón de personas de 13 ciudades y 140 aldeas, inundó tierras campesinas y sepultó un número desconocido de yacimientos.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "451",
      pensar: "¿Cómo se comparan los beneficios nacionales de una presa con los costes locales?",
      actualizacion: { texto: "Las estimaciones oficiales posteriores elevan el número de reasentados a más de 1,2 millones. Cifra variable según la fuente.", fuentes: [] }
    },
    {
      id: "c15-maya", cap: 15, nombre: "Santa María Tzejá", lugar: "Ixcán, El Quiché (Guatemala)", lat: 15.97, lon: -90.77, aprox: true,
      conceptos: ["Refugiados", "Genocidio", "Retorno"],
      sintesis: "Campesinos mayas k'iche' fundaron una aldea con parcelas iguales. En 1982 el ejército la arrasó; los supervivientes huyeron a la selva, a México o a EE. UU. Tras los acuerdos de paz de 1996, muchos regresaron a reconstruirla. Unos 200.000 mayas murieron o desaparecieron en la guerra.",
      estudio: { quien: "Beatriz Manz; Culturama", anio: "2004" }, p: "454-455",
      pensar: "¿Qué necesita una comunidad para reconstruirse tras la violencia?",
      actualizacion: { texto: "La Comisión para el Esclarecimiento Histórico concluyó en 1999 («Guatemala: memoria del silencio») que el Estado cometió actos de genocidio contra el pueblo maya.", fuentes: [] }
    },
    {
      id: "c15-madagascar", cap: 15, nombre: "Posesión en el internado", lugar: "Ambanja (Madagascar)", lat: -13.68, lon: 48.45,
      conceptos: ["Anomia", "Migración", "Género"],
      sintesis: "En una ciudad de rápida inmigración, las chicas de un internado sufren más ataques de posesión que los chicos. La posesión se asocia a embarazos de solteras cortejadas por hombres mayores: expresa un conflicto que no puede decirse de otro modo.",
      estudio: { quien: "Lesley Sharp", anio: "1990" }, p: "456",
      pensar: "¿Qué formas de expresar el malestar existen en tu entorno escolar?",
      critica: "El manual cita «Sharp, 1900», errata por 1990."
    },
    {
      id: "c15-dominicanos", cap: 15, nombre: "Dominicanos en Nueva York", lugar: "Washington Heights, Nueva York (EE. UU.)", lat: 40.84, lon: -73.94,
      conceptos: ["Nuevos inmigrantes", "Economía étnica"],
      sintesis: "Concentrados en sectores en declive, muchos dominicanos abrieron bodegas en zonas inseguras, con propietarios asaltados o asesinados. La llegada de inmigrantes más recientes, dispuestos a aceptar peores salarios, agravó su situación.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "457-458",
      pensar: "¿Qué nichos laborales ocupan los inmigrantes en tu ciudad y por qué?"
    },
    {
      id: "c15-salvadorenos", cap: 15, nombre: "Cruzar tres ríos", lugar: "Long Island, Nueva York (EE. UU.)", lat: 40.79, lon: -73.13,
      conceptos: ["Refugiados", "Migración irregular", "Clase"],
      sintesis: "La guerra civil iniciada en 1979 dejó en 1984 a una cuarta parte de la población refugiada o desplazada. Los salvadoreños de clase media obtuvieron visados; los pobres entraron sin documentos cruzando no uno sino tres ríos. Unos 60.000 se asentaron en Long Island.",
      estudio: { quien: "Sarah Mahler", anio: "1995" }, p: "458-459",
      pensar: "Traza en un mapa la ruta terrestre de El Salvador a EE. UU. y localiza los tres ríos."
    },
    {
      id: "c15-vietnamitas", cap: 15, nombre: "Tres pautas vietnamitas", lugar: "California (EE. UU.)", lat: 33.75, lon: -117.95, aprox: true,
      conceptos: ["Refugiados", "Adaptación"],
      sintesis: "Los refugiados de la guerra de Vietnam se reubicaron sobre todo en EE. UU. Steven Gold distingue tres pautas de adaptación según la oleada y los recursos de cada grupo, marcadas por el aprendizaje de lengua y cultura y por la elaboración de recuerdos dolorosos.",
      estudio: { quien: "Steven Gold", anio: "1992" }, p: "461-462",
      pensar: "¿Qué diferencia la adaptación de un refugiado de la de un migrante voluntario?",
      critica: "El manual afirma que «unos 125 millones de refugiados abandonaron Vietnam»; es una errata evidente. Las estimaciones habituales sitúan los refugiados vietnamitas en torno a uno o dos millones."
    },
    {
      id: "c15-judios-sovieticos", cap: 15, nombre: "Judíos soviéticos", lugar: "California (EE. UU.)", lat: 34.09, lon: -118.36, aprox: true,
      conceptos: ["Refugiados", "Adaptación"],
      sintesis: "Unos 300.000 se asentaron en EE. UU. desde los años sesenta. Acostumbrados a que el Estado proveyera trabajo, vivienda y sanidad, tuvieron que adaptarse al mercado, aunque su formación, su adscripción como «blancos» y el apoyo de la comunidad judía estadounidense los favorecieron.",
      estudio: { quien: "Steven Gold", anio: "1995" }, p: "466",
      pensar: "¿Qué recursos previos facilitan la adaptación de un grupo inmigrante?"
    },
    {
      id: "c15-silicon-valley", cap: 15, nombre: "Indios en Silicon Valley", lugar: "Silicon Valley, California (EE. UU.)", lat: 37.39, lon: -122.0,
      conceptos: ["Nuevos inmigrantes", "Migración cualificada"],
      sintesis: "Uno de los mayores grupos inmigrantes de Silicon Valley procede del sur de Asia. Las primeras oleadas, muy cualificadas, lograron un notable éxito económico; las posteriores llegaron con menos recursos formativos.",
      estudio: { quien: "Helweg y Helweg", anio: "1990" }, p: "464-465",
      pensar: "¿Por qué el éxito de un grupo inmigrante puede ocultar desigualdades internas?"
    },

    /* ------------------------- CAPÍTULO 16 ------------------------- */
    {
      id: "c16-walpole", cap: 16, nombre: "Walpole Island", lugar: "Bkejwanong, Ontario (Canadá)", lat: 42.6, lon: -82.5,
      conceptos: ["Desarrollo indígena", "Medio ambiente"],
      sintesis: "La Primera Nación de Walpole Island se organizó y logró controlar los residuos industriales que contaminaban sus aguas y tierras. En el proceso recuperó orgullo e integridad cultural: una «estrategia a largo plazo» de más de 300 años.",
      estudio: { quien: "Van Wynsberghe", anio: "2002" }, p: "474",
      pensar: "¿Qué significa «desarrollo» desde el punto de vista de una comunidad indígena?"
    },
    {
      id: "c16-revolucion-verde", cap: 16, nombre: "La Revolución Verde", lugar: "Punyab (India)", lat: 30.9, lon: 75.85, aprox: true,
      conceptos: ["Evaluación de impacto social", "Desigualdad"],
      sintesis: "Las variedades de alto rendimiento aumentaron la producción de grano, pero no acabaron con el hambre, que es también un problema de distribución. En la India, la necesidad de comprar semillas, fertilizantes y riego cada año aumentó la desigualdad entre ricos y pobres.",
      estudio: { quien: "Francine Frankel", anio: "1971" }, p: "476",
      pensar: "¿Qué innovación tecnológica actual podría repetir este patrón?"
    },
    {
      id: "c16-kerala", cap: 16, nombre: "Desarrollo distributivo", lugar: "Kerala (India)", lat: 10.0, lon: 76.3, aprox: true,
      conceptos: ["Desarrollo distributivo"],
      sintesis: "Con niveles de alfabetización y salud muy superiores a la media india, Kerala sirve de ejemplo de que la redistribución puede funcionar. Richard Franke evaluó su eficacia en una aldea del centro del estado.",
      estudio: { quien: "Richard Franke", anio: "1993" }, p: "478-479",
      pensar: "¿Es compatible crecer y repartir?"
    },
    {
      id: "c16-sami", cap: 16, nombre: "La revolución de la motonieve", lugar: "Laponia finlandesa", lat: 69.5, lon: 28.6, aprox: true,
      conceptos: ["Evaluación de impacto social", "Difusión tecnológica"],
      sintesis: "En los años sesenta la motonieve sustituyó a los esquíes. Los rebaños dejaron de amansarse, se asilvestraron y disminuyeron por el estrés; el pastoreo pasó a manos de los jóvenes varones y las hijas se orientaron a la escuela. Un caso clásico de efectos sociales imprevistos.",
      estudio: { quien: "Pertti Pelto", anio: "1973" }, p: "480",
      pensar: "¿Qué tecnología reciente ha cambiado las relaciones de género o generación en tu entorno?"
    },
    {
      id: "c16-haiti", cap: 16, nombre: "Los peyizan yo", lugar: "Sudoeste de Haití", lat: 18.3, lon: -73.4, aprox: true,
      conceptos: ["Antropología del desarrollo", "Intermediario cultural"],
      sintesis: "Frente al estereotipo de campesinos incapaces de cooperar, Jennie Smith halló organizaciones de trabajo y ayuda mutua y una visión clara del futuro. Gerald Murray rediseñó un costoso proyecto de reforestación de la USAID proponiendo árboles que los campesinos pudieran aprovechar según su propia lógica.",
      estudio: { quien: "Jennie Smith; Gerald Murray; Culturama", anio: "2001; 1987" }, p: "484-488",
      pensar: "¿Por qué fracasan los proyectos que ignoran la lógica de sus destinatarios?",
      critica: "El manual escribe una vez «Gerald Murria»; el autor es Gerald F. Murray."
    },
    {
      id: "c16-senegal", cap: 16, nombre: "La presa del río Senegal", lugar: "Valle del río Senegal", lat: 16.3, lon: -15.5, aprox: true,
      conceptos: ["Antropología crítica del desarrollo", "Desplazamiento"],
      sintesis: "Antes de la presa, las crecidas periódicas sostenían agricultura, pesca, silvicultura y pastoreo. Después, la inseguridad alimentaria aumentó, muchos habitantes tuvieron que marcharse y se extendió la esquistosomiasis.",
      estudio: { quien: "Horowitz y Salem-Murdock", anio: "1993" }, p: "488-489",
      pensar: "¿Quién debería evaluar los efectos de un gran proyecto y en qué momento?"
    },
    {
      id: "c16-burkina", cap: 16, nombre: "Árboles sin regar", lugar: "Burkina Faso", lat: 12.4, lon: -1.5, aprox: true,
      conceptos: ["Sesgo masculino del desarrollo"],
      sintesis: "Un proyecto de reforestación contó solo con los hombres, que plantaban los árboles; pero regar es tarea de mujeres, y los plantones se abandonaron. Excluir a las mujeres hizo fracasar el proyecto.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "497",
      pensar: "¿Qué tareas invisibles sostienen los proyectos de tu entorno?"
    },
    {
      id: "c16-mabo", cap: 16, nombre: "Mabo y el fin de terra nullius", lugar: "Isla Mer, estrecho de Torres (Australia)", lat: -9.93, lon: 144.05,
      conceptos: ["Terra nullius", "Títulos nativos"],
      sintesis: "Eddie Koiki Mabo y el pueblo meriam llevaron al Tribunal Supremo su reclamación sobre tierras y aguas. En 1992 el tribunal rechazó la doctrina de la «tierra de nadie» y abrió la vía a los títulos nativos en Australia.",
      estudio: { quien: "Colley", anio: "2002" }, p: "495",
      pensar: "¿Qué otras doctrinas jurídicas han legitimado la ocupación colonial?",
      critica: "El manual escribe «Koiko»; el nombre es Eddie Koiki Mabo. Remite además al Mapa 5.4 (Balgo Hills), que no muestra el estrecho de Torres; este aparece en el Mapa 1.3."
    },
    {
      id: "c16-nunavut", cap: 16, nombre: "Nunavut", lugar: "Nunavut (Canadá)", lat: 70.0, lon: -95.0, aprox: true,
      conceptos: ["Reclamaciones territoriales", "Autogobierno indígena"],
      sintesis: "Creado en 1999 como el territorio más extenso y menos poblado de Canadá, con mayoría inuit. Su reclamación territorial garantizó a unos 25.000 inuit el acceso a una enorme superficie y derechos sobre los recursos de superficie.",
      estudio: { quien: "Jensen", anio: "2004" }, p: "492-494",
      pensar: "¿Qué diferencia hay entre reconocer tierras y reconocer autogobierno?",
      critica: "El pie del Mapa 16.5 llama a Nunavut «provincia»; es un territorio, no una provincia."
    },
    {
      id: "c16-chittagong", cap: 16, nombre: "Chittagong Hill Tracts", lugar: "Sudeste de Bangladesh", lat: 22.5, lon: 92.2,
      conceptos: ["Desplazamiento por desarrollo", "Pueblos indígenas"],
      sintesis: "La presa hidroeléctrica de 1963 desplazó a unos 100.000 habitantes de las colinas, que no pudieron seguir con la horticultura; pocos fueron compensados. Después llegaron colonos de las llanuras a ocupar las mejores tierras, y el conflicto se prolongó durante décadas.",
      estudio: { quien: "Plant", anio: "1994" }, p: "494",
      pensar: "¿Por qué algunos conflictos indígenas apenas aparecen en los medios?",
      actualizacion: { texto: "En 1997 se firmó un acuerdo de paz para las Chittagong Hill Tracts, cuya aplicación sigue siendo incompleta según las organizaciones indígenas.", fuentes: [] }
    },
    {
      id: "c16-tuareg", cap: 16, nombre: "Los tuareg", lugar: "Sahel (Malí, Níger, Argelia, Libia, Burkina Faso)", lat: 18.4, lon: 1.4, aprox: true,
      conceptos: ["Pueblos indígenas", "Fronteras estatales"],
      sintesis: "Su territorio tradicional atraviesa hoy cinco estados. Los conflictos de la región han llevado a miles al exilio, y los estados reprimen sus movimientos de resistencia: un ejemplo de cómo las fronteras perjudican a los pueblos nómadas.",
      estudio: { quien: "Childs y Chelala", anio: "1994" }, p: "494-495",
      pensar: "¿Qué derechos debería tener un pueblo cuyo territorio cruza varias fronteras?"
    },
    {
      id: "c16-sudan", cap: 16, nombre: "Petróleo y violencia en Sudán", lugar: "Sur de Sudán", lat: 7.0, lon: 30.0, aprox: true,
      conceptos: ["Violencia", "Recursos"],
      sintesis: "La población del sur y el este ha sufrido genocidio y desplazamientos violentos, con causas políticas y económicas, entre ellas los ricos yacimientos petrolíferos del sur.",
      estudio: { quien: "Warren", anio: "2001" }, p: "495",
      pensar: "¿Cómo se relacionan los recursos naturales y la violencia?",
      actualizacion: { texto: "Sudán del Sur se independizó en julio de 2011. La región sigue afectada por conflictos armados. Situación muy perecedera.", fuentes: [] }
    },
    {
      id: "c16-ogoni", cap: 16, nombre: "Petróleo en el delta del Níger", lugar: "Ogoni, delta del Níger (Nigeria)", lat: 4.75, lon: 7.3,
      conceptos: ["Medio ambiente", "Derechos humanos"],
      sintesis: "Desde el hallazgo de petróleo por Shell en 1958, Ogoni sufre vertidos que arruinan la agricultura y la pesca; la población es hoy más pobre que en los años sesenta. Ken Saro-Wiwa fundó el MOSOP en 1992 y fue ejecutado en 1995 tras un juicio muy cuestionado.",
      estudio: { quien: "Osha; «Una mirada al entorno»", anio: "2006" }, p: "500-501",
      pensar: "¿Qué responsabilidad tienen las empresas en los países donde extraen recursos?",
      critica: "El manual presenta a Ken Saro-Wiwa como «Premio Nobel»; no lo fue. Recibió, entre otros, el Right Livelihood Award (1994) y el Premio Goldman de Medio Ambiente (1995).",
      actualizacion: { texto: "El Programa de las Naciones Unidas para el Medio Ambiente publicó en 2011 una evaluación ambiental de Ogoniland que documentó una contaminación extensa y recomendó un programa de limpieza a largo plazo.", fuentes: [] }
    }
  ]
});
