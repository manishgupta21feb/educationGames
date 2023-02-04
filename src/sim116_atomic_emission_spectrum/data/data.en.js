import globalData from "../../app/data/data.en";
const buttonLabels = { ...globalData.buttonLabels };

const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: globalData.buttonLabels.start,
  buttonContinueLabel: globalData.buttonLabels.start,
  content: [""],
};

const infoString = [
  "Select the Bohr diagram for the atom and turn on the flashlight.",
];

const RawTextData = {
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

  ...buttonLabels,

  resetText: [
    {
      type: "reset",
      resetButtonText: globalData.buttonLabels.yes,
      buttonContinueText: globalData.buttonLabels.no,
      content: globalData.resetPopupText,
    },
  ],
  mainScreenText: "Select the Bohr diagram of the atom you want to explore.",
  rightMsg:
    "You placed the items in the correct spots on the circuit! Well done!",
  wrongMsg:
    "Please review the locations of the items in your circuit; there is something incorrect.",
  // submitAnswer: "Submit Answer",
  buttonFinish: globalData.buttonLabels.finish,
  buttonNext: globalData.buttonLabels.next,
  buttonClose: globalData.buttonLabels.close,
  reset: globalData.buttonLabels.reset,
  info: globalData.buttonLabels.info,
  continueButton: globalData.buttonLabels.continue,
  resetLiveText: globalData.resetLiveText,
  screen1Heading:
    "Students will demonstrate an understanding of electron movement related to wavelengths.",
  check: "Check",

  initialInfoText:
    "A neutral atom is exposed to visible light. Explore what happens to electrons when exposed to visible light.",

  mainScreenContent: [
    {
      id: "hydrogen",
      img: "hydrogen",
      imageAlt:
        "Blue circle in the center of 6 rings represents a hydrogen atom; red circle on closest ring to center is a single electron in the lowest energy level",
      label: "Hydrogen",
    },
    {
      id: "helium",
      img: "helium",
      imageAlt:
        "Blue and gray circles in center of 6 rings represent a helium atom; 2 red circles on closest ring to center are electrons in the lowest energy level",
      label: "Helium",
    },
  ],

  hydrogenText: "Energy has been released as red and blue light!",
  heliumText: "Energy has been released as red, yellow, and blue light!",
  activityOst:
    "Turn on the flashlight to explore the behaviour of electrons when exposed to visible light.",
  onLabel: "On",
  offLabel: "Off",
  energyLabels: [
    { id: "1", label: "n=1" },
    { id: "2", label: "n=2" },
    { id: "3", label: "n=3" },
    { id: "4", label: "n=4" },
    { id: "5", label: "n=5" },
    { id: "6", label: "n=6" },
  ],
  tableHeading: [
    { id: "1", heading: "Excited State" },
    { id: "2", heading: "Ground State" },
    { id: "3", heading: "Wavelength (nm)" },
    { id: "4", heading: "Electromagnetic region" },
  ],
  tableOneData: [
    { id: "1", text: "n = 4" },
    { id: "2", text: "n = 2" },
    { id: "3", text: "486" },
    { id: "4", text: "Visible (blue)" },
  ],
  tableTwoDataR1: [
    { id: "1", text: "n = 4" },
    { id: "2", text: "n = 3" },
    { id: "3", text: "1875" },
    { id: "4", text: "Infrared" },
  ],
  tableTwoDataR2: [
    { id: "1", text: "n = 3" },
    { id: "2", text: "n = 2" },
    { id: "3", text: "656" },
    { id: "4", text: "Visible (red)" },
  ],
  tableThreeR1: [
    { id: "1", text: "n = 6" },
    { id: "2", text: "n = 4" },
    { id: "3", text: "688" },
    { id: "4", text: "Visible (red)" },
  ],
  tableThreeR2: [
    { id: "1", text: "n = 4" },
    { id: "2", text: "n = 2" },
    { id: "3", text: "588" },
    { id: "4", text: "Visible (yellow)" },
  ],
  tableThreeR3: [
    { id: "1", text: "n = 2" },
    { id: "2", text: "n = 1" },
    { id: "3", text: "501" },
    { id: "4", text: "Visible (blue)" },
  ],

  onLiveTextHydrogen:
    "A light source turns on and aims at the model of a single hydrogen atom",
  onLiveTextHelium:
    "A light source turns on and aims at the model of the single helium atom",
  offLiveText: "Flash Light off",

  arrow: `<span class='arrow-tail'></<span><span class='arrow-head'></span>`, //${arrowTailInlineSVG}

  pathText: "Absorption: n = 1 to n = 4",
  pathTextTwo: "Absorption: n = 1 to n = 6",
  tableTitle: "Emission:",
  blueArrowOne: "486 nm",
  redArrowOne: "656 nm",
  blueArrowTwo: "501 nm",
  redArrowTwo: " 688 nm",
  yellowArrow: "588 nm",

  toggleButtonLabel: "On / Off",
  flashLightAlt: "Flash light",
  hydrogenDiagramAlt:
    "A light source aimed at the model of the single hydrogen atom",
  animationEndHydrogen:
    "The red circle representing the electron of the hydrogen atom moves from a higher energy state to a lower energy state",
  heliumDiagramAlt: "A light source aimed at the model of a single helium atom",
  animationEndHelium:
    "One of the red circles representing electrons of the helium atom moves from a higher energy state to a lower energy state",
};

export default RawTextData;
