import globalConfig from "../../app/data";
import curved from "../assets/videos/curved.mp4";
import straight from "../assets/videos/straight.mp4";
const buttonLabels = { ...globalConfig.buttonLabels };

const data = {
  buttonNo: "No",
  buttonPlay: "Play",
  buttonLabelsData: { ...globalConfig.buttonLabels },
  buttonYes: buttonLabels.yes,
  infoText: buttonLabels.info,
  resetText: buttonLabels.reset,
  buttonStart: buttonLabels.start,
  buttonClose: buttonLabels.close,
  resetConfirmationText: globalConfig.resetLiveText,
  currentExperimentNumber: 0,
  instructionBoxContent:
    "A student drops a ball from a bus window. Compare the perspectives of the student and the observer when the bus is stationary versus when it is moving.",
  InfoBoxContent:
    "A student is about to drop a ball out of a bus window while an observer is watching. Select whether the bus is stationary or moving, and then select Play to watch the ball fall from the chosen perspective.",

  equationOptions: [
    {
      id: "stationary",
      disabled: false,
      text: "Bus stationary",
      label: "Bus stationary",
    },
    {
      id: "moving",
      disabled: false,
      text: "Bus moving",
      label: "Bus moving",
    },
  ],

  observationsData: [
    {
      id: "stationary",
      classes: "curved",
      videoSrc: straight,
      isPlayed: false,
      buttonLabels: "Bus stationary",
      text: "Bus stationary",
      experimentName: "Bus stationary",

    
      isDisable: false,
      liveText:
        "A person stands in the foreground observing a school bus in the background. A student drops a ball out of the 2nd window of the bus.",
    },
    {
      id: "moving",
      classes: "straight",
      text: "Bus moving",
      videoSrc: curved,
      isPlayed: false,
      buttonLabels: "Bus moving",
      experimentName: "Bus moving",
     
      isDisable: false,

      liveText:
        "A person stands in the foreground observing a school bus in the background. A student drops a ball out of the 2nd window while the bus is moving.",
    },
  ],

  resetMsgContent: globalConfig.resetPopupText,
  resetLiveText: globalConfig.resetLiveText,

  imagealt:
    "A person stands in the foreground observing a school bus in the background. There is a student holding a ball looking out the 2nd window of the bus.",

  mainHeading:
    "A student drops a ball from a bus window. Select whether the bus is stationary or moving. Select play to watch the perspective of the student and observer for the ball drop.",
  activityHeading:
    "Students will explore how frame of reference relates to velocity and displacement.",

  messages: [
    {
      type: "reset",
      resetButtonText: buttonLabels.yes,
      content: globalConfig.resetPopupText,
    },
  ],
};

export default data;
