import globalData from "../../app/data/data.en";

const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: globalData.buttonLabels.start,
  buttonContinueLabel: globalData.buttonLabels.start,
  content:
    "Matter is anything that has mass and takes up space. Everything on Earth is made up of matter. In this activity, you will be able to change an object's state of matter.",
};

const infoString = [
  "Choose an object, and select the correct temperature to change the object's state of matter.",
];

const RawTextData = {
  classifyingMatterContent: [
    {
      id: 1,
      label: "Ice cream",
      alt: "Ice cream",
      className: "ice-cream",
      buttons: [
        {
          id: 1,
          label: "80°F",
          className: "temp-button-one",
          backgroundImg: "2",
          altText:
            "A plate with pink ice cream that has completely melted into a puddle. On the left is a thermometer reading 80 degrees Fahrenheit.",
          state: "Liquid",
          liveText: "Ice cream turned into liquid",
        },
        {
          id: 2,
          label: "35°F",
          className: "temp-button-two",
          backgroundImg: "1",
          altText:
            "A plate with a scoop of pink ice cream in the center that has started to melt. On the left is a thermometer reading 35 degrees Fahrenheit.",
          state: "Partially melted",
          liveText: "Ice cream is Pratially melted",
        },
        {
          id: 3,
          label: "20°F",
          className: "temp-button-three",
          backgroundImg: "0",
          altText:
            "A plate with a solid, round scoop of pink ice cream in the center. On the left is a thermometer reading 20 degrees Fahrenheit.",
          state: "Solid",
          liveText: "Ice cream is solid",
        },
      ],
    },
    {
      id: 2,
      label: "Chocolate",
      alt: "Chocolate",
      className: "chocolate",
      buttons: [
        {
          id: 1,
          label: "120°F",
          className: "temp-button-seven",
          backgroundImg: "2",
          altText:
            "A plate with solid, dark brown chocolate in the shape of a puddle. On the left is a thermometer reading 120 degrees Fahrenheit.",
          state: "Burnt solid",
          liveText: "Chocolate turned into burnt solid",
        },
        {
          id: 2,
          label: "110°F",
          className: "temp-button-eight",
          backgroundImg: "1",
          altText:
            "A plate with a chocolate bar melted into a brown puddle. On the left is a thermometer reading 110 degrees Fahrenheit.",
          state: "Liquid",
          liveText: "Chocolate turned into liquid",
        },
        {
          id: 3,
          label: "32°F",
          className: "temp-button-nine",
          backgroundImg: "0",
          altText:
            "A plate with a solid chocolate bar. On the left is a thermometer reading 32 degrees Fahrenheit.",
          state: "Solid",
          liveText: "Chocolate is solid",
        },
      ],
    },
    {
      id: 3,
      label: "Ice",
      alt: "Ice",
      className: "ice",
      buttons: [
        {
          id: 1,
          label: "212°F",
          className: "temp-button-four",
          backgroundImg: "2",
          altText:
            "A plate with a very small dot of water in the center and steam rising up. On the left is a thermometer reading 212 degrees Fahrenheit.",
          state: "Gas",
          liveText: "Ice turned into gas",
        },
        {
          id: 2,
          label: "80°F",
          className: "temp-button-five",
          backgroundImg: "1",
          altText:
            "A plate filled with a puddle of water. On the left is a thermometer reading 80 degrees Fahrenheit.",
          state: "Liquid",
          liveText: "Ice turned into liquid",
        },
        {
          id: 3,
          label: "20°F",
          className: "temp-button-six",
          backgroundImg: "0",
          altText:
            "A plate with three solid ice cubes stacked in the middle. On the left is a thermometer reading 20 degrees fahrenheit.",
          state: "Solid",
          liveText: "Ice is solid",
        },
      ],
    },
  ],

  dialogData: {
    start: {
      ...info,
    },
    info: {
      ...info,
      header: "",
      buttonContinueText: globalData.buttonLabels.close,
      buttonContinueLabel: globalData.buttonLabels.close,
      buttonClasses: "",
      content: infoString,
    },
    correct: {
      ...info,
      buttonContinueText: globalData.buttonLabels.continue,
      buttonContinueLabel: globalData.buttonLabels.continue,
    },
  },
  kitchenItems: [
    {
      id: "ice_cream",
      text: "Ice cream",
      className: "ice-cream",
    },
    {
      id: "ice",
      text: "Ice",
      className: "ice",
    },
    {
      id: "chocolate",
      text: "Chocolate",
      className: "chocolate",
    },
  ],
  activityHeading:
    "In this simulation, the learner will see that objects changing state corresponds with a change in temperature.",
  mainScreenText:
    "Select these objects and adjust the temperature to see what causes them to change between liquid, solid, and gas states.",

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
      resetButtonText: globalData.buttonLabels.yes,
      buttonContinueText: globalData.buttonLabels.no,
      content: globalData.resetPopupText,
    },
  ],

  rightMsg: globalData.correctToastMessage,
  wrongMsg: globalData.incorrectToastMessage,
  submitAnswer: globalData.buttonLabels.submitAnswer,
  buttonFinish: globalData.buttonLabels.finish,
  buttonNext: globalData.buttonLabels.next,
  buttonClose: globalData.buttonLabels.close,
  reset: globalData.buttonLabels.reset,
  info: globalData.buttonLabels.info,
  continueButton: globalData.buttonLabels.continue,
  resetLiveText: globalData.resetLiveText,
  fullViewBGAlt:
    "A table with three plates.  First plate has a scoop of pink ice cream. Second plate has a chocolate bar.  Third plate has 3 ice cubes.",
};

export default RawTextData;
