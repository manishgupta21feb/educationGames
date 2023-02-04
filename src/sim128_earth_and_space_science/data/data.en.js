import globalConfig from "../../app/data";

const data = {
  
  //MCQ Data
  mcqData: [
    {
      id: 1,
      questionText: "Which rock has a <b>smooth texture</b>?",
      answer: "smooth-rock"
    },
    {
      id: 2,
      questionText: "Which rock is a <b>larger size</b>?",
      answer: "large-rock"
    },
    {
      id: 3,
      questionText: "Which rock has a <b>round shape</b>?",
      answer: "round-rock"
    },
    {
      id: 4,
      questionText: "Which rock has a <b>black color</b>?",
      answer: "black-rock"
    },
    {
      id: 5,
      questionText: "Which rock has a <b>rough texture</b>?",
      answer: "rough-rock"
    },
    {
      id: 6,
      questionText: "Which rock is a <b>smaller size</b>?",
      answer: "small-rock"
    },
    {
      id: 7,
      questionText: "Which rock has a <b>rectangle shape</b>?",
      answer: "rectangle-rock"
    },
    {
      id: 8,
      questionText: "Which rock has a <b>red color</b>?",
      answer: "red-rock"
    },
  ],

  //MCQ Question
  mcqQuestions: [
    "Which rock has a <b>smooth texture</b>?",
    "Which rock is a <b>larger size</b>?",
    "Which rock has a <b>round shape</b>?",
    "Which rock has a <b>black color</b>?",
    "Which rock has a <b>rough texture</b>?",
    "Which rock is a <b>smaller size</b>?",
    "Which rock has a <b>rectangle shape</b>?",
    "Which rock has a <b>red color</b>?"    
  ],

  //MCQ Options
  mcqOptions: [
    [
      {
        id: "smooth-rock",
        imgClass: "smooth-rock",
        altText: "The light gray rock is oval in shape, smooth, and shiny"
      },
      {
        id: "rough-rock",
        imgClass: "rough-rock",
        altText: "The dark gray rock appears rough in texture with jagged edges and small holes"
      }
    ],
    [
      {
        id: "small-rock",
        imgClass: "small-rock",
        altText: "The small, gray rock has jagged edges and appears smooth"
      },
      {
        id: "large-rock",
        imgClass: "large-rock",
        altText: "The larger rock is red in color with some smooth surfaces"
      }
    ],
    [
      {
        id: "round-rock",
        imgClass: "round-rock",
        altText: "The light gray rock is round and smooth"
      },
      {
        id: "rectangle-rock",
        imgClass: "rectangle-rock",
        altText: "The darker gray rock is rectangular in shape, small, and appears rough"
      }
    ],
    [
      {
        id: "non-black-rock",
        imgClass: "non-black-rock",
        altText: "The small, blue colored rock appears smooth in texture"
      },
      {
        id: "black-rock",
        imgClass: "black-rock",
        altText: "The black rock is smooth and shiny"
      }
    ],
    [
      {
        id: "smooth-rock",
        imgClass: "smooth-rock",
        altText: "The light gray rock is oval in shape, smooth, and shiny"
      },
      {
        id: "rough-rock",
        imgClass: "rough-rock",
        altText: "The dark gray rock appears rough in texture with jagged edges and small holes"
      }
    ],
    [
      {
        id: "small-rock",
        imgClass: "small-rock",
        altText: "The small, gray rock has jagged edges and appears smooth"
      },
      {
        id: "large-rock",
        imgClass: "large-rock",
        altText: "The larger rock is red in color with some smooth surfaces"
      }
    ],
    [
      {
        id: "round-rock",
        imgClass: "round-rock",
        altText: "The light gray rock is round and smooth"
      },
      {
        id: "rectangle-rock",
        imgClass: "rectangle-rock",
        altText: "The darker gray rock is rectangular in shape, small, and appears rough"
      }
    ],
    [
      {
        id: "non-red-rock",
        imgClass: "non-red-rock",
        altText: "The light gray rock is oval in shape, smooth, and shiny"
      },
      {
        id: "red-rock",
        imgClass: "red-rock",
        altText: "The red rock has jagged edges and appears rough"
      }
    ],
  ],

  //Starting Toast Content
  instructionBoxContent: "Rocks come in all different sizes, shapes, colors, and textures! Let’s look at some rocks and name their properties.",

  //Main Instruction Box Img Alt
  mainInstructionAlt: "A collection of rocks in different sizes, shapes, colors and textures",

  //Question Heading
  questionHeading: "Question: -1- of 8",

  //infoText
  infoDialogText: "Click on the rock with the property described in the question.",

  //Reset Toast Content
  resetMsgContent: globalConfig.resetPopupText,

  //Corret Toast Content
  correctToastMsg: globalConfig.correctToastMessage,

  //Incorrect Toast Content
  incorrectToastMsg: globalConfig.incorrectToastMessage,
  
  // activityHeading
  activityHeading: "In this simulation, the learner will choose the observable property of size, shape, color, or texture to describe each rock.",

  //Completion Popup Texts
  completionPopup: {
    ...globalConfig.completionPopup,
    content: "You have described these rocks by their properties!"
  },
  
  buttonLabels: { ...globalConfig.buttonLabels },
};

export default data;
