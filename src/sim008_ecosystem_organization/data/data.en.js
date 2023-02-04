import globalConfig from "../../app/data/data.en";
const buttonLabels = { ...globalConfig.buttonLabels };

import firstOrganism from "../assets/audios/sims008_narration_1a.mp3";
import firstCorrect from "../assets/audios/sims008_narration_2a_correct.mp3";
import secondOrganism from "../assets/audios/sims008_narration_2a.mp3";
import secondCorrect from "../assets/audios/sims008_narration_3a_correct.mp3";
import thirdOrganism from "../assets/audios/sims008_narration_3a.mp3";
import thirdCorrect from "../assets/audios/sims008_narration_4a_correct1.mp3";
import fourthOrganism from "../assets/audios/sims008_narration_4a.mp3";
import fourthCorrect from "../assets/audios/sims008_narration_4a_correct2.mp3";

const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: buttonLabels.start,
  content:
    "Welcome to Antarctica! Today, you will explore how Freezing, the emperor penguin, fits within her ecosystem.",
};

const data = {
  ecosystemContent: [
    {
      id: 1,
      label:
        "A single Emperor penguin standing against a solid gray background.",
      className: "organism-penguin",
      textContent:
        "Freezing is an emperor penguin who loves living on the coast of Antarctica. She spends most of her day waddling across the ice but moves quickly and gracefully whenever she swims. She is a single, living <b>organism</b>.",
      clickContent: "Click on the <b>organism</b>.",
      correctText: "<b>Correct!</b> Freezing is the single <b>organism</b>.",
      correctAltText: "Correct! Freezing is the single organism.",
      animals: [
        {
          id: "penguin-1",
          altText:
            "A single Emperor penguin standing against a solid gray background.",
          classes: "penguin-1",
        },
      ],
      audioId: secondOrganism,
      submitAudioId: firstCorrect,
    },
    {
      id: 2,
      label: "Collection of penguins on blank background",
      className: "organism-population",
      textContent:
        "Though Freezing is a single <b>organism</b>, she does not live alone. Freezing lives in a colony of emperor penguins. All of the penguins that live in the same area are known as a <b>population</b>.",
      clickContent:
        "Click on all of the <b>organisms</b> that make up the <b>population</b>.",
      correctText:
        "<b>Correct!</b> Freezing and her extended family of emperor penguins make up a <b>population</b>.",
      correctAltText:
        "Correct! Freezing and her extended family of emperor penguins make up a population.",
      animals: [
        {
          id: "organism-1",
          classes: "organism-1",
          altText:
            "Large Emperor penguin 1 standing against a solid gray background.",
        },
        {
          id: "organism-small-penguin",
          classes: "organism-small-penguin",
          altText:
            "small Emperor penguin 1 standing against a solid gray background",
        },
        {
          id: "organism-big-penguin",
          classes: "organism-big-penguin",
          altText:
            "small Emperor penguin 2 standing against a solid gray background",
        },
        {
          id: "organism-3",
          classes: "organism-3",
          altText:
            "Large Emperor 2 penguin standing against a solid gray background.",
        },
        {
          id: "organism-4",
          classes: "organism-4",
          altText:
            "Large Emperor penguin 3 standing against a solid gray background.",
        },
      ],
      audioId: thirdOrganism,
      submitAudioId: secondCorrect,
    },
    {
      id: 3,
      label:
        "Collection of fish (single species), penguins, leopard seals on blank background",
      className: "organism-community",
      textContent:
        "A single <b>population</b> cannot survive on its own. The <b>population</b> of penguins needs to eat, so luckily there is a <b>population</b> of silverfish that also live in their area. The penguin <b>population</b> also needs to be cautious of the leopard seal <b>population</b> because leopard seals hunt them for food. All of the different <b>populations</b> living in an area are known as a <b>community</b>.",
      clickContent:
        "Click on all of the <b>populations</b> that make up the <b>community</b>.",
      correctText:
        "<b>Correct!</b> All of the <b>populations</b> of living <b>organisms</b> make up the <b>community</b>.",
      correctAltText:
        "Correct! All of the populations of living organisms make up the community.",
      animals: [
        {
          id: "community-1",
          classes: "community-1",
          altText:
            "Sets of animals shown against a solid gray background. Six Emperor penguins: five adults and one child.",
        },
        {
          id: "community-2",
          classes: "community-2",
          altText:
            "Sets of animals shown against a solid gray background. Two leopard seals. ",
        },
        {
          id: "community-3",
          classes: "community-3",
          altText:
            "Sets of animals shown against a solid gray background. Eight silverfish",
        },
      ],
      audioId: fourthOrganism,
      submitAudioId: thirdCorrect,
    },
    {
      id: 4,
      label:
        "Full ecosystem image including the water, sunlight, and all organismss",
      className: "organism-ecosystem",
      textContent:
        "A <b>community</b> includes all of the plants and animals in the same area. Communities need abiotic (never living) resources in order to survive. These include resources like water and sunlight. An <b>ecosystem</b> includes all of the biotic (living) and abiotic (never living) resources in an area.",
      clickContent:
        "Click on all of the resources that make up the <b>ecosystem</b>.",
      correctText:
        "<b>Correct!</b> All of the resources in an area make up the <b>ecosystem</b>.",
      correctAltText:
        "Correct! All of the resources in an area make up the ecosystem.",
      animals: [
        {
          id: "ecosystem-sun",
          classes: "ecosystem-sun",
          altText: "Sun shown.",
        },
        { id: "ecosystem-ice", classes: "ecosystem-ice", altText: "Iceberg" },
        {
          id: "ecosystem-1",
          classes: "ecosystem-1",
          altText: "Six Emperor penguins standing on different levels of ice",
        },
        {
          id: "ecosystem-2",
          classes: "ecosystem-2",
          altText: "Two leopard seals sitting on ice.",
        },
        {
          id: "ecosystem-water",
          classes: "ecosystem-water",
          altText: "water shown as an ecosystem",
        },
        {
          id: "ecosystem-3",
          classes: "ecosystem-3",
          altText: "Eight silverfish positioned in water.",
        },
      ],
      audioId: firstOrganism,
      submitAudioId: fourthCorrect,
    },
  ],

  dialogData: {
    start: {
      ...info,
    },
    info: {
      ...info,
      header: "",
      buttonClasses: "",
      buttonContinueText: buttonLabels.close,
      content: "Read the provided story and follow the directions.",
    },
    correct: {
      ...info,
      buttonContinueText: buttonLabels.continue,
    },
  },

  mcqQuestionText: "Select the term that best applies to the image.",
  mcqOptions: ["Organism", "Ecosystem", "Community", "Population"],

  mcqData: [
    {
      id: 1,
      class: "organism-seal",
      answer: "organism",
      imageClass: "organism-seal-image",
      imageAlt: "One leopard seal",
    },
    {
      id: 2,
      class: "community",
      answer: "ecosystem",
      imageClass: "multiple-silverfish",
      imageAlt: "Eight silverfish in water.",
    },
    {
      id: 3,
      class: "population-penguin",
      answer: "community",
      imageClass: "penguin-silverfish-image",
      imageAlt: "Six penguins and eight silver fish",
    },
    {
      id: 4,
      class: "population-fish",
      answer: "population",
      imageClass: "population-fish-image",
      imageAlt: "eight silver fish",
    },
    {
      id: 5,
      class: "ecosystem",
      answer: "community",
      imageClass: "penguin-leopardseal-image",
      imageAlt: "Six penguins and two leopard seals",
    },
  ],

  questionHeading: "Question -1- of 5.",

  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You have answered all the questions on ecosystem organization.",
  },

  transitionPopup: {
    ...globalConfig.transitionPopup,
    content: "Now let's show what you know.",
  },

  resetText: [
    {
      type: "reset",
      resetButtonText: buttonLabels.yes,
      buttonContinueText: buttonLabels.no,
      content: globalConfig.resetPopupText,
    },
  ],

  selected: "Selected",
  audioPlay: "Audio On",
  audioStop: "Audio Off",
  info: buttonLabels.info,
  reset: buttonLabels.reset,
  buttonNext: buttonLabels.next,
  buttonClose: buttonLabels.close,
  buttonFinish: buttonLabels.finish,
  alreadySelected: "Already selected",
  submitAnswer: buttonLabels.submitAnswer,
  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  wrongMsg: globalConfig.incorrectToastMessage,
  audioAriaLable:
    "If you are using screen reader, turn off the audio button for better experience.",

  sounds: [
    { id: "FIRST_ORGANISM", src: firstOrganism },
    { id: "SECOND_ORGANISM", src: secondOrganism },
    { id: "THIRD_ORGANISM", src: thirdOrganism },
    { id: "FOURTH_ORGANISM", src: fourthOrganism },
    { id: "FIRST_CORRECT", src: firstCorrect },
    { id: "SECOND_CORRECT", src: secondCorrect },
    { id: "THIRD_CORRECT", src: thirdCorrect },
    { id: "FOURTH_CORRECT", src: fourthCorrect },
  ],
  headingText:
    "Students will track how an organism fits within the hierarchical structure of an ecosystem.",
};

export default data;
