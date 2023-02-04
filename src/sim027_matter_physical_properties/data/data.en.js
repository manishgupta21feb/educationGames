import globalConfig from "../../app/data/data.en";
const data = {
  instructionText:
    "Sort the objects below based on the physical properties listed. Objects can go into multiple categories.",
  elements: [
    {
      id: "balloon",
      name: "Balloon",
      accept: "flexible",
    },
    {
      id: "baseball",
      name: "Baseball",
      accept: "hard",
    },
    {
      id: "vase",
      name: "Vase",
      accept: "hard",
    },
    {
      id: "water",
      name: "Water",
      accept: "wet",
    },
    {
      id: "sandpaper",
      name: "Sandpaper",
      accept: "rough",
    },
    {
      id: "rubber_band",
      name: "Rubber band",
      accept: "flexible",
    },
    {
      id: "nail_file",
      name: "Nail file",
      accept: "hard, rough",
    },
    {
      id: "rock",
      name: "Rock",
      accept: "hard, rough",
    },
    {
      id: "ice_pop",
      name: "Ice pop",
      accept: "wet",
    },
    {
      id: "string_ball",
      name: "String ball",
      accept: "flexible",
    },
  ],

  buttonLabels: { ...globalConfig.buttonLabels },
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You have correctly sorted all the objects.",
  },

  resetLiveText: globalConfig.resetLiveText,
  resetPopupText: globalConfig.resetPopupText,
  infoPopupText: {
    helpInfo: [
      "Drag each item to the correct category. Many of the objects can be dropped into more than one category. If dropped in the correct category, a green symbol will be shown. If dropped in an incorrect category, a grey symbol will be shown.",
      "Here is the key for symbols used for property:",
    ],
    shapesInfo: [
      {
        id: "hard",
        label: "Hard",
        altText: "Square represent Hard",
      },
      {
        id: "rough",
        label: "Rough",
        altText: "Triangle represent Rough",
      },
      {
        id: "wet",
        label: "Wet",
        altText: "Hexagon represent Wet",
      },
      {
        id: "flexible",
        label: "Flexible",
        altText: "Circle represent Flexible",
      },
    ],
  },

  incorrectToastMessage: globalConfig.incorrectToastMessage,
  correctToastMessage: globalConfig.correctToastMessage,
  alreadyDroppedToastMessage:
    "You have already dropped the -1- to the -2- category.",
  startupInfoMessage:
    "Matter can be described using properties. You observe properties around you each day. All matter has properties that it shares with other objects or that might make it different from other objects. There are many ways objects can be sorted.",
  droppableZones: [
    {
      id: "droppableZone1",
      heading: "Hard",
      target: "hard",
      label: "dropzone hard",
      altText: "Hard represented by Square",
    },
    {
      id: "droppableZone2",
      heading: "Rough",
      target: "rough",
      label: "dropzone rough",
      altText: "Rough represented by triangle",
    },
    {
      id: "droppableZone3",
      heading: "Wet",
      target: "wet",
      label: "dropzone wet",
      altText: "Wet represented by hexagon",
    },
    {
      id: "droppableZone4",
      heading: "Flexible",
      target: "flexible",
      label: "dropzone flexible",
      altText: "Flexible represented by circle",
    },
  ],
};

export default data;
