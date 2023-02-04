import globalConfig from "../../app/data";

const data = {
  stage1: {
    instructionText:
      "Drag each of the nine substances to their proper place on the pH scale. Remember, 7 is neutral. Acids have a pH below 7, and bases have a pH above 7.",
    elements: [
      {
        name: "Battery Acid",
      },
      {
        name: "Lemon Juice",
      },
      {
        name: "Tomato Juice",
      },
      {
        name: "Normal Rain",
      },
      {
        name: "Distilled Water",
      },
      {
        name: "Baking Soda",
      },
      {
        name: "Soft Soap",
      },
      {
        name: "Ammonia",
      },
      {
        name: "Lye",
      },
    ],
    dropRegionDetail: "Droppable area with ",
    droppableAltText: [
      "pH value 1, Red-Pink",
      "pH value between 2 and 3, Orange",
      "pH value 4, Beige - Yellow",
      "pH value between 5 and 6, Lime Green",
      "pH value 7, Green - Dark Green",
      "pH value between 8 and 9, Light Blue",
      "pH value 10, Pale Blue - Blue",
      "pH value between 11 and 12, Dark Blue",
      "pH value 13, Violet - Purple",
    ],
    colors: [
      {
        name: "Red",
        class: "red",
        altText:"pH value 1",
      },
      {
        name: "Pink",
        class: "pink",
        altText:"pH value 1",

      },
      {
        name: "Orange",
        class: "orange",
        altText:"pH value between 2 and 3",

      },
      {
        name: "Beige",
        class: "beige",
        altText:"pH value 4",

      },
      {
        name: "Yellow",
        class: "yellow",
        altText:"pH value 4",

      },
      {
        name: "Lime Green",
        class: "lime-green",
        altText:"pH value between 5 and 6",

      },
      {
        name: "Green",
        class: "green",
        altText:"pH value 7",

      },
      {
        name: "Dark Green",
        class: "dark-green",
        altText:"pH value 7",

      },
      {
        name: "Light Blue",
        class: "light-blue",
        altText:"pH value between 8 and 9",

      },
      {
        name: "Pale Blue",
        class: "pale-blue",
        altText:"pH value 10",

      },
      {
        name: "Blue",
        class: "blue",
        altText:"pH value 10",

      },
      {
        name: "Dark Blue",
        class: "dark-blue",
        altText:"pH value between 11 and 12",

      },
      {
        name: "Violet",
        class: "violet",
        altText:"pH value 13",

      },
      {
        name: "Purple",
        class: "purple",
        altText:"pH value 13",

      },
    ],
    colorHeader: [
      "Acidic (less than 7)",
      "Neutral (7)",
      "Basic (greater than 7)",
    ],
  },

  stage2: {
    instructionText:
      "Are the following statements properties of acids or bases? Drag each statement to the correct box. ",
    elements: [
      {
        name: "A solution with a pH of about 3",
        accept: "acid",
      },
      {
        name: "Hydrochloric acid",
        accept: "acid",
      },
      {
        name: "High hydrogen ion concentration",
        accept: "acid",
      },
      {
        name: "A solution with a pH of about 11",
        accept: "base",
      },
      {
        name: "Causes skin to feel slippery",
        accept: "base",
      },
      {
        name: "Hydrogen ion concentration of 10 power -2",
        htmlText: "Hydrogen ion concentration of 10<sup>-2</sup>",
        accept: "acid",
      },
      {
        name: "Hydrogen ion concentration of 10 power -9",
        htmlText: "Hydrogen ion concentration of 10<sup>-9</sup>",
        accept: "base",
      },
      {
        name: "Sour taste",
        accept: "acid",
      },
      {
        name: "Low hydrogen ion concentration",
        accept: "base",
      },
      {
        name: "Bitter taste",
        accept: "base",
      },
      {
        name: "Sodium hydroxide",
        accept: "base",
      },
    ],
    dropRegionDetail: "Droppable Region",
    droppableDetail: [
      {
        title: "Acid Properties",
        name: "acid",
      },
      {
        title: "Base Properties",
        name: "base",
      },
    ],
  },
  resetPopup: globalConfig.resetPopupText,
  resetLiveText: globalConfig.resetLiveText,
  buttonLabels: { ...globalConfig.buttonLabels },
  infoMessage: "Drag each box to the correct place!",
  startupMessage: `A chemical solution's pH is a measure of how acidic or basic (alkaline) the solution is. The pH of a solution is determined by the hydrogen ion concentration for each solution. Acids have a very high hydrogen ion concentration, and bases have a very low hydrogen ion concentration.\nIn this simulation, you will organize acids and bases on the pH scale according to their hydrogen ion concentrations.`,
  toastMsg: {
    correct: globalConfig.correctToastMessage,
    incorrect: globalConfig.incorrectToastMessage,
  },
  transitionPopup: {
    ...globalConfig.transitionPopup,
    content:
      "Now that you have explored the pH of various acids and bases, show what you know.",
  },
  completionPopup: {
    ...globalConfig.completionPopup,
    content:
      "You have answered all the questions on the pH of acids and bases.",
  },
};

export default data;
