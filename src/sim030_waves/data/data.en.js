import commonData from "../../app/data/data.en";
import videoHard from "../assets/videos/hard.mp4";
import videoLight from "../assets/videos/soft.mp4";
import videoMedium from "../assets/videos/medium.mp4";

const data = {
  pushForces: [
    {
      id: "soft_push",
      text: "Soft push",
      alt: "Soft",
      videoSrc: videoLight,
      infoData: [
        ["Wavelength", "15 inches"],
        ["Wave height", "10 inches"],
      ],
    },
    {
      id: "medium_push",
      text: "Medium push",
      alt: "Medium",
      videoSrc: videoMedium,
      infoData: [
        ["Wavelength", "15 inches"],
        ["Wave height", "22 inches"],
      ],
    },
    {
      id: "hardest_push",
      text: "Hardest push",
      alt: "Hardest",
      videoSrc: videoHard,
      infoData: [
        ["Wavelength", "15 inches"],
        ["Wave height", "35 inches"],
      ],
    },
  ],
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,
  buttonLabels: { ...commonData.buttonLabels },
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have successfully completed the simulation.",
  },
  initialPopupText:
    "This rubber duck floats in the pool, and we can see it go up and down. You can change how the rubber duck moves by changing the way the water moves.",
  instructionText:
    "Select how the hand will push the ball. Then, watch how the strength of the push affects how the water changes and how the duck moves.",
  helpPopupText:
    "Click on a button to choose the strength of how the hand will push the ball. Observe how the size of the waves change with the strength of the push and how the size of the waves affect how the duck moves.",
};

export default data;
