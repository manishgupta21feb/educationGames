import commonData from "../../app/data";

import pattern1 from "../assets/images/textures0001.png";
import pattern2 from "../assets/images/textures0002.png";
import pattern3 from "../assets/images/textures0003.png";
import pattern4 from "../assets/images/textures0004.png";
import pattern5 from "../assets/images/textures0005.png";
import pattern6 from "../assets/images/textures0006.png";
import pattern7 from "../assets/images/textures0007.png";

const data = {
  buttonLabels: { ...commonData.buttonLabels },
  initialTexts: {
    text1: `Today, you’re going to use time-travel software to skip through 
    the future and see how long it will take before the forest looks like this again.
    `,
    text2: `Select the type of catastrophic event that destroyed the forest. Then, journey 
    through the future by visiting each of the ecological succession stops on the time scale. 
    Make sure to note what you see as well as the data about the different species at each stop.`,
  },

  infoImageAltText:
    "Trail running through a forest. Forest includes a variety of trees, bushes, grasses, mushrooms, and butterflies.",

  graphTitle: "Species Diversity",

  screen0: {
    screenName: "volcanic",
    screenTitle: "Volcanic Eruption",
    animationAltText: `This image appears step wise from the left fragment towards the right, 
    showing all the stages of ecological succession.`,
    infoText: `A volcano erupted near the trail, and new lava flowed from it. The lava cooled, 
    hardened, and has created a new rock layer. Use the ecological succession time scale buttons to visit 
    each stop in the future.
    `,
    stopData: [
      {
        name: "stop1",
        infoText: "<p>Hardened volcanic <b>rock</b> covers the area.</p>",
        buttonText: "Year 0",
        altText:
          "Ecosystem with only bare rock. No live is evident. No soil exists.",
        graphLabel: [
          {
            text: "Bare Rock, 100%",
            class: "pattern6",
            altText: "Black Bare Rock legend",
          },
        ],
        graphData: [100],
      },
      {
        name: "stop2",
        infoText: `<p>The <b>pioneer species</b> have arrived! <b>Lichens and mosses</b> have begun to form on the bare rock.
         As these organisms slowly weather the rocks and decay, soil begins to form.</p>`,
        buttonText: "Year 5",
        altText:
          "Ecosystem with rocks. All rocks have small green organisms growing on top. No soil exists.",
        graphLabel: [
          {
            text: "Bare Rock, 50%",
            class: "pattern6",
            altText: "Black Bare Rock legend",
          },
          {
            text: "Lichens and Mosses, 50%",
            class: "pattern7",
            altText: "Orange Lichens and Mosses legend",
          },
        ],
        graphData: [50, 50],
      },
      {
        name: "stop3",
        infoText: `The lichens and mosses continue to help create soil. 
        There is now enough soil for <b>weeds and grasses</b> to begin growing.        `,
        buttonText: "Year 8",
        altText:
          "Ecosystem with a few rocks and some grass. Thin soil depth exists above bedrock.",
        graphLabel: [
          {
            text: "Lichens and Mosses, 15%",
            class: "pattern7",
            altText: "Orange Lichens and Mosses legend",
          },
          {
            text: "Weeds and Grasses, 85%",
            class: "pattern2",
            altText: "Yellow Weeds and Grasses legend",
          },
        ],
        graphData: [15, 85],
      },
      {
        name: "stop4",
        infoText: `As the weeds and grasses die and break down, 
        their organic material helps to increase the amount of soil. 
        The deeper soil allows larger plants, like <b>bushes and shrubs</b>, to grow.
        `,
        buttonText: "Year 25",
        altText:
          "Ecosystem completely covered in grasses and wildflowers. Soil level depth increases.",
        graphLabel: [
          {
            text: "Lichens and Mosses, 5%",
            class: "pattern7",
            altText: "Orange Lichens and Mosses legend",
          },
          {
            text: "Weeds and Grasses, 65%",
            class: "pattern2",
            altText: "Yellow Weeds and Grasses legend",
          },
          {
            text: "Bushes and Shrubs, 30%",
            class: "pattern3",
            altText: "Green Bushes and Shrubs legend",
          },
        ],
        graphData: [5, 65, 30],
      },
      {
        name: "stop5",
        infoText: `As the bushes and shrubs, along with the weeds and grasses, 
        die and break down, their combined organic material helps to increase 
        the amount of soil even more. The deeper soil allows larger plants, like <b>young trees</b>, to grow.
        `,
        buttonText: "Year 100",
        altText:
          "Ecosystem completely covered in grasses. Small to medium trees growing. Soil level depth increases significantly. ",
        graphLabel: [
          {
            text: "Lichens and Mosses, 2%",
            class: "pattern7",
            altText: "Orange Lichens and Mosses legend",
          },
          {
            text: "Weeds and Grasses, 45%",
            class: "pattern2",
            altText: "Yellow Weeds and Grasses legend",
          },
          {
            text: "Bushes and Shrubs, 40%",
            class: "pattern3",
            altText: "Green Bushes and Shrubs legend",
          },
          {
            text: "Young Trees, 13%",
            class: "pattern4",
            altText: "Purple Young Trees legend",
          },
        ],
        graphData: [2, 45, 40, 13],
      },
      {
        name: "stop6",
        infoText: `The forest has reached <b>climax community</b> status! That means it has <b>mature trees</b>
        and is fully restored to its state prior to the catastrophic event.`,
        buttonText: "Year 200",
        altText:
          "Ecosystem completely covered in grasses. Large, tall trees growing. Soil level depth at highest level.",
        graphLabel: [
          {
            text: "Lichens and Mosses, 2%",
            class: "pattern7",
            altText: "Orange Lichens and Mosses legend",
          },
          {
            text: "Bushes and Shrubs, 30%",
            class: "pattern3",
            altText: "Green Bushes and Shrubs legend",
          },
          {
            text: "Mature Trees, 5%",
            class: "pattern5",
            altText: "Blue Mature Trees legend",
          },
          {
            text: "Weeds and Grasses, 48%",
            class: "pattern2",
            altText: "Yellow Weeds and Grasses legend",
          },
          {
            text: "Young Trees, 15%",
            class: "pattern4",
            altText: "Purple Young Trees legend",
          },
        ],
        graphData: [2, 30, 5, 48, 15],
      },
    ],
    finalStages: [
      {
        name: "Pioneer Stages",
        altText: "Year 0 to Year 25.",
      },
      {
        name: "Intermediate Stages",
        altText: "Year 25 to Year 100.",
      },
      {
        name: "Climax Community",
        altText: "Year 100 to Year 200.",
      },
    ],
  },
  screen1: {
    screenName: "wildfire",
    screenTitle: "Wildfire",
    animationAltText: `This image appears step wise from the left fragment towards the right, 
    showing all the stages of ecological succession.`,
    infoText: `A lightning strike sparked a large wildfire that burned through the forest. 
    Use the ecological succession time scale buttons to visit each stop in the future.
    `,
    stopData: [
      {
        name: "stop1",
        infoText: `The wildfire burned through the forest, killing all living organisms.
         It left behind charred tree trunks and a layer of <b>soil</b>.`,
        buttonText: "Year 0",
        altText: "Burning trees and fire still burning. Large soil depth.",
        graphLabel: [
          {
            text: "Soil, 100%",
            class: "pattern1",
            altText: "Orange Soil legend",
          },
        ],
        graphData: [100],
      },
      {
        name: "stop2",
        infoText: `The <b>pioneer species</b> have arrived! <b>Weeds and grasses</b> have started to grow in the soil.`,
        buttonText: "Year 1",
        altText:
          "Ecosystem completely covered in grasses and wildflowers. Large soil depth.",
        graphLabel: [
          {
            text: "Weeds and Grasses, 100%",
            class: "pattern2",
            altText: "Yellow Weeds and Grasses Legend",
          },
        ],
        graphData: [100],
      },
      {
        name: "stop3",
        infoText: `As the weeds and grasses die and break down, 
        their organic material helps to increase the amount of soil. 
        The deeper soil allows larger plants, like <b>bushes and shrubs</b>, to grow.`,
        buttonText: "Year 18",
        altText:
          "Ecosystem completely covered in grasses and wildflowers. A few bushes added. Large soil depth.",
        graphLabel: [
          {
            text: "Weeds and Grasses, 70%",
            class: "pattern2",
            altText: "Yellow Weeds and Grasses legend",
          },
          {
            text: "Bushes and Shrubs, 30%",
            class: "pattern3",
            altText: "Green Bushes and Shrubs legend",
          },
        ],
        graphData: [70, 30],
      },
      {
        name: "stop4",
        infoText: `As the bushes and shrubs, along with the weeds and grasses, 
        die and break down, their combined organic material helps to increase the amount of soil even more. 
        The deeper soil allows larger plants, like <b>young trees</b>, to grow.`,
        buttonText: "Year 70",
        altText:
          "Ecosystem completely covered in grasses. Small to medium trees growing. Large soil depth.",
        graphLabel: [
          {
            text: "Weeds and Grasses, 50%",
            class: "pattern2",
            altText: "Yellow Weeds and Grasses legend",
          },
          {
            text: "Bushes and Shrubs, 35%",
            class: "pattern3",
            altText: "Green Bushes and Shrubs legend",
          },
          {
            text: "Young Trees, 15%",
            class: "pattern4",
            altText: "Purple Young Trees legend ",
          },
        ],
        graphData: [50, 35, 15],
      },
      {
        name: "stop5",
        infoText: `The forest has reached <b>climax community</b> status! 
        That means it has <b>mature trees</b> and is fully restored to its state prior to the catastrophic event.`,
        buttonText: "Year 100",
        altText:
          "Ecosystem completely covered in grasses. Large, tall trees growing. Large soil depth.",
        graphLabel: [
          {
            text: "Weeds and Grasses, 35%",
            class: "pattern2",
            altText: "Yellow Weeds and Grasses legend",
          },
          {
            text: "Bushes and Shrubs, 25%",
            class: "pattern3",
            altText: "Green Bushes and Shrubs legend",
          },
          {
            text: "Young Trees, 25%",
            class: "pattern4",
            altText: "Purple Young Trees legend",
          },
          {
            text: "Mature Trees, 15%",
            class: "pattern5",
            altText: "Blue Mature Trees legend",
          },
        ],
        graphData: [35, 25, 25, 15],
      },
    ],
    finalStages: [
      {
        name: "Pioneer Stages",
        altText: "Year 0 to Year 18.",
      },
      {
        name: "Intermediate Stages",
        altText: "Year 18 to Year 70.",
      },
      {
        name: "Climax Community",
        altText: "Year 70 to Year 100.",
      },
    ],
  },

  buttonStart: "Start",
  buttonClose: "Close",
  buttonNext: "Next",
  buttonFinish: "Finish",
  buttonContinue: "Continue",

  launchScreenButtons: {
    volcanicEruption: "Volcanic Eruption",
    wildfire: "Wildfire",
  },

  header: {
    buttonReset: "Reset",
    buttonInfo: "Info",
  },

  StartUpInfo: {
    buttonContinueText: "Start",
    buttonContinueLabel: "Start",
    content: `This trail used to be my family’s favorite. 
    We would hike it every summer that we visited STEMscopes National Park. 
    Unfortunately, there was a catastrophic event that destroyed the forest.`,
  },

  info: {
    content: `Click the button to select the type of catastrophic event. 
    Then, use the buttons on the time scale to advance through the stages of ecological succession.`,
    buttonContinueText: "Close",
    buttonContinueLabel: "Close",
  },

  reset: {
    content: "Are you sure you want to reset?",
    resetButtonText: "Yes",
    resetButtonLabel: "Yes",
    buttonContinueText: "No",
    buttonContinueLabel: "No",
  },
  patterns: [
    { class: "pattern1", src: pattern1 },
    { class: "pattern2", src: pattern2 },
    { class: "pattern3", src: pattern3 },
    { class: "pattern4", src: pattern4 },
    { class: "pattern5", src: pattern5 },
    { class: "pattern6", src: pattern6 },
    { class: "pattern7", src: pattern7 },
  ],
};

export default data;
