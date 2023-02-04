import mal_alu from "../assets/videos/mal_alu.mp4";
import globalDataSet from "../../app/data/data.en";
import MCQcarbon from "../assets/images/mcq/carbon.png";
import mal_carbon from "../assets/videos/mal_carbon.mp4";
import MCQsilicon from "../assets/images/mcq/slicon.png";
import MCQaluminum from "../assets/images/mcq/alumin.png";
import mal_silicon from "../assets/videos/mal_silicon.mp4";
import poster_alu from "../assets/images/mal_alufirstscreen.png";
import poster_carbon from "../assets/images/mal_carbon_firstscreen.png";
import poster_silicon from "../assets/images/mal_silicon_firstscreen.png";

const data = {
  screenData: [
    {
      id: 0,
      component: "Screen0Container",
    },
    {
      id: 1,
      component: "Screen1Container",
    },
    {
      id: 2,
      component: "Screen2Container",
    },
  ],
  buttonLabels: { ...globalDataSet.buttonLabels },
  resetLiveText: globalDataSet.resetLiveText,
  resetMsgContent: globalDataSet.resetPopupText,
  toastMsg: {
    correct: globalDataSet.correctToastMessage,
    incorrect: globalDataSet.incorrectToastMessage,
  },
  globalUsedText: {
    screen0Heading:
      "Activity for classify three elements as metals, nonmetals, or metalloids.",
    screenFeedback: "Feedback of ",
    videoPlayState: "Video is playing.",
    videoStopState: "Video is stopped.",
    helpingButton: "Help",
    helpBoxContent:
      "Classify each sample as a metal, nonmetal, or metalloid.<br>You can refer to the following table.",
    tableCaption: "Classification of elements",
  },
  startUpInfo: {
    buttonClasses: "right-arrow",
    instructionBoxContent:
      "Welcome to the chemistry lab! Today, you will classify three elements as metals, nonmetals, or metalloids by exploring three physical properties of each sample. For each element, you will test its luster (shininess), malleability (ability to bend or break), and electrical conductivity (ability to complete a circuit and successfully light up a bulb).",
  },
  hintInfo: {
    infoText: "Info",
    infoLabel: "Info",
  },
  testDescription: [
    {
      testHeading: "Test 1: Luster Test",
      description:
        "To test the luster of the samples, shine the flashlight on each one. If the sample reflects light, it has a metallic luster. If the sample does not reflect light, it has a dull luster.",
    },
    {
      testHeading: "Test 2: Malleability",
      description:
        "To test the malleability of the samples, strike each one with the hammer. If the sample bends, it is malleable. If the sample breaks, it is brittle.",
    },
    {
      testHeading: "Test 3: Electrical Conductivity",
      description:
        "To test the electrical conductivity of the samples, place each one into the open section of the circuit. If the bulb glows bright after the sample completes the circuit, the sample is highly conductive.  If the bulb glows dimly after the sample completes the circuit, the sample is semiconductive.  If the bulb does not turn on after the sample completes the circuit, the sample is not conductive.",
    },
  ],

  levelOneCompletionScreen: {
    ...globalDataSet.transitionPopup,
    content:
      "Now that you have explored the physical properties of the three samples, classify each as a metal, nonmetal, or metalloid.",
  },
  completionScreen: {
    ...globalDataSet.completionPopup,
    content: "You have successfully classified all of the samples!",
    type: "positive",
    buttonClasses: "reset-white reverse icon",
  },

  // thData: ["Metals", "Metalloids", "Nonmetals"],
  trAndTdData: [
    {
      id: 0,
      thContent: "Metals",
      tdcontent: "Luster",
      metals: "Metallic",
      metalloids: "Metallic or Dull",
      nonMetals: "Dull",
    },
    {
      id: 1,
      thContent: "Metalloids",
      tdcontent: "Malleability",
      metals: "Malleable",
      metalloids: "Malleable or Brittle",
      nonMetals: "Brittle",
    },
    {
      id: 2,
      thContent: "Nonmetals",
      tdcontent: "Electrical Conductivity",
      metals: "Highly Conductive",
      metalloids: "Semiconductive",
      nonMetals: "Not Conductive",
    },
  ],
  questionHeading: "Question: 1 of 3",
  questionHeading2:
    "Identify if the sample is a metal, nonmetal, or metalloid.",
  questionsData: [
    {
      srNo: 0,
      label: "Aluminum",
      imageSource: MCQaluminum,
      altText: "The aluminum sample is  shiny, silver, and rocklike.",
      answer: "Metal",
    },
    {
      srNo: 1,
      label: "Silicon",
      imageSource: MCQsilicon,
      altText: "The silicon sample is shiny, black, and rocklike.",
      answer: "Metalloid",
    },
    {
      srNo: 2,
      label: "Carbon",
      imageSource: MCQcarbon,
      altText: "The carbon sample is dull, black, and rocklike.",
      answer: "Nonmetal",
    },
  ],
  answerOptions: [
    {
      id: "Metal",
      disabled: false,
      text: "Metal",
      label: "Metal",
    },
    {
      id: "Nonmetal",
      disabled: false,
      text: "Nonmetal",
      label: "Nonmetal",
    },
    {
      id: "Metalloid",
      disabled: false,
      text: "Metalloid",
      label: "Metalloid",
    },
  ],
  headingScreen2:
    "Observe the positions of aluminum, carbon, and silicon on the Periodic Table.",
  periodicTableLables: [
    {
      id: 0,
      text: "Nonmetal",
      ariaLabel: "Nonmetal",
      classes: "nonmetal",
      altTextForLegend: "Yellow color for nonmetal",
    },
    {
      id: 1,
      text: "Metal",
      ariaLabel: "Metal",
      classes: "metal",
      altTextForLegend: "Sky blue color for metal",
    },
    {
      id: 2,
      text: "Metalloid",
      ariaLabel: "Metalloid",
      classes: "metalloids",
      altTextForLegend: "Pink color for metalloid",
    },
  ],
  experimentTitle:
    "Choose a sample from the lab bench, and drag it to the flashlight to test luster, to the anvil to test malleability, or to the conductivity setup to test conductivity. You must complete all three tests on all three samples before advancing to the next part of the simulation.",
  screen0AltText:
    "Three element samples and three test setups are on a lab table. The tests include a light on a stand, a hammer, and an electrical conductivity test.",
  dropExperimentSetup: [
    {
      id: 0,
      experimentName: "Luster Test",
      experimentClass: "luster",
      altText: "Luster droppable area",
      type: "image",
      label: "Luster droppable area",
      assets: [
        {
          dropCount: 1,
          category: "non-metal",
          classes: "luster-non-metal", //show img for feedbackScreen
          testFeedback: "The sample has a dull luster.",
          headingLevel1: "luster test for carbon.",
          ariaLabel:
            "The carbon sample with the light shining on it. The sample does not change.",
        },
        {
          dropCount: 2,
          category: "metal",
          classes: "luster-metal",
          testFeedback: "This sample is shiny and has a metallic luster.",
          headingLevel1: "luster test for aluminum.",
          ariaLabel:
            "The aluminum sample with the light shining on it. The sample reflects light and shimmers.",
        },
        {
          dropCount: 3,
          category: "metalloid",
          classes: "luster-metalloid",
          testFeedback: "This sample is shiny and has a metallic luster.",
          headingLevel1: "luster test for silicon.",
          ariaLabel:
            "The silicon sample with the light shining on it. The sample reflects light and shimmers.",
        },
      ],
    },
    {
      id: 1,
      experimentName: "Malleability Test",
      experimentClass: "malleability",
      altText: "malleability droppable area",
      type: "video",
      label: "Malleability droppable area",

      assets: [
        {
          dropCount: 4,
          category: "non-metal",
          classes: "malleable-non-metal",
          assetUrl: mal_carbon,
          poster: poster_carbon,
          testFeedback: "This sample breaks and is brittle.",
          headingLevel1: "malleability test for carbon",
          ariaLabel: "The carbon sample cracks when struck with the hammer.",
        },
        {
          dropCount: 5,
          category: "metal",
          classes: "malleable-metal",
          assetUrl: mal_alu,
          poster: poster_alu,
          testFeedback: "This sample bends and is malleable.",
          headingLevel1: "malleability test for aluminum",
          ariaLabel:
            "The aluminum sample flattens when struck with the hammer.",
        },
        {
          dropCount: 6,
          category: "metalloid",
          classes: "malleable-metalloid",
          assetUrl: mal_silicon,
          poster: poster_silicon,
          testFeedback: "This sample breaks and is brittle.",
          headingLevel1: "malleability test for silicon",
          ariaLabel: "The silicon sample flattens when struck with the hammer.",
        },
      ],
    },
    {
      id: 2,
      experimentName: "Electrical Conductivity Test",
      experimentClass: "electrical-conductivity",
      type: "image",
      altText: "electrical-conductivity droppable area",
      label: "Electrical-conductivity droppable area",

      assets: [
        {
          dropCount: 7,
          category: "non-metal",
          classes: "electrical-non-metal",
          testFeedback:
            "This sample does not cause the light bulb to glow at all. It is not conductive.",
          headingLevel1: "electrical conductivity test for carbon",
          ariaLabel:
            "When the carbon sample is attached to the electrical conductivity test, the light bulb does not illuminate.",
        },
        {
          dropCount: 8,
          category: "metal",
          classes: "electrical-metal",
          testFeedback:
            "This sample caused the light bulb to glow brightly. It is highly conductive.",
          headingLevel1: "electrical conductivity test for aluminum",
          ariaLabel:
            "When the aluminum sample is attached to the electrical conductivity test, the light bulb shines brightly.",
        },
        {
          dropCount: 9,
          category: "metalloid",
          classes: "electrical-metalloid",
          testFeedback:
            "This sample caused the light bulb to glow dimly. It is a semiconductor.",
          headingLevel1: "electrical conductivity test for silicon",
          ariaLabel:
            "When the silicon sample is attached to the electrical conductivity test, the light bulb shines dimly.",
        },
      ],
    },
  ],
  dragExperimentSetup: [
    {
      id: 0,
      element: "Carbon",
      elementCategory: "non-metal",
      classes: "element-carbon", //element img
      altText: "draggable Carbon",
    },
    {
      id: 1,
      element: "Aluminum ",
      elementCategory: "metal",
      classes: "element-aluminum",
      altText: "draggable Aluminum ",
    },
    {
      id: 2,
      element: "Silicon ",
      elementCategory: "metalloid",
      classes: "element-silicon ",
      altText: "draggable Silicon ",
    },
  ],
  screen3InfoPopupText:
    "Look for aluminum, carbon, and silicon in the periodic table.",
};

export default data;
