import commonData from "../../app/data/data.en";
import nails from "../assets/images/nails.png";
import water from "../assets/images/water.png";

const data = {
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have successfully completed the simulation.",
  },

  buttonLabels: { ...commonData.buttonLabels },
  Next: commonData.buttonLabels.next,
  finish: commonData.buttonLabels.finish,
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  resetLiveText: commonData.resetLiveText,
  buttonLabels: { ...commonData.buttonLabels },
  resetPopupText: commonData.resetPopupText,
  observationMotive:
    "In this simulation, the learner will explore matter as it is viewed at different levels.",
  introText: [
    "Matter is everywhere. Matter can be a solid, a liquid, or a gas. Here we have two examples of matter we see regularly: nails and water.",
    "Today, you will zoom in closer and closer to the matter of your choice to see what it looks like at its most basic level.",
  ],
  infoText:
    "Default screen: Click a matter of your choice to zoom in closer and see it at the most basic level.",

  infoWater: "Slide the dot to zoom in closer to water.",

  infoNail: "Slide the dot to zoom in closer to Nail.",

  value: " Step ",

  home: {
    title: "Pick the matter you want to explore.",
    frames: [
      {
        id: "viewFromSpace",
        img: nails,
        alt: "A group of silver-colored metal nails",
        title: "Iron nails",
        target: "viewFromSpace",
        heading: [
          "",
          "Nails are commonly used in construction to hold pieces of wood together.  In fact, nails were used by Egyptians around 3400 BC, and they looked basically the same then as they do now.  If it works, don’t fix it!",
          "Cutting into a nail and getting a closer look, we see that not much has changed.",
          "Most nails now are not made of pure iron, but you can see that this one is made of a group of atoms of only one type of element tightly packed together.",
          "Looking at one atom of iron alone, we see that it has 26 protons and 26 electrons.<br>We cannot actually see single atoms of any element. Scientists have developed models like these to give us an idea of what they look like.",
        ],

        headingText: [
          "",
          "Nails are commonly used in construction to hold pieces of wood together.  In fact, nails were used by Egyptians around 3400 BC, and they looked basically the same then as they do now.  If it works, don’t fix it!",
          "Cutting into a nail and getting a closer look, we see that not much has changed.",
          "Most nails now are not made of pure iron, but you can see that this one is made of a group of atoms of only one type of element tightly packed together.",
          "Looking at one atom of iron alone, we see that it has 26 protons and 26 electrons.We cannot actually see single atoms of any element. Scientists have developed models like these to give us an idea of what they look like.",
        ],

        texting: [
          "",
          "Nails",
          "Nail cross section",
          "Iron atoms",
          "One iron atom",
        ],
        altText: [
          "",
          "The slider is set to zoom at step 1 and shows a closer view of the nails. They look bigger, but the individual nails can still be seen.",
          "The slider is set to zoom  at step 2 and shows an even closer view of the nails, The close-up shows the shiny, silver metal the nails are made of.",
          "The slider is set to zoom  at step 3 and shows the individual atoms of iron packed together in tight, rigid rows.",
          "Slider set to zoom in at step 4 and shows one atom of iron with 26 protons & 30 neutrons in the nucleus & 26 electrons in three shells orbiting the nucleus.",
        ],
      },
      {
        id: "viewFromEarth",
        img: water,
        alt: "A blue puddle of splashing water",
        title: "Water",
        target: "viewFromEarth",
        heading: [
          "",
          "Liquid water is one of life's basic needs.",
          "A closer look at water shows that it is a compound of two types of matter sticking together in interesting patterns. These patterns are easily broken and put back together, which you can feel when you run your hand through water. You are breaking the water bonds apart, and they are quickly rejoining themselves once you move your hand.",
          "When we look at one water molecule alone, we see that it is made of two hydrogen atoms and one oxygen atom. What shape does this remind you of? Maybe a popular cartoon character?",
          "The hydrogen atom alone is the lightest element. It contains one negatively charged electron and one positively charged proton. This means it is neutral, neither negative nor positive.<br><br>The oxygen atom consists of 8 protons and 8 electrons, meaning it is also a neutral element.<br><br>We cannot actually see single atoms of any element. Scientists have developed models like these to give us an idea of what they look like.",
        ],
        headingText: [
          "",
          "Liquid water is one of life's basic needs.",
          "A closer look at water shows that it is a compound of two types of matter sticking together in interesting patterns. These patterns are easily broken and put back together, which you can feel when you run your hand through water. You are breaking the water bonds apart, and they are quickly rejoining themselves once you move your hand.",
          "When we look at one water molecule alone, we see that it is made of two hydrogen atoms and one oxygen atom. What shape does this remind you of? Maybe a popular cartoon character?",
          "The hydrogen atom alone is the lightest element. It contains one negatively charged electron and one positively charged proton. This means it is neutral, neither negative nor positive.The oxygen atom consists of 8 protons and 8 electrons, meaning it is also a neutral element.We cannot actually see single atoms of any element. Scientists have developed models like these to give us an idea of what they look like.",
        ],

        texting: [
          "",
          "Water",
          "Water molecules",
          "One water molecule",
          "Oxygen",
          "Hydrogen",
        ],

        legendText: ["", "", "Hydrogen", "Hydrogen", "Proton"],

        legendImage: ["", ""],

        altText: [
          "",
          "The slider is set to zoom  at step 1 and shows a closer view of the water. The splash looks bigger, but the puddle can still be seen.",
          "The slide is set to zoom  at step 2 and  shows many water molecules. Each water molecule has 2 gray circles for hydrogen attached to 1 red circle for oxygen.",
          "The slide is set to zoom at step 3 and shows close-up of 3 water molecules. Each molecule has 2 gray circles for hydrogen attached to 1 red circle for oxygen.",
          "The slide is set to zoom at step 4 and shows 2 hydrogen atoms with 1 proton in nucleus & 1 electron orbiting & 1 oxygen with 8 neutrons & 8 protons in nucleus & 8 electrons orbiting.",
        ],
      },
    ],
  },

  view: [
    {
      id: "viewSpace",
      source: "viewFromSpace",
      videoContent: {
        labels: ["Spain", "New Zealand"],
        class: "space-view",
      },
    },
    {
      id: "viewEarth",
      source: "viewFromEarth",
    },
  ],

  sliderTitle: "Drag the slider to see how the sky and the shadow change.",

  spaceButton: [
    {
      id: 1,
      legend: [],
    },
    {
      id: 2,
      legend: [],
    },
    {
      id: 3,
      legend: [],
    },
    {
      id: 4,
      legend: [
        {
          id: "protons",
          text: "Protons",
          altText: "red circle denotes protons",
        },
        {
          id: "neutrons",
          text: "Neutrons",
          altText: "blue circle denotes neutron",
        },
        {
          id: "electrons",
          text: "Electrons",
          altText: "gold circle denotes electrons",
        },
      ],
    },
  ],

  waterButton: [
    {
      id: 1,
      legend: [],
    },
    {
      id: 2,
      legend: [
        {
          id: "hydrogen",
          text: "Hydrogen",
          altText: "gray circle denotes hydrogen",
        },
        {
          id: "oxygen",
          text: "Oxygen",
          altText: "red circle denotes oxygen",
        },
      ],
    },
    {
      id: 3,
      legend: [
        {
          id: "hydrogen",
          text: "Hydrogen",
          altText: "gray circle denotes hydrogen",
        },
        {
          id: "oxygen",
          text: "Oxygen",
          altText: "red circle denotes oxygen",
        },
      ],
    },
    {
      id: 4,
      legend: [
        {
          id: "protons",
          text: "Protons",
          altText: "red circle denotes protons",
        },
        {
          id: "neutrons",
          text: "Neutrons",
          altText: "blue circle denotes neutron",
        },
        {
          id: "electrons",
          text: "Electrons",
          altText: "gold circle denotes electrons",
        },
      ],
    },
  ],

  slider: {
    listitems: [
      {
        id: 1,
        value: 1,
        label: "",
        legend: [
          { id: "viewFromSpace", data: [] },
          { id: "viewFromEarth", data: [] },
        ],
      },
      {
        id: 2,
        value: 2,
        label: "",
        legend: [
          { id: "viewFromSpace", data: [] },
          {
            id: "viewFromEarth",
            data: [
              {
                id: "hydrogen",
                text: "Hydrogen",
                altText: "gray circle denotes hydrogen",
              },
              {
                id: "oxygen",
                text: "Oxygen",
                altText: "red circle denotes oxygen",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        value: 3,
        label: "",
        legend: [
          { id: "viewFromSpace", data: [] },
          {
            id: "viewFromEarth",
            data: [
              {
                id: "hydrogen",
                text: "Hydrogen",
                altText: "gray circle denotes hydrogen",
              },
              {
                id: "oxygen",
                text: "Oxygen",
                altText: "red circle denotes oxygen",
              },
            ],
          },
        ],
      },
      {
        id: 4,
        value: 4,
        label: "",
        legend: [
          {
            id: "viewFromSpace",
            data: [
              {
                id: "protons",
                text: "Protons",
                altText: "red circle denotes protons",
              },
              {
                id: "neutrons",
                text: "Neutrons",
                altText: "blue circle denotes neutron",
              },
              {
                id: "electrons",
                text: "Electrons",
                altText: "gold circle denotes electrons",
              },
            ],
          },
          {
            id: "viewFromEarth",
            data: [
              {
                id: "protons",
                text: "Protons",
                altText: "red circle denotes protons",
              },
              {
                id: "neutrons",
                text: "Neutrons",
                altText: "blue circle denotes neutron",
              },
              {
                id: "electrons",
                text: "Electrons",
                altText: "gold circle denotes electrons",
              },
            ],
          },
        ],
      },
    ],
  },

  sliderLabel: "Slide the dot to zoom in closer",

  valuetextArray: {
    1: "",
    2: "",
    3: "",
    4: "",
  },
};

export default data;
