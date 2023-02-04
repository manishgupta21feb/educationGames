import globalData from "../../app/data";

const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: globalData.buttonLabels.start,
  buttonContinueLabel: globalData.buttonLabels.start,
  content: [
    "You are going to use your knowledge of chemical formulas and names to select the correct doors to escape this creepy old building.",
    "Good Luck!",
  ],
};

const infoString = [
  "Look at the provided name or the formula and match it with the options placed on the doors. Choose the one that matches the name or the formula!",
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
          ariaLabel: "N a C l sub 2",
          hideTooltip: true,
        },
        {
          id: 3,
          label: "<span>NaClO<sub>3</sub><span>",
          className: "button3",
          text: "NaClO3",
          ariaLabel: "N a C l O sub 3",
          hideTooltip: true,
        },
      ],
      signBoardQuestion: "Sodium Chloride",
      headingQuestion: "Sodium Chloride",
      answerKey: 1,
      className: "1",
      altText:
        "3 brown doors on a brown wall in a room with a black and gray checkered floor have chemical formulas written on them. Sodium chloride label at bottom",
      liveText:
        "A brown door with the chemical formula N a C l on it is open into a room with a green wall.",
    },
    {
      id: 1,
      options: [
        {
          id: 1,
          label: "Carbon Chloride",
          className: "button4",
          text: "Carbon Chloride",
          ariaLabel: "Carbon Chloride",
        },
        {
          id: 2,
          label: "Carbon Tetrachloride",
          className: "button5",
          text: "Carbon Tetrachloride",
          ariaLabel: "Carbon Tetrachloride",
        },
        {
          id: 3,
          label: "Carbon (IV) Chloride",
          className: "button6",
          text: "Carbon (IV) Chloride",
          ariaLabel: "Carbon four Chloride",
          // hideTooltip: true,
        },
      ],
      signBoardQuestion: "<span>CCl<sub>4</sub><span>",
      headingQuestion: "C C l sub 4",
      answerKey: 2,
      className: "2",
      altText:
        "3 brown doors on a green wall in a room with wood floor are labeled: Carbon tetrachloride, Carbon four chloride & Carbon chloride. C C L sub 4 label at bottom",
      liveText:
        "A brown door with the chemical name Carbon tetrachloride on it is open into a room with a brick wall and wood floor. ",
    },
    {
      id: 2,
      options: [
        {
          id: 1,
          label: "Iron Oxide",
          className: "button7",
          text: "Iron Oxide",
          ariaLabel: "Iron Oxide",
        },
        {
          id: 2,
          label: "Iron Trioxide",
          className: "button8",
          text: "Iron Trioxide",
          ariaLabel: "Iron Trioxide",
        },
        {
          id: 3,
          label: "Iron (III) Oxide",
          className: "button9",
          text: "Iron (III) Oxide",
          ariaLabel: "Iron three Oxide",
        },
      ],
      signBoardQuestion: "<span>Fe<sub>2</sub>O<sub>3</sub><span>",
      headingQuestion: "F e sub 2 O sub 3",
      answerKey: 3,
      className: "3",
      altText:
        "3 brown doors on a brick wall in a room with a wood floor are labeled: Iron oxide, Iron three oxide, and Iron trioxide. F e sub 2 O sub 3 label at bottom",
      liveText:
        "A brown door with the chemical name Iron three oxide on it is open into a room that has a dark wall with some exposed red brick.",
    },
    {
      id: 3,
      options: [
        {
          id: 1,
          label: "<span>NH<sub>4</sub>Cl</span>",
          className: "button10",
          text: "NH4Cl",
          ariaLabel: "N H sub 4 C l",
          hideTooltip: true,
        },
        {
          id: 2,
          label: "<span>(NH)<sub>4</sub>Cl<span>",
          className: "button11",
          text: "(NH)4Cl",
          ariaLabel: "N H whole sub 4 C l",
          hideTooltip: true,
        },
        {
          id: 3,
          label: "<span>NHCl<sub>4</sub><span>",
          className: "button12",
          text: "NHCl4",
          ariaLabel: "N H C l sub 4",
          hideTooltip: true,
        },
      ],
      signBoardQuestion: "Ammonium Chloride",
      headingQuestion: "Ammonium Chloride",
      answerKey: 1,
      className: "4",
      altText:
        "3 purple doors on a dark wall in a dark room are labeled: N H sub 4 C l, N H C l sub 4, and N H whole sub 4 C l. Ammonium chloride label is at the bottom of the image.",
      liveText:
        "A purple door with the chemical formula NH4Cl on it is open to a sunny day outside.",
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
    "Select the option on the door that matches the name or the formula. Repeat this process with each door. The activity is over when the door opens to the outside.",
  rightMsg: globalData.correctToastMessage,
  wrongMsg: globalData.incorrectToastMessage,
  buttonClose: globalData.buttonLabels.close,
  reset: globalData.buttonLabels.reset,
  info: globalData.buttonLabels.info,
  continueButton: globalData.buttonLabels.continue,
  resetLiveText: globalData.resetLiveText,
  screen1Heading:
    " Users will escape a room by choosing the door with the correct name/formula of a chemical compound that matches the one that is given. If they get the correct door, they will get the next name and a new set of three doors. They will continue until they pass through 4 sets of doors and open the last door which leads out of the building.",
  doorZoomMap: {
    0: "left",
    1: "center",
    2: "right",
  },
};

export default RawTextData;
