import globalConfig from "../../app/data/data.es";

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
        "Una mol??cula de metano reacciona con una mol??cula de ox??geno para producir una mol??cula de di??xido de carbono y una mol??cula de agua.",
      answerTitle:
        "Una mol??cula de metano reacciona con dos mol??culas de ox??geno para producir una mol??cula de di??xido de carbono y dos mol??culas de agua.",
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
        "Una mol??cula de etano reacciona con una mol??cula de ox??geno para producir una mol??cula de di??xido de carbono y una mol??cula de agua.",
      answerTitle:
        "Dos mol??culas de etano reaccionan con siete mol??culas de ox??geno para producir cuatro mol??culas de di??xido de carbono y seis mol??cula de agua.",
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
        "Un ??tomo de sodio reacciona con una mol??cula de cloro para producir una mol??cula de cloruro de sodio.",
      answerTitle:
        "Dos ??tomos de sodio reaccionan con una mol??cula de cloro para producir dos mol??culas de cloruro de sodio.",
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
        "Un ??tomo de potasio reacciona con una mol??cula de bromo para producir una mol??cula de bromuro de potasio.",
      answerTitle:
        "Dos ??tomos de potasio reaccionan con una mol??cula de bromo para producir dos mol??culas de bromuro de potasio.",
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
        "Una mol??cula de nitrato de litio reacciona para formar una mol??cula de ??xido de litio, una mol??cula de di??xido de nitr??geno y una mol??cula de ox??geno.",
      answerTitle:
        "Cuatro mol??culas de nitrato de litio reaccionan para formar dos mol??culas de ??xido de litio, cuatro mol??culas de di??xido de nitr??geno y una mol??cula de ox??geno.",
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
        "Una mol??cula de bicarbonato de sodio reacciona para producir una mol??cula de carbonato de sodio, una mol??cula de di??xido de carbono y una mol??cula de agua.",
      answerTitle:
        "Dos mol??culas de bicarbonato de sodio reaccionan para producir una mol??cula de carbonato de sodio, una mol??cula de di??xido de carbono y una mol??cula de agua.",
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
        "Una mol??cula de ??xido de hierro (III) y un ??tomo de aluminio reaccionan para formar un ??tomo de hierro y una mol??cula de ??xido de aluminio.",
      answerTitle:
        "Una mol??cula de ??xido de hierro (III) y dos ??tomos de aluminio reaccionan para formar dos ??tomos de hierro y una mol??cula de ??xido de aluminio.",
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
        "Una mol??cula de nitrato de plata reacciona con un ??tomo de potasio para producir un ??tomo de plata y una mol??cula de nitrato de potasio.",
      answerTitle:
        "Una mol??cula de nitrato de plata reacciona con un ??tomo de potasio para producir un ??tomo de plata y una mol??cula de nitrato de potasio.",
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
        "Una mol??cula de yoduro de potasio reacciona con una mol??cula de nitrato de plomo (II) para producir una mol??cula de nitrato de potasio y una mol??cula de yoduro de plomo (II).",
      answerTitle:
        "Dos mol??culas de yoduro de potasio reaccionan con una mol??cula de nitrato de plomo (II) para producir dos mol??culas de nitrato de potasio y una mol??cula de yoduro de plomo (II).",
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
        "Una mol??cula de ??xido de zinc reacciona con una mol??cula de ??cido clorh??drico para producir una mol??cula de agua y una mol??cula de cloruro de zinc.",
      answerTitle:
        "Una mol??cula de ??xido de zinc reacciona con dos mol??culas de ??cido clorh??drico para producir una mol??cula de agua y una mol??cula de cloruro de zinc.",
    },
  ],
  equationOptions: [
    {
      id: "synthesis",
      disabled: false,
      text: "S??ntesis",
      label: "S??ntesis",
    },
    {
      id: "decomposition",
      disabled: false,
      text: "Descomposici??n",
      label: "Descomposici??n",
    },
    {
      id: "combustion",
      disabled: false,
      text: "Combusti??n",
      label: "Combusti??n",
    },
    {
      id: "single_replacement",
      disabled: false,
      text: "Sustituci??n simple",
      label: "Sustituci??n simple",
    },
    {
      id: "double_replacement",
      disabled: false,
      text: "Sustituci??n doble",
      label: "Sustituci??n doble",
    },
  ],
  questionHeading: "Reacci??n -1- de 10.",
  resetMsgContent: globalConfig.resetPopupText,
  buttonLabels: { ...globalConfig.buttonLabels },
  toastContent: globalConfig.correctToastMessage,
  resetConfirmationText: globalConfig.resetLiveText,
  dialogBoxHeader: globalConfig.incorrectToastMessage,
  videoAltText: "Your browser does not support the video tag.",
  reactionTypeQuestion:
    "Selecciona el tipo de reacci??n de acuerdo a los reactivos y productos presentes.",
  InfoBoxContent:
    "Identifica el tipo de reacci??n de acuerdo a tus conocimientos sobre los tipos de reacciones y sustancias qu??micas presentes.",
  instructionBoxContent:
    "Las reacciones ocurren cuando los ??tomos o mol??culas interact??an para producir sustancias nuevas. En esta simulaci??n, identificar??s el tipo de reacci??n seg??n la interacci??n de los ??tomos o mol??culas.",
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "Has identificado correctamente las 10 reacciones.",
  },
};

export default data;
