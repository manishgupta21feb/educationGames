import globalData from "../../app/data/data.en";

const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: globalData.buttonLabels.start,
  buttonContinueLabel: globalData.buttonLabels.start,
  content: [
    "Balance the following reactions by adjusting the number of molecules on each side!",
  ],
};

const infoString = [
  "Click the arrows to adjust the number of molecules up and down! Press the Check button to verify the balancing.",
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
        { id: "hydrogen", label: "Hydrogen" },
        { id: "oxygen", label: "Oxygen" },
        { id: "carbon", label: "Carbon" },
      ],
    },
  ],

  mcqOptions: [
    {
      id: "synthesis_of_water",
      label: "Synthesis of water",
      text: "Synthesis of water",
    },
    {
      id: "combustion_of_propane",
      label: "Combustion of propane",
      text: "Combustion of propane",
    },
  ],

  counterLabels: [
    {
      id: "oxygen",
      labelOne: "increase coefficient of O 2 molecule on reactants side",
      labelTwo: "decrease coefficient of O 2 molecule on reactants side",
      increment: "Increase Oxygen",
      decrement: "Decrease Oxygen",
      formula: "O<sub>2</sub>",
    },
    {
      id: "hydrogen",
      labelOne: "increase coefficient of h 2  molecule on reactants side",
      labelTwo: "decrease coefficient of h 2  molecule on reactants side",
      increment: "Increase Hydrogen",
      decrement: "Decrease Hydrogen",
      formula: "H<sub>2</sub>",
    },
    {
      id: "water",
      water: "H 2 O",
      labelOne: "increase coefficient of h 2 o  molecule on products side",
      labelTwo: "decrease coefficient of h 2 o molecule on products side",
      increment: "Increase Water",
      decrement: "Decrease Water",
      formula: "H<sub>2</sub>O",
    },
    {
      id: "carbon_di_oxide",
      carbon: "C O 2",
      labelOne: "increase coefficient of c o 2 molecule on products side",
      labelTwo: "decrease coefficient of c o 2 molecule on products side",
      increment: "Increase Carbon dioxide",
      decrement: "Decrease Carbon dioxide",
      formula: "CO<sub>2</sub>",
    },
    {
      id: "propane",
      propane: "C 3 H 8",
      labelOne: "increase coefficient of c 3 h 8 molecule on reactants side",
      labelTwo: "decrease coefficient of c 3 h 8  molecule on reactants side",
      increment: "Increase Propane",
      decrement: "Decrease Propane",
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
    content:
      "Now that you have explored elements, compounds, and mixtures, show what you know.",
  },

  completionPopup: {
    ...globalData.completionPopup,
    content: "You have correctly answered all the questions.",
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
    "Using the arrows, adjust the number of molecules present in the reaction in order to balance it according to the law of conservation of mass! The atoms on the left-hand side of each seesaw are from the reactants, while those on the right-hand side of each seesaw are from the products. Press the Check button when you are done to verify if you have balanced the reaction correctly.",
  rightMsg: globalData.correctToastMessage,
  wrongMsg: globalData.incorrectToastMessage,
  reset: globalData.buttonLabels.reset,
  info: globalData.buttonLabels.info,
  resetLiveText: globalData.resetLiveText,
  screen1Heading:
    "Students will balance chemical equations using law of conservation of mass.",
  fullViewBGAlt: "Kitchen background with different appliances on the counter.",
  check: globalData.buttonLabels.check,
  oxygenLiveText: "Coefficient of reactant O 2 -1- to -2-",
  hydrogenLiveText: "Coefficient of reactant H 2 -1- to -2-",
  carbonLiveText: "Coefficient of product C O 2 -1- to -2-",
  waterLiveText: "Coefficient of product H 2 O -1- to -2-",
  propaneLiveText: "Coefficient of reactant C 3 H 8 -1- to -2-",

  equations: [
    {
      id: "equation1",
      assocId: "synthesis_of_water",
      equation: [
        { id: "eq1", value: "O<sub>2</sub>", ariaLabel: "O 2" },
        { id: "eq2", value: "+", ariaLabel: "plus" },
        { id: "eq3", value: "H<sub>2</sub>", ariaLabel: "H 2" },
        {
          id: "eq4",
          value: `<span class='arrow-tail'><span class='arrow-head'></span>${arrowTailInlineSVG}</span>`,
          ariaLabel: "reacts to produce",
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
        { id: "eq2", value: "+", ariaLabel: "plus" },
        { id: "eq3", value: "O<sub>2</sub>", ariaLabel: "O 2" },
        {
          id: "eq4",
          value: `<span class='arrow-tail'><span class='arrow-head'></span>${arrowTailInlineSVG}</span>`,
          ariaLabel: "reacts to produce",
        },
        { id: "eq5", value: "CO<sub>2</sub>", ariaLabel: "C O 2" },
        { id: "eq6", value: "+", ariaLabel: "plus" },
        { id: "eq7", value: "H<sub>2</sub>O", ariaLabel: "H 2 O" },
      ],
    },
  ],

  circleAlt: "circle",
  circlesAlt: "circles",

  oxygenEmptyBalanceAlt:
    "A gray balance created from a fulcrum and a flat beam; The fulcrum has the word oxygen under it. The beam is evenly balanced on the fulcrum.",
  hydrogenEmptyBalanceAlt:
    "A gray balance created from a fulcrum and a flat beam; The fulcrum has the word hydrogen under it. The beam is evenly balanced on the fulcrum.",
  carbonEmptyBalanceAlt:
    "A gray balance created from a fulcrum and a flat beam; The fulcrum has the word carbon under it. The beam is evenly balanced on the fulcrum.",

  emptyRightSideAlt: "There is nothing on the right side.",
  emptyLeftSideAlt: "There is nothing on the left side.",

  rightSideLowerAlt: "The right side is lower than the left.",
  leftSideLowerAlt: "The left side is lower than the right.",

  oxygenAddedLeft:
    "The balance has -1- red -2- labeled O for oxygen on the left side.",
  oxygenAddedRight:
    "The balance has -1- red -2- labeled O for oxygen on the right side.",

  hydrogenAddedLeft:
    "The balance has -1- gray -2- labeled h for hydrogen on the left side.",
  hydrogenAddedRight:
    "The balance has -1- gray -2- labeled h for hydrogen on the right side.",

  carbonAddedLeft:
    "The balance has -1- gray -2- labeled c for carbon on the left side.",
  carbonAddedRight:
    "The balance has -1- gray -2- labeled c for carbon on the right side.",

  balanced: "The beam is evenly balanced.",

  increased: "increased",
  decreased: "decreased",
};

export default RawTextData;
