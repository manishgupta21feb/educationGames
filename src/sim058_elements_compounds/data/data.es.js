import globalDataSet from "../../app/data";
import imgAu from "../assets/images/au.png";
import imgN2 from "../assets/images/n2.png";
import imgH2o from "../assets/images/h2o.png";
import imgNacl from "../assets/images/nacl.png";

const data = {
  activityHeading:
    "Los estudiantes comparan y contrastan elementos y compuestos mediante la clasificación de tarjetas para completar un organizador gráfico digital. Luego, contestan cinco preguntas para demostrar lo que han aprendido sobre los elementos y los compuestos.",

  instructionBoxContent:
    "Todo lo que existe en la Tierra está formado por <b>elementos</b> y <b>compuestos</b>. Hoy vas a comparar y contrastar elementos y compuestos.",
  InfoBoxContent:
    "Arrastra cada tarjeta al espacio correcto para completar el organizador gráfico.",
  InfoBoxContentLevel2: "Elige la opción que conteste mejor cada pregunta.",
  rightAreaTextDescription:
    "Arrastra las tarjetas al organizador gráfico para comparar y contrastar elementos y compuestos.",

  dndLeftAltText:
    "Un organizador gráfico para comparar elementos y compuestos con 3 recuadros para identificar de que están formados, 2 recuadros para ejemplos y 1 recuadro para identificar lo que ambos se consideran.",

  buttonLabels: { ...globalDataSet.buttonLabels },

  liveAriaTxt: "colocado en",

  resetLiveText: globalDataSet.resetLiveText,
  resetMsgContent: globalDataSet.resetPopupText,
  transitionPopup: {
    ...globalDataSet.transitionPopup,
    content:
      "Has completado correctamente el organizador gráfico que compara elementos y compuestos. ¡Es hora de demostrar lo que sabes!",
  },
  completionPopup: {
    ...globalDataSet.completionPopup,
    content:
      "¡Has completado exitosamente la simulación que compara elementos y compuestos!",
  },
  labelDrop: "",
  draggables: [
    {
      id: "drag1",
      name: "Oro",
      ariaLabel: "elemento arrastrable «Oro (Au)»",
      isDisable: false,
      answerId: "aun2",
      isHidden: false,
      isImg: true,
      title: "Oro (Au)",

      imgText: [
        {
          textid: "1",
          textOne: "Au",
        },
      ],
    },
    {
      id: "drag2",
      name: "dos o más tipos de átomos",
      ariaLabel: "elemento arrastrable «dos o más tipos de átomos»",
      isDisable: false,
      answerId: "2matom",
      isHidden: false,
      isImg: false,
      imgPath: "",
    },
    {
      id: "drag3",
      name: "Agua",
      ariaLabel: "elemento arrastrable «Agua (H₂O)»",
      isDisable: false,
      answerId: "h2onacl",
      isHidden: false,
      isImg: true,
      title: "Agua (H<sub>2</sub>O)",

      imgText: [
        {
          textid: "2",
          textOne: "O",
        },
        {
          textid: "3",
          textOne: "H",
        },
        {
          textid: "4",
          textOne: "H",
        },
      ],
    },
    {
      id: "drag4",
      name: "Nitrógeno gaseoso",
      ariaLabel: "elemento arrastrable «Nitrógeno gaseoso (N₂)»",
      isDisable: false,
      answerId: "aun2",
      isHidden: false,
      isImg: true,
      title: "Nitrógeno <br/>gaseoso (N<sub>2</sub>)",

      imgText: [
        {
          textid: "5",
          textOne: "N",
        },
        {
          textid: "6",
          textOne: "N",
        },
      ],
    },
    {
      id: "drag5",
      name: "una sustancia pura",
      ariaLabel: "elemento arrastrable «una sustancia pura»",
      isDisable: false,
      answerId: "ps",
      isHidden: false,
      isImg: false,
      imgPath: "",
    },
    {
      id: "drag6",
      name: "materia; tiene masa y volumen",
      ariaLabel: "elemento arrastrable «materia; tiene masa y volumen»",
      isDisable: false,
      answerId: "matter",
      isHidden: false,
      isImg: false,
      imgPath: "",
    },
    {
      id: "drag7",
      name: "sal",
      ariaLabel: "elemento arrastrable «Sal (NaCl)»",
      isDisable: false,
      answerId: "h2onacl",
      isHidden: false,
      isImg: true,
      title: "Sal (NaCl)",
      imgPath: imgNacl,
      imgText: [
        {
          textid: "7",
          textOne: "Na",
        },
        {
          textid: "8",
          textOne: "Cl",
        },
      ],
    },
    {
      id: "drag8",
      name: "un solo tipo de átomo",
      ariaLabel: "elemento arrastrable «un solo tipo de átomo»",
      isDisable: false,
      answerId: "1atom",
      isHidden: false,
      isImg: false,
      imgPath: "",
    },
  ],
  dropzones: [
    {
      id: "drop1",
      classes: "singleatom",
      answerId: "1atom",
      hidden: false,
      aria: "droppable zone 1",
      label: "Área para colocar: «Los elementos están formados por».",
      value: "Made of single type of atom",
      title: "Formado por",
      cls: "top-left",
      ariaLabel: "Área para colocar: «Los elementos están formados por».",
    },
    {
      id: "drop2",
      classes: "matter",
      answerId: "matter",
      hidden: false,
      aria: "droppable zone 2",
      label:
        "Área para colocar: «Los elementos y los compuestos están formados por».",
      value: "Made of Matter",
      title: "Formado por",
      cls: "top-mid",
      ariaLabel:
        "Área para colocar: «Los elementos y los compuestos están formados por».",
    },
    {
      id: "drop3",
      classes: "twomoreatom",
      answerId: "2matom",
      hidden: false,
      aria: "droppable zone 3",
      label: "Área para colocar: «Los compuestos están formados por».",
      value: "Made of two or more types of atoms",
      title: "Formado por",
      cls: "top-right",
      ariaLabel: "Área para colocar: «Los compuestos están formados por».",
    },
    {
      id: "head7",
      hidden: true,
      cls: "elements",
      isNotDrop: true,
      name: "Elemento",
    },
    {
      id: "head8",
      hidden: true,
      isNotDrop: true,
      cls: "compounds",
      name: "Compuesto",
    },
    {
      id: "drop4",
      classes: "gold",
      answerId: "aun2",
      hidden: false,
      aria: "droppable zone 4",
      label: "Área para colocar: «El primer ejemplo de un elemento incluye».",
      value: "Examples of Single type of atom",
      title: "Ejemplo",
      cls: "down-left",
      ariaLabel:
        "Área para colocar: «El primer ejemplo de un elemento incluye».",
    },
    {
      id: "drop5",
      classes: "nitrogen",
      answerId: "aun2",
      hidden: false,
      aria: "droppable zone 5",
      label: "Área para colocar: «El segundo ejemplo de un elemento incluye».",
      value: "Examples of Single type of atom",

      ariaLabel:
        "Área para colocar: «El segundo ejemplo de un elemento incluye».",
    },
    {
      id: "drop6",
      classes: "pureSubstance",
      answerId: "ps",
      hidden: false,
      aria: "droppable zone 6",
      label:
        "Área para colocar: «Los elementos y los compuestos se consideran una».",
      value: "pure substance",
      title: "Considerado/a",
      cls: "down-mid",
      ariaLabel:
        "Área para colocar: «Los elementos y los compuestos se consideran una».",
    },
    {
      id: "drop7",
      classes: "water",
      answerId: "h2onacl",
      hidden: false,
      aria: "droppable zone 7",
      label: "Área para colocar: «El primer ejemplo de un compuesto incluye».",
      value: "Examples of Compounds",
      title: "Ejemplo",
      cls: "down-right",
      ariaLabel:
        "Área para colocar: «El primer ejemplo de un compuesto incluye».",
    },
    {
      id: "drop8",
      classes: "salt",
      answerId: "h2onacl",
      hidden: false,
      aria: "droppable zone 8",
      label: "Área para colocar: «El segundo ejemplo de un compuesto incluye».",
      value: "Examples of Compounds",

      ariaLabel:
        "Área para colocar: «El segundo ejemplo de un compuesto incluye».",
    },
  ],

  curve: [
    {
      id: "ec_1",
      className: "blue-up-left",
    },
    {
      id: "ec_2",
      className: "blue-up-right",
    },
    {
      id: "ec_3",
      className: "brown-up-left",
    },
    {
      id: "ec_4",
      className: "brown-up-right",
    },
    {
      id: "ec_5",
      className: "blue-down-left",
    },
    {
      id: "ec_6",
      className: "blue-down-right",
    },
    {
      id: "ec_7",
      className: "brown-down-left",
    },
    {
      id: "ec_8",
      className: "brown-down-right",
    },
  ],

  equationOptions: [
    {
      id: "radio1",
      text: "Solo elemento",
      disabled: false,
    },
    {
      id: "radio2",
      text: "Solo compuesto",
      disabled: false,
    },
    {
      id: "radio3",
      text: "Elemento o compuesto",
      disabled: false,
    },
  ],
  questionHeading: "Pregunta: -1- de 5",

  correctToastMessage: globalDataSet.correctToastMessage,
  incorrectToastMessage: globalDataSet.incorrectToastMessage,
  incorrectToastMessageDnD:
    "Algunas tarjetas no están en el espacio correcto. ¡Inténtalo otra vez!",
  equationsData: [
    {
      srNo: "1",
      id: "question1",
      class: "question-1",
      questionText:
        "Soy una <b>fórmula química</b> que tiene por lo menos dos tipos diferentes de átomos. ¿Qué soy?",
      answer: "radio2",
      imageClass: "question-1-image",
      imageAlt:
        "A model of 4 molecules of carbon dioxide (CO2) with 2 red circles labeled O for oxygen on either side of a gray circle labeled C for carbon",
    },
    {
      srNo: "2",
      id: "question2",
      class: "question-2",
      questionText:
        "A veces contengo <b>moléculas</b>. Las moléculas son sustancias formadas por dos o más átomos. ¿Qué soy?",
      answer: "radio3",
      imageClass: "question-2-image",
      text: "Compound only",
      label: "Compound only",
      imageAlt:
        "A model of 4 molecules of oxygen (O2) with 2 red circles labeled O for oxygen attached to each other",
    },
    {
      srNo: "3",
      id: "question3",
      class: "question-3",
      questionText: "Tengo un solo <b>símbolo químico</b>. ¿Qué soy?",
      answer: "radio1",
      imageClass: "question-3-image",
      text: "Element or compound",
      label: "Element or compound",
      imageAlt:
        "A model of 4 atoms of oxygen (O) with 4 red circles labeled O for oxygen",
    },
    {
      srNo: "4",
      id: "question4",
      class: "question-4",
      questionText: "Observa con atención la siguiente imagen. ¿Qué soy?",
      answer: "radio1",
      imageClass: "question-4-image",
      text: "Element or compound",
      label: "Element or compound",
      imageAlt:
        "Un círculo lleno de bolitas verdes que representan partículas; el modelo muestra sustancias formadas por partículas de un solo color.",
    },
    {
      srNo: "5",
      id: "question5",
      class: "question-5",
      questionText: "Observa con atención la siguiente imagen. ¿Qué soy?",
      answer: "radio2",
      imageClass: "question-5-image",
      text: "Element or compound",
      label: "Element or compound",
      imageAlt:
        "Un círculo lleno de bolitas verdes y rojas que representan partículas; el modelo muestra sustancias formadas por partículas de dos colores diferentes.",
    },
  ],
};

export default data;
