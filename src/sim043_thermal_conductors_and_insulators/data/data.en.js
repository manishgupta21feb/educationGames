import globalConfig from "../../app/data/data.en";

const data = {

  //Introduction Heading
  introductionHeading: "Choose the perfect filler material for this insulator cup so the drink stays warm.",

  //infoText
  infoDialogText: "Drag each filler material to the cup. Watch the graph to see the change in temperature over time.",

  //Reset Toast Content
  resetMsgContent: globalConfig.resetPopupText,

  //Starting Toast Content
  instructionBoxContent: "We can test materials to see if they let heat pass through or hold it in. If a material allows heat to move, it is a conductor. If it holds in heat, we call it an insulator.",

  //Main H1 Heading
  activityHeading: 'In this simulation, the learner will test the thermal conductivity of various materials and sort them into two categories based on simulation results.',

  //Chart Aria Label
  chartAriaLabel: 'Graph is plotting in 30 sec.',

  //Graph Data
  graphData: [
    {
      label: 'copper',
      data: [83, 80, 78, 73, 72, 67, 65, 63, 61, 59, 58]
    },
    {
      label: 'wood_chips',
      data: [83, 81, 80, 78, 77, 76, 74, 74, 72, 71, 70]
    },
    {
      label: 'feathers',
      data: [83, 81, 80, 79, 79, 78, 77, 77, 76, 75, 75]
    },
    {
      label: 'bubbles',
      data: [83, 79, 77, 74, 70, 68, 66, 64, 60, 57, 55]
    }
  ],

  // draggables
  draggables: [
    {
      srNo: 1,
      source: "A",
      id: "copper",
      label: "Copper",
      ariaLabel: "A copper brick draggable"
    },
    {
      srNo: 2,
      source: "A",
      id: "wood_chips",
      label: "Wood chips",
      ariaLabel: "Wood Chips draggable"
    },
    {
      srNo: 3,
      source: "A",
      id: "feathers",
      label: "Feathers",
      ariaLabel: "Feathers draggable"
    },
    {
      srNo: 4,
      source: "A",
      id: "bubbles",
      label: "Bubbles",
      ariaLabel: "Bubbles draggable"
    },
  ],

  //Dropzone
  dropzone: [{
    target: "A",
    id: "dropzone1",
    ariaLabel: "Insulator cup droppable area",
    label: "Insulator cup droppable area",
    alt: "Insulator cup droppable area"
  }],

  //Indicator
  indicatorAriaLabel: [
    {
      id: 'copper',
      text: 'Blue Dot denotes copper',
      altText: 'Thermal cup has copper between walls, is full of hot coffee & on a lab table; graph shows temperature dropping over time; timer shows 30 seconds',
      liveText: 'Graph of temperature change of the hot coffee in the cup with copper insulation shows a change from 83°F to 58°F after 30 seconds'
    },
    {
      id: 'wood_chips',
      text: 'Blue pentagon denotes wood chips',
      altText: 'Thermal cup has wood chips between walls, is full of hot coffee & on a lab table; graph shows temperature dropping over time; timer shows 30 seconds',
      liveText: 'Graph of temperature change of the hot coffee in the cup with wood chip insulation shows a change from 83°F to 70°F after 30 seconds'
    },
    {
      id: 'feathers',
      text: 'Blue Square denotes feathers',
      altText: 'Thermal cup has feathers between walls, is full of hot coffee & on a lab table; graph shows temperature dropping over time; timer shows 30 seconds',
      liveText: 'Graph of temperature change of the hot coffee in the cup with feather insulation shows a change from 83°F to 75°F after 30 seconds'
    },
    {
      id: 'bubbles',
      text: 'Blue Triangle denotes bubbles',
      altText: 'Thermal cup has bubbles between walls, is full of hot coffee & on a lab table; graph shows temperature dropping over time; timer shows 30 seconds',
      liveText: 'Graph of temperature change of the hot coffee in the cup with bubble insulation shows a change from 83°F to 55°F after 30 seconds'
    },
  ],

  // Black Glass Alt Text
  blankGlassAltText: 'A thermal cup with space between walls is full of hot coffee & on a lab table; temperature vs. time graph in background & a timer on the bottom right',

  //Graph Title
  graphTitle: "Temperature over Time",

  //Graph Left Info
  graphLeftInfo: "Temperature (degrees Fahrenheit)",

  //Graph Bottom Info
  graphBottomInfo: "Time (seconds)",

  //Graph Labels
  graphLabels: ["0", "3", "6", "9", "12", "15", "18", "21", "24", "27", "30"],

  //Button Texts
  buttonLabels: { ...globalConfig.buttonLabels },

};

export default data;
