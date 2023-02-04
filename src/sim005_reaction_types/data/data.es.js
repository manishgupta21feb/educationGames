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
        "Una molécula de metano reacciona con una molécula de oxígeno para producir una molécula de dióxido de carbono y una molécula de agua.",
      answerTitle:
        "Una molécula de metano reacciona con dos moléculas de oxígeno para producir una molécula de dióxido de carbono y dos moléculas de agua.",
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
        "Una molécula de etano reacciona con una molécula de oxígeno para producir una molécula de dióxido de carbono y una molécula de agua.",
      answerTitle:
        "Dos moléculas de etano reaccionan con siete moléculas de oxígeno para producir cuatro moléculas de dióxido de carbono y seis molécula de agua.",
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
        "Un átomo de sodio reacciona con una molécula de cloro para producir una molécula de cloruro de sodio.",
      answerTitle:
        "Dos átomos de sodio reaccionan con una molécula de cloro para producir dos moléculas de cloruro de sodio.",
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
        "Un átomo de potasio reacciona con una molécula de bromo para producir una molécula de bromuro de potasio.",
      answerTitle:
        "Dos átomos de potasio reaccionan con una molécula de bromo para producir dos moléculas de bromuro de potasio.",
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
        "Una molécula de nitrato de litio reacciona para formar una molécula de óxido de litio, una molécula de dióxido de nitrógeno y una molécula de oxígeno.",
      answerTitle:
        "Cuatro moléculas de nitrato de litio reaccionan para formar dos moléculas de óxido de litio, cuatro moléculas de dióxido de nitrógeno y una molécula de oxígeno.",
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
        "Una molécula de bicarbonato de sodio reacciona para producir una molécula de carbonato de sodio, una molécula de dióxido de carbono y una molécula de agua.",
      answerTitle:
        "Dos moléculas de bicarbonato de sodio reaccionan para producir una molécula de carbonato de sodio, una molécula de dióxido de carbono y una molécula de agua.",
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
        "Una molécula de óxido de hierro (III) y un átomo de aluminio reaccionan para formar un átomo de hierro y una molécula de óxido de aluminio.",
      answerTitle:
        "Una molécula de óxido de hierro (III) y dos átomos de aluminio reaccionan para formar dos átomos de hierro y una molécula de óxido de aluminio.",
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
        "Una molécula de nitrato de plata reacciona con un átomo de potasio para producir un átomo de plata y una molécula de nitrato de potasio.",
      answerTitle:
        "Una molécula de nitrato de plata reacciona con un átomo de potasio para producir un átomo de plata y una molécula de nitrato de potasio.",
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
        "Una molécula de yoduro de potasio reacciona con una molécula de nitrato de plomo (II) para producir una molécula de nitrato de potasio y una molécula de yoduro de plomo (II).",
      answerTitle:
        "Dos moléculas de yoduro de potasio reaccionan con una molécula de nitrato de plomo (II) para producir dos moléculas de nitrato de potasio y una molécula de yoduro de plomo (II).",
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
        "Una molécula de óxido de zinc reacciona con una molécula de ácido clorhídrico para producir una molécula de agua y una molécula de cloruro de zinc.",
      answerTitle:
        "Una molécula de óxido de zinc reacciona con dos moléculas de ácido clorhídrico para producir una molécula de agua y una molécula de cloruro de zinc.",
    },
  ],
  equationOptions: [
    {
      id: "synthesis",
      disabled: false,
      text: "Síntesis",
      label: "Síntesis",
    },
    {
      id: "decomposition",
      disabled: false,
      text: "Descomposición",
      label: "Descomposición",
    },
    {
      id: "combustion",
      disabled: false,
      text: "Combustión",
      label: "Combustión",
    },
    {
      id: "single_replacement",
      disabled: false,
      text: "Sustitución simple",
      label: "Sustitución simple",
    },
    {
      id: "double_replacement",
      disabled: false,
      text: "Sustitución doble",
      label: "Sustitución doble",
    },
  ],
  questionHeading: "Reacción -1- de 10.",
  resetMsgContent: globalConfig.resetPopupText,
  buttonLabels: { ...globalConfig.buttonLabels },
  toastContent: globalConfig.correctToastMessage,
  resetConfirmationText: globalConfig.resetLiveText,
  dialogBoxHeader: globalConfig.incorrectToastMessage,
  videoAltText: "Your browser does not support the video tag.",
  reactionTypeQuestion:
    "Selecciona el tipo de reacción de acuerdo a los reactivos y productos presentes.",
  InfoBoxContent:
    "Identifica el tipo de reacción de acuerdo a tus conocimientos sobre los tipos de reacciones y sustancias químicas presentes.",
  instructionBoxContent:
    "Las reacciones ocurren cuando los átomos o moléculas interactúan para producir sustancias nuevas. En esta simulación, identificarás el tipo de reacción según la interacción de los átomos o moléculas.",
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "Has identificado correctamente las 10 reacciones.",
  },
};

export default data;
