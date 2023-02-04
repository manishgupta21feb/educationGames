import globalDataSet from "../../app/data/data.en";
import imgAu from "../assets/images/au.png";
import imgN2 from "../assets/images/n2.png";
import imgH2o from "../assets/images/h2o.png";
import imgNacl from "../assets/images/nacl.png";

const data = {
  activityHeading:
    "Students compare and contrast elements and compounds by sorting cards to complete a digital graphic organizer. They then answer five questions to demonstrate their new understandings of elements and compounds.",

  instructionBoxContent:
    "<b>Elements</b> and <b>compounds</b> make up everything on Earth. Today, you will compare and contrast elements and compounds.",
  InfoBoxContent:
    "Complete the graphic organizer by dragging the cards to their correct spots.",
  InfoBoxContentLevel2:
    "Select the answer choice that best answers each question.",
  rightAreaTextDescription:
    "Drag the cards to the graphic organizer to compare and contrast elements and compounds.",

  dndLeftAltText:
    "Graphic organizer comparing elements and compounds, 3 boxes to identify Made of, 2 boxes for Examples, 1 box to identify what both are Considered.",

  buttonLabels: { ...globalDataSet.buttonLabels },

  liveAriaTxt: "dropped on",

  resetLiveText: globalDataSet.resetLiveText,
  resetMsgContent: globalDataSet.resetPopupText,
  transitionPopup: {
    ...globalDataSet.transitionPopup,
    content:
      "You have successfully completed the graphic organizer comparing elements and compounds. It’s now time to show what you know!",
  },
  completionPopup: {
    ...globalDataSet.completionPopup,
    content:
      "You have successfully completed the simulation comparing elements and compounds!",
  },
  labelDrop: "",
  draggables: [
    {
      id: "drag1",
      name: "gold",
      ariaLabel: "gold (A u) draggable",
      isDisable: false,
      answerId: "aun2",
      isHidden: false,
      isImg: true,
      title: "Gold (Au)",

      imgText: [
        {
          textid: "1",
          textOne: "Au",
        },
      ],
    },
    {
      id: "drag2",
      name: "two or more types of atoms",
      ariaLabel: "two or more types of atoms draggable",
      isDisable: false,
      answerId: "2matom",
      isHidden: false,
      isImg: false,
      imgPath: "",
    },
    {
      id: "drag3",
      name: "water",
      ariaLabel: "water (h2o) draggable",
      isDisable: false,
      answerId: "h2onacl",
      isHidden: false,
      isImg: true,
      title: "Water (H<sub>2</sub>O)",

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
      name: "nitrogen gas",
      ariaLabel: "nitrogen gas (n2) draggable",
      isDisable: false,
      answerId: "aun2",
      isHidden: false,
      isImg: true,
      title: "Nitrogen gas (N<sub>2</sub>)",

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
      name: "pure substance",
      ariaLabel: "pure Substance draggable",
      isDisable: false,
      answerId: "ps",
      isHidden: false,
      isImg: false,
      imgPath: "",
    },
    {
      id: "drag6",
      name: "matter; has mass and volume",
      ariaLabel: "matter has mass and volume draggable",
      isDisable: false,
      answerId: "matter",
      isHidden: false,
      isImg: false,
      imgPath: "",
    },
    {
      id: "drag7",
      name: "salt",
      ariaLabel: "salt (nacl) draggable",
      isDisable: false,
      answerId: "h2onacl",
      isHidden: false,
      isImg: true,
      title: "Salt (NaCl)",
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
      name: "a single type of atom",
      ariaLabel: "a single type of atom draggable",
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
      label: "Droppable area: Elements are made of.",
      value: "Made of single type of atom",
      title: "Made of",
      cls: "top-left",
      ariaLabel: "Droppable area: Elements are made of ",
    },
    {
      id: "drop2",
      classes: "matter",
      answerId: "matter",
      hidden: false,
      aria: "droppable zone 2",
      label: "Droppable area: Elements and compounds are made of.",
      value: "Made of Matter",
      title: "Made of",
      cls: "top-mid",
      ariaLabel: "Droppable area: Elements and compounds are made of ",
    },
    {
      id: "drop3",
      classes: "twomoreatom",
      answerId: "2matom",
      hidden: false,
      aria: "droppable zone 3",
      label: "Droppable area: Compounds are made of.",
      value: "Made of two or more types of atoms",
      title: "Made of",
      cls: "top-right",
      ariaLabel: "Droppable area: Compounds are made of ",
    },
    {
      id: "head7",
      hidden: true,
      cls: "elements",
      isNotDrop: true,
      name: "Element",
    },
    {
      id: "head8",
      hidden: true,
      isNotDrop: true,
      cls: "compounds",
      name: "Compound",
    },
    {
      id: "drop4",
      classes: "gold",
      answerId: "aun2",
      hidden: false,
      aria: "droppable zone 4",
      label: "Droppable area: first example of elements include.",
      value: "Examples of Single type of atom",
      title: "Example",
      cls: "down-left",
      ariaLabel: "Droppable area: first example of elements include ",
    },
    {
      id: "drop5",
      classes: "nitrogen",
      answerId: "aun2",
      hidden: false,
      aria: "droppable zone 5",
      label: "Droppable area: second example of elements include.",
      value: "Examples of Single type of atom",

      ariaLabel: "Droppable area: second example of elements include ",
    },
    {
      id: "drop6",
      classes: "pureSubstance",
      answerId: "ps",
      hidden: false,
      aria: "droppable zone 6",
      label: "Droppable area: Elements and compounds are considered a.",
      value: "pure substance",
      title: "Considered a",
      cls: "down-mid",
      ariaLabel: "Droppable area: Elements and compounds are considered a ",
    },
    {
      id: "drop7",
      classes: "water",
      answerId: "h2onacl",
      hidden: false,
      aria: "droppable zone 7",
      label: "Droppable area: first example of compounds include.",
      value: "Examples of Compounds",
      title: "Example",
      cls: "down-right",
      ariaLabel: "Droppable area: first example of compounds include ",
    },
    {
      id: "drop8",
      classes: "salt",
      answerId: "h2onacl",
      hidden: false,
      aria: "droppable zone 8",
      label: "Droppable area: second example of compounds include.",
      value: "Examples of Compounds",

      ariaLabel: "Droppable area: second example of compounds include ",
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
      text: "Element only",
      disabled: false,
    },
    {
      id: "radio2",
      text: "Compound only",
      disabled: false,
    },
    {
      id: "radio3",
      text: "Element or compound",
      disabled: false,
    },
  ],
  questionHeading: "Question: -1- of 5",

  correctToastMessage: globalDataSet.correctToastMessage,
  incorrectToastMessage: globalDataSet.incorrectToastMessage,
  incorrectToastMessageDnD: "Some cards are not placed correctly. Try again!",
  equationsData: [
    {
      srNo: "1",
      id: "question1",
      class: "question-1",
      questionText:
        "I am a <b>chemical formula</b> that consists of at least two different types of atoms. What am I?",
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
        "I sometimes include <b>molecules</b>. Molecules are substances made up of two or more atoms. What am I?",
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
      questionText: "I am a single <b>chemical symbol</b>. What am I? ",
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
      questionText: "Examine the provided image. What am I? ",
      answer: "radio1",
      imageClass: "question-4-image",
      text: "Element or compound",
      label: "Element or compound",
      imageAlt:
        "A circle filled with small green balls that represent particles; the model shows substances made up of particles of one color.",
    },
    {
      srNo: "5",
      id: "question5",
      class: "question-5",
      questionText: "Examine the provided image. What am I?",
      answer: "radio2",
      imageClass: "question-5-image",
      text: "Element or compound",
      label: "Element or compound",
      imageAlt:
        "A circle filled with small green and red balls that represent particles; the model shows substances made up of particles of two different colors.",
    },
  ],
};

export default data;
