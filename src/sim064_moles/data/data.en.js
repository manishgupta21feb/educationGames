import commonData from "../../app/data/data.en";

const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  buttonLabels: { ...commonData.buttonLabels },

  activityHeading:
    "Apply the concept of molar mass to convert between moles and grams and calculate the number of atoms or molecules in a sample of material using Avogadro's number.",
  instructionBoxContent:
    "Use the diagram to determine how to calculate the missing quantities in the chart. The first row is done for you.",
  infoBoxContent:
    "Use the provided information to complete the calculations and drag answers into the chart.",
  topAreaTextDescription:
    "Drag the answers to the correct places to complete the chart, and submit your answers.",
  buttonLabels: { ...commonData.buttonLabels },
  dndButtonLabel: "Submit Answer",
  resetLiveText: commonData.resetLiveText,
  resetMsgContent: commonData.resetPopupText,
  completionPopup: {
    ...commonData.completionPopup,
    content: "You did it!",
  },
  questionHeading: "Question: -1- of 4",

  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  incorrectToastMessageDnD:
    "You are almost correct! Please try again and fix your incorrect answers!",
  imgAltText:
    "3 circles with labels: mass on left, moles at center, particles on right, 2 arrows to divide point to moles circle & 2 arrows to multiply point away",
  tableCaption: "Calculate the missing quantities and drop the answer",
  liveAriaTxt: "dropped on",
  dropLabels: [
    {
      id: "label1",
      text: "Element (Molar Mass)",
    },
    {
      id: "label2",
      text: "Mass",
    },
    {
      id: "label3",
      text: "Moles",
    },
    {
      id: "label4",
      text: "Particles (Atoms or Molecules)",
    },
  ],
  staticQuestion: [
    [
      {
        id: "staticdrop1",
        classes: "static-drop",

        hidden: false,

        value:
          "<p aria-hidden='true'>Na (22.99 g)</p><p class='sr-only'>Sodium N a (22.99 gram)</p>",
      },
      {
        id: "staticdrop2",
        classes: "static-drop",

        hidden: false,

        value:
          "<p aria-hidden='true'>45.98 g</p><p class='sr-only'>45.98 gram</p>",
      },
      {
        id: "staticdrop3",
        classes: "static-drop",

        hidden: false,
        ariaName: "2",

        value: "<p>2</p>",
      },
      {
        id: "staticdrop3",
        classes: "static-drop",

        hidden: false,
        ariaName: "1.204 multiply 10 power 24",

        value:
          "<p aria-hidden='true'>1.204 x 10<sup>24</sup></p> <p class='sr-only'>1.204 multiply 10 to the power 24</p>",
      },
    ],
  ],
  replaceTableContent: [
    {
      id: "dummydrop1",
      classes: "dummy-static-drop",
      dropZone: true,
      hidden: false,
    },
    {
      id: "dummydrop2",
      classes: "dummy-static-drop",
      dropZone: true,
      hidden: false,
    },
    {
      id: "dummydrop3",
      classes: "dummy-static-drop",
      dropZone: true,
      hidden: false,
    },
    {
      id: "dummydrop4",
      classes: "dummy-static-drop",
      dropZone: true,
      hidden: false,
    },
  ],
  dndQuestion: [
    {
      srNo: "1",
      id: "question1",

      draggable: [
        {
          id: "drag1",
          dragValue: "53.26 g",

          isDisable: false,
          answerId: "",
          isHidden: false,
          ariaName: "53.26 gram draggable",
        },
        {
          id: "drag2",
          dragValue: "119.85 g",

          isDisable: false,
          answerId: "option1drag1",
          isHidden: false,
          ariaName: "119.85 gram draggable",
        },
        {
          id: "drag3",
          dragValue:
            "<p aria-hidden='true'>9.03 x 10<sup>23</sup></p><p class='sr-only'>particles 9.03 multiply 10 to the power 23</p>",

          isDisable: false,
          answerId: "option1drag2",
          isHidden: false,
          title: "draggable 3",
          ariaName: "9.03 multiply 10 to the power 23 draggable",
        },
        {
          id: "drag4",
          dragValue:
            "<p aria-hidden='true'>9.03 x 10<sup>24</sup></p><p class='sr-only'>particles 9.03 multiply 10 to the power 24</p>",

          isDisable: false,
          answerId: "",
          isHidden: false,
          title: "draggable 4",
          ariaName: "9.03 multiply 10 to the power 24 draggable",
        },
      ],

      dropZone: [
        {
          id: "drop1",
          classes: "static-drop-zone",
          isStatic: true,
          answerId: "",
          hidden: true,

          ariaName: "Bromine B r (79.9 gram)",
          label: "Element (Molar Mass)",
          value: "<p aria-hidden='true'>Br (79.9 g)</p>",
        },
        {
          id: "drop2",
          classes: "drop-zone",
          isStatic: false,
          answerId: "option1drag1",
          hidden: false,
          ariaName: "droppable zone ",
          label: "Bromine mass droppable zone ",
        },
        {
          id: "drop3",
          classes: "static-drop-zone",
          isStatic: true,
          answerId: "",
          hidden: true,
          ariaName: "1.5",
          label: "1.5",
          value: "<p aria-hidden='true'>1.5</p>",
        },
        {
          id: "drop4",
          classes: "drop-zone",
          isStatic: false,
          answerId: "option1drag2",
          hidden: false,
          ariaName: "droppable zone ",
          label: "Bromine particles(atom or molecules) droppable zone ",
        },
      ],
    },
    {
      srNo: "2",
      id: "question2",

      draggable: [
        {
          id: "drag1",
          dragValue: "47.97 g",

          isDisable: false,
          answerId: "option2drag1",
          isHidden: false,
          ariaName: "47.97 gram draggable",
        },
        {
          id: "drag2",
          dragValue: "31.98 g",

          isDisable: false,
          answerId: "",
          isHidden: false,
          ariaName: "31.98 gram draggable",
        },
        {
          id: "drag3",
          dragValue: "3",

          isDisable: false,
          answerId: "option2drag2",
          isHidden: false,
          title: "draggable 3",
          ariaName: "3 draggable",
        },
        {
          id: "drag4",
          dragValue: "2",

          isDisable: false,
          answerId: "",
          isHidden: false,
          title: "draggable 4",
          ariaName: "2 draggable",
        },
      ],

      dropZone: [
        {
          id: "drop1",
          classes: "static-drop-zone",
          isStatic: true,
          answerId: "",
          hidden: true,
          ariaName: "Oxygen O (15.99g)",

          value: "<p aria-hidden='true'>O (15.99 g)</p>",
        },
        {
          id: "drop2",
          classes: "drop-zone",
          isStatic: false,
          answerId: "option2drag1",
          hidden: false,
          ariaName: "droppable zone",
          label: "Oxygen mass droppable zone",
        },
        {
          id: "drop3",
          classes: "drop-zone",
          isStatic: false,
          answerId: "option2drag2",
          hidden: false,
          ariaName: "droppable zone",
          label: "Oxygen moles droppable zone",
        },
        {
          id: "drop4",
          classes: "static-drop-zone",
          isStatic: true,
          answerId: "",
          hidden: true,
          ariaName: "1.806 multiply 10 to the power 24",

          value: "<p aria-hidden='true'>1.806 x 10<sup>24</sup></p>",
        },
      ],
    },
    {
      srNo: "3",
      id: "question3",

      draggable: [
        {
          id: "drag1",
          dragValue: "3",

          isDisable: false,
          answerId: "",
          isHidden: false,
          ariaName: "3 draggable",
        },
        {
          id: "drag2",
          dragValue: "2.5",

          isDisable: false,
          answerId: "option3drag1",
          isHidden: false,
          ariaName: "2.5 draggable",
        },
        {
          id: "drag3",
          dragValue: "<p aria-hidden='true'>1.51 x 10<sup>24</sup></p>",

          isDisable: false,
          answerId: "option3drag2",
          isHidden: false,
          title: "draggable 3",
          ariaName: "1.51 multiply 10 to the power 24 draggable",
        },
        {
          id: "drag4",
          dragValue: "<p aria-hidden='true'>1.51 x 10<sup>23</sup></p>",

          isDisable: false,
          answerId: "",
          isHidden: false,
          title: "draggable 4",
          ariaName: "1.51 multiply 10 to the power 23 draggable",
        },
      ],

      dropZone: [
        {
          id: "drop1",
          classes: "static-drop-zone",
          isStatic: true,
          answerId: "",
          hidden: true,
          ariaName: "Phosphorus P (30.97 g)",

          value: "<p aria-hidden='true'>P (30.97 g)</p>",
        },
        {
          id: "drop2",
          classes: "static-drop-zone",
          isStatic: true,
          answerId: "",
          hidden: true,
          ariaName: "77.43 gram",

          value: "<p aria-hidden='true'>77.43 g</p>",
        },
        {
          id: "drop3",
          classes: "drop-zone",
          isStatic: false,
          answerId: "option3drag1",
          hidden: false,
          ariaName: "droppable zone",
          label: "Phosphorus moles droppable zone",
        },
        {
          id: "drop4",
          classes: "drop-zone",
          isStatic: false,
          answerId: "option3drag2",
          hidden: false,
          ariaName: "droppable zone",
          label: "Phosphorus Particles (Atoms or molecules) droppable zone",
        },
      ],
    },
    {
      srNo: "4",
      id: "question4",

      draggable: [
        {
          id: "drag1",
          dragValue: "10.5 g",

          isDisable: false,
          answerId: "option4drag1",
          isHidden: false,
          ariaName: "10.5 gram draggable",
        },
        {
          id: "drag2",
          dragValue: "0.097 g",

          isDisable: false,
          answerId: "",
          isHidden: false,
          ariaName: "0.097 gram draggable",
        },
        {
          id: "drag3",
          dragValue: "<p aria-hidden='true'>6.26 x 10<sup>24</sup></p>",

          isDisable: false,
          answerId: "option4drag2",
          isHidden: false,
          title: "draggable 3",
          ariaName: "6.26 multiply 10 to the power 24 draggable",
        },
        {
          id: "drag4",
          dragValue: "<p aria-hidden='true'>6.32 x 10<sup>23</sup></p>",

          isDisable: false,
          answerId: "",
          isHidden: false,
          title: "draggable 4",
          ariaName: "6.32 multiply 10 to the power 23 draggable",
        },
      ],

      dropZone: [
        {
          id: "drop1",
          classes: "static-drop-zone",
          isStatic: true,
          answerId: "",
          hidden: true,
          ariaName: "Hydrogen H (1.01 gram)",

          value: "<p aria-hidden='true'>H (1.01 g)</p>",
        },
        {
          id: "drop2",
          classes: "drop-zone",
          isStatic: false,
          answerId: "option4drag1",
          hidden: false,
          ariaName: "droppable zone",
          label: "Hydrogen Mass droppable zone",
        },
        {
          id: "drop3",
          classes: "static-drop-zone",
          isStatic: true,
          answerId: "",
          hidden: true,
          ariaName: "10.4",

          value: "<p aria-hidden='true'>10.4</p>",
        },
        {
          id: "drop4",
          classes: "drop-zone",
          answerId: "option4drag2",
          hidden: false,
          ariaName: "droppable zone",
          isStatic: false,
          label: "Hydrogen Particles (Atoms or molecules) droppable zone",
        },
      ],
    },
  ],

  imgText: [
    {
      id: "txt1",
      text: "Mass",
      hidden: true,
    },
    {
      id: "txt2",
      text: "Moles",
      hidden: true,
    },
    {
      id: "txt3",
      text: "Particles",
      hidden: true,
    },
    {
      id: "txt4",
      text: "<p aria-hidden='true'>Divide</p><p class='sr-only'>given mass divided by given molar mass equals moles</p>",
      hidden: false,
      ariaName: "given mass divided by given molar mass equals moles",
    },
    {
      id: "txt5",
      text: "<p aria-hidden='true'>Divide</p><p class='sr-only'>given particles divided by 6.02 multiply 10 power 23 equals moles</p>",
      hidden: false,
      ariaName:
        "given particles divided by 6.02 multiply 10 power 23 equals moles",
    },
    {
      id: "txt6",
      text: "<p aria-hidden='true'>Multiply</p><p class='sr-only'>given moles multiply molar mass equals mass</p>",
      hidden: false,
      ariaName: "given moles multiply molar mass equals mass",
    },
    {
      id: "txt7",
      text: "<p aria-hidden='true'>Multiply</p><p class='sr-only'>given moles multiply 6.02 multiply 10 power 23 equals particles</p>",
      hidden: false,
      ariaName:
        "given moles multiply 6.02 multiply 10 power 23 equals particles",
    },
    {
      id: "txt8",
      text: "Molar mass",
      hidden: true,
    },
    {
      id: "txt9",
      text: "6.02 x 10<sup>23</sup>",
      hidden: true,
    },
  ],
};

export default data;
