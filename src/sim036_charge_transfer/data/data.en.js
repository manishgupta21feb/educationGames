import globalCommonData from "../../app/data/data.en";
import questionVideo2 from "../assets/videos/induction_1.mp4";
import questionVideo4 from "../assets/videos/induction_2.mp4";
import questionVideo1 from "../assets/videos/conduction_1.mp4";
import questionVideo5 from "../assets/videos/conduction_2.mp4";
import questionVideo3 from "../assets/videos/polarization_1.mp4";
import questionVideo6 from "../assets/videos/polarization_2.mp4";

const data = {
  equationsData: [
    {
      srNo: "1",
      id: "question1",
      answer: "conduction",
      videoSrc: questionVideo1,
      alt: "A metal rod with black positive charges touches a metal sphere with red positive charges. Charge is transferred via direct contact.",
    },
    {
      srNo: "2",
      id: "question2",
      answer: "induction",
      videoSrc: questionVideo2,
      alt: "Glass rod with blue negative charges hovers over two metal spheres, each with one negative charge. Charge is induced without making direct contact.",
    },
    {
      srNo: "3",
      id: "question3",
      answer: "polarization",
      videoSrc: questionVideo3,
      alt: "Brown comb with black negative charges touches pink paper with black positive and negative charges. Charge induced in the paper by comb touching it.",
    },
    {
      srNo: "4",
      id: "question4",
      answer: "induction",
      videoSrc: questionVideo4,
      alt: "Red balloon with black negative charges hovers over two metal spheres, each with one negative charge. Charge induced without making direct contact.",
    },
    {
      srNo: "5",
      id: "question5",
      answer: "conduction",
      videoSrc: questionVideo5,
      alt: "Glass rod with blue negative charges touches a metal sphere with red negative charges. Charges are transferred to the metal sphere via direct contact.",
    },
    {
      srNo: "6",
      id: "question6",
      answer: "polarization",
      videoSrc: questionVideo6,
      alt: "Red balloon with black negative charges and pink paper with black positive and negative charges; charge induced in paper by balloon touching it.",
    },
  ],

  equationOptions: [
    {
      id: "induction",
      disabled: false,
      text: "Induction",
      label: "Induction",
    },
    {
      id: "conduction",
      disabled: false,
      text: "Conduction",
      label: "Conduction",
    },
    {
      id: "polarization",
      disabled: false,
      text: "Polarization",
      label: "Polarization",
    },
  ],

  buttonLabels: { ...globalCommonData.buttonLabels },
  completionScreen: {
    ...globalCommonData.completionPopup,
    content: "You have completed the simulation.",
  },

  resetLiveText: globalCommonData.resetLiveText,
  resetMsgContent: globalCommonData.resetPopupText,
  questionHeading: globalCommonData.questionCounterString,
  correctToastMessage: globalCommonData.correctToastMessage,
  incorrectToastMessage: globalCommonData.incorrectToastMessage,
  reactionTypeQuestion:
    "Determine the type of charge based on the interaction between the given charged materials.",
  infoBoxContent:
    "Examine and identify the different types of charge transfer shown!",
  instructionBoxContent:
    "When objects are charged, electrons move between them. This can be done through induction, conduction, or polarization. In this simulation, you will investigate which type of charge transfer is taking place between different materials.",
};

export default data;
