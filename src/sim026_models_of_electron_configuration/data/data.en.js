import commonData from "../../app/data/data.en";

const data = {
  buttonLabels: { ...commonData.buttonLabels },
  completionPopup: commonData.completionPopup,
  transitionPopup: commonData.transitionPopup,
  transitionPopupHeading: commonData.transitionPopup.heading,
  resetPopupText: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,
  completionPopupText: "You have successfully completed the simulation.",

  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  observationMotive: `The simulation will allow students to pick corresponding areas in relation 
  to electron configurations on the Periodic Table.`,
  startUpInfoText: `Follow the instructions to complete this activity!`,
  infoText: {
    0: `Choose the correct sections on the Periodic Table for sublevel s, p, d and f. 
    Remember that sublevel s includes helium too.`,
    1: `<P aria-label="Choose the correct area for the 2 s, 3p, 4d, 3d, and 6 s energy levels on the Periodic Table. 
    Remember d-sublevel’s energy block is lower by one.">Choose the correct area for the 2s, 3p, 4d, 3d, and 6s energy levels on the Periodic Table. 
    Remember d-sublevel’s energy block is lower by one.</p>`,
    2: `Look at the last electron configuration state to find the element.`,
  },
  transitionText: {
    first: `<p aria-label="Now that you have explored the s, p, d, and f sublevels, 
    let's find 2 s, 3p, 4d, 3d, and 6 s energy levels in the Periodic Table.">Now that you have explored the s, p, d, and f sublevels, 
    let's find 2s, 3p, 4d, 3d, and 6s energy levels in the Periodic Table.</p>`,
    second: `Now that you have explored the sublevels and energy levels, 
    let's find some elements using their electron configurations.`,
  },
  questionScreenZero: `The Periodic Table is divided into four sections. 
  Select the correct section on the Periodic Table for sublevel -1-.`,

  screen0options: ["s", "p", "d", "f"],
  screen0optionsResult: {
    s: "section1",
    p: "section2",
    d: "section3",
    f: "section4",
  },

  screen1options: [
    { key: "2s", value: "2 s" },
    { key: "3p", value: "3p" },
    { key: "4d", value: "4d" },
    { key: "3d", value: "3d" },
    { key: "6s", value: "6 s" },
  ],
  screen1optionsSections: {
    "2s": "section1",
    "3p": "section2",
    "4d": "section3",
    "3d": "section3",
    "6s": "section1",
  },
  screen1optionsSectionsOptions: {
    section1: [
      { id: "option1", label: "Elements of atomic number 1 and 2." },
      { id: "option2", label: "option1", ariahidden: true },
      { id: "option3", label: "Elements of atomic number 3 and 4." },
      { id: "option4", label: "Elements of atomic number 11 and 12." },
      { id: "option5", label: "Elements of atomic number 19 and 20." },
      { id: "option6", label: "Elements of atomic number 37 and 38." },
      { id: "option7", label: "Elements of atomic number 55 and 56." },
      { id: "option8", label: "Elements of atomic number 87 and 88." },
    ],
    section2: [
      { id: "option1", label: "Elements from atomic number 5 to 10." },
      { id: "option2", label: "Elements from atomic number 13 to 18." },
      { id: "option3", label: "Elements from atomic number 31 to 36." },
      { id: "option4", label: "Elements from atomic number 49 to 54." },
      { id: "option5", label: "Elements from atomic number 81 to 86." },
      { id: "option6", label: "Elements from atomic number 113 to 118." },
    ],
    section3: [
      { id: "option1", label: "Elements from atomic number 21 to 30." },
      { id: "option2", label: "Elements from atomic number 39 to 48." },
      { id: "option3", label: "Elements from atomic number 72 to 80." },
      { id: "option4", label: "Elements from atomic number 104 to 112." },
    ],
  },
  screen1optionsResult: {
    "2s": "option3",
    "3p": "option2",
    "4d": "option2",
    "3d": "option1",
    "6s": "option7",
  },

  screen2options: [
    {
      id: "1s2",
      text: "<span aria-hidden='true'>1s<sup>2</sup></span>",
      label: "1 s superscript 2",
    },
    {
      id: "1s22s22p63s23p4",
      text: "<span aria-hidden='true'>1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>4</sup></span>",
      label:
        "1 s superscript 2 2 s superscript 2 2p superscript 6 3 s superscript 2 3p superscript 4",
    },
    {
      id: "1s22s22p63s23p64s23d8",
      text: "<span aria-hidden='true'>1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>6</sup>4s<sup>2</sup>3d<sup>8</sup></span>",
      label:
        "1 s superscript 2 2 s superscript 2 2p superscript 6 3 s superscript 2 3p superscript 6 4 s superscript 2 3d superscript 8",
    },
    {
      id: "1s22s22p3",
      text: "<span aria-hidden='true'>1s<sup>2</sup>2s<sup>2</sup>2p<sup>3</sup></span>",
      label: "1 s superscript 2 2 s superscript 2 2p superscript 3",
    },
    {
      id: "1s22s22p63s23p1",
      text: "<span aria-hidden='true'>1s<sup>2</sup>2s<sup>2</sup>2p<sup>6</sup>3s<sup>2</sup>3p<sup>1</sup></span>",
      label:
        "1 s superscript 2 2 s superscript 2 2p superscript 6 3 s superscript 2 3p superscript 1",
    },
  ],
  screen2optionsSections: {
    "1s2": "section1",
    "1s22s22p63s23p4": "section2",
    "1s22s22p63s23p64s23d8": "section3",
    "1s22s22p3": "section4",
    "1s22s22p63s23p1": "section5",
  },
  screen2optionsSectionsOptions: {
    section1: [
      { id: "option1", label: "Hydrogen" },
      { id: "option2", label: "Helium" },
      { id: "option3", label: "Beryllium" },
      { id: "option4", label: "Calcium" },
      { id: "option5", label: "Gallium" },
      { id: "option6", label: "Technetium" },
      { id: "option7", label: "Antimony" },
      { id: "option8", label: "Cesium" },
    ],
    section2: [
      { id: "option1", label: "Nitrogen" },
      { id: "option2", label: "Magnesium" },
      { id: "option3", label: "Silicon" },
      { id: "option4", label: "Sulfur" },
      { id: "option5", label: "Chlorine " },
      { id: "option6", label: "Chromium" },
      { id: "option7", label: "Copper" },
      { id: "option8", label: "Selenium" },
    ],
    section3: [
      { id: "option1", label: "Aluminum" },
      { id: "option2", label: "Calcium" },
      { id: "option3", label: "Vanadium" },
      { id: "option4", label: "Iron" },
      { id: "option5", label: "Nickel" },
      { id: "option6", label: "Arsenic" },
      { id: "option7", label: "Rhodium" },
      { id: "option8", label: "Gold" },
    ],
    section4: [
      { id: "option1", label: "Beryllium" },
      { id: "option2", label: "Nitrogen" },
      { id: "option3", label: "Fluorine" },
      { id: "option4", label: "Sodium" },
      { id: "option5", label: "Phosphorus" },
      { id: "option6", label: "Manganese" },
      { id: "option7", label: "Strontium" },
      { id: "option8", label: "Antimony" },
    ],
    section5: [
      { id: "option1", label: "Boron" },
      { id: "option2", label: "Oxygen" },
      { id: "option3", label: "Sodium" },
      { id: "option4", label: "Aluminum" },
      { id: "option5", label: "Argon" },
      { id: "option6", label: "Potassium" },
      { id: "option7", label: "Scandium" },
      { id: "option8", label: "Manganese" },
    ],
  },
  screen2optionsResult: {
    "1s2": "option2",
    "1s22s22p63s23p4": "option4",
    "1s22s22p63s23p64s23d8": "option5",
    "1s22s22p3": "option2",
    "1s22s22p63s23p1": "option4",
  },

  questionScreenOne: `Select the correct area for the -1- energy level and sublevel on the Periodic Table`,

  questionScreenTwo: `Select the element having the electron configuration: -1-`,

  equationOptions: {
    screen0: [
      {
        id: "section1",
        disabled: false,
        text: "Section 1",
        html: "<span aria-hidden='true'>Section 1</span>",
        label:
          "Section 1, Elements of row 1 column 1, row 1 column 18, row 2 to 7 and column 1 and 2.",
      },
      {
        id: "section2",
        disabled: false,
        text: "Section 2",
        html: "<span aria-hidden='true'>Section 2</span>",
        label: "Section 2, Elements of row 2 to 7 and column 13 to 18.",
      },
      {
        id: "section3",
        disabled: false,
        text: "Section 3",
        html: "<span aria-hidden='true'>Section 3</span>",
        label: "Section 3, Elements of row 4 to 7 and column 3 to 12.",
      },
      {
        id: "section4",
        disabled: false,
        text: "Section 4",
        html: "<span aria-hidden='true'>Section 4</span>",
        label:
          "Section 4, Elements of row 6 Column 3and row 7 column 3 and atomic numbers from 57 to 71 aom 89 to 103.",
      },
    ],
  },
};

export default data;
