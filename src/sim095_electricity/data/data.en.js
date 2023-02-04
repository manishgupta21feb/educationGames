import globalData from "../../app/data/data.en";
const buttonLabels = { ...globalData.buttonLabels };
import imgUrl from "../assets/images/startScreen.png";
import buzzer from "../assets/audios/Buzzer.mp3";

const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: globalData.buttonLabels.start,
  buttonContinueLabel: globalData.buttonLabels.start,
  content: [""],
};

const RawTextData = {
  dialogData: {
    start: {
      ...info,
    },
    info: {
      ...info,
      header: "",
      buttonContinueText: globalData.buttonLabels.close,
      buttonContinueLabel: globalData.buttonLabels.close,
      buttonClasses: "",
    },
    correct: {
      ...info,
      buttonContinueText: globalData.buttonLabels.continue,
      buttonContinueLabel: globalData.buttonLabels.continue,
    },
  },

  resetText: [
    {
      type: "reset",
      resetButtonText: globalData.buttonLabels.yes,
      buttonContinueText: globalData.buttonLabels.no,
      content: globalData.resetPopupText,
    },
  ],
  seriesInfoText:
    "Electricity in series circuits flows in one path, so the path is not split. Answer each question to build a series circuit.",
  parallelInfoText:
    "Move the materials to create a parallel circuit. Then, test the parallel circuit you built.",
  mainScreenInfoText:
    "Choose one of the circuits to learn about how some are different and how some are similar.",
  mainScreenText: "Choose between Series or Parallel to begin.",
  rightMsgSeries:
    "Great job! You did it! Can you make it work with any different materials?",
  levelOneScreenText:
    "You did it! Can you make it work with any different materials?",
  rightMsgOnlyBattery:
    "<p>Good job!</p><p>The circuit is a parallel circuit with two batteries connected in parallel.You can try with two bulbs or move on.</p>",
  wrongMsgSeries:
    "<p>Not quite right. Try again.</p><p>Remember that in any circuit, electricity has to flow in a complete path from negative to positive.</p>",
  rightMsg: "Good job!",
  wrongMsg:
    "Please review the locations of the items in your circuit; there is something incorrect.",

  buttonFinish: globalData.buttonLabels.finish,
  buttonNext: globalData.buttonLabels.next,
  buttonClose: globalData.buttonLabels.close,
  reset: globalData.buttonLabels.reset,
  info: globalData.buttonLabels.info,
  continueButton: globalData.buttonLabels.continue,
  resetLiveText: globalData.resetLiveText,
  screen1Heading:
    "In this simulation, the learner will explore how electric circuits are created.",
  check: "Check",

  initialInfoContent: [
    {
      id: "img1",
      path: imgUrl,
      alt: "A city street lit up at night with electric lighting; there are lampposts on either side of the street and lights on in the windows",
      txt: "<p>No matter how complex electric circuits are, there are some basic rules they all follow.</p><ol><li>Electricity flows in a closed path.</li><li>Certain materials conduct electricity, while others do not.</li><li>Electrical energy can be transformed into light, heat, sound, or movement.</li></ol><p class='second-p'>In this activity, you will build both a series circuit and a parallel circuit.  You will notice what they have in common and what makes them different.</p>",
    },
  ],
  sounds: [
    {
      id: "BUZZER",
      src: buzzer,
      loop: true,
    },
  ],

  mainScreenContent: [
    {
      id: "series",
      img: "series-circuit",
      imageAlt: "A schematic diagram of a series circuit",
      label: "Series circuit",
      labels: [
        { id: "1", label: "1" },
        { id: "2", label: "R1" },
        { id: "3", label: "2" },
        { id: "4", label: "R2" },
        { id: "5", label: "3" },
        { id: "6", label: "R3" },
        { id: "7", label: "4" },
      ],
    },
    {
      id: "parallel",
      img: "parallel-circuit",
      imageAlt: "A schematic diagram of a parallel circuit",
      label: "Parallel circuit",
      labels: [
        { id: "01", label: "1" },
        { id: "02", label: "2" },
        { id: "03", label: "3" },
        { id: "04", label: "4" },
        { id: "05", label: "5" },
        { id: "06", label: "6" },
        { id: "07", label: "7" },
        { id: "08", label: "8" },
        { id: "09", label: "R1" },
        { id: "010", label: "R2" },
        { id: "011", label: "R3" },
      ],
    },
  ],

  seriesLabels: [
    { id: "1", label: "1" },
    { id: "2", label: "R1" },
    { id: "3", label: "2" },
    { id: "4", label: "R2" },
    { id: "5", label: "3" },
    { id: "6", label: "R3" },
    { id: "7", label: "4" },
  ],

  parallelLabels: [
    { id: "1", label: "1" },
    { id: "2", label: "R1" },
    { id: "3", label: "2" },
    { id: "4", label: "R2" },
    { id: "5", label: "3" },
    { id: "6", label: "R3" },
    { id: "7", label: "4" },
    { id: "8", label: "5" },
    { id: "9", label: "6" },
    { id: "10", label: "7" },
    { id: "11", label: "8" },
  ],

  draggables: [
    {
      srNo: 1,
      id: "battery",
      label: "Battery",
      altText: "Battery draggable",
      maxDrops: 1,
      totalDrops: 0,
    },

    {
      srNo: 2,
      id: "wire",
      label: "Wire",
      altText: "Wire draggable",
      maxDrops: 7,
      totalDrops: 0,
    },
    {
      srNo: 3,
      id: "bulb",
      label: "Bulb",
      altText: "Bulb draggable",
      text: "Bulb",
      maxDrops: 2,
      totalDrops: 0,
      circuitCompleted: "",
    },
  ],

  seriesDraggable: [
    {
      srNo: 1,
      id: "battery",
      label: "Battery",
      altText: "Battery draggable",
      maxDrops: 1,
      totalDrops: 0,
    },
    {
      srNo: 2,
      id: "wire",
      label: "Wire",
      altText: "Wire draggable",
      maxDrops: 7,
      totalDrops: 0,
    },
    {
      srNo: 3,
      id: "fan",
      label: "Fan",
      altText: "Fan draggable",
      text: "Fan",
      maxDrops: 2,
      totalDrops: 0,
      circuitCompleted: "",
    },
    {
      srNo: 4,
      id: "bell",
      label: "Bell",
      altText: "Bell draggable",
      text: "Bell",
      maxDrops: 2,
      totalDrops: 0,
      circuitCompleted: "",
    },
    {
      srNo: 5,
      id: "bulb",
      label: "Bulb",
      altText: "Bulb draggable",
      text: "Bulb",
      maxDrops: 2,
      totalDrops: 0,
      circuitCompleted: "",
    },
  ],

  dropzones: [
    {
      srNo: 1,
      id: "dropzone1",
      label: "DropZone1 between node one and two",
      altText: "DropZone1",
      name: "droppedAtOne",
      dragType: "",
    },
    {
      srNo: 2,
      id: "dropzone2",
      label: "DropZone2 between node two and three",
      altText: "DropZone2",
      name: "droppedAtTwo",
      dragType: "",
    },
    {
      srNo: 3,
      id: "dropzone3",
      label: "DropZone3 between node three and four",
      altText: "DropZone3",
      name: "droppedAtThree",
      dragType: "",
    },
    {
      srNo: 4,
      id: "dropzone4",
      label: "DropZone4 between node four and five",
      altText: "DropZone4",
      name: "droppedAtFour",
      dragType: "",
    },
    {
      srNo: 5,
      id: "dropzone5",
      label: "DropZone5 between node five and six",
      altText: "DropZone5",
      name: "droppedAtFive",
      dragType: "",
    },
    {
      srNo: 6,
      id: "dropzone6",
      label: "DropZone6 between node six and one",
      altText: "DropZone6",
      name: "droppedAtSix",
      dragType: "",
    },
    {
      srNo: 7,
      id: "dropzone7",
      label: "DropZone7 between node five and two",
      altText: "DropZone7",
      name: "droppedAt",
      dragType: "",
    },
  ],
  dropZoneImages: [
    {
      bulbs: {
        bulbsHori: [
          { id: "bulb_hori", class: "bulb_hori" },
          { id: "bulb_hori_on", class: "bulb_hori_on" },
          { id: "bulb_hori_on_brighter", class: "bulb_hori_on_brighter" },
        ],
        bulbsVerticle: [
          { id: "bulb_verticle", class: "bulb_verticle" },
          { id: "bulb_verticle_on", class: "bulb_verticle_on" },
          {
            id: "bulb_verticle_on_brighter",
            class: "bulb_verticle_on_brighter",
          },
        ],
      },
    },

    { id: "fan", class: "fan" },
    { id: "bell", class: "bell" },

    { id: "wire", class: "wire" },
    { id: "battery", class: "battery" },
  ],

  pins: [
    { id: "pin1", class: "pin1" },
    { id: "pin2", class: "pin2" },
    { id: "pin3", class: "pin3" },
    { id: "pin4", class: "pin4" },
    { id: "pin5", class: "pin5" },
    { id: "pin6", class: "pin6" },
  ],

  seriesCircuit:
    "Build a series circuit with the materials you have chosen. Once you have moved the materials into what you think will work, test the circuit by clicking Check.",
  parallelCircuit:
    "<p>Parallel circuits also must have a complete flow of electricity. In a parallel circuit, the flow of electricity is split between multiple outputs, in this case light bulbs.</p><p>Build a circuit with multiple light bulbs in parallel.</p>",

  leftCircuitComplete: ["dropzone1", "dropzone5", "dropzone6", "dropzone7"],
  rightCircuitComplete: ["dropzone2", "dropzone3", "dropzone4", "dropzone7"],
  onDropText: "-1- dropped at -2-",
  correctToastMessage: globalData.correctToastMessage,
  incorrectToastMessage: globalData.incorrectToastMessage,
  seriesFormedInsteadOfParallel:
    "<strong>Close, but try again!<br /></strong>You made a complete circuit, but this one is in series. That means it has only one path for the electricity to flow through.  A parallel circuit has several complete paths that the electricity flows through.",
  parallelWrongText:
    "<strong>Try again!<br /></strong>A parallel circuit still requires a complete path for the electricity to run. Check that you have a complete path from the battery through the lights and back to the battery.",
  parallelFormedInsteadOfSeries:
    "<strong>Not quite right. Try again!<br /></strong>Remember that in any circuit, electricity has to flow in a complete path from negative to positive.",

  nodeLiveTextOne: " between node one and two",
  nodeLiveTextTwo: " between node two and three",
  nodeLiveTextThree: " between node three and four",
  nodeLiveTextFour: " between node four and five",
  nodeLiveTextFive: " between node five and six",
  nodeLiveTextSix: " between node six and one",
  nodeLiveTextSeven: " between node five and two",
  clearButtonLiveText: "circuit board is cleared",
  buttonLabels: { ...globalData.buttonLabels },

  mcqQuestion: [
    {
      id: "question1",
      answer: "battery",
      text: "We need a power source. Choose the power source for the circuit.",
      altText:
        "A blank green circuit board with six metal poles is above a brown table.",
      radioOptions: [
        {
          id: "battery",
          text: "Battery",
        },
        {
          id: "copperwire",
          text: "Wire",
        },
        {
          id: "magnet",
          text: "Magnet",
        },
      ],
    },
    {
      id: "question2",
      answer: "wire",
      text: "Now, the electricity needs to move from the power source toward the output. Which material works best to move electricity?",
      altText:
        "A blank green circuit board with six metal poles is above a brown table. A battery is on the table.",
      radioOptions: [
        {
          id: "wire",
          text: "Copper wire",
        },
        {
          id: "plastic",
          text: "Plastic wire",
        },
        {
          id: "wood",
          text: "Wood sticks",
        },
      ],
    },
    {
      id: "question3",
      answer: "bulbbellfan",
      text: "What would you like the electricity to turn into?",
      altText:
        "A blank green circuit board with six metal poles is above a brown table. A battery and copper wire are on the table.",
      radioOptions: [
        {
          id: "bulb",
          text: "Light",
        },
        {
          id: "bell",
          text: "Sound",
        },
        {
          id: "fan",
          text: "Movement",
        },
      ],
    },
  ],

  circuitAlt: "A blank green circuit board with six metal poles",
  fullCircuitAlt:
    "A green circuit board with blue wire around the perimeter with six metal poles, -1-, -2-, -3-, -4-",
  leftCircuitAlt:
    "A green circuit board with blue wire around the perimeter with six metal poles, a -1- at the left ,a -2- at the top, a -3- at the right, a -4- at the bottom",
  rightCircuitAlt:
    "A green circuit board with blue wire around the perimeter with six metal poles, a -1- at the left ,a -2- at the top, a -3- at the right, a -4- at the bottom",

  parallelAlt:
    "A green circuit board with blue wire around the perimeter with six metal poles, 1 wire and -5- across middle, -1- , -2-, -3-, -4-,",
  left: "a -1- at the left",
  right: "a -1- at the right",
  topAltOne: "2 -1-s at the top",
  topAltTwo: "a -1- and a -2- at the top",
  bottomAltOne: "2 -1-s at the bottom ",
  bottomAltTwo: "a -1- and a -2- at the bottom",
  whiteFan: "rotating white fan",
  ringingBell: "ringing bell",
  glowBulb: "glowing bulb",
  topWithoutWire: "a -1- at the top",
  bottomWithoutWire: "a -1- at the bottom",

  fanText: "Fan",
  bulbText: "Bulb",
  bellText: "Bell",
  wireText: "wire",
};

export default RawTextData;
