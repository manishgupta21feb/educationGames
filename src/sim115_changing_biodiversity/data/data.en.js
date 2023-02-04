import commonData from "../../app/data/data.en";
import globalConfig from "../../app/data/data.en";
const buttonLabels = { ...globalConfig.buttonLabels };
import ecosystem1 from "../assets/images/ecosystem1.png";
import ecosystem2 from "../assets/images/ecosystem2.png";
import ecosystem3 from "../assets/images/ecosystem3.png";

const data = {
  submitAnswer: buttonLabels.submitAnswer,
  continue: buttonLabels.continue,
  next: buttonLabels.next,
  finish: buttonLabels.finish,
  buttonLabels: { ...commonData.buttonLabels },
  introText:
    "Examine the forest ecosystem. Explore how environmental changes affect an ecosystem.",
  infoText:
    "Examine the forest ecosystem and explore how environmental changes affect an ecosystem. Read the on-screen text and then answer the question.",
  observationMotive:
    "In this simulation students will explore how environmental changes affect changes in an ecosystem.",
  resetPopupText: commonData.resetPopupText,
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  partialToastMessage:
    "You are almost correct! Please try again and fix your incorrect answers!",
  resetLiveText: commonData.resetLiveText,
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "What happens if an ecosystem is negatively affected in some way? Let's find out.",
  },
  completionPopup: {
    ...commonData.completionPopup,
    content:
      "You have successfully explored a forest ecosystem and what happens when it is disrupted!",
  },

  triangles: ["5", "11", "4", "6", "4", "3", "5", "4", "8", "4"],

  names: [
    "Red hawk",
    "Red fox",
    "Squirrel",
    "Raccoon",
    "Lizard",
    "Nuts",
    "Grasshopper",
    "Green plant",
  ],

  ecosystem: {
    title:
      "Food webs represent the feeding relationships among all the organisms within a community of an ecosystem. Choose one of the ecosystems below to begin.",
    alt: "A food web involving a hawk, a squirrel, a fox, a raccoon, a lizard, some nuts, a grasshopper, and some grass",
    type: [
      {
        serNo: 1,
        id: "ecosystem1",
        name: "Ecosystem 1",
      },
      {
        serNo: 2,
        id: "ecosystem2",
        name: "Ecosystem 2",
      },
      {
        serNo: 3,
        id: "ecosystem3",
        name: "Ecosystem 3",
      },
    ],
  },

  FirstScreenAnswers: [
    {
      id: "ecosystem1",
      answers: [3, 1, 3, 2, 4, 4],
    },
    {
      id: "ecosystem2",
      answers: [2, 1, 3, 1, 3, 4],
    },
    {
      id: "ecosystem3",
      answers: [1, 2, 4, 1, 5, 3],
    },
  ],

  hotspotData: [
    {
      id: "redhawk",
      altText: "Red hawk",
      serNo: 1,
      text: "Red hawk",
      class: "redhawk",
    },
    {
      id: "redfox",
      altText: "Red fox",
      serNo: 2,
      text: "Red fox",
      class: "redfox",
    },
    {
      id: "raccoon",
      altText: "Raccoon",
      serNo: 3,
      text: "Raccoon",
      class: "raccoon",
    },
    {
      id: "lizard",
      altText: "Lizard",
      serNo: 4,
      text: "Lizard",
      class: "lizard",
    },
    {
      id: "squirrel",
      altText: "Squirrel",
      serNo: 5,
      text: "Squirrel",
      class: "squirrel",
    },
    {
      id: "nuts",
      altText: "Nuts",
      serNo: 6,
      text: "Nuts",
      class: "nuts",
    },
    {
      id: "grasshopper",
      altText: "Grasshopper",
      serNo: 7,
      text: "Grasshopper",
      class: "grasshopper",
    },
    {
      id: "greenplant",
      altText: "Green plant",
      serNo: 8,
      text: "Green plant",
      class: "greenplant",
    },
  ],

  nextSectionData: [
    {
      serNo: 1,
      questionText:
        "A hard freeze impacted this ecosystem for an extended period of time and decreased the amount of green plant vegetation available. <b>Which species are directly impacted by this change?</b>",
      questionHeading: "Question: 1 of 3",
      answer: ["grasshopper", "raccoon", "squirrel"],
    },
    {
      serNo: 2,
      questionText:
        "A timber company removes all of the nut trees from this ecosystem. <b>Which species are directly impacted by this change?</b>",
      questionHeading: "Question: 2 of 3",
      answer: ["squirrel", "raccoon", "grasshopper"],
    },
    {
      serNo: 3,
      questionText:
        "A truck crashes into a pig pen at a local farm and a dozen pigs enter this ecosystem and become feral. Feral pigs destroy the green plants and eat all of the grasshoppers and lizards. <b>Which species are directly impacted by this change?</b>",
      questionHeading: "Question: 3 of 3",
      answer: ["grasshopper", "lizard", "greenplant", "nuts"],
    },
  ],

  ecosystemScreen: {
    questionHeading: "How many of each species are present?",
    ecosystem1: {
      id: "ecosystem1_view",
      title: "Ecosystem 1",
      src: ecosystem1,
      alt: "A forest ecosystem with 3 foxes, 2 raccoons, 1 hawk, 4 lizards, 3 squirrels, and 4 grasshoppers",
    },
    ecosystem2: {
      id: "ecosystem2_view",
      title: "Ecosystem 2",
      src: ecosystem2,
      alt: "A forest ecosystem with 2 foxes, 1 raccoon, 3 squirrels, 3 lizards, 4 grasshoppers, and 1 hawk",
    },
    ecosystem3: {
      id: "ecosystem3_view",
      title: "Ecosystem 3",
      src: ecosystem3,
      alt: "A forest ecosystem with 2 hawks, 1 fox, 1 raccoon, 4 squirrels, 5 lizards, and 3 grasshoppers",
    },
  },

  selectOptions: {
    redFox: [
      {
        title: "Red foxes",
        id: "redFox0",
        text: "0",
        value: 0,
        class: "redFox",
      },
      {
        id: "redFox1",
        text: "1",
        value: 1,
        class: "redFox",
      },
      {
        id: "redFox2",
        text: "2",
        value: 2,
        class: "redFox",
      },
      {
        id: "redFox3",
        text: "3",
        value: 3,
        class: "redFox",
      },
      {
        id: "redFox4",
        text: "4",
        value: 4,
        class: "redFox",
      },
      {
        id: "redFox5",
        text: "5",
        value: 5,
        class: "redFox",
      },
      {
        id: "redFox6",
        text: "6",
        value: 6,
        class: "redFox",
      },
    ],
    redHawks: [
      {
        title: "Red hawks",
        id: "redHawk0",
        text: "0",
        value: 0,
        class: "redHawks",
      },
      {
        id: "redHawk1",
        text: "1",
        value: 1,
        class: "redHawks",
      },
      {
        id: "redHawk2",
        text: "2",
        value: 2,
        class: "redHawks",
      },
      {
        id: "redHawk3",
        text: "3",
        value: 3,
        class: "redHawks",
      },
      {
        id: "redHawk4",
        text: "4",
        value: 4,
        class: "redHawks",
      },
      {
        id: "redHawk5",
        text: "5",
        value: 5,
        class: "redHawks",
      },
      {
        id: "redHawk6",
        text: "6",
        value: 6,
        class: "redHawks",
      },
    ],
    squirrels: [
      {
        title: "Squirrels",
        id: "squirrels0",
        text: "0",
        value: 0,
        class: "squirrels",
      },
      {
        id: "squirrels1",
        text: "1",
        value: 1,
        class: "squirrels",
      },
      {
        id: "squirrels2",
        text: "2",
        value: 2,
        class: "squirrels",
      },
      {
        id: "squirrels3",
        text: "3",
        value: 3,
        class: "squirrels",
      },
      {
        id: "squirrels4",
        text: "4",
        value: 4,
        class: "squirrels",
      },
      {
        id: "squirrels5",
        text: "5",
        value: 5,
        class: "squirrels",
      },
      {
        id: "squirrels6",
        text: "6",
        value: 6,
        class: "squirrels",
      },
    ],
    raccoon: [
      {
        title: "Raccoons",
        id: "raccoon0",
        text: "0",
        value: 0,
        class: "raccoon",
      },
      {
        id: "raccoon1",
        text: "1",
        value: 1,
        class: "raccoon",
      },
      {
        id: "raccoon2",
        text: "2",
        value: 2,
        answer: "answer",
        class: "raccoon",
      },
      {
        id: "raccoon3",
        text: "3",
        value: 3,
        class: "raccoon",
      },
      {
        id: "raccoon4",
        text: "4",
        value: 4,
        class: "raccoon",
      },
      {
        id: "raccoon5",
        text: "5",
        value: 5,
        class: "raccoon",
      },
      {
        id: "raccoon6",
        text: "6",
        value: 6,
        class: "raccoon",
      },
    ],
    lizards: [
      {
        title: "Lizards",
        id: "lizards0",
        text: "0",
        value: 0,
        class: "lizards",
      },
      {
        id: "lizards1",
        text: "1",
        value: 1,
        class: "lizards",
      },
      {
        id: "lizards2",
        text: "2",
        value: 2,
        class: "lizards",
      },
      {
        id: "lizards3",
        text: "3",
        value: 3,
        class: "lizards",
      },
      {
        id: "lizards4",
        text: "4",
        value: 4,
        answer: "answer",
        class: "lizards",
      },
      {
        id: "lizards5",
        text: "5",
        value: 5,
        class: "lizards",
      },
      {
        id: "lizards6",
        text: "6",
        value: 6,
        class: "lizards",
      },
    ],
    grasshoppers: [
      {
        title: "Grasshoppers",
        id: "grasshoppers0",
        text: "0",
        value: 0,
        class: "grasshoppers",
      },
      {
        id: "grasshoppers1",
        text: "1",
        value: 1,
        class: "grasshoppers",
      },
      {
        id: "grasshoppers2",
        text: "2",
        value: 2,
        class: "grasshoppers",
      },
      {
        id: "grasshoppers3",
        text: "3",
        value: 3,
        class: "grasshoppers",
      },
      {
        id: "grasshoppers4",
        text: "4",
        value: 4,
        answer: "answer",
        class: "grasshoppers",
      },
      {
        id: "grasshoppers5",
        text: "5",
        value: 5,
        class: "grasshoppers",
      },
      {
        id: "grasshoppers6",
        text: "6",
        value: 6,
        class: "grasshoppers",
      },
    ],
  },
};

export default data;
