import commonData from "../../app/data/data.en";

const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  buttonLabels: { ...commonData.buttonLabels },
  startUpPopup:
    "Look at these things I found in my pocket! Do you think they are attracted to a magnet? Let's find out!",
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,
  infoPopupText: "Push the slider up to move the magnet to the object.",
  descriptionBoxContentScreen1:
    "Do you think this paper clip is attracted to a magnet?",
  descriptionBoxContentScreen2:
    "Do you think this penny is attracted to a magnet?",
  completionScreen: {
    ...commonData.completionPopup,
    content: "Play again if you want!",
  },
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "Did you see the magnet pull the paper clip? Now, let’s see what happens with a penny and a magnet.",
  },
  firstScreenData: {
    heading1: "Click on the paper clip.",
    heading2: "Push the magnet using the slider.",
    question: "Is the paper clip magnetic?",
    correctAnswer: "yes",
  },
  secondScreenData: {
    heading1: " Click on the penny.",
    heading2: "Push the magnet using the slider.",
    question: "Is the penny magnetic?",
    correctAnswer: "no",
  },
  radioButtons: [
    { id: "yes", text: "Yes", label: "Yes" },
    { id: "no", text: "No", label: "No" },
  ],
  sliderData: [
    {
      id: "slidervalue1",
      value: 0,
      label1: "Farthest from the paper clip",
      label2: "Farthest from the paper penny",
    },
    {
      id: "slidervalue2",
      value: 1,
      label1: "One step near towards the paper clip",
      label2: "One step near towards the penny",
    },
    {
      id: "slidervalue3",
      value: 2,
      label1: "Two step near towards the paper clip",
      label2: "Two step near towards the penny",
    },
    {
      id: "slidervalue4",
      value: 3,
      label1: "Three step near towards the paper clip",
      label2: "Three step near towards the penny",
    },
    {
      id: "slidervalue5",
      value: 4,
      label1: "Four step near towards the paper clip",
      label2: "Four step near towards the penny",
    },
    {
      id: "slidervalue6",
      value: 5,
      label1: "Five step near towards the paper clip",
      label2: "Five step near towards the penny",
    },
    {
      id: "slidervalue7",
      value: 6,
      label1: "Six step near towards the paper clip",
      label2: "Six step near towards the penny",
    },
    {
      id: "slidervalue8",
      value: 7,
      label1: "Seven step near towards the paper clip",
      label2: "Seven step near towards the penny",
    },
    {
      id: "slidervalue9",
      value: 8,
      label1: "Nearest to the paper clip and the paper clip is attached to the magnet",
      label2: "Nearest to the penny and the penny does not attached to the magnet",
    },
  ],

  valuetextArray1: {
    0: "Farthest from the paper clip",
    1: "One step near towards the paper clip",
    2: "Two step near towards the paper clip",
    3: "Three step near towards the paper clip",
    4: "Four step near towards the paper clip",
    5: "Five step near towards the paper clip",
    6: "Six step near towards the paper clip",
    7: "Seven step near towards the paper clip",
    8: "Nearest to the paper clip and the paper clip is attached to the magnet",
  },
  valuetextArray: {
    0: "Farthest from the penny",
    1: "One step near towards the penny",
    2: "Two step near towards the penny",
    3: "Three step near towards the penny",
    4: "Four step near towards the penny",
    5: "Five step near towards the penny",
    6: "Six step near towards the penny",
    7: "Seven step near towards the penny",
    8: "Nearest to the penny and the penny does not attached to the magnet",
  },

  buttonLabel1: "Paper-clip",
  buttonLabel2: "Penny",
  imagePopupAlt: "image of Paper-clip and penny",
  pageHeading:
    "Students will predict and observe how a magnet interacts with two materials and how magnets can be used to pull magnetic objects.",
  imageAltText: "Image of item with magnet",
};

export default data;
