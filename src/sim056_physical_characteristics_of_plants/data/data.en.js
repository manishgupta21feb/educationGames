import globalDataSet from "../../app/data";
import instructionImg from "../assets/images/instructionImg.png";
import flower_tab from "../assets/images/flower_tab.png";
import fruit_tab from "../assets/images/fruit_tab.png";
import leaf_tab from "../assets/images/leaf_tab.png";
import root_tab from "../assets/images/root_tab.png";
import seed_tab from "../assets/images/seed_tab.png";
import stem_tab from "../assets/images/stem_tab.png";

import flower from "../assets/images/flower.png";
import fruit from "../assets/images/fruit.png";
import leaf from "../assets/images/leaf.png";
import root from "../assets/images/root.png";
import seed from "../assets/images/seed.png";
import stem from "../assets/images/stem.png";

const data = {
  flower_parts: [
    {
      path: flower,
      aria: "flower",
      classes: "flower",
      alt: "flower of plant",
    },
    {
      path: fruit,
      aria: "fruit",
      classes: "fruit",
      alt: "fruit of plant",
    },
    {
      path: leaf,
      aria: "leaf",
      classes: "leaf",
      alt: "leaf of plant",
    },
    {
      path: root,
      aria: "root",
      classes: "root",
      alt: "root of plant",
    },
    {
      path: seed,
      aria: "seed",
      classes: "seed",
      alt: "seed of plant",
    },
    {
      path: stem,
      aria: "stem",
      classes: "stem",
      alt: "stem of plant",
    },
  ],
  observationMotive:
    "In this simulation, the learner will choose the correct puzzle pieces to complete a picture of a plant in a backyard as they learn about parts of plants.",
  activityHeading: "A Blank Screen.",
  instructionBoxContent: {
    label:
      "All plants have the same basic needs for food, water, and sunlight. They also need to make new plants. Plants have different parts to help them meet those needs. Help identify the plant parts.",
    img: instructionImg,
    alt: "An adult tomato plant growing in the grass with both flowers and fruit. There is a brown fence in the background. The Sun is shining.",
  },
  questionHeading: globalDataSet.questionCounterString2,
  completedImgAlt: "A Blank Screen.",
  InfoBoxContent:
    "Click on the puzzle piece that shows the correct plant part.",
  rightAreaTextDescription:
    "Choose the puzzle piece that has the correct word to make the sentence true.",
  buttonLabels: { ...globalDataSet.buttonLabels },
  completionPopup: {
    ...globalDataSet.completionPopup,
    content: "You have successfully completed the simulation.",
  },
  resetLiveText: globalDataSet.resetLiveText,
  resetMsgContent: globalDataSet.resetPopupText,
  correctToastMsg: globalDataSet.correctToastMessage,
  incorrectToastMsg: globalDataSet.incorrectToastMessage,
  subOptions: [
    {
      srNo: 1,
      id: "Flower",
      label: "Flowers",
      infoText: "Flowers",
      ariaLabel: "Flowers",
      path: "flower_tab",
    },
    {
      srNo: 2,
      id: "Root",
      label: "Root",
      ariaLabel: "Root",
      infoText: "Root",
      path: "root_tab",
    },
    {
      srNo: 3,
      id: "Seed",
      label: "Seed",
      infoText: "Seed",
      ariaLabel: "Seed",
      path: "seed_tab",
    },
    {
      srNo: 4,
      id: "Stem",
      label: "Stem",
      infoText: "Stem",
      ariaLabel: "Stem",
      path: "stem_tab",
    },
    {
      srNo: 5,
      id: "Fruit",
      label: "Fruit",
      ariaLabel: "Fruit",
      infoText: "Fruit",
      path: "fruit_tab",
    },
    {
      srNo: 6,
      id: "Leaf",
      label: "Leaf",
      infoText: "Leaf",
      ariaLabel: "Leaf",
      path: "leaf_tab",
    },
  ],
  questionSet: [
    {
      id: "pcop_qs_1",
      text: "The __________ helps a plant get water.",
      textWithAnswer:
        "The <span aria-hidden='true'> __________ </span> <span class='question_text2'> root </span>&nbsp;helps a plant get water.",
      textWithAria: "The blank helps a plant get water.",
      leftAlt:
        "Light brown roots spreading out from the end of a small, green stem.",
      answerId: "Root",
      leftLive:
        "Light brown roots spreading out from the end of a small, green stem",
    },
    {
      id: "pcop_qs_2",
      text: "The __________ helps the plant stand up straight and tall.",
      textWithAria: "The blank helps the plant stand up straight and tall.",
      leftAlt:
        "Long, green stem with light brown roots spreading out from the end.",
      leftLive:
        "Long, green stem with light brown roots spreading out from the end.",
      textWithAnswer:
        "The <span aria-hidden='true'>__________</span> <span class='question_text2'> stem </span>&nbsp;helps the plant stand up straight and tall.",
      answerId: "Stem",
    },
    {
      id: "pcop_qs_3",
      text: "A __________ helps a plant get sunlight to make food.",
      textWithAria: "A blank helps a plant get sunlight to make food.",
      textWithAnswer:
        "A <span aria-hidden='true'>__________</span> <span class='question_text3'> leaf </span>&nbsp;helps a plant get sunlight to make food.",
      answerId: "Leaf",
      leftAlt:
        "Green leaves growing from a long, green stem with light brown roots spreading out from the end.",
      leftLive:
        "Green leaves growing from a long, green stem with light brown roots spreading out from the end.",
    },
    {
      id: "pcop_qs_4",
      text: "A __________ helps a plant attract bees to spread pollen.",
      textWithAnswer:
        "A <span aria-hidden='true'>__________</span> <span class='question_text1'> flower </span>&nbsp;helps a plant attract bees to spread pollen.",
      answerId: "Flower",
      textWithAria: "A blank helps a plant attract bees to spread pollen.",
      leftAlt:
        "Yellow flowers growing on a plant that has green leaves on a long, green stem with light brown roots spreading out from the end.",
      leftLive:
        "Yellow flowers growing on a plant that has green leaves growing from a long, green stem with light brown roots spreading out from the end.",
    },
    {
      id: "pcop_qs_5",
      text: "The __________ contains seeds for a new plant.",
      textWithAnswer:
        "The <span aria-hidden='true'>__________</span> <span class='question_text2'> fruit </span>&nbsp;contains seeds for a new plant.",
      answerId: "Fruit",
      textWithAria: "The blank contains seeds for a new plant.",
      leftAlt:
        "3 small, red tomatoes growing on a plant with yellow flowers and green leaves on a long, green stem with light brown roots spreading out from the end",
      leftLive:
        "3 small, red tomatoes growing on a plant with yellow flowers and green leaves on a long, green stem with light brown roots spreading out from the end",
    },
    {
      id: "pcop_qs_6",
      text: "A __________ contains a new plant that will grow.",
      textWithAnswer:
        "A <span aria-hidden='true'>__________</span> <span class='question_text5'> seed </span>&nbsp;contains a new plant that will grow.",
      answerId: "Seed",
      textWithAria: "A blank contains a new plant that will grow.",
      leftAlt:
        "3 small, red tomatoes on a plant with another tomato cut in half, yellow flowers, green leaves, green stem and light brown roots spread out at the end.",
      leftLive:
        "3 small, red tomatoes on a plant with another tomato cut in half, yellow flowers, green leaves, green stem and light brown roots spread out at the end.",
    },
  ],
};

export default data;
