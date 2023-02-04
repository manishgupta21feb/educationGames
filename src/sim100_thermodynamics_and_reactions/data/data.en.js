import globalCommonData from "../../app/data/data.en";
import arrowBothSide from "../assets/images/towSideArrowMed.png";
import arrowRight from "../assets/images/Progress_arrow.png";
import arrowUp from "../assets/images/Potential_arrow.png";
import arrowBothBig from "../assets/images/towSideArrowBig.png";
import mini_both_side_arrow from "../assets/images/mini_both_side_arrow.png";

const data = {
  subHeading: "Reaction {questionCount} of 6",
  dropdownHeading: [
    { heading: "ΔH sign", ariaLabel: "Delta H sign" },
    { heading: "Type of reaction", ariaLabel: "Type of reaction" },
    { heading: "Type your answer here", ariaLabel: "Type your answer here" },
    { heading: "ΔH value in kJ", ariaLabel: "Delta H value in kilo Joules" },
    { heading: "Activation energy (kJ)", ariaLabel: "Activation energy (kJ)" },
  ],
  allPopupMsg: [
    { correct: "That's right!" },
    {
      partial:
        "You are almost correct! Please try again and fix your incorrect answers!",
    },
    {
      wrong: "Not quite right. Try again!",
    },
  ],
  selectAnwser: "Select answer",
  equationsData: [
    {
      srNo: "1",
      id: "question1",
      alt: "Reaction progress diagram: Reaction progress on x-axis & potential energy on y-axis; energy of products is higher than energy of reactants",
      selectOptions: {
        sign: [
          {
            id: "sign_1",
            text: "Positive",
            value: "Positive",
          },
          {
            id: "sign_2",
            text: "Negative",
            value: "Negative",
          },
        ],
        reaction: [
          {
            id: "reaction_1",
            text: "Exothermic",
            value: "Exothermic",
          },
          {
            id: "reaction_2",
            text: "Endothermic",
            value: "Endothermic",
          },
        ],
      },
      answer: {
        reactions: "reaction_1",
        signs: "sign_2",
        _h: "25",
        energy: "26",
      },

      labels: [
        { text: "Activation <br> energy", classes: "label1" },
        // { text: "energy", classes: "label5" },
        { text: "Energy <br> of reactants", classes: "label2" },
        { text: "Energy <br> released", classes: "label3" },
        { text: "Energy of products", classes: "label4" },
      ],
      yAxisParams: [102, 76, 51],
      imgName: "img2",
      graphType: ["graph_1", "graph_2"],
      arrow: [
        { src: arrowUp, classes: "arrowUp" },
        { src: arrowRight, classes: "arrowRight" },
        { src: arrowBothSide, classes: "arrowBothSide" }, //need
        { src: arrowBothSide, classes: "arrowUp1" },
      ],
      dottedLines: ["dottedLineDown", "dottedLineUp", "dottedLineMid"],

      xAxis: " Progress of reaction ",
      yAxis: " Potential energy (kJ)",
      graphType: ["graph_1", "graph_2"],
      altText:
        "Atom with a nucleus of red and blue circles has 3 shells, 2 yellow circles representing electrons in the first shell, 8 in the second, 7 in the third",

      isActive: false,
      isVisited: false,
    },
    {
      srNo: "2",
      id: "question2",
      alt: "Reaction progress diagram: Reaction progress on x-axis & potential energy on y-axis; energy of products is much higher than energy of reactants",
      selectOptions: {
        sign: [
          {
            id: "sign_1",
            text: "Positive",
            value: "Positive",
          },
          {
            id: "sign_2",
            text: "Negative",
            value: "Negative",
          },
        ],
        reaction: [
          {
            id: "reaction_1",
            text: "Exothermic",
            value: "Exothermic",
          },
          {
            id: "reaction_2",
            text: "Endothermic",
            value: "Endothermic",
          },
        ],
      },
      answer: {
        reactions: "reaction_2",
        signs: "sign_1",
        _h: "62",
        energy: "94",
      },

      labels: [
        { text: "Energy of products", classes: "label1" },
        { text: "Activation <br> energy", classes: "label3" },
        { text: "Energy <br> absorbed", classes: "label2" },

        { text: "Energy <br> of reactants", classes: "label4" },
      ],
      xAxis: "Progress of reaction",
      yAxis: " Potential energy (kJ)",
      yAxisParams: [109, 77, 15],
      imgName: "img1",
      graphType: ["graph_1", "graph_2"],
      arrow: [
        { src: arrowUp, classes: "arrowUp" },
        { src: arrowRight, classes: "arrowRight" },
        { src: arrowBothSide, classes: "arrowBothSide" },
        { src: arrowUp, classes: "arrowUp1" },
        { src: arrowUp, classes: "arrowUp2" },
      ],
      dottedLines: ["dottedLineDown", "dottedLineUp"],
      altText:
        "An atom with a nucleus of red and blue circles has 2 shells, 2 yellow circles representing electrons in the first shell and 5 in the second",
      isActive: false,
      isVisited: false,
    },

    {
      srNo: "3",
      id: "question3",
      alt: "Reaction progress diagram: Reaction progress on x-axis & potential energy on y-axis; energy of products is higher than energy of reactants",
      selectOptions: {
        sign: [
          {
            id: "sign_1",
            text: "Positive",
            value: "Positive",
          },
          {
            id: "sign_2",
            text: "Negative",
            value: "Negative",
          },
        ],
        reaction: [
          {
            id: "reaction_1",
            text: "Exothermic",
            value: "Exothermic",
          },
          {
            id: "reaction_2",
            text: "Endothermic",
            value: "Endothermic",
          },
        ],
      },
      answer: {
        reactions: "reaction_1",
        signs: "sign_2",
        _h: "33",
        energy: "36",
      },

      labels: [
        { text: "Activation <br> energy", classes: "label3" },
        // { text: "energy", classes: "label5" },
        { text: "Energy <br> of reactants", classes: "label2" },
        { text: "Energy <br> released", classes: "label4" },
        { text: "Energy of products", classes: "label1" },
      ],
      xAxis: "Progress of reaction",
      yAxis: " Potential energy (kJ)",
      yAxisParams: [125, 89, 56],
      graphType: ["graph_1", "graph_2"],
      altText:
        "Reaction progress diagram: Reaction progress on x-axis & potential energy on y-axis; energy of products is higher than energy of reactants",

      imgName: "img4",
      graphType: ["graph_1", "graph_2"],
      arrow: [
        { src: arrowUp, classes: "arrowUp" },
        { src: arrowRight, classes: "arrowRight" },
        { src: arrowBothSide, classes: "arrowBothSide" },
        { src: arrowBothSide, classes: "arrowBothSideMid" },
      ],
      dottedLines: ["dottedLineDown", "dottedLineUp", "dottedLineMid"],
      isActive: false,
      isVisited: false,
    },

    {
      srNo: "4",
      id: "question4",
      alt: "Reaction progress diagram: Reaction progress on x-axis & potential energy on y-axis; energy of products is much higher than energy of reactants",
      selectOptions: {
        sign: [
          {
            id: "sign_1",
            text: "Positive",
            value: "Positive",
          },
          {
            id: "sign_2",
            text: "Negative",
            value: "Negative",
          },
        ],
        reaction: [
          {
            id: "reaction_1",
            text: "Exothermic",
            value: "Exothermic",
          },
          {
            id: "reaction_2",
            text: "Endothermic",
            value: "Endothermic",
          },
        ],
      },
      answer: {
        reactions: "reaction_1",
        signs: "sign_2",
        _h: "17",
        energy: "9",
      },

      labels: [
        { text: "Activation <br> energy", classes: "label3" },
        // { text: "energy", classes: "label5" },
        { text: "Energy <br> released", classes: "label4" },
        { text: "Energy <br> of reactants", classes: "label2" },
        { text: "Energy of products", classes: "label1" },
      ],
      xAxis: "Progress of reaction",
      yAxis: " Potential energy (kJ)",
      yAxisParams: [27, 18, 1],

      altText: "Oxygen with a negative 2 charge",

      imgName: "img3",
      graphType: ["graph_1", "graph_2", "graph_3"],
      arrow: [
        { src: arrowUp, classes: "arrowUp" },
        { src: arrowRight, classes: "arrowRight" },
        { src: arrowBothSide, classes: "arrowBothSide" },
        { src: arrowBothSide, classes: "arrowBothSideMid" },
      ],
      dottedLines: ["dottedLineDown", "dottedLineUp", "dottedLineMid"],
      isActive: false,
      isVisited: false,
    },

    {
      srNo: "5",
      id: "question5",
      alt: "Reaction progress diagram: Reaction progress on x-axis & potential energy on y-axis; energy of products is slightly higher than energy of reactants",
      selectOptions: {
        sign: [
          {
            id: "sign_1",
            text: "Positive",
            value: "Positive",
          },
          {
            id: "sign_2",
            text: "Negative",
            value: "Negative",
          },
        ],
        reaction: [
          {
            id: "reaction_1",
            text: "Exothermic",
            value: "Exothermic",
          },
          {
            id: "reaction_2",
            text: "Endothermic",
            value: "Endothermic",
          },
        ],
      },
      answer: {
        reactions: "reaction_2",
        signs: "sign_1",
        _h: "15",
        energy: "26",
      },
      labels: [
        { text: "Activation <br> energy", classes: "label3" },
        // { text: "energy", classes: "label5" },
        { text: "Energy of products", classes: "label1" },
        { text: "Energy absorbed", classes: "label2" },
      ],
      altText: "Lithium with a positive 1 charge",

      xAxis: "Progress of reaction",
      yAxis: " Potential energy (kJ)",

      imgName: "img5",
      yAxisParams: [123, 112, 97],
      graphType: ["graph_1", "graph_2"],
      altText: "Nitrogen with a negative 3 charge",
      arrow: [
        { src: arrowUp, classes: "arrowUp" },
        { src: arrowRight, classes: "arrowRight" },
        { src: arrowBothSide, classes: "arrowBothSide" },
        { src: mini_both_side_arrow, classes: "arrowBothSideMid" },
      ],
      dottedLines: ["dottedLineUp", "dottedLineMid"],
      isActive: false,
      isVisited: false,
    },
    {
      srNo: "6",
      id: "question6",
      alt: "Reaction progress diagram: Reaction progress on x-axis & potential energy on y-axis; energy of products is much higher than energy of reactants",
      selectOptions: {
        sign: [
          {
            id: "sign_1",
            text: "Positive",
            value: "Positive",
          },
          {
            id: "sign_2",
            text: "Negative",
            value: "Negative",
          },
        ],
        reaction: [
          {
            id: "reaction_1",
            text: "Exothermic",
            value: "Exothermic",
          },
          {
            id: "reaction_2",
            text: "Endothermic",
            value: "Endothermic",
          },
        ],
      },
      answer: {
        reactions: "reaction_2",
        signs: "sign_1",
        _h: "27",
        energy: "55",
      },

      labels: [
        { text: "Energy of products", classes: "label1" },
        { text: "Activation <br> energy", classes: "label3" },
        // { text: "energy", classes: "label5" },
        { text: "Energy <br> released", classes: "label2" },
        { text: "Energy <br> of reactants", classes: "label4" },
      ],
      xAxis: "Progress of reaction",
      yAxis: " Potential energy (kJ)",

      graphType: ["graph_1", "graph_2"],
      altText: "Lithium with a positive 1 charge",
      xAxis: "Progress of reaction",
      yAxis: " Potential energy (kJ)",

      imgName: "img6",
      yAxisParams: [67, 39, 12],
      graphType: ["graph_1", "graph_2"],
      altText: "Nitrogen with a negative 3 charge",
      arrow: [
        { src: arrowUp, classes: "arrowUp" },
        { src: arrowRight, classes: "arrowRight" },
        { src: arrowBothBig, classes: "arrowBothSide" },
        { src: arrowBothBig, classes: "arrowBothSideMid" },
      ],
      dottedLines: ["dottedLineUp", "dottedLineMid"],
      isActive: false,
      isVisited: false,
    },
  ],

  labels: [
    { id: "neutrons", name: "Neutrons" },
    { id: "charges", name: "Charge" },
  ],

  buttonLabels: { ...globalCommonData.buttonLabels },
  completionScreen: {
    ...globalCommonData.completionPopup,
    content: "You successfully answered all the questions!",
  },

  resetLiveText: globalCommonData.resetLiveText,
  resetMsgContent: globalCommonData.resetPopupText,
  questionHeading: globalCommonData.questionCounterString,
  correctToastMessage: globalCommonData.correctToastMessage,
  reactionTypeQuestion: {
    heading:
      "Identify the type of reaction, and calculate the ΔH and activation energy based on the data provided in the graph.",
    ariaLabel:
      "Identify the type of reaction, and calculate the delta H and activation energy based on the data provided in the graph.",
  },
  infoBoxContent:
    "<div> Evaluate the graph and the specific energy values provided. You do not have to include the sign (+ or -) when inputting your value answers. </div>",
  infoBoxContent2:
    " Evaluate the graph and the specific energy values provided. You do not have to include the sign ( plus or minus ) when inputting your value answers. ",

  instructionBoxContent:
    "According to the law of conservation of energy, energy cannot be created or destroyed. Heat is a form of energy, and it can be released or absorbed. In this simulation, you will identify what type of reaction is occurring and calculate the change in enthalpy and activation energy of each energy curve as it is presented.",
  screenHeading:
    "Students will classify reactions as endothermic or exothermic and calculate the change in enthalpy and activation energy of each reaction using an energy curve graph.",
};

export default data;
