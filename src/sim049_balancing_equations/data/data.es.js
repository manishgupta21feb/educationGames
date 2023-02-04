import globalData from "../../app/data/data.es";

const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: globalData.buttonLabels.start,
  buttonContinueLabel: globalData.buttonLabels.start,
  content: [
    "¡Ajusta el número de moléculas en cada lado para balancear las siguientes reacciones!",
  ],
};

const infoString = [
  "¡Haz clic sobre las flechas para aumentar o disminuir el número de moléculas! Presiona el botón «Comprobar» para verificar el balanceo.",
];

const arrowTailInlineSVG = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
preserveAspectRatio="none" x="0px" y="0px" width="3px" height="108px" viewBox="0 0 3 108">
<g transform="matrix( 1.6818084716796875, 0, 0, 1, -0.7,0) ">
    <path fill="#052978" stroke="none" d="M 2.65 0 L 0.45 0 0.45 108 2.65 108 2.65 0 Z" />
</g>
</svg>`;

const RawTextData = {
  atomsData: [
    {
      id: "labels",
      components: [
        { id: "hydrogen", label: "Hidrógeno" },
        { id: "oxygen", label: "Oxígeno" },
        { id: "carbon", label: "Carbono" },
      ],
    },
  ],

  mcqOptions: [
    {
      id: "synthesis_of_water",
      label: "Síntesis de agua",
      text: "Síntesis de agua",
    },
    {
      id: "combustion_of_propane",
      label: "Combustión de propano",
      text: "Combustión de propano",
    },
  ],

  counterLabels: [
    {
      id: "oxygen",
      labelOne:
        "aumentar el coeficiente de la molécula de O₂ en el lado de los reactivos",
      labelTwo:
        "disminuir el coeficiente de la molécula de O₂ en el lado de los reactivos",
      increment: "Aumentar el oxígeno",
      decrement: "Disminuir el oxígeno",
      formula: "O<sub>2</sub>",
    },
    {
      id: "hydrogen",
      labelOne:
        "aumentar el coeficiente de la molécula de H₂ en el lado de los reactivos",
      labelTwo:
        "disminuir el coeficiente de la molécula de H₂ en el lado de los reactivos",
      increment: "Aumentar el hidrógeno",
      decrement: "Disminuir el hidrógeno",
      formula: "H<sub>2</sub>",
    },
    {
      id: "water",
      water: "H 2 O",
      labelOne:
        "aumentar el coeficiente de la molécula de H₂O en el lado de los productos",
      labelTwo:
        "disminuir el coeficiente de la molécula de H₂O en el lado de los productos",
      increment: "Aumentar el agua",
      decrement: "Disminuir el agua",
      formula: "H<sub>2</sub>O",
    },
    {
      id: "carbon_di_oxide",
      carbon: "C O 2",
      labelOne:
        "aumentar el coeficiente de la molécula de CO₂ en el lado de los productos",
      labelTwo:
        "disminuir el coeficiente de la molécula de CO₂ en el lado de los productos",
      increment: "Aumentar el dióxido de carbono",
      decrement: "Disminuir el dióxido de carbono",
      formula: "CO<sub>2</sub>",
    },
    {
      id: "propane",
      propane: "C 3 H 8",
      labelOne:
        "aumentar el coeficiente de la molécula de C₃H₈ en el lado de los reactivos",
      labelTwo:
        "disminuir el coeficiente de la molécula de C₃H₈ en el lado de los reactivos",
      increment: "Aumentar el propano",
      decrement: "Disminuir el propano",
      formula: "C<sub>3</sub>H<sub>8</sub>",
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

  transitionPopup: {
    ...globalData.transitionPopup,
    // content:
    //   "Now that you have explored elements, compounds, and mixtures, show what you know.",
  },

  completionPopup: {
    ...globalData.completionPopup,
    // content: "You have correctly answered all the questions.",
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
    "¡Usa las flechas para ajustar el número de moléculas presentes en la reacción y balancear según la ley de conservación de la masa! En el lado izquierdo de cada balanza van los átomos de los reactivos, mientras que en el lado derecho van los átomos de los productos. Cuando hayas terminado, presiona el botón «Comprobar» para verificar si balanceaste la reacción correctamente.",
  rightMsg: globalData.correctToastMessage,
  wrongMsg: globalData.incorrectToastMessage,
  reset: globalData.buttonLabels.reset,
  info: globalData.buttonLabels.info,
  resetLiveText: globalData.resetLiveText,
  screen1Heading:
    "Los estudiantes usarán la ley de conservación de la masa para balancear ecuaciones químicas.",
  //   fullViewBGAlt: "Kitchen background with different appliances on the counter.",
  check: globalData.buttonLabels.check,
  oxygenLiveText: "El coeficiente del reactivo O₂ -1- a -2-",
  hydrogenLiveText: "El coeficiente del reactivo H₂ -1- a -2-",
  carbonLiveText: "El coeficiente del producto CO₂ -1- a -2-",
  waterLiveText: "El coeficiente del producto H₂O -1- a -2-",
  propaneLiveText: "El coeficiente del reactivo C₃H₈ -1- a -2-",

  equations: [
    {
      id: "equation1",
      assocId: "synthesis_of_water",
      equation: [
        { id: "eq1", value: "O<sub>2</sub>", ariaLabel: "O 2" },
        { id: "eq2", value: "+", ariaLabel: "más" },
        { id: "eq3", value: "H<sub>2</sub>", ariaLabel: "H 2" },
        {
          id: "eq4",
          value: `<span class='arrow-tail'><span class='arrow-head'></span>${arrowTailInlineSVG}</span>`,
          ariaLabel: "reacciona para producir",
        },
        { id: "eq5", value: "H<sub>2</sub>O", ariaLabel: "H 2 O" },
      ],
    },
    {
      id: "equation2",
      assocId: "combustion_of_propane",
      equation: [
        {
          id: "eq1",
          value: "C<sub>3</sub>H<sub>8</sub>",
          ariaLabel: "C 3 H 8",
        },
        { id: "eq2", value: "+", ariaLabel: "más" },
        { id: "eq3", value: "O<sub>2</sub>", ariaLabel: "O 2" },
        {
          id: "eq4",
          value: `<span class='arrow-tail'><span class='arrow-head'></span>${arrowTailInlineSVG}</span>`,
          ariaLabel: "reacciona para producir",
        },
        { id: "eq5", value: "CO<sub>2</sub>", ariaLabel: "C O 2" },
        { id: "eq6", value: "+", ariaLabel: "más" },
        { id: "eq7", value: "H<sub>2</sub>O", ariaLabel: "H 2 O" },
      ],
    },
  ],

  circleAlt: "círculo",
  circlesAlt: "círculos",

  oxygenEmptyBalanceAlt:
    "Una balanza gris formada por un punto de apoyo y una barra plana. Debajo del punto de apoyo aparece la palabra «oxígeno». La barra está en equilibrio sobre el punto de apoyo.",
  hydrogenEmptyBalanceAlt:
    "Una balanza gris formada por un punto de apoyo y una barra plana. Debajo del punto de apoyo aparece la palabra «hidrógeno». La barra está en equilibrio sobre el punto de apoyo.",
  carbonEmptyBalanceAlt:
    "Una balanza gris formada por un punto de apoyo y una barra plana. Debajo del punto de apoyo aparece la palabra «carbono». La barra está en equilibrio sobre el punto de apoyo.",

  emptyRightSideAlt: "No hay nada en el lado derecho.",
  emptyLeftSideAlt: "No hay nada en el lado izquierdo.",

  rightSideLowerAlt: "El lado derecho está más bajo que el lado izquierdo.",
  leftSideLowerAlt: "El lado izquierdo está más bajo que el lado derecho.",

  oxygenAddedLeft:
    "En el lado izquierdo de la balanza hay -1- -2- rojo etiquetado con la letra «O» que representa el oxígeno.",
  oxygenAddedRight:
    "En el lado derecho de la balanza hay -1- -2- rojo etiquetado con la letra «O» que representa el oxígeno.",

  hydrogenAddedLeft:
    "En el lado izquierdo de la balanza hay -1- -2- gris etiquetado con la letra «H» que representa el hidrógeno.",
  hydrogenAddedRight:
    "En el lado derecho de la balanza hay -1- -2- gris etiquetado con la letra «H» que representa el hidrógeno.",

  carbonAddedLeft:
    "En el lado izquierdo de la balanza hay -1- -2- gris etiquetado con la letra «C» que representa el carbono.",
  carbonAddedRight:
    "En el lado derecho de la balanza hay -1- -2- gris etiquetado con la letra «C» que representa el carbono.",

  balanced: "La barra está en equilibrio.",

  increased: "aumentó",
  decreased: "disminuyó ",
};

export default RawTextData;
