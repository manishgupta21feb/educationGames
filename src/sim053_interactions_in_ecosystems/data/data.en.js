import globalConfig from "../../app/data/data.en";
const buttonLabels = { ...globalConfig.buttonLabels };

const completionScreen = {
  ...globalConfig.completionPopup,
  content:"You have answered all the questions on interaction in ecosystem.",
};

const data = {
  buttonNo: buttonLabels.no,
  buttonYes: buttonLabels.yes,
  infoText: buttonLabels.info,
  resetText: buttonLabels.reset,
  buttonNext: buttonLabels.next,
  buttonContinue: buttonLabels.continue,
  buttonStart: buttonLabels.start,
  buttonClose: buttonLabels.close,
  buttonFinish: buttonLabels.finish,
  resetConfirmationText: globalConfig.resetLiveText,
  resetMsgContent: globalConfig.resetPopupText,
  infoLabel: "Info",
  resetLabel: "Reset",
  h1InfoTextA11Y:"In this simulation, the learner will predict the outcomes of an organism based on changing phenomena in the environment.",
  audioAriaLabel: "If you are using screen reader, turn off the audio button for better experience.",
  audioPlay: "Audio On",
  audioStop: "Audio Off",
  instructionBoxContent: "An ecosystem is a fragile system. Many outside forces can affect the living organisms in an ecosystem.<br>You will make choices and predictions to observe how this ecosystem will change.",
  InfoBoxContent: "Make your predictions.",
  submitAnswer: buttonLabels.submitAnswer,
  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  wrongMsg: globalConfig.incorrectToastMessage,
  promptIndex: 1,
  promptDataMCQ: [
    {
      id: 1,
      answerText:'Notice that the pond got smaller, but not all of the animals left.  There are still some organisms surviving in the ecosystem.',
      answer: "Some of the animals will be gone, but some will stay.",
      questionText: "This spring will be very dry, which will cause the pond to shrink in size. What do you think will happen to the animals in this ecosystem?",
      mcqOptions: [
        {
          id: "one",
          disabled: false,
          text: "There will be more animals than ever.",
          label: "There will be more animals than ever.",
        },
        {
          id: "two",
          disabled: false,
          text: "All the animals will have to go somewhere else.",
          label: "All the animals will have to go somewhere else.",
        },
        {
          id: "three",
          disabled: false,
          text: "Some of the animals will be gone, but some will stay.",
          label: "Some of the animals will be gone, but some will stay.",
        },
      ],
    },
    {
      id: 2,
      answerText:'Adding that second fox meant the foxes needed more birds to survive.  Notice the grasshoppers. Why did they increase in number?',
      answer: "The number of small birds will decrease, and the number of grasshoppers will increase.",
      questionText: "A rancher a few counties away saw a fox on his land. To protect his chickens, he caught the fox and released it into this environment.  How do you think the addition of another fox will affect the other animals here?",
      mcqOptions: [
        {
          id: "one",
          disabled: false,
          text: "The number of small birds and grasshoppers will increase.",
          label: "The number of small birds and grasshoppers will increase.",
        },
        {
          id: "two",
          disabled: false,
          text: "The number of small birds will decrease, and the number of grasshoppers will increase.",
          label: "The number of small birds will decrease, and the number of grasshoppers will increase.",
        },
        {
          id: "three",
          disabled: false,
          text: "The number of small birds and grasshoppers will decrease.",
          label: "The number of small birds and grasshoppers will decrease.",
        },
      ],
    },
    {
      id: 3,
      answerText:'Those grasshoppers eat a lot of grass! Notice the birds and foxes. Why are there more of them?',
      answer: "The number of birds will increase.",
      questionText: "The number of grasshoppers has more than tripled! What will happen to this ecosystem with so many more grasshoppers living here?",
      mcqOptions: [
        {
          id: "one",
          disabled: false,
          text: "The amount of water will increase.",
          label: "The amount of water will increase.",
        },
        {
          id: "two",
          disabled: false,
          text: "The number of birds will increase.",
          label: "The number of birds will increase.",
        },
        {
          id: "three",
          disabled: false,
          text: "The number of foxes will decrease.",
          label: "The number of foxes will decrease.",
        },
      ],
    },
  ],

  imageData: [
    {
      id: 1,
      imageClass: "prompt-one-image",
      imageAlt: "A pond surrounded by lush, green plants with birds, grasshoppers, and a fox.",
    },
    {
      id: 2,
      imageClass: "prompt-two-image",
      imageAlt: "The pond has gotten smaller. The ground is brown, the plants surrounding the pond have started to dry out, and there are now fewer animals.",
    },
    {
      id: 3,
      imageClass: "prompt-three-image",
      imageAlt: "A pond surrounded by lush, green plants with more birds and grasshoppers, but the same number of foxes.",
    },
    {
      id: 4,
      imageClass: "prompt-four-image",
      imageAlt: "A pond surrounded by lush, green plants with fewer birds and grasshoppers and 2 foxes.",
    },
    {
      id: 5,
      imageClass: "prompt-five-image",
      imageAlt: "A pond surrounded by lush, green plants with fewer birds and grasshoppers and 2 foxes.",
    },
    {
      id: 6,
      imageClass: "prompt-six-image",
      imageAlt: "A pond surrounded by lush, green plants with more birds, fewer grasshoppers, and more foxes",
    }
  ],


  completionDialog: {
    reset: { ...completionScreen },
    continue: {
      ...completionScreen,
      heading:globalConfig.completionPopup.heading ,
      buttonText:globalConfig.transitionPopup.buttonText ,
      buttonClasses:globalConfig.transitionPopup.buttonClasses ,
      content:
        "Now that you have explored the two types of reproduction, it’s time to show what you know.",
    },
  },
  questionHeading: "Question -1- of 3.",
  messages: [
    {
      type: "reset",
      header: "Reset Simulation",
      resetButtonText: buttonLabels.yes,
      buttonContinueText: buttonLabels.no,
      content: globalConfig.resetPopupText,
    },
  ],
};

export default data;
