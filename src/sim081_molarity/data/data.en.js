import commonData from "../../app/data/data.en";
import questionVideo1 from "../assets/videos/video1.mp4";
import questionVideo2 from "../assets/videos/video2.mp4";
import questionVideo3 from "../assets/videos/video3.mp4";
import questionVideo4 from "../assets/videos/Video4.mp4";
import questionVideo5 from "../assets/videos/video5.mp4";
import questionVideo6 from "../assets/videos/video6new.mp4";

const buttonLabels = { ...commonData.buttonLabels };

const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: "Start",
  buttonContinueLabel: "Start",
  content:
      "Molarity (M) is defined as the number of moles of solute divided by the liters of solution. Molarity measures the amount of solute in a solution and can be changed by altering the amount of solvent. In this simulation, you will adjust the amount of solvent to create the desired molarity.",
};

const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  instruction:
    "Attempt to dilute the solution and determine the amount of solvent needed to achieve the desired molarity.",
  buttonLabels: { ...commonData.buttonLabels },
  buttonContinue: commonData.buttonLabels.continue,
  finish: commonData.buttonLabels.finish,
  questionsData: {
    currentMolarity: "Current molarity",
    currentVolume: "Current volume",
    desiredMolarity: "Desired molarity",
    amountSolvent: "Amount of solvent needed (mL)",
  },


  labelOne: "Amount of solvent increase (mL)",
  labelTwo: "Amount of solvent decrease (mL)",
  increment: "Increase value",
  decrement: "Decrease value",

  labelhundread: "100",
  labeleighty: "80",
  labelsixty: "60",
  labelforty: "40",
  labeltwenty: "20",


  incrementLiveText: "Amount of solvent needed value is increased to ",
  decrementLiveText: "Amount of solvent needed value is decreased to ",

  dialogData: {
    start: {
      ...info,
      buttonContinueText: commonData.buttonLabels.start,
      buttonContinueLabel: commonData.buttonLabels.start,
    },
    info: {
      ...info,
      buttonClasses: "",
      buttonContinueText: commonData.buttonLabels.close,
      buttonContinueLabel: commonData.buttonLabels.close,
      content:
        "Adjust the stepper to add water to the solution.",
    },
    correct: {
      ...info,
      buttonContinueText: commonData.buttonLabels.continue,
      buttonContinueLabel: commonData.buttonLabels.continue,
    },
    incorrect: {
      ...info,
      dialogType: "warning",
      buttonContinueText: commonData.buttonLabels.close,
      buttonContinueLabel: commonData.buttonLabels.close,
    },
  },

  completionPopup: {
    ...commonData.completionPopup,
    content: "You have successfully created the desired solutions. Well done!",
  },

  molerityData: [
    {
      srNo: "1",
      id: "question1",
      answer: "30",
      videoSrc: questionVideo1,
      currentMolarity: "2M",
      currentVolume: "30 mL",
      desiredMolarity: "1M",
      step: 5,
      alt:"A clear beaker on a lab table that holds 30 mL of liquid at a concentration of 2M",
      altVideoPlay: "A clear beaker on a lab table that holds 60 mL of liquid at a concentration of 2M",
      altAfterPlay: "A clear beaker on a lab table that holds 60 mL of liquid at a concentration of 2M"
    },
    {
      srNo: "2",
      id: "question2",
      answer: "4",
      videoSrc: questionVideo2,
      currentMolarity: "1.75M",
      currentVolume: "25 mL",
      desiredMolarity: "1.5M",
      step: 2,
      alt:"A clear beaker on a lab table that holds 25 mL of liquid at a concentration of 1.75M",
      altVideoPlay: "A clear beaker on a lab table that holds 29 mL of liquid at a concentration of 1.75M",
      altAfterPlay: "A clear beaker on a lab table that holds 29 mL of liquid at a concentration of 1.75M"
    },
    {
      srNo: "3",
      id: "question3",
      answer: "25",
      videoSrc: questionVideo3,
      currentMolarity: "0.5M",
      currentVolume: "58 mL",
      desiredMolarity: "0.35M",
      step: 5,
      alt:"A clear beaker on a lab table that holds 58 mL of liquid at a concentration of 0.5M",
      altVideoPlay: "A clear beaker on a lab table that holds 83 mL of liquid at a concentration of 0.5M",
      altAfterPlay: "A clear beaker on a lab table that holds 83 mL of liquid at a concentration of 0.5M"
    },
    {
      srNo: "4",
      id: "question4",
      answer: "24",
      videoSrc: questionVideo4,
      currentMolarity: "0.75M",
      currentVolume: "48 mL",
      desiredMolarity: "0.50M",
      step: 4,
      alt:"A clear beaker on a lab table that holds 48 mL of liquid at a concentration of 0.75M",
      altVideoPlay: "A clear beaker on a lab table that holds 72 mL of liquid at a concentration of 0.75M",
      altAfterPlay: "A clear beaker on a lab table that holds 72 mL of liquid at a concentration of 0.75M"
    },
    {
      srNo: "5",
      id: "question5",
      answer: "7",
      videoSrc: questionVideo5,
      currentMolarity: "6M ",
      currentVolume: "35 mL",
      desiredMolarity: "5M",
      step: 1,
      alt:"A clear beaker on a lab table that holds 35 mL of liquid at a concentration of 6M ",
      altVideoPlay:"A clear beaker on a lab table that holds 42 mL of liquid at a concentration of 6M ",
      altAfterPlay: "A clear beaker on a lab table that holds 42 mL of liquid at a concentration of 6M "
    },
    {
      srNo: "6",
      id: "question6",
      answer: "4",
      videoSrc: questionVideo6,
      currentMolarity: "2M ",
      currentVolume: "25 mL",
      desiredMolarity: "1.75M",
      step: 1,
      alt:"A clear beaker on a lab table that holds 25 mL of liquid at a concentration of 2M ",
      altVideoPlay:"A clear beaker on a lab table that holds 29 mL of liquid at a concentration of 2M ",
      altAfterPlay: "A clear beaker on a lab table that holds 29 mL of liquid at a concentration of 2M "
    },
  ],

  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: "Not enough solvent. Try again!",
  partiallyIncorrectToastMessage: "Too much solvent. Try again!",
  resetPopupText: commonData.resetPopupText,
  resetText: "Reset",
  closeButton: "Close",
  startButton: "Start",
  resetPopupText: "Are you sure you want to reset?",
  submitAnswer: commonData.buttonLabels.submitAnswer,
  pageHeading:
    "Students will calculate the amount of solvent needed to dilute a solution. ",

  buttonYes: buttonLabels.yes,
  buttonNo: buttonLabels.no,

};

export default data;
