import globalData from "../../app/data/data.en";
const buttonLabels = { ...globalData.buttonLabels };

const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: buttonLabels.start,
  buttonContinueLabel: buttonLabels.start,
  content:
    "Choose an item to see how it changes when heat is added or removed.",
};

const infoString = [
  `Select a material from the lab bench. To place the material on the hot plate and add heat, select "Warmest" on the thermometer. To place the material in the ice box and remove heat, select "Coldest" on the thermometer.`,
];

const RawTextData = {
  classifyingMatterContent: [
    {
      id: 1,
      label: "Chocolate",
      alt: "Chocolate",
      className: "ice-cream",
      liveText:
        "On a lab table, a glass bowl of chocolate is to the left of a hot plate and freezer. A thermometer on the far left shows the middle temperature.",
      buttons: [
        {
          id: 0,
          label: "Warmest",
          dataTitle: "Chocolate (heat added)",
          itemname: "Chocolate",
          itemClass: "chocolate1",
          className: "temp-button-one",
          table: [
            { id: 1, info: ["Thermometer", "Warmest"] },
            { id: 2, info: ["State of Matter", "Solid"] },
            { id: 3, info: ["Texture", "Flaky"] },
            { id: 4, info: ["Color", "Dark brown"] },
          ],
          backgroundImg: "2",
          altText:
            "A bowl of melted chocolate is on the hot plate of same lab table. The chocolate is in the shape of the bowl and thermometer shows warmest temperature",
          state: "Liquid",
          liveText:
            "A bowl of melted chocolate is on the hot plate of same lab table. The chocolate is in the shape of the bowl and thermometer shows warmest temperature",
        },
        {
          id: 1,
          label: "Middle",
          itemname: "Chocolate",
          itemClass: "chocolate2",
          dataTitle: "Chocolate",
          className: "temp-button-two",
          table: [
            { id: 1, info: ["Thermometer", "Middle"] },
            { id: 2, info: ["State of Matter", "Liquid"] },
            { id: 3, info: ["Texture", "Slippery"] },
            { id: 4, info: ["Color", "Brown"] },
          ],

          backgroundImg: "1",
          altText:
            "On a lab table, a glass bowl of chocolate is to the left of a hot plate and freezer. A thermometer on the far left shows the middle temperature.",
          state: "Partially melted",
          liveText:
            "On a lab table, a glass bowl of chocolate is to the left of a hot plate and freezer. A thermometer on the far left shows the middle temperature.",
        },
        {
          id: 2,
          label: "Coldest",
          dataTitle: "Chocolate (heat removed)",
          itemname: "Chocolate",
          itemClass: "chocolate3",
          className: "temp-button-three",
          table: [
            { id: 1, info: ["Thermometer", "Coldest"] },
            { id: 2, info: ["State of Matter", "Solid"] },
            { id: 3, info: ["Texture", "Smooth"] },
            { id: 4, info: ["Color", "Light brown"] },
          ],

          backgroundImg: "0",
          altText:
            "A bowl of chocolate is in the freezer on same lab table. Chocolate is in the shape of cubes from the freezer and thermometer shows coldest temperature",
          state: "Solid",
          liveText:
            "A bowl of chocolate is in the freezer on same lab table. Chocolate is in the shape of cubes from the freezer and thermometer shows coldest temperature",
        },
        // {
        //   id: 3,
        //   className: "temp-button-zerotwo",
        // },
      ],
    },
    {
      id: 2,
      label: "Cheese",
      alt: "Cheese",
      className: "chocolate",
      liveText:
        "On a lab table, a glass bowl of cheese is to the left of a hot plate and freezer. A thermometer on the far left shows the middle temperature.",
      buttons: [
        {
          id: 0,
          label: "Warmest",
          dataTitle: "Cheese (heat added)",
          itemname: "Cheese",
          className: "temp-button-seven",
          table: [
            { id: 1, info: ["Thermometer", "Warmest"] },
            { id: 2, info: ["State of Matter", "Liquid"] },
            { id: 3, info: ["Texture", "Smooth"] },
            { id: 4, info: ["Color", "Dark yellow"] },
          ],

          backgroundImg: "2",
          altText:
            "A bowl of melted cheese is on the hot plate of the same lab table. The cheese is in the shape of the bowl and thermometer shows warmest temperature.",
          state: "Burnt solid",
          liveText:
            "A bowl of melted cheese is on the hot plate of the same lab table. The cheese is in the shape of the bowl and thermometer shows warmest temperature.",
        },
        {
          id: 1,
          label: "Middle",
          dataTitle: "Cheese",
          itemname: "Cheese",
          className: "temp-button-eight",
          table: [
            { id: 1, info: ["Thermometer", "Middle"] },
            { id: 2, info: ["State of Matter", "Liquid"] },
            { id: 3, info: ["Texture", "Slippery, gluey"] },
            { id: 4, info: ["Color", "Yellow"] },
          ],

          backgroundImg: "1",
          altText:
            "On a lab table, a glass bowl of cheese is to the left of a hot plate and freezer. A thermometer on the far left shows the middle temperature.",
          state: "Liquid",
          liveText:
            "On a lab table, a glass bowl of cheese is to the left of a hot plate and freezer. A thermometer on the far left shows the middle temperature.",
        },
        {
          id: 2,
          dataTitle: "Cheese (heat removed)",
          label: "Coldest",
          itemname: "Cheese",
          className: "temp-button-nine",
          table: [
            { id: 1, info: ["Thermometer", "Coldest"] },
            { id: 2, info: ["State of Matter", "Solid"] },
            { id: 3, info: ["Texture", "Stiff"] },
            { id: 4, info: ["Color", "Yellow"] },
          ],

          backgroundImg: "0",
          altText:
            "A bowl of cheese is in the freezer on same lab table. The cheese is in the shape of cubes from the freezer and thermometer shows coldest temperature.",
          state: "Solid",
          liveText:
            "A bowl of cheese is in the freezer on same lab table. The cheese is in the shape of cubes from the freezer and thermometer shows coldest temperature.",
        },
      ],
    },
    {
      id: 3,
      label: "Water",
      alt: "Water",
      className: "ice",
      liveText:
        "On a lab table, a glass bowl of water is to the left of a hot plate and freezer. A thermometer on the far left shows the middle temperature.",
      buttons: [
        {
          id: 0,
          label: "Warmest",
          dataTitle: "Water (heat added)",
          itemname: "Water",
          className: "temp-button-four",
          table: [
            { id: 1, info: ["Thermometer", "Warmest"] },
            { id: 2, info: ["State of Matter", "Gas"] },
            { id: 3, info: ["Texture", "No texture"] },
            { id: 4, info: ["Color", "No color, invisible"] },
          ],
          backgroundImg: "2",
          altText:
            "A bowl of water is on the hot plate of same lab table. The water is bubbling and steam is rising from the bowl. Thermometer shows warmest temperature.",
          state: "Gas",
          liveText:
            "A bowl of water is on the hot plate of same lab table. The water is bubbling and steam is rising from the bowl. Thermometer shows warmest temperature.",
        },
        {
          id: 1,
          label: "Middle",
          itemname: "Water",
          dataTitle: "Water",
          className: "temp-button-five",
          table: [
            { id: 1, info: ["Thermometer", "Middle"] },
            { id: 2, info: ["State of Matter", "Liquid"] },
            { id: 3, info: ["Texture", "Slippery"] },
            { id: 4, info: ["Color", "Clear"] },
          ],

          backgroundImg: "1",
          altText:
            "On a lab table, a glass bowl of water is to the left of a hot plate and freezer. A thermometer on the far left shows the middle temperature.",
          state: "Liquid",
          liveText:
            "On a lab table, a glass bowl of water is to the left of a hot plate and freezer. A thermometer on the far left shows the middle temperature.",
        },
        {
          id: 2,
          label: "Coldest",
          itemname: "Water",
          dataTitle: "Water (heat removed)",
          className: "temp-button-six",
          table: [
            { id: 1, info: ["Thermometer", "Coldest"] },
            { id: 2, info: ["State of Matter", "Solid"] },
            { id: 3, info: ["Texture", "Smooth"] },
            { id: 4, info: ["Color", "White"] },
          ],
          backgroundImg: "0",
          altText:
            "A bowl of water is in the freezer on same lab table. The water is in the shape of cubes from the freezer and thermometer shows coldest temperature.",
          state: "Solid",
          liveText:
            "A bowl of water is in the freezer on same lab table. The water is in the shape of cubes from the freezer and thermometer shows coldest temperature.",
        },
      ],
    },

    {
      id: 4,
      label: "Fruit juice",
      alt: "Fruit juice",
      className: "cheese",
      liveText:
        "On a lab table, a glass bowl of juice is to the left of a hot plate and freezer. A thermometer on the far left shows the middle temperature.",
      buttons: [
        {
          id: 0,
          label: "Warmest",
          itemname: "Fruit juice",
          dataTitle: "Fruit juice (heat added)",
          className: "temp-button-four",
          table: [
            { id: 1, info: ["Thermometer", "Warmest"] },
            { id: 2, info: ["State of Matter", "Gas"] },
            { id: 3, info: ["Texture", "No texture"] },
            { id: 4, info: ["Color", "Light orange"] },
          ],

          backgroundImg: "2",
          altText:
            "A bowl of juice is on the hot plate of same lab table. The juice is bubbling and steam is rising from the bowl. Thermometer shows warmest temperature.",
          state: "Gas",
          liveText:
            "A bowl of juice is on the hot plate of same lab table. The juice is bubbling and steam is rising from the bowl. Thermometer shows warmest temperature.",
        },
        {
          id: 1,
          label: "Middle",
          itemname: "Fruit juice",
          dataTitle: "Fruit juice",
          className: "temp-button-five",
          table: [
            { id: 1, info: ["Thermometer", "Middle"] },
            { id: 2, info: ["State of Matter", "Liquid"] },
            { id: 3, info: ["Texture", "Slippery"] },
            { id: 4, info: ["Color", "Orange"] },
          ],
          backgroundImg: "1",
          altText:
            "On a lab table, a glass bowl of juice is to the left of a hot plate and freezer. A thermometer on the far left shows the middle temperature.",
          state: "Liquid",
          liveText:
            "On a lab table, a glass bowl of juice is to the left of a hot plate and freezer. A thermometer on the far left shows the middle temperature.",
        },
        {
          id: 2,
          label: "Coldest",
          itemname: "Fruit juice",
          dataTitle: "Fruit juice (heat removed)",
          className: "temp-button-six",
          table: [
            { id: 1, info: ["Thermometer", "Coldest"] },
            { id: 2, info: ["State of Matter", "Solid"] },
            { id: 3, info: ["Texture", "Smooth"] },
            { id: 4, info: ["Color", "Orange"] },
          ],
          backgroundImg: "0",
          altText:
            "A bowl of juice is in freezer on same lab table. The juice is in the shape of cubes from the freezer and thermometer shows coldest temperature.",
          state: "Solid",
          liveText:
            "A bowl of juice is in freezer on same lab table. The juice is in the shape of cubes from the freezer and thermometer shows coldest temperature.",
        },
      ],
    },
    {
      id: 5,
      label: "Plastic beads",
      alt: "Plastic beads",
      className: "pearlerbeads",
      liveText:
        "Lab table with a bowl of multicolored plastic beads on the left of a hot plate and freezer. Thermometer on the far left shows the middle temperature.",
      buttons: [
        {
          id: 0,
          label: "Warmest",
          itemname: "Plastic beads",
          dataTitle: "Plastic beads (heat added)",
          className: "temp-button-four",
          table: [
            { id: 1, info: ["Thermometer", "Warmest"] },
            { id: 2, info: ["State of Matter", "Liquid"] },
            { id: 3, info: ["Texture", "Slippery, gluey"] },
            { id: 4, info: ["Color", "Mulicolored"] },
          ],
          backgroundImg: "2",
          altText:
            "Bowl of multicolored plastic beads on hot plate of same lab table, beads are melting together in the shape of the bowl, thermometer at warmest",
          state: "Gas",
          liveText:
            "Bowl of multicolored plastic beads on hot plate of same lab table, beads are melting together in the shape of the bowl, thermometer at warmest",
        },
        {
          id: 1,
          label: "Middle",
          itemname: "Plastic beads",
          dataTitle: "Plastic beads",
          className: "temp-button-five",
          table: [
            { id: 1, info: ["Thermometer", "Middle"] },
            { id: 2, info: ["State of Matter", "Solid"] },
            { id: 3, info: ["Texture", "Smooth cylinders"] },
            { id: 4, info: ["Color", "Multicolored"] },
          ],
          backgroundImg: "1",
          altText:
            "Lab table with a bowl of multicolored plastic beads on the left of a hot plate and freezer. Thermometer on the far left shows the middle temperature.",
          state: "Liquid",
          liveText:
            "Lab table with a bowl of multicolored plastic beads on the left of a hot plate and freezer. Thermometer on the far left shows the middle temperature.",
        },
        {
          id: 2,
          label: "Coldest",
          itemname: "Plastic beads",
          dataTitle: "Plastic beads (heat removed)",
          className: "temp-button-six",
          table: [
            { id: 1, info: ["Thermometer", "Coldest"] },
            { id: 2, info: ["State of Matter", "Solid"] },
            { id: 3, info: ["Texture", "Smooth cylinders"] },
            { id: 4, info: ["Color", "Multicolored"] },
          ],

          backgroundImg: "0",
          altText:
            "A bowl of multicolored plastic beads in the freezer on the same lab table. The beads are unchanged. The thermometer shows the coldest temperature.",
          state: "Solid",
          liveText:
            "A bowl of multicolored plastic beads in the freezer on the same lab table. The beads are unchanged. The thermometer shows the coldest temperature.",
        },
      ],
    },
  ],

  altTexts: [
    {
      id: 1,
      text: "On a lab table, a glass bowl of chocolate is to the left of a hot plate and freezer. A thermometer on the far left shows the middle temperature.",
    },
    {
      id: 2,
      text: "On a lab table, a glass bowl of cheese is to the left of a hot plate and freezer. A thermometer on the far left shows the middle temperature.",
    },
    {
      id: 3,
      text: "On a lab table, a glass bowl of water is to the left of a hot plate and freezer. A thermometer on the far left shows the middle temperature.",
    },
    {
      id: 4,
      text: "On a lab table, a glass bowl of juice is to the left of a hot plate and freezer. A thermometer on the far left shows the middle temperature.",
    },
    {
      id: 5,
      text: "Lab table with a bowl of multicolored plastic beads on the left of a hot plate and freezer. Thermometer on the far left shows the middle temperature.",
    },
  ],

  dialogData: {
    start: {
      ...info,
      buttonContinueText: buttonLabels.start,
    },
    info: {
      ...info,
      header: "",
      buttonClasses: "",
      content: infoString,
      buttonContinueText: buttonLabels.close,
    },
    correct: {
      ...info,
      buttonContinueText: buttonLabels.continue,
    },
  },
  kitchenItems: [
    {
      id: "ice_cream",
      text: "Ice cream",
      className: "ice-cream",
    },
    {
      id: "ice",
      text: "Ice",
      className: "ice",
    },
    {
      id: "chocolate",
      text: "Chocolate",
      className: "chocolate",
    },
  ],
  mainScreenText: "",
  headingScreenTwo:
    "Add or remove heat by selecting the temperature next to the thermometer.",
  heading:
    "Select a material to observe how it changes when heat is added or removed.",
  activityHeading:
    "In this simulation, students will investigate how matter can change when heated or cooled.",

  transitionPopup: {
    ...globalData.transitionPopup,
    content: "",
  },
  completionPopup: {
    ...globalData.completionPopup,
    content: "You have successfully completed the simulation.",
  },

  resetText: [
    {
      type: "reset",
      resetButtonText: buttonLabels.yes,
      content: globalData.resetPopupText,
      buttonContinueText: buttonLabels.no,
    },
  ],

  selected: "Selected",
  audioPlay: "Audio On",
  audioStop: "Audio Off",
  iceBoxLabel: "Ice box",
  info: buttonLabels.info,
  reset: buttonLabels.reset,
  hotPlateLabel: "Hot plate",
  fullViewBGAlt:
    "A hot plate and a freezer sit on a lab table. Below are separate glass bowls of chocolate, cheese, water, fruit juice and multicolored plastic beads.",
  fullViewLiveText:
    "A hot plate and a freezer sit on a lab table. Below are separate glass bowls of chocolate, cheese, water, fruit juice and multicolored plastic beads.",

  buttonNext: buttonLabels.next,
  buttonClose: buttonLabels.close,
  buttonFinish: buttonLabels.finish,
  alreadySelected: "Already selected",
  continueButton: buttonLabels.continue,
  questionHeading: "Question -1- of 4.",
  resetLiveText: globalData.resetLiveText,
  submitAnswer: buttonLabels.submitAnswer,
  rightMsg: globalData.correctToastMessage,
  wrongMsg: globalData.incorrectToastMessage,
  buttonLabels: { ...globalData.buttonLabels },
  screen1Heading: "Activity for exploring matter.",
  audioAriaLable:
    "If you are using screen reader, turn off the audio button for better experience.",
};

export default RawTextData;
