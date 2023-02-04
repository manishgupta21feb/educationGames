import commonData from "../../app/data/data.en";

import videoExperiment1 from "../assets/videos/experiment1.mp4";
import videoExperiment2 from "../assets/videos/experiment2.mp4";
import videoExperiment3 from "../assets/videos/experiment3.mp4";

const data = {
  buttonLabels: { ...commonData.buttonLabels },
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMsg: [
    commonData.incorrectToastMessage,
    "Some of the answers are incorrect. Try again!",
  ],
  introductoryText:
    "Welcome to the Science Lab. Today, we will experiment by combining different substances and determine if a chemical change has occurred.",
  resetPopupText: commonData.resetPopupText,
  observationMotive:
    "In this simulation, students will combine different substances and determine if a chemical reaction has occurred.",

  bgImgAlt: {
    default:
      "A table with 3 labs set up: sugar & liquid sulfuric acid in beakers, calcium chloride & silver nitrate in test tubes, water in beaker & sugar on plate.",
    option1:
      "Same 3 lab setups are on the lab table except now the sugar beaker has a large, black solid in it instead of the white crystals from the beginning.",
    option2:
      "A table with 3 labs set up: sugar & liquid sulfuric acid in beakers, calcium chloride & silver nitrate in test tubes, water in beaker & sugar on plate",
    option3:
      "A table with 3 labs set up: sugar & liquid sulfuric acid in beakers, calcium chloride & silver nitrate in test tubes, water in beaker & sugar on plate.",
    option1option2:
      "The same 3 lab setups are on the lab table except now the calcium chloride test tube has white solids in it.",
    option2option1:
      "The same 3 lab setups are on the lab table except now the calcium chloride test tube has white solids in it.",
    option3option2:
      "A table with 3 labs set up: sugar & liquid sulfuric acid in beakers, calcium chloride & silver nitrate in test tubes, water in beaker & sugar on plate",
    option2option3:
      "A table with 3 labs set up: sugar & liquid sulfuric acid in beakers, calcium chloride & silver nitrate in test tubes, water in beaker & sugar on plate",
    option1option3:
      "A table with 3 labs set up: sugar & liquid sulfuric acid in beakers, calcium chloride & silver nitrate in test tubes, water in beaker & sugar on plate.",
    option3option1:
      "A table with 3 labs set up: sugar & liquid sulfuric acid in beakers, calcium chloride & silver nitrate in test tubes, water in beaker & sugar on plate.",
  },

  videoLiveText: {
    option1:
      "Sugar & liquid sulfuric acid in 2 beakers. Acid poured on sugar. Sugar turns brown, gives off gas, then turns black. A solid grows up & out of beaker.",
    option2:
      "A few drops of silver nitrate added to calcium chloride. When the clear drops interact with the clear calcium chloride, a white solid substance forms.",
    option3:
      "Sugar added to water & falls to the bottom. When stirred with a spoon, sugar particles disperse into the water and the solution appears clear again.",
  },

  resetLiveText: commonData.resetLiveText,

  labels: [
    "Sugar",
    "Sulfuric acid",
    "Calcium chloride",
    "Silver nitrate",
    "Water",
    "Sugar",
  ],

  about: {
    text: "When substances are combined and undergo a <strong>chemical change</strong>, a new substance is formed. It is not always easy to visually see if a new substance has been formed. Luckily, there are four pieces of key evidence that will help you determine if a chemical change occurred. A chemical change has occurred if any of the following occur:",
    list: [
      "Production of a gas (such as the creation of bubbles or smoke)",
      "Change in thermal energy (the combined substance is significantly hotter or colder than the original substances)",
      "Production of a precipitate (a solid substance is created when two liquids are combined)",
      "Unexpected color change",
    ],
    announcement:
      "Select each of the experiments on the lab table to investigate if a chemical change has occurred, forming a new substance.",
  },

  options: [
    {
      id: "option1",
      isDisabled: false,
      videoSrc: videoExperiment1,
      title: "Sulfuric acid and sugar investigation",
      alt: "Two separate beakers of sugar and liquid sulfuric acid on a lab table. Each is about half full. Sugar is white & grainy, the sulfuric acid is clear.",
      altEnd:
        "Sugar beaker now shows a large, black column of material extending up and out of the container.",
      videoContent: {
        labels: ["Sugar", "Sulfuric acid"],
        class: "video-labels--experiment1",
      },
      questions: [
        {
          question:
            "When the sulfuric acid and sugar were combined, was there evidence of a possible chemical change including the production of a gas, a change in thermal energy, the production of a precipitate, or an unexpected color change?",
          answer: "yes",
          videoId: "experiment1",
        },
        {
          question:
            "Did a formation of a new substance occur when sulfuric acid and sugar were combined?",
          answer: "yes",
          videoId: "experiment1",
        },
      ],
    },
    {
      id: "option2",
      isDisabled: false,
      videoSrc: videoExperiment2,
      title: "Calcium chloride and silver nitrate investigation",
      videoContent: {
        labels: ["Calcium chloride", "Silver nitrate"],
        class: "video-labels--experiment2",
      },
      alt: "Two test tubes with clear liquids are on a test tube rack. One of the test tubes contains calcium chloride and the other contains silver nitrate. ",
      altEnd:
        "Calcium chloride test tube now has a white, solid substance located at the bottom.",
      questions: [
        {
          answer: "yes",
          question:
            "When the calcium chloride and silver nitrate were combined, was there evidence of a possible chemical change including the production of a gas, a change in thermal energy, the production of a precipitate, or an unexpected color change?",
        },
        {
          answer: "yes",
          question:
            "Did a formation of a new substance occur when calcium chloride and silver nitrate were combined?",
        },
      ],
    },
    {
      id: "option3",
      isDisabled: false,
      videoSrc: videoExperiment3,
      title: "Sugar and water investigation",
      videoContent: {
        labels: ["Water", "Sugar"],
        class: "video-labels--experiment3",
      },
      alt: "On the lab table, a beaker of water is sitting next to a plate with a pile of sugar. There is a spoon in front of the plate.",
      altEnd:
        "The water in the beaker is now a little cloudy. There is less sugar on the plate. ",
      questions: [
        {
          answer: "no",
          question:
            "When the sugar and water were combined, was there evidence of a possible chemical change including the production of a gas, a change in thermal energy, the production of a precipitate, or an unexpected color change?",
        },
        {
          answer: "no",
          question:
            "Did a formation of a new substance occur when water and sugar were combined?",
        },
      ],
    },
  ],

  radioButtons: [
    {
      id: "yes",
      text: "Yes",
      label: "Yes",
    },
    {
      id: "no",
      text: "No",
      label: "No",
    },
  ],

  questionHeading: "Question: -1- of 2.",

  transitionPopup: {
    text: "Now that you have successfully identified the formation of new substances by using the evidence of a possible chemical change, it is time to show what you know.",
  },

  dragDrop: {
    description:
      "Determine which scenario describes each type of evidence of a possible chemical change.",

    options: [
      {
        id: "dd_option_1",
        title: "Change in thermal energy",
      },
      {
        id: "dd_option_2",
        title: "No evidence of a chemical change",
      },
      {
        id: "dd_option_3",
        title: "Production of a gas",
      },
      {
        id: "dd_option_4",
        title: "Production of a precipitate",
      },
      {
        id: "dd_option_5",
        title: "Unexpected color change",
      },
    ],

    questions: [
      {
        id: "dd_question_1",
        value: "Red paint and blue paint are combined, forming purple paint.",
        label:
          "Red paint and blue paint are combined, forming purple paint, drop zone.",
        accept: "dd_option_2",
      },
      {
        id: "dd_question_2",
        value:
          "Two clear liquids are combined, forming yellow solid particles.",
        label:
          "Two clear liquids are combined, forming yellow solid particles, drop zone.",
        accept: "dd_option_4",
      },
      {
        id: "dd_question_3",
        value:
          "A white solid and clear liquid are combined, forming a bright pink liquid.",
        label:
          "A white solid and clear liquid are combined, forming a bright pink liquid, drop zone.",
        accept: "dd_option_5",
      },
      {
        id: "dd_question_4",
        value:
          "A solid salt is added to a clear liquid, forming a liquid with a temperature 20°C colder than the original liquid.",
        label:
          "A solid salt is added to a clear liquid, forming a liquid with a temperature 20°C colder than the original liquid, drop zone.",
        accept: "dd_option_1",
      },
      {
        id: "dd_question_5",
        value:
          "A liquid and solid are combined in a balloon, and the balloon fills with air.",
        label:
          "A liquid and solid are combined in a balloon, and the balloon fills with air, drop zone.",
        accept: "dd_option_3",
      },
    ],
  },

  congratulationText: {
    text: "Congratulations, you have successfully completed the simulation!",
  },

  information: {
    title:
      "Select a science experiment, watch the animation, and determine if a chemical change has occurred.",
    subTitle: "Evidence of a chemical change:",
    list: [
      "Production of a gas",
      "Change in temperature",
      "Production of a precipitate",
      "Unexpected color change",
    ],
  },

  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "Now that you have successfully identified the formation of new substances by using the evidence of a possible chemical change, it is time to show what you know.",
  },

  completionPopup: {
    ...commonData.completionPopup,
    content: "You have successfully completed the simulation!",
  },
};

export default data;
