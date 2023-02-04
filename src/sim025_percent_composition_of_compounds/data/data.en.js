import globalData from "../../app/data";

const data = {
  instructionText: {
    burger:
      "Drag each ingredient to the scale to determine its mass. Then, find the percent composition of each ingredient using the measured mass.",
    water:
      "Drag each element to the scale to determine its mass. Then, find the percent composition of each element using the measured mass.",
  },
  draggablesBurger: [
    {
      id: "bun_top",
      name: "Bun (top)",
      info: { mass: "40.0", massUnit: "g", percentage: "18.32%" },
      alt: "An electronic balance weighing the top of a hamburger bun. The balance displays a mass of 40.0 g",
    },
    {
      id: "lettuce",
      name: "Lettuce",
      info: { mass: "20.0", massUnit: "g", percentage: "9.16%" },
      alt: "An electronic balance weighing a piece of lettuce. The balance displays a mass of 20.0 g",
    },
    {
      id: "beef_patty",
      name: "Beef patty",
      info: { mass: "113.4", massUnit: "g", percentage: "51.92%" },
      alt: "An electronic balance weighing a beef patty. The balance displays a mass of 113.4 g",
    },
    {
      id: "cheese",
      name: "Cheese",
      info: { mass: "25.0", massUnit: "g", percentage: "11.45%" },
      alt: "An electronic balance weighing a slice of cheese. The balance displays a mass of 25.0 g",
    },
    {
      id: "bun_bottom",
      name: "Bun (bottom)",
      info: { mass: "20.0", massUnit: "g", percentage: "9.16%" },
      alt: "An electronic balance weighing the bottom of a hamburger bun. The balance displays a mass of 20.0 g",
    },
  ],
  draggablesWater: [
    {
      id: "hydrogen",
      name: "Hydrogen",
      info: { mass: "2.016", massUnit: "g", percentage: "11.19%" },
      alt: "An electronic balance weighing two hydrogen atoms. The balance displays a mass of 2.016 g",
    },
    {
      id: "oxygen",
      name: "Oxygen",
      info: { mass: "15.999", massUnit: "g", percentage: "88.81%" },
      alt: "An electronic balance weighing an oxygen atom. The balance displays a mass of 15.999 g",
    },
  ],

  helpText: " Help",
  showText: " Show",

  infoTableCommonText: [
    { id: "mass", name: "Mass (grams)", value: "40.0", label: "show" },
    {
      id: "percentage",
      name: "Percent Composition",
      value: "18%",
      hide: 1,
      labelShow: "show",
      labelHelp: "help",
    },
  ],
  buttonLabels: { ...globalData.buttonLabels },
  resetLiveText: globalData.resetLiveText,
  resetPopupText: globalData.resetPopupText,
  startUpInfoMessage: `What percent of a cheeseburger is the cheese? Percent composition tells us how much of each element in a compound is present in the compound according to its mass. Let's find the percent composition of a cheeseburger!`,
  helpInfoMessagge: [
    "Drag each ingredient or element to the scale to find the mass in grams and record it in the data table.",
    "Find the percent composition of each element using the measured mass. Round your percent composition to two decimal places. The total  percent composition should equal 100%. Select Show to check your answers.",
  ],
  questionInfoMessagge: [
    "Formula to calculate percent composition",
    "Percent composition = (Ingredient mass/Total mass) x 100",
  ],
  questionInfoWaterMessagge: [
    "Formula to calculate percent composition",
    "Percent composition = (Element mass/Total mass) x 100",
  ],

  droppableZones: [
    {
      id: "droppableZone1",
      label: "Droppable Weighing Scale",
      heading: "Calories Weighing Scale",
      altText:
        "An electronic balance with a green base and a blank screen. There is a gray platform on top of the base, which is empty.",
    },
  ],
  burgerTotalMassInfo: {
    type: "burger",
    imageAlt: "A burger made up of lettuce, cheese, a beef patty, and a bun.",
    massLabel: "Total Mass (grams): 218.4",
    percentageLabel: "Total percent composition: 100%",
  },
  waterTotalMassInfo: {
    type: "water",
    imageAlt:
      "A water molecule made up of one oxygen atom and two hydrogen atoms.",
    massLabel: "Total molecular mass (amu): 18.015",
    percentageLabel: "Total percent composition: 100%",
  },
  rightSectionHeading: "Mass and Percent Composition",
  transitionPopup: {
    ...globalData.transitionPopup,
    content:
      "You have calculated the percent composition of a cheeseburger. Let's calculate the percent composition of a water molecule.",
  },
  completionPopup: {
    ...globalData.completionPopup,
    content: "You have calculated the percent composition of a water molecule.",
  },
  onDroppedLiveText: "-1- is dropped on droppable weighing scale.",
  onShowLiveText: "Percent Composition of -1- is -2- ",
};

export default data;
