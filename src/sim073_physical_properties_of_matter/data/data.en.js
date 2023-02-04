import globalConfig from "../../app/data";
const buttonLabels = { ...globalConfig.buttonLabels };

const introString = [
  "Welcome to the science lab! Let's learn about properties of matter. All matter has observable properties. We will be testing objects to determine the following properties:",
  "• mass",
  "• volume",
  "• relative density",
  "• conductivity",
  "• magnetism",
  "By testing matter's properties, we can compare and classify matter. We can learn what material we need for any job, such as a material that will help complete a circuit or keep our keys floating if we drop them in the swimming pool.",
  "Now, let's get started.",
];
const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: buttonLabels.start,
  buttonContinueLabel: buttonLabels.start,
  content: introString,
};

const completionScreen = {
  content: "You have completed the simulation.",
  type: "positive",
  heading: "Congratulations!",
  buttonText: buttonLabels.reset,
  ButtonLabel: buttonLabels.reset,
  buttonClasses: "reset-white reverse icon",
};

const RawTextData = {
  dialogData: {
    start: {
      ...info,
      buttonContinueText: buttonLabels.start,
      buttonContinueLabel: buttonLabels.start,
    },
    info: {
      ...info,
      header: "",
      buttonContinueText: buttonLabels.close,
      buttonContinueLabel: buttonLabels.close,
      buttonClasses: "",
      content:
        "Select the item you want to test. Then, move the item to the triple beam balance, graduated cylinder, aquarium, magnet, or electric circuit.",
    },
    correct: {
      ...info,
      buttonContinueText: buttonLabels.continue,
      buttonContinueLabel: buttonLabels.continue,
    },
  },
  items: [
    {
      id: "metal-toy-car",
      text: "Metal toy car",
      alt: "metal toy car",
    },
    {
      id: "glass-jar",
      text: "Glass marble",
      alt: "glass marble",
    },
    {
      id: "iron-nail",
      text: "Iron nail",
      alt: "iron nail",
    },
    {
      id: "die",
      text: "Die",
      alt: "die",
    },
    {
      id: "cork",
      text: "Cork",
      alt: "cork",
    },
    {
      id: "nickel",
      text: "Nickel",
      alt: "nickel",
    },
    {
      id: "pencil",
      text: "Pencil",
      alt: "pencil",
    },
  ],

  // questionHeading: "Question -1- of 4.",

  completionDialog: {
    reset: { ...completionScreen },
    // continue: {
    //   ...completionScreen,
    //   // content:
    //     // "You have successfully explored how energy flows through the different trophic levels in an ecosystem. Now it is time to show what you know.",
    // },
  },

  resetText: [
    {
      type: "reset",
      resetButtonText: buttonLabels.yes,
      buttonContinueText: buttonLabels.no,
      content: globalConfig.resetPopupText,
      // content: "Are you sure you want to reset?",
    },
  ],

  wrongMsg: "is a nonmagnetic item.",
  buttonFinish: buttonLabels.finish,
  buttonNext: buttonLabels.next,
  buttonContinue: buttonLabels.continue,
  buttonClose: buttonLabels.close,
  reset: "Reset",
  info: "Info",
  resetLiveText: "Your activity has been reset",
  electricalButtonText: "Electrical conductivity",
  densityButtonText: "Relative density",
  magnetButtonText: "Magnetism",
  massButtonText: "Mass",
  volumeButtonText: "Volume",
  mainScreenButtons: [
    {
      id: "Mass",
      text: "Mass",
      type: "mass",
      class: "button-mass",
      alt: "A triple beam balance",
      visited: "false",
    },
    {
      id: "Volume",
      text: "Volume",
      type: "volume",
      class: "button-volume",
      alt: "A graduated cylinder with water inside",
      visited: "false",
    },
    {
      type: "magnet",
      id: "Magnetism",
      text: "Magnetism",
      class: "button-magnet",
      alt: "A bar magnet; the left side is blue and the right side is red. The blue side is labeled S and the red side is labeled N.",
      visited: "false",
    },
    {
      id: "Relative density",
      text: "Relative density",
      type: "relative-density",
      class: "button-relative-density",
      alt: "An aquarium filled with water",
      visited: "false",
    },
    {
      id: "Electrical conductivity",
      text: "Electrical conductivity",
      type: "electric-conductivity",
      class: "button-electric-conductivity",
      alt: "An open circuit with a battery, a switch, wires that are not connected in one place, and an unlit light bulb",
      visited: "false",
    },
  ],

  mainActivityText:
    "Select the physical property and tool you would like to use to investigate different items.",
  activityTextMass: [
    "Mass is the amount of matter in an object. It is measured with a triple beam balance. Mass is different from weight, which changes with the strength of gravity. You would have the same mass on a different planet, but not the same weight!",
    "Click on an item to measure or test its physical properties.",
  ],
  activityTextVolume: [
    "Volume is the amount of space that matter takes up. With a regular object such as a box, volume can be measured with a ruler. With an irregular object where the length, width, and height cannot be easily measured with a ruler, a graduated cylinder filled with water is used to measure the object’s volume.",
    "The irregular object is dropped into the graduated cylinder, which causes the water to move out of the way. This is called water displacement. The amount of water displaced is the same as the volume of the object.",
    "Click on an item to measure or test its physical properties.",
  ],
  activityTextMagnestism: [
    "Magnetism is a property that some metallic objects have. It is the force of attraction between two objects, which makes them “stick” together. Iron has magnetic properties, but aluminum does not.",
    "Click on an item to measure or test its physical properties.",
  ],
  activityTextRelativeDensity: [
    "Density is the amount of matter in a given amount of space. In other words, it describes how much matter, or “stuff,” is packed into an object. The more “stuff” packed in an object, the more dense it is.",
    "When an object’s mass is divided by its volume, that ratio is the object’s density. Water has a density of 1. Objects with a density equal to or greater than 1 will sink in pure water. Objects with a density of less than 1 will float.",
    "Click on an item to measure or test its physical properties.",
  ],
  activityTextElectricalConductivity: [
    "Conductivity is a property that describes whether an object will allow heat or electricity to flow through it. Electrical conductivity can be measured by using a simple circuit made from a battery, wires, and a light bulb. If you connect a conductive object into the circuit, electricity will flow and the bulb will light.",
    "Some types of matter, like metals, have both electrical and thermal conductivity, so they will conduct both electricity and heat.",
    "Click on an item to measure or test its physical properties.",
  ],
  liveText: "is dropped",
  headingText:
    "In this simulation, the learner will use tools to measure, test, and compare various objects’ physical properties such as mass, volume, relative density, and conductivity.",

  altMassStatic: "A triple beam balance reading a mass of 0 g",
  altVolumeStatic: "A graduated cylinder filled with water to 50 mL",
  barMagnetALt:
    "A bar magnet; the left side is blue and the right side is red. The blue side is labeled S and the red side is labeled N.",
  aquariumAlt: "An aquarium filled with water",
  electricCircuitAlt:
    "An open circuit with a battery, a switch, wires that are not connected in one place, and an unlit light bulb",

  dynamicMassAltText: "A triple beam balance measuring the mass of a",
  dynamicVolumeAltText:
    " is dropped into a graduated cylinder filled with water and the water rises to",
  dynamicDensitySinkAltText:
    " is at the bottom of an aquarium filled with water.",
  dynamicDensityFloatAltText:
    " is at the top of an aquarium filled with water.",
  dynamicMagnetAltText: "A blue and red bar magnet with a ",
  dynamicElectricAltText1:
    "A simple circuit with a battery, a switch, wires, and a ",
  dynamicElectricAltText2:
    " that fills a gap in the wires before a lit light bulb to make the circuit closed.",
  dynamicElectricAltText3: " But the bulb does not glow.",
  weigthofItems: {
    metal_toy_car: " 63 g",
    glass_jar: " 15g",
    iron_nail: " 15 g",
    die: " 3 g",
    cork: " 5 g",
    nickel: " 5 g",
    pencil: " 10 g",
  },
  volumeOfItems: {
    metal_toy_car: " 80 ml",
    glass_jar: " 56 ml",
    iron_nail: " 55 ml",
    die: " 52 ml",
    cork: " 56 ml",
    nickel: " 58 ml",
    pencil: " 55 ml",
  },
  textAt: " at",
  textA: "A ",
  textSticking: " sticking to it",
  textNotSticking: " not sticking to it",
};

export default RawTextData;
