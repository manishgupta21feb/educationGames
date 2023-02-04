import commonData from "../../app/data/data.en";

const data = {
  buttonLabels: { ...commonData.buttonLabels },

  resetLiveText: commonData.resetLiveText,
  resetMsgContent: commonData.resetPopupText,
  transitionPopup: {
    ...commonData.transitionPopup,
    content: "",
  },
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have successfully built the Bohr models!",
  },
  activityHeading:
    "Students will demonstrate understanding of the structure of atoms and determine reactivity.",
  instructionBoxContent:
    "The Periodic Table provides us with a plethora of information, from the number of protons, electrons, and neutrons in an atom to characteristics of an atom, such as physical or chemical properties. In this simulation, you will create models of atoms and determine the number of valence electrons for each.",
  InfoBoxContent:
    "Use the Periodic Table to determine the correct number of protons, neutrons, and valence electrons for each atom.",
  rightHeadingText:
    "Attempt to identify the correct number of protons, neutrons, and valence electrons for each atom. Then, drag and drop to place the correct number of electrons on the model.",
  moreIncorrect:
    " You are almost correct! Please try again and fix your incorrect answers!",

  incorrectProton: "Incorrect number of protons. Try again!",
  incorrectNeutron: "Incorrect number of neutrons. Try again!",
  incorrectValance: "Incorrect number of valence electrons. Try again!",
  incorrectElectrons:
    "Incorrect number of electrons are placed on the model. Try again!",
  incorrectPlaceElectron: "Electrons are placed incorrectly. Try again!",
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  partialIncorrect:
    "You are almost correct! Please try again and fix your incorrect answers!",
  atomicStructures: [
    {
      id: "hydrogen",
      elementName: "Element : Hydrogen",
      electrons: [1],
      proton: 1,
      neutron: 0,
      valenceElectron: 1,
      dropDownOptions: [
        {
          id: "h0",
          text: "0",
          value: 0,
        },
        {
          id: "h1",
          text: "1",
          value: 1,
        },
        {
          id: "h2",
          text: "2",
          value: 2,
        },
        {
          id: "h3",
          text: "3",
          value: 3,
        },
      ],
      orbitOne: 1,
      orbitTwo: 0,
      orbitThree: 0,
    },
    {
      id: "magnesium",
      elementName: "Element : Magnesium",
      electrons: [2, 8, 2],
      proton: 12,
      neutron: 12,
      valenceElectron: 2,
      dropDownOptions: [
        {
          id: "mg2",
          text: "2",
          value: 2,
        },
        {
          id: "mg8",
          text: "8",
          value: 8,
        },
        {
          id: "mg10",
          text: "10",
          value: 10,
        },
        {
          id: "mg12",
          text: "12",
          value: 12,
        },
      ],
      orbitOne: 2,
      orbitTwo: 8,
      orbitThree: 2,
    },
    {
      id: "lithium",
      elementName: "Element : Lithium",
      electrons: [2, 1],
      proton: 3,
      neutron: 4,
      valenceElectron: 1,
      dropDownOptions: [
        {
          id: "li1",
          text: "1",
          value: 1,
        },
        {
          id: "li2",
          text: "2",
          value: 2,
        },
        {
          id: "li3",
          text: "3",
          value: 3,
        },
        {
          id: "li4",
          text: "4",
          value: 4,
        },
      ],
      orbitOne: 2,
      orbitTwo: 1,
      orbitThree: 0,
    },
    {
      id: "oxygen",
      elementName: "Element : Oxygen",
      electrons: [2, 6],
      proton: 8,
      neutron: 8,
      valenceElectron: 6,
      dropDownOptions: [
        {
          id: "o2",
          text: "2",
          value: 2,
        },
        {
          id: "o4",
          text: "4",
          value: 4,
        },
        {
          id: "o6",
          text: "6",
          value: 6,
        },
        {
          id: "o8",
          text: "8",
          value: 8,
        },
      ],
      orbitOne: 2,
      orbitTwo: 6,
      orbitThree: 0,
    },
    {
      id: "boron",
      elementName: "Element : Boron",
      electrons: [2, 3],
      proton: 5,
      neutron: 6,
      valenceElectron: 3,
      dropDownOptions: [
        {
          id: "b2",
          text: "2",
          value: 2,
        },
        {
          id: "b3",
          text: "3",
          value: 3,
        },
        {
          id: "b5",
          text: "5",
          value: 5,
        },
        {
          id: "b6",
          text: "6",
          value: 6,
        },
      ],
      orbitOne: 2,
      orbitTwo: 3,
      orbitThree: 0,
    },
    {
      id: "carbon",
      elementName: "Element : Carbon",
      electrons: [2, 4],
      proton: 6,
      neutron: 6,
      valenceElectron: 4,
      dropDownOptions: [
        {
          id: "c2",
          text: "2",
          value: 2,
        },
        {
          id: "c4",
          text: "4",
          value: 4,
        },
        {
          id: "c5",
          text: "5",
          value: 5,
        },
        {
          id: "c6",
          text: "6",
          value: 6,
        },
      ],
      orbitOne: 2,
      orbitTwo: 4,
      orbitThree: 0,
    },
    {
      id: "nitrogen",
      elementName: "Element : Nitrogen",
      electrons: [2, 5],
      proton: 7,
      neutron: 7,
      valenceElectron: 5,
      dropDownOptions: [
        {
          id: "n3",
          text: "3",
          value: 3,
        },
        {
          id: "n5",
          text: "5",
          value: 5,
        },
        {
          id: "n6",
          text: "6",
          value: 6,
        },
        {
          id: "n7",
          text: "7",
          value: 7,
        },
      ],
      orbitOne: 2,
      orbitTwo: 5,
      orbitThree: 0,
    },
    {
      id: "phosphorus",
      elementName: "Element : Phosphorus",
      electrons: [2, 8, 5],
      proton: 15,
      neutron: 16,
      valenceElectron: 5,
      dropDownOptions: [
        {
          id: "p2",
          text: "5",
          value: 5,
        },
        {
          id: "p10",
          text: "10",
          value: 10,
        },
        {
          id: "p15",
          text: "15",
          value: 15,
        },
        {
          id: "p16",
          text: "16",
          value: 16,
        },
      ],
      orbitOne: 2,
      orbitTwo: 8,
      orbitThree: 5,
    },
    {
      id: "fluorine",
      elementName: "Element : Fluorine",
      electrons: [2, 7],

      proton: 9,
      neutron: 10,
      valenceElectron: 7,
      dropDownOptions: [
        {
          id: "f2",
          text: "2",
          value: 2,
        },
        {
          id: "f7",
          text: "7",
          value: 7,
        },
        {
          id: "f9",
          text: "9",
          value: 9,
        },
        {
          id: "f10",
          text: "10",
          value: 10,
        },
      ],

      orbitOne: 2,
      orbitTwo: 7,
      orbitThree: 0,
    },
    {
      id: "beryllium",
      elementName: "Element : Beryllium",
      electrons: [2, 2],
      proton: 4,
      neutron: 5,
      valenceElectron: 2,
      dropDownOptions: [
        {
          id: "be2",
          text: "2",
          value: 2,
        },
        {
          id: "be3",
          text: "3",
          value: 3,
        },
        {
          id: "be4",
          text: "4",
          value: 4,
        },
        {
          id: "be5",
          text: "5",
          value: 5,
        },
      ],
      orbitOne: 2,
      orbitTwo: 2,
      orbitThree: 0,
    },
  ],
  orbitsAlt: "3 orbits around a nucleus",
  draggable: {
    id: "eletrons",
    label: "Electron draggable",
    altText: "Electron",
  },
  dropZonesOrbits: [
    {
      srno: "1",
      id: "orbit3DropOne",
      hidden: false,

      label: "Orbit 3 dropZone 1",
    },
    {
      srno: "2",
      id: "orbit3DropTwo",
      hidden: false,

      label: "Orbit 3 dropZone 2",
    },
    {
      srno: "3",
      id: "orbit3DropThree",
      hidden: false,

      label: "Orbit 3 dropZone 3",
    },
    {
      srno: "4",
      id: "orbit3DropFour",
      hidden: false,

      label: "Orbit 3 dropZone 4",
    },
    {
      srno: "5",
      id: "orbit3DropFive",
      hidden: false,

      label: "Orbit 3 dropZone 5",
    },
    {
      srno: "6",
      id: "orbit3DropSix",
      hidden: false,

      label: "Orbit 3 dropZone 6",
    },
    {
      srno: "7",
      id: "orbit3DropSeven",
      hidden: false,

      label: "Orbit 3 dropZone 7",
    },
    {
      srno: "8",
      id: "orbit3DropEight",
      hidden: false,

      label: "Orbit 3 dropZone 8",
    },

    {
      srno: "1",
      id: "orbit2DropOne",
      hidden: false,

      label: "Orbit 2 dropZone 1",
    },
    {
      srno: "2",
      id: "orbit2DropTwo",
      hidden: false,

      label: "Orbit 2 dropZone 2",
    },
    {
      srno: "3",
      id: "orbit2DropThree",
      hidden: false,

      label: "Orbit 2 dropZone 3",
    },
    {
      srno: "4",
      id: "orbit2DropFour",
      hidden: false,

      label: "Orbit 2 dropZone 4",
    },
    {
      srno: "5",
      id: "orbit2DropFive",
      hidden: false,

      label: "Orbit 2 dropZone 5",
    },
    {
      srno: "6",
      id: "orbit2DropSix",
      hidden: false,

      label: "Orbit 2 dropZone 6",
    },
    {
      srno: "7",
      id: "orbit2DropSeven",
      hidden: false,

      label: "Orbit 2 dropZone 7",
    },
    {
      srno: "8",
      id: "orbit2DropEight",
      hidden: false,

      label: "Orbit 2 dropZone 8",
    },
    {
      srno: "1",
      id: "orbit1DropOne",
      hidden: false,

      label: "Orbit 1 dropZone 1",
    },
    {
      srno: "2",
      id: "orbit1DropTwo",
      hidden: false,

      label: "Orbit 1 dropZone 2",
    },
  ],

  images: [
    {
      id: "orbit1",
    },
    {
      id: "orbit2",
    },
    {
      id: "orbit3",
    },
    {
      id: "orbit3base",
    },
    {
      id: "orbit2base",
    },
    {
      id: "orbit1base",
    },
    {
      id: "nucleus",
    },
    {
      id: "nucleusbase",
    },
  ],
  selectProtonsHeading: "Protons",
  selectNeutronHeading: "Neutrons",
  selectValanceHeading: "Valence electrons",
  droppedLabel: "dropped on",
  elementBlock: [
    {
      id: "atomicNumber",
      text: "2",
      classes: "atomicNumber",
    },
    {
      id: "symbol",
      text: "He",
      classes: "symbol",
    },
    {
      id: "atomicMass",
      classes: "atomicMass",
      text: "4.003",
    },
  ],
  atomicNumber: "Atomic Number",
  symbol: "Symbol",
  atomicMass: "Atomic Mass",
  periodicTabelLegend:
    "atomic number on top symbol in middle and atomic mass at bottom",
  screenLegends: [
    {
      id: "legendproton",
      text: "Proton",
      altText: "red circle denotes protons",
    },
    {
      id: "legendneutron",
      text: "Neutron",
      altText: "blue circle denotes neutron",
    },
  ],
  electronLegend: {
    id: "legendelelectron",
    text: "Electron",
    altText: "gold circle denotes electrons",
  },
};

export default data;
