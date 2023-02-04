import globalConfig from "../../app/data/data.en";
const buttonLabels = { ...globalConfig.buttonLabels };

import starImage from "../assets/images/star.png";
import circleImage from "../assets/images/circle.png";
import triangleImage from "../assets/images/triangle.png";
import pentagonImage from "../assets/images/pentagon.png";
import rectangleImage from "../assets/images/rectangle.png";

const data = {
  finishButton: {
    text: buttonLabels.finish,
    label: buttonLabels.finish,
    ariaLabel: buttonLabels.finish,
  },

  accelerationDataList: {
    listitems: [
      { id: "1", value: -5, label: "-5" },
      { id: "2", value: -4, label: "-4" },
      { id: "3", value: -3, label: "-3" },
      { id: "4", value: -2, label: "-2" },
      { id: "5", value: -1, label: "-1" },
      { id: "6", value: 0, label: "0" },
      { id: "7", value: 1, label: "1" },
      { id: "8", value: 2, label: "2" },
      { id: "9", value: 3, label: "3" },
      { id: "10", value: 4, label: "4" },
      { id: "11", value: 5, label: "5" },
    ],
  },

  distanceDataList: {
    listitems: [
      { id: "1", value: 1, label: "1" },
      { id: "2", value: 2, label: "2" },
      { id: "3", value: 3, label: "3" },
      { id: "4", value: 4, label: "4" },
      { id: "5", value: 5, label: "5" },
    ],
  },

  timeDataList: {
    listitems: [
      { id: "1", value: 1, label: "1" },
      { id: "2", value: 2, label: "2" },
      { id: "3", value: 3, label: "3" },
      { id: "4", value: 4, label: "4" },
      { id: "5", value: 5, label: "5" },
    ],
  },

  radioOption: ["left"],
  animationDirection: ["animateToleft", "animateToRight"],
  disable: ["disable"],
  buttonReset: buttonLabels.reset,
  buttonInfo: buttonLabels.info,
  buttonClose: buttonLabels.close,
  messages: [
    {
      type: "reset",
      resetButtonText: buttonLabels.yes,
      buttonContinueText: buttonLabels.no,
      content: globalConfig.resetPopupText,
    },
  ],
  carPositionText: "Car Position",
  controlsHeading: "Programming Control",
  directionHeadingText: "Direction",
  distanceHeadingText: "Distance (m)",
  timeHeadingText: "Time (s)",
  accelerationHeadingText: "Acceleration",
  playButtonText: "Play Trip ",
  instructionBoxHeader: "Instruction",
  instructionBoxContent1:
    "Use the interface to give the car motion, and observe how different ways of showing motion affects the car's movement.",
  instructionBoxContent2: "Start programming your car to begin!",
  infoText:
    "Program the car to move by selecting the distance it will travel. Then, select either the acceleration or the time it will take for the car to travel the distance.",
  // "Program the car to move by selecting the distance or acceleration and how long a period of time this takes.",
  buttonStart: buttonLabels.start,
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You have completed all the trips.",
  },
  rightMsg: `Trip -1- completed!`,
  keepGoing: "Keep going! Program the next trip.",
  buttonPlay: "Play Trip -1-",
  buttonCompleted: "Trips completed",
  buttonPlayProgress: "Trip -1- in progress...",
  carPositionLiveText: "the car is at -1- meters.",
  min: -5,
  max: 5,
  GraphHeading: "Position v. Time",
  GraphHeadingLabel: "Position versus Time",
  trip1: "Trip 1",
  trip2: "Trip 2",
  trip3: "Trip 3",
  trip4: "Trip 4",
  trip5: "Trip 5",
  trip1Label: "A blue circle",
  trip2Label: "An orange square",
  trip3Label: "A green triangle",
  trip4Label: "A black pentagon",
  trip5Label: "A red star",
  backgroundColor: "rgba(75,192,192,0.4)",
  borderColor: "rgba(0,86,179,1)",
  borderCapStyle: "butt",
  borderJoinStyle: "miter",
  pointBorderColor: "rgba(0,86,179,1)",
  pointBackgroundColor: "rgba(0,86,179,1)",
  pointHoverBackgroundColor: "rgba(0,86,179,1)",
  pointHoverBorderColor: "rgba(220,220,220,1)",
  type: "line",
  fontFamily: "TisaPro",
  XlabelString: "Time (s)",
  YlabelString: "Position (m)",
  resetHeaderContent: "Reset Simulation",
  resetMsgContent: globalConfig.resetPopupText,
  startButton: buttonLabels.start,
  buttonYes: buttonLabels.yes,
  buttonNo: buttonLabels.no,
  resetConfirmationText: globalConfig.resetLiveText,
  graphLabel: "Graph showing car movement",
  graphRole: "img",

  ariaLabels: {
    carAt: "car is at -1- meters",
    meters: "meters",
    road: "A road that a car can travel on",
    car: "A red car traveling to the",
    distance: `Car moved.Total distance covered`,
    carNotMoved: "Car did not move",
  },

  slidersLabels: {
    time: {
      ariaLabel: "Time",
      valueLabel1: "second",
      valueLabel2: "seconds",
      title: "Time in seconds",
    },
    distance: {
      valueLabel1: "meter",
      valueLabel2: "meters",
      ariaLabel: "distance",
      title: "Distance in meters",
    },
    acceleration: {
      ariaLabel: "acceleration",
      valueLabel: "meter per second square",
      title: "Acceleration in meter per second square",
    },
  },

  radiobuttonLabel: {
    time: {
      label: "Time (s)",
      alt: "Time in seconds",
    },
    acceleration: {
      label: "Acceleration (m/s<sup>2</sup>)",
      alt: "Acceleration in meter per second square",
    },
  },

  pointerImages: {
    circle: circleImage,
    pentagon: pentagonImage,
    rectangle: rectangleImage,
    star: starImage,
    triangle: triangleImage,
  },
  directions: [
    { id: "left", text: "Left" },
    { id: "right", text: "Right" },
  ],
  controlInstructionsText:
    "Program the motion of the car by selecting the distance and time or acceleration values.",
  chartDataSetText: "trip -1- -2- seconds and -3- meters",
};

export default data;
