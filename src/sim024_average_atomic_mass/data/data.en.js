import commonData from "../../app/data/data.en";

const data = {
  buttonLabels: { ...commonData.buttonLabels, calculate: "Calculate", show: "Show" },

  completionPopup: { ...commonData.completionPopup },
  completionPopupText: "You have calculated the average atomic mass of carbon.",
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,

  instructionText: `Drag each carbon isotope to the scale to determine its mass. 
  Use mass and percent abundance to calculate the average atomic mass of carbon.`,

  carbon: [
    {
      id:"carbon-12",
      name: "Carbon-12",
      electron: 6,
      nutron: 6,
      proton: 6,
      state: "Stable",
      mass: "12.0",
      percentageAbundance: "98.89 %",
      massAbundance: "11.8668",
      massUnit: "amu",
      altText: `A carbon-12 atom is on the balance. The balance displays a mass of 12.0 amu`,
    },
    {
      id:"carbon-13",
      name: "Carbon-13",
      electron: 6,
      nutron: 7,
      proton: 6,
      state: "Stable",
      mass: "13.0",
      percentageAbundance: "1.1 %",
      massAbundance: "0.143",
      massUnit: "amu",
      altText: `A carbon-13 atom is on the balance. The balance displays a mass of 13.0 amu`,
    },
    {
      id:"carbon-13",
      name: "Carbon-14",
      electron: 6,
      nutron: 8,
      proton: 6,
      state: "Radioactive",
      mass: "14.0",
      percentageAbundance: "<.01 %",
      massAbundance: "0.0014",
      massUnit: "amu",
      altText: `A carbon-14 atom is on the balance. The balance displays a mass of 14.0 amu`,
    },
  ],
  averageMassAbudance: "12.011 amu",
  massUnit: "amu",
  labels: {
    tableTitle: "Mass and % Abundance",
    mass: "Mass (amu)",
    abundance: "% Abundance",
    massAbundance: "Mass x % Abundance",
    showBtnLabel: "-1- Mass x % Abundance , Show Button",
    electrons:"Electrons",
    neutrons: "Neutrons",
    protons: "Protons",
    avgAtomicMass: "Average Atomic Mass of Carbon",
    avgAtomicMassLiveTxt: "Average Atomic Mass of Carbon is 12.011 amu"
  },

  startUpInfoText: `The atomic mass of an element listed on the Periodic Table 
  is an average of all of the isotopes for that element according to their masses and percent abundance. 
  Let’s find the average atomic mass of carbon.`,

  infoText: `Drag each isotope to the scale to find the mass in grams and record it in the data table. 
  When you have found the mass and percent abundance of each isotope, calculate the average atomic mass of carbon. 
  Select Show/Calculate to check your answers and record the value in the data table.`,

  droppable: { id: "drop", text: "droppable" },
  accessibilityList : [{ id: "1", text: "", label: "Droppable area, Scale" }],

  initialScaleAltText: `An electronic balance with a green base and a blank screen. 
  There is a gray platform on top of the base, which is empty`,

  onDroppedLiveText: "-1- is dropped on droppable weighing scale.",
  onShowLiveText: "Mass x % Abundance of -1- is -2- ",
};

export default data;
