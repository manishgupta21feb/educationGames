import globalConfig from "../../app/data/data.en";

import questionFrame1 from "../assets/images/question1.png";
import questionFrame2 from "../assets/images/question2.png";
import questionFrame3 from "../assets/images/question3.png";
import questionFrame4 from "../assets/images/question4.png";
import questionFrame5 from "../assets/images/question5.png";
import questionFrame6 from "../assets/images/question6.png";
import questionFrame7 from "../assets/images/question7.png";
import questionFrame8 from "../assets/images/question8.png";
import questionFrame9 from "../assets/images/question9.png";
import questionFrame10 from "../assets/images/question10.png";
import answerVideo1 from "../assets/videos/question1/answer1.mp4";
import answerVideo2 from "../assets/videos/question2/answer2.mp4";
import answerVideo3 from "../assets/videos/question3/answer3.mp4";
import answerVideo4 from "../assets/videos/question4/answer4.mp4";
import answerVideo5 from "../assets/videos/question5/answer5.mp4";
import answerVideo6 from "../assets/videos/question6/answer6.mp4";
import answerVideo7 from "../assets/videos/question7/answer7.mp4";
import answerVideo8 from "../assets/videos/question8/answer8.mp4";
import answerVideo9 from "../assets/videos/question9/answer9.mp4";
import answerVideo10 from "../assets/videos/question10/answer10.mp4";
import questionVideo1 from "../assets/videos/question1/question1.mp4";
import questionVideo2 from "../assets/videos/question2/question2.mp4";
import questionVideo3 from "../assets/videos/question3/question3.mp4";
import questionVideo4 from "../assets/videos/question4/question4.mp4";
import questionVideo5 from "../assets/videos/question5/question5.mp4";
import questionVideo6 from "../assets/videos/question6/question6.mp4";
import questionVideo7 from "../assets/videos/question7/question7.mp4";
import questionVideo8 from "../assets/videos/question8/question8.mp4";
import questionVideo9 from "../assets/videos/question9/question9.mp4";
import questionVideo10 from "../assets/videos/question10/question10.mp4";

