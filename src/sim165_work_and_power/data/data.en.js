import commonData from "../../app/data/data.en";

import image1 from "../assets/images/intro.png";

import loadingImage1 from "../assets/images/box.png";
import loadingImage2 from "../assets/images/defaultStand.png";
import loadingImage3 from "../assets/images/down_ani_spr.png";
import loadingImage4 from "../assets/images/intro.png";
import loadingImage5 from "../assets/images/man_slide_ani.png";
import loadingImage6 from "../assets/images/up_ani_spr.png";
import loadingImage7 from "../assets/images/base.png";

const data = {
  simHeading:
    "Students will identify when work is and is not being done by or on a system.",
  hintContent: [
    "Choose one of the scenarios to explore: Work or Power.",
    "Adjust the directions of force and displacement to investigate whether work is done or no work is done. ",
  ],

  infoContent:
    "In this activity, you will examine work and power in a number of different situations. Click Start to begin!",
  launchPageData: {
    heading: "Choose one of the following options to begin!",
    imgSrc: { src: image1, alt: "Content awaited" },
    sections: ["Work", "Power"],
    pageContent: ["Force", "Displacement "],
  },
  work: {
    heading:
      "Explore the simulation to determine if work is being done or not.",

    slider: {
      sliderHeader: "Displacement (in meters)",
      title: "Displacement (in meters)",
      listitems: [
        { id: 0, value: 0, label: "0" },
        { id: 1, value: 5, label: "5" },
        { id: 2, value: 10, label: "10" },
        { id: 3, value: 15, label: "15" },
        { id: 4, value: 20, label: "20" },
      ],
    },
    valuetextArray: {
      0: "0 meters",
      1: "5 meters",
      2: "10 meters",
      3: "15 meters",
      4: "20 meters",
    },
    ariaLiveContent: {
      Up: [
        "live content 1 up",
        "live content 2 up",
        "live content 3 up",
        "live content 4 up",
        "live content 5 up",
      ],
      Down: [
        "live content 1 down",
        "live content 2 down",
        "live content 3 down",
        "live content 4 down",
        "live content 5 down",
      ],
      Left: [
        "live content 1 left",
        "live content 2 left",
        "live content 3 left",
        "live content 4 left",
        "live content 5 left",
      ],
      Right: [
        "live content 1 right",
        "live content 2 right",
        "live content 3 right",
        "live content 4 right",
        "live content 5 right",
      ],
    },
    dropHeading: ["Direction of force", "Direction of displacement"],
    force: "Force = 100 N",
    workDone: "Total work done = -1- J",
  },
  power: {
    heading:
      "Explore the simulation to determine how power changes as work is being done or not being done on the box.",

    slider: {
      sliderHeader: "Time (in seconds)",
      title: "Time (in seconds)",
      listitems: [
        { id: 0, value: 1, label: "1" },
        { id: 1, value: 5, label: "5" },
        { id: 2, value: 10, label: "10" },
        { id: 3, value: 15, label: "15" },
      ],
    },
    valuetextArray: {
      0: "1 second",
      1: "5 second",
      2: "10 second",
      3: "15 second",
    },
    ariaLiveContent: {
      Up: [
        "live content 1 up",
        "live content 2 up",
        "live content 3 up",
        "live content 4 up",
      ],
      Down: [
        "live content 1 down",
        "live content 2 down",
        "live content 3 down",
        "live content 4 down",
      ],
      Left: [
        "live content 1 left",
        "live content 2 left",
        "live content 3 left",
        "live content 4 left",
      ],
      Right: [
        "live content 1 right",
        "live content 2 right",
        "live content 3 right",
        "live content 4 right",
      ],
    },
    dropHeading: ["Direction of the force", "Direction of displacement"],
    force: "Force = 100 N",
    displacement: "Displacement = 10 m",
    powerUsed: "Total power used = -1- j",
  },
  calculationAria: [
    "Force = 100 Newtons",
    "Displacement = 10 meter",
    "Total power used = -1- Joules",
    "Total work done = -1- Joules",
  ],
  selectData: [
    {
      title: "up0",
      id: "up0",
      text: "Up",
      value: 0,
      class: "Up",
    },
    {
      id: "down1",
      text: "Down",
      value: 1,
      class: "Down",
    },
    {
      id: "left2",
      text: "Left",
      value: 2,
      class: "Left",
    },
    {
      id: "right3",
      text: "Right",
      value: 3,
      class: "Right",
    },
  ],
  imageAltArr: {
    default: "man standing near box",
    Up: "Man holding box up position",
    Down: "Man holding box down position",
    Left: "Man standing near box left side",
    Right: "Man standing near box right side",
  },
  imagesArr: [
    loadingImage1,
    loadingImage2,
    loadingImage3,
    loadingImage4,
    loadingImage5,
    loadingImage6,
    loadingImage7,
  ],
  transitionPopup: {
    ...commonData.transitionPopup,
    content: "Let’s explore another scenario.",
  },
  simButtonLabel: { push: "Push" },
  resetLiveText: commonData.resetLiveText,
  rightMsg: commonData.correctToastMessage,
  resetPopupText: commonData.resetPopupText,
  buttonLabels: { ...commonData.buttonLabels },
};

export default data;
