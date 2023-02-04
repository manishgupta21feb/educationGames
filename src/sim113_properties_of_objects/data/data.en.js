import commonData from "../../app/data";

const data = {
  ...commonData.buttonLabels,
  optionItems: [
    { id: "game", text: "Game", alt: "Red wooden apple" },
    { id: "prism", text: "Prism", alt: "Red triangular block" },
    { id: "cap", text: "Cap", alt: "Red triangular knitted hat" },
    { id: "yarn_ball", text: "Yarn ball", alt: "Blue ball of yarn" },
    { id: "marble_green", text: "Marble", alt: "Green glass marble" },
    { id: "marble_yellow", text: "Marble", alt: "Yellow glass marble" },
    { id: "plastic_toy_green", text: "Plastic toy", alt: "Green plastic toy" },
    {
      id: "block_blue",
      text: "Block",
      alt: "Blue plastic building block cube",
    },
    {
      id: "block_green",
      text: "Block",
      alt: "Green plastic building block cube",
    },
    {
      id: "plastic_toy_yellow",
      text: "Plastic toy",
      alt: "Yellow plastic toy",
    },
  ],
  questions: [
    {
      id: "question1",
      type: "Shapes",
      subQuestions: [
        {
          id: "sub1",
          associatedObjects: ["block_blue", "block_green"],
          text: "Let's classify these objects by their shape. Click on all the objects that are shaped like a <strong>cube.</strong>",
        },
        {
          id: "sub2",
          associatedObjects: [
            "game",
            "yarn_ball",
            "marble_green",
            "marble_yellow",
          ],
          text: "Now, click on all the objects that are <strong>round</strong>.",
        },
      ],
    },
    {
      id: "question2",
      type: "Color",
      subQuestions: [
        {
          id: "sub1",
          associatedObjects: ["block_blue", "yarn_ball"],
          text: "Let's classify these objects by their color. Click on all the <strong>blue</strong> objects.",
        },
        {
          id: "sub2",
          associatedObjects: ["prism", "cap", "game"],
          text: "Now, click on all the <strong>red</strong> objects.",
        },
      ],
    },
    {
      id: "question3",
      type: "Texture",
      subQuestions: [
        {
          id: "sub1",
          associatedObjects: [
            "cap",
            "game",
            "yarn_ball",
            "block_blue",
            "block_green",
            "plastic_toy_green",
            "plastic_toy_yellow",
          ],
          text: "Let's classify these objects by how they feel. Click on all the objects that would feel <strong>rough</strong>.",
        },
        {
          id: "sub2",
          associatedObjects: ["marble_green", "marble_yellow", "prism"],
          text: "Click on all the objects that would feel <strong>smooth</strong>.",
        },
      ],
    },
  ],
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  partiallyIncorrectToastMessage:
    "Some of your answers are incorrect. Try again!",
  completionPopup: {
    ...commonData.completionPopup,
    content:
      "You have classified these objects by their shapes, colors, and textures!",
  },
  mainImageAlt: `A room with purple walls; back wall has 1 straight picture, window & dresser. 
                  10 objects are sorted by their properties & neatly placed on center rug`,
  activityDescription: `In this simulation, the learner will classify objects by  shape, color, and texture (smooth, rough).`,
  introductionPopupText: `My room is a mess! Please help me classify some of my objects by their shapes, colors, and textures.`,
  introductionPopupImageAlt: `A room with pink & purple walls; a bunk bed, dresser, desk & bookshelf are on back wall. 
                              Pictures on wall are crooked; objects are scattered all over`,
  infoPopupText: `Click on the objects that have the property.`,
};

export default data;
