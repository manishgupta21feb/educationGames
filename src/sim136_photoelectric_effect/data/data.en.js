import globalConfig from "../../app/data/data.en";
const buttonLabels = { ...globalConfig.buttonLabels };

const data = {
  finishButton: {
    text: buttonLabels.finish,
    label: buttonLabels.finish,
    ariaLabel: buttonLabels.finish,
  },

  wavelengthList: {
    listitems: [
      { id: 0, value: 200, label: "200" },
      { id: 1, value: 300, label: "300" },
      { id: 2, value: 400, label: "400" },
    ],
  },
  valuetextArray0: {
    1: "200 nanometers",
    2: "300 nanometers",
    3: "400 nanometers",
  },
  disable: ["disable"],
  buttonReset: buttonLabels.reset,
  buttonInfo: buttonLabels.info,
  buttonClose: buttonLabels.close,
  messages: [
    {
      type: "reset",
      resetButtonText: buttonLabels.yes,
      buttonContinueText: buttonLabels.no,
      content: globalConfig.resetPopupText,
    },
  ],
  spectrumList: [
    {
      wavelengthVal: "400",
    },
    {
      wavelengthVal: "500",
    },
    {
      wavelengthVal: "600",
    },
    {
      wavelengthVal: "700",
    },
  ],
  ariacopv2: "0.000 Volts",
  ariacopv3: "0.000 Volts",
  ariasodv1: "0.838 Volts",
  ariacopv1: "0.124 Volts",
  ariasodv2: "0.278 Volts",
  ariasodv3: "0.071 Volts",
  screen1Heading:
    "Students will explore the photon emission of metals at various wavelengths.",
  controlsHeading: "Metal plate:",
  wavelengthHeading: "Wavelength in nanometers",
  wavelengthName: "Wavelength (nm):",
  spectrumlabel1: "Gamma rays",
  spectrumlabel2: "X-rays",
  spectrumlabel3: "UV",
  spectrumlabel4: "Infrared",
  spectrumlabel5: "Microwaves",
  spectrumlabel6: "Radio waves",
  copperv1: "0.124 V",
  copperv2: "0.000 V",
  copperv3: "0.000 V",
  sodiumv1: "0.838 V",
  sodiumv2: "0.278 V",
  sodiumv3: "0.071 V",
  voltages: "Voltage: ",
  copperlivetext1: "electron ejecting with  0.124 voltage",
  copperlivetext2: "electron not ejecting with  0 voltage",
  copperlivetext3: "electron not ejecting  with 0 voltage",
  sodiumlivetext1: "electron ejecting  with 0.838 voltage",
  sodiumlivetext2: "electron ejecting  with 0.278 voltage",
  sodiumlivetext3: "electron ejecting  with 0.071 voltage",
  colorBar: "wavelength Image",
  controlInstructionsText:
    "Explore the relationship between wavelength and metal type and the photoelectric effect by changing the wavelength of the light and the type of metal plate.",
  instructionBoxHeader: "Instruction",
  instructionBoxContent1:
    "In this activity, you will use a laser to explore how wavelength affects the voltage of a potential current for various metals.",
  infoText:
    "Adjust the wavelength of light and the kind of metal to determine what happens to the electrons as they are ejected.",
  buttonStart: buttonLabels.start,
  completionPopup: {
    ...globalConfig.completionPopup,
    content:
      "You have successfully explored the relationship between the kind of metal and the wavelength of light for the photoelectric effect!",
  },
  buttonPlay: "Submit",
  buttonCompleted: "Trips completed",
  fontFamily: "TisaPro",
  resetHeaderContent: "Reset Simulation",
  resetMsgContent: globalConfig.resetPopupText,
  startButton: buttonLabels.start,
  buttonYes: buttonLabels.yes,
  buttonNo: buttonLabels.no,
  resetConfirmationText: globalConfig.resetLiveText,
  graphRole: "img",

  ariaLabels: {
    circuit: "An electric circuit",
    electron: "Electrons emitting",
  },

  slidersLabels: {
    wavelength: {
      ariaLabel: "Wavelength slider",
      title: "Wavelength in nanometers",
    },
  },

  radiobuttonLabel: {
    sodium: {
      label: "Sodium",
      alt: "Sodium",
    },
    copper: {
      label: "Copper",
      alt: "Copper",
    },
  },
};

export default data;
