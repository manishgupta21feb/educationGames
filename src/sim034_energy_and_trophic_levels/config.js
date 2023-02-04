const info = {
  // header: "Welcome to Antarctica!",
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: "Start",
  buttonContinueLabel: "Start",
  content:
    "Welcome to Antarctica! Today, you will explore how Freezing, the emperor penguin, fits within her ecosystem.",
};

const completionScreen = {
  content: "You have answered all the questions on ecosystem organization.",
  type: "positive",
  heading: "Congratulations!!",
  buttonText: "Reset",
  ButtonLabel: "Reset",
  buttonClasses: "reset-white reverse icon",
};

const RawTextData = {
  ecosystemContent: [
    {
      id: 1,
      label: "Single penguin on blank background",
      className: "organism-penguin",
      textContent:
        "Freezing is an emperor penguin who loves living on the coast of Antarctica. She spends most of her day waddling across the ice but moves quickly and gracefully whenever she swims. She is a single, living <b>organism</b>.",
      clickContent: "Click on the <b>organism</b>.",
      correctText: "<b>Correct!</b> Freezing is the single <b>organism</b>.",
      correctAltText: "Correct! Freezing is the single organism.",
      animals: [{ id: "penguin-1", altText: "Single Penguin" }],
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
        { id: "organism-1", altText: "Penguin 1" },
        { id: "organism-small-penguin", altText: "Penguin 2" },
        { id: "organism-big-penguin", altText: "Penguin 3" },
        { id: "organism-3", altText: "Penguin 4" },
        { id: "organism-4", altText: "Penguin 5" },
      ],
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
        { id: "community-1", altText: "Penguins" },
        { id: "community-2", altText: "Leopard seals" },
        { id: "community-3", altText: "Collection of fish" },
      ],
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
        { id: "ecosystem-sun", altText: "Sun in ecosystem" },
        { id: "ecosystem-ice", altText: "Ice in ecosystem" },
        { id: "ecosystem-1", altText: "Penguins in ecosystem" },
        { id: "ecosystem-2", altText: "Leopard seals in ecosystem" },
        { id: "ecosystem-water", altText: "Water in ecosystem" },
        { id: "ecosystem-3", altText: "Collection of fish in ecosystem" },
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
      content: "Read the provided story and follow the directions.",
    },
    correct: {
      ...info,
      buttonContinueText: "Continue",
      buttonContinueLabel: "Continue",
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
      imageAlt: "A single leopard seal",
    },
    {
      id: 2,
      class: "community",
      answer: "ecosystem",
      imageClass: "multiple-silverfish",
      imageAlt: "Several silverfish in water",
    },
    {
      id: 3,
      class: "population-penguin",
      answer: "community",
      imageClass: "penguin-silverfish-image",
      imageAlt: "Penguins and silverfish",
    },
    {
      id: 4,
      class: "population-fish",
      answer: "population",
      imageClass: "population-fish-image",
      imageAlt: "Multiple silverfish",
    },
    {
      id: 5,
      class: "ecosystem",
      answer: "community",
      imageClass: "penguin-leopardseal-image",
      imageAlt: "Penguins and leopard seals",
    },
  ],

  questionHeading: "Question -1- of 5.",

  completionDialog: {
    reset: { ...completionScreen },
    continue: {
      ...completionScreen,
      heading: "Great job!",
      buttonText: "Continue",
      buttonClasses: "right-arrow icon",
      content: "Now let’s show what you know.",
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
  audioAriaLable:
    "If you are using screen reader, turn off the audio button for better experience.",
  audioPlay: "Audio On",
  audioStop: "Audio Off",
  selected: "Selected",
  alreadySelected: "Already selected",
  resetLiveText: "Your activity has been reset",
};

export default RawTextData;
