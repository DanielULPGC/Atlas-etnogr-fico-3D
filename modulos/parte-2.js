/*
 * MÓDULO · PARTE II · Fundamentos de la cultura (capítulos 4-7)
 * Fuente: Miller (2011), pp. 101-226. Redacción propia; las páginas remiten al manual.
 * Mismo esquema que parte-1.js.
 */
ATLAS.registrarModulo({
  id: "parte-2",
  parte: 2,
  titulo: "Fundamentos de la cultura",
  capitulos: [
    {
      n: 4,
      titulo: "Ganarse la vida",
      paginas: "103-131",
      preguntas: [
        "¿Cómo estudian los antropólogos los sistemas económicos?",
        "¿Cuáles son los cinco modos de subsistencia?",
        "¿Cómo están cambiando esos modos de subsistencia?"
      ],
      glosario: [
        { t: "Sistema económico", d: "Conjunto articulado de tres procesos: producción (subsistencia), consumo e intercambio.", p: "104" },
        { t: "Antropología económica", d: "Estudio transcultural de los sistemas económicos, no solo del capitalismo; combina datos cualitativos y cuantitativos y da prioridad a las categorías emic.", p: "104" },
        { t: "Modo de subsistencia", d: "Forma dominante en que una cultura obtiene lo necesario para vivir. El manual distingue cinco: caza-recolección, horticultura, pastoreo, agricultura e industrialismo/informática.", p: "104-106" },
        { t: "Caza-recolección", d: "Obtención directa de alimento de la naturaleza, con división del trabajo por género y edad, acceso igualitario a los recursos y alta sostenibilidad si no hay presiones externas.", p: "106-109" },
        { t: "Horticultura", d: "Cultivo de plantas domésticas con herramientas manuales y lluvia como única fuente de agua, que exige rotar parcelas y dejarlas en barbecho; también llamada cultivo rotativo.", p: "110-115" },
        { t: "Pastoreo", d: "Subsistencia basada en rebaños domésticos que deben desplazarse en busca de pastos y agua; suele requerir intercambios con agricultores u otros grupos.", p: "115-117" },
        { t: "Agricultura familiar e industrial", d: "Producción intensiva para el consumo y el mercado. La familiar decrece en el mundo mientras se expanden las plantaciones industriales con mano de obra migrante.", p: "117-120" },
        { t: "Industrialismo / informática", d: "Modo dominado por la producción de bienes y de información, con fuerte división del trabajo por clase, género y edad y escasa sostenibilidad energética.", p: "120-124" },
        { t: "Sector formal / informal", d: "El formal es el trabajo asalariado registrado oficialmente; el informal escapa al registro y, cuando es ilegal, forma la economía sumergida.", p: "122-123" },
        { t: "Privatización", d: "Transferencia de bienes y servicios de la propiedad colectiva o estatal a la propiedad privada.", p: "127-128" }
      ],
      recorrido: {
        intro: "De los cazadores-recolectores circumpolares al pastoreo y a la economía de mercado: cómo cada modo de subsistencia organiza el trabajo, la propiedad y el género, y cómo cambia bajo presiones externas.",
        casos: ["c4-colville", "c4-tiwi", "c4-andaman", "c4-iroqueses", "c4-yanomami", "c4-mundurucu", "c4-qashqai", "c4-mongolia"]
      },
      test: [
        { q: "Entre los iroqueses precoloniales, el alto estatus de las mujeres se relaciona sobre todo con…", o: ["su contribución a la caza", "el control de la distribución del maíz", "la ausencia de guerra", "la herencia por línea paterna"], c: 1, e: "Contribuir a la producción es necesario pero no suficiente; lo decisivo es controlar la distribución (pp. 114-115)." },
        { q: "¿Qué rasgo comparten horticultura y pastoreo?", o: ["Son estrategias intensivas", "Son estrategias extensivas que requieren rotación o movilidad", "Dependen del regadío", "Se basan en la propiedad privada de la tierra"], c: 1, e: "La horticultura exige barbecho y el pastoreo, desplazar rebaños hacia pastos frescos (p. 130)." },
        { q: "Los qashqa'i de Irán reducen su vulnerabilidad en migraciones de unos 480 km mediante…", o: ["el abandono del pastoreo", "alianzas tribales movilizables bajo un solo líder", "la sedentarización", "el uso de camiones"], c: 1, e: "Su sólida organización política les permite negociar el paso por tierras ajenas (pp. 116-117)." },
        { q: "Goldstein y Beall estudiaron en Mongolia…", o: ["la colectivización de los años cincuenta", "la transición de la ganadería colectivizada a la privatizada", "la introducción del regadío", "el turismo en el Gobi"], c: 1, e: "A principios de los noventa la política principal era la privatización del ganado (pp. 127-128)." },
        { q: "Según la postura «revisionista» recogida en el manual, la invención de la agricultura…", o: ["fue un avance sin costes", "trajo también desigualdad, enfermedades y degradación ambiental", "redujo el trabajo de todos", "acabó con la propiedad privada"], c: 1, e: "Diamond la llamó «el mayor error de la historia de la especie humana» (p. 122)." }
      ]
    },
    {
      n: 5,
      titulo: "Consumo e intercambio",
      paginas: "133-163",
      preguntas: [
        "¿Qué es el consumo desde una perspectiva transcultural?",
        "¿Qué es el intercambio desde una perspectiva transcultural?",
        "¿Cómo están cambiando el consumo y el intercambio?"
      ],
      glosario: [
        { t: "Consumo", d: "Uso de bienes para satisfacer necesidades (lo que entra) y gasto de recursos para obtenerlos (lo que sale).", p: "134-136" },
        { t: "Minimalismo / consumismo", d: "Dos modos de consumo: necesidades limitadas, medios suficientes y sostenibilidad, frente a necesidades ilimitadas, insatisfacción permanente e insostenibilidad.", p: "136-137" },
        { t: "Consumo personalizado / despersonalizado", d: "En economías no mercantiles se consume lo que uno produce o sabe producir; en las de mercado, bienes de producción masiva y anónima.", p: "137" },
        { t: "Derechos de acceso", d: "Formas socialmente reconocidas de obtener recursos vitales; el acceso directo (producir el propio alimento) es más seguro que el indirecto.", p: "140" },
        { t: "Intercambio", d: "Transferencia de bienes materiales o inmateriales y de servicios entre personas, grupos o instituciones.", p: "145" },
        { t: "Intercambio equilibrado", d: "Transferencias de valor aproximadamente igual, a lo largo del tiempo, entre personas que mantienen una relación social; incluye la reciprocidad diferida.", p: "149-151" },
        { t: "Intercambio desequilibrado", d: "Transferencias de valor desigual; el mercado es su forma principal. Incluye también el robo y la explotación.", p: "151-154" },
        { t: "Potlatch", d: "Fiesta de la costa noroeste en la que el anfitrión gana prestigio regalando comida y bienes, y obliga a los invitados a devolver tanto o más.", p: "134, 158-159" },
        { t: "Intercambio de mercado", d: "Compra y venta en condiciones competitivas en que la oferta y la demanda fijan el valor; no genera lazos sociales duraderos.", p: "151-153" }
      ],
      recorrido: {
        intro: "Qué se consume, con quién y a qué precio social; y cómo circulan bienes y significados, desde el potlatch y los rituales que viajan entre grupos de mujeres hasta los mercados globales y los casinos tribales.",
        casos: ["c5-potlatch", "c5-kuru", "c5-oman", "c5-balgo", "c5-ituri", "c5-newhaven", "c5-tsukiji", "c5-foxwoods", "c5-california"]
      },
      test: [
        { q: "Lindenbaum explicó que el kuru afectara sobre todo a mujeres fore porque…", o: ["las mujeres tenían una predisposición genética", "la escasez de cerdos y el acceso preferente masculino a la carne llevaron a las mujeres a consumir más carne humana", "solo las mujeres participaban en los funerales", "los hombres estaban vacunados"], c: 1, e: "Una pauta de consumo desigual por género, ligada a la escasez de cerdos, explica la distribución de la enfermedad (pp. 142-143)." },
        { q: "El kula y el potlatch son ejemplos de…", o: ["intercambio de mercado", "intercambio equilibrado con reciprocidad diferida o competitiva", "robo institucionalizado", "consumo minimalista"], c: 1, e: "En ambos casos la relación social y la obligación de devolver organizan el intercambio (pp. 151, 158)." },
        { q: "La relación entre efe y lese descrita por Grinker es un caso de…", o: ["esclavitud", "intercambio desigual sostenido", "mercado virtual", "redistribución estatal"], c: 1, e: "Hay contrapartidas mutuas, pero también dependencia y desigualdad duraderas (p. 154)." },
        { q: "En Balgo Hills, la tjarada es…", o: ["una moneda de concha", "un ritual con su narración que grupos de mujeres custodian temporalmente y transmiten a otros", "un tipo de mercado", "un tabú alimentario"], c: 1, e: "Se intercambian bienes inmateriales, que se enriquecen mientras cada grupo los custodia (p. 148)." },
        { q: "La prohibición canadiense del potlatch estuvo vigente entre…", o: ["1792 y 1886", "1884 y 1951", "1951 y 1975", "nunca se prohibió"], c: 1, e: "Los kwakwaka'wakw siguieron celebrándolo en secreto; el primer potlatch legal moderno fue en 1953 (pp. 158-159)." }
      ]
    },
    {
      n: 6,
      titulo: "Reproducción y desarrollo humano",
      paginas: "165-195",
      preguntas: [
        "¿Cómo se relacionan los modos de reproducción con los de subsistencia?",
        "¿Cómo configura la cultura la natalidad?",
        "¿Cómo configura la cultura la personalidad a lo largo del ciclo vital?"
      ],
      glosario: [
        { t: "Modo de reproducción", d: "Pauta dominante de natalidad, mortalidad y crecimiento de una población. El manual distingue el de los cazadores-recolectores, el agrícola y el industrial/informático.", p: "166-170" },
        { t: "Intervalo entre nacimientos", d: "Tiempo que separa un nacimiento del siguiente; entre los ju/'hoansi es de varios años.", p: "166-167" },
        { t: "Menarquia / menopausia", d: "Aparición y desaparición de la menstruación; marcadores biológicos cuya interpretación social varía.", p: "172" },
        { t: "Infanticidio", d: "Muerte intencionada de un recién nacido o niño, asociada a límites de recursos, a percepciones de «mal encaje» o a preferencias de género.", p: "176-178" },
        { t: "Ciclo vital", d: "Etapas culturalmente definidas por las que pasa una persona, del nacimiento a la vejez.", p: "180-193" },
        { t: "Rito de paso", d: "Ceremonia que marca el cambio de estatus de una persona: separación, transición y reincorporación con una nueva identidad.", p: "184-185" },
        { t: "Adolescencia", d: "Periodo culturalmente definido entre la pubertad y la edad adulta, que puede no existir o diferir según el género.", p: "183-185" },
        { t: "Tercer género / pluralidad de géneros", d: "Identidades que no se ajustan a la oposición varón-mujer, como las hijras de la India o las personas de «dos espíritus» en culturas nativas norteamericanas.", p: "188-190" },
        { t: "Corte genital femenino", d: "Conjunto de procedimientos de corte genital practicados como paso a la feminidad plena en ciertas culturas; caso central del debate sobre relativismo cultural.", p: "184, 186-187" }
      ],
      recorrido: {
        intro: "Natalidad, adolescencia, género y paternidad como hechos culturales: del intervalo entre nacimientos de los cazadores-recolectores a la preferencia por los hijos varones y los ritos de paso.",
        casos: ["c6-juhoansi", "c6-amish", "c6-oaxaca", "c6-india", "c6-zawiya", "c6-masai", "c6-sambia", "c6-vmi", "c6-sierra-leona", "c6-hijras", "c6-aka"]
      },
      test: [
        { q: "Según el estudio de Howell sobre los ju/'hoansi, el largo intervalo entre nacimientos se relaciona con…", o: ["el uso de anticonceptivos modernos", "una dieta baja en grasas, el ejercicio femenino y la lactancia prolongada", "la ausencia de matrimonio", "la esterilidad masculina"], c: 1, e: "Son medios indirectos de regulación de la natalidad (pp. 166-167)." },
        { q: "En la aldea de Oaxaca estudiada por Browner…", o: ["hombres y mujeres desean el mismo número de hijos", "los hombres desean más hijos que las mujeres", "las mujeres desean más hijos que los hombres", "nadie desea hijos"], c: 1, e: "El 80 % de las mujeres con un hijo estaban satisfechas; la mayoría de los hombres satisfechos tenían cuatro o más (pp. 174-175)." },
        { q: "El alto grado de cuidado paterno entre los aka apoya una explicación…", o: ["biológica determinista del cuidado infantil", "construccionista del cuidado infantil", "evolucionista unilineal", "difusionista"], c: 1, e: "La variación transcultural muestra que el cuidado no es exclusivamente femenino por naturaleza (p. 191)." },
        { q: "Entre los masái, según el manual…", o: ["varones y mujeres tienen la misma adolescencia", "los varones viven una larga fase de formación guerrera y las mujeres pasan de niñas a esposas", "no existen ritos de paso", "la adolescencia femenina es más larga"], c: 1, e: "La duración de la adolescencia varía según el género y lo que la sociedad espera de cada uno (p. 184)." },
        { q: "El texto de Fuambai Ahmadu sobre su propia iniciación en Sierra Leona se cita para…", o: ["defender la prohibición universal sin matices", "mostrar una voz que supera la dicotomía entre observador externo e interno", "demostrar que la práctica no existe", "ilustrar el modo de reproducción industrial"], c: 1, e: "Su análisis complica el debate sobre relativismo cultural y agencia femenina (pp. 186-187)." }
      ]
    },
    {
      n: 7,
      titulo: "Salud, enfermedad y curación",
      paginas: "197-226",
      preguntas: [
        "¿Qué es la etnomedicina?",
        "¿Cuáles son las tres perspectivas teóricas principales de la antropología médica?",
        "¿Cómo han cambiado la salud, la enfermedad y la curación con la globalización?"
      ],
      glosario: [
        { t: "Etnomedicina", d: "Estudio de los sistemas de salud de culturas concretas: percepciones del cuerpo, categorías de enfermedad, prevención y curación.", p: "198-210" },
        { t: "Enfermedad / dolencia", d: "Enfermedad: problema biológico objetivo y universal. Dolencia: percepción y experiencia culturalmente específicas de un problema de salud.", p: "200" },
        { t: "Síndrome específicamente cultural", d: "Conjunto de síntomas reconocido en una cultura concreta, como el susto; existen en todas las culturas, también en las occidentales.", p: "200-203" },
        { t: "Sufrimiento estructural", d: "Problemas de salud causados por factores económicos y políticos como la guerra, el hambre, la migración forzosa o la pobreza.", p: "204" },
        { t: "Curación comunitaria / humoral", d: "La comunitaria actúa sobre el contexto social y en público; la humoral busca el equilibrio de fluidos y sustancias del cuerpo mediante dieta y conducta.", p: "205-207" },
        { t: "Fitoterapia", d: "Curación mediante el uso de plantas.", p: "208-209" },
        { t: "Tres perspectivas teóricas", d: "Ecológica/epidemiológica (entorno y salud), interpretativa (dolencia y curación como sistemas de significado) y crítica (poder, desigualdad y pobreza en la salud).", p: "210-216" },
        { t: "Enfermedades del desarrollo", d: "Problemas de salud provocados por proyectos que alteran el entorno físico y social, como embalses o minas.", p: "217-219" },
        { t: "Pluralismo médico", d: "Coexistencia de varios sistemas de salud y curación en un mismo contexto, entre ellos la biomedicina.", p: "219-221" }
      ],
      recorrido: {
        intro: "Cómo nombran, previenen y curan sus males distintas culturas, y qué ocurre cuando la biomedicina, el desarrollo y la desigualdad entran en juego.",
        casos: ["c7-subanun", "c7-japon", "c7-salvador", "c7-guatemala", "c7-mexico", "c7-tailandia", "c7-tsimane", "c7-sherpa", "c7-honolulu", "c7-india"]
      },
      test: [
        { q: "La distinción enfermedad / dolencia separa…", o: ["enfermedades graves y leves", "el problema biológico y su experiencia culturalmente específica", "la medicina pública y la privada", "las enfermedades infecciosas y las crónicas"], c: 1, e: "Los antropólogos médicos estudian ambas dimensiones en su contexto (p. 200)." },
        { q: "Entre los subanun estudiados por Frake…", o: ["solo los curanderos conocían las categorías de enfermedad", "incluso los niños dominaban un vocabulario de unas 186 etiquetas de problemas de salud", "no existían categorías para la piel", "se usaba la clasificación biomédica"], c: 1, e: "Un sistema emic, igualitario y muy especificado (p. 201)." },
        { q: "El concepto japonés de gotai ayuda a explicar…", o: ["la alta tasa de cesáreas en Japón", "las bajas tasas de cirugía y la resistencia al trasplante de órganos", "la preferencia por la medicina humoral", "el pluralismo médico"], c: 1, e: "El ideal de integridad corporal tiene consecuencias médicas (p. 199)." },
        { q: "El estudio de los tsimané mostró que la salud infantil se asociaba sobre todo con…", o: ["la escolarización formal de la madre", "la riqueza del hogar", "el conocimiento botánico de la madre", "el acceso a hospitales"], c: 2, e: "Escolarización y riqueza apenas influían; el saber etnobotánico materno sí (p. 209)." },
        { q: "La antropología médica crítica se pregunta sobre todo por…", o: ["la composición química de los remedios", "las relaciones de poder y la desigualdad en la salud", "la clasificación de síntomas", "la evolución biológica"], c: 1, e: "Algunos de sus autores ven la biomedicina como forma de control social (pp. 214-216)." }
      ]
    }
  ],

  casos: [
    /* ------------------------- CAPÍTULO 4 ------------------------- */
    {
      id: "c4-colville", cap: 4, nombre: "Los perros de Colville Lake", lugar: "Colville Lake, Territorios del Noroeste (Canadá)", lat: 67.04, lon: -126.08,
      conceptos: ["Caza-recolección circumpolar", "Tecnología"],
      sintesis: "Joel Savishinsky recorrió unos 960 km en trineo con los hare y descubrió que los perros no eran solo un medio de transporte: organizaban la vida económica, social y emocional frente al frío, el aislamiento y la presión de comerciantes y misioneros.",
      estudio: { quien: "Joel Savishinsky", anio: "1974" }, p: "108, 110-111",
      pensar: "¿Qué animal o tecnología organiza tu vida cotidiana más de lo que parece?",
      critica: "«Hare» (liebre) es un apelativo colonial basado en la dependencia de la liebre nival; conviene contrastarlo con la autodenominación del grupo."
    },
    {
      id: "c4-tiwi", cap: 4, nombre: "Los tiwi", lugar: "Islas Bathurst y Melville (Australia)", lat: -11.6, lon: 130.8,
      conceptos: ["Caza-recolección", "Globalización", "Revitalización cultural"],
      sintesis: "Las mujeres tiwi aportaban la mayor parte de la dieta recolectando vegetales; los hombres cazaban. Tras el paso a la vida aldeana en el siglo XX, los tiwi producen arte para el mercado mundial, participan en el movimiento por los derechos aborígenes y gestionan el turismo con cautela.",
      estudio: { quien: "Hart, Pilling y Goodale", anio: "1988" }, p: "125-127",
      pensar: "¿Puede el turismo ser una forma de enseñanza para los visitantes, como sugería un tiwi?"
    },
    {
      id: "c4-andaman", cap: 4, nombre: "Pueblos de las Andamán", lugar: "Reserva jarawa, Andamán del Sur (India)", lat: 12.1, lon: 92.75,
      conceptos: ["Caza-recolección", "Colonialismo", "Pueblos indígenas"],
      sintesis: "De 6.000-8.000 indígenas a finales del siglo XVIII se pasó a unos 400, frente a 400.000 colonos. Sobreviven cuatro grupos: grandes andamaneses, jarawa, onge y centineleses. Su mayor amenaza no es la naturaleza sino la migración y el desarrollo: carreteras que atraviesan la reserva y presiones sobre su madera.",
      estudio: { quien: "Culturama; Mukerjee", anio: "2005" }, p: "112-113",
      pensar: "¿Tienen derecho los pueblos en aislamiento voluntario a no ser contactados?",
      critica: "El manual sitúa el tsunami en 2005; se produjo el 26 de diciembre de 2004."
    },
    {
      id: "c4-iroqueses", cap: 4, nombre: "Las mujeres y el maíz", lugar: "Centro del estado de Nueva York (EE. UU.)", lat: 42.95, lon: -76.15,
      conceptos: ["Horticultura", "Género y estatus"],
      sintesis: "Antes del contacto, las mujeres iroquesas cultivaban el maíz y controlaban su distribución, de modo que podían condicionar las expediciones guerreras masculinas. El caso muestra que aportar alimento es condición necesaria, pero no suficiente, para el alto estatus: lo decisivo es controlar el reparto.",
      estudio: { quien: "Judith Brown", anio: "1975" }, p: "114-115",
      pensar: "En tu entorno, ¿quién produce los recursos y quién decide sobre ellos?"
    },
    {
      id: "c4-yanomami", cap: 4, nombre: "Los yanomami", lugar: "Amazonía venezolana y brasileña", lat: 2.6, lon: -63.8,
      conceptos: ["Horticultura", "Género y estatus"],
      sintesis: "Los hombres desbrozan, cultivan y cosechan, y las mujeres procesan la mandioca, un trabajo largo para eliminar sus toxinas. Aun así, el poder y las decisiones son masculinos: el extremo opuesto al caso iroqués.",
      estudio: { quien: "Napoleon Chagnon", anio: "1992" }, p: "114-115",
      pensar: "¿Por qué una gran contribución al trabajo no garantiza poder?",
      critica: "La obra de Chagnon fue objeto de una fuerte polémica ética y teórica en la disciplina, y el propio manual advierte de la invasión de la reserva por mineros, ganaderos y madereros."
    },
    {
      id: "c4-mundurucu", cap: 4, nombre: "Los mundurucú y el caucho", lugar: "Amazonía brasileña", lat: -6.5, lon: -57.5, aprox: true,
      conceptos: ["Horticultura", "Cambio económico", "Género"],
      sintesis: "En los asentamientos caucheros desapareció la casa de los hombres: los matrimonios conviven, los varones acarrean el agua y las mujeres pierden sus grupos de trabajo comunitario. Las mujeres trabajan más horas, pero prefieren la nueva vida porque comparten casa con sus maridos.",
      estudio: { quien: "Yolanda y Robert Murphy", anio: "1985" }, p: "127",
      pensar: "¿Cómo valorar un cambio que aumenta la carga de trabajo pero que las propias personas prefieren?"
    },
    {
      id: "c4-qashqai", cap: 4, nombre: "Pastores qashqa'i", lugar: "Región de Shiraz (Irán)", lat: 29.6, lon: 52.5,
      conceptos: ["Pastoreo", "Organización política"],
      sintesis: "Pastores de ovejas y camellos que migran estacionalmente a pastos situados a unos 480 km. Para cruzar tierras ajenas con seguridad, han desarrollado alianzas tribales que pueden movilizarse bajo un solo líder.",
      estudio: { quien: "Lois Beck", anio: "1986" }, p: "116-117",
      pensar: "¿Por qué la movilidad favorece formas políticas más amplias?"
    },
    {
      id: "c4-mongolia", cap: 4, nombre: "Ganaderos de Mongolia", lugar: "Mongolia", lat: 47.0, lon: 104.0, aprox: true,
      conceptos: ["Pastoreo", "Privatización"],
      sintesis: "Tras décadas de colectivización bajo influencia soviética, a principios de los noventa se privatizó el ganado: ovejas, cabras, yaks, caballos y camellos. Goldstein y Beall estudiaron cómo los pastores afrontaron el paso a la economía de mercado.",
      estudio: { quien: "Melvyn Goldstein y Cynthia Beall", anio: "1994" }, p: "127-128",
      pensar: "¿Qué pierde y qué gana una familia ganadera al pasar de lo colectivo a lo privado?"
    },

    /* ------------------------- CAPÍTULO 5 ------------------------- */
    {
      id: "c5-potlatch", cap: 5, nombre: "El potlatch kwakwaka'wakw", lugar: "Alert Bay, Columbia Británica (Canadá)", lat: 50.59, lon: -126.93,
      conceptos: ["Potlatch", "Intercambio", "Revitalización"],
      sintesis: "El anfitrión gana prestigio regalando comida y bienes, y los invitados quedan obligados a corresponder. El sistema redistribuía excedentes en una región de suministros irregulares. Prohibido entre 1884 y 1951, se mantuvo en secreto; en 1953 se celebró el primer potlatch legal moderno.",
      estudio: { quien: "Franz Boas y George Hunt; Culturama", anio: "1886-" }, p: "134, 158-159",
      pensar: "¿Qué gastos ceremoniales de tu entorno sirven para crear obligaciones y prestigio?",
      critica: "«Kwakwaka'wakw» (gente que habla kwak'wala) sustituye a «kwakiutl», que designaba solo a uno de los veinte grupos."
    },
    {
      id: "c5-kuru", cap: 5, nombre: "Kuru: una dieta mortal", lugar: "Tierras altas orientales (Papúa Nueva Guinea)", lat: -6.6, lon: 145.85,
      conceptos: ["Consumo y género", "Antropología médica"],
      sintesis: "Entre 1957 y 1977 murieron por kuru unas 2.500 personas fore, sobre todo mujeres. Shirley Lindenbaum mostró su causa cultural: la escasez de cerdos y el acceso preferente de los hombres a la carne llevaron a las mujeres a consumir carne de difuntos, que transmitía la enfermedad.",
      estudio: { quien: "Shirley Lindenbaum", anio: "1979" }, p: "142-143",
      pensar: "¿Qué desigualdades de tu entorno se expresan en quién come qué?",
      actualizacion: {
        texto: "Hoy se sabe que el kuru es una enfermedad priónica. Su estudio genético identificó una variante protectora de la proteína priónica que se concentra en las zonas de mayor exposición.",
        fuentes: [{ cita: "Mead, S. et al. (2009). A novel protective prion protein variant that colocalizes with kuru exposure. New England Journal of Medicine, 361(21), 2056-2065.", doi: "10.1056/NEJMoa0809716" }]
      }
    },
    {
      id: "c5-oman", cap: 5, nombre: "Las reglas de hospitalidad", lugar: "Omán", lat: 23.6, lon: 58.4, aprox: true,
      conceptos: ["Hospitalidad", "Consumo y género"],
      sintesis: "Las visitas entre mujeres siguen una etiqueta precisa: café y dátiles para las vecinas cercanas; al menos dos platos para el resto, y hasta cuatro si hay muchas invitadas. Servir de menos convierte a la anfitriona en tacaña.",
      estudio: { quien: "Unni Wikan", anio: "1982" }, p: "146",
      pensar: "¿Qué reglas implícitas sigues cuando recibes visitas?"
    },
    {
      id: "c5-balgo", cap: 5, nombre: "Rituales que viajan", lugar: "Balgo Hills / Wirrimanu (Australia Occidental)", lat: -20.15, lon: 127.98,
      conceptos: ["Bienes simbólicos", "Intercambio"],
      sintesis: "Grupos de mujeres custodian durante un tiempo mitos y rituales, como la tjarada, una magia amorosa con su narración, y después deben cederlos a otro grupo. Las de Balgo la conservaron unos quince años y la transmitieron enriquecida en una ceremonia de tres días.",
      estudio: { quien: "Sylvie Poirier", anio: "1992" }, p: "148",
      pensar: "¿Qué bienes inmateriales se heredan o transmiten en tu familia o comunidad?",
      critica: "El pie de mapa del manual escribe «Balho Hills»; la forma correcta es Balgo Hills."
    },
    {
      id: "c5-ituri", cap: 5, nombre: "Efe y lese", lugar: "Selva de Ituri (R. D. del Congo)", lat: 1.5, lon: 28.9,
      conceptos: ["Intercambio desigual sostenido"],
      sintesis: "Los lese, agricultores, dan cultivos y hierro; los efe, cazadores-recolectores seminómadas, dan carne y miel. Los lese lo presentan como compartir dentro de una misma «casa», pero la relación encierra dependencia y desigualdad duraderas.",
      estudio: { quien: "Roy Richard Grinker", anio: "1994" }, p: "154",
      pensar: "¿Cuándo un intercambio que se presenta como «compartir» encubre desigualdad?",
      critica: "El manual entrecomilla «pigmeos»: el término es exógeno y muchos grupos lo consideran peyorativo."
    },
    {
      id: "c5-newhaven", cap: 5, nombre: "Consumo infantil y desigualdad", lugar: "New Haven, Connecticut (EE. UU.)", lat: 41.33, lon: -72.93,
      conceptos: ["Consumo", "Clase y «raza»"],
      sintesis: "Elizabeth Chin estudió las pautas de consumo de escolares en un barrio afroamericano pobre de una ciudad dividida en zonas de pobreza extrema y riqueza enorme, donde la mitad de los menores de cinco años de los barrios negros vivía en la pobreza.",
      estudio: { quien: "Elizabeth Chin", anio: "2001" }, p: "143-144",
      pensar: "¿Cómo aprenden los niños a consumir en contextos de desigualdad?"
    },
    {
      id: "c5-tsukiji", cap: 5, nombre: "El mercado de Tsukiji", lugar: "Tokio (Japón)", lat: 35.665, lon: 139.77,
      conceptos: ["Intercambio de mercado"],
      sintesis: "Theodore Bestor estudió durante años el mayor mercado de pescado del mundo, que conectaba a las grandes corporaciones proveedoras con los pequeños negocios familiares, y cuya organización espacial y social está cargada de cultura.",
      estudio: { quien: "Theodore C. Bestor", anio: "2004" }, p: "152-153",
      pensar: "¿Qué normas no escritas rigen el mercado de tu localidad?",
      actualizacion: { texto: "El mercado mayorista se trasladó a Toyosu en octubre de 2018; en Tsukiji permanece el mercado exterior.", fuentes: [] }
    },
    {
      id: "c5-foxwoods", cap: 5, nombre: "Casinos tribales", lugar: "Foxwoods, Connecticut (EE. UU.)", lat: 41.47, lon: -71.96,
      conceptos: ["Cambio económico", "Pueblos indígenas"],
      sintesis: "Los pequot de Connecticut, una tribu de unas 200 personas, abrieron en 1992 el que el manual presenta como el establecimiento de juego más lucrativo del mundo. Los casinos convierten a algunos grupos tribales en capitalistas prósperos y plantean preguntas sobre sus efectos.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "153",
      pensar: "¿Qué efectos culturales puede tener una riqueza súbita en una comunidad pequeña?"
    },
    {
      id: "c5-california", cap: 5, nombre: "Evaluar los casinos indios", lugar: "Riverside, California (EE. UU.)", lat: 33.97, lon: -117.33,
      conceptos: ["Antropología aplicada", "Evaluación"],
      sintesis: "En 2006, un equipo multidisciplinar dirigido por la antropóloga Kate Spilde Contreras evaluó los efectos sociales y económicos de los casinos de propiedad india en los gobiernos tribales y locales de California. El estudio usa «indio» por preferencia de las propias comunidades.",
      estudio: { quien: "Kate Spilde Contreras", anio: "2006" }, p: "156",
      pensar: "¿Qué aporta una antropóloga a una evaluación económica?"
    },

    /* ------------------------- CAPÍTULO 6 ------------------------- */
    {
      id: "c6-juhoansi", cap: 6, nombre: "Fertilidad ju/'hoansi", lugar: "Kalahari (Botsuana y Namibia)", lat: -19.35, lon: 20.85,
      conceptos: ["Modo de reproducción", "Intervalo entre nacimientos"],
      sintesis: "El estudio clásico de Nancy Howell mostró intervalos de varios años entre nacimientos, explicados por medios indirectos: dieta baja en grasas, actividad física femenina y lactancia prolongada. Con la sedentarización y los excedentes, la población creció.",
      estudio: { quien: "Nancy Howell", anio: "1979" }, p: "166-167",
      pensar: "¿Qué factores de tu sociedad actúan, sin proponérselo, como reguladores de la natalidad?"
    },
    {
      id: "c6-amish", cap: 6, nombre: "Los amish", lugar: "Condado de Lancaster, Pensilvania (EE. UU.)", lat: 40.04, lon: -76.3,
      conceptos: ["Modo de reproducción agrícola", "Natalidad"],
      sintesis: "Descendientes de anabaptistas suizos, valoran el trabajo manual, la familia y la distancia respecto a los valores «mundanos». Con 6 o 7 hijos por mujer, su población se duplica cada veinte años y desborda la tierra disponible, lo que ha impulsado cientos de pequeños negocios.",
      estudio: { quien: "Kraybill y Nolt; Culturama", anio: "2004" }, p: "168-169",
      pensar: "¿Cómo se adapta una comunidad que rechaza parte de la modernidad a la falta de tierra?",
      actualizacion: { texto: "El manual habla de unas 200.000 personas a principios del siglo XXI; el Young Center for Anabaptist and Pietist Studies estima unas 400.910 en 2024 (Estados Unidos y Canadá). Cifra perecedera.", fuentes: [] }
    },
    {
      id: "c6-oaxaca", cap: 6, nombre: "¿Cuántos hijos?", lugar: "Tierras altas de Oaxaca (México)", lat: 17.06, lon: -96.72, aprox: true,
      conceptos: ["Natalidad", "Género"],
      sintesis: "En una aldea de las tierras altas, el 80 % de las mujeres con un solo hijo estaban satisfechas, mientras que la mayoría de los hombres satisfechos tenían cuatro o más. Las mujeres, que soportan el cuidado nocturno, desean familias más pequeñas.",
      estudio: { quien: "Carole Browner", anio: "1986" }, p: "174-175",
      pensar: "¿Quién decide el tamaño de la familia y quién asume sus costes?"
    },
    {
      id: "c6-india", cap: 6, nombre: "La preferencia por los hijos varones", lugar: "Noroeste de la India", lat: 30.0, lon: 76.0, aprox: true,
      conceptos: ["Infanticidio", "Género", "Dote"],
      sintesis: "La proporción de niños por niñas es claramente más alta en el noroeste que en el sur y el este. El manual lo relaciona con la agricultura de secano, en la que el trabajo femenino no es remunerado, y con la dote, frente al sur arrocero, donde las mujeres son mano de obra asalariada.",
      estudio: { quien: "Barbara Miller; Antropología cotidiana", anio: "" }, p: "176-177",
      pensar: "¿Cómo puede una campaña pública cambiar el valor social de las hijas?",
      actualizacion: { texto: "El Censo de la India de 2011 registró 918 niñas por cada 1.000 niños de 0 a 6 años, con los valores más bajos en estados del noroeste como Haryana y Punyab. Dato perecedero: conviene consultar las encuestas nacionales más recientes.", fuentes: [] }
    },
    {
      id: "c6-zawiya", cap: 6, nombre: "La virginidad de la novia", lugar: "Norte de Marruecos", lat: 34.2, lon: -5.7, aprox: true,
      conceptos: ["Sexualidad", "Género"],
      sintesis: "En una ciudad del norte de Marruecos se valora la virginidad de la novia y se ignora la del novio. Cuando la pareja ha tenido relaciones previas, el ritual de las sábanas manchadas se cumple con la complicidad del novio o con sangre falsa comprada en la farmacia.",
      estudio: { quien: "Susan y Douglas Davis", anio: "1987" }, p: "172-173",
      pensar: "¿Qué nos dice la existencia de estrategias para cumplir una norma sobre la propia norma?"
    },
    {
      id: "c6-masai", cap: 6, nombre: "Guerreros masái", lugar: "Frontera entre Kenia y Tanzania", lat: -2.3, lon: 36.4, aprox: true,
      conceptos: ["Adolescencia", "Género"],
      sintesis: "Los varones masái viven una larga fase de formación guerrera y solidaridad masculina; las mujeres pasan de niñas a esposas sin adolescencia. La adolescencia depende de lo que cada sociedad espera de cada género.",
      estudio: { quien: "Ejemplo del manual", anio: "" }, p: "184-185",
      pensar: "¿Existe una única adolescencia en tu sociedad o varía según el género y la clase?"
    },
    {
      id: "c6-sambia", cap: 6, nombre: "Iniciación sambia", lugar: "Tierras altas orientales (Papúa Nueva Guinea)", lat: -7.0, lon: 146.1, aprox: true,
      conceptos: ["Rito de paso", "Construcción del género"],
      sintesis: "Para los sambia, un muchacho solo madura como hombre sano tras un largo periodo en un grupo secreto de iniciación masculina, cuyas prácticas rituales incluyen la transferencia de semen. Después se casa y forma familia. El caso cuestiona las explicaciones darwinistas de la adolescencia.",
      estudio: { quien: "Gilbert Herdt", anio: "1987" }, p: "184",
      pensar: "¿Por qué un antropólogo debe describir prácticas que su propia cultura juzga inaceptables?",
      critica: "El manual escribe «Heardt»; el autor es Gilbert Herdt. Caso delicado: conviene trabajarlo en el aula con encuadre ético explícito."
    },
    {
      id: "c6-vmi", cap: 6, nombre: "Las «ratas» del VMI", lugar: "Lexington, Virginia (EE. UU.)", lat: 37.79, lon: -79.44,
      conceptos: ["Rito de paso", "Masculinidad"],
      sintesis: "En la academia militar, entonces solo masculina, los novatos pasaban un año de humillaciones a manos de veteranos que los trataban como a niños, hasta una ceremonia de salida. Quien lo soportaba «como un hombre» forjaba lazos fuertes con su padrino.",
      estudio: { quien: "Abigail Adams", anio: "2002" }, p: "185-186",
      pensar: "¿Qué rito de paso has vivido y cómo lo analizarías antropológicamente?",
      actualizacion: { texto: "El VMI admite mujeres desde 1997, tras la sentencia del Tribunal Supremo de EE. UU. en el caso United States v. Virginia (1996).", fuentes: [] }
    },
    {
      id: "c6-sierra-leona", cap: 6, nombre: "Relativismo y corte genital", lugar: "Distrito de Kono (Sierra Leona)", lat: 8.65, lon: -10.97, aprox: true,
      conceptos: ["Relativismo cultural crítico", "Agencia"],
      sintesis: "Fuambai Ahmadu, antropóloga criada en Washington y de linaje kono, viajó en 1991 a Sierra Leona para su propia iniciación. Describió un dolor intenso, pero también la entrada en un poderoso mundo femenino. Su voz complica la oposición entre la mirada externa y la interna.",
      estudio: { quien: "Fuambai Ahmadu", anio: "2000" }, p: "186-187",
      pensar: "¿Cómo aplicar el relativismo cultural crítico sin silenciar ni la salud ni la agencia de las mujeres?",
      critica: "Caso del recuadro «Pensamiento crítico». Requiere en el aula tratar a la vez los efectos sobre la salud y las posiciones de las propias mujeres."
    },
    {
      id: "c6-hijras", cap: 6, nombre: "Las hijras", lugar: "Ciudades del norte de la India", lat: 28.6, lon: 77.2, aprox: true,
      conceptos: ["Tercer género", "Pluralidad de géneros"],
      sintesis: "Personas que visten y se comportan como mujeres sin considerarse ni hombres ni mujeres; algunas se someten a una iniciación con emasculación. El manual las compara con los roles de género variantes de culturas nativas norteamericanas.",
      estudio: { quien: "Serena Nanda", anio: "1990" }, p: "188-189",
      pensar: "¿Qué categorías de género reconoce tu sistema jurídico y cuáles no?",
      critica: "El manual usa «berdache», hoy considerado inadecuado; muchas comunidades prefieren «dos espíritus». La India reconoce legalmente un tercer género desde la sentencia del Tribunal Supremo de 2014."
    },
    {
      id: "c6-aka", cap: 6, nombre: "Padres aka", lugar: "Lobaye (República Centroafricana)", lat: 3.9, lon: 18.0,
      conceptos: ["Cuidado infantil", "Construccionismo cultural"],
      sintesis: "Los padres aka pasan la mitad del día sosteniendo a sus hijos o junto a ellos, y los besan y abrazan más que las madres. En una sociedad igualitaria sin violencia contra las mujeres, el caso apoya una explicación construccionista del cuidado.",
      estudio: { quien: "Barry Hewlett", anio: "1991" }, p: "191",
      pensar: "¿Qué modelos de paternidad conoces y de dónde proceden?"
    },

    /* ------------------------- CAPÍTULO 7 ------------------------- */
    {
      id: "c7-subanun", cap: 7, nombre: "186 maneras de enfermar", lugar: "Mindanao (Filipinas)", lat: 7.9, lon: 123.2, aprox: true,
      conceptos: ["Etnomedicina", "Clasificación emic"],
      sintesis: "En los años cincuenta, los subanun, horticultores igualitarios, manejaban 186 etiquetas de problemas de salud, con gran detalle para las afecciones de la piel. Incluso los niños dominaban ese saber, a diferencia de la biomedicina, donde la clasificación es asunto de expertos.",
      estudio: { quien: "Charles Frake", anio: "1961" }, p: "201",
      pensar: "¿Cómo clasificas tú los males que padeces antes de ir al médico?"
    },
    {
      id: "c7-japon", cap: 7, nombre: "Gotai: el cuerpo intacto", lugar: "Japón", lat: 36.2, lon: 138.25, aprox: true,
      conceptos: ["Percepciones del cuerpo"],
      sintesis: "El ideal de mantener el cuerpo íntegro en vida y en muerte, ligado a la creencia en el renacimiento, ayuda a explicar en Japón las bajas tasas de cirugía y la resistencia al trasplante de órganos.",
      estudio: { quien: "Emiko Ohnuki-Tierney", anio: "1994" }, p: "199",
      pensar: "¿Qué ideas sobre el cuerpo influyen en tus decisiones médicas?"
    },
    {
      id: "c7-salvador", cap: 7, nombre: "Cesáreas en Bahía", lugar: "Salvador de Bahía (Brasil)", lat: -12.97, lon: -38.5,
      conceptos: ["Percepciones del cuerpo", "Biomedicina"],
      sintesis: "Médicos y pacientes asocian el parto vaginal con lo «primitivo», el dolor y la pérdida de sexualidad, y presentan la cesárea como segura y sin «daños estéticos». Un ideal cultural del cuerpo femenino influye en la práctica clínica.",
      estudio: { quien: "Cecilia McCallum", anio: "2005" }, p: "199",
      pensar: "¿Qué valores culturales se esconden tras decisiones que parecen solo técnicas?"
    },
    {
      id: "c7-guatemala", cap: 7, nombre: "Awas", lugar: "Tierras altas mayas (Guatemala)", lat: 15.47, lon: -90.37, aprox: true,
      conceptos: ["Prevención", "Etnomedicina"],
      sintesis: "Los niños con bultos, marcas o albinismo padecen awas, atribuido a lo que la madre sufrió en el embarazo: un antojo negado o un encuentro con un hombre ebrio o furioso. Para prevenirlo, la comunidad trata a la embarazada como algo sagrado y procura su contento.",
      estudio: { quien: "Richard Wilson", anio: "1995" }, p: "204",
      pensar: "¿Qué creencias sobre el embarazo protegen, de hecho, a las mujeres?"
    },
    {
      id: "c7-mexico", cap: 7, nombre: "Sufrir por el agua", lugar: "Valle de México", lat: 19.3, lon: -98.9, aprox: true,
      conceptos: ["Sufrimiento estructural", "Antropología médica crítica"],
      sintesis: "En una comunidad pobre, las mujeres, responsables de cocinar y lavar, viven en tensión constante porque el agua no llega con regularidad. La causa profunda es un desarrollo desigual que canaliza el agua hacia barrios ricos, regadíos e industria.",
      estudio: { quien: "Michael Ennis-McMillan", anio: "2001" }, p: "204",
      pensar: "¿Qué males de tu entorno tienen una causa política más que biológica?",
      critica: "El manual escribe «soufriendo»; el término local es «sufrimiento» o «sufrir del agua» (suffering from water en el original inglés)."
    },
    {
      id: "c7-tailandia", cap: 7, nombre: "Los espíritus de las viudas", lugar: "Nordeste rural de Tailandia", lat: 16.4, lon: 102.8, aprox: true,
      conceptos: ["Prevención", "Globalización"],
      sintesis: "En 1990, tras noticias de muertes inexplicadas de emigrantes tailandeses en Singapur, se extendió el miedo a espíritus de viudas que buscaban marido. Los aldeanos colocaron falos de madera en las casas para protegerse: un ritual local ante un problema global.",
      estudio: { quien: "Mary Beth Mills", anio: "1995" }, p: "204-205",
      pensar: "¿Cómo reinterpretan las culturas locales riesgos que vienen de fuera?",
      critica: "La traducción española sitúa el caso en «el norte rural de Tanzania», pero remite al mapa del Sudeste Asiático y trata de emigrantes tailandeses: se refiere a Tailandia."
    },
    {
      id: "c7-tsimane", cap: 7, nombre: "Plantas y salud infantil", lugar: "Amazonía boliviana (Beni)", lat: -14.8, lon: -66.4, aprox: true,
      conceptos: ["Fitoterapia", "Conocimiento indígena"],
      sintesis: "Entre los tsimané, horticultores y cazadores-recolectores, la salud de los niños se asociaba con el conocimiento botánico de la madre, no con su escolarización ni con la riqueza del hogar. Proteger el acceso a las plantas y el saber local es una cuestión de salud.",
      estudio: { quien: "Thomas McDade et al.", anio: "2007" }, p: "209",
      pensar: "¿Qué sabes de los efectos de las plantas que consumes?",
      critica: "Referencia del estudio: McDade, T. W. et al. (2007). Ethnobotanical knowledge is associated with indices of child health in the Bolivian Amazon. PNAS, 104(15), 6134-6139. doi:10.1073/pnas.0609123104."
    },
    {
      id: "c7-sherpa", cap: 7, nombre: "Los sherpa", lugar: "Valle del Khumbu (Nepal)", lat: 27.82, lon: 86.71,
      conceptos: ["Enfermedades del desarrollo", "Turismo", "Cambio climático"],
      sintesis: "Pastores, comerciantes y agricultores de patata convertidos desde los años veinte en guías y porteadores. En el Khumbu los turistas superan ya a la población local, y el deshielo de los glaciares agranda los lagos y multiplica el riesgo de inundaciones.",
      estudio: { quien: "Sherry Ortner; Culturama", anio: "1999" }, p: "218-219",
      pensar: "¿Quién asume los riesgos del turismo de montaña?"
    },
    {
      id: "c7-honolulu", cap: 7, nombre: "La muerte de Mary F.", lugar: "Honolulu, Hawái (EE. UU.)", lat: 21.31, lon: -157.86,
      conceptos: ["Pluralismo médico", "Comunicación transcultural"],
      sintesis: "Una joven samoana con diabetes murió tras un seguimiento irregular. Su padre, curandero tradicional que no hablaba inglés, fue acusado de negligencia. El caso muestra la dificultad de comunicación entre culturas médicas, incluso con la buena voluntad del personal sanitario.",
      estudio: { quien: "Krantzler", anio: "1987" }, p: "221",
      pensar: "¿Qué debería cambiar en un hospital para atender bien a familias de otra cultura?"
    },
    {
      id: "c7-india", cap: 7, nombre: "Desconfiar de las vacunas", lugar: "India", lat: 21.0, lon: 78.0, aprox: true,
      conceptos: ["Antropología médica aplicada", "Salud pública"],
      sintesis: "Muchas familias sospechaban que los programas de vacunación eran planificación familiar encubierta, o entendían mal de qué protegía cada dosis. Los estudios antropológicos ayudaron a rediseñar la comunicación en salud pública.",
      estudio: { quien: "Mark Nichter", anio: "1996" }, p: "222",
      pensar: "¿Qué hace creíble un mensaje de salud pública?"
    }
  ]
});
