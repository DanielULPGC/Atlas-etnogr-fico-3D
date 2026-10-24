/*
 * MÓDULO · PARTE IV · Sistemas simbólicos (capítulos 12-14)
 * Fuente: Miller (2011), pp. 347-440. Redacción propia; las páginas remiten al manual.
 * Mismo esquema que parte-1.js.
 */
ATLAS.registrarModulo({
  id: "parte-4",
  parte: 4,
  titulo: "Sistemas simbólicos",
  capitulos: [
    {
      n: 12,
      titulo: "Comunicación",
      paginas: "349-375",
      preguntas: [
        "¿Cómo se comunican los seres humanos?",
        "¿Cómo se relaciona la comunicación con la diversidad cultural y la desigualdad?",
        "¿Cómo cambian las lenguas?"
      ],
      glosario: [
        { t: "Lengua", d: "Conjunto sistemático de símbolos y signos con significados aprendidos y compartidos; puede ser hablada, signada, escrita o corporal.", p: "350" },
        { t: "Productividad y desplazamiento", d: "Rasgos distintivos del lenguaje humano: crear infinitos mensajes nuevos y comprensibles, y referirse al pasado, al futuro o a lo imaginario.", p: "350-351" },
        { t: "Comunicación no verbal", d: "Lengua de signos, silencio y lenguaje corporal (gestos, posición, modificaciones del cuerpo, vestido, peinado, olores).", p: "353-357" },
        { t: "Modelo cultural de la sordera", d: "Enfoque que entiende la sordera como variación cultural, con una lengua y una comunidad propias, frente al modelo médico que la trata como deficiencia.", p: "353" },
        { t: "Paradoja del observador", d: "Dificultad de registrar el habla natural sin que la presencia del investigador la altere.", p: "357" },
        { t: "Hipótesis de Sapir-Whorf / sociolingüística", d: "La primera sostiene que la lengua configura la cultura y el pensamiento; la segunda, que la cultura y la posición social configuran la lengua.", p: "357-358" },
        { t: "Análisis crítico del discurso", d: "Estudio de las relaciones de poder y desigualdad que se expresan y reproducen en el lenguaje.", p: "358-363" },
        { t: "Brecha digital", d: "Desigualdad social en el acceso a las tecnologías de la información y en la formación para usarlas.", p: "359" },
        { t: "Familia lingüística / protolengua", d: "Conjunto de lenguas descendientes de un antepasado común reconstruido, como el protoindoeuropeo o el protobantú.", p: "365-367" },
        { t: "Lengua global y lengua en peligro", d: "El 96 % de la población habla el 4 % de las lenguas: unas pocas se expanden mientras muchas desaparecen por políticas de asimilación directa o indirecta.", p: "370-373" }
      ],
      recorrido: {
        intro: "Qué hace humano al lenguaje y cómo se entrelaza con el poder: del silencio apache y la jerga kogal a las lenguas que se expanden y las que desaparecen.",
        casos: ["c12-kanzi", "c12-piraha", "c12-apache", "c12-akwesasne", "c12-kogal", "c12-bahasa", "c12-fat-talk", "c12-latinos", "c12-hungria", "c12-pie", "c12-bantu", "c12-sami", "c12-komi"]
      },
      test: [
        { q: "Para los apaches occidentales, el silencio se asocia sobre todo a situaciones de…", o: ["aburrimiento", "incertidumbre y ambigüedad en las relaciones sociales", "falta de inteligencia", "duelo exclusivamente"], c: 1, e: "Encuentros con extraños, cortejo inicial, regresos del internado e insultos (Basso, pp. 355-356)." },
        { q: "Las coletillas del inglés de los mohawk akwesasne expresan…", o: ["indecisión y falta de cooperación", "respeto al oyente, cautela sobre la certeza y reserva ante lo sagrado", "desconocimiento del inglés", "deseo de terminar la conversación"], c: 1, e: "Los médicos anglo las malinterpretaban como indecisión (pp. 362-363)." },
        { q: "La hipótesis de Sapir-Whorf sostiene que…", o: ["la posición social configura la lengua", "la lengua configura la cultura y el pensamiento", "todas las lenguas son iguales", "la escritura precede al habla"], c: 1, e: "La sociolingüística propone la relación inversa; muchos antropólogos combinan ambos enfoques (p. 357)." },
        { q: "Según el manual, el protobantú se originó en…", o: ["África oriental", "la actual frontera de Camerún y Nigeria", "Sudáfrica", "el valle del Nilo"], c: 1, e: "Unas 600 lenguas derivan de él; su expansión comenzó hace unos 5.000 años (pp. 366-367)." },
        { q: "El caso komi ilustra…", o: ["una revitalización lingüística exitosa", "la asimilación lingüística por migración masiva de hablantes de ruso y escolarización forzosa", "el bilingüismo sin pérdida", "la invención de una escritura"], c: 1, e: "Su lengua quedó tan influida por el ruso que puede haber desaparecido (p. 371)." }
      ]
    },
    {
      n: 13,
      titulo: "Religión",
      paginas: "377-409",
      preguntas: [
        "¿Qué es la religión y cuáles son sus rasgos fundamentales?",
        "¿Cómo ejemplifican las religiones del mundo la globalización y la relocalización?",
        "¿Cuáles son los aspectos importantes del cambio religioso actual?"
      ],
      glosario: [
        { t: "Magia / religión", d: "Los primeros antropólogos las oponían en un esquema evolucionista; Frazer distinguió la magia imitativa (ley de semejanza) y la contaminante (ley de contacto).", p: "379-380" },
        { t: "Animismo", d: "Creencia en almas o «dobles»; para Tylor, el origen de la religión.", p: "380" },
        { t: "Mito / doctrina", d: "El mito es una narración con seres sobrenaturales; la doctrina, una declaración formal y escrita de creencias, próxima a la ley.", p: "380-382" },
        { t: "Lugar sagrado", d: "Espacio dotado de significado religioso, con o sin marcas permanentes.", p: "383-384" },
        { t: "Rito de paso", d: "Ritual de cambio de estatus en tres fases: separación, liminalidad y reagregación (van Gennep, Turner).", p: "386-388" },
        { t: "Peregrinación", d: "Viaje de ida y vuelta a un lugar sagrado, que Turner analizó con las fases del rito de paso.", p: "388" },
        { t: "Ritual de inversión", d: "Ritual en que se suspenden o invierten temporalmente las normas cotidianas, como el carnaval.", p: "388-389" },
        { t: "Especialistas religiosos", d: "Chamanes, sacerdotes y otras figuras; en los estados suelen estar jerarquizados y tener poder secular.", p: "390-392" },
        { t: "Religiones reveladas", d: "Hinduismo, budismo, judaísmo, cristianismo e islam: basadas en textos y con fieles en todo el mundo.", p: "392-402" },
        { t: "Sincretismo / movimiento de revitalización", d: "Mezcla de elementos religiosos de distinto origen; movimiento que busca recuperar una religión amenazada o adoptar nuevas creencias, a menudo guiado por un profeta.", p: "403-406" }
      ],
      recorrido: {
        intro: "Mitos, lugares sagrados, rituales y especialistas; religiones que viajan con los migrantes y movimientos que responden al colonialismo.",
        casos: ["c13-grecia", "c13-klamath", "c13-tsodillo", "c13-sami", "c13-manchester", "c13-hopi", "c13-hindmarsh", "c13-bemba", "c13-bosa", "c13-kotel", "c13-hui", "c13-oyotunji", "c13-ghost-dance"]
      },
      test: [
        { q: "Según el análisis materialista de 28 mitos klamath y modoc, los mitos…", o: ["solo entretienen", "guardan conocimiento sobre subsistencia, crisis y conservación del entorno", "son traducciones de la Biblia", "explican el origen de la escritura"], c: 1, e: "Amenazas a la subsistencia y formas de afrontarlas son temas recurrentes (p. 382)." },
        { q: "El khatam quran de las mujeres paquistaníes de Manchester muestra que un lugar sagrado…", o: ["requiere siempre un templo", "puede crearse temporalmente en el hogar", "es exclusivamente masculino", "no existe en el islam"], c: 1, e: "Es un ritual «portátil», útil para la adaptación migrante (p. 383)." },
        { q: "Las tres fases del rito de paso son…", o: ["nacimiento, matrimonio y muerte", "separación, liminalidad y reagregación", "oración, sacrificio y fiesta", "mito, doctrina y ritual"], c: 1, e: "Turner las aplicó también a la peregrinación (pp. 387-388)." },
        { q: "El carnaval de Bosa (Cerdeña) es un ejemplo de…", o: ["ritual de inversión", "peregrinación", "sacrificio", "doctrina"], c: 0, e: "Se relajan las normas y se critica la actualidad antes de la cuaresma (pp. 388-389)." },
        { q: "La Danza de los Espíritus es un ejemplo de…", o: ["religión revelada", "movimiento de revitalización ante la invasión colonial", "ritual de inversión", "magia contaminante"], c: 1, e: "Profetas paiute anunciaron la destrucción y renovación del mundo (p. 405)." }
      ]
    },
    {
      n: 14,
      titulo: "Cultura expresiva",
      paginas: "411-440",
      preguntas: [
        "¿Cómo se expresa la cultura a través del arte?",
        "¿Qué nos revelan de la cultura el ocio y el juego?",
        "¿Cómo está cambiando la cultura expresiva?"
      ],
      glosario: [
        { t: "Cultura expresiva", d: "Conductas e ideas vinculadas al arte, el ocio y el juego.", p: "412" },
        { t: "Arte (definición antropológica)", d: "Definición amplia que reconoce que todas las culturas tienen formas artísticas y criterios propios de calidad.", p: "412-416" },
        { t: "Etnoestética", d: "Criterios culturales sobre lo que se considera bello o bien hecho.", p: "413-414" },
        { t: "Museos y repatriación", d: "Los museos etnográficos nacieron de intereses científicos y coloniales; hoy muchos pueblos reclaman objetos y restos como patrimonio propio.", p: "423-426" },
        { t: "Juego y ocio", d: "Actividades no utilitarias que funcionan como microcosmos culturales y suelen ligarse a intereses económicos y políticos.", p: "426-428" },
        { t: "Antropología del turismo", d: "Estudio de los efectos del turismo en las culturas y ecosistemas locales y de la representación de los anfitriones.", p: "428-430" },
        { t: "Resistencia cultural y sincretismo", d: "Respuestas al contacto: rechazar, adoptar o adaptar elementos ajenos, a veces recreándolos por completo.", p: "430-434" },
        { t: "Patrimonio cultural", d: "Bienes y prácticas que una sociedad valora y protege; su gestión puede ser una vía de desarrollo.", p: "434-437" }
      ],
      recorrido: {
        intro: "Arte, juego, turismo y patrimonio: quién define qué es arte, quién se beneficia del turismo y cómo las formas expresivas cambian, se pierden o renacen.",
        casos: ["c14-maskit", "c14-japon", "c14-ucrania", "c14-amboseli", "c14-guanacaste", "c14-cricket", "c14-vietnam", "c14-estambul", "c14-gullah", "c14-hawai", "c14-banco-mundial"]
      },
      test: [
        { q: "El estudio de Shenhav-Keller en la tienda Maskit analiza los souvenirs como…", o: ["meros objetos de consumo", "«textos» que expresan cómo una sociedad se representa y a quién invisibiliza", "falsificaciones", "obras de arte únicas"], c: 1, e: "Revela actitudes ante el pasado, la religión y los árabes israelíes y palestinos (p. 417)." },
        { q: "El contraste entre Amboseli y Guanacaste muestra que el turismo beneficia más a la población local cuando…", o: ["se la excluye del parque", "participa desde la planificación, la gestión y los beneficios", "se privatiza la tierra", "se prohíbe el turismo"], c: 1, e: "Los beneficios prometidos a los masái apenas llegaron (pp. 429-430)." },
        { q: "El críquet trobriandés es un ejemplo de…", o: ["adopción literal de un deporte británico", "sincretismo: el juego se fusionó con la competencia entre grandes hombres", "prohibición colonial", "deporte olímpico"], c: 1, e: "Los partidos van seguidos de fiestas redistributivas (p. 430)." },
        { q: "El auge de la danza del vientre entre la clase media de Estambul se describe como…", o: ["un retorno religioso", "un proceso de gentrificación impulsado en parte por el turismo", "una prohibición estatal", "una práctica en extinción"], c: 1, e: "Una actividad antes estigmatizada se «aburguesa» (p. 431)." },
        { q: "La propuesta de Michael Cernea al Banco Mundial consiste en…", o: ["mantener solo el principio de «no hacer daño»", "financiar activamente el patrimonio cultural como vía de reducción de la pobreza", "dejar el patrimonio a la UNESCO", "privatizar los sitios históricos"], c: 1, e: "Quiere pasar de una norma pasiva a una estrategia activa (p. 436)." }
      ]
    }
  ],

  casos: [
    /* ------------------------- CAPÍTULO 12 ------------------------- */
    {
      id: "c12-kanzi", cap: 12, nombre: "Kanzi", lugar: "Des Moines, Iowa (EE. UU.)", lat: 41.58, lon: -93.62,
      conceptos: ["Productividad", "Desplazamiento"],
      sintesis: "El bonobo más famoso comprendía buena parte de lo que le decían y respondía combinando símbolos en un tablero. El caso plantea si la productividad y el desplazamiento son exclusivos del lenguaje humano: algunos bonobos criados con humanos muestran indicios de ambos.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "351",
      pensar: "¿Qué criterio usarías para decidir si un animal «tiene lenguaje»?",
      actualizacion: { texto: "Kanzi murió en marzo de 2025, a los 44 años. El Great Ape Trust que cita el manual se denomina hoy Ape Cognition and Conservation Initiative.", fuentes: [] }
    },
    {
      id: "c12-piraha", cap: 12, nombre: "La lengua pirahã", lugar: "Río Maici, Amazonas (Brasil)", lat: -7.3, lon: -62.0, aprox: true,
      conceptos: ["Productividad", "Desplazamiento", "Universales lingüísticos"],
      sintesis: "Unos 350 cazadores-recolectores con tres pronombres, sin tiempo pasado, sin términos de color ni números y, según Everett, sin oraciones subordinadas. El caso cuestiona la universalidad de ciertos rasgos gramaticales. Everett ayudó además a demarcar su reserva, legalizada en 1994.",
      estudio: { quien: "Daniel Everett", anio: "2005, 2008" }, p: "351-352",
      pensar: "¿Puede una sola lengua desmentir un supuesto universal?",
      actualizacion: {
        texto: "Las tesis de Everett, en especial la ausencia de recursividad, han sido muy discutidas y siguen siendo objeto de controversia.",
        fuentes: [
          { cita: "Everett, D. L. (2005). Cultural constraints on grammar and cognition in Pirahã. Current Anthropology, 46(4), 621-646.", doi: "10.1086/431525" },
          { cita: "Nevins, A., Pesetsky, D. y Rodrigues, C. (2009). Pirahã exceptionality: A reassessment. Language, 85(2), 355-404.", doi: "10.1353/lan.0.0107" }
        ]
      }
    },
    {
      id: "c12-apache", cap: 12, nombre: "Saber callar", lugar: "Reserva apache occidental (Arizona)", lat: 33.8, lon: -110.2, aprox: true,
      conceptos: ["Silencio", "Comunicación no verbal", "Etnocentrismo"],
      sintesis: "Los apaches occidentales guardan silencio ante extraños, en el cortejo inicial, al reencontrar a los hijos que vuelven del internado y ante un insulto. Lo común es la incertidumbre de la relación. Los profesionales blancos lo malinterpretaban como falta de emoción o de inteligencia.",
      estudio: { quien: "Keith Basso", anio: "1972 [1970]" }, p: "355-356",
      pensar: "¿En qué situaciones el silencio es lo correcto en tu cultura?"
    },
    {
      id: "c12-akwesasne", cap: 12, nombre: "Coletillas mohawk", lugar: "Akwesasne (Nueva York, Ontario y Quebec)", lat: 44.98, lon: -74.65,
      conceptos: ["Análisis del discurso", "Comunicación médica"],
      sintesis: "Las coletillas del inglés de los akwesasne indican cautela ante la certeza, respeto al oyente y reserva ante lo sagrado. Los médicos anglo las interpretaban como indecisión o falta de colaboración, con malentendidos en la consulta.",
      estudio: { quien: "Wolfson et al.", anio: "1995" }, p: "362-363",
      pensar: "¿Qué rasgos de tu forma de hablar podrían malinterpretarse en otra cultura?"
    },
    {
      id: "c12-kogal", cap: 12, nombre: "Las kogals", lugar: "Shibuya, Tokio (Japón)", lat: 35.66, lon: 139.7,
      conceptos: ["Lengua y género", "Resistencia"],
      sintesis: "Frente a un habla femenina cortés, marcada por el prefijo honorífico o-, las kogals de 14 a 22 años crean jerga, emoticonos y códigos de mensajería, usan formas masculinas y hablan abiertamente de sexo. Su estilo resquebraja el orden de género.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "361",
      pensar: "¿Qué jergas juveniles de tu entorno desafían normas de género o generación?",
      actualizacion: { texto: "Fenómeno de los años noventa y dos mil; el estilo kogal ha evolucionado y en buena parte ha desaparecido. Útil como caso histórico.", fuentes: [] }
    },
    {
      id: "c12-bahasa", cap: 12, nombre: "Bahasa gay", lugar: "Indonesia", lat: -6.2, lon: 106.8, aprox: true,
      conceptos: ["Lengua y sexualidad", "Agencia"],
      sintesis: "En un país de unas 700 lenguas, los hombres gais han creado una variante muy estandarizada del indonesio que juega con sonidos y sufijos y da mordacidad política a la vida convencional. Parte de su vocabulario pasa a la lengua general.",
      estudio: { quien: "Tom Boellstorff", anio: "2004" }, p: "362",
      pensar: "¿Qué palabras de grupos marginados han pasado al habla común en español?"
    },
    {
      id: "c12-fat-talk", cap: 12, nombre: "«El tema de los kilos»", lugar: "Sudoeste de EE. UU.", lat: 32.22, lon: -110.97, aprox: true,
      conceptos: ["Lengua y género", "Cuerpo"],
      sintesis: "Entre 253 adolescentes, las conversaciones que empiezan con «estoy demasiado gorda» las inician chicas de peso normal y no sirven para hablar de peso: buscan aceptación del grupo o aliviar la culpa antes de comer.",
      estudio: { quien: "Mimi Nichter", anio: "2000" }, p: "361-362",
      pensar: "¿Qué funciones sociales cumplen frases rituales de tu grupo?"
    },
    {
      id: "c12-latinos", cap: 12, nombre: "Publicidad para «hispanos»", lugar: "Nueva York (EE. UU.)", lat: 40.75, lon: -73.99, aprox: true,
      conceptos: ["Antropología de los medios", "Identidad"],
      sintesis: "Las agencias tratan a la población latina como un mercado unificado cuyo rasgo central sería la familia, y usan un español «estándar» sin marcas regionales. Así pueden contribuir a homogeneizar identidades muy diversas.",
      estudio: { quien: "Arlene Dávila", anio: "2002" }, p: "358-359",
      pensar: "¿Qué estereotipos culturales reconoces en la publicidad que te llega?"
    },
    {
      id: "c12-hungria", cap: 12, nombre: "Telecentros rurales", lugar: "Hungría", lat: 47.5, lon: 19.04,
      conceptos: ["Brecha digital"],
      sintesis: "La Asociación Húngara de Telecentros llevó ordenadores con internet a talleres o casas de pueblos de menos de 5.000 habitantes para reducir la brecha con la Unión Europea. Surgieron también conflictos por el acceso y el control de la información.",
      estudio: { quien: "Wormald", anio: "2005" }, p: "359",
      pensar: "¿Dónde está hoy la brecha digital en tu entorno?"
    },
    {
      id: "c12-pie", cap: 12, nombre: "El protoindoeuropeo", lugar: "Norte del mar Negro (hipótesis)", lat: 47.5, lon: 37.0, aprox: true,
      conceptos: ["Familia lingüística", "Protolengua"],
      sintesis: "Reconstruido por comparación de lenguas euroasiáticas, se habría originado al norte o al sur del mar Negro y se habría expandido hace entre 8.000 y 6.000 años por Europa y Asia.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "365-366",
      pensar: "¿Qué puede decirnos una lengua reconstruida sobre la historia de los pueblos?",
      actualizacion: {
        texto: "Los estudios de ADN antiguo han reforzado la hipótesis de una expansión desde las estepas del norte del mar Negro hacia Europa, aunque el debate sobre el origen último continúa.",
        fuentes: [{ cita: "Haak, W. et al. (2015). Massive migration from the steppe was a source for Indo-European languages in Europe. Nature, 522, 207-211.", doi: "10.1038/nature14317" }]
      }
    },
    {
      id: "c12-bantu", cap: 12, nombre: "La expansión bantú", lugar: "Frontera de Camerún y Nigeria", lat: 6.5, lon: 10.5, aprox: true,
      conceptos: ["Familia lingüística", "Migración"],
      sintesis: "Del protobantú, originado en el oeste, derivan unas 600 lenguas. Su expansión, iniciada hace unos 5.000 años con agricultores que avanzaron hacia tierras de cazadores-recolectores, pudo eliminar lenguas locales, pero también absorbió elementos de ellas.",
      estudio: { quien: "Afolayan", anio: "2000" }, p: "366-367",
      pensar: "¿Cómo se rastrea una migración de hace milenios a través de las lenguas?"
    },
    {
      id: "c12-sami", cap: 12, nombre: "Los samis", lugar: "Sápmi (Noruega, Suecia, Finlandia, Rusia)", lat: 69.0, lon: 23.0,
      conceptos: ["Pueblos indígenas", "Lenguas en peligro"],
      sintesis: "Unos 100.000 indígenas del «cuarto mundo». El pastoreo de renos, hoy especializado, era un sistema familiar igualitario. Han sufrido pérdida de tierras, represión lingüística, la lluvia radiactiva de Chernóbil, presas y maniobras militares.",
      estudio: { quien: "Gaski; Paine; Culturama", anio: "1993; 2004" }, p: "368-369",
      pensar: "¿Qué lenguas minorizadas de tu entorno conoces y qué políticas las afectan?"
    },
    {
      id: "c12-komi", cap: 12, nombre: "Los komi", lugar: "Río Pechora (Rusia)", lat: 64.0, lon: 55.0, aprox: true,
      conceptos: ["Asimilación lingüística"],
      sintesis: "Desde los años treinta, la llegada masiva de hablantes de ruso, la quema de libros en lenguas locales y los internados forzosos llevaron a los komi al bilingüismo y a una lengua tan influida por el ruso que puede haber desaparecido.",
      estudio: { quien: "Belikov", anio: "1994" }, p: "370-371",
      pensar: "¿Qué tienen en común las políticas de internado en la URSS, EE. UU., Canadá y Australia?",
      critica: "El manual remite al Mapa 12.7 (Sápmi) para el río Pechora; la zona komi está en el Mapa 12.8."
    },

    /* ------------------------- CAPÍTULO 13 ------------------------- */
    {
      id: "c13-grecia", cap: 13, nombre: "Caminar sobre el fuego", lugar: "Norte rural de Grecia", lat: 40.75, lon: 23.07, aprox: true,
      conceptos: ["Ritual", "Antropología de la religión"],
      sintesis: "Loring Danforth estudió rituales en los que los fieles caminan sobre brasas protegidos, dicen, por la fe en un santo. En Estados Unidos conoció la misma práctica en talleres New Age y llegó a hacerlo él mismo.",
      estudio: { quien: "Loring Danforth", anio: "1989" }, p: "378",
      pensar: "¿Debe el antropólogo participar en los rituales que estudia?"
    },
    {
      id: "c13-klamath", cap: 13, nombre: "Mitos de supervivencia", lugar: "Región klamath y modoc (Oregón y California)", lat: 42.2, lon: -121.8,
      conceptos: ["Mito", "Materialismo cultural"],
      sintesis: "El análisis de 28 mitos klamath y modoc muestra que las amenazas a la subsistencia son un tema recurrente, junto con las formas de afrontarlas: caza, pesca, almacenamiento, movilidad, reciprocidad y ayuda sobrenatural.",
      estudio: { quien: "Sobel y Bettles", anio: "2000" }, p: "382",
      pensar: "¿Qué saber práctico transmiten los cuentos tradicionales de tu entorno?"
    },
    {
      id: "c13-tsodillo", cap: 13, nombre: "Tsodillo Hills", lugar: "Noroeste de Botsuana", lat: -18.75, lon: 21.73,
      conceptos: ["Lugar sagrado", "Arte rupestre"],
      sintesis: "Pinturas san, algunas de hacia el 800 a. n. e., en colinas sagradas porque allí van a dormir espíritus importantes.",
      estudio: { quien: "Ejemplo del manual (fotografía)", anio: "" }, p: "381",
      pensar: "¿Cómo conciliar turismo patrimonial y sacralidad?",
      actualizacion: { texto: "Tsodillo fue inscrito en la Lista del Patrimonio Mundial de la UNESCO en 2001.", fuentes: [] }
    },
    {
      id: "c13-sami", cap: 13, nombre: "Lugares sagrados samis", lugar: "Laponia sueca", lat: 67.9, lon: 18.5, aprox: true,
      conceptos: ["Lugar sagrado"],
      sintesis: "Formaciones rocosas que evocan personas o animales, a menudo sin marcas, donde se ofrecían sacrificios hasta que la presión misionera los suprimió. Muchos samis conocen su ubicación, pero no la muestran a los forasteros.",
      estudio: { quien: "Inga-Maria Mulk", anio: "1994" }, p: "383",
      pensar: "¿Tiene derecho una comunidad a mantener en secreto sus lugares sagrados?"
    },
    {
      id: "c13-manchester", cap: 13, nombre: "Un ritual portátil", lugar: "Manchester (Inglaterra)", lat: 53.48, lon: -2.24,
      conceptos: ["Lugar sagrado", "Migración", "Islam"],
      sintesis: "Mujeres paquistaníes se reúnen en casa para leer el Corán completo y compartir una comida ritual. El khatam quran convierte el hogar en espacio sagrado y es muy útil para la adaptación migrante: solo requiere un grupo y el libro.",
      estudio: { quien: "Pnina Werbner", anio: "1988" }, p: "383",
      pensar: "¿Qué rituales de tu familia pueden celebrarse en cualquier lugar?"
    },
    {
      id: "c13-hopi", cap: 13, nombre: "Las águilas de los hopi", lugar: "Reserva hopi y Wupatki (Arizona)", lat: 35.6, lon: -110.9, aprox: true,
      conceptos: ["Ritual", "Conservación", "Derechos indígenas"],
      sintesis: "Los hopi crían aguiluchos y los sacrifican en su ritual más importante para que lleven mensajes a los antepasados. Las leyes de protección del águila chocaban con esa práctica; en 1994 se introdujeron reformas y un depósito federal de plumas, insuficiente para la demanda.",
      estudio: { quien: "Fenstemaker", anio: "2007" }, p: "384",
      pensar: "¿Cómo se resuelve un conflicto entre conservación de especies y libertad religiosa?"
    },
    {
      id: "c13-hindmarsh", cap: 13, nombre: "Kumarangk / Hindmarsh Island", lugar: "Australia Meridional", lat: -35.52, lon: 138.82,
      conceptos: ["Lugar sagrado", "Antropología aplicada", "Género"],
      sintesis: "Mujeres ngarrindjeri se opusieron a un puente sobre aguas sagradas, apoyándose en un conocimiento secreto transmitido de madres a hijas. La antropóloga Diane Bell actuó como testigo experta con informes lo bastante generales para respetar el secreto.",
      estudio: { quien: "Diane Bell", anio: "1998" }, p: "387",
      pensar: "¿Cómo probar ante un tribunal un saber que debe permanecer secreto?",
      critica: "El manual afirma que el proyecto se canceló en 1999, pero el puente se terminó en 2001. Ese mismo año, el Tribunal Federal (Chapman v Luminis) no consideró probado que el conocimiento de las mujeres fuera inventado, en contra de la Comisión Real de 1995. El Gobierno de Australia Meridional reconoció sus reclamaciones en 2010."
    },
    {
      id: "c13-bemba", cap: 13, nombre: "Iniciación de las chicas bemba", lugar: "Norte de Zambia", lat: -10.2, lon: 31.2, aprox: true,
      conceptos: ["Rito de paso", "Género y trabajo"],
      sintesis: "Durante la iniciación, una chica aprende a distinguir 40 tipos de setas comestibles y venenosas. Donde el trabajo femenino es valioso, los ritos de pubertad de las chicas son complejos; donde no lo es, la menarquia pasa sin ceremonia.",
      estudio: { quien: "Ejemplo del manual; Judith Brown", anio: "1978" }, p: "388",
      pensar: "¿Qué rituales de paso existen hoy para las chicas y los chicos en tu sociedad?",
      critica: "La etnografía clásica sobre la iniciación de las chicas bemba es «Chisungu», de Audrey Richards (1956)."
    },
    {
      id: "c13-bosa", cap: 13, nombre: "Carnaval en Bosa", lugar: "Bosa, Cerdeña (Italia)", lat: 40.3, lon: 8.5,
      conceptos: ["Ritual de inversión"],
      sintesis: "Durante el carnaval se amplían horarios, las hijas salen hasta tarde y hombres y mujeres coquetean en público. Teatro callejero y disfraces critican la actualidad local antes de que la cuaresma restablezca el orden cotidiano.",
      estudio: { quien: "Carole Counihan", anio: "1985" }, p: "388-389",
      pensar: "¿Qué carnavales conoces en tu entorno y qué normas suspenden?"
    },
    {
      id: "c13-kotel", cap: 13, nombre: "Quién es quién en el Kotel", lugar: "Ciudad Antigua de Jerusalén", lat: 31.776, lon: 35.234,
      conceptos: ["Peregrinación", "Judaísmo", "Lugar sagrado"],
      sintesis: "Resto del Segundo Templo y principal lugar de peregrinación de Israel desde 1967, junto al Monte del Templo / Haram al-Sharif. La plaza reúne a judíos de todas las corrientes y a visitantes laicos, con zonas de oración separadas por sexo.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "395-397",
      pensar: "¿Qué ocurre cuando un mismo lugar es sagrado para varias religiones?",
      critica: "El manual atribuye a Herodes la construcción del Segundo Templo «sobre el 500 a. e. c.»; el Segundo Templo se reconstruyó hacia finales del siglo VI a. e. c. y Herodes lo amplió a partir del siglo I a. e. c."
    },
    {
      id: "c13-hui", cap: 13, nombre: "Musulmanes hui", lugar: "Xi'an (China)", lat: 34.26, lon: 108.94,
      conceptos: ["Islam", "Relocalización", "Modernidad"],
      sintesis: "Unos 60.000 hui viven en la Vieja Zona Musulmana de Xi'an. Rechazan la etiqueta estatal de «atrasados» y construyen su propia modernidad seleccionando elementos occidentales y musulmanes, con la dieta y el rechazo del cerdo y el alcohol como marcas de identidad.",
      estudio: { quien: "Maris Gillette; Culturama", anio: "2000" }, p: "402-403",
      pensar: "¿Quién decide qué es «moderno»?"
    },
    {
      id: "c13-oyotunji", cap: 13, nombre: "Revitalización yoruba", lugar: "Oyotunji Village, Carolina del Sur (EE. UU.)", lat: 32.6, lon: -80.85, aprox: true,
      conceptos: ["Religiones de la diáspora africana", "Revitalización"],
      sintesis: "Afroamericanos han reconstruido un liderazgo y un culto inspirados en la realeza yoruba, como vía para recuperar una identidad arrebatada por la esclavitud. Kamari Clarke siguió el movimiento entre Nueva York, Carolina del Sur y Nigeria.",
      estudio: { quien: "Kamari Clarke", anio: "2004" }, p: "404",
      pensar: "¿Puede una tradición «reconstruida» ser auténtica?"
    },
    {
      id: "c13-ghost-dance", cap: 13, nombre: "La Danza de los Espíritus", lugar: "Walker River, Nevada (EE. UU.)", lat: 39.0, lon: -119.1, aprox: true,
      conceptos: ["Movimiento de revitalización", "Colonialismo"],
      sintesis: "En la década de 1870 y de nuevo en 1890, profetas paiute anunciaron la destrucción y renovación del mundo y enseñaron una danza circular. El movimiento se extendió por las praderas y, entre los pawnee, impulsó un renacimiento cultural.",
      estudio: { quien: "Alice Kehoe", anio: "1989" }, p: "405",
      pensar: "¿Por qué surgen movimientos proféticos en momentos de crisis?",
      critica: "El manual llama al primer profeta «Wodziboh»; en la bibliografía suele aparecer como Wodziwob."
    },

    /* ------------------------- CAPÍTULO 14 ------------------------- */
    {
      id: "c14-maskit", cap: 14, nombre: "La mano invisible de los souvenirs", lugar: "Tel Aviv (Israel)", lat: 32.07, lon: 34.78,
      conceptos: ["Arte y mercado", "Representación"],
      sintesis: "En la tienda Maskit, los souvenirs expresan cómo Israel se representa ante el turista: su pasado antiguo y reciente, su religión y su relación con árabes israelíes y palestinos, cuyos artesanos quedan a menudo invisibles.",
      estudio: { quien: "Shelly Shenhav-Keller", anio: "1993" }, p: "417",
      pensar: "¿Qué cuentan, y qué callan, los recuerdos turísticos de tu ciudad?"
    },
    {
      id: "c14-japon", cap: 14, nombre: "El hogar japonés en revista", lugar: "Japón", lat: 35.0, lon: 137.0, aprox: true,
      conceptos: ["Consumo y estilo", "Arquitectura doméstica"],
      sintesis: "Revistas de decoración dirigidas a amas de casa de clase media y alta promueven estilos occidentales frente al tatami, el shoji y el fusuma. Decorar se convierte en una forma de expresar estatus.",
      estudio: { quien: "Ejemplo del manual", anio: "1992" }, p: "422",
      pensar: "¿Qué dice la decoración de tu casa sobre tu posición social?"
    },
    {
      id: "c14-ucrania", cap: 14, nombre: "Patrimonio reclamado", lugar: "Kiev (Ucrania)", lat: 50.45, lon: 30.52,
      conceptos: ["Repatriación", "Museos"],
      sintesis: "Tras la caída de la URSS, Ucrania reclamó a Rusia 2 millones de objetos de arte, y la Iglesia ortodoxa rusa pidió la devolución de iconos y templos confiscados después de 1917. En EE. UU., la NAGPRA obliga a inventariar y repatriar restos y objetos nativos americanos.",
      estudio: { quien: "Akinsha", anio: "1992" }, p: "425",
      pensar: "¿A quién pertenece el patrimonio guardado en un museo?",
      critica: "El manual escribe «NAGRPA»; la sigla correcta es NAGPRA (Native American Graves Protection and Repatriation Act, 1990)."
    },
    {
      id: "c14-amboseli", cap: 14, nombre: "Parque sin masái", lugar: "Amboseli (Kenia)", lat: -2.65, lon: 37.26,
      conceptos: ["Antropología del turismo", "Conservación"],
      sintesis: "La creación del parque prohibió a los masái usar el agua para su ganado. Se les prometió participar en los ingresos si permanecían fuera, pero la mayoría de los beneficios nunca llegó.",
      estudio: { quien: "Honadle (en Drake)", anio: "1985; 1991" }, p: "429",
      pensar: "¿Quién paga el coste de la conservación de la naturaleza?"
    },
    {
      id: "c14-guanacaste", cap: 14, nombre: "Parque con la población", lugar: "Guanacaste (Costa Rica)", lat: 10.85, lon: -85.6,
      conceptos: ["Antropología del turismo", "Participación"],
      sintesis: "La población local participó desde el inicio en la planificación del parque nacional, tiene un papel en su gestión y recibe parte de los beneficios: el contrapunto de Amboseli.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "429-430",
      pensar: "¿Qué condiciones hacen que el ecoturismo beneficie a quien vive allí?"
    },
    {
      id: "c14-cricket", cap: 14, nombre: "Críquet trobriandés", lugar: "Islas Trobriand (Papúa Nueva Guinea)", lat: -8.75, lon: 150.95,
      conceptos: ["Sincretismo", "Juego y política"],
      sintesis: "Introducido por un misionero en 1903 para sustituir la guerra, el críquet se transformó: los grandes hombres movilizan a sus seguidores, los partidos se acompañan de magia, danzas y cánticos y terminan en fiestas redistributivas.",
      estudio: { quien: "Jerry Leach", anio: "1975" }, p: "430",
      pensar: "¿Qué deportes globales se juegan de forma «local» en tu entorno?"
    },
    {
      id: "c14-vietnam", cap: 14, nombre: "Marionetas de agua", lugar: "Delta del río Rojo (Vietnam)", lat: 20.9, lon: 106.0,
      conceptos: ["Turismo", "Revitalización"],
      sintesis: "Las marionetas que parecen deslizarse solas sobre el agua pasaron, desde los años ochenta, de representación estacional en el norte a espectáculo de todo el año en todo el país, para público vietnamita y extranjero.",
      estudio: { quien: "Kathy Foley", anio: "2001" }, p: "431",
      pensar: "¿Revitaliza o desvirtúa el turismo una tradición?"
    },
    {
      id: "c14-estambul", cap: 14, nombre: "Danza del vientre", lugar: "Estambul (Turquía)", lat: 41.01, lon: 28.98,
      conceptos: ["Gentrificación", "Turismo", "Género"],
      sintesis: "Asociada al pasado otomano, la danza del vientre prolifera en salas, restaurantes y clubes, impulsada por intereses comerciales pese a los valores de modestia. Hasta amas de casa de clase media toman clases: una práctica antes estigmatizada se aburguesa.",
      estudio: { quien: "Öykü Potuoğlu-Cook", anio: "2006" }, p: "431",
      pensar: "¿Qué prácticas populares se han vuelto «de moda» entre las clases acomodadas?",
      critica: "El apellido aparece desfigurado en el manual («Potuo lu-Cook»)."
    },
    {
      id: "c14-gullah", cap: 14, nombre: "Los gullah y sus cestas", lugar: "Charleston, Carolina del Sur (EE. UU.)", lat: 32.85, lon: -79.85,
      conceptos: ["Patrimonio", "Turismo", "Diáspora africana"],
      sintesis: "Descendientes de africanos esclavizados que aportaron su saber sobre el arroz, los gullah tejen redes, colchas y cestas de hierba dulce. La demanda turística ha convertido la cestería en una especialidad próspera a lo largo de la autopista 17.",
      estudio: { quien: "National Park Service; Culturama", anio: "2005" }, p: "432-433",
      pensar: "¿Cómo puede una comunidad beneficiarse del turismo sin perder el control de su patrimonio?",
      actualizacion: { texto: "En 2006 el Congreso de EE. UU. creó el Gullah Geechee Cultural Heritage Corridor, que abarca la costa desde Carolina del Norte hasta Florida.", fuentes: [] }
    },
    {
      id: "c14-hawai", cap: 14, nombre: "El renacimiento hawaiano", lugar: "Hawái (EE. UU.)", lat: 20.8, lon: -156.3, aprox: true,
      conceptos: ["Resistencia cultural", "Revitalización"],
      sintesis: "En los años setenta, jóvenes hawaianos protestaron contra el desarrollo que los desplazaba y recuperaron la lengua, el hula y la navegación tradicional. Proliferaron las escuelas de hula y las competiciones entre islas.",
      estudio: { quien: "Amy Ku'uleialoha Stillman", anio: "1996" }, p: "434",
      pensar: "¿Qué prácticas expresivas se han recuperado en tu región como forma de afirmación?"
    },
    {
      id: "c14-banco-mundial", cap: 14, nombre: "Patrimonio y desarrollo", lugar: "Washington D. C. (EE. UU.)", lat: 38.9, lon: -77.04,
      conceptos: ["Patrimonio cultural", "Antropología aplicada"],
      sintesis: "Michael Cernea, primer antropólogo contratado por el Banco Mundial en 1972, defiende ir más allá del principio de «no hacer daño» y financiar el patrimonio cultural como vía para reducir la pobreza mediante empleo y turismo.",
      estudio: { quien: "Michael Cernea", anio: "" }, p: "436",
      pensar: "¿Debe el patrimonio justificarse por su rentabilidad?"
    }
  ]
});
