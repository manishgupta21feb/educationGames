import globalData from "../../app/data/data.en";

const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: "Start",
  buttonContinueLabel: "Start",
  content:
    "Welcome to the kitchen. Let's take a look around and determine what types of items we have.",
};

const infoString = [
  "Read the statement and select the object that is being described.",
  "An <strong>element</strong> is a pure substance composed of the same type of atom throughout.",
  "A <strong>compound</strong> is formed when two or more elements are chemically bonded.",
  "A <strong>heterogeneous mixture</strong> has an uneven distribution of parts. The individual pieces can be picked apart.",
  "A <strong>homogeneous mixture</strong> has an even distribution of its parts. It is the same substance throughout.",
];

const RawTextData = {
  classifyingMatterContent: [
    {
      id: 1,
      label: "Gold spoon",
      alt: "Gold spoon",
      className: "gold-spoon",
      instructions: [
        "Matter can be classified as either an element, a compound, or a mixture. An <strong>element</strong> is a pure substance made of the same type of atom throughout. Look around the kitchen. Which item do you think is an element?",
      ],
      answerText: [
        "Correct! This gold spoon represents an element because it is only made up of gold. Every single atom in it is gold, or Au on the Periodic Table of Elements.",
      ],
    },
    {
      id: 2,
      label: "Glass of water",
      alt: "Glass of water",
      className: "glass-of-water",
      instructions: [
        "Now that you have found the item that is an element in the kitchen, can you find the one that represents a compound? A <strong>compound</strong> is formed when two or more elements are chemically bonded. Compounds are a combination of elements. Which item in the kitchen do you think represents a compound?",
      ],
      answerText: [
        "Correct! This water represents a compound because it is made up of two elements: oxygen and hydrogen. When two atoms of hydrogen chemically combine with one atom of oxygen, water (H<sub>2</sub>O) is formed.",
      ],
    },
    {
      id: 3,
      label: "Orange juice",
      alt: "Glass of orange juice",
      className: "orange-juice",
      instructions: [
        "Remember that matter can be classified as either an element, a compound, or a mixture. So far you have discovered that gold is an element, and water is a compound. There are two items left for us to characterize: cereal and orange juice.",
        "There are two different types of mixtures. A <strong>homogeneous mixture</strong> has an even distribution of its parts; it is the same throughout. A <strong>heterogeneous mixture</strong> has an uneven distribution of parts; the items in this mixture never fully mix and can be picked apart. Which item do you think represents a homogeneous mixture?",
      ],
      answerText: [
        "Correct! Orange juice is considered to be a <strong>homogeneous mixture</strong>. The reason orange juice is a homogeneous mixture is because it is a mixture of solid pulp as well as orange juice liquid, and they are evenly distributed.",
      ],
    },
    {
      id: 4,
      label: "Cereal",
      className: "cereals",
      alt: "A bowl of cereal. The cereal includes colorful small marshmallows and crunchy cereal pieces.",
      instructions: [
        "Now that you have identified the homogeneous mixture, it is time to find the heterogeneous mixture. Remember, a <strong>heterogeneous mixture</strong> has an uneven distribution of parts. The items in this mixture never fully mix and can be picked apart. Which item do you think represents a heterogeneous mixture?",
      ],
      answerText: [
        "Correct! Cereal is considered to be a <strong>heterogeneous mixture</strong>. The cereal is considered to be a heterogeneous mixture because it is made of different parts that can be physically picked apart. You can pick each different piece of cereal out of this bowl, like eating all the marshmallows and leaving only the cereal part behind. A heterogeneous mixture always has different parts that can be physically separated.",
      ],
    },
  ],

  dialogData: {
    start: {
      ...info,
      buttonContinueText: "Start",
      buttonContinueLabel: "Start",
    },
    info: {
      ...info,
      header: "",
      buttonContinueText: "Close",
      buttonContinueLabel: "Close",
      buttonClasses: "",
      content: infoString,
    },
    correct: {
      ...info,
      buttonContinueText: "Continue",
      buttonContinueLabel: "Continue",
    },
  },
  kitchenItems: [
    { id: "gold_spoon", text: "Gold spoon", className: "gold-spoon" },
    {
      id: "glass_of_water",
      text: "Glass of water",
      className: "glass-of-water",
    },
    { id: "orange_juice", text: "Orange juice", className: "orange-juice" },
    { id: "cereals", text: "Cereal", className: "cereals" },
  ],

  mcqQuestionText: "Select the term that best applies to the image.",
  mcqOptions: [
    "Element",
    "Compound",
    "Homogeneous mixture",
    "Heterogeneous mixture",
  ],

  mcqData: [
    {
      id: 1,
      label: "Salt (NaCl)",
      answer: "compound",
      imageClass: "compound",
      imageAlt: "Table salt in a salt shaker with a pile of salt next to it.",
    },
    {
      id: 2,
      label: "Ice cream",
      answer: "homogeneous mixture",
      imageClass: "homogeneous-mixture",
      imageAlt:
        "White footed ice cream bowl with three scoops of pink ice cream.",
    },
    {
      id: 3,
      answer: "element",
      imageClass: "element",
      label: "Aluminum (Al)",
      imageAlt: "Aluminum soda can.",
    },
    {
      id: 4,
      label: "Chocolate chip cookies",
      answer: "heterogeneous mixture",
      imageClass: "heterogeneous-mixture",
      imageAlt: "A gray plate with three chocolate chip cookies.",
    },
  ],

  questionHeading: "Question -1- of 4.",

  transitionPopup: {
    ...globalData.transitionPopup,
    content:
      "Now that you have explored elements, compounds, and mixtures, show what you know.",
  },

  completionPopup: {
    ...globalData.completionPopup,
    content: "You have answered all the questions on classification of matter.",
  },

  resetText: [
    {
      type: "reset",
      resetButtonText: "Yes",
      buttonContinueText: "No",
      content: "Are you sure you want to reset?",
    },
  ],

  rightMsg: "That's right!",
  wrongMsg: "Not quite right. Try again!",
  submitAnswer: "Submit Answer",
  buttonFinish: "Finish",
  buttonNext: "Next",
  buttonClose: "Close",
  reset: "Reset",
  info: "Info",
  continueButton: "Continue",
  audioAriaLable:
    "If you are using screen reader, turn off the audio button for better experience.",
  audioPlay: "Audio On",
  audioStop: "Audio Off",
  selected: "Selected",
  alreadySelected: "Already selected",
  resetLiveText: "Your activity has been reset",
  screen1Heading:
    "Students will determine if matter is an element,compound, homogenous mixture, or heterogeneous mixed.",
  fullViewBGAlt: "Kitchen background with different appliances on the counter.",
};

export default RawTextData;
