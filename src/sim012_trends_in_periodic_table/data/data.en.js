import globalConfig from "../../app/data";
const buttonLabels = { ...globalConfig.buttonLabels };

const data = {
  elementData: [
    {
      type: "dots",
      elementName: "Fluorine",
      dots: 2,
      shortName: "F",
      ptCellClass: "cell1_18",
    },
    {
      type: "dots",
      elementName: "Bromine",
      dots: 6,
      shortName: "Br",
      ptCellClass: "cell2_16",
    },
    {
      type: "dots",
      elementName: "Silver",
      dots: 2,
      shortName: "Ag",
      ptCellClass: "cell3_2",
    },
    {
      type: "questionMark",
      elementName: "Sodium",
      shortName: "Na",
      ptCellClass: "cell4_10",
    },
    {
      type: "dots",
      elementName: "Calcium",
      dots: 7,
      shortName: "Ca",
      ptCellClass: "cell3_17",
    },
    {
      type: "dots",
      elementName: "Cesium",
      dots: 1,
      shortName: "Cs",
      ptCellClass: "cell5_1",
    },
  ],

  playInstructionText:
    "Arrange these elements in order of increasing atomic radius. Drag each element to one of the squares at the bottom of the page.",
  startButton: buttonLabels.start,
  buttonClose: buttonLabels.close,
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You have arranged all of the elements in the correct order.",
  },
  StartUpInfo: {
    buttonContinueText: buttonLabels.start,
    instructionBoxContent: `Study the trends on the periodic table below. Then, you will model these trends with selected elements.`,
  },
  header: {
    buttonInfo: buttonLabels.info,
    buttonReset: buttonLabels.reset,
    buttonClose: buttonLabels.close,
    instructionBoxContent:
      "Use the button to see the periodic table, if needed.",
  },
  toastMsg: {
    correct: globalConfig.correctToastMessage,
    incorrect: globalConfig.incorrectToastMessage,
    partialCorrect: "Some of the answers are correct.",
  },

  elementDescription: {
    rubidium: "1 Valence electron Very reactive Commonly bonds with Group 17",
    magnesium:
      "2 Valence electrons Somewhat reactive metal Soft Alkaline earth metal",
    nickel: "Sea of electrons Malleable Ductile Conducts electricity",
    oxygen:
      "6 valence electrons Gas at room temperature Forms anion when bonded",
    chlorine:
      "7 valence electrons 9 Halogen Forms an anion when bonded Very reactive",
    xenon:
      "8 valence electrons Full octet Noble gas Non-reactive Gas at room temperature",
    helium: "2 valence electrons Full outer ring Non-reactive",
    barium:
      "2 valence electrons Forms cation Bonds with group 16 frequently +2 Oxidation Number",
    gold: "+1,and +3 oxidation state Conducts heat Conducts electricity Malleable",
  },

  droppableAltTextOne: [
    "atomic radius dropzone 1",
    "atomic radius dropzone 2",
    "atomic radIUS dropzone 3",
    "atomic radius dropzone 4",
    "atomic radius dropzone 5",
    "atomic radius dropzone 6",
  ],
  droppableAltTextTwo: [
    "ionization energy dropzone 1",
    "ionization energy dropzone 2",
    "ionization energy dropzone 3",
    "ionization energy dropzone 4",
    "ionization energy dropzone 5",
    "ionization energy dropzone 6",
  ],
  droppableAltTextThree: [
    "electronegativity dropzone 1",
    "electronegativity dropzone 2",
    "electronegativity dropzone 3",
    "electronegativity dropzone 4",
    "electronegativity dropzone 5",
    "electronegativity dropzone 6",
  ],


  questionData: [
    {
      id: 1,
      paragraph1:
        "Arrange these elements in order of increasing atomic radius.",
       
      desc: "Atomic radius increases",
      questionLabel: ["Ag", "F", "Ca", "Br", "Na", "Cs"],
      correctSequence: ["F", "Br", "Ag", "Na", "Ca", "Cs"],
    },
    {
      id: 2,
      paragraph1:
        "Arrange these elements in order of increasing ionization energy.",
       
      desc: "Ionization energy increases",
      questionLabel: ["Ag", "F", "Ca", "Br", "Na", "Cs"],
      correctSequence: ["Cs", "Ca", "Na", "Ag", "Br", "F"],
    },
    {
      id: 3,
      paragraph1:
        "Arrange these elements in order of increasing electronegativity.",
       
      desc: "Electronegativity increases",
      questionLabel: ["Ag", "F", "Ca", "Br", "Na", "Cs"],
      correctSequence: ["Cs", "Ca", "Na", "Ag", "Br", "F"],
    },
  ],
  animatedElements: [
    {
      id: "fluorine",
      text: "Fluorine(F)",
      label:
        "A fluorine atom with two electrons in the first shell and seven electrons in the second shell.",
    },
    {
      id: "bromine",
      text: "Bromine(Br)",
      label:
        "A bromine atom with 2 electrons in the 1st shell, 8 electrons in the 2nd shell, 18 electrons in the 3rd shell, and 7 electrons in the 4th shell.",
    },
    {
      id: "silver",
      text: "Silver(Ag)",
      label:
        "A silver atom with 2 electrons in the 1st shell, 8 in the 2nd shell, 18 in the 3rd shell, 17 in the 4th shell, and 2 in the 5th shell.",
    },
    {
      id: "sodium",
      text: "Sodium(Na)",
      label:
        "A sodium atom with two electrons in the first shell, eight electrons in the second shell, and one electron in the third shell.",
    },
    {
      id: "calcium",
      text: "Calcium(Ca)",
      label:
        "A calcium atom with 2 electrons in the 1st shell, 8 electrons in the 2nd shell, 8 electrons in the 3rd shell, and 2 electrons in the 4th shell.",
    },
    {
      id: "cesium",
      text: "Cesium(Cs)",
      label:
        "A cesium atom with 2 electrons in the 1st shell, 8 in the 2nd shell, 18 in the 3rd, 18 in the 4th, 8 in the 5th shell, and 1 in the 6th shell.",
    },
  ],
  infoIncreasingText: [
    { id: 1, text: "Atomic radius decreases" },
    { id: 2, text: "Ionization energy increases" },
    { id: 3, text: "Electron affinity increases" },
    { id: 4, text: "Electronegativity increases" },
  ],
  infoDecreasingText: [
    { id: 1, text: "Atomic radius increases" },
    { id: 2, text: "Ionization energy decreases" },
    { id: 3, text: "Electron affinity decreases" },
    { id: 4, text: "Electronegativity decreases" },
  ],
  ...buttonLabels,
  dropzoneLabel: "atomic radius dropzone",
  buttonNext: buttonLabels.next,
  buttonInfo: buttonLabels.info,
  buttonReset: buttonLabels.reset,
  buttonFinish: buttonLabels.finish,
  droppableArea: "6 droppable area",
  checkAnswer: buttonLabels.checkAnswer,
  submitAnswer: buttonLabels.submitAnswer,
  resetDialogText: globalConfig.resetPopupText,
  resetActivityText: globalConfig.resetLiveText,
  questionHeading: globalConfig.questionCounterString,
  paragraph2:
    "Drag each element to one of the squares at the bottom of the page.",
  liveTextQ1: "The atoms are arranged in order of increasing atomic radius.",
  liveTextQ2:
    "Cesium, Calcium, Sodium, Silver, Bromine and Fluorine elements are arranged in increasing order of Ionization Energy",
  liveTextQ3:
    "Cesium, Calcium, Sodium, Silver, Bromine and Fluorine elements are arranged in increasing order of Electronegativity",
  tableAltText:
    "Fluorine, Sodium, Calcium, Bromine, Silver and Cesium elements on the periodic table are highlighted.",
  dropLiveText: `-1- is dropped at position -2-.`,
  introPopupImageAlt:
    "A periodic table that displays the trends for atomic radius, ionization energy, electron affinity, and electronegativity.",
};

export default data;
