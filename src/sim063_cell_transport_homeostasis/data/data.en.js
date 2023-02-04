import globalCommonData from "../../app/data/data.en";
import questionVideo2 from "../assets/videos/endocytosis.mp4";
import questionVideo1 from "../assets/videos/cell transport_homeostasis_01.mp4";
import questionVideo4 from "../assets/videos/exocytosis.mp4";
import questionVideo5 from "../assets/videos/diffusion.mp4";
import questionVideo3 from "../assets/videos/endocytosis_amoeba.mp4";
import questionVideo6 from "../assets/videos/cell_transport_homeostasis_07.mp4";
import questionVideo7 from "../assets/videos/cell_transport_homeostasis_06.mp4";
import questionVideo8 from "../assets/videos/active_transport.mp4";
import questionVideo9 from "../assets/videos/facilitated_transport.mp4";

const data = {
  equationsData: [
    {
      srNo: "1",
      id: "question1",
      answer: "Facilitated_transport",
      videoSrc: questionVideo6,
      questionTitle:
        "In ATP synthesis in the mitochondria, hydrogen ions flow across the mitochondrial membrane through a protein channel from an area of high concentration to an area of low concentration.",
      alt: "A phospholipid bilayer with particles moving around on both sides of the layer",
      liveText:
        "A phospholipid bilayer with particles moving around on both sides of the layer",
    },
    {
      srNo: "2",
      id: "question2",
      answer: "Active_transport",
      videoSrc: questionVideo8,
      questionTitle:
        "Glucose moves out of the intestines and is concentrated in intestinal cells by the sodium-glucose cotransporter. Energy is required to pump glucose against its concentration gradient.",
      alt: "Small blue circles representing molecules approach a membrane and pass through a protein pump",
      liveText: "Small blue circles representing molecules approach a membrane and pass through a protein pump",
    },
    {
      srNo: "3",
      id: "question3",
      answer: "Endocytosis",
      videoSrc: questionVideo3,
      questionTitle:
        "White blood cells engulf viruses tagged by the immune system for disposal.",
      alt: "Hexagon-shaped packets with material inside are engulfed by the membrane",
      liveText: "Hexagon-shaped packets with material inside approach the membrane and are engulfed",
    },
    {
      srNo: "4",
      id: "question4",
      answer: "Endocytosis",
      videoSrc: questionVideo4,
      questionTitle: "An amoeba captures and eats its prey.",
      alt: "Small blue circles representing molecules approach the membrane and are engulfed",
      liveText: "Small blue circles representing molecules approach the membrane and are engulfed",
    },
    {
      srNo: "5",
      id: "question5",
      answer: "Diffusion",
      videoSrc: questionVideo5,
      questionTitle:
        "Oxygen from the lungs enters a red blood cell through the cell membrane, moving from an area of high oxygen concentration to an area of low oxygen concentration.",
      alt:"Small particles passing through a membrane into a larger round object",
      liveText:
        "Small particles passing through a membrane into a larger round object",
    },
    {
      srNo: "6",
      id: "question6",
      answer: "Diffusion",
      videoSrc: questionVideo6,
      questionTitle:
        "In the kidney, waste (urea) moves from the filtrate down its concentration gradient through the cell membrane into collection tubules",
      alt: "A phospholipid bilayer with particles moving around on both sides of the layer",
      liveText:
        "A phospholipid bilayer with particles moving around on both sides of the layer",
    },
    {
      srNo: "7",
      id: "question7",
      answer: "Active_transport",
      videoSrc: questionVideo7,
      questionTitle:
        "A special protein is necessary to regulate the levels of sodium and potassium in a nerve cell.  Sodium is pumped out of the cell in exchange for potassium. Energy is used to pump the ions against their concentration gradient.",
      alt:"A phospholipid bilayer with particles moving through the bilayer",
      liveText:
        "A phospholipid bilayer with particles moving through the bilayer",
    },
    {
      srNo: "8",
      id: "question8",
      answer: "Exocytosis",
      videoSrc: questionVideo2,
      questionTitle:
        "Pancreatic cells release glucagon when blood sugar levels drop.",
      alt: "Particles in small, round pockets being expelled through a barrier",
      liveText:
        "Particles in small, round pockets being expelled through a barrier",
    },
    {
      srNo: "9",
      id: "question9",
      answer: "Facilitated_transport",
      videoSrc: questionVideo9,
      questionTitle:
        "When blood sugar is high, insulin is released by the pancreas. Insulin triggers the opening of a membrane channel that allows glucose to flow from the blood into the cell with its concentration gradient.",
      alt: "Complex molecules of different shapes passing through a channel protein in a bilayer",
      liveText:
        "Complex molecules of different shapes passing through a channel protein in a bilayer",
    },
    {
      srNo: "10",
      id: "question10",
      answer: "Exocytosis",
      videoSrc: questionVideo1,
      questionTitle:
        "Serotonin is released when an electric signal reaches the end of the nerve cell.",
      alt: "A neuron synapse that contains small vesicles of chemicals that are expelled through the membrane of the neuron",
      liveText:
        "A neuron synapse that contains small vesicles of chemicals that are expelled through the membrane of the neuron",
    },
  ],

  equationOptions: [
    {
      id: "Exocytosis",
      disabled: false,
      text: "Exocytosis",
      label: "Exocytosis",
    },
    {
      id: "Endocytosis",
      disabled: false,
      text: "Endocytosis",
      label: "Endocytosis",
    },
    {
      id: "Diffusion",
      disabled: false,
      text: "Diffusion",
      label: "Diffusion",
    },
    {
      id: "Active_transport",
      disabled: false,
      text: "Active transport",
      label: "Active transport",
    },
    {
      id: "Facilitated_transport",
      disabled: false,
      text: "Facilitated transport",
      label: "Facilitated transport",
    },
  ],

  buttonLabels: { ...globalCommonData.buttonLabels },
  completionScreen: {
    ...globalCommonData.completionPopup,
    content: "You have correctly identified all of the cellular transports!",
  },

  pageHeading:
    "Students can choose the correct type of cell transport based on a scenario.  Students can describe how the pathway (through a membrane, or through a protein) as well as the direction (with or against concentration gradient) are used to identify different types of cell transport.",
  resetLiveText: globalCommonData.resetLiveText,
  resetMsgContent: globalCommonData.resetPopupText,
  questionHeading: "Reaction: -1- of 10",
  correctToastMessage: globalCommonData.correctToastMessage,
  incorrectToastMessage: globalCommonData.incorrectToastMessage,
  reactionTypeQuestion: "select",
  infoBoxContent: {
    instructionOne: [
      "Molecules enter or exit cells through cellular transport. Different pathways into or out of a cell are used by different molecules and are triggered by different signals. Attempt to identify the type of cellular transport based on the direction of molecular movement and the pathway through the membrane.",
      " <br> Identify the key characteristics of cell transport <b> to identify the type of cellular transport:</b>",
    ],
    instructionTwo: [
      {
        id: "one",
        altText: "Do the molecules use a protein to cross the membrane? ",
      },
      {
        id: "two",
        altText: "Is energy used to transport the molecules? (ATP) ",
      },
      {
        id: "three",
        altText:
          "Are the molecules moving with (high to low) or against (low to high) the            concentration gradient? ",
      },
    ],
  },
  instructionBoxContent: [
    "Molecules enter or exit cells through cellular transport. In this simulation, you will identify which type of cellular transport is being demonstrated.",
  ],
};

export default data;
