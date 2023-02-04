import commonData from "../../app/data/data.en";
import DefaultImg from "../assets/images/default.png";
import screen0Img from "../assets/images/image_0011.png";
import gen2Image from "../assets/images/image_0012.png";
import gen3Image from "../assets/images/image_0013.png";
import gen4Image from "../assets/images/image_0014.png";
import gen5Image from "../assets/images/image_0015.png";
import Default2 from "../assets/images/default2.png";
import screen1Img from "../assets/images/image_0021.png";
import screen1Img2 from "../assets/images/image_0022.png";
import screen1Img3 from "../assets/images/image_0023.png";
import screen1Img4 from "../assets/images/image_0024.png";
import pattern1 from "../assets/images/green3x.png";
import pattern2 from "../assets/images/orange3x.png";

const data = {
  buttonLabels: { ...commonData.buttonLabels },
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have successfully completed this simulation!",
  },
  resetMsgContent: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,
  sliderLabel: "Timeline",

  slider0: {
    listitems: [
      { id: 0, value: 0, label: "Generation 0", altImg: "Generation 0 shows 6 tan turtles and 5 green turtles on the sand of a beach. Two birds are circling in the sky.",},
      { id: 1, value: 1, label: "Generation 1", altImg: "Generation 1 shows 5 tan turtles and 5 green turtles on the sand of a beach. Two birds are circling in the sky." },
      { id: 2, value: 2, label: "Generation 2", altImg: "Generation 2 shows 6 tan turtles & 4 green turtles on the sand of a beach. 2 birds are circling in the sky, each with a green turtle in their claws" },
      { id: 3, value: 3, label: "Generation 3" , altImg: "Generation 3 shows 7 tan turtles and 3 green turtles on the sand of a beach. 2 birds are circling in the sky, each with a green turtle in their claws"},
      { id: 4, value: 4, label: "Generation 4" , altImg: "Generation 4 shows 9 tan turtles & 1 green turtle on a sandy beach. 2 birds circling in the sky, 1 with a green turtle in its claws & 1 has tan turtle"},
      { id: 5, value: 5, label: "Generation 5" , altImg: "Generation 5 shows 10 tan turtles & zero green turtles on the sand of a beach. 2 birds are circling in the sky, each has a tan turtle in its claws."},
    ],
  },
  slider1: {
    listitems: [
      { id: 0, value: 0, label: "Ancient Time",altImg:"A corn plant is growing. It looks like a green bush with lots of leaves and branches. A ruler to measure plant height in inches is on the right."},
      { id: 6, value: 1, label: "9,000 Years Ago",altImg:"Close-up 9,000 years ago, corn cob is asymmetrical & irregularly shaped. It is 2 inches tall. Plant looks like a bush with lots of leaves & branches" },
      { id: 7, value: 2, label: "6,000 Years Ago",altImg:"Close-up 6,000 years ago, corn cob is symmetrical & more typically shaped. It is 2 inches tall. Plant looks like a bush with lots of leaves & branches" },
      { id: 8, value: 3, label: "3,000 Years Ago",altImg:"Close-up 3,000 years ago, corn cob is typically shaped. Each cob is 3 inches tall. Plant is taller & thin with long leaves coming off a central stalk." },
      { id: 9, value: 4, label: "Modern Time",altImg:"Close-up modern time, corn cob is typically shaped. Each cob is 6 inches tall. Plant is tall & thin with long leaves growing off a central stalk." },
    ],
  },
  valuetextArray0: {
    0: "Generation 0",
    1: "Generation 1",
    2: "Generation 2",
    3: "Generation 3",
    4: "Generation 4",
    5: "Generation 5",
  },
  valuetextArray1: {
    0: "Ancient Time",
    1: "9,000 Years Ago",
    2: "6,000 Years Ago",
    3: "3,000 Years Ago",
    4: "Modern Time",
  },
  activityHeading:
    "the learner will explore how natural and artificial selection impact different populations.",
  instructionBoxContent:
    "Welcome to Variation Beach. Today, we will explore how natural and artificial selection impact different populations.",
  hintContent:
    "Advance through the stops on the timeline to see how traits in the populations change over generations.</br>In the <b>natural selection timeline</b>,  note the number of individual organisms of each color trait and the trait distribution for the entire population displayed in the circle graph.</br>In the <b>artificial selection timeline</b>, note the height, shape, and organization of the seed kernels.",
  pieChartHeader: "Turtle Population Color Trait Distribution",
  tabs: [
    {
      id: 0,
      tab: "Natural selection",
      classes: "natural",
    },
    {
      id: 1,
      tab: "Artificial selection",
      classes: "artificial",
    },
  ],
  defaultData: [
    {
      id: 0,
      Ost_0:
        "Advance through the stops on the timeline to see how traits in the turtle population change over generations.",
      tabOst0_DefaultImg: DefaultImg,
    },
    {
      id: 1,
      Ost_0:
        "Advance through the stops on the timeline to see how traits in the corn population change over generations.",
      tabOst0_DefaultImg: Default2,
    },
  ],
  cropImgScale: [0, 1, 2, 3, 4, 5, 6],
  scaleUnit: "Inch",
  timelineData1: [
    {
      id: 1,
      travseralId: 1,
      name: "Generation 1",
      classes: "gen1",
      imageSrc: screen0Img,
      altImg: "Beach scene with 5 green turtles and 5 tan turtles.",
      infoText:
        "All <b>populations</b> of organisms have variations in their <b>traits</b>. The turtle population on Variation Beach has two main color trait variations: tan and green.",
      graphData: [50, 50],
      graphLabel: [
        {
          text: "Green, 50%",
          class: "pattern1",
          color: "#4c9c62",
          altText: "Green turtle are 50%",
        },
        {
          text: "Tan, 50%",
          class: "pattern2",
          color: "#9b4c06",
          altText: "Tan turtle are 50%",
        },
      ],
    },
    {
      id: 2,
      travseralId: 2,
      name: "Generation 2",
      classes: "gen2",
      imageSrc: gen2Image,
      altImg:
        "Beach scene with 4 green turtles and 6 tan turtles on land. Birds in sky shown to have caught 2 green turtles.",
      infoText:
        "30 years have passed. The bird population hunts the turtles. The green turtles are easier to see on the sand and are caught more frequently than the tan turtles. Tan turtles are more likely to survive long enough to reproduce and pass on their tan trait to their offspring.",
      graphData: [40, 60],
      graphLabel: [
        {
          text: "Green, 40%",
          class: "pattern1",
          color: "#4c9c62",
          altText: "Green turtle are 40%",
        },
        {
          text: "Tan, 60%",
          class: "pattern2",
          color: "#9b4c06",
          altText: "Tan turtle are 60%",
        },
      ],
    },
    {
      id: 3,
      travseralId: 3,
      name: "Generation 3",
      classes: "gen3",
      imageSrc: gen3Image,
      infoText:
        "40 years have passed. The bird population continues to hunt the turtles. The green turtles are still easier to see on the sand and are caught more frequently than the tan turtles. Tan turtles continue to reproduce and pass on their tan trait to their offspring more often than green turtles.",
      graphData: [30, 70],
      graphLabel: [
        {
          text: "Green, 30%",
          class: "pattern1",
          color: "#4c9c62",
          altText: "Green turtle are 30%",
        },
        {
          text: "Tan, 70%",
          class: "pattern2",
          color: "#9b4c06",
          altText: "Tan turtle are 70%",
        },
      ],
    },
    {
      id: 4,
      travseralId: 4,
      name: "Generation 4",
      classes: "gen4",
      imageSrc: gen4Image,
      infoText:
        "35 more years have passed. The number of turtles with the green color trait has become so rare that the bird population has begun hunting some tan turtles.",
      graphData: [10, 90],
      graphLabel: [
        {
          text: "Green, 10%",
          class: "pattern1",
          color: "#4c9c62",
          altText: "Green turtle are 10%",
        },
        {
          text: "Tan, 90%",
          class: "pattern2",
          color: "#9b4c06",
          altText: "Tan turtle are 90%",
        },
      ],
    },
    {
      id: 5,
      travseralId: 5,
      name: "Generation 5",
      classes: "gen5",
      imageSrc: gen5Image,
      infoText:
        "50 more years have passed. Note the number of individual organisms of each color trait and the trait distribution for the entire population displayed in the circle graph.  How have the genetic traits of the turtle population changed over generations?",
      graphData: [0, 100],
      graphLabel: [
        {
          text: "Green, 0%",
          class: "pattern1",
          color: "#4c9c62",
          altText: "Green turtle are 0%",
        },
        {
          text: "Tan, 100%",
          class: "pattern2",
          color: "#9b4c06",
          altText: "Tan turtle are 100%",
        },
      ],
    },
  ],
  timelineData2: [
    {
      id: 1,
      travseralId: 6,
      name: "9,000 Years Ago",
      classes: "content1",
      imageSrc: screen1Img,
      infoText:
        "A wild grass called teosinte naturally grew across the countryside. Its seeds had a hard outer shell that could not be chewed. These outer shells only opened when the plant had fully matured. Humans chewed the green stalks for nutrients. Note the height, shape, and organization of the yellow seeds.",
    },
    {
      id: 2,
      travseralId: 7,
      name: "6,000 Years Ago",
      classes: "content2",
      imageSrc: screen1Img2,
      infoText:
        " Ancient farmers began intentionally planting the seeds of teosinte plants that had softer shells. Through generation after generation of selectively breeding the plant, the hard outer shell trait disappeared from the plant completely. Now people could eat the seeds (kernels) directly. Note the height, shape, and organization of the seed kernels.",
    },
    {
      id: 3,
      travseralId: 8,
      name: "3,000 Years Ago",
      classes: "content3",
      imageSrc: screen1Img3,
      infoText:
        "It takes a lot of time and energy to successfully grow crops. Farmers at this point wanted the corn plants to yield more corn kernels on each cob. They intentionally only planted seeds from corn plants that had taller corn cobs filled with more kernels and did not plant those that had shorter cobs with less kernels. Note the height, shape, and organization of the seed kernels.",
    },
    {
      id: 4,
      travseralId: 9,
      name: "Modern Time",
      classes: "content4",
      imageSrc: screen1Img4,
      infoText:
        " Modern-day farmers continue to use <b>artificial selection</b> techniques when planting corn. The goal is to produce consistently tall corn cobs with a lot of edible kernels. What other trait variations do you think people selectively breed into their crops? Note the height, shape, and organization of the seed kernels.",
    },
  ],
  patterns: [
    { class: "pattern1", src: pattern1 },
    { class: "pattern2", src: pattern2 },
  ],
};

export default data;
