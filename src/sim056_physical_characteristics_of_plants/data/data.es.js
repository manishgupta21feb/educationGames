import globalDataSet from "../../app/data";
import instructionImg from "../assets/images/instructionImg.png";
import flower_tab from "../assets/images/flower_tab.png";
import fruit_tab from "../assets/images/fruit_tab.png";
import leaf_tab from "../assets/images/leaf_tab.png";
import root_tab from "../assets/images/root_tab.png";
import seed_tab from "../assets/images/seed_tab.png";
import stem_tab from "../assets/images/stem_tab.png";

import flower from "../assets/images/flower.png";
import fruit from "../assets/images/fruit.png";
import leaf from "../assets/images/leaf.png";
import root from "../assets/images/root.png";
import seed from "../assets/images/seed.png";
import stem from "../assets/images/stem.png";

const data = {
  flower_parts: [
    {
      path: flower,
      aria: "flor",
      classes: "flower",
      alt: "flor de una planta",
    },
    {
      path: fruit,
      aria: "fruta",
      classes: "fruit",
      alt: "fruta de una planta",
    },
    {
      path: leaf,
      aria: "hoja",
      classes: "leaf",
      alt: "hoja de una planta",
    },
    {
      path: root,
      aria: "raíz",
      classes: "root",
      alt: "raíz de una planta",
    },
    {
      path: seed,
      aria: "semilla",
      classes: "seed",
      alt: "semilla de una planta",
    },
    {
      path: stem,
      aria: "tallo",
      classes: "stem",
      alt: "tallo de una planta",
    },
  ],
  observationMotive:
    "En esta simulación, el estudiante aprenderá sobre las partes de las plantas y elegirá las piezas correctas del rompecabezas para completar una imagen de una planta en un patio.",
  activityHeading: "Una pantalla en blanco.",
  instructionBoxContent: {
    label:
      "Todas las plantas tienen las mismas necesidades básicas de alimento, agua y luz solar. También necesitan producir plantas nuevas. Las plantas tienen diferentes partes que las ayudan a satisfacer esas necesidades. Ayúdanos a identificar las partes de las plantas.",
    img: instructionImg,
    alt: "Una planta adulta de tomate, con flores y frutas, que crece en el pasto. Al fondo hay una valla marrón. El sol brilla.",
  },
  questionHeading: globalDataSet.questionCounterString2,
  completedImgAlt: "Una pantalla en blanco.",
  InfoBoxContent:
    "Haz clic sobre la pieza del rompecabezas que muestra la parte correcta de la planta.",
  rightAreaTextDescription:
    "Elige la pieza del rompecabezas que tiene la palabra correcta para que la oración sea verdadera.",
  buttonLabels: { ...globalDataSet.buttonLabels },
  completionPopup: {
    ...globalDataSet.completionPopup,
    content: "Has completado exitosamente esta simulación.",
  },
  resetLiveText: globalDataSet.resetLiveText,
  resetMsgContent: globalDataSet.resetPopupText,
  correctToastMsg: globalDataSet.correctToastMessage,
  incorrectToastMsg: globalDataSet.incorrectToastMessage,
  subOptions: [
    {
      srNo: 1,
      id: "flor",
      label: "flores",
      infoText: "flores",
      ariaLabel: "flores",
      path: "flower_tab",
    },
    {
      srNo: 2,
      id: "raíz",
      label: "raíz",
      ariaLabel: "raíz",
      infoText: "raíz",
      path: "root_tab",
    },
    {
      srNo: 3,
      id: "semilla",
      label: "semilla",
      infoText: "semilla",
      ariaLabel: "semilla",
      path: "seed_tab",
    },
    {
      srNo: 4,
      id: "tallo",
      label: "tallo",
      infoText: "tallo",
      ariaLabel: "tallo",
      path: "stem_tab",
    },
    {
      srNo: 5,
      id: "fruta",
      label: "fruta",
      ariaLabel: "fruta",
      infoText: "fruta",
      path: "fruit_tab",
    },
    {
      srNo: 6,
      id: "hoja",
      label: "hoja",
      infoText: "hoja",
      ariaLabel: "hoja",
      path: "leaf_tab",
    },
  ],
  questionSet: [
    {
      id: "pcop_qs_1",
      text: "La __________ ayuda a una planta a obtener agua.",
      textWithAnswer:
        "La <span aria-hidden='true'> __________ </span> <span class='question_text2 es'> raíz </span>&nbsp;ayuda a una planta a obtener agua.",
      textWithAria: "El espacio en blanco ayuda a una planta a obtener agua.",
      leftAlt:
        "Raíces de color marrón claro que se extienden desde el extremo de un tallo verde pequeño.",
      answerId: "raíz",
      leftLive:
        "Raíces de color marrón claro que se extienden desde el extremo de un tallo verde pequeño.",
    },
    {
      id: "pcop_qs_2",
      text: "El __________ ayuda a la planta a sostenerse.",
      textWithAria: "El espacio en blanco ayuda a la planta a sostenerse.",
      leftAlt:
        "Un tallo verde largo con raíces de color marrón claro que se extienden desde su extremo.",
      leftLive:
        "Un tallo verde largo con raíces de color marrón claro que se extienden desde su extremo.",
      textWithAnswer:
        "El <span aria-hidden='true'>__________</span> <span class='question_text2 es'> tallo </span>&nbsp;ayuda a la planta a sostenerse.",
      answerId: "tallo",
    },
    {
      id: "pcop_qs_3",
      text: "Una __________ ayuda a una planta a obtener luz solar para producir alimentos.",
      textWithAria:
        "Una espacio en blanco ayuda a una planta a obtener luz solar para producir alimento.",
      textWithAnswer:
        "Una <span aria-hidden='true'>__________</span> <span class='question_text3 es'> hoja </span>&nbsp;ayuda a una planta a obtener luz solar para producir alimento",
      answerId: "hoja",
      leftAlt:
        "Hojas verdes que salen de un tallo verde largo con raíces de color marrón claro que se extienden desde su extremo.",
      leftLive:
        "Hojas verdes que salen de un tallo verde largo con raíces de color marrón claro que se extienden desde su extremo.",
    },
    {
      id: "pcop_qs_4",
      text: "Una __________ ayuda a una planta a atraer a las abejas para esparcir el polen.",
      textWithAnswer:
        "Una <span aria-hidden='true'>__________</span> <span class='question_text1 es'> flor </span>&nbsp; ayuda a una planta a atraer a las abejas para esparcir el polen.",
      answerId: "flor",
      textWithAria:
        "Una espacio en blanco ayuda a una planta a atraer a las abejas para esparcir el polen.",
      leftAlt:
        "Flores amarillas que crecen en una planta con hojas verdes en un tallo verde largo con raíces de color marrón claro que se extienden desde su extremo.",
      leftLive:
        "Flores amarillas que crecen en una planta con hojas verdes que salen de un tallo verde largo con raíces de color marrón claro que se extienden desde su extremo.",
    },
    {
      id: "pcop_qs_5",
      text: "La __________ contiene semillas para una planta nueva",
      textWithAnswer:
        "La <span aria-hidden='true'>__________</span> <span class='question_text2 es'> fruta </span>&nbsp; contiene semillas para una planta nueva.",
      answerId: "fruta",
      textWithAria:
        "El espacio en blanco contiene semillas para una planta nueva.",
      leftAlt:
        "Tres tomates rojos pequeños que crecen en una planta con flores amarillas y hojas verdes, salen de un tallo verde largo con raíces de color marrón claro que se extienden desde su extremo.",
      leftLive:
        "Tres tomates rojos pequeños que crecen en una planta con flores amarillas y hojas verdes, salen de un tallo verde largo con raíces de color marrón claro que se extienden desde su extremo.",
    },
    {
      id: "pcop_qs_6",
      text: "Una __________ contiene una planta nueva que crecerá",
      textWithAnswer:
        "Una <span aria-hidden='true'>__________</span> <span class='question_text5 es'> semilla </span>&nbsp; contiene una planta nueva que crecerá",
      answerId: "semilla",
      textWithAria:
        "Una espacio en blanco contiene una planta nueva que crecerá.",
      leftAlt:
        "Tres tomates rojos pequeños y la mitad de un tomate cortado en una planta con flores amarillas, hojas verdes, un tallo verde y raíces de color marrón claro que se extienden desde su extremo.",
      leftLive:
        "Tres tomates rojos pequeños y la mitad de un tomate cortado en una planta con flores amarillas, hojas verdes, un tallo verde y raíces de color marrón claro que se extienden desde su extremo.",
    },
  ],
};

export default data;
