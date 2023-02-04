import globalCommonData from "../../app/data/data.en";
import Radioisotopes_for_diagnostic from "../assets/images/Radioisotopes_for_diagnostic.png";
import smoke_detector from "../assets/images/smoke_detector.png";
import medical_equipment_sterilization from "../assets/images/medical_equipment_sterilization.png";
import nuclear_pacemakers from "../assets/images/nuclear_pacemakers.png";
import nuclear_surgery from "../assets/images/nuclear_surgery.png";

const data = {
  equationsData: [
    {
      srNo: "1",
      id: "question1",
      answer: "Alpha_decay",
      imgPath: smoke_detector,
      imgText: "Smoke detector",
      classes: "smoke_detector",
      questionTitle:
        "A particle moves across a gap to the detector. That particle is easily blocked by smoke. Select the correct nuclear radiation used in this technology.",
      alt: "A circular smoke detector with a vented circle protruding down in the middle and a small, red, circular light on the top right side.",
      imgClasses: "imgText1",
    },
    {
      srNo: "2",
      id: "question2",
      classes: "Radioisotopes_for_diagnostic",
      answer: "Gamma_decay",
      imgPath: Radioisotopes_for_diagnostic,
      questionTitle:
        "A nucleus changes, emitting light that is detected by a camera. Select the correct nuclear radiation used in this technology.",
      alt: "A outline of a person with a view of their internal organs; all of the organs are blue, and their pancreas is highlighted in pink.",
      imgClasses: "imgText2",
      imgText: "Radioisotopes for diagnostic imaging",
    },
    {
      srNo: "3",
      id: "question3",
      answer: "Gamma_decay",
      imgPath: medical_equipment_sterilization,
      classes: "medical_equipment_sterilization",
      questionTitle:
        "Equipment is exposed to a high-energy light that kills bacteria. Select the correct nuclear radiation used in this technology.",
      alt: "A medical equipment sterilizer which is a metal box with a door open to see 4 trays inside, a digital pad on the right, and vents on the side panel.",
      imgText: "Medical equipment sterilization",
      imgClasses: "imgText3",
    },
    {
      srNo: "4",
      id: "question4",
      answer: "Beta_decay",
      imgPath: nuclear_pacemakers,
      imgClasses: "imgText4",
      classes: "nuclear_pacemakers",
      questionTitle:
        "High-energy electrons are captured and used to generate electricity. Select the correct nuclear radiation used in this technology.",
      alt: "A nuclear pacemaker that is gray, oval-shaped, and has two wires coming from the top.",
      imgText: "Nuclear pacemakers",
    },
    {
      srNo: "5",
      id: "question5",
      answer: "Gamma_decay",
      imgPath: nuclear_surgery,
      classes: "nuclear_surgery",
      imgClasses: "imgText5",
      questionTitle:
        "High-energy light is focused on the tumor, destroying it. Select the correct nuclear radiation used in this technology.",
      alt: "A person on a medical table with their head inside a circular medical device that is shooting beams of radiation at a tumor.",
      imgText: "Nuclear surgery",
      imgLabel: ["Helmet", "Tumor"],
    },
  ],

  equationOptions: [
    {
      id: "Alpha_decay",
      disabled: false,
      text: "Alpha decay",
      label: "Alpha decay",
    },
    {
      id: "Beta_decay",
      disabled: false,
      text: "Beta decay",
      label: "Beta decay",
    },
    {
      id: "Gamma_decay",
      disabled: false,
      text: "Gamma decay",
      label: "Gamma decay",
    },
  ],

  buttonLabels: { ...globalCommonData.buttonLabels },
  completionScreen: {
    ...globalCommonData.completionPopup,
    content:
      "You successfully identified the correct types of nuclear radiation.",
  },

  pageHeading:
    "Students will explore how nuclear reactions are used in current technologies.",
  resetLiveText: globalCommonData.resetLiveText,
  resetMsgContent: globalCommonData.resetPopupText,
  questionHeading: "Reaction: -1- of 5",
  correctToastMessage: globalCommonData.correctToastMessage,
  incorrectToastMessage: globalCommonData.incorrectToastMessage,
  startScreenContent:
    "Select the correct type of nuclear radiation used for each of the following scenarios.",
  infoBoxContent:
    "Read the description and then select the correct type of nuclear radiation used for each of the following scenarios.",
};

export default data;
