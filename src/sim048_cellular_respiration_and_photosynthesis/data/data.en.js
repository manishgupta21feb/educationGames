import commonData from "../../app/data/data.en";

const data = {
  buttonLabels: { ...commonData.buttonLabels },
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,
  completionPopup: commonData.completionPopup,
  completionPopupText: "You have successfully completed the simulation.",
  partailIncorrectToastMessage: `Some elements are not placed correctly. Try again!`,

  hintText: `First, construct the cellular respiration and photosynthesis reactions.
  Then, identify the organelles where the reactions occur. Finally, 
  place the organelles in the correct cells. Select Submit Answer on each screen to see if you are correct.`,

  observationMotive: `Students will identify the connection between photosynthesis 
  and respiration and identify how both processes work together in the organisms.`,
  initialInfo: {
    text: `Cellular respiration and photosynthesis reactions are the backbone of energy transfer in an ecosystem. 
    How do these two reactions interact with each other?`,
    altText: `A diagram that shows how oxygen flows on Earth in the oxygen cycle`,
    imageTitle: "OXYGEN CYCLE",
    imageTexts: [
      {
        id: "condensation",
        name: "Condensation",
      },
      {
        id: "atmosphericH2O",
        name: "Atmospheric H2O",
      },
      {
        id: "precipitation",
        name: "Precipitation",
      },
      {
        id: "transpiration",
        name: "Transpiration from plants and soil",
      },
      {
        id: "atmosphericO2",
        name: "Atmospheric O2",
        label: "Atmospheric O2",
      },
      {
        id: "evaporation",
        name: "Evaporation",
        label: "Evaporation",
      },
      {
        id: "oxygen",
        name: "Oxygen released from photosynthesis",
      },
      {
        id: "atmosphericCO2",
        name: "Atmospheric CO2",
      },
      {
        id: "uptake",
        name: "CO2 uptake by plants",
      },
      {
        id: "h2oUptake",
        name: "H2O uptake by plants and animals",
      },
      {
        id: "rock",
        name: "Rock weathering",
      },
      {
        id: "animal",
        name: "Animal respiration",
      },
      {
        id: "decay",
        name: "Decay of plants and animal",
      },
      {
        id: "biomass",
        name: "Biomass combustion",
      },
      {
        id: "fossil",
        name: "Fossil fuel combustion",
      },
    ],
  },

  onScreenTexts: {
    0: `Arrange these molecules and energy sources in the correct order for the photosynthesis and respiration reactions. 
    When you are done, click the Submit Answer button.`,
    1: [
      `Where do photosynthesis and respiration take place within the cell?`,
      `Drag the reaction to the box under the organelle where it takes place.`,
    ],
    2: [
      `Which type of cell, animal or plant, do the mitochondria and chloroplasts belong to?`,
      `Drag the organelles to the correct cell(s).`,
    ],
  },

  dragAndDropArea: {
    0: {
      hideList: [
        ["o2", "water", "co2", "atp", "glucose", "sunlight"],
        ["plus", "arrow"],
      ],
      dragBtnAlt: "draggable",
      dropLiveText: " is dropped on ",
      drag: [
        [
          {
            id: "o2",
            name: "O2",
          },
          {
            id: "water",
            name: "Water",
          },
          {
            id: "co2",
            name: "CO2",
            label: "C O2",
          },
          {
            id: "atp",
            label: "Energy ATP",
            name: "Energy",
            imgInfoText: "ATP",
          },
          {
            id: "glucose",
            name: "Glucose",
          },
          {
            id: "sunlight",
            label: "Energy Sunlight",
            name: "Energy",
            imgInfoText: "Sunlight",
          },
        ],
        [
          {
            id: "arrow",
            name: "Reacts to produce",
            // label: "Reacts to produce"
          },
          {
            id: "plus",
            name: "Plus",
            // label: "Plus"
          },
        ],
      ],
      drop: [
        {
          id: "photosynthesis",
          title: "Photosynthesis",
          droppableAltText: "Photosynthesis -1- droppable area",
          dropedAltText: ", -1- dropped",
          dropList: [
            {
              id: "",
              name: "",
              target: ["co2", "water", "sunlight"],
            },
            {
              id: "",
              name: "",
              target: ["plus"],
            },
            {
              id: "",
              name: "",
              target: ["co2", "water", "sunlight"],
            },
            {
              id: "",
              name: "",
              target: ["plus"],
            },
            {
              id: "",
              name: "",
              target: ["co2", "water", "sunlight"],
            },
            {
              id: "",
              name: "",
              target: ["arrow"],
            },
            {
              id: "",
              name: "",
              target: ["o2", "glucose"],
            },
            {
              id: "",
              name: "",
              target: ["plus"],
            },
            {
              id: "",
              name: "",
              target: ["o2", "glucose"],
            },
          ],
        },
        {
          id: "cellularRespiration",
          title: "Cellular Respiration",
          droppableAltText: "Cellular Respiration -1- droppable area",
          dropedAltText: ", -1- dropped",
          dropList: [
            {
              id: "",
              name: "",
              target: ["o2", "glucose"],
            },
            {
              id: "",
              name: "",
              target: ["plus"],
            },
            {
              id: "",
              name: "",
              target: ["o2", "glucose"],
            },
            {
              id: "",
              name: "",
              target: ["arrow"],
            },
            {
              id: "",
              name: "",
              target: ["co2", "water", "atp"],
            },
            {
              id: "",
              name: "",
              target: ["plus"],
            },
            {
              id: "",
              name: "",
              target: ["co2", "water", "atp"],
            },
            {
              id: "",
              name: "",
              target: ["plus"],
            },
            {
              id: "",
              name: "",
              target: ["co2", "water", "atp"],
            },
          ],
        },
      ],
      accessibleList: [
        { id: "chloroplast", text: "", label: "Droppable area, Chloroplast" },
        {
          id: "mitochondrion",
          text: "",
          label: "Droppable area, Mitochondrion",
        },
      ],
    },
    1: {
      imagesAlttext: [
        "A green oval with stacks of green circles inside to represent a chloroplast",
        "A red oval with a pink folded membrane inside to represent a mitochondria",
      ],
      dropLiveText: " is dropped on ",
      drag: [
        {
          id: "photosynthesis",
          target: "chloroplast",
          name: "Photosynthesis",
          dragLabel: "draggable",
          dragDescription: `Chemical equation with pictures shows a carbon dioxide molecule + 
          a drop of water + the Sun with an arrow & an oxygen molecule + a hexagon for glucose`,
          imgInfoTexts: [
            "Carbon dioxide",
            "Water",
            "Energy (Sunlight)",
            "Oxygen",
            "Glucose",
          ],
        },
        {
          id: "cellularRespiration",
          target: "mitochondrion",
          name: "Cellular Respiration",
          dragLabel: "draggable",
          dragDescription: `Chemical equation pictures show 1 oxygen molecule + hexagon for glucose, 
          an arrow, 1 carbon dioxide molecule + a drop of water + yellow oval for ATP`,
          imgInfoTexts: [
            "Oxygen",
            "Glucose",
            "Carbon dioxide",
            "Water",
            "Energy (ATP)",
          ],
        },
      ],
      drop: [
        {
          id: "chloroplast",
          name: "Chloroplast",
          dropLabel: "dropped",
          label: "Droppable area, Chloroplast",
        },
        {
          id: "mitochondrion",
          name: "Mitochondrion",
          dropLabel: "dropped",
          label: "Droppable area, Mitochondrion",
        },
      ],
    },
    2: {
      drag: [
        {
          id: "mitochondrion",
          target: "chloroplast",
          name: "Mitochondrion",
          dragLabel: "draggable",
        },
        {
          id: "chloroplast",
          target: "mitochondrion",
          name: "Chloroplast",
          dragLabel: "draggable",
        },
      ],
      dropLiveText: " is dropped on ",
      drop: [
        {
          id: "plantCell",
          accept: ["mitochondrion", "chloroplast"],
          name: "Plant Cell",
          label: "Droppable area, Plant Cell",
          dropped: ", -1- dropped",
          afterDropped: ", -1- and -2- dropped",
        },
        {
          id: "animalCell",
          accept: ["mitochondrion"],
          name: "Animal Cell",
          label: "Droppable area, Animal Cell",
          dropped: ", -1- dropped",
          afterDropped: ", -1- and -2- dropped",
        },
      ],
    },
  },
};

export default data;
