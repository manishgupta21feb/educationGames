import globalDataSet from "../../app/data/data.en";
import instructionImg from "../assets/images/startInfoImg.png";
import mineralsVideo from "../assets/videos/mineralsVideo.mp4";
import organicVideo from "../assets/videos/organicMatVideo.mp4";
import waterVideo from "../assets/videos/waterVideo.mp4";
import airVideo from "../assets/videos/airVideo.mp4";
import soilImg from "../assets/images/soil.png";

const data = {
  observationMotive:
    "In this simulation, the learner will observe how soil is formed over time.",
  topHeading:
    "Minerals, organisms, air, and water all have important roles in the formation of soil. Click on a section for more information.",
  graphColor: ["#BA5B08", "#0056B3", "#35374C", "#1B8338"],

  pieChartData: [
    {
      SerNo: 1,
      graphData: [45, 55],
      graphLabel: [
        {
          text: "Minerals, 45.0%",
          class: "pattern2",
          altText: "Orange with white stripes represent minerals",
        },
        {
          text: "Others, 55.0%",
          class: "pattern5",
          altText: "Black represents others",
        },
      ],
    },
    {
      SerNo: 2,
      graphData: [5, 95],
      graphLabel: [
        {
          text: "Organic material, 5.0%",
          class: "pattern3",
          altText: "Blue with white stripes represent organic materials",
        },
        {
          text: "Others, 95.0%",
          class: "pattern5",
          altText: "Black represents others",
        },
      ],
    },
    {
      SerNo: 3,
      graphData: [25, 75],
      graphLabel: [
        {
          text: "Water, 25.0%",
          class: "pattern4",
          altText: "Black with white stripes represent water",
        },
        {
          text: "Others, 75.0%",
          class: "pattern5",
          altText: "Black represents others",
        },
      ],
    },
    {
      SerNo: 4,
      graphData: [25, 75],
      graphLabel: [
        {
          text: "Air, 25.0%",
          class: "pattern1",
          altText: "Green with white flecks represents air",
        },
        {
          text: "Others, 75.0%",
          class: "pattern5",
          altText: "Black represents others",
        },
      ],
    },
    {
      SerNo: 5,
      graphData: [45, 5, 25, 25],
      graphLabel: [
        {
          text: "Minerals, 45.0%",
          class: "pattern2",
          altText: "Orange with white stripes represent minerals",
        },
        {
          text: "Organic material, 5.0%",
          class: "pattern3",
          altText: "Blue with white stripes represent organic materials",
        },
        {
          text: "Water, 25.0%",
          class: "pattern4",
          altText: "Black with white stripes represent water",
        },
        {
          text: "Air, 25.0%",
          class: "pattern1",
          altText: "Green with white flecks represents air",
        },
      ],
    },
  ],

  mainScreenData: [
    {
      SerNo: 1,
      text1:
        "The first material in soil is minerals. Minerals—like quartz—are pure substances, whereas rock—like granite—is a mixture of many minerals. There is quartz in granite, but not granite in quartz.",
      text2:
        "Minerals and rocks are broken down over time by weathering to create particles that make up around 45% of any soil mixture.",
      text3:
        "Weathering happens when wind, rain, and ice break minerals down into very small particles. This takes hundreds, sometimes thousands, of years. We study weathering when we talk about how large landforms are made. The exact same process of weathering that makes soil also forms canyons or deltas.",
      videoData: {
        srNo: "1",
        id: "Ques1",
        videoSrc: mineralsVideo,
        alt: "Large rock is heated & cooled making small cracks. It rains, water freezes & ice forms in cracks. Water expands & cracks expand, slowly breaking rock",
      },
      graphAlt:
        "A pie chart with almost half shaded orange with white stripes to represents minerals and the rest shaded black",
    },
    {
      SerNo: 2,
      text1:
        "Organic material means anything that is alive or was once alive. Leaves that fall off a tree and break down over time to become part of the soil are part of a soil's organic material.",
      text2:
        "Plant roots also live in the soil. Then, once the plant dies, they break down and remain a part of the organic material of that soil.",
      text3:
        "Many animals, like bugs and worms, live in soil and are also part of a soil's organic material.",
      videoData: {
        srNo: "2",
        id: "Ques2",
        videoSrc: organicVideo,
        alt: "A view of grass and roots in soil; in the soil living organisms die, but their remains stay in the soil and are broken down.",
      },
      graphAlt:
        "A pie chart with a small section shaded blue with white stripes to represent organic materials and the rest shaded black",
    },
    {
      SerNo: 3,
      text1:
        "The amount of water in a soil varies based on the soil's location on Earth.  Some soils are very full of water, like forest soils, while others are dry, like desert soils. While the amount of water in a soil may vary, water is a part of the formation of all soils at some point in time. Also, water is a basic need for life, so any organic material in soil needs some amount of water to survive.",
      text2:
        "Water from rain or snow seeps through the ground into soil. This water is either used by plants and animals, or it is stored in the spaces between soil particles.",
      text3: "",
      videoData: {
        srNo: "3",
        id: "Ques3",
        videoSrc: waterVideo,
        alt: "Precipitation, like rain, falls from the sky to the ground.  The water travels into the soil by filling in gaps between small grains of dirt.",
      },
      graphAlt:
        "A pie chart with one-fourth shadedblack with white stripes to represent water and three-fourths shaded black",
    },
    {
      SerNo: 4,
      text1:
        "Air is made up of a lot of different gases. Like rocks are mixtures of minerals, air is a mixture of gases. Gases like oxygen and nitrogen gather in the spaces between soil particles and water to help support life in soil.",
      text2:
        " Soils with larger amounts of air are light and fluffy; they are easy to break apart because they have less holding them together. Soils with less air are very dense and heavy.",
      text3: "",
      videoData: {
        srNo: "4",
        id: "Ques4",
        videoSrc: airVideo,
        alt: "Brown soil under green grass; lines of white air are penetrating the soil & a zoom in on water & air filling in the gaps between soil particles",
      },
      graphAlt:
        "A pie chart with one-fourth shaded green with white flecks to represent air and three-fourths shaded black",
    },
    {
      SerNo: 5,
      text1:
        "The way a soil is formed and the materials that make up that soil tell us a lot about an area. Soil scientists work to map soil types. They also work to keep soils healthy by maintaining a healthy balance of water, air, organic material, and minerals. Soil depletion due to human activity—like building, farming, and pollution—is a serious issue soil scientists work on.",
      text2: "",
      text3: "",
      img: soilImg,
      alt: "Cross section of Earth's soil layers: bottom-gray rocks, next-brown soil & gray rocks, then-2 layers of brown soil, top layer-red soil, roots & grass",
      graphAlt:
        "Pie chart showing the general makeup of soils being, minerals, organic materials, water, and air",
    },
  ],

  tabArray: [
    { id: "Minerals", title: "Minerals" },
    { id: "Organic material", title: "Organic material" },
    { id: "Water", title: "Water" },
    { id: "Air", title: "Air" },
    { id: "Soil", title: "Soil" },
  ],
  instructionBoxContent: {
    label:
      "Soil is a general term to describe a complex mixture of minerals, water, air, and organic matter (both living and once living).<br>",
    label2:
      "Soil is made of different mixtures of these materials, making all soils unique to a specific place on Earth. While each soil may be unique, the way all soils are formed is basically the same.",
    img: instructionImg,
    alt: "Land covered with farms growing different crops",
  },
  InfoBoxContent:
    "Click on each section to get detailed information about soil.",
  buttonLabels: { ...globalDataSet.buttonLabels },
  resetLiveText: globalDataSet.resetLiveText,
  resetMsgContent: globalDataSet.resetPopupText,
};

export default data;
