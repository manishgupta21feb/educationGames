import globalConfig from "../../app/data/data.en";
const buttonLabels = { ...globalConfig.buttonLabels };

const data = {
  elementData: [
    {
      type: "dots",
      elementName: "helium",
      dots: 2,
      shortName: "He",
      ptCellClass: "cell1_18",
    },
    {
      type: "dots",
      elementName: "oxygen",
      dots: 6,
      shortName: "O",
      ptCellClass: "cell2_16",
    },
    {
      type: "dots",
      elementName: "magnesium",
      dots: 2,
      shortName: "Mg",
      ptCellClass: "cell3_2",
    },
    {
      type: "dots",
      elementName: "chlorine",
      dots: 7,
      shortName: "Cl",
      ptCellClass: "cell3_17",
    },
    {
      type: "questionMark",
      elementName: "nickel",
      shortName: "Ni",
      ptCellClass: "cell4_10",
    },
    {
      type: "dots",
      elementName: "rubidium",
      dots: 1,
      shortName: "Rb",
      ptCellClass: "cell5_1",
    },
    {
      type: "dots",
      elementName: "xenon",
      dots: 8,
      shortName: "Xe",
      ptCellClass: "cell5_18",
    },
    {
      type: "dots",
      elementName: "barium",
      dots: 2,
      shortName: "Ba",
      ptCellClass: "cell6_2",
    },
    {
      type: "questionMark",
      elementName: "gold",
      shortName: "Au",
      ptCellClass: "cell6_11",
    },
  ],

  startButton: buttonLabels.start,
  buttonClose: buttonLabels.close,
  resetLiveText: globalConfig.resetLiveText,
  resetPopupText: globalConfig.resetPopupText,
  playInstructionText:
    "Place the mystery elements in their correct spaces according to their properties and valence electrons.",
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You have identified all the missing elements!",
  },
  StartUpInfo: {
    buttonContinueText: buttonLabels.start,
    instructionBoxContent: [
      "Families (columns) on the periodic table share many properties due to the same number of valence electrons.",
      "Use this knowledge to predict which family the mystery element belongs to!",
    ],
  },
  header: {
    buttonInfo: buttonLabels.info,
    buttonClose: buttonLabels.close,
    buttonReset: buttonLabels.reset,
    instructionBoxContent:
      "Match the unknown elements with the holes on the periodic table.",
  },
  toastMsg: {
    correct: globalConfig.correctToastMessage,
    incorrect: globalConfig.incorrectToastMessage,
  },

  elementDescription: {
    rubidium: "1 valence electron; very reactive; commonly bonds with Group 17",
    magnesium:
      "2 valence electrons; somewhat reactive metal; soft; alkaline earth metal",
    nickel: "Sea of electrons; malleable; ductile; conducts electricity",
    oxygen:
      "6 valence electrons; gas at room temperature; forms an anion when bonded",
    chlorine:
      "7 valence electrons; halogen; forms an anion when bonded; very reactive",
    xenon:
      "8 valence electrons; full octet; noble gas; non-reactive; gas at room temperature",
    helium: "2 valence electrons; full outer ring; non-reactive",
    barium:
      "2 valence electrons; forms cation; bonds with group 16 frequently; +2 oxidation number",
    gold: "+1, and +3 oxidation state; conducts heat; conducts electricity; malleable",
  },
  periodicTableData: {
    atomicNumberText: "Atomic number",
    symbolText: "Symbol",
    tableCellAriaLabel: {
      He: "Droppable area 1",
      O: "Droppable area 2",
      Mg: "Droppable area 3",
      Cl: "Droppable area 4",
      Ni: "Droppable area 5",
      Rb: "Droppable area 6",
      Xe: "Droppable area 7",
      Ba: "Droppable area 8",
      Au: "Droppable area 9",
    },
  },
  dropRegionDetail: "9 Droppable Areas",
  droppableAltText: [
    "period 1 group 18, droppable area",
    "period 2 group 16, droppable area",
    "period 3 group 2, droppable area",
    "period 3 group 17, droppable area",
    "period 4 group 10, droppable area",
    "period 5 group 1, droppable area",
    "period 5 group 18, droppable area",
    "period 6 group 2, droppable area",
    "period 6 group 11, droppable area",
  ],
  ...buttonLabels,
};

export default data;
