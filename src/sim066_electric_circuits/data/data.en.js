import globalData from "../../app/data/data.en";
const buttonLabels = { ...globalData.buttonLabels };

const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: globalData.buttonLabels.start,
  buttonContinueLabel: globalData.buttonLabels.start,
  content: [""],
};

const infoString = [
  "Place the fans, switch, and battery in the correct order to make the designated circuit.",
];

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
      content: infoString,
    },
    correct: {
      ...info,
      buttonContinueText: globalData.buttonLabels.continue,
      buttonContinueLabel: globalData.buttonLabels.continue,
    },
  },

  // questionHeading: "Question -1- of 4.",

  transitionPopup: {
    ...globalData.transitionPopup,
    content: "",
  },

  completionPopup: {
    ...globalData.completionPopup,
    content: "Congratulations! You have successfully completed the simulation.",
  },
  ...buttonLabels,

  resetText: [
    {
      type: "reset",
      resetButtonText: globalData.buttonLabels.yes,
      buttonContinueText: globalData.buttonLabels.no,
      content: globalData.resetPopupText,
    },
  ],
  mainScreenText: "Select a circuit you want to design.",
  rightMsg:
    "You placed the items in the correct spots on the circuit! Well done!",
  wrongMsg:
    "Please review the locations of the items in your circuit; there is something incorrect.",
  // submitAnswer: "Submit Answer",
  buttonFinish: globalData.buttonLabels.finish,
  buttonNext: globalData.buttonLabels.next,
  buttonClose: globalData.buttonLabels.close,
  reset: globalData.buttonLabels.reset,
  info: globalData.buttonLabels.info,
  continueButton: globalData.buttonLabels.continue,
  resetLiveText: globalData.resetLiveText,
  screen1Heading:
    "Students experiment with parallel and series circuits to differentiate between them.",
  check: "Check",

  initialInfoContent: [
    {
      id: "series",
      heading: "Series circuit",
      img: "series-circuit",
      imageAlt:
        "A black line drawing of a rectangle with rounded corners and an opening on the left side is a series circuit with 3 resistors and 4 nodes.",
      content:
        "Current flows in one path and is the same through each component (R1, R2, R3).",
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
      heading: "Parallel circuit",
      img: "parallel-circuit",
      imageAlt:
        "A black line drawing of a rectangle with rounded corners, opening on left side, and 3 lines across is a parallel circuit with 3 resistors and 8 nodes.",
      content:
        "Current flows through several paths. The amount of current depends on the resistance of each resistor (R1, R2, R3).",
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

  initialInfoText: "Let's build some circuits.",

  mainScreenContent: [
    {
      id: "series",
      img: "series-circuit",
      imageAlt:
        "A black line drawing of a rectangle with rounded corners and an opening on the left side is a circuit with 3 resistors and 4 nodes.",
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
      imageAlt:
        "A black line drawing of a rectangle with rounded corners, opening on left side, and 3 lines across is a circuit with 3 resistors and 8 nodes.",
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
      id: "fan",
      label: "Fan",
      altText: "fan",
      text: "Fan",
      maxDrops: 2,
      totalDrops: 0,
      circuitCompleted: "",
    },
    {
      srNo: 2,
      id: "wire",
      label: "Wire",
      altText: "wire",
      maxDrops: 4,
      totalDrops: 0,
    },
    {
      srNo: 3,
      id: "battery",
      label: "Battery",
      altText: "battery",
      maxDrops: 1,
      totalDrops: 0,
    },
    {
      srNo: 4,
      id: "switch",
      label: "Switch",
      altText: "switch",
      maxDrops: 1,
      totalDrops: 0,
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
    { id: "fan", class: "fan" },
    { id: "switch", class: "switch" },
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

  seriesCircuit: "Attempt to design a series circuit.",
  parallelCircuit: "Attempt to design a parallel circuit.",

  leftCircuitComplete: ["dropzone1", "dropzone5", "dropzone6", "dropzone7"],
  rightCircuitComplete: ["dropzone2", "dropzone3", "dropzone4", "dropzone7"],
  onDropText: "-1- dropped at -2-",
  seriesFormedInsteadOfParallel:
    "<strong>Close, but try again!<br />You made a complete circuit, but this one is in series. That means it has only one path for the electricity to flow through.  A parallel circuit has several complete paths that the electricity flows through.</strong>",
  parallelFormedInsteadOfSeries:
    "<strong>You made a complete circuit, but this one is in parallel. That means it has more than one path for the electricity to flow through. A series circuit has only one path that the electricity can flow through.</strong>",
  nodeLiveTextOne: " between node one and two",
  nodeLiveTextTwo: " between node two and three",
  nodeLiveTextThree: " between node three and four",
  nodeLiveTextFour: " between node four and five",
  nodeLiveTextFive: " between node five and six",
  nodeLiveTextSix: " between node six and one",
  nodeLiveTextSeven: " between node five and two",
  clearButtonLiveText: "circuit board is cleared",

  circuitAlt:
    "A green circuit board with 6 white pegs inserted in an evenly spaced manner with 3 along the top and 3 along the bottom",
  fullCircuitAlt:
    "A green circuit board with 6 white pegs and blue wire around the perimeter, -1-, -2-, -3-, -4-",
  leftCircuitAlt:
    "A green circuit board with 6 white pegs and blue wire around the perimeter, a -1- at the left ,a -2- at the top, a -3- at the right, a -4- at the bottom",
  rightCircuitAlt:
    "A green circuit board with 6 white pegs and blue wire around the perimeter, a -1- at the left ,a -2- at the top, a -3- at the right, a -4- at the bottom",
  // parallelAlt:
  //   "A green circuit board with 6 white pegs and blue wire around the perimeter, a -1- at the left , -2-, a -3- at the right, -4-, 1 wire and -5- across middle",
  parallelAlt:
    "A green circuit board with 6 white pegs and blue wire around the perimeter, -1- , -2-, -3-, -4-, 1 wire and -5- across middle",
  left: "a -1- at the left",
  right: "a -1- at the right",
  topAltOne: "2 -1-s at the top",
  topAltTwo: "a -1- and a -2- at the top",
  bottomAltOne: "2 -1-s at the bottom ",
  bottomAltTwo: "a -1- and a -2- at the bottom",
  whiteFan: "rotating white fan",
  topWithoutWire: "a -1- at the top",
  bottomWithoutWire: "a -1- at the bottom",

  fanText: "fan",
  wireText: "wire",
};

export default RawTextData;
