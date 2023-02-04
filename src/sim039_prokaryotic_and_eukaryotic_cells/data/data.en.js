import globalConfig from "../../app/data/data.en";
const data = {
  stage1: {
    instructionText: "Drag and drop the labels into the correct areas.",
    elements: [
      {
        id: "nucleus",
        name: "Nucleus",
        accept: "eukaryotic",
        target: "eukaryotic",
      },
      {
        id: "no_nucleus",
        name: "No nucleus",
        accept: "prokaryotic",
        target: "prokaryotic",
      },
      {
        id: "larger_in_size",
        name: "Larger in size",
        accept: "eukaryotic",
        target: "eukaryotic",
      },
      {
        id: "smaller_in_size",
        name: "Smaller in size",
        accept: "prokaryotic",
        target: "prokaryotic",
      },
      {
        id: "cytoplasm",
        name: "Cytoplasm",
        accept: "both",
        target: "both",
      },
      {
        id: "membrane-bound_organelles",
        name: "Membrane-bound organelles",
        accept: "eukaryotic",
        target: "eukaryotic",
      },
      {
        id: "binary_fission",
        name: "Binary fission",
        accept: "prokaryotic",
        target: "prokaryotic",
      },
      {
        id: "mitosis",
        name: "Mitosis",
        accept: "eukaryotic",
        target: "eukaryotic",
      },
      {
        id: "ribosomes",
        name: "Ribosomes",
        accept: "both",
        target: "both",
      },
      {
        id: "dna",
        name: "DNA",
        accept: "both",
        target: "both",
      },
      {
        id: "human_cells",
        name: "Human cells",
        accept: "eukaryotic",
        target: "eukaryotic",
      },
      {
        id: "can_live_in_extreme_environments",
        name: "Can live in extreme environments",
        accept: "prokaryotic",
        target: "prokaryotic",
      },
    ],
    dropZones: [
      {
        id: "prokaryotic",
        name: "prokaryotic",
        altText: "Prokaryotic droppable area",
        text: "Prokaryotic",
        label: "Prokaryotic droppable area",
      },
      {
        id: "both",
        name: "both",
        altText: "Both droppable area",
        text: "Both",
        label: "Both droppable area",
      },
      {
        id: "eukaryotic",
        name: "eukaryotic",
        altText: "Eukaryotic droppable area",
        text: "Eukaryotic",
        label: "Eukaryotic droppable area",
      },
    ],
    dropRegionDetail: "Droppable area",
    droppableAltText: ["Prokaryotic", "Both", "Eukaryotic"],
    colorHeader: ["Prokaryotic", "Both", "Eukaryotic"],
    reward: {
      header: globalConfig.completionPopup.heading,
      instruction: "You have completed the simulation.",
      buttonText: globalConfig.buttonLabels.reset,
    },
  },

  // buttonLabels: { ...globalConfig.buttonLabels },
  // completionPopup: {
  //   ...globalConfig.completionPopup,
  //   content: "You have correctly sorted all the objects.",
  // },

  onDropText: "-1- dropped at -2-",
  startButton: globalConfig.buttonLabels.start,
  buttonClose: globalConfig.buttonLabels.close,
  buttonNext: globalConfig.buttonLabels.next,
  buttonFinish: globalConfig.buttonLabels.finish,
  resetLiveText: globalConfig.resetLiveText,
  StartUpInfo: {
    buttonContinueText: globalConfig.buttonLabels.start,
    buttonContinueLabel: globalConfig.buttonLabels.start,
    content: `Drag and drop each characteristic where it belongs on the Venn diagram: prokaryotic, eukaryotic, or both.`,
  },
  header: {
    buttonReset: globalConfig.buttonLabels.reset,
    buttonInfo: globalConfig.buttonLabels.info,
  },
  toastMsg: {
    correct: globalConfig.correctToastMessage,
    incorrect: globalConfig.incorrectToastMessage,
  },
  info: {
    header: "Instructions",
    content:
      "Sort the characteristics into the correct locations on the Venn diagram!",
    buttonContinueText: globalConfig.buttonLabels.close,
    buttonContinueLabel: globalConfig.buttonLabels.close,
  },
  reset: {
    header: "",
    content: globalConfig.resetPopupText,
    resetButtonText: globalConfig.buttonLabels.yes,
    resetButtonLabel: globalConfig.buttonLabels.yes,
    buttonContinueText: globalConfig.buttonLabels.no,
    buttonContinueLabel: globalConfig.buttonLabels.no,
  },
  activityHeading:
    " Users will drag and drop a variety of different key terms into the Venn Diagram comparing and contrasting prokaryotic versus eukaryotic cells.",
  draggable: "draggable",
};

export default data;
