import commonData from "../../app/data/data.en";

const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  buttonLabels: { ...commonData.buttonLabels },

  objectiveHeading:
    "Students will explore how mass and string length affect the path of a pendulum.",
  startScreenHeading:
    "In this activity, you will explore how mass and length affect the motion of a simple pendulum.",
  infoText:
    "Adjust the mass and string length to see how those changes affect simple harmonic motion.",
  screen1HeadingText:
    "Select a scenario to explore the motion of the pendulum.",
  PendulumOneHeadingText:
    "Explore how mass and length affect the motion of the pendulum. Click “Set degrees” to pull the pendulum to 45 degrees. Click “Start” to release it to swing.",
  PendulumTwoHeadingText:
    "Explore how mass and length affect the motion of the pendulums. Click “Set degrees” to pull the pendulums to 45 degrees. Click “Start” to release them to swing.",
  completionPopup:
    "You have successfully explored the relationship between mass and string length on the motion of a single and double pendulum.",
  setDegreeButton: "Set degrees",
  buttonLabels: { ...commonData.buttonLabels },
  resetLiveText: commonData.resetLiveText,
  resetMsgContent: commonData.resetPopupText,
  rularAltSingle:
    "A ruler is to the left of the single pendulum and shows markings from 0 to 10 meters.",
  protactorAltSingle:
    "A protractor is to the right of the ruler with a single pendulum at 90 degrees",
  protactorAltSingleNew:
    "A protractor is to the right of the ruler with a single pendulum at 45 degrees",
  rularAltDouble:
    "A ruler is to the left of the double pendulum and shows markings from 0 to 10 meters.",
  protactorAltDouble:
    "A protractor is to the right of the ruler with a double pendulum at 90 degrees.",
  protactorAltNew:
    "A protractor is to the right of the ruler with a double pendulum at 45 degrees.",
  screenOneContent: [
    {
      id: "singlependulum",
      btnText: "Single pendulum",
      alt: "Single pendulum with one blue cube hanging down the middle of a protractor.",
    },
    {
      id: "doublependulum",
      btnText: "Double pendulum",
      alt: "A pendulum with one green cube on the bottom and a blue cube above it hanging down the middle of a protractor.",
    },
  ],
  onPendulumText: 1,
  onPendulumTwoText: 2,
  PendulumOneAltText1: "A single pendulum with a mass of",
  PendulumOneAltText2: "kg and a wire the length of",
  PendulumOneAltText3: "meters is resting at 90 degrees.",

  ScreenTwoPendulumOneAltTxt1: "First pendulum’s mass = ",

  PendulumTwoAltText1: "Second pendulum’s mass = ",

  ScreenTwoPendulumAltTxt2: "kg & wire length = ",
  ScreenTwoPendulumAltTxt3: "meters resting at 90 degrees.",

  penOneScrTwoTxt1:
    "A ruler is to the left of a single pendulum pulled at an angle of 45 degrees. The single pendulum’s mass = ",
  penOneScrTwoTxt2: " kg and the length of the wire = ",
  penOneScrTwoTxt3: " meters",

  penOneDoubleTxt1:
    "Ruler at left of double pendulum pulled at 45 degrees angle; first pendulum’s mass =  ",
  pendulumDoubleTxt2: "kg & wire length = ",
  penDoubleTxt: "meters",

  penTwoScreenTwoTxt1:
    "Ruler at left of double pendulum pulled at 45 degrees angle; second pendulum’s mass = ",

  penOneLiveText1:
    "A ruler is to the left of the single swinging pendulum in front of a protractor. The single pendulum’s mass = ",
  penOneLiveText2: "kg and the length of the wire =  ",
  penOneLiveText3: "meters oscillating at speed = ",
  penLiveTxt: "meters per second",

  penOneDoubleAltTxt1:
    "Ruler at left of 2 pendulums swinging side to side in front of protractor; pendulum 1 with mass = ",
  penOneDoubleTxt2: "kg & wire length = ",

  penTwoTxt1: " pendulum 2 with mass = ",

  pendulumOne: {
    id: "pendulum_one",

    valuesLength: [
      {
        id: "lengthone3",
        text: "3",
        value: 3,
      },
      {
        id: "lengthone4",
        text: "4",
        value: 4,
      },
      {
        id: "lengthone5",
        text: "5",
        value: 5,
      },
    ],
  },
  valuesMass: [
    {
      id: "mass05",
      text: "0.5",
      value: 0.5,
    },
    {
      id: "mass1",
      text: "1",
      value: 1,
    },
    {
      id: "mass15",
      text: "1.5",
      value: 1.5,
    },
  ],
  pendulumTwo: {
    id: "pendulum_two",

    valuesLength: [
      {
        id: "lengthtwo7",
        text: "7",
        value: 7,
        altText: "",
      },
      {
        id: "lengthtwo8",
        text: "8",
        value: 8,
      },
      {
        id: "lengthtwo9",
        text: "9",
        value: 9,
      },
    ],
  },

  pendulumHeadings: {
    topHeadingPendulumOne: "Pendulum 1",
    topHeadingPendulumTwo: "Pendulum 2",
    massHeading: "Mass (kg)",
    lengthHeading: "Length (m)",
    massLabelOnePendulum: "Pendulum 1 Mass (kg)",
    massLabelTwoPendulum: "Pendulum 2 Mass (kg)",
    lenghtLabelOnePendulum: "Pendulum 1 Length (m)",
    lengthLabelTwoPendulum: "Pendulum 2 Length (m)",
  },

  rularValue: [
    {
      id: "meters",
      val: "meter",
    },
    {
      id: "val0",
      val: 0,
    },
    {
      id: "val1",
      val: 1,
    },
    {
      id: "val2",
      val: 2,
    },
    {
      id: "val3",
      val: 3,
    },
    {
      id: "val4",
      val: 4,
    },
    {
      id: "val5",
      val: 5,
    },
    {
      id: "val6",
      val: 6,
    },
    {
      id: "val7",
      val: 7,
    },
    {
      id: "val8",
      val: 8,
    },
    {
      id: "val9",
      val: 9,
    },
    {
      id: "val10",
      val: 10,
    },
  ],

  protactorValue: [
    {
      id: "pro0",
      val: 0,
    },
    {
      id: "pro45",
      val: 45,
    },
    {
      id: "pro90",
      val: 90,
    },
    {
      id: "pro135",
      val: 135,
    },
    {
      id: "pro180",
      val: 180,
    },
  ],
};

export default data;
