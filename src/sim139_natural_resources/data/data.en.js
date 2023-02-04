import commonData from "../../app/data";

const data = {
  ...commonData.buttonLabels,
  resources: [
    {
      text: "Tree",
      hasPopup: true,
      id: "resource9",
      answer: "option2",
      popupText:
        "Trees need water too. Water can be <strong>conserved</strong> by planting trees that don't need a lot of water to live!",
    },
    {
      text: "Wall",
      id: "resource8",
      answer: "option1",
    },
    {
      text: "Plant",
      hasPopup: true,
      id: "resource2",
      answer: "option2",
      popupText:
        "This plant needs water too. Water can be <strong>conserved</strong> by planting plants that don't need a lot of water to live!",
    },
    {
      text: "Ducks",
      hasPopup: true,
      id: "resource7",
      answer: "option3",
      popupText:
        "Water can be <strong>protected</strong> by keeping trash out of ponds!",
    },
    {
      text: "House",
      id: "resource1",
      answer: "option1",
    },
    {
      text: "Path",
      id: "resource4",
      answer: "option2",
    },
    {
      id: "resource6",
      answer: "option1",
      text: "Bird bath",
    },
    {
      hasPopup: true,
      id: "resource5",
      text: "Sprinkler",
      answer: "option3",
      popupText:
        "Water can be <strong>conserved</strong> by not watering plants on rainy days!",
    },
    {
      text: "Grass",
      hasPopup: true,
      id: "resource3",
      answer: "option2",
      popupText:
        "Grass needs water too. Water can be <strong>conserved</strong> by not watering grass on rainy days!",
    },
    {
      text: "Bird",
      hasPopup: true,
      id: "resource10",
      answer: "option3",
      popupText:
        "Water can be <strong>conserved</strong> by reusing rainwater to fill bird baths!",
    },
  ],
  options: [
    {
      id: "option1",
      text: "Rocks",
    },
    {
      id: "option2",
      text: "Soil",
    },
    {
      id: "option3",
      text: "Water",
    },
  ],
  resetPopupText: commonData.resetPopupText,
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  mainImageAlt: `Path through grass leads to a red-roofed porch of a house. Yard has 2 ducks 
                  in puddle, 4 birds in bird bath, sprinkler, 2 plants, tree & stone wall`,
  mainImageAltDynamic: `The word -item- is highlighted in the image.`,
  infoPopupText:
    "Click the buttons and choose whether the object is using rocks, soil, or water.",
  instructionOSTText:
    "Click on an object and identify whether it is made from or uses rocks, soil, or water.",
  introductionPopupText:
    "Rocks, soil, water, and things made from these natural resources are important to everyday life! Let's see how these natural resources are used.",
  activityDescription:
    "Students will identify whether an object uses rocks, soil, or water in its construction or for survival and discover ways to conserve and protect water.",
  completionPopup: {
    ...commonData.completionPopup,
    content:
      "You have identified ways that rocks, soil, and water are used in everyday life and discovered how water can be conserved and protected!",
  },
};

export default data;
