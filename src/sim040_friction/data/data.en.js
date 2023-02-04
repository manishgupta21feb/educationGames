import commonData from "../../app/data/data.en";

const data = {
  buttonLabels: { ...commonData.buttonLabels },
  materials: [
    {
      id: "none",
      alt: "soil",
    },
    {
      id: "ice",
      text: "Ice",
      label: "Ice",
      alt: "ice",
    },
    {
      id: "grass",
      text: "Grass",
      label: "Grass",
      alt: "grass",
    },
    {
      id: "sandpaper",
      text: "Sandpaper",
      label: "Sandpaper",
      alt: "sandpaper",
    },
  ],
  readingMeters: {
    forceGauge: {
      label: "Force",
      alt: "Force",
      unit: "N",
      initial: "0",
      readings: {
        ice: "1",
        grass: "6",
        sandpaper: "10",
      },
    },
    thermometer: {
      label: "Thermometer",
      alt: "Thermometer",
      unit: "&deg;C",
      initial: "23.5",
      readings: {
        ice: [1, 4.5],
        grass: [23.5, 26.5],
        sandpaper: [23.5, 28],
      },
    },
  },
  playButtonText: "Play",
  replayButtonText: "Replay",
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,
  mcqHeading:
    "Select a material to slide the box on, and observe the force and temperature.",
  infoBoxText:
    "Click each button to see how the amount of force needed changes with more or less friction. Observe the thermometer to see temperature change when there is friction present.",
  startPopupText: [
    "What is friction? Friction is the resistance of motion when one object rubs against another.",
    "Choose a material to test how friction acts upon it.",
  ],
  activityHeading:
    "In this simulation, the learner will observe the force of friction acting upon different materials and view the temperature change that happens when friction is present.",
  altTexts: {
    before: {
      ice: "A girl stands prepared to push a wooden crate across a floor of ice. A force meter at 0 newtons and a thermometer at 34 degree farenheit (1 degree celcius) are visible.",
      grass:
        "A girl stands prepared to push a wooden crate across a floor of grass. A force meter at 0 newtons and a thermometer at 74 degree farenheit (23.5 degree celcius) are visible.",
      sandpaper:
        "A girl stands prepared to push a wooden crate across a floor of sandpaper. A force meter at 0 newtons and a thermometer at 74 degree farenheit (23.5 degree celcius) are visible.",
    },
    after: {
      ice: "The girl has pushed the crate across the ice. The force measures 1 newton and the temperature now reads 40 degree farenheit (4.5 degree celcius).",
      grass:
        "The girl has pushed the crate across the grass. The force measures 6 newtons and the temperature now reads 80 degree farenheit (26.5 degree celcius).",
      sandpaper:
        "The girl has pushed the crate across the sandpaper. The force measures 10 newtons and the temperature now reads 82 degree farenheit (28 degree celcius).",
    },
  },
  liveText:
    "The girl pushes the crate across the -1-. The force meter begins to increase and the temperature begins to increase.",
};

export default data;
