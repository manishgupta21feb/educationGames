import commonData from "../../app/data";
import globalConfig from "../../app/data";
import Nuclear from "../assets/images/07_Nuclear-Power.png";
import Medical from "../assets/images/06_Medical-Imaging.png";
import Blacklight from "../assets/images/05_Blacklight.png";
import Purple from "../assets/images/04_Purple-Light.png";
import Night from "../assets/images/03_Night-Vision-Goggles.png";
import Radar from "../assets/images/02_Radar.png";
import Cell from "../assets/images/01_Cell-Phone.png";
import Nuclear2 from "../assets/images/07_Nuclear-Power2.png";
import Medical2 from "../assets/images/06_Medical-Imaging2.png";
import Blacklight2 from "../assets/images/05_Blacklight2.png";
import Purple2 from "../assets/images/04_Purple-Light2.png";
import Night2 from "../assets/images/03_Night-Vision-Goggles2.png";
import Radar2 from "../assets/images/02_Radar2.png";
import Cell2 from "../assets/images/01_Cell-Phone2.png";

const buttonLabels = { ...globalConfig.buttonLabels };

const data = {
  ...commonData.buttonLabels,
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,
  correctToastMessage: commonData.correctToastMessage,
  mcqQuestionHeading: commonData.questionCounterString2,
  incorrectToastMessage: commonData.incorrectToastMessage,
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      " You have correctly identified the different types of waves. Continue with the simulation to compare the various types of waves.",
  },
  toastMsg: {
    correct: globalConfig.correctToastMessage,
    incorrect: globalConfig.incorrectToastMessage,
    partialCorrect: "Some of the answers are correct.",
  },
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have completed the simulation.",
  },
  infoPopupText: {
    screen1:
      "Evaluate the graph and use the ‘Wavelength and Frequency Table’ to identify the type of wave.",
    screen2:
      "Compare the graphs provided to answer the provided question. Remember that wavelength is the distance between the crests, and frequency is the number of crests per second.",
  },
  pageHeading:
    "Students will classify and sort waves according to the electromagnetic spectrum.",
  part1Ques:
    "Attempt to identify the type of wave using the graph and values provided.",
  part1SubQues: "Wavelength and Frequency table",
  popupbutton: "Show",
  popuphead1: "Type of Radiation",
  popuphead2: "Frequency Range (Hz)",
  popuphead3: "Wavelength Range",
  introductionPopupText:
    "Everything we see, and at times we don't see, is created by waves. These waves have specific wavelengths and frequencies, and they are classified on the electromagnetic spectrum (EMS). In this lab, you will be investigating the various waves on the EMS. ",
  resetDialogText: globalConfig.resetPopupText,
  resetActivityText: globalConfig.resetLiveText,
  questionHeading: globalConfig.questionCounterString,
  // All Images Data
  allImagesData: [
    Nuclear,
    Medical,
    Blacklight,
    Purple,
    Night,
    Radar,
    Cell,
    Nuclear2,
    Medical2,
    Blacklight2,
    Purple2,
    Night2,
    Radar2,
    Cell2,
  ],
  droppableAltText: [
    "droppable area 1",
    "droppable area 2",
    "droppable area 3",
    "droppable area 4",
    "droppable area 5",
    "droppable area 6",
  ],
  mcq1: [
    {
      type: " Cell Phone",
      id: "Cell_Phone",
      frames: ["Cell_Phone"],
      answer: [`Radio`],
      description: `Cell Phone`,
      imageAlt: `Cell Phone`,
      text: [
        `Attempt to identify the type of wave using the graph and values provided.`,
      ],
      waveLength: "Wavelength = 10 m",
      frequency: "Frequency = 2.4 X 10<sup>9</sup> Hz",
    },
    {
      type: "Radar",
      id: "Radar",
      answer: [`Microwave`],
      frames: ["Radar"],
      description: `Radar`,
      imageAlt: `Radar`,
      text: [
        `Attempt to identify the type of wave using the graph and values provided.`,
      ],
      waveLength: "Wavelength =  25 µm",
      frequency: "Frequency =  3.0 X 10<sup>12</sup> Hz",
    },
    {
      type: "Night Vision Goggles",
      answer: [`Infrared`],
      id: "Night_Vision_Goggles",
      frames: ["Night Vision Goggles"],
      description: `Night Vision Goggles`,
      imageAlt: `Night Vision Goggles`,
      text: [
        `Attempt to identify the type of wave using the graph and values provided.`,
      ],
      waveLength: "Wavelength =  25 µm",
      frequency: "Frequency =  3.0 X 10<sup>14</sup> Hz",
    },
    {
      type: "Purple Light",
      answer: [`Visible`],
      frames: ["Purple Light"],
      id: "Purple_Light",
      description: `Purple Light`,
      imageAlt: `Purple Light`,
      text: [
        `Attempt to identify the type of wave using the graph and values provided.`,
      ],
      waveLength: "Wavelength =  405 nm",
      frequency: "Frequency =  7.5 X 10<sup>14</sup> Hz",
    },
    {
      type: "Blacklight",
      answer: [`Ultraviolet`],
      frames: ["Blacklight"],
      id: "Blacklight",
      description: `Blacklight`,
      imageAlt: `Blacklight`,
      text: [
        `Attempt to identify the type of wave using the graph and values provided.`,
      ],
      waveLength: "Wavelength =  100 nm",
      frequency: "Frequency =  3.0 X 10<sup>15</sup> Hz",
    },
    {
      type: "Medical Imaging",
      answer: [`Xrays`],
      frames: ["Medical_Imaging"],
      id: "Medical_Imaging",
      description: `Medical Imaging`,
      imageAlt: `Medical Imaging`,
      text: [
        `Attempt to identify the type of wave using the graph and values provided.`,
      ],
      waveLength: "Wavelength =  1 nm",
      frequency: "Frequency =  3.0 X 10<sup>17</sup> Hz",
    },
    {
      type: "Nuclear Power",
      answer: [`Gamma`],
      frames: ["Nuclear Power"],
      id: "Nuclear_Power",
      description: `Nuclear Power`,
      imageAlt: `Nuclear Power`,
      text: [
        `Attempt to identify the type of wave using the graph and values provided.`,
      ],
      waveLength: "Wavelength =   1.0 x 10<sup>-12</sup>nm",
      frequency: "Frequency =  3.0 X 10<sup>24</sup> Hz",
    },
  ],
  mcq1Options: [
    {
      id: "Radio",
      text: "Radio wave",
    },
    {
      id: "Microwave",
      text: "Microwave",
    },
    {
      id: "Visible",
      text: "Visible light.",
    },
    {
      id: "Infrared",
      text: "Infrared",
    },
    {
      id: "Gamma",
      text: "Gamma ray",
    },
    {
      id: "Xrays",
      text: "X-ray",
    },
    {
      id: "Ultraviolet",
      text: "Ultraviolet",
    },
  ],
  tableTdData: [
    {
      id: 0,
      typeofradiation: "Gamma ray",
      frequencyrange: "> 10<sup>20</sup> ",
      wavelengthrange: "< 1 pm",
    },
    {
      id: 1,
      typeofradiation: "X-ray",
      frequencyrange: "10<sup>17</sup> – 10<sup>20</sup>",
      wavelengthrange: "1 nm–1 pm",
    },
    {
      id: 2,
      typeofradiation: "Ultraviolet",
      frequencyrange: "10<sup>15</sup> – 10<sup>17</sup>",
      wavelengthrange: "400 nm–1 nm",
    },
    {
      id: 3,
      typeofradiation: "Visible",
      frequencyrange: "4–7.5 x 10<sup>14</sup>",
      wavelengthrange: "750 nm–400 nm",
    },
    {
      id: 4,
      typeofradiation: "Near-infrared",
      frequencyrange: "1 x 10<sup>14</sup>–4 x 10<sup>14</sup>",
      wavelengthrange: "2.5 µm–750 nm",
    },
    {
      id: 5,
      typeofradiation: "Infrared",
      frequencyrange: "10<sup>13</sup> – 10<sup>14</sup>",
      wavelengthrange: "25 µm–2.5 µm",
    },
    {
      id: 6,
      typeofradiation: "Microwave",
      frequencyrange: "3 x 10<sup>11</sup> – 10<sup>13</sup>",
      wavelengthrange: "1 mm–25 µm",
    },
    {
      id: 7,
      typeofradiation: "Radio wave",
      frequencyrange: "< 3 x 10<sup>11</sup>",
      wavelengthrange: "> 1 mm",
    },
  ],
  globalUsedText: {
    tableCaption: "Wavelength Classification",
  },

  radioOptions: [
    {
      serialNo: 0,
      id: "Radioactive_Decay",
      text: "Radioactive Decay",
      label: "Radioactive_Decay",
      class: "radioactive",
    },

    {
      serialNo: 1,
      id: "AM_Radio_Signal",
      label: "AM_Radio_Signal",
      text: "AM Radio Signal",
      class: "amRadio",
    },
    {
      serialNo: 2,
      id: "Ultraviolet",
      label: "Ultraviolet",
      text: "Ultraviolet",
      class: "ultraviolet",
    },
    {
      serialNo: 3,
      id: "Radio_waves",
      label: "Radio waves",
      text: "Radio waves",
      class: "radiowaves",
    },
    {
      serialNo: 4,
      id: "Gamma_Ray",
      label: "Gamma Ray",
      text: "Gamma Ray",
      class: "gammaRay",
    },
    {
      serialNo: 5,
      id: "Visible_Light",
      label: "Visible Light",
      text: "Visible Light",
      class: "visibleLight",
    },
    {
      serialNo: 6,
      id: "Infrared",
      label: "Infrared",
      text: "Infrared",
      class: "infrared",
    },
    {
      serialNo: 7,
      id: "Microwave",
      label: "Microwave",
      text: "Microwave",
      class: "microwave",
    },
    {
      serialNo: 8,
      id: "Light_Bulb",
      label: "Light Bulb",
      text: "Light Bulb",
      class: "lightBulb",
    },
  ],

  radiobuttons: [
    {
      id: 0,
      text: "Radio_waves",
      label: "Radio waves",
      class: "Radio-waves",
    },
    {
      id: 1,
      text: "Gamma_Ray",
      label: "Gamma Ray",
      class: "Gamma-Ray",
    },
    {
      id: 2,
      text: "Infrared",
      label: "Infrared",
      class: "Infrared",
    },
    {
      id: 3,
      text: "Microwave",
      label: "Microwave",
      class: "Microwave",
    },
    {
      id: 4,
      text: "Ultraviolet",
      label: "Ultraviolet",
      class: "Ultraviolet",
    },
    {
      id: 5,
      text: "Visible_Light",
      label: "Visible Light",
      class: "Visible-Light",
    },
    {
      id: 6,
      text: "AM_Radio_Signal",
      label: "AM Radio Signal",
      class: "AM-Radio-Signal",
    },
    {
      id: 7,
      text: "Light_Bulb",
      label: "Light Bulb",
      class: "Light-Bulb",
    },
    {
      id: 7,
      text: "Radioactive_Decay",
      label: "Radioactive Decay",
      class: "Radioactive-Decay",
    },
  ],
  ...buttonLabels,
  dropzoneLabel: "dropzone",
  buttonNext: buttonLabels.next,
  buttonContinue: buttonLabels.continue,
  buttonInfo: buttonLabels.info,
  buttonReset: buttonLabels.reset,
  buttonFinish: buttonLabels.finish,
  droppableArea: "6 droppable area",
  checkAnswer: buttonLabels.checkAnswer,
  submitAnswer: buttonLabels.submitAnswer,
  resetDialogText: globalConfig.resetPopupText,
  resetActivityText: globalConfig.resetLiveText,
  questionHeading: globalConfig.questionCounterString,
  liveTextQ1: "The graphs are arranged in order of increasing wavelength.",
  liveTextQ2: "The graphs are arranged in order of increasing frequency.",
  liveTextQ3: "The graphs are arranged in order of increasing wavelength.",
  liveTextQ4: "The graphs are arranged in order of increasing frequency.",
  dropLiveText: `-1- is dropped at position -2-.`,

  wavelengthData1: [
    {
      type: "Nuclear",
      elementName: "Gamma ray",
      shortName: "Nuclear",
      dragName: "Gamma ray",
    },
    {
      type: "Medical",
      elementName: "X ray",
      shortName: "Medical",
      dragName: "X ray",
    },
    {
      type: "Blacklight",
      elementName: "Ultraviolet",
      shortName: "Blacklight",
      dragName: "Ultraviolet",
    },
    {
      type: "Purple",
      elementName: "Visible light",
      shortName: "Purple",
      dragName: "Visible light.",
    },
  ],
  wavelengthData2: [
    {
      type: "Radar",
      elementName: "Microwave",
      shortName: "Radar",
      dragName: "Microwave",
    },
    {
      type: "Cell",
      elementName: "Radio Wave",
      shortName: "Cell",
      dragName: "Radio Wave",
    },
    {
      type: "Night",
      elementName: "Infrared",
      shortName: "Night",
      dragName: "Infrared",
    },
  ],

  questionData: [
    {
      id: 1,
      paragraph1: "Place the graphs in order of increasing wavelength.",
      desc: "Increasing wavelength.",
      correctSequence: ["Nuclear", "Medical", "Blacklight", "Purple"],
    },
    {
      id: 2,
      paragraph1: "Place the graphs in order of increasing frequency",
      desc: "Increasing frequency.",
      correctSequence: ["Purple", "Blacklight", "Medical", "Nuclear"],
    },
    {
      id: 3,
      paragraph1: "Place the graphs in order of increasing wavelength.",
      desc: "Increasing wavelength.",
      correctSequence: ["Night", "Radar", "Cell"],
    },

    {
      id: 4,
      paragraph1: "Place the graphs in order of increasing frequency",
      desc: "Increasing frequency.",
      correctSequence: ["Cell", "Radar", "Night"],
    },
    {
      id: 5,
      paragraph1: "Which wave is most dangerous to humans?",
      desc: "",
      answer: "Radioactive_Decay",
      answerOptions: ["AM_Radio_Signal", "Light_Bulb", "Radioactive_Decay"],
    },
    {
      id: 6,
      paragraph1: "Which wave is least dangerous to humans?",
      desc: "",
      answer: "AM_Radio_Signal",
      answerOptions: ["AM_Radio_Signal", "Light_Bulb", "Radioactive_Decay"],
    },
    {
      id: 7,
      paragraph1:
        "Which of the following waves would be best for food sterilization?",
      desc: "",
      answer: "Ultraviolet",
      answerOptions: ["Microwave", "Ultraviolet", "Visible_Light"],
    },
    {
      id: 8,
      paragraph1: "Which would be best for long-distance communication?",
      desc: "",
      answer: "Radio_waves",
      answerOptions: ["Radio_waves", "Gamma_Ray", "Infrared"],
    },
  ],
  radioQuestionsData: [
    {
      id: 1,
      paragraph1: "Which wave is most dangerous to humans?",
      desc: "",
      answer: "Radioactive_Decay",
      answerOptions: ["AM_Radio_Signal", "Light_Bulb", "Radioactive_Decay"],
    },
    {
      id: 2,
      paragraph1: "Which wave is least dangerous to humans?",
      desc: "",
      answer: "AM_Radio_Signal",
      answerOptions: ["AM_Radio_Signal", "Light_Bulb", "Radioactive_Decay"],
    },
    {
      id: 3,
      paragraph1:
        "Which of the following waves would be best for food sterilization?",
      desc: "",
      answer: "Ultraviolet",
      answerOptions: ["Microwave", "Ultraviolet", "Visible_Light"],
    },
    {
      id: 4,
      paragraph1: "Which would be best for long-distance communication?",
      desc: "",
      answer: "Radio_waves",
      answerOptions: ["Radio_waves", "Gamma_Ray", "Infrared"],
    },
  ],

  radioOptions: [
    {
      serialNo: 0,
      id: "Radioactive_Decay",
      text: "Radioactive Decay",
      label: "Radioactive_Decay",
      class: "radioactive",
    },

    {
      serialNo: 1,
      id: "AM_Radio_Signal",
      label: "AM_Radio_Signal",
      text: "AM Radio Signal",
      class: "amRadio",
    },
    {
      serialNo: 2,
      id: "Ultraviolet",
      label: "Ultraviolet",
      text: "Ultraviolet",
      class: "ultraviolet",
    },
    {
      serialNo: 3,
      id: "Radio_waves",
      label: "Radio waves",
      text: "Radio waves",
      class: "radiowaves",
    },
    {
      serialNo: 4,
      id: "Gamma_Ray",
      label: "Gamma Ray",
      text: "Gamma Ray",
      class: "gammaRay",
    },
    {
      serialNo: 5,
      id: "Visible_Light",
      label: "Visible Light",
      text: "Visible Light",
      class: "visibleLight",
    },
    {
      serialNo: 6,
      id: "Infrared",
      label: "Infrared",
      text: "Infrared",
      class: "infrared",
    },
    {
      serialNo: 7,
      id: "Microwave",
      label: "Microwave",
      text: "Microwave",
      class: "microwave",
    },
    {
      serialNo: 8,
      id: "Light_Bulb",
      label: "Light Bulb",
      text: "Light Bulb",
      class: "lightBulb",
    },
  ],

  wavelengthList: {
    title: "Wavelength Slider",
    list3: "list3",
    list4: "list4",
    listitems3: [
      { id: "1", value: "Wavelength 1", label: "<" },
      { id: "2", value: "Wavelength 2", label: "<" },
      { id: "3", value: "Wavelength 3", label: "<" },
    ],
    listitems4: [
      { id: "1", value: "Wavelength 1", label: "<" },
      { id: "2", value: "Wavelength 2", label: "<" },
      { id: "3", value: "Wavelength 3", label: "<" },
      { id: "4", value: "Wavelength 4", label: "<" },
    ],
  },
  frequencyList: {
    title: "Frequency Slider",
    listitems3: [
      { id: "1", value: "Frequency 1", label: ">" },
      { id: "2", value: "Frequency 2", label: ">" },
      { id: "3", value: "Frequency 3", label: ">" },
    ],
    listitems4: [
      { id: "1", value: "Frequency 1", label: ">" },
      { id: "2", value: "Frequency 2", label: ">" },
      { id: "3", value: "Frequency 3", label: ">" },
      { id: "4", value: "Frequency 4", label: ">" },
    ],
  },
};

export default data;
