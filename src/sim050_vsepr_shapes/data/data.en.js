import commonData from "../../app/data/data.en";
const data = {
  buttonLabels: {
    ...commonData.buttonLabels,
  },
  equationsData: [
    {
      srNo: "1",

      answer: ["shapes1", "lonepair5"],
      questionId: "question1",
      altText:
        "A green circle labeled Cl for chlorine on right. A bar to the left connects a small gray circle labeled H to the Cl showing the bond with 3 lone pairs.",
    },
    {
      srNo: "2",

      answer: ["shapes1", "lonepair1"],
      questionId: "question2",
      altText:
        "A gray circle labeled C for carbon is in center. 2 red circles labeled O branch out from the sides, 2 bars to each circle show the bonds, no lone pairs",
    },
    {
      srNo: "3",

      answer: ["shapes1", "lonepair1"],
      questionId: "question3",
      altText:
        "A green circle labeled Be for beryllium is in the center. 2 gray circles labeled H branch out from each side and are bonded to the Be with no lone pairs.",
    },
    {
      srNo: "4",

      answer: ["shapes2", "lonepair1"],
      questionId: "question4",
      altText:
        "A rose-colored circle labeled B for boron is in the center. 3 green circles labeled Cl branch out and are bonded to the boron with no lone pairs.",
    },
    {
      srNo: "5",

      answer: ["shapes2", "lonepair1"],
      questionId: "question5",
      altText:
        "A rose-colored circle labeled B for boron is in the center. 3 gray circles labeled H branch out and are bonded to the boron with no lone pairs.",
    },
    {
      srNo: "6",

      answer: ["shapes2", "lonepair1"],
      questionId: "question6",
      altText:
        "A rose-colored circle labeled B for boron is in the center. 3 red circles labeled Br branch out and are bonded to the boron with no lone pairs.",
    },
    {
      srNo: "7",

      answer: ["shapes3", "lonepair3"],
      questionId: "question7",
      altText:
        "A red circle labeled O for oxygen is in the center. 2 gray circles labeled H branch out of the bottom and are bonded to the oxygen with 2 lone pairs.",
    },
    {
      srNo: "8",

      answer: ["shapes4", "lonepair1"],
      questionId: "question8",
      altText:
        "A dark gray circle labeled C for carbon is in the center. 4 light gray circles labeled H branch out and are bonded to the carbon with no lone pairs.",
    },
    {
      srNo: "9",

      answer: ["shapes4", "lonepair1"],
      questionId: "question9",
      altText:
        "A tan circle labeled Si for silicon is in the center. 4 red circles labeled Br branch out and are bonded to the silicon with no lone pairs.",
    },
    {
      srNo: "10",

      answer: ["shapes4", "lonepair1"],
      questionId: "question10",
      altText:
        "A dark gray circle labeled C for carbon at the center, 3 light gray circles labeled H & 1 green circle labeled Cl branch off with no lone pairs.",
    },
    {
      srNo: "11",

      answer: ["shapes5", "lonepair2"],
      questionId: "question11",
      altText:
        "A blue circle labeled N for nitrogen is in the center. 3 gray circles labeled H branch out and are bonded to the nitrogen with 1 lone pair.",
    },
    {
      srNo: "12",

      answer: ["shapes5", "lonepair2"],
      questionId: "question12",
      altText:
        "A red circle labeled P for phosphorus is in the center. 3 pink circles labeled I branch out and are bonded to the phosphorous with one lone pair.",
    },
  ],

  shapesOptions: [
    {
      id: "shapes1",
      disabled: false,
      text: "Linear",
      label: "Linear",
    },
    {
      id: "shapes2",
      disabled: false,
      text: "Trigonal planar",
      label: "Trigonal planar",
    },
    {
      id: "shapes3",
      disabled: false,
      text: "Bent",
      label: "Bent",
    },
    {
      id: "shapes4",
      disabled: false,
      text: "Tetrahedral",
      label: "Tetrahedral",
    },
    {
      id: "shapes5",
      disabled: false,
      text: "Trigonal pyramidal",
      label: "Trigonal pyramidal",
    },
  ],

  loneOptions: [
    {
      id: "lonepair1",
      disabled: false,
      text: "0 Lone pairs",
      label: "0 Lone pairs",
    },
    {
      id: "lonepair2",
      disabled: false,
      text: "1 Lone pair",
      label: "1 Lone pair",
    },
    {
      id: "lonepair3",
      disabled: false,
      text: "2 Lone pairs",
      label: "2 Lone pairs",
    },
    {
      id: "lonepair4",
      disabled: false,
      text: "3 Lone pairs",
      label: "3 Lone pairs",
    },
    {
      id: "lonepair5",
      disabled: false,
      text: "There is no central atom.",
      label: "There is no central atom.",
    },
  ],
  h1InfoTextA11Y:
    "Students will be able to classify molecular structures using the VSEPR theory.",

  totalNumberOfQuestions: 12,

  partialIncorrect1: "Selected molecular shape was not correct. Try again!",
  partialIncorrect2: "Selected lone pairs were not correct. Try again!",

  questionHeading: "Question: -1- of 12.",

  finishBoxContent:
    "You have correctly identified all of the shapes! Good job!",
  reactionTypeQuestion: "Select the molecular shape.",
  reactionTypeQuestion2: "Select the number of lone pairs on the central atom.",
  InfoBoxContent:
    "Examine the molecule and determine the molecular shape and number of lone pairs on the central atom. It may be helpful to draw out your molecule on a piece of paper.",
  instructionBoxContent:
    "All molecules are covalent compounds, which are bonds between two or more nonmetals. Each molecule makes a specific shape based on the rules of the VSEPR theory. In this simulation, you will identify the molecular shape and the number of lone pairs on the central atom for each molecular compound.",
  resetLiveText: commonData.resetLiveText,
  resetMsgContent: commonData.resetPopupText,
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have correctly identified all of the shapes! Good job!",
  },
};

export default data;
