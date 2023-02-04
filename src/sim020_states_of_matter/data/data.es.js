import globalData from "../../app/data/data.es";

const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: globalData.buttonLabels.start,
  buttonContinueLabel: globalData.buttonLabels.start,
  content:
    "La materia es cualquier cosa que tenga masa y ocupe espacio. Todo lo que existe en la Tierra es materia. En esta actividad, podrás cambiar el estado de la materia de un objeto.",
};

const infoString = [
  "Elige un objeto y selecciona la temperatura correcta para cambiar el estado de la materia de ese objeto.",
];

const RawTextData = {
  classifyingMatterContent: [
    {
      id: 1,
      label: "Helado",
      alt: "Helado",
      className: "ice-cream",
      buttons: [
        {
          id: 1,
          label: "80 °F",
          className: "temp-button-one",
          backgroundImg: "2",
          altText:
            "Un plato con helado rosa completamente derretido. A la izquierda hay un termómetro que marca 80 grados Fahrenheit.",
          state: "Líquido",
          liveText: "Helado transformado en líquido",
        },
        {
          id: 2,
          label: "35 °F",
          className: "temp-button-two",
          backgroundImg: "1",
          altText:
            "Un plato en cuyo centro hay una bola de helado rosa que ha empezado a derretirse. A la izquierda hay un termómetro que marca 35 grados Fahrenheit.",
          state: "Parcialmente derretido",
          liveText: "Helado parcialmente derretido",
        },
        {
          id: 3,
          label: "20 °F",
          className: "temp-button-three",
          backgroundImg: "0",
          altText:
            "Un plato en cuyo centro hay una bola de helado rosa en estado sólido. A la izquierda hay un termómetro que marca 20 grados Fahrenheit.",
          state: "Sólido",
          liveText: "Helado en estado sólido",
        },
      ],
    },
    {
      id: 2,
      label: "Chocolate",
      alt: "Chocolate",
      className: "chocolate",
      buttons: [
        {
          id: 1,
          label: "120 °F",
          className: "temp-button-seven",
          backgroundImg: "2",
          altText:
            "Un plato con chocolate marrón oscuro en forma de charco, pero en estado sólido. A la izquierda hay un termómetro que marca 120 grados Fahrenheit.",
          state: "Sólido derretido",
          liveText: "Chocolate transformado en Sólido derretido",
        },
        {
          id: 2,
          label: "110 °F",
          className: "temp-button-eight",
          backgroundImg: "1",
          altText:
            "Un plato con una barra de chocolate que se ha derretido y ha formado un charco marrón. A la izquierda hay un termómetro que marca 110 grados Fahrenheit.",
          state: "Líquido",
          liveText: "Chocolate transformado en líquido",
        },
        {
          id: 3,
          label: "32 °F",
          className: "temp-button-nine",
          backgroundImg: "0",
          altText:
            "Un plato con una barra de chocolate en estado sólido. A la izquierda hay un termómetro que marca 32 grados Fahrenheit.",
          state: "Sólido",
          liveText: "Chocolate en estado sólido",
        },
      ],
    },
    {
      id: 3,
      label: "Hielo",
      alt: "Hielo",
      className: "ice",
      buttons: [
        {
          id: 1,
          label: "212 °F",
          className: "temp-button-four",
          backgroundImg: "2",
          altText:
            "Un plato en cuyo centro hay una pequeña gota de agua de la que sube vapor. A la izquierda hay un termómetro que marca 212 grados Fahrenheit.",
          state: "Vapor de agua (gas)",
          liveText: "Hielo transformado en vapor de agua (gas)",
        },
        {
          id: 2,
          label: "80 °F",
          className: "temp-button-five",
          backgroundImg: "1",
          altText:
            "Un plato lleno de agua en estado líquido. A la izquierda hay un termómetro que marca 80 grados Fahrenheit.",
          state: "Líquido",
          liveText: "Hielo convertido en líquido",
        },
        {
          id: 3,
          label: "20 °F",
          className: "temp-button-six",
          backgroundImg: "0",
          altText:
            "Un plato en cuyo centro hay tres cubos de hielo en estado sólido. A la izquierda hay un termómetro que marca 20 grados Fahrenheit.",
          state: "Sólido",
          liveText: "Hielo en estado sólido",
        },
      ],
    },
  ],

  dialogData: {
    start: {
      ...info,
    },
    info: {
      ...info,
      header: "",
      buttonContinueText: globalData.buttonLabels.close,
      buttonContinueLabel: globalData.buttonLabels.close,
      buttonClasses: "",
      content: infoString,
    },
    correct: {
      ...info,
      buttonContinueText: globalData.buttonLabels.continue,
      buttonContinueLabel: globalData.buttonLabels.continue,
    },
  },
  kitchenItems: [
    {
      id: "ice_cream",
      text: "Helado",
      className: "ice-cream",
    },
    {
      id: "ice",
      text: "Hielo",
      className: "ice",
    },
    {
      id: "chocolate",
      text: "Chocolate",
      className: "chocolate",
    },
  ],
  activityHeading:
    "En esta simulación, el estudiante observará que los cambios de estado de los objetos corresponden a un cambio en la temperatura.",
  mainScreenText:
    "Selecciona estos objetos y ajusta la temperatura para ver qué los hace cambiar entre los estados líquido, sólido y gaseoso.",

  questionHeading: "Question -1- of 4.",

  transitionPopup: {
    ...globalData.transitionPopup,
    content: "",
    //   "Now that you have explored elements, compounds, and mixtures, show what you know.",
  },

  completionPopup: {
    ...globalData.completionPopup,
    content: "",
  },

  resetText: [
    {
      type: "reset",
      resetButtonText: globalData.buttonLabels.yes,
      buttonContinueText: globalData.buttonLabels.no,
      content: globalData.resetPopupText,
    },
  ],

  rightMsg: globalData.correctToastMessage,
  wrongMsg: globalData.incorrectToastMessage,
  submitAnswer: globalData.buttonLabels.submitAnswer,
  buttonFinish: globalData.buttonLabels.finish,
  buttonNext: globalData.buttonLabels.next,
  buttonClose: globalData.buttonLabels.close,
  reset: globalData.buttonLabels.reset,
  info: globalData.buttonLabels.info,
  continueButton: globalData.buttonLabels.continue,
  resetLiveText: globalData.resetLiveText,
  fullViewBGAlt:
    "Una mesa con tres platos. El primer plato tiene una bola de helado rosa. El segundo plato tiene una barra de chocolate. El tercer plato tiene 3 cubos de hielo.",
};

export default RawTextData;
