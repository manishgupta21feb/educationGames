import globalCommonData from "../../app/data/data.en";
const buttonLabels = { ...globalCommonData.buttonLabels };

const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: buttonLabels.start,
  content:
    "We use resources every day. Some are human-made, and others are made by Earth. Some resources can easily be replaced; some never run out; and some, once used, are gone forever. On the next screen, you will see pictures of items made from Earth's resources. You will choose whether each item was made from a natural resource or a human-made one.",
};

const data = {
  globalButtonLabels: { ...buttonLabels },
  startPopupAltText:
    "A park with a garden next to an apartment and house in a city",
  resetLiveText: globalCommonData.resetLiveText,
  resetMsgContent: globalCommonData.resetPopupText,
  submitAnswer: buttonLabels.submitAnswer,
  resetPopupText: globalCommonData.resetPopupText,
  instruction:
    "We use Earth's natural resources for many things. Soil, water, air, wood, metal, plants, and animals all come from Earth and have uses in our everyday lives. Click on each item to see the resource that was used to make the item. Then, choose whether that resource is natural or human-made.",
  instructionTwo: [
    "Many items we use today are human-made, but they are made from natural resources.  The table is a good example.  It is made from wood, a natural resource, but the table was designed and made by humans. Identify the other examples of human-made items that use natural resources.",
    "Look at every item identified in this scene. Identify the ones that you think humans can reduce their use of, reuse, or recycle after use. ",
  ],

  helpTextScreenOne: [
    "Click on each label. Then, decide if the item used to make it is a natural resource, or if it is human-made.",
  ],
  helpTextScreenTwo: ["Click label screen two."],

  dialogData: {
    start: {
      ...info,
      buttonContinueText: buttonLabels.start,
    },
    info: {
      ...info,
      buttonClasses: "",
      buttonContinueText: buttonLabels.close,
      content:
        "Click on each label. Then, decide if the item used to make it is a natural resource, or if it is human-made.",
    },

    infoSecond: {
      ...info,
      buttonClasses: "",
      buttonContinueText: buttonLabels.close,
      content: "Choose items from the image to answer the questions.",
    },

    correct: {
      ...info,
      buttonContinueText: buttonLabels.continue,
    },
    incorrect: {
      ...info,
      dialogType: "warning",
      buttonContinueText: buttonLabels.close,
    },
  },
  buttonInfo: buttonLabels.info,
  buttonReset: buttonLabels.reset,
  wellDone: "Well done!",

  transitionPopup: {
    ...globalCommonData.transitionPopup,
    content:
      "Now that you have explored human-made items and natural resources, show what you know.",
  },
  completionPopup: {
    ...globalCommonData.completionPopup,
    content: "You have successfully identified items as being natural or human-made and if they can be reduced, reused, or recycled!",
  },

  mainImageAlt:
    "A cross section of an apartment building showing the inside of four different apartments as well as the street outside",
  ImageAlt:
    "A cross section of an apartment building showing the inside of four different apartments as well as the street outside",
  pageHeading:
    "In this simulation, students will differentiate between natural and human-made resources used to make everyday objects.",
  finish: "Finish",
  continue: "Continue",
  buttonNext: buttonLabels.next,
  resetText: buttonLabels.reset,
  closeButton: buttonLabels.close,
  startButton: buttonLabels.start,
  continue: buttonLabels.continue,
  incorrectToastMessage: globalCommonData.incorrectToastMessage,
  next: buttonLabels.next,
  partiallyIncorrectToastMessage:
    "Some of your answers are incorrect. Try again!",

  buttonLabels: [
    {
      id: "potted_plant",
      value: "Potted plant",
      answer: "Natural",
      disabled: false,
      text: "Potted plant",
      label: "Potted plant",
      question:
        "The plants in these pots are large. Are these plants a natural resource, or are they human-made? ",
    },
    {
      id: "glass",
      answer: "Human-made",
      value: "Glass",
      disabled: false,
      text: "Glass",
      label: "Glass",
      question:
        "The glass in the window was made in a factory. Is glass a natural resource, or is it human-made?",
    },
    {
      id: "curtain",
      value: "Curtains",
      answer: "Human-made",
      disabled: false,
      text: "Curtains",
      label: "Curtain",
      question:
        "The curtains on this window are made from fabric. A worker sewed the curtains in a shop. Is the fabric a natural resource, or is it human-made? ",
    },
    {
      id: "rocks",
      value: "Fireplace",
      disabled: false,
      answer: "Natural",
      text: "Fireplace",
      label: "Fireplace",
      question:
        "Rocks were used to make this stone fireplace. Are rocks a  natural resource, or are they human-made?",
    },
    {
      id: "plastic_cell_phone",
      value: "Plastic cell phone",
      answer: "Human-made",
      disabled: false,
      text: "Plastic cell phone",
      label: "Plastic cell phone",
      question:
        "This cell phone has a plastic case on it. It also has several metal parts inside of it that make it work. Is plastic a natural resource, or is it human-made? ",
    },
    {
      id: "vegetables",
      value: "Vegetables",
      answer: "Natural",
      disabled: false,
      text: "Vegetables",
      label: "Vegetables",
      question:
        "This plate of fresh vegetables was grown in the garden outside. Are vegetables a natural resource, or are they human-made? ",
    },
    {
      id: "wooden_chair",
      value: "Wooden chair",
      answer: "Human-made",
      disabled: false,
      text: "Wooden chair",
      label: "Wooden chair",
      question:
        "This chair was made from lumber and metal. Is the wooden chair a natural resource, or is it human-made?",
    },
    {
      id: "water",
      value: "Water",
      disabled: false,
      answer: "Natural",
      text: "Water",
      label: "Water",
      question:
        "This cat drinks water out of her bowl every day, The water comes from the sink in the kitchen. Is the water a natural resource, or is it human-made?",
    },
    {
      id: "tree",
      value: "Tree",
      disabled: false,
      answer: "Natural",
      text: "Tree",
      label: "Tree",
      question:
        "The tree that the swing hangs from has been growing here for 50 years. Is the tree a natural resource, or is it human-made?",
    },
    {
      id: "garden_soil",
      value: "Garden soil",
      disabled: false,
      answer: "Natural",
      text: "Garden soil",
      label: "Garden soil",
      question:
        "Plants in a garden grow in soil that provides their nutrients. Is soil a natural resource, or is it human-made?",
    },
    {
      id: "iron",
      value: "Iron door",
      disabled: false,
      text: "Iron door",
      answer: "Natural",
      label: "Iron door",
      question:
        "The front door to this apartment building is made of iron. Iron is a type of metal. Is iron a natural resource, or is it human-made? ",
    },
    {
      id: "car",
      value: "Car",
      answer: "Human-made",
      disabled: false,
      text: "Car",
      label: "Car",
      question:
        "This car was made in Ohio and took two weeks to assemble. Are cars a natural resource, or are they human-made?",
    },
    {
      id: "oil",
      value: "Oil",
      answer: "Natural",
      disabled: false,
      question:
        "Gasoline for the car comes from oil. Is oil a natural resource, or is it human-made?",
      text: "Oil",
      label: "Oil",
    },
  ],

  radioButtons: [
    {
      id: "rb1",
      value: "Human-made",
      disabled: false,
      text: "Human-made",
      label: "Human-made",
    },
    {
      id: "rb2",
      value: "Natural",
      disabled: false,
      text: "Natural",
      label: "Natural",
    },
  ],

  buttonAnswers: [
    [
      "glass",
      "curtain",
      "rocks",
      "plastic_cell_phone",
      "wooden_chair",
      "iron",
      "car",
    ],
    [
      "potted_plant",
      "glass",
      "curtain",
      "rocks",
      "plastic_cell_phone",
      "vegetables",
      "wooden_chair",
      "water",
      "tree",
      "garden_soil",
      "iron",
      "car",
      "oil",
    ],
  ],

  buttonYes: buttonLabels.yes,
  buttonNo: buttonLabels.no,
};

export default data;
