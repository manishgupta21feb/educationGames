import commonData from "../../app/data/data.en";

const data = {
  buttonLabels: { ...commonData.buttonLabels },
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,

  resetPopupText: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,

  activityheading: `Students will use clues to build the electromagnetic spectrum and 
  identify uses of electromagnetic waves in everyday life.`,
  startUpInfoText: `Welcome! Today, you will be learning about electromagnetic waves and how these are found all around you.`,
  initialImageLabels: {
    label1: "Decreasing wavelength",
    label2: "Increasing frequency and energy",
  },

  imageLabel: "wavelength",

  infoTexts: [
    `Click and drag the type of electromagnetic wave to the correct location on the electromagnetic spectrum.`,
    `Read each wave and its use in the description. Then, click on all the stores that would use that type of electromagnetic wave.`,
  ],

  arrowAltText: "this is sample arrow",
  screen2Alt: "sample alt- image of shops",
  altTextSpectrum: "Sample spectrum alt text",

  part1Screen1: `Read each wave and its use in the table. 
  Then, click on all the stores that would use that type of electromagnetic wave.`,

  part2Screen1: `We use the electromagnetic spectrum to classify these waves based on their wavelengths and frequencies. 
  On the screen, you will see an unfinished electromagnetic spectrum. Your job is to use the hints to build the 
  electromagnetic spectrum. Click and drag each type of wave to the correct location on the spectrum.`,

  transPopUp: `You have successfully built the electromagnetic spectrum! 
  Now it’s time to explore how we use those different waves in our daily lives.`,

  screen_one_ost: `You are probably familiar with many types of waves, such as sound waves, ocean waves, and seismographic waves. 
  These waves all travel through a medium. There are other types of waves that don’t need a medium to travel through and can even 
  travel through the vacuum of space! We call these <b>electromagnetic waves</b>.`,

  electoSpectrumTitle: `The Electromagnetic Spectrum`,

  screen_one_two_ost: `We use the <b>electromagnetic spectrum</b> to classify these waves based on their wavelengths and frequencies. 
  On the screen, you will see an unfinished electromagnetic spectrum. Your job is to use the hints to build the 
  electromagnetic spectrum. Click and drag each type of wave to the correct location on the spectrum.`,

  droppedText: "dropped",
  draggables: [
    {
      id: "microwaves",
      name: "Microwaves",
      detail: `I have a little more energy than the radio wave. My wavelengths can be measured in centimeters.`,
      dropLabel: `Droppable area, Decreasing wavelength 1`,
    },
    {
      id: "visibleLightWaves",
      name: "Visible light waves",
      detail: `I am the only wave that can be seen by your eyes, and I am found in the middle of the spectrum.`,
      dropLabel: `Droppable area, Decreasing wavelength 2`,
    },
    {
      id: "xRays",
      name: "X-rays",
      detail: `I have a little less energy than gamma rays. My wavelengths are shorter than ultraviolet waves.`,
      dropLabel: `Droppable area, Decreasing wavelength 3`,
    },
    { id: "img" },
    {
      id: "radioWaves",
      name: "Radio waves",
      detail: `I am found on one end of the spectrum. I have the lowest energy level and the longest wavelengths.`,
      dropLabel: `Droppable area, Increasing frequency and energy 1`,
    },
    {
      id: "infraredWaves",
      name: "Infrared waves",
      detail: `I have more energy than the microwave but less than visible light.`,
      dropLabel: `Droppable area, Increasing frequency and energy 2`,
    },
    {
      id: "ultravioletWaves",
      name: "Ultraviolet waves",
      detail: `I have a little more energy than visible light, and my wavelengths are a bit shorter.`,
      dropLabel: `Droppable area, Increasing frequency and energy 3`,
    },
    {
      id: "gammaRays",
      name: "Gamma rays",
      detail: `I am found on one end of the spectrum. I have the highest energy level and the shortest wavelengths.`,
      dropLabel: `Droppable area, Increasing frequency and energy 4`,
    },
  ],

  transitionPopup: {
    ...commonData.transitionPopup,
    content: `You have successfully built the electromagnetic spectrum! Now it’s time to explore how we use 
  those different waves in our daily lives.`,
  },
  completionPopup: {
    ...commonData.completionPopup,
    content: `You have completed the activity!`,
  },

  screen_two_text: `Electromagnetic waves are all around us. Read the descriptions of applications 
  of each type of electromagnetic wave and then answer the questions that follow by clicking on all 
  the stores that would use that type of electromagnetic wave.`,

  waveCommonText: "Click on all the stores that use -1-. ",
  questionText: "Question: -1- of -2-",
  waves: [
    {
      id: "radio",
      name: "Radio waves",
      text: "radio waves",
      detail: `Radio waves bring you signals from radios, TVs, and cell phones; they are emitted by stars and gases.`,
      answer: [
        "wirelessTechToys",
        "telescopes",
        "tvAndRemotes",
        "satelliteDishes",
      ],
    },
    {
      id: "microwaves",
      name: "Microwaves",
      text: "microwaves",
      detail: `Microwaves are used to cook food, in Doppler radar, and helped discover evidence for the big bang theory.`,
      answer: ["tvAndRemotes", "telescopes", "appliancesGalore"],
    },
    {
      id: "infrared",
      name: "Infrared waves",
      text: "infrared waves",
      detail: `Infrared waves are used in remote controls, night vision, heat lamps, and toasters; 
      they also allow scientists to see through dust in the universe. `,
      answer: ["tvAndRemotes", "telescopes", "appliancesGalore"],
    },
    {
      id: "Visible-light",
      name: "Visible light waves",
      text: "visible light waves",
      detail: `Visible light waves are used in light bulbs found in appliances, laser printers, and TVs; 
      they help scientists understand characteristics of stars.`,
      answer: [
        "laserPrinter",
        "telescopes",
        "tvAndRemotes",
        "photographyCenter",
        "appliancesGalore",
      ],
    },
    {
      id: "ultraviolet",
      name: "Ultraviolet waves",
      text: "ultraviolet waves",
      detail: `Ultraviolet waves are used in blacklights, used by hospitals to sterilize surgical equipment, 
      and used to study the formation of stars.`,
      answer: ["hospitalSupplies", "telescopes"],
    },
    {
      id: "x-rays",
      name: "X-rays",
      text: "x-rays",
      detail: `X-rays are used by dentists to image teeth and by airport security to see through your bag; 
      x-rays can detect hot gases in the universe.`,
      answer: ["orthopedicTreatment", "telescopes"],
    },
    {
      id: "gamma",
      name: "Gamma rays",
      text: "gamma rays",
      detail: `Gamma rays are used to kill cancer cells; they were produced in supernova explosions.`,
      answer: ["telescopes", "cancerCenter"],
    },
  ],
  instruments: {
    laserPrinter: "Laser Printer",
    wirelessTechToys: "Wireless Tech Toys",
    cancerCenter: "Cancer Center",
    tvAndRemotes: "TVs and Remotes",
    satelliteDishes: "Satellite Dishes",
    hospitalSupplies: "Hospital Supplies",
    orthopedicTreatment: "Orthopedic Treatment",
    telescopes: "Telescopes",
    photographyCenter: "Photography Center",
    appliancesGalore: "Appliances Galore",
  },
};

export default data;
