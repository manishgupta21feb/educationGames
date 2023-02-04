import globalConfig from "../../app/data";

const data = {
  nuclearData: [
    {
      serialNo: 0,
      id: "question1",
      label: "Egg",
      queslabel: "A brown, straw nest filled with three white eggs",
      anslabel: "A brown, straw nest filled with three white eggs",
      answer: "newlyborn",
      classIdentifier: "bird",
      answerOptions: ["newlyborn", "young", "adult"],
    },
    {
      serialNo: 1,
      id: "question2",
      label: "Newly born",
      queslabel: "A small, fuzzy gray baby bird is hatching out of a white egg",
      anslabel: "A small, fuzzy gray baby bird is hatching out of a white egg",
      classIdentifier: "bird",
      answer: "young",
      answerOptions: ["adult", "young", "egg"],
    },
    {
      serialNo: 2,
      id: "question3",
      label: "Young",
      queslabel: "A small, young, gray bird with fluffy feathers",
      anslabel: "A small, young, gray bird with fluffy feathers",
      classIdentifier: "bird",
      answer: "adult",
      answerOptions: ["adult", "egg", "newlyborn"],
    },
    {
      serialNo: 3,
      id: "question4",
      label: "Adult",
      queslabel: "An adult gray and black bird",
      anslabel: "An adult gray and black bird",
      classIdentifier: "bird",
      answer: "egg",
      answerOptions: ["young", "egg", "newlyborn"],
    },
    {
      serialNo: 4,
      id: "question5",
      label: "Egg",
      queslabel:
        "A cluster of 7 orange, round fish eggs with a dark spot in the middle",
      anslabel:
        "A cluster of 7 orange, round fish eggs with a dark spot in the middle",
      classIdentifier: "fish",
      answer: "newlyborn",
      answerOptions: ["young", "adult", "newlyborn"],
    },
    {
      serialNo: 5,
      id: "question6",
      label: "Newly born",
      queslabel:
        "A newborn fish is long and skinny with a large fin on the  bottom and a small, round head",
      anslabel:
        "A newborn fish is long and skinny with a large fin on the  bottom and a small, round head",
      classIdentifier: "fish",
      answer: "young",
      answerOptions: ["young", "egg", "adult"],
    },
    {
      serialNo: 6,
      id: "question7",
      label: "Young",
      queslabel: "A young, small, white fish",
      anslabel: "A young, small, white fish",
      classIdentifier: "fish",
      answer: "adult",
      answerOptions: ["newlyborn", "egg", "adult"],
    },
    {
      serialNo: 7,
      id: "question8",
      label: "Adult",
      queslabel: "An adult white fish with orange stripes",
      anslabel: "An adult white fish with orange stripes",
      classIdentifier: "fish",
      answer: "egg",
      answerOptions: ["newlyborn", "egg", "young"],
    },
    {
      serialNo: 8,
      id: "question9",
      label: "Embryo",
      queslabel:
        "An oval shaped dog embryo with a small, developing puppy inside; the puppy is attached to the mother with a cord",
      anslabel:
        "An oval shaped dog embryo with a small, developing puppy inside; the puppy is attached to the mother with a cord",
      classIdentifier: "dog",
      answer: "newlyborn",
      answerOptions: ["newlyborn", "adult", "young"],
    },
    {
      serialNo: 9,
      id: "question10",
      label: "Newly born",
      queslabel: "A small, brown and black newborn puppy ",
      anslabel: "A small, brown and black newborn puppy ",
      classIdentifier: "dog",
      answer: "young",
      answerOptions: ["embryo", "adult", "young"],
    },
    {
      serialNo: 10,
      id: "question11",
      label: "Young",
      queslabel: "A black and brown young dog or puppy",
      anslabel: "A black and brown young dog or puppy",
      classIdentifier: "dog",
      answer: "adult",
      answerOptions: ["embryo", "adult", "newlyborn"],
    },
    {
      serialNo: 11,
      id: "question12",
      label: "Adult",
      queslabel: "A large adult dog with black and brown fur",
      anslabel: "A large adult dog with black and brown fur",
      classIdentifier: "dog",
      answer: "embryo",
      answerOptions: ["embryo", "newlyborn", "young"],
    },
  ],

  radiobuttons: [
    {
      id: "newlyborn",
      text: "newly born",
      label: "newly born",
      class: "newly-born-bird",
      atom: {
        show: true,
        atomicSymbol: "Newly born",
      },
    },
    {
      id: "young",
      text: "young",
      label: "young",
      class: "young-bird",
      atom: {
        show: true,
        atomicSymbol: "Young",
      },
    },
    {
      id: "adult",
      text: "adult",
      label: "adult",
      class: "adult-bird",
      atom: {
        show: true,
        atomicSymbol: "Adult",
      },
    },
    {
      id: "egg",
      text: "egg",
      label: "egg",
      class: "bird-egg",
      atom: {
        show: true,
        atomicSymbol: "Egg",
      },
    },
    {
      id: "embryo",
      text: "embryo",
      label: "embryo",
      class: "dog-embryo",
      atom: {
        show: true,
        atomicSymbol: "Embryo",
      },
    },
  ],

  imageArray: [
    { id: "1", image: "question1" },
    { id: "2", image: "question2" },
    { id: "3", image: "question3" },
    { id: "4", image: "question4" },
    { id: "5", image: "question5" },
    { id: "6", image: "question6" },
    { id: "7", image: "question7" },
    { id: "8", image: "question8" },
    { id: "9", image: "question9" },
    { id: "10", image: "question10" },
    { id: "11", image: "question11" },
    { id: "12", image: "question12" },
  ],

  questionHeading: globalConfig.questionCounterString,
  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  resetPopupText: globalConfig.resetPopupText,
  buttonLabels: { ...globalConfig.buttonLabels },
  warningBoxHeader: globalConfig.incorrectToastMessage,
  reactionTypeQuestion: "Click on the life cycle stage that comes next.",
  infoContent: "Click on the life cycle stage that comes after this stage.",
  instructionBoxContent:
    "Animals grow, make new living things, and die. This is their <b>life cycle</b>. Today, you will place in order the life cycle stages of a fish, dog, and bird.",
  completionPopup: {
    ...globalConfig.completionPopup,
    content:
      "You have shown you know a lot about the life cycles of birds, fish, and mammals!",
  },
  headingOne:
    "Students will order the stages in a bird, fish, and mammal’s life cycle.",
  startImageAlt:
    "Brown and black dog in the middle, a gray bird with a black tail on the left, and an orange and white fish on the right",
};

export default data;
