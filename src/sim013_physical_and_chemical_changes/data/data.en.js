import globalConfig from "../../app/data/data.en";
const buttonLabels = { ...globalConfig.buttonLabels };
import bananaFull from "../assets/images/pp_banana.png";
import videoBoilingWater from "../assets/videos/pp_boilingwater.mp4";
import videoBakingVineger from "../assets/videos/pp_vin_soda.mp4";

const data = {
  buttonLabels: { ...globalConfig.buttonLabels },
  buttonStart: buttonLabels.start,
  instructionBoxContent:
    "Welcome to the chemistry lab! Today, you will explore how matter can undergo physical and chemical changes.",
  buttonInfo: buttonLabels.info,
  buttonReset: buttonLabels.reset,
  infoContent:
    "Select an object from the lab desk, and explore the type of change it is going through.<br>A <b>physical change</b> is a change that occurs without forming a new substance, while a <b>chemical change</b> involves forming a completely new or different substance.",
  buttonClose: buttonLabels.close,
  resetLiveText: globalConfig.resetLiveText,
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You have correctly answered all the questions.",
  },
  questionHeading: "Question: 1 of 3",
  submitAnswer: buttonLabels.submitAnswer,
  buttonFinish: buttonLabels.finish,
  buttonNext: buttonLabels.next,
  warningBoxHeader: globalConfig.incorrectToastMessage,
  rightMsg: globalConfig.correctToastMessage,
  headingLevel1Text:"Learner will explore how matter can undergo physical and chemical changes",
  questionsData: [
    {
      serialNo: 0,
      id: "Ques1",
      answer: "Physical_change",
      introductionHeading:
        "Did you know that physical and chemical changes are all around you? A <b>physical change</b> is a change that occurs without forming a new substance, while a <b>chemical change</b> involves forming a completely new or different substance. Take a look around this science lab. ",
      introductionSubHeading: "Select the boiling water.",
      questionText:
        "When water boils, a change of state occurs. The water changes from a liquid to a gas. Based on this information, what type of change is boiling water?",
      assetType: "Video",
      assetUrl: videoBoilingWater,
      videoSrc:videoBoilingWater,
      label: "Boiling water",
      ariaLabel:
        "Water boiling in a beaker on a hot plate. Steam leaving the beaker. Bubbles shown in the water. Temperature set to 100℃.",
      temperature: "100ºC",
      alt:"Water boiling in a beaker on a hot plate. Steam leaving the beaker. Bubbles shown in the water. Temperature set to 100℃.",  

    },
    {
      serialNo: 1,
      id: "Ques2",
      answer: "Chemical_change",
      introductionHeading:
        "Oh no! It looks like your teacher's banana is starting to turn brown.",
      introductionSubHeading: "Select it to find out more.",
      questionText:
        "Bananas turn brown because an enzyme breaks them down and causes a change to occur. Based on this information, what type of change is a banana turning brown? ",
      assetType: "Image",
      assetUrl: bananaFull,
      label: "Rotting banana",
      ariaLabel:
        "Rotting banana. Areas of the banana's skin have turned brown.",
    },
    {
      serialNo: 2,
      id: "Ques3",
      answer: "Chemical_change",
      introductionHeading:
        "Mixing baking soda and vinegar is a classic science experiment. Let's check out what happens when they are mixed. ",
      introductionSubHeading: "Select them to find out. ",
      questionText:
        "When the two items are mixed, bubbles form and the mixture decreases in temperature. Based on this information, what type of change occurs when mixing baking soda and vinegar? ",
      assetType: "Video",
      assetUrl: videoBakingVineger,
      videoSrc:videoBakingVineger,
      label: "Vinegar",
      label1: "Baking soda",
      ariaLabel:
        "Liquid vinegar in a beaker. Baking soda powder on a plate next to the beaker.",
      alt:"When a spoonful of baking soda powder is added to the liquid vinegar, bubbles begin to form.",  
    },
  ],
  answerOptions: [
    {
      id: "Physical_change",
      disabled: false,
      text: "Physical change",
      label: "Physical change",
    },
    {
      id: "Chemical_change",
      disabled: false,
      text: "Chemical change",
      label: "Chemical change",
    },
  ],
  messages: [
    {
      type: "reset",
      resetButtonText: buttonLabels.yes,
      buttonContinueText: buttonLabels.no,
      content: globalConfig.resetPopupText,
    },
  ],
};

export default data;
