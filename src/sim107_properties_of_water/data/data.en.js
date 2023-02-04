import globalConfig from "../../app/data/data.en";
const buttonLabels = { ...globalConfig.buttonLabels };
import video from "../assets/videos/tree_animation.mp4";

const data = {
  buttonNo: buttonLabels.no,
  buttonYes: buttonLabels.yes,
  infoText: buttonLabels.info,
  resetText: buttonLabels.reset,
  buttonNext: buttonLabels.next,
  buttonStart: buttonLabels.start,
  buttonClose: buttonLabels.close,
  buttonFinish: buttonLabels.finish,
  buttonContinue: buttonLabels.continue,
  resetConfirmationText: globalConfig.resetLiveText,
  instructionBoxContent:
    "Hi there! Let’s explore the pond area to learn about the properties of water.",
  InfoBoxContent:
    "Click the labeled objects in the pond environment to learn more about the properties of water.",
  resetMsgContent: globalConfig.resetPopupText,
  mainMCQOptions: ["Adhesion", "Cohesion", "Surface-tension"],

  videoPlay: "Play video",
  videoStop: "Stop video",
  videoData: {
    srNo: "1",
    id: "Ques1",
    videoSrc: video,
    liveAlt:
      "A cross-section of a tree trunk is popped out showing the tree's internal structures. Water molecules (H2O) are moving up through the trunk.",
    alt: "A cross-section of a tree trunk is popped out showing the tree’s internal structures",
  },

  mcqData: [
    {
      id: 1,
      imageClass: "spiderweb-image",
      imageAlt: "A spiderweb with water droplets on a green background",
    },
    {
      id: 2,
      imageClass: "tree-image",
      imageAlt:
        "A tree in a pond Environment, shows up the flow of water molecules.",
    },
    {
      id: 3,
      imageClass: "insect-image",
      imageAlt: "An brown insect with gray wings standing on top of blue water",
    },
  ],

  submitAnswer: buttonLabels.submitAnswer,
  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  wrongMsg: globalConfig.incorrectToastMessage,

  mainScreenHeading:
    "Water is found all around the world. It is a compound that has interesting properties. Adhesion, cohesion, and surface tension are three of these properties. <b>Adhesion</b> is the action of molecules sticking to other substances. <b>Cohesion</b> is the action of molecules sticking together with other molecules of the same type. <b>Surface tension</b> is a measure of a liquid’s ability to resist a downward force through its surface. Let’s check out these properties of water in different places around the pond. Click on each element to learn more. ",

  hotspotData: [
    {
      id: 0,
      className: "outdoor-screen",
      altText:
        "A blue pond with plants and grass around it and trees located on the side. A spiderweb is stretched between the plants. An insect is on the pond.",
      hotspots: [
        {
          id: "spiderweb",
          altText: "Spiderweb",
          serNo: 1,
          text: "Spiderweb",
          class: "spi",
        },
        {
          id: "tree",
          altText: "Tree",
          serNo: 2,
          text: "Tree",
          class: "tre",
        },
        {
          id: "insect",
          altText: "Insect",
          serNo: 3,
          text: "Insect",
          class: "ins",
        },
      ],
      ariaLabel: "Outdoor area",
    },
  ],

  mainScreenMCQ: [
    {
      id: 1,
      answer: "adhesion",
      questionText:
        " If you look closely at this spiderweb, you can see that there are many droplets of water on it. The droplets are able to stick to the spiderweb. When the mass of the water droplet becomes too much, gravity takes over and will pull it down. Based on this information, do you think this property of water is adhesion, cohesion, or surface tension?",
      assetType: "",
      assetUrl: "",
      label: "Spiderweb",
      ariaLabel: "Spiderweb",
      className: "spiderweb",
    },
    {
      id: 2,
      answer: "cohesion",
      questionText:
        " Inside this tree, you can see a close-up of water molecules moving up through the tree. The water molecules move up by binding together through their hydrogen molecules. This allows the water molecules to stick together. Based on this information, do you think this property of water is adhesion, cohesion, or surface tension?",
      assetType: "Image",
      assetUrl: "",
      label: "Tree",
      ariaLabel: "Tree",
      className: "tree",
    },
    {
      id: 3,
      answer: "surface-tension",
      questionText:
        "This mosquito is able to rest on the surface of the water without falling in. The hydrogen molecules in water bond to each other, but because there are no hydrogen molecules at the surface of the water to bond to, this property of water occurs. Based on this information, do you think this property of water is adhesion, cohesion, or surface tension?",
      assetType: "",
      assetUrl: "",
      label: "Insect",
      ariaLabel: "Insect",
      className: "insect",
    },
  ],

  answerOptions: [
    {
      id: "adhesion",
      disabled: false,
      text: "Adhesion",
      label: "Adhesion",
    },
    {
      id: "cohesion",
      disabled: false,
      text: "Cohesion",
      label: "Cohesion",
    },
    {
      id: "surface-tension",
      disabled: false,
      text: "Surface tension",
      label: "Surface tension",
    },
  ],

  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You have successfully completed the simulation.",
  },
  transitionPopup: {
    ...globalConfig.transitionPopup,
    content:
      "Now that you have explored the two types of reproduction, it’s time to show what you know.",
  },
  messages: [
    {
      type: "reset",
      resetButtonText: buttonLabels.yes,
      buttonContinueText: buttonLabels.no,
      content: globalConfig.resetPopupText,
    },
  ],
  activityHeading:
    "Students will view a pond environment to learn about cohesion, adhesion, and surface tension.",
  buttonLabels: { ...globalConfig.buttonLabels },
  label: "Water molecule",
};

export default data;
