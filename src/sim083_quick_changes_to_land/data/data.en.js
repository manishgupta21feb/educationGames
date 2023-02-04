import globalConfig from "../../app/data/data.en";
const buttonLabels = { ...globalConfig.buttonLabels };
import imgVolcano from "../assets/images/Volcano-erupting_After.jpg";
import imgEarthquake from "../assets/images/Earthquakes_After.jpg";
import imgLandslide from "../assets/images/landslide_Afte.jpg";
import imgBeforeVolcano from "../assets/images/Volcano-erupting_Before.jpg";
import imgBeforeEarthquake from "../assets/images/Earthquakes_Before.jpg";
import imgBeforeLandslide from "../assets/images/landslide_Befor.jpg";

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
    "Earth contains many landforms that are all created through very different processes. Volcanic eruptions, earthquakes, and landslides are all examples of processes that work quickly to change the way Earth's surface looks.",
  InfoBoxContent: "Choose the word that best completes the sentence.",
  resetMsgContent: globalConfig.resetPopupText,

  after: "After",
  before: "Before",
  blank: "Blank",
  blank1: "Blank 1",
  blank2: "Blank 2",

  home: {
    titleOne:
      "Each of these processes can make quick changes to Earth's surface.",
    titleTwo:
      "Select an image, and on the next screen, choose the correct word that completes each sentence to describe which process caused the quick change to Earth's surface.",
    mainScreenData: [
      {
        SerNo: 1,
        id: "volcano",
        imgAfter: imgVolcano,
        imgBefore: imgBeforeVolcano,
        imgMain: imgVolcano,
        altMain: "A volcano erupting with mountains in the background",
        altBefore: "An inactive volcano",
        altAfter: "An erupting volcano",
        title: "Volcano",
        target: "volcano",
      },
      {
        SerNo: 2,
        id: "earthquake",
        imgAfter: imgEarthquake,
        imgBefore: imgBeforeEarthquake,
        imgMain: imgEarthquake,
        altMain:
          "An empty road with a crack down the middle and green hills and mountains in the background",
        altBefore: "A smooth, intact road",
        altAfter: "A road with a crack down the middle",
        title: "Earthquake",
        target: "earthquake",
      },
      {
        SerNo: 3,
        id: "landslide",
        imgAfter: imgLandslide,
        imgBefore: imgBeforeLandslide,
        imgMain: imgLandslide,
        altMain:
          "A green valley with green hills and mountains in the background and in the foreground, a mountain with a side that has slid down",
        altBefore: "A mountain with a steep side",
        altAfter: "A mountain with a side that has slid down",
        title: "Landslide",
        target: "landslide",
      },
    ],
  },

  Questions: [
    {
      id: 1,
      questions: [
        {
          id: 1,
          answer1: "volcano",
          answer2: "",
          questionText1: "A(n)",
          questionText2: "caused this change to Earth's surface.",
          questionText3: "",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "volcano",
              value: "volcano",
            },
            {
              id: 2,
              text: "earthquake",
              value: "earthquake",
            },
            {
              id: 3,
              text: "landslide",
              value: "landslide",
            },
          ],
          options2: [],
        },
        {
          id: 2,
          answer1: "Volcanoes",
          answer2: "magma",
          questionText1: "",
          questionText2: "allow liquid rock called",
          questionText3: "to reach Earth's surface.",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "Landslides",
              value: "Landslides",
            },
            {
              id: 2,
              text: "Earthquakes",
              value: "Earthquakes",
            },
            {
              id: 3,
              text: "Volcanoes",
              value: "Volcanoes",
            },
          ],
          options2: [
            {
              id: 1,
              text: "salt water",
              value: "salt water",
            },
            {
              id: 2,
              text: "magma",
              value: "magma",
            },
            {
              id: 3,
              text: "trees",
              value: "trees",
            },
          ],
        },
        {
          id: 3,
          answer1: "lava",
          answer2: "",
          questionText1: "When magma gets to the surface, its name changes to",
          questionText2: ".",
          questionText3: "",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "a lake",
              value: "a lake",
            },
            {
              id: 2,
              text: "hot slime",
              value: "hot slime",
            },
            {
              id: 3,
              text: "lava",
              value: "lava",
            },
          ],
          options2: [],
        },
        {
          id: 4,
          answer1: "land",
          answer2: "",
          questionText1:
            "When a volcano erupts, it quickly changes land. When the lava cools, it forms new ",
          questionText2: ".",
          questionText3: "",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "oceans",
              value: "oceans",
            },
            {
              id: 2,
              text: "forests",
              value: "forests",
            },
            {
              id: 3,
              text: "land",
              value: "land",
            },
          ],
          options2: [],
        },
      ],
    },
    {
      id: 2,
      questions: [
        {
          id: 1,
          answer1: "earthquake",
          answer2: "",
          questionText1: "A(n)",
          questionText2: "caused this change to Earth's surface.",
          questionText3: "",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "volcano",
              value: "volcano",
            },
            {
              id: 2,
              text: "earthquake",
              value: "earthquake",
            },
            {
              id: 3,
              text: "landslide",
              value: "landslide",
            },
          ],
          options2: [],
        },
        {
          id: 2,
          answer1: "Earthquakes",
          answer2: "plates",
          questionText1: "",
          questionText2: "happen when",
          questionText3:
            "get stuck while moving past each other or when they run ",
          questionText4: "into each other.",
          options1: [
            {
              id: 1,
              text: "Landslides",
              value: "Landslides",
            },
            {
              id: 2,
              text: "Earthquakes",
              value: "Earthquakes",
            },
            {
              id: 3,
              text: "Volcanoes",
              value: "Volcanoes",
            },
          ],
          options2: [
            {
              id: 1,
              text: "oceans",
              value: "oceans",
            },
            {
              id: 2,
              text: "plates",
              value: "plates",
            },
            {
              id: 3,
              text: "trees",
              value: "trees",
            },
          ],
        },
        {
          id: 3,
          answer1: "fault",
          questionText1: "Earthquakes happen on a",
          questionText2: "line and can cause a lot of damage to these areas.",
          questionText3: "",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "fault",
              value: "fault",
            },
            {
              id: 2,
              text: "water",
              value: "water",
            },
            {
              id: 3,
              text: "straight",
              value: "straight",
            },
          ],
          options2: [],
        },
      ],
    },
    {
      id: 3,
      questions: [
        {
          id: 1,
          answer1: "landslide",
          answer2: "",
          questionText1: "A(n)",
          questionText2: "caused this change to Earth's surface.",
          questionText3: "",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "volcano",
              value: "volcano",
            },
            {
              id: 2,
              text: "earthquake",
              value: "earthquake",
            },
            {
              id: 3,
              text: "landslide",
              value: "landslide",
            },
          ],
          options2: [],
        },
        {
          id: 2,
          answer1: "landslide",
          answer2: "water",
          questionText1: "A(n)",
          questionText2: "is caused when",
          questionText3: "moves quickly on Earth's surface.",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "landslide",
              value: "landslide",
            },
            {
              id: 2,
              text: "earthquake",
              value: "earthquake",
            },
            {
              id: 3,
              text: "volcano",
              value: "volcano",
            },
          ],
          options2: [
            {
              id: 1,
              text: "water",
              value: "water",
            },
            {
              id: 2,
              text: "land",
              value: "land",
            },
            {
              id: 3,
              text: "lava",
              value: "lava",
            },
          ],
        },
        {
          id: 3,
          answer1: "heavy",
          answer2: "",
          questionText1: "Wet dirt can become too",
          questionText2: "and collapse.",
          questionText3: "",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "dry",
              value: "dry",
            },
            {
              id: 2,
              text: "dirty",
              value: "dirty",
            },
            {
              id: 3,
              text: "heavy",
              value: "heavy",
            },
          ],
          options2: [],
        },
        {
          id: 4,
          answer1: "earthquake",
          answer2: "",
          questionText1: "Sometimes a(n)",
          questionText2: "can cause a landslide.",
          questionText3: "",
          questionText4: "",
          options1: [
            {
              id: 1,
              text: "earthquake",
              value: "earthquake",
            },
            {
              id: 2,
              text: "drought",
              value: "drought",
            },
            {
              id: 3,
              text: "forest fire",
              value: "forest fire",
            },
          ],
          options2: [],
        },
      ],
    },
  ],

  submitAnswer: buttonLabels.submitAnswer,
  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  wrongMsg: globalConfig.incorrectToastMessage,
  partialWrongMsg: "One of your answer is incorrect. Try again!",

  questionHeading: "Question: -1- of -4-",
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You have successfully completed the simulation.",
  },
  transitionPopup: {
    ...globalConfig.transitionPopup,
    content: "You have answered all the questions.",
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
    "In this simulation, the learner will view examples of rapid changes that have occurred and choose which process made the change occur. Students will also choose words to fill in sentence stems in order to describe the changes that have happened.",
  buttonLabels: { ...globalConfig.buttonLabels },
};

export default data;
