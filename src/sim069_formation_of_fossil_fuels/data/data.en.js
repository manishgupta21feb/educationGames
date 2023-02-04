import commonData from "../../app/data/data.en";

import oil from "../assets/images/oil/oil.png";
import sedimentary from "../assets/images/sedimentary/sedimentary.png";
import coal from "../assets/images/coal/coal.png";

import coalStep1 from "../assets/images/coal/coal-step1.png";
import coalStep2 from "../assets/images/coal/coal-step2.png";
import coalStep3 from "../assets/images/coal/coal-step3.png";
import coalStep4 from "../assets/images/coal/coal-step4.png";
import coalStep5 from "../assets/images/coal/coal-step5.png";

import oilStep1 from "../assets/images/oil/oil-step1.png";
import oilStep2 from "../assets/images/oil/oil-step2.png";
import oilStep3 from "../assets/images/oil/oil-step3.png";
import oilStep4 from "../assets/images/oil/oil-step4.png";
import oilStep5 from "../assets/images/oil/oil-step5.png";
import oilStep6 from "../assets/images/oil/oil-step6.png";

import sedimentaryStep1 from "../assets/images/sedimentary/sedimentary-step1.png";
import sedimentaryStep2 from "../assets/images/sedimentary/sedimentary-step2.png";
import sedimentaryStep3 from "../assets/images/sedimentary/sedimentary-step3.png";
import sedimentaryStep4 from "../assets/images/sedimentary/sedimentary-step4.png";

import oilImg from "../assets/images/oil-banner.png";
import sedimentaryImg from "../assets/images/sedimentary-banner.png";
import coalImg from "../assets/images/coal-banner.png";

import mainImg from "../assets/images/main.png";

