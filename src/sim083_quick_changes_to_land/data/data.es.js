import globalConfig from "../../app/data/data.es";
const buttonLabels = { ...globalConfig.buttonLabels };
import imgVolcano from "../assets/images/Volcano-erupting_After.jpg";
import imgEarthquake from "../assets/images/Earthquakes_After.jpg";
import imgLandslide from "../assets/images/landslide_Afte.jpg";
import imgBeforeVolcano from "../assets/images/Volcano-erupting_Before.jpg";
import imgBeforeEarthquake from "../assets/images/Earthquakes_Before.jpg";
import imgBeforeLandslide from "../assets/images/landslide_Befor.jpg";

const data = {
  buttonNo: buttonLabels.no,
  buttonYes: buttonLabels.yes,
  infoText: buttonLabels.info,
  resetText: buttonLabels.reset,
  buttonNext: buttonLabels.next,
  buttonStart: buttonLabels.start,
  buttonClose: buttonLabels.close,
  buttonFinish: buttonLabels.finish,
  buttonContinue: buttonLabels.continue,
  resetConfirmationText: globalConfig.resetLiveText,
  instructionBoxContent:
    "Los accidentes geográficos que hay en la Tierra se crean a través de procesos muy diferentes. Las erupciones volcánicas, los terremotos y los deslaves son ejemplos de procesos que provocan cambios rápidos en el aspecto de la superficie terrestre.",
  InfoBoxContent: "Elige la palabra que completa mejor cada oración.",
  resetMsgContent: globalConfig.resetPopupText,

  after: "Después",
  before: "Antes",
  blank: "Blanco",
  blank1: "Blanco 1",
  blank2: "Blanco 2",

  home: {
    titleOne:
      "Cada uno de estos procesos puede cambiar rápidamente la superficie terrestre.",
    titleTwo:
      "Selecciona una imagen y, en la siguiente pantalla,  elige la palabra que completa correctamente cada oración para describir qué proceso causó ese cambio rápido en la superficie terrestre.",
    mainScreenData: [
      {
        SerNo: 1,
        id: "volcano",
        imgAfter: imgVolcano,
        imgBefore: imgBeforeVolcano,
        imgMain: imgVolcano,
        altMain: "Un volcán en erupción con montañas al fondo.",
        altBefore: "Un volcán inactivo.",
        altAfter: "Un volcán en erupción.",
        title: "Volcán",
        target: "volcano",
      },
      {
        SerNo: 2,
        id: "earthquake",
        imgAfter: imgEarthquake,
        imgBefore: imgBeforeEarthquake,
        imgMain: imgEarthquake,
        altMain:
          "Una carretera vacía con una grieta a lo largo del centro y con colinas verdes y montañas al fondo.",
        altBefore: "Una carretera con la superficie lisa e intacta.",
        altAfter: "Una carretera con una grieta a lo largo del centro.",
        title: "Terremoto",
        target: "earthquake",
      },
      {
        SerNo: 3,
        id: "landslide",
        imgAfter: imgLandslide,
        imgBefore: imgBeforeLandslide,
        imgMain: imgLandslide,
        altMain:
          "Un valle verde con colinas verdes y montañas al fondo. En el primer plano hay una montaña con una ladera que se ha deslizado hacia abajo.",
        altBefore: "Una montaña con una ladera empinada.",
        altAfter: "Una montaña con una ladera que se ha deslizado hacia abajo.",
        title: "Deslave",
        target: "landslide",
      },
    ],
  },

  Questions: [
    {
      id: 1,
      questions: [
        {
          id: 1,
          answer1: "volcano",
          answer2: "",
          questionText1: "Un",
          questionText2: "causó este cambio en la superficie terrestre.",
          questionText3: "",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "volcán",
              value: "volcano",
            },
            {
              id: 2,
              text: "terremoto",
              value: "earthquake",
            },
            {
              id: 3,
              text: "deslave",
              value: "landslide",
            },
          ],
          options2: [],
        },
        {
          id: 2,
          answer1: "Volcanoes",
          answer2: "magma",
          questionText1: "",
          questionText2: "permiten que roca líquida llamada,",
          questionText3: ", llegue(n) a la superficie terrestre.",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "Los deslaves",
              value: "Landslides",
            },
            {
              id: 2,
              text: "Los terremotos",
              value: "Earthquakes",
            },
            {
              id: 3,
              text: "Los volcanes",
              value: "Volcanoes",
            },
          ],
          options2: [
            {
              id: 1,
              text: "agua salada",
              value: "salt water",
            },
            {
              id: 2,
              text: "magma",
              value: "magma",
            },
            {
              id: 3,
              text: "árboles",
              value: "trees",
            },
          ],
        },
        {
          id: 3,
          answer1: "lava",
          answer2: "",
          questionText1:
            "Cuando el magma alcanza la superficie, su nombre cambia a",
          questionText2: ".",
          questionText3: "",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "lago",
              value: "a lake",
            },
            {
              id: 2,
              text: "<i>slime</i> caliente",
              value: "hot slime",
            },
            {
              id: 3,
              text: "lava",
              value: "lava",
            },
          ],
          options2: [],
        },
        {
          id: 4,
          answer1: "land",
          answer2: "",
          questionText1:
            "Cuando un volcán erupciona, cambia rápidamente la tierra. Cuando la lava se enfría, forma nueva(os)",
          questionText2: ".",
          questionText3: "",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "océanos",
              value: "oceans",
            },
            {
              id: 2,
              text: "bosques",
              value: "forests",
            },
            {
              id: 3,
              text: "tierra",
              value: "land",
            },
          ],
          options2: [],
        },
      ],
    },
    {
      id: 2,
      questions: [
        {
          id: 1,
          answer1: "earthquake",
          answer2: "",
          questionText1: "Un",
          questionText2: "causó este cambio en la superficie terrestre.",
          questionText3: "",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "volcán",
              value: "volcano",
            },
            {
              id: 2,
              text: "terremoto",
              value: "earthquake",
            },
            {
              id: 3,
              text: "deslave",
              value: "landslide",
            },
          ],
          options2: [],
        },
        {
          id: 2,
          answer1: "Earthquakes",
          answer2: "plates",
          questionText1: "",
          questionText2: "ocurren cuando",
          questionText3: "se atascan al moverse o chocan de frente. ",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "Los deslaves",
              value: "Landslides",
            },
            {
              id: 2,
              text: "Los terremotos",
              value: "Earthquakes",
            },
            {
              id: 3,
              text: "Los volcanes",
              value: "Volcanoes",
            },
          ],
          options2: [
            {
              id: 1,
              text: "los océanos",
              value: "oceans",
            },
            {
              id: 2,
              text: "las placas",
              value: "plates",
            },
            {
              id: 3,
              text: "los árboles",
              value: "trees",
            },
          ],
        },
        {
          id: 3,
          answer1: "fault",
          questionText1: "Los terremotos ocurren en",
          questionText2: "y pueden causar mucho daño en esas áreas.",
          questionText3: "",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "una falla",
              value: "fault",
            },
            {
              id: 2,
              text: "el agua",
              value: "water",
            },
            {
              id: 3,
              text: "una línea recta",
              value: "straight",
            },
          ],
          options2: [],
        },
      ],
    },
    {
      id: 3,
      questions: [
        {
          id: 1,
          answer1: "landslide",
          answer2: "",
          questionText1: "Un",
          questionText2: "causó este cambio en la superficie terrestre.",
          questionText3: "",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "volcán",
              value: "volcano",
            },
            {
              id: 2,
              text: "terremoto",
              value: "earthquake",
            },
            {
              id: 3,
              text: "deslave",
              value: "landslide",
            },
          ],
          options2: [],
        },
        {
          id: 2,
          answer1: "landslide",
          answer2: "water",
          questionText1: "Un",
          questionText2: "ocurre cuando",
          questionText3: "se mueve rápidamente sobre la superficie terrestre.",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "deslave",
              value: "landslide",
            },
            {
              id: 2,
              text: "terremoto",
              value: "earthquake",
            },
            {
              id: 3,
              text: "volcán",
              value: "volcano",
            },
          ],
          options2: [
            {
              id: 1,
              text: "el agua",
              value: "water",
            },
            {
              id: 2,
              text: "la tierra",
              value: "land",
            },
            {
              id: 3,
              text: "la lava",
              value: "lava",
            },
          ],
        },
        {
          id: 3,
          answer1: "heavy",
          answer2: "",
          questionText1: "La tierra mojada puede volverse muy",
          questionText2: "y colapsar.",
          questionText3: "",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "seca",
              value: "dry",
            },
            {
              id: 2,
              text: "sucia",
              value: "dirty",
            },
            {
              id: 3,
              text: "pesada",
              value: "heavy",
            },
          ],
          options2: [],
        },
        {
          id: 4,
          answer1: "earthquake",
          answer2: "",
          questionText1: "A veces,",
          questionText2: "puede causar un deslave.",
          questionText3: "",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "un terremoto",
              value: "earthquake",
            },
            {
              id: 2,
              text: "una sequía",
              value: "drought",
            },
            {
              id: 3,
              text: "un incendio forestal",
              value: "forest fire",
            },
          ],
          options2: [],
        },
      ],
    },
  ],

  submitAnswer: buttonLabels.submitAnswer,
  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  wrongMsg: globalConfig.incorrectToastMessage,
  partialWrongMsg: "Una de tus respuestas es incorrecta. ¡Inténtalo otra vez!",

  questionHeading: "Pregunta: -1- de -4-",
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "Has completado exitosamente esta simulación.",
  },
  transitionPopup: {
    ...globalConfig.transitionPopup,
    content: "Has contestado todas las preguntas.",
  },
  messages: [
    {
      type: "reset",
      resetButtonText: buttonLabels.yes,
      buttonContinueText: buttonLabels.no,
      content: globalConfig.resetPopupText,
    },
  ],
  activityHeading:
    "En esta simulación, el estudiante verá ejemplos de cambios rápidos que han ocurrido en la superficie terrestre y elegirá el proceso que los provocó. El estudiante también elegirá palabras para completar oraciones que describan los cambios que ocurrieron.",
  buttonLabels: { ...globalConfig.buttonLabels },
};

export default data;
