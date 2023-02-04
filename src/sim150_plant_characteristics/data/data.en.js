import commonData from "../../app/data/data.en";
import globalConfig from "../../app/data";

import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";

const data = {
  simHeading:
    "Students will identify the roots, stems, leaves, flowers, fruits, and seeds of plants based on their functions. Students will identify the basic needs that roots, stems, and leaves provide plants.",
  introData: {
    img: image1,
    headings: { banner: "STEMscopes Plant Shop", board: "Help Wanted" },
    imgAlt:
      "The STEMscopes Plant Shop storefront has a red & white striped awning, shelves and racks of different plants in pots, and a Help Wanted sign.",
    content:
      "There’s a job opening at STEMscopes Plant Shop! You will need to prove that you know about plant structures and their functions to get the job. Show what you know about plants by identifying each plant structure based on its function.",
  },

  plantData: {
    plantImage: image2,
    plantAlt: [
      "Tomato plant in soil has yellow flowers, 3 red tomatoes & tan roots. On the ground, half a tomato shows seeds inside. Labels point to each plant part.",
      {
        flowers:
          "The tomato plant has a dotted line from a flower to a drop-down menu. ",
        fruits:
          "The tomato plant has a dotted line from a tomato to a drop-down menu.",
        leaves:
          "The tomato plant has a dotted line from the leaves to a drop-down menu.",
        stem: "The tomato plant has a dotted line from the stem to a drop-down menu.",
        seeds:
          "The tomato plant has a dotted line from the tomato half to a drop-down menu. ",
        roots:
          "The tomato plant has a dotted line from the roots to a drop-down menu. ",
      },
    ],
    hotSpots: {
      flowers: {
        content: "Plant Structure",
        location: "flowers",
        altText: "Flowers plant structure",
        visited: false,
        current: false,
      },
      leaves: {
        content: "Plant Structure",
        location: "leaves",
        altText: "Leaves plant structure",
        visited: false,
        current: false,
      },
      stem: {
        content: "Plant Structure",
        location: "stem",
        altText: "Stem plant structure",
        visited: false,
        current: false,
      },
      fruits: {
        content: "Plant Structure",
        location: "fruits",
        altText: "Fruits plant structure",
        visited: false,
        current: false,
      },
      seeds: {
        content: "Plant Structure",
        location: "seeds",
        altText: "Seeds plant structure",
        visited: false,
        current: false,
      },
      roots: {
        content: "Plant Structure",
        location: "roots",
        altText: "Roots plant structure",
        visited: false,
        current: false,
      },
    },
  },
  plantQuestions: [
    {
      level1: {
        ques: "Click on the plant structure that grows into the ground, absorbs water, and holds the plant in place.",
        answer: "roots",
      },
      level2: {
        ques: "Use the drop-down menu to select the correct name for the plant's structure.",
        answer: "roots",
        heading: "plant structure",
      },
    },
    {
      level1: {
        ques: "Click on the plant structure that connects the roots and leaves and holds the plant up.",
        answer: "stem",
      },
      level2: {
        ques: "Use the drop-down menu to select the correct name for the plant's structure.",
        answer: "stem",
        heading: "plant structure",
      },
    },
    {
      level1: {
        ques: "Click on the plant structures that are attached to the stem and make food for the plant.",
        answer: "leaves",
      },
      level2: {
        ques: "Use the drop-down menu to select the correct name for the plant's structure.",
        answer: "leaves",
        heading: "plant structure",
      },
    },
    {
      level1: {
        ques: "Click on the plant structure that <strong>makes</strong> seeds for the plant.",
        answer: "flowers",
      },
      level2: {
        ques: "Use the drop-down menu to select the correct name for the plant's structure.",
        answer: "flowers",
        heading: "plant structure",
      },
    },
    {
      level1: {
        ques: "Click on the plant structure that some plants make that <strong>contain</strong> the seeds.",
        answer: "fruits",
      },
      level2: {
        ques: "Use the drop-down menu to select the correct name for the plant's structure.",
        answer: "fruits",
        heading: "plant structure",
      },
    },
    {
      level1: {
        ques: "Click on the plant structures that are made by the plant that contain new plants.",
        answer: "seeds",
      },
      level2: {
        ques: "Use the drop-down menu to select the correct name for the plant's structure.",
        answer: "seeds",
        heading: "plant structure",
      },
    },
  ],
  equationsData: [
    {
      srNo: 1,
      id: "question1",
      questionImage: image4,
      imgContent: "Plant roots",
      questionContent:
        "Choose the basic needs that plants get from the <strong>roots</strong> that help them stay alive.",
      imageAltText: "Tan plant roots that are branching out in all directions",
      answer: ["Water", "Nutrients"],
    },
    {
      srNo: 2,
      id: "question2",
      questionImage: image5,
      imgContent: "Plant stem",
      questionContent:
        "Choose the basic needs that <strong>stems</strong> carry to all parts of plants to help them stay alive.",
      imageAltText: "A green main plant stem with six offshoot stems",
      answer: ["Water", "Nutrients"],
    },
    {
      srNo: 1,
      id: "question1",
      questionImage: image3,
      imgContent: "Plant leaves",
      questionContent:
        "Choose the basic needs that <strong>leaves</strong> use to make food for plants to help them stay alive.",
      imageAltText: "A green plant stem with eight green plant leaves",
      answer: ["Air", "Water", "Sunlight"],
    },
  ],
  selectData: [
    {
      title: "Red foxes",
      id: "redFox0",
      text: "Root",
      value: 0,
      class: "Roots",
    },
    {
      id: "redFox1",
      text: "Stem",
      value: 1,
      class: "Stem",
    },
    {
      id: "redFox2",
      text: "Leaves",
      value: 2,
      class: "Leaves",
    },
    {
      id: "redFox3",
      text: "Flower",
      value: 3,
      class: "Flowers",
    },
    {
      id: "redFox4",
      text: "Fruit",
      value: 4,
      class: "Fruits",
    },
    {
      id: "redFox5",
      text: "Seeds",
      value: 5,
      class: "Seeds",
    },
  ],

  checkBoxes: [
    {
      id: "Sunlight",
      disabled: false,
      text: "Sunlight",
      label: "Sunlight",
    },
    {
      id: "Water",
      disabled: false,
      text: "Water",
      label: "Water",
    },
    {
      id: "Air",
      disabled: false,
      text: "Air",
      label: "Air",
    },
    {
      id: "Nutrients",
      disabled: false,
      text: "Nutrients",
      label: "Nutrients",
    },
  ],
  hints: [
    "Click the button that points to the plant structure that matches the described function. Then, choose a correct name for that structure.",
    "Select all the basic needs each plant structure provides to help keep plants alive. Some structures provide more than one basic need.",
  ],
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "Now that you have identified the plant structures based on their functions, compare how some of those structures help plants meet their basic needs in order to survive.",
  },
  completionScreen: {
    ...globalConfig.completionPopup,
    content:
      "You have correctly identified the roots, stems, leaves, flowers, fruits, and seeds of plants based on their functions. You have also identified the basic needs that roots, stems, and leaves provide plants. Your knowledge of plants got you a job at the STEMscopes Plant Shop! ",
  },
  feedbacks: {
    right: commonData.correctToastMessage,
    wrong: commonData.incorrectToastMessage,
    exception: "This is the correct answer.",
  },
  questionCount: { Question: "Question", of: "of" },
  buttonLabels: { ...commonData.buttonLabels },
  resetPopupText: globalConfig.resetPopupText,

  imagesArr: [image1, image2, image3, image4, image5],
};

export default data;
