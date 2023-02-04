const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: "Start",
  buttonContinueLabel: "Start",
  content:
    "Welcome to the beautiful Pineywoods! Today, you will explore how energy flows through different organisms in this ecosystem. ",
};

const completionScreen = {
  content: "You have answered all the questions on energy and trophic levels.",
  type: "positive",
  heading: "Congratulations!",
  buttonText: "Reset",
  ButtonLabel: "Reset",
  buttonClasses: "reset-white reverse icon",
};

const RawTextData = {
  classifyingMatterContent: [
    {
      id: 1,
      text: "producers",
      label: "Producers",
      className: "gold-spoon",
      batteryPercentage: "100%",
      batteryAlt: "Full battery; it has 100% available energy.",
      textContent:
        "<b>Producers</b> make up the first trophic level. Producers get all of their energy from the Sun. There are more producers than any other type of organism in every ecosystem.",
      textAlt:
        "Producers make up the first trophic level. Producers get all of their energy from the Sun. There are more producers than any other type of organism in every ecosystem.",
    },
    {
      id: 2,
      text: "primary",
      batteryPercentage: "10%",
      label: "Primary Consumers",
      className: "glass-of-water",
      batteryAlt: "Partially full battery; it has 10% available energy.",
      textContent:
        "<b>Primary consumers</b> make up the second trophic level. Primary consumers get all of their energy from producers.",
      textAlt:
        "Primary consumers make up the second trophic level. Primary consumers get all of their energy from producers.",
    },
    {
      id: 3,
      text: "secondary",
      batteryPercentage: "1%",
      label: "Secondary Consumers",
      batteryAlt: "Low battery; it has 1% available energy.",
      textContent:
        "<b>Secondary consumers</b> make up the third trophic level.  Secondary consumers get their energy from primary consumers.",
      textAlt:
        "Secondary consumers make up the third trophic level.  Secondary consumers get their energy from primary consumers.",
    },
    {
      id: 4,
      text: "tertiary",
      batteryPercentage: "0.1%",
      label: "Tertiary Consumers",
      batteryAlt:
        "A battery with almost no charge at all; it has 0.1% available energy.",
      textContent:
        "<b>Tertiary consumers</b> make up the fourth trophic level. Tertiary consumers get their energy from secondary consumers. There are very few tertiary consumers in any ecosystem.",
      textAlt:
        "Tertiary consumers make up the fourth trophic level. Tertiary consumers get their energy from secondary consumers. There are very few tertiary consumers in any ecosystem.",
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
      content:
        "Click on each  trophic level to find out about its energy level and position in the food chain.",
    },
    correct: {
      ...info,
      buttonContinueText: "Continue",
      buttonContinueLabel: "Continue",
    },
  },
  kitchenItems: [
    {
      id: "tertiary",
      text: "Tertiary Consumers",
      className: "pyramid-eagle",
      alt: "The fourth layer of the energy pyramid, which is the top, shows an eagle in the layer.",
    },
    {
      id: "secondary",
      text: "Secondary Consumers",
      className: "pyramid-snake",
      alt: "Third highest layer of the energy pyramid; snakes are included in this layer.",
    },
    {
      id: "primary",
      text: "Primary Consumers",
      className: "pyramid-rabbit",
      alt: "Second highest layer of the energy pyramid; rabbits are included in this layer.",
    },
    {
      id: "producers",
      text: "Producers",
      className: "pyramid-plant",
      alt: "Bottom layer of the energy pyramid; plants are included in this layer.",
    },
  ],

  mcqQuestionText:
    "Read each question and select the trophic level it describes.",
  mcqOptions: [
    "Producers",
    "Primary consumers",
    "Secondary consumers",
    "Tertiary consumers",
  ],

  mcqData: [
    {
      id: 1,
      ques: "This trophic level has the least amount of energy in the energy pyramid.",
      answer: "tertiary consumers",
      imageClass: "compound",
      // imageAlt: "A single leopard seal",
    },
    {
      id: 2,
      ques: "This trophic level has the most amount of energy in the energy pyramid.",
      answer: "producers",
      imageClass: "homogeneous-mixture",
      // imageAlt: "Several silverfish in water",
    },
    {
      id: 3,
      ques: "This trophic level is made up of herbivores. Herbivores are animals that only eat plants.",
      answer: "primary consumers",
      imageClass: "element",
      // imageAlt: "Penguins and silverfish",
    },
    {
      id: 4,
      ques: "This trophic level is exclusively made up of autotrophs. Autotrophs make their own food by processing energy from the Sun.",
      answer: "producers",
      imageClass: "homogeneous-mixture",
      // imageAlt: "Multiple silverfish",
    },
  ],

  questionHeading: "Question -1- of 4.",

  completionDialog: {
    reset: { ...completionScreen },
    continue: {
      ...completionScreen,
      heading: "Great job!",
      buttonText: "Continue",
      buttonClasses: "right-arrow icon",
      content:
        "You have successfully explored how energy flows through the different trophic levels in an ecosystem. Now it is time to show what you know.",
    },
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
  selected: "Selected",
  alreadySelected: "Already selected",
  resetLiveText: "Your activity has been reset",
  screentext1: "Flow of Energy in a Food Chain",
  screentext2: "Energy Pyramid",
  bttryText: "Available Energy",
  screentext3: "Click on each trophic level to find out more.",
  mcqHelpText: "Read each question and select the trophic level it describes.",
  activityAlts: {
    popupImage:
      "A forest ecosystem with grasses, wildflowers, bushes, and trees; rabbits and snakes are on the ground. An eagle is in a tree.",
    sun: "The Sun",
    brownRabbit: "Brown rabbit",
    eagle: "Eagle perched in a tree",
    snake: "Snake with red, yellow, and black stripes",
    plants: "Wild plant; tall grasses with a yellow flower",
    firstScreenPyramid:
      "A food chain diagram. Energy flowing from the Sun, to plants, to a rabbit, to a snake, and finally to an eagle.",
    secondScreenPyramid:
      "Energy pyramid model; plants in the bottom layer, rabbits in the second layer, snakes in the third layer, and an eagle in the top (fourth) layer",
    mcqsScreenPyramid:
      "Complete energy pyramid; plants in the bottom layer, rabbits in the second layer, snakes in the third layer, and an eagle in the top (fourth) layer.",
  },
  headingText:
    "Students explore how energy pyramids are related to food chains and note how the available energy decreases at each trophic level.",
};

export default RawTextData;