const data = {
  equationsData: [
    {
      srNo: "1",
      id: "combustion",
      answer: "combustion",
      questionId: "question1",
      ansAnimation: answerVideo1,
      quesAnimation: questionVideo1,
      questionFrame: questionFrame1,
      euation: "CH4 + O2 -> CO2 + H2O",
      options: [],
      questionTitle:
        "One methane molecule reacts with one oxygen molecule to produce one carbon dioxide molecule and one water molecule.",
      answerTitle:
        "One methane molecule reacts with two oxygen molecules to produce one carbon dioxide molecule and two water molecules.",
    },
    {
      srNo: "2",
      id: "combustion",
      questionId: "question2",
      answer: "combustion",
      ansAnimation: answerVideo2,
      quesAnimation: questionVideo2,
      questionFrame: questionFrame2,
      euation: "C2H6 + O2 -> CO2 + H2O",
      options: [],
      questionTitle:
        "One ethane molecule reacts with one oxygen molecule to produce one carbon dioxide molecule and one water molecule.",
      answerTitle:
        "Two ethane molecules react with seven oxygen molecules to produce four carbon dioxide molecules and six water molecules.",
    },
    {
      srNo: "3",
      id: "synthesis",
      answer: "Synthesis",
      questionId: "question3",
      ansAnimation: answerVideo3,
      euation: "Na + Cl2 -> NaCl",
      quesAnimation: questionVideo3,
      questionFrame: questionFrame3,
      options: [],
      questionTitle:
        "One sodium atom reacts with one chlorine molecule to produce one sodium chloride  molecule.",
      answerTitle:
        "Two sodium atoms react with one chlorine molecule to produce two sodium chloride molecules.",
    },
    {
      srNo: "4",
      id: "synthesis",
      answer: "Synthesis",
      questionId: "question4",
      euation: "K + Br2 -> KBr",
      ansAnimation: answerVideo4,
      questionFrame: questionFrame4,
      quesAnimation: questionVideo4,
      options: [],
      questionTitle:
        "One potassium atom reacts with one bromine molecule to produce one potassium bromide molecule.",
      answerTitle:
        "Two potassium atoms react with one bromine molecule to produce two potassium bromide molecules.",
    },
    {
      srNo: "5",
      options: [],
      id: "decomposition",
      questionId: "question5",
      answer: "Decomposition",
      ansAnimation: answerVideo5,
      quesAnimation: questionVideo5,
      questionFrame: questionFrame5,
      euation: "LiNO3 -> Li + N2 + O2",
      questionTitle:
        "Lithium nitrate reacts to form lithium oxide, nitrogen dioxide, and oxygen gas.",
      answerTitle:
        "Four lithium nitrate reacts to form two lithium oxide, four nitrogen dioxide, and one oxygen.",
    },
    {
      srNo: "6",
      options: [],
      id: "decomposition",
      questionId: "question6",
      answer: "Decomposition",
      ansAnimation: answerVideo6,
      quesAnimation: questionVideo6,
      questionFrame: questionFrame6,
      euation: "NaHCO3 -> Na2CO3 + H2O +CO2",
      questionTitle:
        "One sodium bicarbonate molecule reacts to produce one sodium carbonate molecule, one carbon dioxide molecule, and one water molecule.",
      answerTitle:
        "Two sodium bicarbonate molecules react to produce one sodium carbonate molecule, one carbon dioxide molecule, and one water molecule.",
    },
    {
      srNo: "7",
      options: [],
      questionId: "question7",
      id: "single_replacement",
      ansAnimation: answerVideo7,
      answer: "Single Replacement",
      quesAnimation: questionVideo7,
      questionFrame: questionFrame7,
      euation: "FeO2 + Al -> Fe + Al2O3",
      questionTitle:
        "Iron (III) Oxide plus aluminum reacts to form iron plus aluminum oxide.",
      answerTitle:
        "Iron (III) Oxide plus two aluminum reacts to form two iron plus aluminum oxide.",
    },
    {
      srNo: "8",
      options: [],
      questionId: "question8",
      id: "single_replacement",
      ansAnimation: answerVideo8,
      answer: "Single Replacement",
      quesAnimation: questionVideo8,
      questionFrame: questionFrame8,
      euation: "AgNO3 + K -> Ag + KNO3",
      questionTitle:
        "One silver nitrate molecule reacts with one potassium atom to produce one silver atom and one potassium nitrate molecule.",
      answerTitle:
        "One silver nitrate molecule reacts with one potassium atom to produce one silver atom and one potassium nitrate molecule.",
    },
    {
      srNo: "9",
      options: [],
      questionId: "question9",
      id: "double_replacement",
      ansAnimation: answerVideo9,
      answer: "double_replacement",
      quesAnimation: questionVideo9,
      questionFrame: questionFrame9,
      euation: "KI + Pb(NO3)2 -> KNO3 + PbI2",
      questionTitle:
        "One potassium iodide molecule reacts with one lead (II) nitrate molecule to produce one potassium nitrate molecule and one lead (II) iodide molecule.",
      answerTitle:
        "Two potassium iodide molecules react with one lead (II) nitrate molecule to produce two potassium nitrate molecules and one lead (II) iodide molecule.",
    },
    {
      srNo: "10",
      options: [],
      id: "double_replacement",
      questionId: "question10",
      ansAnimation: answerVideo10,
      answer: "Double Replacement",
      quesAnimation: questionVideo10,
      questionFrame: questionFrame10,
      euation: "ZnO + HCl -> H2O + ZnCl2",
      questionTitle:
        "One zinc oxide molecule reacts with one hydrochloric acid molecule to produce one water molecule and one zinc chloride molecule.",
      answerTitle:
        "One zinc oxide molecule reacts with two hydrochloric acid molecules to produce one water molecule and one zinc chloride molecule.",
    },
  ],
  equationOptions: [
    {
      id: "synthesis",
      disabled: false,
      text: "Synthesis",
      label: "Synthesis",
    },
    {
      id: "decomposition",
      disabled: false,
      text: "Decomposition",
      label: "Decomposition",
    },
    {
      id: "combustion",
      disabled: false,
      text: "Combustion",
      label: "Combustion",
    },
    {
      id: "single_replacement",
      disabled: false,
      text: "Single replacement",
      label: "Single replacement",
    },
    {
      id: "double_replacement",
      disabled: false,
      text: "Double replacement",
      label: "Double replacement",
    },
  ],
  questionHeading: "Reaction -1- of 10.",
  resetMsgContent: globalConfig.resetPopupText,
  buttonLabels: { ...globalConfig.buttonLabels },
  toastContent: globalConfig.correctToastMessage,
  resetConfirmationText: globalConfig.resetLiveText,
  dialogBoxHeader: globalConfig.incorrectToastMessage,
  videoAltText: "Your browser does not support the video tag.",
  reactionTypeQuestion:
    "Select the reaction type based on the reactants and products present.",
  InfoBoxContent:
    "Identify the type of reaction based on your knowledge of reaction types and chemicals present.",
  instructionBoxContent:
    "Reactions occur when atoms or molecules interact to produce new substances. In this simulation, you will identify the type of reaction based on the interaction of atoms or molecules.",
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You have correctly identified all 10 reactions.",
  },
};

export default data;
