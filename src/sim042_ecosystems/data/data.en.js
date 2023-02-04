import globalCommonData from "../../app/data/data.en";

const data = {
  activityInstructions: " ",
  hotspots: [
    {
      id: "cloud",
      text: "Cloud",
      type: "nonliving",
      answer: "",
      heading: " <strong>Cloud</strong>",
      matched: "",
    },
    {
      id: "sun",
      answer: "",
      matched: "",
      text: "Sun",
      type: "nonliving",
      heading: "<strong>Sun</strong>",
    },
    {
      id: "rain",
      text: "Rain",
      type: "nonliving",
      answer: "",
      heading: "<strong>Rain</strong>",
    },
    {
      id: "rock",
      text: "Rock",
      type: "nonliving",
      answer: "",
      heading: " <strong>Rock</strong>",
      matched: "",
    },
    {
      id: "tree",
      type: "living",
      text: "Tree",
      matched: "",
      answer: "",
      heading: "<strong> Tree </strong>",
    },
    {
      id: "grass",
      text: "Grass",
      type: "living",
      answer: "",
      heading: " <strong>Grass</strong>",
      matched: "",
    },

    {
      id: "crane",
      text: "Crane",
      type: "living",
      answer: "",
      heading: " <strong>Crain</strong>",
      matched: "",
    },
    {
      id: "duck",
      text: "Duck",
      type: "living",
      answer: "",
      heading: " <strong>Duck</strong>",
    },
    {
      id: "algae",
      text: "Algae",
      type: "living",
      answer: "",
      heading: " <strong>Algae</strong>",
      matched: "",
    },
    {
      id: "pond",
      text: "Pond",
      type: "nonliving",
      answer: "",
      heading: " <strong>Pond</strong>",
      matched: "",
    },

    {
      id: "soil",
      text: "Soil",
      type: "nonliving",
      answer: "",
      heading: " <strong>Soil</strong>",
      matched: "",
    },

    {
      id: "fish",
      text: "Fish",
      type: "living",
      answer: "",
      heading: " <strong>Fish</strong>",
      matched: "",
    },
  ],

  answerOptions: [
    {
      id: "living",
      disabled: false,
      text: "Living",
      label: "Living",
    },
    {
      id: "nonliving",
      disabled: false,
      text: "Nonliving",
      label: "Nonliving",
    },
  ],

  headingOne: "Living",
  headingTwo: "Nonliving",


  buttonLabels: { ...globalCommonData.buttonLabels },

  completionPopup: {
    ...globalCommonData.completionPopup,
    content:
      "You have correctly classified all the things in the ecosystem as living or nonliving.",
  },
  hotspotSelectionLiveText: "-1- is marked as -2-.",
  correctToastMessage: globalCommonData.correctToastMessage,
  incorrectToastMessage: globalCommonData.incorrectToastMessage,
  partiallyIncorrectToastMessage:
    "Some elements are not placed correctly. Try again!",
  helpPopupText:
    "Click the hotspots to identify the things as living or nonliving.",
  initialInfoPopupText: [
    "An ecosystem is a busy place! It is made up of living and nonliving things.",
    "You will be identifying parts of this ecosystem and deciding if they are living or nonliving.",
  ],
  resetPopupText: globalCommonData.resetPopupText,

  fossilsBGAltText:
    "A lake filled with living and nonliving things. Clickable hot spots on the Sun, tree, cloud, rain, crane, duck, pond, rock, soil, fish, algae & grass.",
};

export default data;
