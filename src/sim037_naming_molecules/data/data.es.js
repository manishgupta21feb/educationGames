import globalData from "../../app/data";

const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: globalData.buttonLabels.start,
  buttonContinueLabel: globalData.buttonLabels.start,
  content: [
    "Usarás tu conocimiento sobre las fórmulas y los nombres químicos para elegir las puertas correctas para escapar de este viejo y tenebroso edificio.",
    "¡Buena suerte!",
  ],
};

const infoString = [
  "Parea el nombre o la fórmula que se indica con las opciones que aparecen en las puertas. ¡Elige la opción que corresponde al nombre o a la fórmula!",
];

const RawTextData = {
  classifyingMatterContent: [
    {
      id: 0,
      options: [
        {
          id: 1,
          label: "<span>NaCl<sub></sub></span>",
          className: "button1",
          text: "NaCl",
          ariaLabel: "N a C l",
        },
        {
          id: 2,
          label: "<span>NaCl<sub>2</sub><span>",
          className: "button2",
          text: "NaCl2",
          ariaLabel: "N, a, C, l, subíndice 2",
          hideTooltip: true,
        },
        {
          id: 3,
          label: "<span>NaClO<sub>3</sub><span>",
          className: "button3",
          text: "NaClO3",
          ariaLabel: "N, a, C, l, O, subíndice 3",
          hideTooltip: true,
        },
      ],
      signBoardQuestion: "Cloruro de sodio",
      headingQuestion: "Cloruro de sodio",
      answerKey: 1,
      className: "1",
      altText:
        "Una pared marrón con tres puertas marrones, cada una de ellas etiquetada con una fórmula química, en una habitación con un piso de losetas cuadradas negras y grises. En la parte inferior, hay una etiqueta que dice «Cloruro de sodio».",
      liveText:
        "Una puerta marrón etiquetada con la fórmula química «NaCl», la cual se abre hacia una habitación con una pared verde.",
    },
    {
      id: 1,
      options: [
        {
          id: 1,
          label: "Cloruro de carbono",
          className: "button4",
          text: "Cloruro de carbono",
          ariaLabel: "Cloruro de carbono",
        },
        {
          id: 2,
          label: "Tetracloruro de carbono",
          className: "button5",
          text: "Tetracloruro de carbono",
          ariaLabel: "Tetracloruro de carbono",
        },
        {
          id: 3,
          label: "Cloruro de carbono (IV)",
          className: "button6",
          text: "Cloruro de carbono (IV)",
          ariaLabel: "Cloruro de carbono cuatro",
          // hideTooltip: true,
        },
      ],
      signBoardQuestion: "<span>CCl<sub>4</sub><span>",
      headingQuestion: "C, C, l, subíndice 4",
      answerKey: 2,
      className: "2",
      altText:
        "Una pared verde con tres puertas marrones etiquetadas: «Tetracloruro de carbono», «Cloruro de carbono cuatro» y «Cloruro de carbono» en una habitación con un piso de madera. En la parte inferior, hay una etiqueta que dice «C, C, l, subíndice 4».",
      liveText:
        "Una puerta marrón etiquetada con el nombre químico «Tetracloruro de sodio», la cual se abre hacia una habitación con una pared de ladrillos y un piso de madera.",
    },
    {
      id: 2,
      options: [
        {
          id: 1,
          label: "Óxido de hierro",
          className: "button7",
          text: "Óxido de hierro",
          ariaLabel: "Óxido de hierro",
        },
        {
          id: 2,
          label: "Trióxido de hierro",
          className: "button8",
          text: "Trióxido de hierro",
          ariaLabel: "Trióxido de hierro",
        },
        {
          id: 3,
          label: "Óxido de hierro (III)",
          className: "button9",
          text: "Óxido de hierro (III)",
          ariaLabel: "Óxido de hierro tres",
        },
      ],
      signBoardQuestion: "<span>Fe<sub>2</sub>O<sub>3</sub><span>",
      headingQuestion: "F, e, subíndice 2, O, subíndice 3",
      answerKey: 3,
      className: "3",
      altText:
        "Una pared de ladrillos con tres puertas marrones etiquetadas: «Óxido de hierro», «Óxido de hierro tres» y «Trióxido de hierro» en una habitación con un piso de madera. En la parte inferior, hay una etiqueta que dice «F, e, subíndice 2, O, subíndice 3».",
      liveText:
        "Una puerta marrón etiquetada con el nombre químico «Óxido de hierro tres», la cual se abre hacia una habitación con una pared oscura que tiene varios ladrillos rojos expuestos.",
    },
    {
      id: 3,
      options: [
        {
          id: 1,
          label: "<span>NH<sub>4</sub>Cl</span>",
          className: "button10",
          text: "NH4Cl",
          ariaLabel: "N, H, subíndice 4, C, l",
          hideTooltip: true,
        },
        {
          id: 2,
          label: "<span>(NH)<sub>4</sub>Cl<span>",
          className: "button11",
          text: "(NH)4Cl",
          ariaLabel: "NH entre paréntesis, subíndice 4, C, l",
          hideTooltip: true,
        },
        {
          id: 3,
          label: "<span>NHCl<sub>4</sub><span>",
          className: "button12",
          text: "NHCl4",
          ariaLabel: "N, H, C, l, subíndice 4",
          hideTooltip: true,
        },
      ],
      signBoardQuestion: "Cloruro de amonio",
      headingQuestion: "Cloruro de amonio",
      answerKey: 1,
      className: "4",
      altText:
        "Una pared oscura con tres puertas de color púrpura  etiquetadas: «N, H, subíndice 4, C, l», «N, H, C, l, subíndice 4» y «NH entre paréntesis, subíndice 4, C, l» en una habitación oscura. En la parte inferior de la imagen, hay una etiqueta que dice «Cloruro de amonio».",
      liveText:
        "Una puerta púrpura etiquetada con la fórmula química «NH₄Cl», la cual se abre hacia el exterior y muestra un día soleado.",
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

  questionHeading: globalData.questionCounterString,

  transitionPopup: {
    ...globalData.transitionPopup,
    content: "",
  },

  completionPopup: {
    ...globalData.completionPopup,
    content: "Has contestado correctamente todas las preguntas.",
  },

  resetText: [
    {
      type: "reset",
      resetButtonText: globalData.buttonLabels.yes,
      buttonContinueText: globalData.buttonLabels.no,
      content: globalData.resetPopupText,
    },
  ],
  mainScreenText:
    "Elige la puerta cuya opción corresponde al nombre o a la fórmula. Repite esta operación con cada puerta. Esta actividad terminará cuando la puerta abra hacia el exterior del edificio.",
  rightMsg: globalData.correctToastMessage,
  wrongMsg: globalData.incorrectToastMessage,
  buttonClose: globalData.buttonLabels.close,
  reset: globalData.buttonLabels.reset,
  info: globalData.buttonLabels.info,
  continueButton: globalData.buttonLabels.continue,
  resetLiveText: globalData.resetLiveText,
  screen1Heading:
    "Para escapar de cada habitación, los usuarios seleccionarán la puerta cuyo nombre o fórmula corresponde al compuesto químico indicado. Si eligen la puerta correcta, aparecerá el próximo nombre y un nuevo conjunto de tres puertas. El juego continuará hasta que pasen por 4 conjuntos de puertas y abran la última puerta que da hacia el exterior del edificio.",
  doorZoomMap: {
    0: "left",
    1: "center",
    2: "right",
  },
};

export default RawTextData;
