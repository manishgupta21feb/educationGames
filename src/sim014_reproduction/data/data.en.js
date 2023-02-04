import globalConfig from "../../app/data/data.en";
const buttonLabels = { ...globalConfig.buttonLabels };

import pond from "../assets/audios/pond.mp3";
import bunnies from "../assets/audios/bunnies.mp3";
import wildflower from "../assets/audios/wildflower.mp3";
import strawberry from "../assets/audios/strawberry.mp3";
import pondQuestion from "../assets/audios/pond_question.mp3";
import outdoorScreen from "../assets/audios/outdoor-screen.mp3";
import bunniesQuestion from "../assets/audios/bunnies_question.mp3";
import wildflowerQuestion from "../assets/audios/wildflower_question.mp3";
import strawberryQuestion from "../assets/audios/strawberry_question.mp3";

const data = {
  buttonNo: buttonLabels.no,
  buttonYes: buttonLabels.yes,
  infoText: buttonLabels.info,
  resetText: buttonLabels.reset,
  buttonNext: buttonLabels.next,
  buttonStart: buttonLabels.start,
  buttonClose: buttonLabels.close,
  buttonFinish: buttonLabels.finish,
  resetConfirmationText: globalConfig.resetLiveText,
  audioAriaLabel:
    "If you are using screen reader, turn off the audio button for better experience.",
  audioPlay: "Audio On",
  audioStop: "Audio Off",
  instructionBoxContent:
    "Hi there! Let's explore the outdoor area to learn how plants and animals are able to reproduce.",
  InfoBoxContent:
    "Select an object from the outdoor area and explore how organisms reproduce. <br> <b>Sexual reproduction</b> is the reproductive process that involves two parents whose genetic material is combined to produce a new organism different from themselves. The offspring are <b>diverse</b>. <br> <b>Asexual reproduction</b> is the reproductive process that involves one parent and produces offspring identical to the parent. The offspring are <b>uniform</b>.",
  resetMsgContent: globalConfig.resetPopupText,
  mcqQuestionText: "Select the term that best applies to a hydra.",
  mcqOptions: ["Uniform Offspring", "Diverse Offspring"],
  mainMCQOptions: ["Sexual Reproduction", "Asexual Reproduction"],
  mcqQuestions: [
    "Select the term that best applies to a hydra.",
    "Select the term that best applies to bunnies.",
    "Select the term that best applies to a wildflower.",
    "Select the term that best applies to a strawberry plant.",
  ],
  mcqData: [
    {
      id: 1,
      answer: "Uniform Offspring",
      imageClass: "strawberry-plant-image",
      imageAlt:
        "Mature wild strawberry plant with blooming berries. Stems with leaves run along the ground to the left and right of the plant.",
      questionText: "Select the term that best applies to a strawberry plant.",
    },
    {
      id: 2,
      answer: "Uniform Offspring",
      imageClass: "hydra-image",
      imageAlt:
        "A hydra, a microscopic organism, in water. Offspring is growing out of the parent organism’s side.",
      questionText: "Select the term that best applies to a hydra.",
    },
    {
      id: 3,
      answer: "Diverse Offspring",
      imageClass: "wildflower-image",
      imageAlt: "Wildflower with pink petals",
      questionText: "Select the term that best applies to a wildflower.",
    },
    {
      id: 4,
      answer: "Diverse Offspring",
      imageClass: "bunnies-image",
      imageAlt:
        "Three rabbits. One large white rabbit in the center. One large brown rabbit on the left. One small brown rabbit on the right.",
      questionText: "Select the term that best applies to bunnies.",
    },
  ],

  submitAnswer: buttonLabels.submitAnswer,
  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  wrongMsg: globalConfig.incorrectToastMessage,
  sounds: [
    {
      id: "OUTDOOR_SCREEN",
      src: outdoorScreen,
    },
    {
      id: "POND",
      src: pond,
    },
    {
      id: "BUNNIES",
      src: bunnies,
    },
    {
      id: "WILDFLOWER",
      src: wildflower,
    },
    {
      id: "STRAWBERRY",
      src: strawberry,
    },
    {
      id: "POND_QUESTION",
      src: pondQuestion,
    },
    {
      id: "BUNNIES_QUESTION",
      src: bunniesQuestion,
    },
    {
      id: "WILDFLOWER_QUESTION",
      src: wildflowerQuestion,
    },
    {
      id: "STRAWBERRY_QUESTION",
      src: strawberryQuestion,
    },
  ],

  hotspotData: [
    {
      id: 0,
      className: "outdoor-screen",
      altText:
        "Pond. Wild plants including wild strawberry around the edge. Pink wildflower and 3 rabbits (1 large white, 1 large brown, and 1 small brown) in front.",
      hotspots: [
        {
          id: "strawberry-plant",
          altText: "Strawberry plant",
          serNo: 1,
          text: "Strawberry plant",
        },
        {
          id: "hydra",
          altText: "Hydra",
          serNo: 2,
          text: "Hydra",
        },
        {
          id: "wildflower",
          altText: "Wildflower",
          serNo: 3,
          text: "Wildflower",
        },
        {
          id: "bunnies",
          altText: "Bunnies",
          serNo: 4,
          text: "Bunnies",
        },
      ],
      introductionHeading:
        "Have you ever taken the time to look outside and notice how some organisms look alike and others look different? Why do you think that is? It has to do with the way they reproduce. Organisms are able to reproduce, or create offspring, either sexually or asexually. <b>Sexual reproduction</b> is the reproductive process that involves two parents whose genetic material is combined to produce a new organism different from themselves. <b>Asexual reproduction</b> is the reproductive process that involves one parent and produces offspring identical to the parent. Let’s check out the organisms around the pond and see how they reproduce.",
      clickContent: "Click on each element to find out more.",
      ariaLabel: "Outdoor area",
    },
  ],

  mainScreenMCQ: [
    {
      id: 1,
      questionId: "Ques4",
      answer: "Asexual Reproduction",
      introductionHeading:
        "Check out these delicious strawberries. Strawberries reproduce by creating stolons, stems that grow at the soil's surface or just below the ground. At the end of the stolons, new strawberries are produced.",
      questionText:
        "Based on this information, do strawberries reproduce through sexual or asexual reproduction?",
      assetType: "",
      assetUrl: "",
      label: "Strawberry Plant",
      ariaLabel: "Strawberry Plant",
      className: "strawberry-plant",
    },
    {
      id: 2,
      questionId: "Ques1",
      answer: "Asexual Reproduction",
      introductionHeading:
        "If you look closely in this pond, you will see a type of animal called a hydra. Hydras are organisms that reproduce by budding. Buds form on the stalk of the organism. In this picture, it looks like the hydra is waving at you, but that's actually a new organism!  When the bud is fully developed, it falls off and is an exact copy of its parent.",
      questionText:
        "Based on this information, do hydra reproduce through sexual or asexual reproduction?",
      assetType: "Image",
      assetUrl: "",
      label: "Hydra",
      ariaLabel: "Hydra",
      className: "hydra",
    },
    {
      id: 3,
      questionId: "Ques3",
      answer: "Sexual Reproduction",
      introductionHeading:
        "Wow, look at this beautiful flower! These types of flowers reproduce by a process called cross-pollination. Cross-pollination occurs when pollen is brought from one flowering plant, either by an animal or by the wind, and placed on another flowering plant. This process creates a seed that can then be dispersed to grow into a new flower.",
      questionText:
        "Based on this information, do flowers reproduce through sexual or asexual reproduction?",
      assetType: "",
      assetUrl: "",
      label: "Wildflower",
      ariaLabel: "Wildflower",
      className: "wildflower",
    },
    {
      id: 4,
      questionId: "Ques2",
      answer: "Sexual Reproduction",
      introductionHeading:
        "These bunnies tend to spend most of their time in this area. The large brown bunny and the white bunny recently had an offspring, the small brown bunny. Looking at the small brown bunny, you might notice it has some characteristics of both of its parents.",
      questionText:
        "Based on this information, do bunnies reproduce through sexual or asexual reproduction?",
      assetType: "",
      assetUrl: "",
      label: "Bunnies",
      ariaLabel: "Bunnies",
      className: "bunnies",
    },
  ],

  answerOptions: [
    {
      id: "sexual-reproduction",
      disabled: false,
      text: "Sexual Reproduction",
      label: "Sexual Reproduction",
    },
    {
      id: "asexual-reproduction",
      disabled: false,
      text: "Asexual Reproduction",
      label: "Asexual Reproduction",
    },
  ],

  questionHeading: "Question -1- of 4.",
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You have answered all the questions on types of reproduction.",
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
  activityHeading: "Reproduction.",
};

export default data;
