import globalConfig from "../../app/data/data.en";
import smallPush from "../assets/videos/small_push.mp4";
import bigPush from "../assets/videos/big_push.mp4";
import softHit from "../assets/videos/soft_hit.mp4";
import hardHit from "../assets/videos/hard_hit.mp4";

import seesawTab from "../assets/images/see_saw_tab.png";
import baseballTab from "../assets/images/base_ball_tab.png";

const data = {
  buttonLabels: { ...globalConfig.buttonLabels },
  resetConfirmationText: globalConfig.resetLiveText,
  resetMsgContent: globalConfig.resetPopupText,
  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  wrongMsg: globalConfig.incorrectToastMessage,
  h1InfoTextA11Y:
    "In this simulation, the learner will observe the relationship between forces and mechanical energy.",
  infoLabel: "Info",
  resetLabel: "Reset",
  instructionBoxContent:
    "You use pushes and pulls in your everyday life inside and outside of school. Explore how position and motion can be changed by using pushes and pulls on objects.",
  InfoBoxContentHome:
    "Select any one of the given scenarios to explore the relationship between forces and mechanical energy.",
  InfoBoxContentPush:
    "Click the Small Push button or the Big Push button to choose. ",
  InfoBoxContentHit: "Click the Hard Hit button or Soft Hit button to choose.",
  messages: [
    {
      type: "reset",
      resetButtonText: "Yes",
      buttonContinueText: "No",
      header: "Reset Simulation",
      content: "Are you sure you want to reset?",
    },
  ],
  currentExperimentNumber: 0,
  home: {
    title:
      "Select a scenario to explore the relationship between forces and mechanical energy.",
    options: [
      {
        id: "seesaw",
        title: "Seesaw",
        buttonTitle: "Seesaw",
        img: seesawTab,
        altImg:
          "Two students are in a yard and sitting on each side of a seesaw.",
      },
      {
        id: "baseball",
        title: "Baseball",
        buttonTitle: "Baseball",
        img: baseballTab,
        altImg:
          "A pitcher in a red uniform is throwing a baseball to a batter in a blue uniform.",
      },
    ],
  },
  seesawData: {
    activityHeading:
      "Choose how hard Ayaan will push off the ground to start playing on the seesaw with his best friend, Lashawn.",
    equationOptions: [
      {
        id: "smallPush",
        disabled: false,
        text: "Small push",
        label: "Small push",
      },
      {
        id: "bigPush",
        disabled: false,
        text: "Big push",
        label: "Big push",
      },
    ],
    observationsData: [
      {
        id: "smallPush",
        videoSrc: smallPush,
        text: "Small Push",
        isPlayed: false,
        buttonLabels: "Small Push",
        experimentName: "Small Push",
        alt: "Small Push",
        isDisable: false,
        altLivePlay:
          "The students begin to go up and down slowly on the seesaw. A motion graph tracks each student's movement on a graph as they play on the seesaw.",
      },
      {
        id: "bigPush",
        videoSrc: bigPush,
        text: "Big Push",
        isPlayed: false,
        buttonLabels: "Big Push",
        experimentName: "Big Push",
        alt: "Big Push",
        isDisable: false,
        altLivePlay:
          "The students begin to go up and down with a big push on the seesaw. A motion graph tracks each student's movement on a graph as they play on the seesaw.",
      },
    ],
    imageAlt:
      "Two students are in a yard and sitting on each side of a seesaw.",
  },
  baseballData: {
    activityHeading:
      "Isabella is up to bat. You will choose if she hits the ball hard or soft. ",
    equationOptions: [
      {
        id: "hardHit",
        disabled: false,
        text: "Hard hit",
        label: "Hard hit",
      },
      {
        id: "softHit",
        disabled: false,
        text: "Soft hit",
        label: "Soft hit",
      },
    ],
    observationsData: [
      {
        id: "hardHit",
        isPlayed: false,
        alt: "Hard Hit",
        text: "Hard Hit",
        isDisable: false,
        videoSrc: hardHit,
        buttonLabels: "Hard Hit",
        experimentName: "Hard Hit",
        valueHeadingAlt: "Maximum Exit Ball Speed is 48 mph",
        altLivePlay: `A pitcher is throwing a baseball to a batter. The batter hits the ball hard 
        and the motion graph tracks the distance and time the ball is in the air.`,
      },
      {
        id: "softHit",
        isPlayed: false,
        alt: "Soft Hit",
        isDisable: false,
        text: "Soft Hit",
        videoSrc: softHit,
        buttonLabels: "Soft Hit",
        experimentName: "Soft Hit",
        valueHeadingAlt: "Maximum Exit Ball Speed is 31 mph",
        altLivePlay: `A pitcher is throwing a baseball to a batter. The batter hits the ball softly 
                      and the motion graph tracks the distance and time the ball is in the air.`,
      },
    ],
    imageAlt:
      "A pitcher in a red uniform is throwing a baseball to a batter in a blue uniform.",
  },
  isBothVideoPlay: [{ flag: false }, { flag: false }],
  graphData: {
    push: {
      heading: "Height",
      pushType: ["Small Push", "Big Push"],
      boyOne: "Ayaan",
      boyTwo: "Lashawn",
      xAxisHeading: "Time",
      yAxisHeading: "Inches from the ground",
    },
    hit: {
      hitType: ["Hard Hit", "Soft Hit"],
      xAxisHeading: "Distance in ft",
      yAxisHeading: "Height in ft",
      valueHeading: "Maximum Exit Ball Speed in mph",
    },
  },
};

export default data;
