import globalDataSet from "../../app/data/data.en";

const data = {
  activityHeading:
    "In this simulation, the learner will manipulate light shining on different surfaces and observe what happens as light is reflected, refracted, or absorbed by materials.",
  instructionBoxContent:
    "You will use water, a brick wall, and a mirror to help a beam of light make it to the end of a maze.",
  InfoBoxContent:
    "Drag and drop the material into the correct spot in the maze to move the light from start to finish.",
  rightAreaTextDescription: [
    "You have to use the correct materials in the correct places in the maze to turn the light, reflect the light, and finally stop the light.",
    "Move the materials into the correct spots in the maze to move the light from start to finish.",
  ],

  buttonLabels: { ...globalDataSet.buttonLabels },
  completionPopup: {
    ...globalDataSet.completionPopup,
    content: "You succeeded in making it to the end of the maze.",
  },
  resetLiveText: globalDataSet.resetLiveText,
  resetMsgContent: globalDataSet.resetPopupText,
  correctToastMsg: globalDataSet.correctToastMessage,
  incorrectToastMsg: globalDataSet.incorrectToastMessage,
  draggables: [
    {
      srNo: 3,
      source: "D",
      id: "brick_wall",
      label: "Brick wall",
      infoText: "A brick wall.",
      ariaLabel: "Brick wall draggable",
    },
    {
      srNo: 2,
      id: "water",
      source: "B",
      label: "Water",
      ariaLabel: "Water draggable",
      infoText: "A Water in a transparent tank.",
    },
    {
      srNo: 1,
      id: "mirror",
      source: "A, C",
      label: "Mirror",
      infoText: "A mirror.",
      ariaLabel: "Mirror draggable",
    },
  ],
  dropzones: [
    {
      target: "A",
      id: "dropzone1",
      ariaLabel: "Dropzone A",
      ariaLabelMatched: "Light starts from torch and reflecting from mirror.",
      label:
        "Dropzone A where Light beams travels across and hits the first wall and stops",
      alt: "A flashlight shines a beam of light from top left corner of a crooked maze at night. The beam travels across the maze, hits the first wall, and stops.",
    },
    {
      target: "B",
      id: "dropzone2",
      ariaLabel: "Dropzone B",
      ariaLabelMatched:
        "Light reflected from mirror and refracting through water tank.",
      label:
        "Dropzone B where Light beams travels across and hits the second wall and stops",
      alt: "A flashlight shines a beam of light across a crooked maze at night. The beam hits a mirror, bounces in the opposite direction, hits a wall, and stops.",
    },
    {
      target: "C",
      id: "dropzone3",
      ariaLabel: "Dropzone C",
      ariaLabelMatched:
        "Light refracted through water tank and reflecting from mirror.",
      label:
        "Dropzone C where Light beams travels across and hits the third wall wall and stops",
      alt: "A light beam shines across a crooked maze at night. Beam hits a mirror, bounces away, goes through a glass of water, bends down, hits a wall and stops",
    },
    {
      target: "D",
      id: "dropzone4",
      ariaLabel: "Dropzone D",
      ariaLabelMatched:
        "Light reflected from mirror and end into the brick wall.",
      label:
        "Dropzone D where Light beams travels across without any obstacle.",
      alt: "Light beams across a dark maze, hits a mirror, bounces away, goes through a glass of water, bends down, hits another mirror, bounces past finish line.",
    },
    {
      label: "Dropzone D",
      id: "dropzone5",
      ariaLabel: "Dropzone D",
      alt: "Light beams across dark maze, hits a mirror, reflects, goes through glass of water, bends down, hits 2nd mirror, reflects, hits brick wall to finish.",
    },
  ],
};

export default data;
