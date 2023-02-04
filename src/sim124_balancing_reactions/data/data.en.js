import globalData from "../../app/data/data.en";
const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  submitAnswer: "Submit Answer",
  buttonContinueText: globalData.buttonLabels.start,
  buttonContinueLabel: globalData.buttonLabels.start,
  content: [
    "According to the law of conservation of mass, mass cannot be created or destroyed. In this simulation, you will balance chemical reactions in accordance with the law of conservation of mass.",
  ],
};

const infoString = [
  "Evaluate the chemical equations and molecules for the reactants and products, and attempt to balance the equations according to the law of conservation of mass.",
];

const eq4InlineSVG = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
preserveAspectRatio="none" x="0px" y="0px" width="3px" height="108px" viewBox="0 0 3 108">
<g transform="matrix( 1.6818084716796875, 0, 0, 1, -0.7,0) ">
    <path fill="#052978" stroke="none" d="M 2.65 0 L 0.45 0 0.45 108 2.65 108 2.65 0 Z" />
</g>
</svg>`;

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

  completionPopup: {
    ...globalData.completionPopup,
    content:
      "You have correctly balanced the reactions according to the law of conservation of mass! ",
  },

  resetText: [
    {
      type: "reset",
      resetButtonText: globalData.buttonLabels.yes,
      buttonContinueText: globalData.buttonLabels.no,
      content: globalData.resetPopupText,
    },
  ],
  labelOne: "increase coefficient of molecule",
  labelTwo: "decrease coefficient of molecule",

  increment: "Increase value",
  decrement: "Decrease value",

  submitAnswer: "Submit Answer",
  mainScreenText: "Attempt to balance the chemical equation.",
  rightMsg: globalData.correctToastMessage,
  wrongMsg: "The equation is not properly balanced. Try again!",
  reset: globalData.buttonLabels.reset,
  info: globalData.buttonLabels.info,
  resetLiveText: globalData.resetLiveText,
  buttonFinish: globalData.buttonLabels.finish,
  buttonNext: globalData.buttonLabels.next,
  buttonClose: globalData.buttonLabels.close,
  screen1Heading:
    "Students will balance reactions using a chemical equation and molecules.",

  equations: [
    {
      id: "equation1",
      assocId: "counter_of_3",
      questionId: "question1",
      ariaLabel: "H 2 plus F 2 reacts to produce H F ",
      equationImg: [
        {
          value: "",
          id: "hydrogen",
          mapWithACounter: true,
          ariaLabel: "H 2",
          counterHtml: "H<sub>2</sub>",
        },
        { id: "eq2", value: "+", img: "", ariaLabel: "plus" },
        {
          id: "f2",
          value: "",
          mapWithACounter: true,
          ariaLabel: "F 2",
          counterHtml: "F<sub>2</sub>",
        },
        {
          id: "eq4",
          value: `<span class='arrow-tail'>${eq4InlineSVG}</<span><span class='arrow-head'></span>`,
          img: "",
        },
        {
          id: "hf",
          value: "",
          counterHtml: "HF",
          ariaLabel: "H F",
          mapWithACounter: true,
        },
      ],
      answers: [
        {
          counter1: "1",
          counter2: "1",
          counter3: "2",
        },
        {
          counter1: "2",
          counter2: "2",
          counter3: "4",
        },
        {
          counter1: "3",
          counter2: "3",
          counter3: "6",
        },
        {
          counter1: "4",
          counter2: "4",
          counter3: "8",
        },
      ],
      liveTexts: {
        counter1: " Counter of H 2 ",
        counter2: " Counter of F 2",
        counter3: " Counter of H F ",
      },
    },
    {
      id: "equation2",
      assocId: "counter_of_4",
      questionId: "question2",
      ariaLabel: "C H 4 plus O 2 reacts to produce C O 2 plus H 2 O ",
      equationImg: [
        {
          id: "ch4",
          value: "",
          mapWithACounter: true,
          ariaLabel: "C H 4 ",
          counterHtml: "CH<sub>4</sub>",
        },
        { id: "eq2", value: "+", img: "", ariaLabel: "plus" },
        {
          id: "o2",
          mapWithACounter: true,
          ariaLabel: "O 2 ",
          counterHtml: "O<sub>2</sub>",
        },
        {
          id: "eq4",
          value: `<span class='arrow-tail'>${eq4InlineSVG}</<span><span class='arrow-head'></span>`,

          img: "",
        },
        {
          id: "co2",
          value: "",
          ariaLabel: "C o 2 ",
          mapWithACounter: true,
          counterHtml: "CO<sub>2</sub>",
        },
        { id: "eq6", value: "+", img: "" },
        {
          id: "h2o",
          value: "",
          mapWithACounter: true,
          ariaLabel: "H 2 O",
          counterHtml: "H<sub>2</sub>O",
        },
      ],
      answers: [
        {
          counter1: "1",
          counter2: "2",
          counter3: "1",
          counter4: "2",
        },
        {
          counter1: "2",
          counter2: "4",
          counter3: "2",
          counter4: "4",
        },
        {
          counter1: "3",
          counter2: "6",
          counter3: "3",
          counter4: "6",
        },
        {
          counter1: "4",
          counter2: "8",
          counter3: "4",
          counter4: "8",
        },
      ],
      liveTexts: {
        counter1: " Counter of C H 4",
        counter2: " Counter of O 2",
        counter3: " Counter of C O 2",
        counter4: " Counter of H 2 O",
      },
    },
    {
      id: "equation3",
      assocId: "counter_of_4",
      questionId: "question3",
      ariaLabel: "H B r plus F 2 reacts to produce B r 2  plus H F ",
      equationImg: [
        {
          id: "hbr",
          value: "",
          counterHtml: "HBr",
          ariaLabel: "H B r",
          mapWithACounter: true,
        },
        { id: "eq2", value: "+", img: "" },
        {
          id: "f2",
          value: "",
          mapWithACounter: true,
          ariaLabel: "F 2",
          counterHtml: "F<sub>2</sub>",
        },
        {
          id: "eq4",
          value: `<span class='arrow-tail'>${eq4InlineSVG}</<span><span class='arrow-head'></span>`,

          img: "",
        },
        {
          id: "br",
          value: "",
          mapWithACounter: true,
          ariaLabel: "B r 2",
          counterHtml: "Br<sub>2</sub>",
        },
        { id: "eq6", value: "+", img: "", ariaLabel: "plus" },
        {
          id: "hf",
          value: "",
          counterHtml: "HF",
          ariaLabel: "H F",
          mapWithACounter: true,
        },
      ],
      answers: [
        {
          counter1: "2",
          counter2: "1",
          counter3: "1",
          counter4: "2",
        },
        {
          counter1: "4",
          counter2: "2",
          counter3: "2",
          counter4: "4",
        },
        {
          counter1: "6",
          counter2: "3",
          counter3: "3",
          counter4: "6",
        },
        {
          counter1: "8",
          counter2: "4",
          counter3: "4",
          counter4: "8",
        },
      ],
      liveTexts: {
        counter1: " Counter of H B R",
        counter2: " Counter of F 2",
        counter3: " Counter of B R 2",
        counter4: " Counter of H F",
      },
    },
    {
      id: "equation4",
      assocId: "counter_of_4",
      questionId: "question4",
      ariaLabel:
        "N a c l plus C a 3 N 2 reacts to produce N a 3 N  plus C a C l 2",
      equationImg: [
        {
          id: "nacl",
          value: "",
          ariaLabel: "N a c l",
          mapWithACounter: true,
          counterHtml: "NaCl",
        },
        { id: "eq2", value: "+", img: "" },
        {
          id: "n2ca3",
          value: "",
          ariaLabel: "C a 3 N 2",
          mapWithACounter: true,
          counterHtml: "Ca<sub>3</sub>N<sub>2</sub>",
        },
        {
          id: "eq4",
          value: `<span class='arrow-tail'>${eq4InlineSVG}</<span><span class='arrow-head'></span>`,

          img: "",
        },
        {
          id: "nna3",
          value: "",
          ariaLabel: "N a 3 N",
          mapWithACounter: true,
          counterHtml: "Na<sub>3</sub>N",
        },
        { id: "eq6", value: "+", img: "" },
        {
          id: "cacl2",
          value: "",
          ariaLabel: "C a C l 2",
          mapWithACounter: true,
          counterHtml: "CaCl<sub>2</sub>",
        },
      ],
      answers: [
        {
          counter1: "6",
          counter2: "1",
          counter3: "2",
          counter4: "3",
        },
      ],
      liveTexts: {
        counter1: " Counter of N A C L",
        counter2: " Counter of C a 3 N 2",
        counter3: " Counter of N a 3 N",
        counter4: " Counter of C a C l 2",
      },
    },
    {
      id: "equation5",
      assocId: "counter_of_4",
      questionId: "question5",
      ariaLabel: "N O 2 plus H 2 O reacts to produce N H 3 plus O 2 ",
      equationImg: [
        {
          id: "no2",
          mapWithACounter: true,
          ariaLabel: "N O 2",
          counterHtml: "NO<sub>2</sub>",
        },
        { id: "eq2", value: "+", img: "", ariaLabel: "plus" },
        {
          id: "h2o",
          value: "",
          ariaLabel: "H 2 O ",
          mapWithACounter: true,
          counterHtml: "H<sub>2</sub>O",
        },
        {
          id: "eq4",
          value: `<span class='arrow-tail'>${eq4InlineSVG}</<span><span class='arrow-head'></span>`,
          ariaLabel: "reacts to produce",
          img: "",
        },
        {
          id: "nh3",
          value: "",
          ariaLabel: "N H 3",
          mapWithACounter: true,
          counterHtml: "NH<sub>3</sub>",
        },
        { id: "eq6", value: "+", img: "", ariaLabel: "plus" },
        {
          id: "o2",
          value: "",
          ariaLabel: "O 2",
          mapWithACounter: true,
          counterHtml: "O<sub>2</sub>",
        },
      ],
      answers: [
        {
          counter1: "4",
          counter2: "6",
          counter3: "4",
          counter4: "7",
        },
      ],
      liveTexts: {
        counter1: " Counter of N O 2 ",
        counter2: " Counter of H 2 O",
        counter3: " Counter of N H 3",
        counter4: " Counter of O 2",
      },
    },
    {
      id: "equation6",
      assocId: "counter_of_4",
      questionId: "question6",
      ariaLabel: "C 2 H 6 plus O 2 reacts to produce C O 2 plus H 2 O  ",
      equationImg: [
        {
          id: "c2h6",
          value: "",
          ariaLabel: "C 2 H 6",
          mapWithACounter: true,
          counterHtml: "C<sub>2</sub>H<sub>6</sub>",
        },
        { id: "eq2", value: "+", img: "", ariaLabel: "plus" },
        {
          id: "o2",
          value: "",
          ariaLabel: "O 2 ",
          mapWithACounter: true,
          counterHtml: "O<sub>2</sub>",
        },
        {
          id: "eq4",
          value: `<span class='arrow-tail'>${eq4InlineSVG}</<span><span class='arrow-head'></span>`,
          ariaLabel: "reacts to produce",
          img: "",
        },
        {
          id: "co2",
          value: "",
          ariaLabel: "C O 2 ",
          mapWithACounter: true,
          counterHtml: "CO<sub>2</sub>",
        },
        { id: "eq6", value: "+", img: "", ariaLabel: "plus" },
        {
          id: "h2o",
          value: "",
          ariaLabel: "H 2 O ",
          mapWithACounter: true,
          counterHtml: "H<sub>2</sub>O",
        },
      ],
      answers: [
        {
          counter1: "2",
          counter2: "7",
          counter3: "4",
          counter4: "6",
        },
      ],
      liveTexts: {
        counter1: " Counter of C 2 H 6",
        counter2: " Counter of  O 2",
        counter3: " Counter of C O 2",
        counter4: " Counter of H 2 O",
      },
    },
  ],
  questionHeading: globalData.questionCounterString2,
  counterChangeType: {
    increment: "increased",
    decrement: "decreased",
  },
  coefficientCounterLiveText: "Coefficient of -1- is -2- to -3-.",
};

export default RawTextData;
