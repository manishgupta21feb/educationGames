import globalDataSet from "../../app/data/data.en";
const buttonLabels = { ...globalDataSet.buttonLabels };
import commonData from "../../app/data/data.en";
import introImg from "../assets/images/intro.png";

const data = {
  buttonContinue: buttonLabels.continue,
  buttonNext: buttonLabels.next,
  buttonFinish: buttonLabels.finish,
  submitAnswer: buttonLabels.submitAnswer,
  buttonClose: buttonLabels.close,
  observationMotive:
    "Students will observe the effects of balanced and unbalanced force pairs.They will identify the magnitude and direction of the action and reaction force.",

  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "Now that you’ve learned that, according to Newton’s third law, simultaneous force pairs are equal in magnitude and opposite in direction, it’s time to show what you know.",
  },

  completionPopup: {
    ...commonData.completionPopup,
    content: "You have successfully completed this simulation!",
  },

  rightMsg: globalDataSet.correctToastMessage,
  wrongMsg: globalDataSet.incorrectToastMessage,
  questionHeading: "Question: -1- of 4",

  questionInstruction: "Read each scenario and select the correct response.",

  label: {
    N: "N",
    newton: " Newton",
    leftCounterHead: "Force from wall (N)",
    rightCounterHead: "Force toward wall (N)",
  },

  animationLabel: {
    leftIncrement: "Force from the wall is increased to ",
    leftDecrement: "Force from the wall is decreased to ",
    rightIncrement: "Force toward the wall is increased to ",
    rightDecrement: "Force toward the wall is decreased to ",
  },

  counterLabel: {
    increment: "Increase value",
    decrement: "Decrease value",
    leftIncrement: "Increase the force from the wall",
    leftDecrement: "Decrease the force from the wall",
    rightIncrement: "Increase the force toward the wall",
    rightDecrement: "Decrease the force toward the wall",
  },

  firstSectionScreenData: [
    {
      id: "screen1",
      class: "screen1",
      infoData:
        "Hi there! Forces act on all objects all the time—even when they are staying still. Right now, I’m standing on the sidewalk. What force is preventing me from floating off into the sky?",
      alt: "dummy alt text for screen 1 image",
      text1: "",
      text2: "",
    },
    {
      id: "screen2",
      class: "screen2",
      infoData:
        "That’s right! Gravity (an <b>action force</b>) pulls all objects on Earth toward its core. Gravity is so strong that if no force balanced it out, it would pull everything and everyone down through the ground!",
      alt: "dummy alt text for screen 2 image",
      text1: "Gravity",
      text2: "",
    },
    {
      id: "screen3",
      class: "screen3",
      infoData:
        "Luckily, the normal force (the <b>reaction force</b>) pushes up from the ground and balances out the gravitational force. Even though it may not feel like it, while I’m standing here, two different forces that are equal in size and opposite in direction are pushing and pulling on me.",
      alt: "dummy alt text for alt screen 3 image",
      text1: "Gravity",
      text2: "Normal",
      wallAlt: "dummy alt for still wall",
    },
    {
      id: "screen4",
      class: "screen4",
      infoData:
        "The gravity and normal force pair isn't the only <b>force pair</b> happening. Right now, I’m pushing against this wall with a force of 50 N. The wall is simultaneously pushing back on me with a force of equal <b>magnitude</b>. Use the stepper to explore what would happen if those forces were not equal. When you are done exploring, click Next to move on.",
      alt: "dummy alt text for screen 4 image",
      text1: "",
      text2: "",
    },
  ],

  compassData: ["N", "W", "E", "S"],
  arrowData: ["A", "B", "C", "D"],

  QuestionData: [
    {
      serNo: 1,
      questionText:
        "If an action force is pushing an object toward the left, what direction would the reaction force push back?",
      answer: "right",
      text1: "Action Force",
      text2: "",
      alt: "dummy alt for question 1",
      options: [
        {
          id: "left",
          text: "Left",
          label: "Left",
        },
        {
          id: "right",
          text: "Right",
          label: "Right",
        },
        {
          id: "up",
          text: "Up",
          label: "Up",
        },
        {
          id: "down",
          text: "Down",
          label: "Down",
        },
      ],
    },
    {
      serNo: 2,
      questionText:
        "Examine the diagram. In what direction would the reaction force push back?",
      answer: "south",
      text1: "Action Force",
      text2: "",
      alt: "dummy alt for question 2",
      options: [
        {
          id: "north",
          text: "North",
          label: "North",
        },
        {
          id: "east",
          text: "East",
          label: "East",
        },
        {
          id: "south",
          text: "South",
          label: "South",
        },
        {
          id: "west",
          text: "West",
          label: "West",
        },
      ],
    },
    {
      serNo: 3,
      questionText:
        "What magnitude would the reaction force have in this force pair?",
      answer: "20 N",
      text1: "20 N",
      text2: "??",
      alt: "dummy alt for question 3",
      options: [
        {
          id: "2 N",
          text: "2 N",
          label: "2 N",
        },
        {
          id: "20 N",
          text: "20 N",
          label: "20 N",
        },
        {
          id: "40 N",
          text: "40 N",
          label: "40 N",
        },
        {
          id: "100 N",
          text: "100 N",
          label: "100 N",
        },
      ],
    },
    {
      serNo: 4,
      questionText:
        "According to Newton’s third law of motion, which set of force arrows accurately represents a simultaneous force pair?",
      answer: "c",
      text1: "",
      text2: "",
      alt: "dummy alt for question 4",
      options: [
        {
          id: "a",
          text: "A",
          label: "Dummy arrow information for option A",
        },
        {
          id: "b",
          text: "B",
          label: "Dummy arrow information for option B",
        },
        {
          id: "c",
          text: "C",
          label: "Dummy arrow information for option C",
        },
        {
          id: "d",
          text: "D",
          label: "Dummy arrow information for option D",
        },
      ],
    },
  ],

  instructionBoxContent: {
    label:
      "Have you ever wondered what forces are acting on objects? Today, you will explore force pairs and Newton’s third law of motion.",
    img: introImg,
    alt: "Dummy alt text for start info box",
  },
  InfoBoxContent:
    "Newton’s third law of motion states that for every action force, there is an equal and opposite reaction force. Read each scenario and identify either the action force or the reaction force.",
  buttonLabels: { ...globalDataSet.buttonLabels },
  resetLiveText: globalDataSet.resetLiveText,
  resetMsgContent: globalDataSet.resetPopupText,
};

export default data;
