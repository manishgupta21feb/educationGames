import globalConfig from "../../app/data";

const data = {
  correctToastMsg: globalConfig.correctToastMessage,
  incorrectToastMsg: globalConfig.incorrectToastMessage,
  equationsData: [
    {
      srNo: 1,
      id: "question1",
      questionText:
        "One of the recipes has powdered sugar, which usually takes 2 minutes to dissolve. What can she use to get the powdered sugar to dissolve more quickly? ",
      questionSubText: "",
      answer: ["hotplate", "spoon"],
    },
    {
      srNo: 2,
      id: "question2",
      questionText:
        "A customer complains that his drink is not sweet enough. Lily attempts to add more sugar, but it won’t dissolve into the drink. What can Lily use to create a sweeter drink? ",
      questionSubText: "",
      answer: ["hotplate"],
    },
    {
      srNo: 3,
      id: "question3",
      questionSubText: "What can Lily use to speed up this process?",
      questionText:
        "Lily is given the following instructions by a customer to make her drink:",
      alldata: [
        { id: "item1", label: "Warm up the coffee." },
        { id: "item2", label: "Place 3 sugar cubes in the coffee." },
        {
          id: "item3",
          label: "Stir the coffee until the sugar is completely dissolved.",
        },
      ],

      answer: ["mortar"],
    },
    {
      srNo: 4,
      id: "question4",
      questionText:
        "A customer complains that her carbonated drink is losing all of its carbonation very quickly, and she would like a new one. What can Lily use to ensure that the carbonation stays in the beverage longer?",
      questionSubText: "",
      answer: ["icecube"],
    },
    {
      srNo: 5,
      id: "question5",
      questionSubText:
        "What can Lily use to make this drink as quickly as possible?",
      questionText:
        "Lily is given the following list of ingredients to make a drink:",
      alldata: [
        { id: "item1", label: "Vanilla syrup" },
        { id: "item2", label: "Sugar cubes" },
        {
          id: "item3",
          label: "Coffee",
        },
        {
          id: "item4",
          label: "Milk",
        },
      ],

      answer: ["hotplate", "mortar", "spoon"],
    },
  ],

  equationOptions: [
    {
      id: "hotplate",
      disabled: false,
      text: "Hot plate",
      label: "Hot plate",
    },
    {
      id: "mortar",
      disabled: false,
      text: "Mortar and pestle",
      label: "Mortar and Pestle",
    },

    {
      id: "icecube",
      disabled: false,
      text: "Ice cube",
      label: "Ice cubes",
    },
    {
      id: "spoon",
      disabled: false,
      text: "Spoon",
      label: "Spoon",
    },
  ],

  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  resetPopupText: globalConfig.resetPopupText,
  buttonLabels: { ...globalConfig.buttonLabels },
  warningBoxHeader: globalConfig.incorrectToastMessage,

  imageAlt:
    "A coffee shop counter with a hot plate, mortar and pestle, tray of ice cubes, and spoon on it; two people sit at a table in the background having coffee",
 
  activityHeading:
    "Students will demonstrate understanding of rates of solubility by determining which factors will alter the solubility according to the presented scenario. ",

  infoContent:
    "Read the scenario again, and think about the factors that increase and decrease the rate of solubility. Then, attempt to identify the equipment needed to modify the rate of solubility according to the scenario. Remember, some scenarios will require more than one piece of equipment.",
  instructionBoxContent: [
    "Lily is working at a coffee shop, and she is trying to develop techniques to make the drinks more quickly.",
    "The rate of solubility can be modified using various techniques. In this simulation, you will read the scenario and determine the best piece, or pieces, of equipment to use to create the desired rate of solubility.",
  ],

  completionScreen: {
    ...globalConfig.completionPopup,
    content:
      "You have correctly identified the equipment needed to modify the rate of solubility for all of the situations.",
  },
};

export default data;
