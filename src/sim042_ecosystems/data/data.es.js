import globalCommonData from "../../app/data";

const data = {
    activityInstructions: " ",
    hotspots: [
      {
        id: "cloud",
        text: "Nube",
        type: "nonliving",
        answer: "",
        heading: " <strong>Nube</strong>",
        matched: "",
      },
      {
        id: "sun",
        answer: "",
        matched: "",
        text: "Sol",
        type: "nonliving",
        heading: "<strong>Sol</strong>",
      },
      {
        id: "rain",
        text: "Lluvia",
        type: "nonliving",
        answer: "",
        heading: "<strong>Lluvia</strong>",
      },
      {
        id: "rock",
        text: "Lluvia",
        type: "nonliving",
        answer: "",
        heading: " <strong>Lluvia</strong>",
        matched: "",
      },
      {
        id: "tree",
        type: "living",
        text: "Árbol",
        matched: "",
        answer: "",
        heading: "<strong> Árbol </strong>",
      },
      {
        id: "grass",
        text: "Pasto",
        type: "living",
        answer: "",
        heading: " <strong>Pasto</strong>",
        matched: "",
      },
  
      {
        id: "crane",
        text: "Grulla",
        type: "living",
        answer: "",
        heading: " <strong>Grulla</strong>",
        matched: "",
      },
      {
        id: "duck",
        text: "Pato",
        type: "living",
        answer: "",
        heading: " <strong>Pato</strong>",
      },
      {
        id: "algae",
        text: "Algas",
        type: "living",
        answer: "",
        heading: " <strong>Algas</strong>",
        matched: "",
      },
      {
        id: "pond",
        text: "Estanque",
        type: "nonliving",
        answer: "",
        heading: " <strong>Estanque</strong>",
        matched: "",
      },
  
      {
        id: "soil",
        text: "Suelo",
        type: "nonliving",
        answer: "",
        heading: " <strong>Suelo</strong>",
        matched: "",
      },
  
      {
        id: "fish",
        text: "Pez",
        type: "living",
        answer: "",
        heading: " <strong>Pez</strong>",
        matched: "",
      },
    ],
  
    answerOptions: [
        {
          id: "living",
          disabled: false,
          text: "Seres vivos",
          label: "Seres vivos",
        },
        {
          id: "nonliving",
          disabled: false,
          text: "Objetos no vivos",
          label: "Objetos no vivos",
        },
      ],

      headingOne: "Seres vivos",
      headingTwo: "Objetos no vivos",

    
      buttonLabels: { ...globalCommonData.buttonLabels },
    
      completionPopup: {
        ...globalCommonData.completionPopup,
        content:
        "Has clasificado correctamente todos los elementos del sistema como seres vivos u objetos no vivos.",
      },
      hotspotSelectionLiveText: "-1- está marcado como -2-.",
      correctToastMessage: globalCommonData.correctToastMessage,
      incorrectToastMessage: globalCommonData.incorrectToastMessage,
      partiallyIncorrectToastMessage:
      "Algunos elementos no están en la categoría correcta. ¡Inténtalo otra vez!",
      helpPopupText:
      "Pulsa las zonas activas para identificar los elementos como seres vivos u objetos no vivos.",
      initialInfoPopupText: [
         "¡Un ecosistema es un lugar muy animado! Está formado por seres vivos y objetos no vivos.",
         "Identificarás partes de este ecosistema y decidirás si son seres vivos u objetos no vivos.",
        ],
      resetPopupText: globalCommonData.resetPopupText,

      fossilsBGAltText:
      "Un lago lleno de seres vivos y objetos no vivos. Zonas activas pulsables en el Sol, un árbol, una nube, la lluvia, la grulla, el pato, el estanque, la roca, el suelo, un pez, las algas y el pasto.",
    };
    
    export default data;
    