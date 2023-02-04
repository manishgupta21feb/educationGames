import commonData from "../../app/data/data.es";
import globalConfig from "../../app/data/data.es";
const buttonLabels = { ...globalConfig.buttonLabels };
import ecosystem1 from "../assets/images/ecosystem1.png";
import ecosystem2 from "../assets/images/ecosystem2.png";
import ecosystem3 from "../assets/images/ecosystem3.png";

const data = {
  submitAnswer: buttonLabels.submitAnswer,
  continue: buttonLabels.continue,
  next: buttonLabels.next,
  finish: buttonLabels.finish,
  buttonLabels: { ...commonData.buttonLabels },
  introText:
    "Examina el ecosistema forestal. Explora cómo los cambios medioambientales afectan un ecosistema.",
  infoText:
    "Examina el ecosistema forestal y explora cómo los cambios medioambientales afectan un ecosistema. Lee el texto que aparece en la pantalla y luego contesta la pregunta.",
  observationMotive:
    "En esta simulación, los estudiantes explorarán cómo los cambios medioambientales afectan un ecosistema.",
  resetPopupText: commonData.resetPopupText,
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  partialToastMessage:
    "¡No es del todo correcto! ¡Inténtalo otra vez y arregla tus respuestas incorrectas!",
  resetLiveText: commonData.resetLiveText,
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "¿Qué ocurre si se afecta negativamente un ecosistema de alguna manera? Vamos a descubrirlo.",
  },
  completionPopup: {
    ...commonData.completionPopup,
    content:
      "¡Has explorado exitosamente un ecosistema forestal y lo que ocurre cuando este se altera!",
  },

  triangles: ["5", "11", "4", "6", "4", "3", "5", "4", "8", "4"],

  names: [
    "Gavilán rojo",
    "Zorro rojo",
    "Ardilla",
    "Mapache",
    "Lagarto",
    "Frutos secos",
    "Saltamontes",
    "Planta verde",
  ],

  ecosystem: {
    title:
      "Las redes alimenticias representan las relaciones entre todos los organismos de una comunidad en un ecosistema. Para comenzar, escoge uno de los siguientes ecosistemas.",
    alt: "Una red alimenticia formada por un gavilán, una ardilla, un zorro, un mapache, un lagarto, unos frutos secos, un saltamontes y un poco de pasto.",
    type: [
      {
        serNo: 1,
        id: "ecosystem1",
        name: "Ecosistema 1",
      },
      {
        serNo: 2,
        id: "ecosystem2",
        name: "Ecosistema 2",
      },
      {
        serNo: 3,
        id: "ecosystem3",
        name: "Ecosistema 3",
      },
    ],
  },

  FirstScreenAnswers: [
    {
      id: "ecosystem1",
      answers: [3, 1, 3, 2, 4, 4],
    },
    {
      id: "ecosystem2",
      answers: [2, 1, 3, 1, 3, 4],
    },
    {
      id: "ecosystem3",
      answers: [1, 2, 4, 1, 5, 3],
    },
  ],

  hotspotData: [
    {
      id: "redhawk",
      altText: "Gavilán rojo",
      serNo: 1,
      text: "Gavilán rojo",
      class: "redhawk",
    },
    {
      id: "redfox",
      altText: "Zorro rojo",
      serNo: 2,
      text: "Zorro rojo",
      class: "redfox",
    },
    {
      id: "raccoon",
      altText: "Mapache",
      serNo: 3,
      text: "Mapache",
      class: "raccoon",
    },
    {
      id: "lizard",
      altText: "Lagarto",
      serNo: 4,
      text: "Lagarto",
      class: "lizard",
    },
    {
      id: "squirrel",
      altText: "Ardilla",
      serNo: 5,
      text: "Ardilla",
      class: "squirrel",
    },
    {
      id: "nuts",
      altText: "Frutos secos",
      serNo: 6,
      text: "Frutos secos",
      class: "nuts",
    },
    {
      id: "grasshopper",
      altText: "Saltamontes",
      serNo: 7,
      text: "Saltamontes",
      class: "grasshopper",
    },
    {
      id: "greenplant",
      altText: "Planta verde",
      serNo: 8,
      text: "Planta verde",
      class: "greenplant",
    },
  ],

  nextSectionData: [
    {
      serNo: 1,
      questionText:
        "Una fuerte helada afectó este ecosistema durante un largo período de tiempo y disminuyó la cantidad de plantas verdes disponibles. <b>¿A qué especies afecta directamente este cambio?</b>",
      questionHeading: "Pregunta: 1 de 3",
      answer: ["grasshopper", "raccoon", "squirrel"],
    },
    {
      serNo: 2,
      questionText:
        "Una empresa maderera corta todos los árboles de frutos secos de este ecosistema. <b>¿A qué especies afecta directamente este cambio?</b>",
      questionHeading: "Pregunta: 2 de 3",
      answer: ["squirrel", "raccoon", "grasshopper"],
    },
    {
      serNo: 3,
      questionText:
        "Un camión choca contra el corral de cerdos de una granja local. Una docena de cerdos llegan a este ecosistema y se vuelven silvestres. Los cerdos silvestres destruyen las plantas verdes y se comen todos los saltamontes y lagartos. <b>¿A qué especies afecta directamente este cambio?</b>",
      questionHeading: "Pregunta: 3 de 3",
      answer: ["grasshopper", "lizard", "greenplant", "nuts"],
    },
  ],

  ecosystemScreen: {
    questionHeading: "¿Cuántos individuos de cada especie hay?",
    ecosystem1: {
      id: "ecosystem1_view",
      title: "Ecosistema 1",
      src: ecosystem1,
      alt: "Un ecosistema forestal con 3 zorros, 2 mapaches, 1 gavilán, 4 lagartos, 3 ardillas y 4 saltamontes.",
    },
    ecosystem2: {
      id: "ecosystem2_view",
      title: "Ecosistema 2",
      src: ecosystem2,
      alt: "Un ecosistema forestal con 2 zorros, 1 mapache, 3 ardillas, 3 lagartos, 4 saltamontes y 1 gavilán.",
    },
    ecosystem3: {
      id: "ecosystem3_view",
      title: "Ecosistema 3",
      src: ecosystem3,
      alt: "Un ecosistema con 2 gavilanes, 1 zorro, 1 mapache, 4 ardillas, 5 lagartos y 3 saltamontes.",
    },
  },

  selectOptions: {
    redFox: [
      {
        title: "Zorros rojos",
        id: "redFox0",
        text: "0",
        value: 0,
        class: "redFox",
      },
      {
        id: "redFox1",
        text: "1",
        value: 1,
        class: "redFox",
      },
      {
        id: "redFox2",
        text: "2",
        value: 2,
        class: "redFox",
      },
      {
        id: "redFox3",
        text: "3",
        value: 3,
        class: "redFox",
      },
      {
        id: "redFox4",
        text: "4",
        value: 4,
        class: "redFox",
      },
      {
        id: "redFox5",
        text: "5",
        value: 5,
        class: "redFox",
      },
      {
        id: "redFox6",
        text: "6",
        value: 6,
        class: "redFox",
      },
    ],
    redHawks: [
      {
        title: "Gavilanes rojos",
        id: "redHawk0",
        text: "0",
        value: 0,
        class: "redHawks",
      },
      {
        id: "redHawk1",
        text: "1",
        value: 1,
        class: "redHawks",
      },
      {
        id: "redHawk2",
        text: "2",
        value: 2,
        class: "redHawks",
      },
      {
        id: "redHawk3",
        text: "3",
        value: 3,
        class: "redHawks",
      },
      {
        id: "redHawk4",
        text: "4",
        value: 4,
        class: "redHawks",
      },
      {
        id: "redHawk5",
        text: "5",
        value: 5,
        class: "redHawks",
      },
      {
        id: "redHawk6",
        text: "6",
        value: 6,
        class: "redHawks",
      },
    ],
    squirrels: [
      {
        title: "Ardillas",
        id: "squirrels0",
        text: "0",
        value: 0,
        class: "squirrels",
      },
      {
        id: "squirrels1",
        text: "1",
        value: 1,
        class: "squirrels",
      },
      {
        id: "squirrels2",
        text: "2",
        value: 2,
        class: "squirrels",
      },
      {
        id: "squirrels3",
        text: "3",
        value: 3,
        class: "squirrels",
      },
      {
        id: "squirrels4",
        text: "4",
        value: 4,
        class: "squirrels",
      },
      {
        id: "squirrels5",
        text: "5",
        value: 5,
        class: "squirrels",
      },
      {
        id: "squirrels6",
        text: "6",
        value: 6,
        class: "squirrels",
      },
    ],
    raccoon: [
      {
        title: "Mapaches",
        id: "raccoon0",
        text: "0",
        value: 0,
        class: "raccoon",
      },
      {
        id: "raccoon1",
        text: "1",
        value: 1,
        class: "raccoon",
      },
      {
        id: "raccoon2",
        text: "2",
        value: 2,
        answer: "answer",
        class: "raccoon",
      },
      {
        id: "raccoon3",
        text: "3",
        value: 3,
        class: "raccoon",
      },
      {
        id: "raccoon4",
        text: "4",
        value: 4,
        class: "raccoon",
      },
      {
        id: "raccoon5",
        text: "5",
        value: 5,
        class: "raccoon",
      },
      {
        id: "raccoon6",
        text: "6",
        value: 6,
        class: "raccoon",
      },
    ],
    lizards: [
      {
        title: "Lagartos",
        id: "lizards0",
        text: "0",
        value: 0,
        class: "lizards",
      },
      {
        id: "lizards1",
        text: "1",
        value: 1,
        class: "lizards",
      },
      {
        id: "lizards2",
        text: "2",
        value: 2,
        class: "lizards",
      },
      {
        id: "lizards3",
        text: "3",
        value: 3,
        class: "lizards",
      },
      {
        id: "lizards4",
        text: "4",
        value: 4,
        answer: "answer",
        class: "lizards",
      },
      {
        id: "lizards5",
        text: "5",
        value: 5,
        class: "lizards",
      },
      {
        id: "lizards6",
        text: "6",
        value: 6,
        class: "lizards",
      },
    ],
    grasshoppers: [
      {
        title: "Saltamontes",
        id: "grasshoppers0",
        text: "0",
        value: 0,
        class: "grasshoppers",
      },
      {
        id: "grasshoppers1",
        text: "1",
        value: 1,
        class: "grasshoppers",
      },
      {
        id: "grasshoppers2",
        text: "2",
        value: 2,
        class: "grasshoppers",
      },
      {
        id: "grasshoppers3",
        text: "3",
        value: 3,
        class: "grasshoppers",
      },
      {
        id: "grasshoppers4",
        text: "4",
        value: 4,
        answer: "answer",
        class: "grasshoppers",
      },
      {
        id: "grasshoppers5",
        text: "5",
        value: 5,
        class: "grasshoppers",
      },
      {
        id: "grasshoppers6",
        text: "6",
        value: 6,
        class: "grasshoppers",
      },
    ],
  },
};

export default data;
