import commonData from "../../app/data/data.en";

const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  buttonLabels: { ...commonData.buttonLabels },
  startupPopup:
    "Energy is needed by all living organisms to survive and reproduce. This energy is transferred from one organism to another and can be represented with the use of an ecological pyramid. In this simulation, you will identify the living organism, classify the organism as a producer or a consumer, and determine the energy at that trophic level",
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,
  infoPopupText:
    "The arrow indicates the trophic level you should be focusing on. ",
  mcqQuestionHeading:
    "Identify the living organism indicated by the arrow, classify the organism as a producer or consumer, and indicate the energy at that trophic level. ",
  completionScreen: {
    ...commonData.completionPopup,
    content: "You have successfully completed the simulation.",
  },
  helpHintContent:
    "Energy is reduced to one-tenth of the level below it as we move from the bottom to the top in the pyramid.",
  questionHeading: "Question: -1- of -2-",
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  partialToastMessage:
    "You are almost correct! Please try again and fix your incorrect answers!",
  consumerData: [
    { id: "producer", value: "Producer", text: "Producer" },
    {
      id: "primary_consumer",
      value: "Primary consumer",
      text: "Primary consumer",
    },
    {
      id: "secondary_consumer",
      value: "Secondary consumer",
      text: "Secondary consumer",
    },
    {
      id: "tertiary_consumer",
      value: "Tertiary consumer",
      text: "Tertiary consumer",
    },
  ],
  livingOrganismHeading: "Living Organism",
  classifyHeading: "Classify",
  energyHeading: "Energy",
  mcqData: [
    {
      id: "question1",
      livingOrganismOption: [
        { id: "frog", value: "Frog", text: "Frog" },
        { id: "grass", value: "Grass", text: "Grass" },
        { id: "grasshopper", value: "Grasshopper", text: "Grasshopper" },
        { id: "snake", value: "Snake", text: "Snake" },
      ],
      energyOption: [
        { id: "e1", text: "10 kcal", value: "10 kcal" },
        { id: "e2", text: "100 kcal", value: "100 kcal" },
        { id: "e3", text: "1000 kcal", value: "1000 kcal" },
        { id: "e4", text: "10,000 kcal", value: "10,000 kcal" },
      ],
      correctLiving: "Frog",
      correctConsumer: "Secondary consumer",
      correctEnergy: "100 kcal",
      classes: "image1",
      displayData: ["10 kcal", "10,000 kcal"],
      imageAltText:
        "Energy pyramid has grass on bottom with 10,000 kcal, a grasshopper in 2nd level, frog in 3rd & snake in 4th with 10 kcal; arrow to 3rd level",
    },
    {
      id: "question2",
      livingOrganismOption: [
        { id: "flower", value: "Flower", text: "Flower" },
        { id: "mouse", value: "Mouse", text: "Mouse" },
        { id: "owl", value: "Owl", text: "Owl" },
        { id: "snake", value: "Snake", text: "Snake" },
      ],
      energyOption: [
        { id: "e1", text: "10 kcal", value: "10 kcal" },
        { id: "e2", text: "100 kcal", value: "100 kcal" },
        { id: "e3", text: "1000 kcal", value: "1000 kcal" },
        { id: "e4", text: "2000 kcal", value: "2000 kcal" },
      ],
      correctLiving: "Mouse",
      correctConsumer: "Primary consumer",
      correctEnergy: "1000 kcal",
      classes: "image2",
      displayData: ["10 kcal", "10,000 kcal"],
      imageAltText:
        "Energy pyramid has grass & flowers on bottom with 10,000 kcal, a mouse in 2nd level, snake in 3rd & owl in 4th with 10 kcal; arrow to 2nd level",
    },
    {
      id: "question3",
      livingOrganismOption: [
        { id: "frog", value: "Frog", text: "Frog" },
        { id: "grass", value: "Grass", text: "Grass" },
        { id: "grasshopper", value: "Grasshopper", text: "Grasshopper" },
        { id: "snake", value: "Snake", text: "Snake" },
      ],
      energyOption: [
        { id: "e1", text: "10 kcal", value: "10 kcal" },
        { id: "e2", text: "100 kcal", value: "100 kcal" },
        { id: "e4", text: "10,000 kcal", value: "10,000 kcal" },
        { id: "e3", text: "1,000 kcal", value: "1000 kcal" },
      ],
      correctLiving: "Grass",
      correctConsumer: "Producer",
      correctEnergy: "10,000 kcal",
      classes: "image1",
      displayData: ["10 kcal", "1,000 kcal"],
      imageAltText:
        "Energy pyramid has grass on bottom, a grasshopper in 2nd level with 1,000 kcal, frog in 3rd & snake in 4th with 10 kcal; arrow to 1st level",
    },
    {
      id: "question4",
      livingOrganismOption: [
        { id: "frog", value: "Frog", text: "Frog" },
        { id: "grass", value: "Grass", text: "Grass" },
        { id: "grasshopper", value: "Grasshopper", text: "Grasshopper" },
        { id: "snake", value: "Snake", text: "Snake" },
      ],
      energyOption: [
        { id: "e1", text: "10 kcal", value: "10 kcal" },
        { id: "e2", text: "5000 kcal", value: "5000 kcal" },
        { id: "e3", text: "3000 kcal", value: "3000 kcal" },
        { id: "e4", text: "1000 kcal", value: "1000 kcal" },
      ],
      correctLiving: "Grasshopper",
      correctConsumer: "Primary consumer",
      correctEnergy: "1000 kcal",
      classes: "image1",
      displayData: ["10 kcal", "10,000 kcal"],
      imageAltText:
        "Energy pyramid has grass on bottom with 10,000 kcal, a grasshopper in 2nd level, frog in 3rd & snake in 4th with 10 kcal; arrow to 2nd level",
    },
    {
      id: "question5",
      livingOrganismOption: [
        { id: "frog", value: "Frog", text: "Frog" },
        { id: "grass", value: "Grass", text: "Grass" },
        { id: "grasshopper", value: "Grasshopper", text: "Grasshopper" },
        { id: "snake", value: "Snake", text: "Snake" },
      ],
      energyOption: [
        { id: "e1", text: "10 kcal", value: "10 kcal" },
        { id: "e2", text: "100 kcal", value: "100 kcal" },
        { id: "e4", text: "10,000 kcal", value: "10,000 kcal" },
        { id: "e3", text: "1,000 kcal", value: "1000 kcal" },
      ],
      correctLiving: "Snake",
      correctConsumer: "Tertiary consumer",
      correctEnergy: "10 kcal",
      classes: "image1",
      displayData: ["100 kcal", "10,000 kcal"],
      imageAltText:
        "Energy pyramid has grass on bottom with 10,000 kcal, a grasshopper in 2nd level, frog in 3rd with 100 kcal & snake in 4th; arrow to 4th level",
    },
    {
      id: "question6",
      livingOrganismOption: [
        { id: "flower", value: "Flower", text: "Flower" },
        { id: "mouse", value: "Mouse", text: "Mouse" },
        { id: "owl", value: "Owl", text: "Owl" },
        { id: "snake", value: "Snake", text: "Snake" },
      ],
      energyOption: [
        { id: "e1", text: "10 kcal", value: "10 kcal" },
        { id: "e2", text: "100 kcal", value: "100 kcal" },
        { id: "e4", text: "10,000 kcal", value: "10,000 kcal" },
        { id: "e3", text: "1,000 kcal", value: "1000 kcal" },
      ],
      correctLiving: "Snake",
      correctConsumer: "Secondary consumer",
      correctEnergy: "100 kcal",
      classes: "image2",
      displayData: ["10 kcal", "10,000 kcal"],
      imageAltText:
        "Energy pyramid has grass & flowers on bottom with 10,000 kcal, a mouse in 2nd level, snake in 3rd & owl in 4th with 10 kcal; arrow to 3rd level",
    },
    {
      id: "question7",
      livingOrganismOption: [
        { id: "flower", value: "Flower", text: "Flower" },
        { id: "mouse", value: "Mouse", text: "Mouse" },
        { id: "owl", value: "Owl", text: "Owl" },
        { id: "snake", value: "Snake", text: "Snake" },
      ],
      energyOption: [
        { id: "e1", text: "10 kcal", value: "10 kcal" },
        { id: "e2", text: "100 kcal", value: "100 kcal" },
        { id: "e4", text: "10,000 kcal", value: "10,000 kcal" },
        { id: "e3", text: "1,000 kcal", value: "1000 kcal" },
      ],
      correctLiving: "Owl",
      correctConsumer: "Tertiary consumer",
      correctEnergy: "10 kcal",
      classes: "image2",
      displayData: ["100 kcal", "10,000 kcal"],
      imageAltText:
        "Energy pyramid has grass & flowers on bottom with 10,000 kcal, a mouse in 2nd level, snake in 3rd with 100 kcal & owl in 4th; arrow to 4th level",
    },
    {
      id: "question8",
      livingOrganismOption: [
        { id: "flower", value: "Flower", text: "Flower" },
        { id: "mouse", value: "Mouse", text: "Mouse" },
        { id: "owl", value: "Owl", text: "Owl" },
        { id: "snake", value: "Snake", text: "Snake" },
      ],
      energyOption: [
        { id: "e1", text: "10 kcal", value: "10 kcal" },
        { id: "e2", text: "100 kcal", value: "100 kcal" },
        { id: "e4", text: "10,000 kcal", value: "10,000 kcal" },
        { id: "e3", text: "1,000 kcal", value: "1000 kcal" },
      ],
      correctLiving: "Flower",
      correctConsumer: "Producer",
      correctEnergy: "10,000 kcal",
      classes: "image2",
      displayData: ["10 kcal", "1,000 kcal"],
      imageAltText:
        "Energy pyramid has grass & flowers on bottom, a mouse in 2nd level with 1,000 kcal, snake in 3rd & owl in 4th with 10 kcal; arrow to 1st level",
    },
  ],
  pageHeading:
    "Students will classify living things as producers or consumers and determine energy using ecological pyramids. ",
};

export default data;
