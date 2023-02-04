import globalConfig from "../../app/data/data.en";

const data = {

  // MCQ Data
  mcqData: [
    {
      id: 1,
      questionTest: "The offspring have variations in fin length. Based on this graph and the picture of the population, which fin length provides the greatest advantage for survival?",
      answer: "5-cm-fins"
    },
    {
      id: 2,
      questionText: "Which fin length variation provides the greatest disadvantage for survival for this fish population?",
      answer: "9-cm-fins"
    },
    {
      id: 3,
      questionTest: "The pond owner planted several trees near the edge of the pond. Over time, as the fish continued to breed, the trees grew and provided shade for the pond. This lowered the temperature of the water. How does this environmental change impact the fish population?",
      answer: "scrollable-radio-3"
    },
    {
      id: 4,
      questionTest: "In the colder pond environment, which fin length variation provides the greatest advantage for survival?",
      answer: "9-cm-fins"
    }
  ],
  
  //MCQ Question
  mcqQuestion: [
    "The offspring have variations in fin length. Based on this graph and the picture of the population, which fin length provides the greatest advantage for survival?",
    "Which fin length variation provides the greatest disadvantage for survival for this fish population?",
    "The pond owner planted several trees near the edge of the pond. Over time, as the fish continued to breed, the trees grew and provided shade for the pond. This lowered the temperature of the water. How does this environmental change impact the fish population?",
    "In the colder pond environment, which fin length variation provides the greatest advantage for survival?"
  ],

  //MCQ Options
  mcqOptions: [
    [
      {
        id: "5-cm-fins",
        text: "5 cm fins"
      },
      {
        id: "7-cm-fins",
        text: "7 cm fins"
      },
      {
        id: "9-cm-fins",
        text: "9 cm fins"       
      } 
    ],
    [
      {
        id: "scrollable-radio-1",
        text: "The number of fish with the longest fins increased while the other fish types stayed the same."
      },
      {
        id: "scrollable-radio-2",
        text: "The number of fish with the longest fins decreased while the number of fish with the shortest fins increased."
      },
      {
        id: "scrollable-radio-3",
        text: "The number of fish with the shortest fins decreased while the number of fish with the longest fins increased."
      }
    ]
  ],

  //Chart Data
  chartData: [
    [30, 40, 50],
    [50, 40, 20]
  ],

  //Instruction Text
  instructionText: "The owner of this pond introduced four fish to the ecosystem, two males and two females. This type of fish has been bred over several generations to have variations in its features like long fins and a bright orange color. These four fish successfully bred and created several new generations.",

  //Question Heading
  questionHeading: "Question: -1- of 2",

  //Starting Toast Content
  instructionBoxContent: "Welcome to peaceful Walker Pond! Here, we will study a population of fish to learn about how variations in their population become either advantages or disadvantages for survival.",

  //Reset Toast Content
  resetMsgContent: globalConfig.resetPopupText,

  //Corret Toast Content
  correctToastMsg: globalConfig.correctToastMessage,
  
  //Incorrect Toast Content
  incorrectToastMsg: globalConfig.incorrectToastMessage,
  
  //Completion Popup Texts
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You’re all set! You have completed this simulation and explored how variations in traits can result in advantages or disadvantages to populations depending on how the environment changes."
  },

  //infoText
  infoDialogText: "Read the scenarios and answer the questions.",

  // activityHeading
  activityHeading: "Students will use graphs to explore how variations within a population of fish affect survival in a changing pond environment.",

  //Main Instruction Image alt text
  mainInstructionAlt: "A pond with green lily pads and pink flowers floating on top.",

  //Left Static Image Alt Text
  leftStaticAlt: "1 orange fish with large fins at the top, 1 coral-colored fish with small fins in the middle, and 1 red & white fish with medium-sized fins on bottom.",

  //Left First Image Alt Text
  leftFirstImgAlt: "A population of fish in a pond: 5 red & white fish with 5 cm fins, 4 coral-colored fish with 7 cm fins, and 3 orange fish with 9 cm fins.",

  //Left Second Image Alt Text
  leftSecondImgAlt: "A population of fish in a pond: 2 red & white fish with 5 cm fins, 4 coral-colored fish with 7 cm fins, and 5 orange fish with 9 cm fins.",

  //Fish Chart Title
  fishChartTitleFirst: "Population of Fish in the Pond after Five Generations",

  //Fish Chart Title
  fishChartTitleSecond: "Population of Fish in the Pond after Ten Generations",

  //Fish Chart Info
  fishChartInfo: "Number of Fish in Pond (<span>&#10006;</span>10)",

  //Fish Chart Info Label
  fishChartInfoLabel: "Number of Fish in Pond multiply 10",

  //Chart Aria Label First
  chartAriaLabelFirst: "Bar graph of population of fish in the pond after five generations; 300 fish with 9 cm fins, 400 fish with 7 cm fins, and 500 fish with 5 cm fins.",

  //Chart Aria Label Second
  chartAriaLabelSecond: "Bar graph of population of fish in the pond after five generations; 500 fish with 9 cm fins, 400 fish with 7 cm fins, and 200 fish with 5 cm fins.",

  //Chart labels
  chartLabels: ['9 cm fins', '7 cm fins', '5 cm fins'],

  //Button Labels
  buttonLabels: { ...globalConfig.buttonLabels },

};

export default data;