const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  resetLiveText: commonData.resetLiveText,
  buttonLabels: { ...commonData.buttonLabels },
  resetPopupText: commonData.resetPopupText,

  completionPopup: {
    ...commonData.completionPopup,
    content: "You have successfully completed the simulation!",
  },
  closeText: "Close",

  observationMotive:
    "In this simulation, the learner will click and drag steps that are necessary to the formation of fossil fuels and learn how each step contributes to the process.",

  introText:
    "Fossil fuels are used in everyday life. They are used to heat our homes, power our devices, make our cars run, and make up many items like plastic and steel. Fossil fuels come from the ground, but how did they get there? They were formed in the same way that sedimentary rocks were formed. Click Start to learn about how sedimentary rocks and fossil fuels (coal and oil) developed over millions of years.",

  infoText:
    "Click on a picture to learn more about it. Then, determine where on the timeline the picture belongs.",

  istructionText:
    "Choose any one of the substances below to see how it was formed and how each step of the process contributed to its formation.",

  screenText: {
    oil: "Examine the images to determine the order of fossil fuel formation. Click on an image, and then select the correct step on the timeline to show how fossil fuels, like oil and gas, were formed over time.",
    sedimentary:
      "Click on the images to find out how sedimentary rock is formed over time, which can then lead to the formation of fossil fuels.",
    coal: "Click on the images to find out how coal is formed over time. Then, determine the order of the images in the timeline to see how the process works over time.",
  },

  dropzoneText: "step",
  dropzoneBlankText: "Fossil fuel formation Step-",
  dropzoneBlankTextEnd: "Dropzone Blank",

  fossils: [
    {
      id: "oil",
      title: "Oil",
      img: oil,
      alt: "3 different colors of oil being poured into puddles",
    },
    {
      id: "sedimentary",
      title: "Sedimentary rock",
      img: sedimentary,
      alt: "4 images: top left–a building, top right–2 orange globs of hot glass on rods, bottom left–5 different-colored chalk pieces, bottom right–garden soil",
    },
    {
      id: "coal",
      title: "Coal",
      img: coal,
      alt: "A piece of coal, which is a black rock",
    },
  ],

  mainImg: {
    img: mainImg,
    alt: "Log cabin in the snow, blue car to the left of cabin, tree without leaves to the right, electric lines along the left side of the snow-covered road",
  },

  operatables: {
    oil: [
      {
        id: "step1",
        label: "Step 1",
        source: "one",
        img: oilStep1,
        alt: "Underwater view of the ocean with 3 fish, algae, and kelp.",
        title: "demo title",
        description:
          "Ancient organisms swam and grew in seas and valleys millions of years ago. These organisms were once living, which means they were made of organic matter.",
      },
      {
        id: "step2",
        label: "Step 2",
        source: "two",
        img: oilStep2,
        alt: "Underwater view of the ocean with all the once-living organisms dead and on the ocean floor",
        title: "demo title",
        description:
          "As organisms died, their organic material was added to the ocean floor and mixed with the layers of nonliving, or inorganic, material that makes up the ground.",
      },
      {
        id: "step3",
        label: "Step 3",
        source: "three",
        img: oilStep3,
        alt: "Underwater view of the ocean with different-colored layers of soil; all the once-living organisms are in the bottom layer of soil.",
        title: "demo title",
        description:
          "Over time, the organic material was covered with sediments, and the fossils of the once-living organisms became part of sedimentary rock. Sedimentary rock is made up of many layers of small particles that are cemented and compacted together.",
      },
      {
        id: "step4",
        label: "Step 4",
        source: "four",
        img: oilStep4,
        alt: "A rock formation with one large, layered rock in the foreground and a smaller one in the background; the bottom parts of the rocks are underwater",
        title: "demo title",
        description:
          "Weathering breaks rock into smaller particles called sediments, which are added into the layers. These layers of sediments get thicker and thicker over time.",
      },
      {
        id: "step5",
        label: "Step 5",
        source: "five",
        img: oilStep5,
        alt: "Same rock formation image with black arrows showing the pressure on a lower layer from all of the layers on top of it",
        title: "demo title",
        description:
          "As particles, or sediments, pile on top of each other over time, pressure and heat compact the sediments together. The more sediments that build up, the more pressure acts on the sediments below.",
      },
      {
        id: "step6",
        label: "Step 6",
        source: "six",
        img: oilStep6,
        alt: "A rock formation with one large, layered rock in the foreground and a smaller one in the background; the bottom parts of the rocks are underwater",
        title: "demo title",
        description:
          "Millions of years of heat and pressure turned these organic marine remains into oil and natural gas trapped in layers of sedimentary rock.",
      },
    ],
    sedimentary: [
      {
        id: "step1",
        label: "Step 1",
        source: "one",
        alt: "Pieces of rock breaking off of a mountain and falling into the water",
        title: "demo title",
        img: sedimentaryStep1,
        description:
          "Small, loose particles are broken up and moved into areas, such as bodies of water, like rivers, lakes, or oceans, where they settle to the bottom together.",
      },
      {
        id: "step2",
        label: "Step 2",
        source: "two",
        alt: "Pieces of rock break into smaller pieces as they fall down a mountain and into the water.",
        title: "demo title",
        img: sedimentaryStep2,
        description:
          "Sediments are compacted, or pressed together, by layers of sediment above them.",
      },
      {
        id: "step3",
        label: "Step 3",
        source: "three",
        alt: "Pieces of rock break off a mountain and fall, settling onto the ground and building up over the water line",
        title: "demo title",
        img: sedimentaryStep3,
        description:
          "Cementation, caused by minerals in the water that fall to the ground, makes the compacted sediments stick together like glue.",
      },
      {
        id: "step4",
        label: "Step 4",
        source: "four",
        alt: "Different-colored layers of rock built up over water creating a layered formation next to the mountain.",
        title: "demo title",
        img: sedimentaryStep4,
        description:
          "Over time, the seas that covered all of this compacted sediment receded, leaving behind sandstone, shale, and other kinds of sedimentary rock.",
      },
    ],
    coal: [
      {
        id: "step1",
        label: "Step 1",
        source: "one",
        alt: "A view of a swamp both above water and below water; trees and plants can be seen both above and below the water. The water is dark blue-green.",
        title: "demo title",
        img: coalStep1,
        description:
          "Ancient swamps were filled with prehistoric plants and trees.",
      },
      {
        id: "step2",
        label: "Step 2",
        source: "two",
        alt: "The same swamp, but there are no trees and many plants have died.  The swamp organisms like trees and algae are dead in the water.",
        title: "demo title",
        img: coalStep2,
        description:
          "As the plants and trees died, they were covered with layers of soil.",
      },
      {
        id: "step3",
        label: "Step 3",
        source: "three",
        alt: "The same swamp, but the dead organisms are buried below the soil.",
        title: "demo title",
        img: coalStep3,
        description:
          "The soil layers became thicker over time, building heat and pressure below the ground.",
      },
      {
        id: "step4",
        label: "Step 4",
        source: "four",
        alt: "The same swamp, but layers of soil built up over each other with dead organisms in between.",
        title: "demo title",
        img: coalStep4,
        description:
          "Heat and pressure caused the carbon-rich organic material to turn into peat.",
      },
      {
        id: "step5",
        label: "Step 5",
        source: "five",
        alt: "A park setting over the layers of soil with deposits in the lowest layer of soil",
        title: "demo title",
        img: coalStep5,
        description:
          "Thousands of years of heat and pressure caused the peat to turn into coal, which we can burn as fuel.",
      },
    ],
  },

  placements: [
    {
      id: "place-step1",
      value: "One",
      label: "Fossil fuel formation Step 1 dropzone.",
      accept: "one",
      disabled: true,
      placedText: "",
    },
    {
      id: "place-step2",
      value: "Two",
      label: "Fossil fuel formation Step 2 dropzone.",
      accept: "two",
      disabled: true,
      placedText: "",
    },
    {
      id: "place-step3",
      value: "Three",
      label: "Fossil fuel formation Step 3 dropzone.",
      accept: "three",
      disabled: true,
      placedText: "",
    },
    {
      id: "place-step4",
      value: "Four",
      label: "Fossil fuel formation Step 4 dropzone.",
      accept: "four",
      disabled: true,
      placedText: "",
    },
    {
      id: "place-step5",
      value: "Five",
      label: "Fossil fuel formation Step 5 dropzone.",
      accept: "five",
      disabled: true,
      placedText: "",
    },
    {
      id: "place-step6",
      value: "Six",
      label: "Fossil fuel formation Step 6 dropzone.",
      accept: "six",
      disabled: true,
      placedText: "",
    },
  ],

  indicator: [
    {
      id: "step1",
      text: "Step 1",
    },
    {
      id: "step2",
      text: "Step 2",
    },
    {
      id: "step3",
      text: "Step 3",
    },
    {
      id: "step4",
      text: "Step 4",
    },
    {
      id: "step5",
      text: "Step 5",
    },
    {
      id: "step6",
      text: "Step 6",
    },
  ],

  finalScreen: {
    oil: [
      {
        text: "Oil is a nonrenewable energy source. It took millions of years to form, so we must use it wisely. Oil is used for gasoline in our cars and for heating our homes. Many products made of plastic also use oil from fossil fuels in their production.",
        img: oilImg,
        alt: "3 different colors of oil being poured into puddles",
      },
    ],
    sedimentary: [
      {
        text: "Sedimentary rock is used in many different ways. It can be used for buildings, glass making, and making cement.",
        img: sedimentaryImg,
        alt: "4 images: top left–a building, top right–2 orange globs of hot glass on rods, bottom left–5 different-colored chalk pieces, bottom right–garden soil",
      },
    ],
    coal: [
      {
        text: "Coal is used for over one-third of the entire world’s energy, yet it is a nonrenewable resource. In the past, coal was burned to produce fuel for trains and ships and for factories to make steel. Today, coal is mainly used for electricity.",
        img: coalImg,
        alt: "A piece of coal, which is a black rock",
      },
    ],
  },
};

export default data;
