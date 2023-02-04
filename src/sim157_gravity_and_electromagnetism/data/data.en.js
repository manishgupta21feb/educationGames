import commonData from "../../app/data/data.en";

const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  buttonLabels: { ...commonData.buttonLabels },

  infoTextOne:
    "Observe how the arrows change size. Longer arrows indicate increased force.",

  headingOne:
    "Students will determine the effects of mass and distance on gravitational force, and the effects of charge and distance on electrical force.",
  startInfo:
    "Two spheres of opposite charge are placed near each other. Explore how mass, charge, and distance affect their attractive gravitational and electrical forces.",

  pageHeadingOne:
    "Change the mass, charge or distance of either sphere to explore how mass, charge and distance affect the gravitational and electrical forces between the spheres.",

  mcqData: [
    {
      id: "1",
      question: "",
      radiobuttons: [
        {
          id: "1",
          value: "Mass",
          text: "Mass",
          label: "Mass",
        },
        {
          id: "2",
          value: "Charge",
          text: "Charge",
          label: "Charge",
        },
        {
          id: "3",
          value: "Distance",
          text: "Distance",
          label: "Distance",
        },
      ],
      answer: "2",
    },
  ],

  ballData: [
    { id: "100", name: "ball1" },
    { id: "200", name: "ball2" },
    { id: "300", name: "ball3" },
  ],

  counterComponents: [
    {
      id: "1",
      srNO: 0,
      label1: "Mass of sphere 1 (kg)",
      label2: "Mass of sphere 2 (kg)",
    },
    {
      id: "2",
      srNO: 1,
      label1: "Charge of sphere 1 (C)",
      label2: "Charge of sphere 2 (C)",
    },
    {
      id: "3",
      srNO: 2,
      label1: "Distance between spheres (mm)",
    },
  ],

  rightMsg: commonData.correctToastMessage,
  wrongMsg: commonData.incorrectToastMessage,
  resetLiveText: commonData.resetLiveText,
  resetPopupText: commonData.resetPopupText,

  buttonLabels: { ...commonData.buttonLabels },
  imageAlt: "Demo alt text",

  eletricalLabel: "Electrical force",
  gravitationalLabel: "Gravitational force",
  massOneLabel: "Mass of sphere 1 (kg)",
  massTwoLabel: "Mass of sphere 2 (kg)",
  chargeOneLabel: "Charge of sphere 1 (C)",
  chargeTwoLabel: "Charge of sphere 2 (C)",
  distanceLabel: "Distance between spheres (mm)",

  massLabelLeft1: "Increase mass on the left",
  massLabelLeft2: "Decrease mass on the left",
  massLabelRight1: "Increase mass on the right",
  massLabelRight2: "Decrease mass on the right",
  massLabelOne: "Increase mass",
  massLabelTwo: "Decrease mass",
  chargeLabelLeft1: "Increase charge on the left",
  chargeLabelLeft2: "Decrease charge on the left",
  chargeLabelRight1: "Increase charge on the right",
  chargeLabelRight2: "Decrease charge on the right",
  chargeLabelOne: "Increase charge",
  chargeLabelTwo: "Decrease charge",
  distanceLabelOne: "Increase distance",
  distanceLabelTwo: "Decrease distance",
  massLiveTextOne: "Mass increased to -1-",
  massLiveTextTwo: "Mass decreased to -1-",
  chargeLiveTextOne: "Charge increased to -1-",
  chargeLiveTextTwo: "Charge decreased to -1-",
  distanceLiveTextOne: "Distance increased to -1-",
  distanceLiveTextTwo: "Distance decreased to -1-",
  redArrow: "red arrow represents electrical force",
  yellowArrow: "dashed yellow arrow represents gravitational force",
  test: "Test",
};

export default data;
