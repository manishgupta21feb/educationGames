import commonData from "../../app/data/data.en";
import globalCommonData from "../../app/data/data.en";

const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  buttonLabels: { ...commonData.buttonLabels },
  startUpInfo: {
    buttonContinueText: "Start",
    buttonContinueLabel: "Start",
    instructionBoxContent:
      "Welcome to the Biology Lab! Today, you will identify some basic characteristics in specimens from different organisms.",
  },
  mcqScreenHeading:
    "Based on your microscope observations, you have gathered the following data about different organisms. Use it to answer the questions. ",
  buttonNo: "No",
  buttonYes: "Yes",
  buttonClose: "Close",
  buttonInfo: "Info",
  buttonReset: "Reset",
  resetMsgContent: "Are you sure you want to reset?",
  mcqData: {
    tableSummary: "Information about different specimens",
    heading: ["", "Leaf", "Bacteria", "Amoeba", "Human (cheek cells)"],
    tableData: [
      {
        thcontent: "Unicellular or Multicellular",
        leaf: "Multicellular",
        bacteria: "Unicellular",
        amoeba: "Unicellular",
        human: "Multicellular",
      },
      {
        thcontent: "Prokaryotic or Eukaryotic",
        leaf: "Eukaryotic",
        bacteria: "Prokaryotic",
        amoeba: "Eukaryotic",
        human: "Eukaryotic",
      },
    ],
  },
  mcqQuestionData: [
    {
      id: "mcq1",
      question: "Do any of the organisms have the same two characteristics?",
      radiobuttons: [
        {
          id: "rbsm1",
          value: "Yes",
          text: "Yes",
          label: "Yes",
        },
        {
          id: "rbsm2",
          value: "No",
          text: "No",
          label: "No",
        },
      ],
      answer: "Yes",
    },
    {
      id: "mcq2",
      question: "Which two organisms have the same basic characteristics?",
      radiobuttons: [
        {
          id: "rbsmm1",
          value: "Leaf and Bacteria",
          text: "Leaf and Bacteria",
          label: "Leaf and Bacteria",
        },
        {
          id: "rbsmm2",
          value: "Bacteria and Amoeba",
          text: "Bacteria and Amoeba",
          label: "Bacteria and Amoeba",
        },
        {
          id: "rbsmm3",
          value: "Amoeba and Human",
          text: "Amoeba and Human",
          label: "Amoeba and Human",
        },
        {
          id: "rbsmm4",
          value: "Leaf and Human",
          text: "Leaf and Human",
          label: "Leaf and Human",
        },
      ],
      answer: "Leaf and Human",
    },
    {
      id: "mcq3",
      question:
        "Humans and plants are both complex, multicellular, eukaryotic organisms. One major difference between them is how they obtain energy. Plants are producers that create their own food from the Sun's energy, while animals (including humans) must consume energy from other organisms. <br><br>When discussing basic organism characteristics, organisms can be identified as being autotrophic or heterotrophic. Autotrophs create their own food, while heterotrophs obtain energy by consuming other organisms. Based on this information, determine if plants and humans are autotrophic or heterotrophic.",
      radiobuttons: [
        {
          id: "rbsmmm1",
          value: "Plant: Autotrophic Human: Autotrophic",
          text: "Plant: Autotrophic <br> Human: Autotrophic",
          label: "Plant: Autotrophic Human: Autotrophic",
        },
        {
          id: "rbsmmm2",
          value: "Plant: Heterotrophic Human: Heterotrophic",
          text: "Plant: Heterotrophic <br> Human: Heterotrophic",
          label: "Plant: Heterotrophic Human: Heterotrophic",
        },
        {
          id: "rbsmmm3",
          value: "Plant: Autotrophic Human: Heterotrophic",
          text: "Plant: Autotrophic <br> Human: Heterotrophic",
          label: "Plant: Autotrophic Human: Heterotrophic",
        },
        {
          id: "rbsmmm4",
          value: "Plant: Heterotrophic Human: Autotrophic",
          text: "Plant: Heterotrophic <br> Human: Autotrophic",
          label: "Plant: Heterotrophic Human: Autotrophic",
        },
      ],
      answer: "Plant: Autotrophic Human: Heterotrophic",
    },
  ],
  buttonNext: "Next",
  incorrectToastMessage: "Not quite right!",
  correctToastMessage: "That's right!",
  completionScreen: {
    ...globalCommonData.completionPopup,
    content:
      "You have successfully identified the basic characteristics of organisms!",
  },
  resetLiveText: globalCommonData.resetLiveText,
  levelOneCompletionScreen: {
    ...globalCommonData.transitionPopup,
    content:
      "You have successfully identified two of the basic characteristics of different organisms. Advance to the next screen to learn about the last basic characteristic.",
  },
  microscopicView: "View under microscope",
  buttonLabel: [
    {
      id: "leaf",
      value: "Leaf",
      disabled: false,
      text: "Leaf",
      label: "Leaf",
      imageMicroscopicText:
        "A pop-out circle of the magnified leaf shows multiple, clearly defined cells all next to each other like bricks. Dark circles are seen in each cell.",
      imageAltbutton: "A leaf sample is under the lens of the microscope.",
      questionData: [
        {
          id: "mcq1",
          question:
            "Is this organism sample made up of one cell or multiple cells?",
          radiobuttons: [
            {
              id: "rbs1",
              value: "One cell",
              text: "One cell",
              label: "One cell",
            },
            {
              id: "rbs2",
              value: "Multiple cells",
              text: "Multiple cells",
              label: "Multiple cells",
            },
          ],
          answer: "Multiple cells",
        },
        {
          id: "mcq2",
          question:
            'The prefix <i>uni-</i> means "one," and the prefix <i>multi-</i> means "many." Based on this information, do you believe this sample is unicellular or multicellular?',
          radiobuttons: [
            {
              id: "rbss1",
              value: "Unicellular",
              text: "Unicellular",
              label: "Unicellular",
            },
            {
              id: "rbss2",
              value: "Multicellular",
              text: "Multicellular",
              label: "Multicellular",
            },
          ],
          answer: "Multicellular",
        },
        {
          id: "mcq3",
          question:
            "Eukaryotic cells hold genetic material in a nucleus. Prokaryotic cells do not have a nucleus. The nucleus is so important that it can be seen through the microscope as a solid, dark circle in the cell. Do you observe a nucleus in this sample?",
          radiobuttons: [
            {
              id: "rb1",
              value: "Yes",
              text: "Yes",
              label: "Yes",
            },
            {
              id: "rb2",
              value: "No",
              text: "No",
              label: "No",
            },
          ],
          answer: "Yes",
        },
        {
          id: "mcq4",
          question: "Therefore, is this specimen eukaryotic or prokaryotic?",
          radiobuttons: [
            {
              id: "rbm1",
              value: "Eukaryotic",
              text: "Eukaryotic",
              label: "Eukaryotic",
            },
            {
              id: "rbm2",
              value: "Prokaryotic",
              text: "Prokaryotic",
              label: "Prokaryotic",
            },
          ],
          answer: "Eukaryotic",
        },
      ],
    },
    {
      id: "bacteria",
      value: "Bacteria",
      disabled: false,
      text: "Bacteria",
      label: "Bacteria",
      imageMicroscopicText:
        "A pop-out circle of the magnified bacteria shows individual bacteria cells that look like tiny worms. There are not any dark spots seen in the cells.",
      imageAltbutton: "A bacteria sample is under the lens of the microscope.",
      questionData: [
        {
          id: "mcq1",
          question:
            "Is this organism sample made up of one cell or multiple cells?",
          radiobuttons: [
            {
              id: "rbs1",
              value: "One cell",
              text: "One cell",
              label: "One cell",
            },
            {
              id: "rbs2",
              value: "Multiple cells",
              text: "Multiple cells",
              label: "Multiple cells",
            },
          ],
          answer: "One cell",
        },
        {
          id: "mcq2",
          question:
            'The prefix <i>uni-</i> means "one," and the prefix <i>multi-</i> means "many." Based on this information, do you believe this sample is unicellular or multicellular?',
          radiobuttons: [
            {
              id: "rbss1",
              value: "Unicellular",
              text: "Unicellular",
              label: "Unicellular",
            },
            {
              id: "rbss2",
              value: "Multicellular",
              text: "Multicellular",
              label: "Multicellular",
            },
          ],
          answer: "Unicellular",
        },
        {
          id: "mcq3",
          question:
            "Eukaryotic cells hold genetic material in a nucleus. Prokaryotic cells do not have a nucleus. The nucleus is so important that it can be seen through the microscope as a solid, dark circle in the cell. Do you observe a nucleus in this sample?",
          radiobuttons: [
            {
              id: "rb1",
              value: "Yes",
              text: "Yes",
              label: "Yes",
            },
            {
              id: "rb2",
              value: "No",
              text: "No",
              label: "No",
            },
          ],
          answer: "No",
        },
        {
          id: "mcq4",
          question: "Therefore, is this specimen eukaryotic or prokaryotic?",
          radiobuttons: [
            {
              id: "rbm1",
              value: "Eukaryotic",
              text: "Eukaryotic",
              label: "Eukaryotic",
            },
            {
              id: "rbm2",
              value: "Prokaryotic",
              text: "Prokaryotic",
              label: "Prokaryotic",
            },
          ],
          answer: "Prokaryotic",
        },
      ],
    },
    {
      id: "amoeba",
      value: "Amoeba",
      disabled: false,
      text: "Amoeba",
      label: "Amoeba",
      imageMicroscopicText:
        "A pop-out circle of the magnified amoeba shows the individual amoeba cell. The cell has an abstract shape, and a dark circle is seen in the center.",
      imageAltbutton: "An amoeba sample is under the lens of the microscope.",
      questionData: [
        {
          id: "mcq1",
          question:
            "Is this organism sample made up of one cell or multiple cells?",
          radiobuttons: [
            {
              id: "rbs1",
              value: "One cell",
              text: "One cell",
              label: "One cell",
            },
            {
              id: "rbs2",
              value: "Multiple cells",
              text: "Multiple cells",
              label: "Multiple cells",
            },
          ],
          answer: "One cell",
        },
        {
          id: "mcq2",
          question:
            'The prefix <i>uni-</i> means "one," and the prefix <i>multi-</i> means "many." Based on this information, do you believe this sample is unicellular or multicellular?',
          radiobuttons: [
            {
              id: "rbss1",
              value: "Unicellular",
              text: "Unicellular",
              label: "Unicellular",
            },
            {
              id: "rbss2",
              value: "Multicellular",
              text: "Multicellular",
              label: "Multicellular",
            },
          ],
          answer: "Unicellular",
        },
        {
          id: "mcq3",
          question:
            "Eukaryotic cells hold genetic material in a nucleus. Prokaryotic cells do not have a nucleus. The nucleus is so important that it can be seen through the microscope as a solid, dark circle in the cell. Do you observe a nucleus in this sample?",
          radiobuttons: [
            {
              id: "rb1",
              value: "Yes",
              text: "Yes",
              label: "Yes",
            },
            {
              id: "rb2",
              value: "No",
              text: "No",
              label: "No",
            },
          ],
          answer: "Yes",
        },
        {
          id: "mcq4",
          question: "Therefore, is this specimen eukaryotic or prokaryotic?",
          radiobuttons: [
            {
              id: "rbm1",
              value: "Eukaryotic",
              text: "Eukaryotic",
              label: "Eukaryotic",
            },
            {
              id: "rbm2",
              value: "Prokaryotic",
              text: "Prokaryotic",
              label: "Prokaryotic",
            },
          ],
          answer: "Eukaryotic",
        },
      ],
    },
    {
      id: "human",
      value: "Human cheek swab",
      disabled: false,
      text: "Human cheek swab",
      label: "Human cheek swab",
      imageMicroscopicText:
        "A pop-out circle of the magnified human cheek swab shows multiple round cells. A dark spot is visible in each cell.",
      imageAltbutton: "A human cheek swab is under the lens of the microscope.",
      questionData: [
        {
          id: "mcq1",
          question:
            "Is this organism sample made up of one cell or multiple cells?",
          radiobuttons: [
            {
              id: "rbs1",
              value: "One cell",
              text: "One cell",
              label: "One cell",
            },
            {
              id: "rbs2",
              value: "Multiple cells",
              text: "Multiple cells",
              label: "Multiple cells",
            },
          ],
          answer: "Multiple cells",
        },
        {
          id: "mcq2",
          question:
            'The prefix <i>uni-</i> means "one," and the prefix <i>multi-</i> means "many." Based on this information, do you believe this sample is unicellular or multicellular?',
          radiobuttons: [
            {
              id: "rbss1",
              value: "Unicellular",
              text: "Unicellular",
              label: "Unicellular",
            },
            {
              id: "rbss2",
              value: "Multicellular",
              text: "Multicellular",
              label: "Multicellular",
            },
          ],
          answer: "Multicellular",
        },
        {
          id: "mcq3",
          question:
            "Eukaryotic cells hold genetic material in a nucleus. Prokaryotic cells do not have a nucleus. The nucleus is so important that it can be seen through the microscope as a solid, dark circle in the cell. Do you observe a nucleus in this sample?",
          radiobuttons: [
            {
              id: "rb1",
              value: "Yes",
              text: "Yes",
              label: "Yes",
            },
            {
              id: "rb2",
              value: "No",
              text: "No",
              label: "No",
            },
          ],
          answer: "Yes",
        },
        {
          id: "mcq4",
          question: "Therefore, is this specimen eukaryotic or prokaryotic?",
          radiobuttons: [
            {
              id: "rbm1",
              value: "Eukaryotic",
              text: "Eukaryotic",
              label: "Eukaryotic",
            },
            {
              id: "rbm2",
              value: "Prokaryotic",
              text: "Prokaryotic",
              label: "Prokaryotic",
            },
          ],
          answer: "Eukaryotic",
        },
      ],
    },
  ],
  pageHeading:
    "Students identify the basic characteristics of different organisms by viewing them under a microscope.",

  questionHeading: globalCommonData.questionCounterString2,
  imageAltText: "A microscope is on the left of a lab table.",
  screenHeading:
    "Observe the magnified view of the specimen under the microscope. Use this information to help answer the questions.",
  informationBoxContent:
    "Select the specimen to view it under the microscope. Then, correctly answer the questions.",
};
export default data;
