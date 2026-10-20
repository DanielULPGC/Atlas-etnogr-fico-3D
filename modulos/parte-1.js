/*
 * MÓDULO · PARTE I · Introducción a la antropología cultural (capítulos 1-3)
 * Fuente: Miller (2011), pp. 3-99. Redacción propia; las páginas remiten al manual.
 *
 * Esquema de cada caso:
 *  id, cap, nombre, lugar, lat, lon, aprox (true si la ubicación es aproximada),
 *  conceptos[], sintesis, estudio {quien, anio}, p (páginas del manual),
 *  pensar (pregunta para el alumnado), critica (lectura crítica, opcional),
 *  antiguedad (texto, solo capítulo 2), actualizacion {texto, fuentes[{cita, doi}]} (opcional).
 */
ATLAS.registrarModulo({
  id: "parte-1",
  parte: 1,
  titulo: "Introducción a la antropología cultural",
  capitulos: [
    {
      n: 1,
      titulo: "La antropología y el estudio de la cultura",
      paginas: "5-37",
      preguntas: [
        "¿Qué es la antropología?",
        "¿Qué es la antropología cultural?",
        "¿Por qué es relevante para una carrera profesional?"
      ],
      glosario: [
        { t: "Antropología", d: "Estudio de la humanidad en toda su amplitud temporal, desde los orígenes prehistóricos hasta la diversidad de los grupos humanos actuales.", p: "6-7" },
        { t: "Cuatro campos", d: "División norteamericana de la disciplina en antropología biológica, arqueología, antropología lingüística y antropología cultural. La autora sostiene que la aplicación atraviesa los cuatro y no constituye un quinto campo.", p: "6-10" },
        { t: "Cultura", d: "Conjunto de comportamientos e ideas que las personas aprenden y comparten. Tylor (1871) habló de un «complejo conjunto»; Harris la entiende como modo de vida pautado y Geertz la limita a símbolos y significados.", p: "16-18" },
        { t: "Microcultura", d: "Pauta diferenciada de conducta y pensamiento compartida dentro de una cultura más amplia, asociada a la clase, la etnicidad, el género, la edad o las instituciones. Sustituye al término «subcultura».", p: "18, 25-30" },
        { t: "Holismo", d: "Principio según el cual una cultura solo se comprende atendiendo a la interrelación de sus dimensiones: economía, organización social, política, ideología.", p: "14, 24" },
        { t: "Símbolo", d: "Objeto, palabra o acción cuyo significado es definido culturalmente y no guarda una relación natural con lo que representa; por eso es arbitrario e impredecible.", p: "23" },
        { t: "Etnocentrismo", d: "Juzgar otras culturas con los criterios de la propia.", p: "30" },
        { t: "Relativismo cultural", d: "Comprender cada cultura desde sus propios valores e ideas. La versión absoluta prohíbe cualquier cuestionamiento externo; la crítica pregunta quién se beneficia y quién sale perjudicado de una práctica.", p: "14, 30-31" },
        { t: "Globalización y relocalización", d: "La globalización intensifica los vínculos y flujos mundiales; la relocalización designa la transformación local de un elemento global en algo nuevo.", p: "24-25" },
        { t: "Materialismo cultural / antropología interpretativa", d: "El primero explica la cultura a partir de la infraestructura material (recursos, economía, población); la segunda, a partir de lo que la gente piensa y de los significados que atribuye a su vida.", p: "15-16, 33-34" },
        { t: "Agencia y estructurismo", d: "Debate sobre el peso relativo de la capacidad de elección individual frente a las grandes fuerzas económicas, políticas e ideológicas.", p: "16, 34" }
      ],
      recorrido: {
        intro: "Recorrido por los conceptos fundadores: qué estudia la antropología, qué entendemos por cultura y por qué no basta con mirar un solo aspecto de ella.",
        casos: ["c1-borneo", "c1-guatemala", "c1-freshkills", "c1-sumba", "c1-tierras-altas", "c1-benares", "c1-riad", "c1-kalahari"]
      },
      test: [
        { q: "Según la autora, la antropología aplicada…", o: ["es el quinto campo de la disciplina", "debe integrarse en cada uno de los cuatro campos", "solo concierne a la antropología cultural", "es incompatible con la investigación teórica"], c: 1, e: "Miller defiende que la aplicación, igual que la teoría, forma parte de los cuatro campos (pp. 7, 10)." },
        { q: "Los weyéwa de Sumba distinguen siete categorías del gusto. ¿Qué característica de la cultura ilustra el caso?", o: ["La cultura se asienta en la naturaleza sin modificarla", "La cultura moldea incluso funciones biológicas universales", "La cultura es siempre homogénea", "La cultura se transmite genéticamente"], c: 1, e: "Comer es universal, pero qué se percibe como sabor y cómo se clasifica es aprendido (pp. 18-19)." },
        { q: "Estudiar la guerra en las tierras altas de Papúa Nueva Guinea sin atender a cerdos, matrimonio y festejos políticos contradice el principio de…", o: ["relativismo cultural", "etnocentrismo", "holismo", "relocalización"], c: 2, e: "La guerra se entiende dentro de una red que une economía, matrimonio, liderazgo y creencias (p. 24)." },
        { q: "Para el materialismo cultural, el tabú hindú sobre el consumo de vacuno se explica sobre todo por…", o: ["las creencias religiosas tal como las expresan los fieles", "el valor material del ganado vivo: tracción, abono y combustible", "una prohibición colonial británica", "la escasez de pastos"], c: 1, e: "Harris (1974) subraya la utilidad del ganado vivo; la lectura interpretativa se quedaría con la explicación religiosa (pp. 33-34)." },
        { q: "Que McDonald's adapte el ritmo del servicio a reuniones familiares largas en Asia es un ejemplo de…", o: ["mcdonalización", "choque de civilizaciones", "relocalización", "determinismo biológico"], c: 2, e: "Lo global se transforma localmente en algo distinto (p. 25, Watson, 1997)." }
      ]
    },
    {
      n: 2,
      titulo: "La evolución de la humanidad y la cultura",
      paginas: "39-70",
      preguntas: [
        "¿Qué nos enseñan los primates no humanos sobre la cultura humana?",
        "¿Cómo evolucionó la cultura en los homínidos?",
        "¿Qué cambios trajeron el Neolítico, las ciudades y los estados?"
      ],
      glosario: [
        { t: "Homínidos", d: "Linaje de primates bípedos que incluye a los humanos actuales y a sus parientes extintos posteriores a la separación del linaje de los chimpancés.", p: "47-50" },
        { t: "Bipedismo", d: "Locomoción erguida sobre los dos pies; uno de los rasgos que definen a los primeros homínidos.", p: "48-50" },
        { t: "Australopitecinos", d: "Grupo de homínidos extintos de África oriental y meridional, de cerebro pequeño y marcha bípeda.", p: "49-50" },
        { t: "Tradición olduvaiense", d: "Industria lítica más antigua descrita en el manual: lascas y núcleos obtenidos por percusión.", p: "50-51" },
        { t: "Tradición musteriense", d: "Utillaje asociado a los neandertales, con lascas más ligeras y especializadas: puntas, raspadores, buriles.", p: "54-55" },
        { t: "Humanos anatómicamente modernos", d: "Homo sapiens. El manual sitúa su origen en África y su expansión posterior por todo el planeta.", p: "55-57" },
        { t: "Paleolítico Superior", d: "Periodo de los humanos modernos en Europa, con utillaje microlítico y abundante arte rupestre y mueble.", p: "57-58" },
        { t: "Revolución neolítica", d: "Transformación tecnológica y económica asociada a la domesticación de plantas y animales, con hoces y molinos de piedra.", p: "60-62" },
        { t: "Cultura Clovis", d: "Población del Nuevo Mundo definida por un tipo característico de punta de proyectil.", p: "58-59" }
      ],
      recorrido: {
        intro: "Recorrido cronológico desde los primeros homínidos africanos hasta las primeras ciudades. Contrasta cada parada con la nota de actualización: es el capítulo que más ha cambiado desde 2009.",
        casos: ["c2-toros-menalla", "c2-tugen", "c2-laetoli", "c2-hadar", "c2-olduvai", "c2-dmanisi", "c2-flores", "c2-neanderthal", "c2-herto", "c2-les-eyzies", "c2-chauvet", "c2-monte-verde", "c2-abu-hureyra", "c2-catalhoyuk", "c2-cahokia"]
      },
      test: [
        { q: "¿Por qué es relevante Sahelanthropus tchadensis, hallado en Chad?", o: ["Es el primer Homo fuera de África", "Amplía hacia el oeste y el centro de África el área de los homínidos más antiguos", "Demuestra el uso del fuego hace siete millones de años", "Es un neandertal temprano"], c: 1, e: "Su hallazgo lejos del valle del Rift amplía el área de los primeros homínidos (pp. 48-49)." },
        { q: "Dmanisi (Georgia) es significativo porque…", o: ["conserva las pinturas rupestres más antiguas", "documenta homínidos fuera de África hace unos 1,8 millones de años", "es el primer asentamiento neolítico", "demuestra que los neandertales llegaron a América"], c: 1, e: "Es el registro fósil más antiguo de homínidos fuera de África citado en el manual (p. 53)." },
        { q: "Según investigaciones posteriores al manual, los restos óseos de Homo floresiensis…", o: ["tienen unos 18.000 años, como indica el libro", "son más antiguos: unos 100.000-60.000 años", "pertenecen a humanos modernos con enanismo", "proceden de Java"], c: 1, e: "Sutikna et al. (2016) revisaron la estratigrafía de Liang Bua y retrasaron la datación." },
        { q: "Monte Verde (Chile) se cita como el candidato más firme a…", o: ["primer yacimiento Clovis", "ocupación humana anterior a Clovis en Sudamérica", "primer centro urbano de América", "yacimiento neandertal americano"], c: 1, e: "El manual lo presenta como el yacimiento preclovis más sólido (p. 59)." },
        { q: "¿Qué rasgo explica, según el manual, la importancia regional de Cahokia hacia el año 1000?", o: ["El control de cruces de rutas comerciales en la confluencia de grandes ríos", "La metalurgia del hierro", "Ser capital de un imperio andino", "La domesticación del trigo"], c: 0, e: "Su posición en la llanura aluvial del Mississippi le permitió controlar el comercio a larga distancia (p. 67)." }
      ]
    },
    {
      n: 3,
      titulo: "Investigando la cultura",
      paginas: "71-99",
      preguntas: [
        "¿Cómo investigan los antropólogos culturales?",
        "¿Qué implica el trabajo de campo?",
        "¿Qué asuntos son hoy urgentes en la investigación antropológica?"
      ],
      glosario: [
        { t: "Antropología de sillón", d: "Investigación basada en la lectura de relatos de viajeros, misioneros y exploradores, sin contacto directo con las personas estudiadas.", p: "72" },
        { t: "Antropología de varanda", d: "El investigador se desplaza a la colonia pero no convive con la población: convoca a unos pocos interlocutores a su porche para entrevistarlos.", p: "72" },
        { t: "Trabajo de campo y observación participante", d: "Convivir durante un periodo prolongado con un grupo, participar en su vida cotidiana y aprender su lengua mientras se recogen datos.", p: "72-73, 85-86" },
        { t: "Investigación multisituada", d: "Trabajo de campo sobre un mismo tema en varios lugares, útil para estudiar migraciones o relaciones entre lo local y lo global.", p: "73-75" },
        { t: "Rapport", d: "Relación de confianza entre quien investiga y las personas con las que trabaja.", p: "77-80" },
        { t: "Consentimiento informado", d: "Obligación de explicar el propósito, alcance y posibles efectos del estudio y de obtener la conformidad de los participantes.", p: "75-77" },
        { t: "Emic / etic", d: "Emic: categorías y explicaciones de los propios participantes. Etic: categorías analíticas del investigador externo.", p: "84-85" },
        { t: "Choque cultural", d: "Malestar, soledad y ansiedad persistentes al pasar a vivir en otra cultura; existe también el choque inverso al regresar.", p: "84-85" },
        { t: "Efecto Hawthorne", d: "Sesgo que aparece cuando los participantes modifican su conducta para ajustarse a lo que creen que espera el investigador.", p: "85" },
        { t: "Investigación participativa", d: "Enfoque que trata a las personas estudiadas como socias del proyecto, desde la recogida hasta la presentación de los datos.", p: "95-96" }
      ],
      recorrido: {
        intro: "Recorrido por la historia del método etnográfico: del sillón y la varanda a la observación participante, y de ahí a la ética, la investigación participativa y la seguridad en el campo.",
        casos: ["c3-iroqueses", "c3-andaman", "c3-trobriand", "c3-kodaira", "c3-damasco", "c3-jamaica", "c3-kioto", "c3-asturias", "c3-islandia", "c3-baffin", "c3-muncie", "c3-sierra-leona"]
      },
      test: [
        { q: "¿Qué reveló el reestudio de Annette Weiner en las Trobriand?", o: ["Que el kula había desaparecido", "La riqueza y el prestigio que las mujeres generan con fardos de hojas de plátano y faldas", "Que Malinowski había inventado sus datos", "Que la filiación era patrilineal"], c: 1, e: "Weiner documentó un sistema de intercambio femenino ausente en la obra de Malinowski (p. 76)." },
        { q: "La investigadora pregunta a las participantes por sus categorías de pensamiento. Recoge datos…", o: ["etic", "emic", "cuantitativos", "de asignación del tiempo"], c: 1, e: "Los datos emic reflejan cómo entienden su cultura sus propios miembros (p. 85)." },
        { q: "María Cátedra se negó a reproducir en una braña las canciones grabadas en otra. ¿Qué principio protegió?", o: ["La neutralidad estadística", "El consentimiento de las personas grabadas", "El holismo", "La investigación multisituada"], c: 1, e: "No tenía permiso de los primeros intérpretes; su gesto reforzó la confianza local (p. 91)." },
        { q: "El código ético de la AAA de 1971 establece como primera responsabilidad del antropólogo…", o: ["publicar en revistas de impacto", "garantizar la seguridad de las personas que participan en la investigación", "colaborar con los gobiernos", "obtener financiación"], c: 1, e: "Surge tras el Proyecto Camelot y la guerra de Vietnam (pp. 94-95)." },
        { q: "La investigación multisituada resulta especialmente útil para estudiar…", o: ["una aldea aislada", "poblaciones migrantes y vínculos entre niveles local y global", "fósiles", "textos de archivo exclusivamente"], c: 1, e: "Permite seguir un tema a través de varios lugares (pp. 73-74)." }
      ]
    }
  ],

  casos: [
    /* ------------------------- CAPÍTULO 1 ------------------------- */
    {
      id: "c1-borneo", cap: 1, nombre: "Orangutanes de Borneo", lugar: "Campamento Leakey, Kalimantan (Indonesia)", lat: -2.75, lon: 111.95,
      conceptos: ["Primatología", "Antropología aplicada"],
      sintesis: "Biruté Galdikas llegó en 1971 para estudiar orangutanes y acabó convirtiendo su campamento en refugio de crías huérfanas por la caza furtiva. Su conocimiento acumulado durante décadas sostiene una labor de conservación frente a la deforestación: presión a organismos financieros, empleo local de guardas y programas para estudiantes.",
      estudio: { quien: "Biruté Galdikas", anio: "1971-" }, p: "12-13",
      pensar: "¿Debe la investigación científica comprometerse con una causa, o ese compromiso compromete su objetividad?",
      actualizacion: {
        texto: "Desde 2016 la UICN clasifica al orangután de Borneo como especie en peligro crítico. En 2017 se describió una tercera especie, el orangután de Tapanuli (Sumatra).",
        fuentes: [{ cita: "Nater, A. et al. (2017). Morphometric, behavioral, and genomic evidence for a new orangutan species. Current Biology, 27(22), 3487-3498.", doi: "10.1016/j.cub.2017.09.047" }]
      }
    },
    {
      id: "c1-guatemala", cap: 1, nombre: "Exhumaciones forenses", lugar: "Tierras altas de Guatemala", lat: 15.03, lon: -91.15, aprox: true,
      conceptos: ["Antropología biológica", "Antropología forense"],
      sintesis: "En 1997 el antropólogo forense Francisco de León dirigió la exhumación de más de cincuenta cuerpos en una aldea maya. El caso muestra la dimensión aplicada de la antropología biológica: identificar restos humanos al servicio de la justicia y de las familias.",
      estudio: { quien: "Francisco de León", anio: "1997" }, p: "8, 10",
      pensar: "¿Qué responsabilidades tiene quien identifica restos humanos ante una comunidad que ha sufrido violencia política?"
    },
    {
      id: "c1-freshkills", cap: 1, nombre: "Proyecto Basura", lugar: "Fresh Kills, Staten Island (Nueva York)", lat: 40.58, lon: -74.19,
      conceptos: ["Arqueología", "Arqueología de la vida contemporánea"],
      sintesis: "Arqueólogos de la Universidad de Arizona excavaron uno de los mayores vertederos del mundo para estudiar el consumo reciente. Hallazgo llamativo: el papel, sobre todo el de periódico, pesa más en el problema de los residuos que los envases de comida rápida o los pañales.",
      estudio: { quien: "Rathje y Murphy", anio: "1992" }, p: "8-9",
      pensar: "Si un arqueólogo excavara tu basura de una semana, ¿qué diría de tu cultura?",
      actualizacion: { texto: "El vertedero cerró en 2001 y se transforma desde entonces en un gran parque público (Freshkills Park).", fuentes: [] }
    },
    {
      id: "c1-ironbridge", cap: 1, nombre: "Arqueología industrial", lugar: "Ironbridge (Inglaterra)", lat: 52.63, lon: -2.49,
      conceptos: ["Arqueología industrial", "Patrimonio"],
      sintesis: "La garganta de Ironbridge, con el primer puente de hierro del mundo, fábricas y canales, es un enclave clave de la arqueología industrial: el estudio de la cultura material desde la Revolución Industrial y la protección de un patrimonio sin «glamour» y, por eso, vulnerable.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "8, 10",
      pensar: "¿Qué patrimonio industrial de tu entorno corre peligro por no considerarse bello?"
    },
    {
      id: "c1-sumba", cap: 1, nombre: "Las siete categorías del gusto", lugar: "Sumba occidental (Indonesia)", lat: -9.65, lon: 119.4,
      conceptos: ["Cultura y naturaleza", "Comer"],
      sintesis: "Frente a las cuatro categorías del gusto que la investigación occidental creía universales, los weyéwa distinguen siete: dulce, ácido, amargo, salado, agrio, soso y picante. Una función biológica universal, comer, aparece clasificada y vivida de forma cultural.",
      estudio: { quien: "Joel Kuipers", anio: "1991" }, p: "19-20",
      pensar: "¿Qué alimento considerado delicioso en tu entorno resultaría repugnante en otro?",
      critica: "El manual escribe el etnónimo de tres formas distintas (weyéwa, weyéba, weyéya); conviene unificarlo al citar."
    },
    {
      id: "c1-tejanos", cap: 1, nombre: "El poder de las latinas en la cocina", lugar: "Sur de Texas e Illinois (EE. UU.)", lat: 27.8, lon: -97.9, aprox: true,
      conceptos: ["Microcultura", "Género", "Comida"],
      sintesis: "Entre las familias tejanas que migran a trabajar en Illinois, preparar tamales es un trabajo colectivo femenino que expresa la dedicación de la «buena esposa», crea redes de apoyo y, cuando las mujeres se niegan a hacerlos, sirve también como forma de protesta doméstica.",
      estudio: { quien: "Recuadro «Antropología cotidiana»", anio: "" }, p: "22",
      pensar: "¿Conoces un alimento que se use para expresar solidaridad o protesta?"
    },
    {
      id: "c1-tierras-altas", cap: 1, nombre: "Cerdos, fiestas y guerra", lugar: "Tierras altas de Papúa Nueva Guinea", lat: -5.86, lon: 144.23,
      conceptos: ["Holismo", "Género"],
      sintesis: "Para alcanzar liderazgo, un hombre necesita muchos cerdos, que crían las mujeres con ñame que cultivan los hombres. Más esposas permiten más cerdos, más fiestas, más deudores y más guerreros. Estudiar la guerra sin esta trama económica, matrimonial, ritual y estética daría una imagen falsa.",
      estudio: { quien: "Síntesis del manual; Meigs (1984) para la segregación por género", anio: "" }, p: "24, 27",
      pensar: "Elige una práctica de tu entorno y enumera con qué otros ámbitos de la cultura está conectada.",
      critica: "El manual habla de «grupos de Papúa Nueva Guinea» en general. Es preferible identificar el grupo concreto de cada etnografía para no homogeneizar un país con centenares de lenguas."
    },
    {
      id: "c1-benares", cap: 1, nombre: "La vaca sagrada", lugar: "Benarés / Varanasi (India)", lat: 25.32, lon: 82.97,
      conceptos: ["Materialismo cultural", "Antropología interpretativa"],
      sintesis: "¿Por qué los hindúes no comen vacuno? La lectura interpretativa acepta la explicación religiosa de los fieles. El materialismo cultural de Harris añade que el ganado vale más vivo: tracción, abono y combustible, de modo que el tabú protege un recurso vital.",
      estudio: { quien: "Marvin Harris", anio: "1974" }, p: "33-34",
      pensar: "¿Puede una explicación material y otra simbólica ser verdaderas a la vez?"
    },
    {
      id: "c1-nacirema", cap: 1, nombre: "Los nacirema", lugar: "Norteamérica", lat: 39.5, lon: -98.35, aprox: true,
      conceptos: ["Extrañamiento", "Etnocentrismo"],
      sintesis: "En 1956 Horace Miner describió los rituales corporales de un pueblo «exótico» con un altar doméstico lleno de pociones y hombres-medicina. Basta leer el nombre al revés para reconocer a la sociedad estadounidense: la antropología hace extraño lo familiar.",
      estudio: { quien: "Horace Miner", anio: "1956" }, p: "11",
      pensar: "Describe una rutina de tu vida diaria como si fueras un etnógrafo extranjero."
    },
    {
      id: "c1-riad", cap: 1, nombre: "McDonald's relocalizado", lugar: "Riad (Arabia Saudí) y Asia oriental", lat: 24.71, lon: 46.68,
      conceptos: ["Globalización", "Relocalización", "Hibridación"],
      sintesis: "Frente a la idea de una homogeneización total, la cadena ajusta sus locales: en Asia oriental acepta comidas familiares largas y en Riad separa zonas para familias y parejas. El manual contrapone cuatro modelos: choque de civilizaciones, mcdonalización, hibridación y relocalización.",
      estudio: { quien: "James L. Watson", anio: "1997" }, p: "24-25",
      pensar: "Busca un producto global que se use en tu localidad de una forma distinta a la prevista."
    },
    {
      id: "c1-kalahari", cap: 1, nombre: "Los pueblos san", lugar: "Región ju/'hoansi (Namibia y Botsuana)", lat: -19.6, lon: 20.6,
      conceptos: ["Pueblos indígenas", "Globalización", "Derechos"],
      sintesis: "Los ju/'hoansi, descritos por Richard Lee en los años sesenta como recolectores móviles, viven hoy en gran parte en asentamientos de reasentamiento o en la pobreza urbana. Organizaciones como WIMSA han logrado que los san participen en los beneficios comerciales de la hoodia, planta que usaban tradicionalmente contra el hambre y la sed.",
      estudio: { quien: "Richard B. Lee", anio: "1979" }, p: "27-29",
      pensar: "¿Quién debe beneficiarse de un conocimiento tradicional cuando se convierte en producto comercial?",
      critica: "El término «bosquimano» tiene origen colonial y peyorativo. Su aceptación por parte de algunos san no autoriza su uso indiscriminado."
    },

    /* ------------------------- CAPÍTULO 2 ------------------------- */
    {
      id: "c2-toros-menalla", cap: 2, nombre: "Toumaï", lugar: "Toros-Menalla (Chad)", lat: 16.25, lon: 17.48,
      antiguedad: "c. 7-6 millones de años",
      conceptos: ["Homínidos", "Bipedismo"],
      sintesis: "Sahelanthropus tchadensis, apodado Toumaï, combina un cerebro del tamaño del de un chimpancé con arcos supraorbitarios marcados. Su hallazgo en Chad, lejos del valle del Rift, amplía el área de los homínidos más antiguos.",
      estudio: { quien: "Brunet et al.", anio: "2002" }, p: "48-49",
      pensar: "¿Qué rasgo anatómico basta para considerar homínido un fósil?",
      actualizacion: {
        texto: "Su bipedismo sigue en debate: el análisis de un fémur atribuido al taxón ha recibido lecturas opuestas.",
        fuentes: [
          { cita: "Macchiarelli, R. et al. (2020). Nature and relationships of Sahelanthropus tchadensis. Journal of Human Evolution, 149, 102898.", doi: "10.1016/j.jhevol.2020.102898" },
          { cita: "Daver, G. et al. (2022). Postcranial evidence of late Miocene hominin bipedalism in Chad. Nature, 609, 94-100.", doi: "10.1038/s41586-022-04901-z" }
        ]
      }
    },
    {
      id: "c2-tugen", cap: 2, nombre: "Orrorin tugenensis", lugar: "Tugen Hills (Kenia)", lat: 0.85, lon: 35.85,
      antiguedad: "c. 6 millones de años",
      conceptos: ["Bipedismo"],
      sintesis: "Restos escasos pero significativos, entre ellos un fémur. El manual lo presenta como la primera prueba fósil de bipedismo.",
      estudio: { quien: "Senut et al.", anio: "2001" }, p: "49-50",
      pensar: "¿Por qué un fémur dice tanto sobre la forma de desplazarse?",
      critica: "El manual escribe «Senul»; la autora del hallazgo es Brigitte Senut."
    },
    {
      id: "c2-laetoli", cap: 2, nombre: "Huellas de Laetoli", lugar: "Laetoli (Tanzania)", lat: -3.22, lon: 35.18,
      antiguedad: "c. 3,6 millones de años",
      conceptos: ["Bipedismo", "Australopitecinos"],
      sintesis: "Rastros de pisadas conservados en ceniza volcánica, de individuos de entre 90 y 120 cm de altura. Son una prueba directa, no inferida del esqueleto, de la marcha bípeda.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "38-39, 50",
      pensar: "¿Qué información ofrece una huella que no ofrece un hueso?"
    },
    {
      id: "c2-hadar", cap: 2, nombre: "Lucy", lugar: "Hadar (Etiopía)", lat: 11.1, lon: 40.58,
      antiguedad: "c. 3,2 millones de años",
      conceptos: ["Australopitecinos"],
      sintesis: "Hallada en 1974, Lucy (Australopithecus afarensis) es el fósil de homínido más conocido gracias a la conservación de buena parte de su esqueleto.",
      estudio: { quien: "Donald Johanson", anio: "1974" }, p: "49",
      pensar: "¿Por qué algunos fósiles se convierten en iconos mediáticos y otros no?",
      critica: "El manual sitúa a la especie entre 4,3 y 3 millones de años; la horquilla habitual en la bibliografía es más estrecha, de unos 3,9 a 2,9 millones de años. Conviene contrastarlo con fuentes actualizadas."
    },
    {
      id: "c2-olduvai", cap: 2, nombre: "Garganta de Olduvai", lugar: "Olduvai (Tanzania)", lat: -2.99, lon: 35.35,
      antiguedad: "c. 2-1,5 millones de años",
      conceptos: ["Homo arcaico", "Tradición olduvaiense"],
      sintesis: "Yacimiento clásico de Homo habilis y origen del nombre de la industria olduvaiense: lascas y núcleos tallados por percusión. El manual recuerda que pudieron existir herramientas de materiales perecederos que no se han conservado.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "49-51",
      pensar: "¿Cómo sesga la conservación diferencial de los materiales nuestra imagen del pasado?",
      actualizacion: {
        texto: "Las herramientas de piedra más antiguas conocidas hoy proceden de Lomekwi 3 (Kenia), con unos 3,3 millones de años, anteriores al género Homo.",
        fuentes: [{ cita: "Harmand, S. et al. (2015). 3.3-million-year-old stone tools from Lomekwi 3, West Turkana, Kenya. Nature, 521, 310-315.", doi: "10.1038/nature14464" }]
      }
    },
    {
      id: "c2-dmanisi", cap: 2, nombre: "Los primeros fuera de África", lugar: "Dmanisi (Georgia)", lat: 41.34, lon: 44.34,
      antiguedad: "c. 1,8 millones de años",
      conceptos: ["Homo arcaico", "Dispersión"],
      sintesis: "El registro fósil de homínidos más antiguo fuera de África: individuos pequeños, con cerebros de unos 600 cc, pero con proporciones de las piernas modernas.",
      estudio: { quien: "Vekua et al.", anio: "2002" }, p: "53",
      pensar: "¿Qué pudo impulsar las primeras salidas de África?",
      actualizacion: {
        texto: "El cráneo 5 de Dmanisi, publicado en 2013, alimentó el debate sobre la variabilidad del Homo temprano y la conveniencia de agrupar varias especies.",
        fuentes: [{ cita: "Lordkipanidze, D. et al. (2013). A complete skull from Dmanisi, Georgia, and the evolutionary biology of early Homo. Science, 342(6156), 326-331.", doi: "10.1126/science.1238484" }]
      }
    },
    {
      id: "c2-flores", cap: 2, nombre: "Los «hobbits» de Flores", lugar: "Liang Bua, Flores (Indonesia)", lat: -8.53, lon: 120.46,
      antiguedad: "c. 100.000-60.000 años (datación revisada)",
      conceptos: ["Homo floresiensis", "Insularidad"],
      sintesis: "Una especie de homínido de talla muy reducida hallada en la isla de Flores. El manual la data en unos 18.000 años y la presenta como un rompecabezas: ¿cómo sobrevivió hasta fechas tan recientes?",
      estudio: { quien: "Brown et al.; Morwood et al.", anio: "2004" }, p: "53",
      pensar: "¿Cómo cambia una pregunta de investigación cuando se corrige una fecha?",
      actualizacion: {
        texto: "La revisión estratigráfica de Liang Bua retrasó la antigüedad de los restos óseos a unos 100.000-60.000 años y la de las herramientas a unos 190.000-50.000. La pregunta del manual queda, por tanto, superada.",
        fuentes: [{ cita: "Sutikna, T. et al. (2016). Revised stratigraphy and chronology for Homo floresiensis at Liang Bua in Indonesia. Nature, 532, 366-369.", doi: "10.1038/nature17179" }]
      }
    },
    {
      id: "c2-neanderthal", cap: 2, nombre: "Neandertales", lugar: "Valle de Neander (Alemania)", lat: 51.23, lon: 6.95,
      antiguedad: "c. 400.000-40.000 años",
      conceptos: ["Homo neanderthalensis", "Tradición musteriense"],
      sintesis: "Descubiertos en el valle que les da nombre, se han hallado en un centenar de yacimientos de Europa, Próximo Oriente y el camino a Siberia. Adaptados al frío, coincidieron en su última fase con los humanos modernos.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "54-55",
      pensar: "¿Qué criterios usamos para decidir si una especie tenía cultura?",
      actualizacion: {
        texto: "La genómica demostró en 2010 el cruce entre neandertales y humanos modernos, y la datación por radiocarbono sitúa su desaparición en torno a 41.000-39.000 años, antes de los 30.000 que indica el manual.",
        fuentes: [
          { cita: "Green, R. E. et al. (2010). A draft sequence of the Neandertal genome. Science, 328(5979), 710-722.", doi: "10.1126/science.1188021" },
          { cita: "Higham, T. et al. (2014). The timing and spatiotemporal patterning of Neanderthal disappearance. Nature, 512, 306-309.", doi: "10.1038/nature13621" }
        ]
      }
    },
    {
      id: "c2-herto", cap: 2, nombre: "Primeros Homo sapiens", lugar: "Awash Medio (Etiopía)", lat: 10.3, lon: 40.5, aprox: true,
      antiguedad: "c. 160.000 años (según el manual)",
      conceptos: ["Humanos anatómicamente modernos", "Origen africano"],
      sintesis: "El manual sitúa en Etiopía, hace unos 160.000 años, la evidencia fósil más antigua de humanos modernos, y apoya el origen africano con herramientas de hoja de Kapthurin (Kenia) de unos 300.000 años.",
      estudio: { quien: "Ejemplo del manual (sin nombre de yacimiento)", anio: "" }, p: "55-57",
      pensar: "¿Qué diferencia hay entre modernidad anatómica y modernidad conductual?",
      actualizacion: {
        texto: "Los restos de Jebel Irhoud (Marruecos), datados en unos 315.000 años, han desplazado la fecha y el mapa del origen de nuestra especie hacia un proceso panafricano.",
        fuentes: [{ cita: "Hublin, J.-J. et al. (2017). New fossils from Jebel Irhoud, Morocco and the pan-African origin of Homo sapiens. Nature, 546, 289-292.", doi: "10.1038/nature22336" }]
      },
      critica: "El manual no nombra el yacimiento etíope; la ubicación en el Awash Medio (Herto) es una inferencia del atlas."
    },
    {
      id: "c2-les-eyzies", cap: 2, nombre: "Cromañón", lugar: "Les Eyzies (Francia)", lat: 44.94, lon: 1.01,
      antiguedad: "c. 40.000 años",
      conceptos: ["Paleolítico Superior", "Humanos modernos"],
      sintesis: "El abrigo de Cro-Magnon dio nombre a los primeros humanos modernos de Europa, asociados a herramientas microlíticas y a un arte rupestre y mueble abundante.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "57-58",
      pensar: "¿Por qué el arte se ha usado como marcador de humanidad?"
    },
    {
      id: "c2-chauvet", cap: 2, nombre: "Arte rupestre: Chauvet y Lascaux", lugar: "Ardèche y Dordoña (Francia)", lat: 44.39, lon: 4.42,
      antiguedad: "Paleolítico Superior",
      conceptos: ["Paleolítico Superior", "Arte"],
      sintesis: "Chauvet y Lascaux figuran entre los conjuntos de arte rupestre más importantes de Europa. Sus paredes pobladas de animales plantean preguntas sobre el significado, la técnica y el contexto social de las imágenes.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "58, 60",
      pensar: "¿Qué podemos afirmar con seguridad sobre el significado de una pintura de hace decenas de miles de años?"
    },
    {
      id: "c2-monte-verde", cap: 2, nombre: "Monte Verde", lugar: "Región de Los Lagos (Chile)", lat: -41.5, lon: -73.2,
      antiguedad: "c. 14.500 años (cal.)",
      conceptos: ["Poblamiento de América", "Preclovis"],
      sintesis: "El manual lo presenta como el yacimiento preclovis más sólido: presencia humana en Sudamérica hace unos 12.500 años, compatible con una ruta costera.",
      estudio: { quien: "Tom Dillehay", anio: "2000" }, p: "58-59",
      pensar: "¿Por qué la cronología del poblamiento americano ha sido tan discutida?",
      actualizacion: {
        texto: "Las dataciones calibradas sitúan Monte Verde II en torno a 14.500 años. Las huellas de White Sands (Nuevo México), de hace unos 23.000-21.000 años, han reabierto el debate sobre la llegada a América.",
        fuentes: [
          { cita: "Dillehay, T. D. et al. (2008). Monte Verde: Seaweed, food, medicine, and the peopling of South America. Science, 320(5877), 784-786.", doi: "10.1126/science.1156533" },
          { cita: "Bennett, M. R. et al. (2021). Evidence of humans in North America during the Last Glacial Maximum. Science, 373(6562), 1528-1531.", doi: "10.1126/science.abg7586" }
        ]
      }
    },
    {
      id: "c2-clovis", cap: 2, nombre: "Cultura Clovis", lugar: "Sudoeste de EE. UU.", lat: 34.28, lon: -103.33, aprox: true,
      antiguedad: "c. 11.000 años (radiocarbono, según el manual)",
      conceptos: ["Poblamiento de América"],
      sintesis: "Población definida por sus puntas de proyectil acanaladas. Durante décadas se consideró la primera cultura de América; los yacimientos preclovis cuestionan hoy ese modelo.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "58-59",
      pensar: "¿Qué ocurre con un modelo científico cuando aparecen datos que no encajan?",
      critica: "Marcador situado en Blackwater Draw (Nuevo México), yacimiento epónimo; el manual solo indica «sudoeste de Estados Unidos»."
    },
    {
      id: "c2-abu-hureyra", cap: 2, nombre: "Abu Hureyra", lugar: "Valle del Éufrates (Siria)", lat: 35.87, lon: 38.4,
      antiguedad: "Transición al Neolítico",
      conceptos: ["Revolución neolítica", "Creciente Fértil"],
      sintesis: "Uno de los yacimientos del Creciente Fértil que el manual sitúa en su mapa del Neolítico de Oriente Medio, región donde se domesticaron por primera vez trigo, centeno, cebada, ovejas, cabras, vacas y cerdos.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "61",
      pensar: "¿Es adecuado hablar de «revolución» para un proceso que duró milenios?",
      critica: "El yacimiento quedó sumergido por el embalse de Tabqa en los años setenta. El manual advierte también del daño por guerra y saqueo al patrimonio de la región."
    },
    {
      id: "c2-catalhoyuk", cap: 2, nombre: "Çatalhöyük", lugar: "Anatolia central (Turquía)", lat: 37.67, lon: 32.83,
      antiguedad: "c. 7000 AEC",
      conceptos: ["Neolítico", "Asentamiento"],
      sintesis: "Gran asentamiento neolítico descubierto en 1958, del que solo se ha excavado una pequeña parte del tell. Es clave para entender la vida en comunidades agrícolas densas.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "62",
      pensar: "¿Qué nos dice la arquitectura doméstica sobre la organización social?"
    },
    {
      id: "c2-stonehenge", cap: 2, nombre: "Stonehenge", lugar: "Wiltshire (Inglaterra)", lat: 51.18, lon: -1.83,
      antiguedad: "Neolítico final",
      conceptos: ["Neolítico", "Monumento ceremonial"],
      sintesis: "El crómlech neolítico más conocido, interpretado como lugar ceremonial y, según evidencias recientes en el manual, también funerario. Ilustra las diferencias de estatus y las ceremonias colectivas del final del Neolítico europeo.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "63",
      pensar: "¿Qué tipo de organización social exige levantar un monumento así?"
    },
    {
      id: "c2-cahokia", cap: 2, nombre: "Cahokia", lugar: "Illinois (EE. UU.)", lat: 38.66, lon: -90.06,
      antiguedad: "c. 1000 EC",
      conceptos: ["Cultura del Mississippi", "Complejidad social"],
      sintesis: "En la confluencia del Mississippi, el Missouri y el Ohio, Cahokia controló rutas comerciales y alcanzó gran relevancia regional hacia el año 1000. Ocupaba más de 33 km² y reunía a varios miles de personas.",
      estudio: { quien: "Timothy Pauketat", anio: "2004" }, p: "67",
      pensar: "¿Por qué las grandes ciudades indígenas de Norteamérica son tan poco conocidas fuera de la especialidad?"
    },

    /* ------------------------- CAPÍTULO 3 ------------------------- */
    {
      id: "c3-iroqueses", cap: 3, nombre: "Morgan y los iroqueses", lugar: "Rochester (Nueva York)", lat: 43.16, lon: -77.61,
      conceptos: ["Observación directa", "Evolucionismo"],
      sintesis: "Lewis Henry Morgan, abogado de Rochester, trató durante años con los iroqueses. Su experiencia directa mostró que sus costumbres tenían sentido y desmontó la imagen de «salvajes peligrosos», aunque su marco teórico siguió siendo evolucionista.",
      estudio: { quien: "Lewis Henry Morgan", anio: "s. XIX" }, p: "72-73",
      pensar: "¿Puede un investigador cambiar los prejuicios de su época sin abandonar del todo su marco teórico?"
    },
    {
      id: "c3-andaman", cap: 3, nombre: "Antropología de varanda", lugar: "Islas Andamán (India)", lat: 11.7, lon: 92.7,
      conceptos: ["Antropología de varanda", "Colonialismo"],
      sintesis: "A principios del siglo XX, Radcliffe-Brown trabajó con una población andamanesa diezmada por las enfermedades y la violencia coloniales, entrevistando a quienes llamaba a su porche. Es el ejemplo clásico de una antropología cercana, pero no convivencial.",
      estudio: { quien: "A. R. Radcliffe-Brown", anio: "c. 1906-1908" }, p: "72",
      pensar: "¿Qué datos no puede obtener quien no convive con las personas que estudia?",
      critica: "El manual reproduce una fotografía de una muchacha con el cráneo de su hermana, y a la vez señala que los andamaneses no desean que esos restos se estudien ni se expongan. Conviene debatir esa tensión."
    },
    {
      id: "c3-trobriand", cap: 3, nombre: "Malinowski y Weiner", lugar: "Kiriwina, islas Trobriand (Papúa Nueva Guinea)", lat: -8.55, lon: 151.08,
      conceptos: ["Observación participante", "Kula", "Reestudio"],
      sintesis: "Durante la Primera Guerra Mundial, Malinowski vivió dos años entre los trobriandeses, aprendió la lengua y describió el kula, red de intercambio masculino de collares y brazaletes. Medio siglo después, Annette Weiner encontró lo que él no vio: la riqueza femenina de fardos de hojas de plátano y faldas.",
      estudio: { quien: "Bronislaw Malinowski / Annette Weiner", anio: "1915-1918 / 1976" }, p: "73, 76, 78-79",
      pensar: "¿Qué otras «mitades» invisibles puede ocultar una etnografía?",
      critica: "La filiación trobriandesa es matrilineal: madres e hijas forman el núcleo de los grupos corresidentes."
    },
    {
      id: "c3-kodaira", cap: 3, nombre: "Kodaira y el furusato", lugar: "Kodaira, Tokio (Japón)", lat: 35.73, lon: 139.48,
      conceptos: ["Selección del sitio", "Antropología de la memoria", "Análisis cualitativo"],
      sintesis: "Jennifer Robertson eligió Kodaira por la disponibilidad de vivienda, aunque había crecido allí. Su análisis cualitativo, inspirado en la «condensación» de Gertrude Stein, hizo emerger un tema dominante: el furusato, la nostalgia del viejo pueblo.",
      estudio: { quien: "Jennifer Robertson", anio: "1991" }, p: "77, 90, 92",
      pensar: "¿Qué ventajas e inconvenientes tiene investigar en un lugar que conoces desde la infancia?"
    },
    {
      id: "c3-damasco", cap: 3, nombre: "¿Antropóloga o espía?", lugar: "Damasco (Siria)", lat: 33.51, lon: 36.29,
      conceptos: ["Rapport", "Rol del investigador"],
      sintesis: "Christa Salamandra estudiaba cine, cafés y moda en Damasco, donde no había tradición antropológica. Sus interlocutores concluyeron que era una espía. Aun así completó su investigación sobre la cultura popular de la ciudad.",
      estudio: { quien: "Christa Salamandra", anio: "2004" }, p: "81",
      pensar: "¿Cómo explicarías tu investigación a alguien que nunca ha oído hablar de antropología?"
    },
    {
      id: "c3-pakistan", cap: 3, nombre: "Los papeles de Kurin", lugar: "Punyab (Pakistán)", lat: 31.0, lon: 72.5, aprox: true,
      conceptos: ["Rapport", "Rol del investigador"],
      sintesis: "Richard Kurin fue tomado sucesivamente por espía, profesor de inglés, médico y abogado, hasta que los vecinos decidieron que descendía de un clan local por el parecido entre Kurin y karan.",
      estudio: { quien: "Richard Kurin", anio: "1980" }, p: "80",
      pensar: "¿Qué dicen los papeles atribuidos al investigador sobre la experiencia local con los forasteros?"
    },
    {
      id: "c3-tokio", cap: 3, nombre: "Un regalo de 50.000 yenes", lugar: "Japón", lat: 35.68, lon: 139.76, aprox: true,
      conceptos: ["Regalos e intercambio", "Reciprocidad"],
      sintesis: "Matthews Hamabata recibió de una familia empresaria una caja de bombones con dinero dentro y se sintió ofendido. Le explicaron que el regalo proponía una relación duradera y que debía corresponder más tarde con un presente de valor adecuado a su estatus.",
      estudio: { quien: "Matthews Hamabata", anio: "1990" }, p: "81-82",
      pensar: "¿Qué normas implícitas rigen los regalos en tu entorno?"
    },
    {
      id: "c3-kioto", cap: 3, nombre: "Formarse como geisha", lugar: "Kioto (Japón)", lat: 35.0, lon: 135.77,
      conceptos: ["Género y trabajo de campo", "Microculturas"],
      sintesis: "Liza Dalby vivió con geishas de Kioto y se formó como una de ellas, una investigación imposible para un varón. El género del investigador abre y cierra puertas en el campo.",
      estudio: { quien: "Liza Dalby", anio: "1998" }, p: "82-83",
      pensar: "¿A qué espacios no tendrías acceso tú por tu género, edad o clase?"
    },
    {
      id: "c3-jamaica", cap: 3, nombre: "Un hombre «grande y marrón»", lugar: "Haversham (Jamaica)", lat: 18.15, lon: -77.3, aprox: true,
      conceptos: ["«Raza» y estatus", "Microculturas"],
      sintesis: "Tony Whitehead, afroamericano de origen humilde, esperaba un rapport inmediato. Los vecinos lo llamaron «grande», «marrón» y «de habla bonita»: categorías de estatus que lo situaban por encima de ellos.",
      estudio: { quien: "Tony Whitehead", anio: "1986" }, p: "83",
      pensar: "¿Cómo se combinan color de piel, clase y forma de hablar en las categorías de tu sociedad?"
    },
    {
      id: "c3-asturias", cap: 3, nombre: "El «aparato» en las brañas", lugar: "Brañas del occidente de Asturias (España)", lat: 43.3, lon: -6.4, aprox: true,
      conceptos: ["Grabaciones", "Ética", "Consentimiento"],
      sintesis: "María Cátedra investigó el suicidio en el norte rural de España tras toparse con un caso durante una estancia exploratoria. Cuando en una braña le pidieron oír las canciones grabadas en otra, se negó porque no tenía permiso, y esa decisión le ganó la confianza de ambas.",
      estudio: { quien: "María Cátedra", anio: "1992" }, p: "75, 91",
      pensar: "¿Qué harías si te pidieran compartir una grabación hecha a otras personas?",
      critica: "Único caso español de la Parte I. Su etnografía de los vaqueiros de alzada se publicó en castellano como «La muerte y otros mundos» (1988); el manual cita la versión inglesa de 1992."
    },
    {
      id: "c3-islandia", cap: 3, nombre: "El festival de los carneros", lugar: "Islandia", lat: 64.9, lon: -19.0, aprox: true,
      conceptos: ["Fotografía", "Género"],
      sintesis: "Kirsten Hastrup fotografió una exhibición masculina de carneros cargada de humor sexual. Al revelar las fotos comprobó lo poco que habían captado del acontecimiento: la imagen no sustituye a la nota de campo.",
      estudio: { quien: "Kirsten Hastrup", anio: "1992" }, p: "91-92",
      pensar: "¿Qué se pierde al documentar con la cámara en lugar de con el cuaderno, y qué se gana?"
    },
    {
      id: "c3-baffin", cap: 3, nombre: "Topónimos inuit", lugar: "Isla de Baffin (Nunavut, Canadá)", lat: 63.75, lon: -68.52,
      conceptos: ["Conocimiento indígena", "Toponimia", "Relativismo cultural"],
      sintesis: "Aquí estudió Franz Boas a los inuit antes de formular el relativismo cultural. Más de un siglo después, el proyecto de toponimia del sur de Baffin combinó talleres con mapas, entrevistas a mayores, viajes a los lugares y una base de datos para conservar el saber sobre rutas y clima.",
      estudio: { quien: "Franz Boas / Anne Henshaw", anio: "1883-1884 / 2003-2006" }, p: "14, 88-89",
      pensar: "Dibuja el mapa de tus lugares cotidianos: ¿qué nombres les das y qué significan para ti?"
    },
    {
      id: "c3-kalahari", cap: 3, nombre: "Nisa: una historia de vida", lugar: "Dobe (Botsuana)", lat: -19.8, lon: 21.1,
      conceptos: ["Historia de vida", "Seguridad en el campo"],
      sintesis: "«Nisa», de Marjorie Shostak, es probablemente la historia de vida más leída de la disciplina. Se ha discutido su exactitud, pero su valor está en la visión que la propia Nisa ofrece de su vida. En la misma región, Nancy Howell perdió a un hijo en un accidente, lo que la llevó a estudiar los riesgos del trabajo de campo.",
      estudio: { quien: "Marjorie Shostak / Nancy Howell", anio: "1981 / 1990" }, p: "86-87, 97",
      pensar: "¿Una narración es un dato aunque no sea exacta?"
    },
    {
      id: "c3-sri-lanka", cap: 3, nombre: "Cabellos enredados", lugar: "Sri Lanka", lat: 7.3, lon: 80.9, aprox: true,
      conceptos: ["Historia de vida", "Símbolo"],
      sintesis: "Gananath Obeyesekere analizó las historias de vida de cuatro ascetas cuyos mechones enredados se consideran morada de una deidad. Los interpretó como símbolos de un sufrimiento personal que les confiere una condición sagrada.",
      estudio: { quien: "Gananath Obeyesekere", anio: "1981" }, p: "86, 88",
      pensar: "¿Cómo expresa el peinado la religión, el estado civil o la sexualidad en tu cultura?"
    },
    {
      id: "c3-carolina", cap: 3, nombre: "Espía industrial", lugar: "Oeste de Carolina del Norte (EE. UU.)", lat: 35.92, lon: -82.06, aprox: true,
      conceptos: ["Rapport", "Acceso al campo"],
      sintesis: "Mary Anglin, soltera y del nordeste, investigaba en una planta de mica. Circuló el rumor de que era espía industrial y el propietario acabó prohibiéndole la entrada. Ser compatriota no garantiza la confianza.",
      estudio: { quien: "Mary Anglin", anio: "2002" }, p: "81",
      pensar: "¿Qué ocurre cuando quien controla el acceso al campo te retira su apoyo?"
    },
    {
      id: "c3-harlem", cap: 3, nombre: "En busca de respeto", lugar: "East Harlem (Nueva York)", lat: 40.79, lon: -73.94,
      conceptos: ["Etnografía urbana", "Seguridad en el campo"],
      sintesis: "Philippe Bourgois vivió cinco años en El Barrio estudiando la venta de crack. Su trabajo muestra la riqueza de la observación participante en contextos occidentales y la exposición del investigador a la violencia.",
      estudio: { quien: "Philippe Bourgois", anio: "1995" }, p: "94, 96",
      pensar: "¿Dónde está el límite de riesgo aceptable en una investigación?"
    },
    {
      id: "c3-muncie", cap: 3, nombre: "Etnografía colaborativa", lugar: "Muncie (Indiana)", lat: 40.19, lon: -85.39,
      conceptos: ["Investigación participativa", "Ética"],
      sintesis: "Luke Eric Lassiter reunió a sus estudiantes con miembros de la comunidad afroamericana de Muncie. El resultado fue un libro de autoría compartida y un archivo hoy conservado en la biblioteca.",
      estudio: { quien: "Luke Eric Lassiter", anio: "2004" }, p: "95-96",
      pensar: "¿Por qué el término «informante» resulta hoy problemático?"
    },
    {
      id: "c3-sierra-leona", cap: 3, nombre: "Antropología en zonas de guerra", lugar: "Buedu (Sierra Leona)", lat: 8.27, lon: -10.37,
      conceptos: ["Seguridad en el campo", "Ética"],
      sintesis: "Danny Hoffman combinó entrevistas y observación participante en una Sierra Leona devastada por la guerra. Defiende que la antropología puede explicar causas del conflicto que el periodismo no capta, siempre que se asuman y gestionen los riesgos.",
      estudio: { quien: "Danny Hoffman", anio: "2005" }, p: "96-97",
      pensar: "¿Qué formación necesitaría tu titulación para preparar a alguien para trabajar en un contexto de violencia?"
    }
  ]
});
