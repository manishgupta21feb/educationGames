import globalCommonData from "../../app/data/data.en";
import experiment1 from "../assets/videos/experiment1.mp4";
import experiment2 from "../assets/videos/experiment2.mp4";
import experiment3 from "../assets/videos/experiment3.mp4";
import redArrow from "../assets/images/arrows.png";
import exp1_start from "../assets/images/exp1_start.png";
import exp1_end from "../assets/images/exp1_end.png";
import exp2_start from "../assets/images/exp2_start.png";
import exp2_end from "../assets/images/exp2_end.png";
import exp3_start from "../assets/images/exp3_start.png";

const data = {
  mainScreenAlt:
    "Lab table & 3 setups – Conduction: 2 cups with thermometers & metal bar; Convection: beaker & water on hot plate & rice; Radiation: light & radiometer",
  observationMotive:
    "Students conduct experiments in a science lab to investigate the methods of thermal energy transfer.",
  resetLiveText: globalCommonData.resetLiveText,
  observationAlt:
    "Lab table & 3 setups – Conduction: 2 cups with thermometers & metal bar; Convection: beaker & water on hot plate & rice; Radiation: light & radiometer",
  instructionBoxContent:
    "Welcome to the Science Lab. Today, we will explore the three types of thermal energy transfer.",
  infoContent:
    "Select a science experiment to learn more about thermal energy transfer.",
  finsihBoxHeader: "Congratulations!",
  finishBoxContent: "You have successfully completed the simulation!",
  nextScreenCompletion: {
    text: "Now that you have investigated the three methods of thermal energy transfer, it is time to show what you know.",
    heading: "Great job!",
    button: "Continue",
  },
  dropzone: "dropzone-",
  dropzoneText: " is dropped on dropzone - ",
  h1InfoTextA11Y:
    "Show what you know. Answering below questions. Determine which scenario best shows conduction, convection, or radiation.",
  toastMsg: {
    correct: globalCommonData.correctToastMessage,
    incorrect: "Not quite right.",
    partialCorrect: "Some of the answers are correct.",
  },
  videoStop: "Stop video",
  introductionHeading:
    "Select each of the experiments on the lab table to investigate the different methods of thermal energy transfer.",
  buttonLabels: { ...globalCommonData.buttonLabels },
  redArrow: {
    aria: "Metal bar",
  },
  readingMeters: {
    meterA: {
      label: "Meter A",
      value: 20,
      endValue: 31,
    },
    meterB: {
      label: "Meter B",
      value: 40,
      endValue: 31,
    },
  },
  completionScreen: {
    ...globalCommonData.completionPopup,
    content: "Congratulations, You have successfully completed the simulation!",
  },
  isDroppedOn: " is droppped on ",
  Screen3: {
    questionHeading:
      "Determine which scenario best shows conduction, convection, or radiation.",
    options: [
      {
        id: "te_1",
        name: "Radiation",
        isDisable: false,
        answerId: "Radiation",
        isHidden: false,
        draggableTxt: "draggable",
      },
      {
        id: "te_2",
        name: "Conduction",
        isDisable: false,
        answerId: "Conduction",
        isHidden: false,
        draggableTxt: "draggable",
      },
      {
        id: "te_3",
        name: "Convection",
        isDisable: false,
        answerId: "Convection",
        isHidden: false,
        draggableTxt: "draggable",
      },
    ],
    description:
      "Determine which scenario best shows conduction, convection, or radiation.",
    questionList: [
      {
        id: "te_drop_0",
        value: "1. A student is roasting a marshmallow over a fire. ",
        answerId: "Radiation",
        hidden: false,
        aria: "droppable zone 1",
        label: "1. A student is roasting a marshmallow over a fire, drop zone.",
      },
      {
        id: "te_drop_1",
        value: "2.  When you hold a cup of hot chocolate, your hands get warm.",
        answerId: "Conduction",
        hidden: false,
        aria: "droppable zone 2",
        label:
          "2. When you hold a cup of hot chocolate, your hands get warm, drop zone.",
      },
      {
        id: "te_drop_2",
        value:
          "3. It’s warmer on the second floor of a school and cooler on the first.",
        label:
          "3. It’s warmer on the second floor of a school and cooler on the first, drop zone.",
        answerId: "Convection",
        hidden: false,
        aria: "droppable zone 3",
      },
    ],
  },
  messages: [
    {
      type: "reset",
      resetButtonText: "Yes",
      buttonContinueText: "No",
      header: "Reset Simulation",
      content: "Are you sure you want to reset?",
    },
  ],
  thermometer: [
    {
      label: "Thermometer 1",
      aria: "Thermometer 1",
      classes: "meter-1",
    },
    {
      label: "Thermometer 2",
      aria: "Thermometer 2",
      classes: "meter-2",
    },
    {
      label: "°C",
      classes: "degree-1",
    },
    { label: "°C", classes: "degree-2" },
    { label: "100ºC", classes: "degree-3" },
  ],
  animationInfo: [
    {
      label: "Cup A",
      aria: "Insulated cups with water - Cup A",
      classes: "cup-a",
    },
    {
      label: "Cup B",
      aria: "Insulated cups with water - Cup B",
      classes: "cup-b",
    },
  ],
  observationsData: [
    {
      id: "te_video_1",
      lablesBeforeAfter: [
        { id: 0, before: "A", classes: "exp1__cup-a", after: "A" },
        { id: 0, before: "B", classes: "exp1__cup-b", after: "B" },
        {
          id: 1,
          before: "20",
          classes: "exp1__meter-1",
          after: "31",
          text: "°C",
          classes2: "exp1__degree1",
        },
        {
          id: 2,
          before: "40",
          classes: "exp1__meter-2",
          after: "31",
          text: "°C",
          classes2: "exp1__degree2",
        },
      ],
      classes: "exp1",
      beforeExperiment:
        "This investigation demonstrates conduction. <b>Conduction</b> is a method of heat transfer that occurs when two objects are directly touching one another. What do you think will happen when the metal bar is added to the two cups? Press play to see how conduction affects the temperature of the water in each cup.",
      afterExperiment:
        "Observe the results. What happened to the temperature of Cup A? What about Cup B? Notice how the temperature of Cup A slowly increased while the temperature of Cup B slowly decreased until the two cups were equal in temperature. This is called <b> thermal equilibrium</b>. ",
      videoSrc: experiment1,
      isPlayed: false,
      buttonLabels: "Conduction",
      experimentName: "Conduction Investigation",
      alt: "2 insulated cups of water are on lab table: Cup A & Cup B. Thermometers in cups show Cup A = 20°C, Cup B = 40°C. A bent metal bar is off to the right.",
      afterAlt:
        "2 insulated cups of water are on lab table: Cup A & Cup B. Thermometers in cups show Cup A = 31°C, Cup B = 31°C. A bent metal bar is off to the right.",
      liveText:
        "Bent metal bar added to 2 white cups of water. Water in cup A is 20°C; cup B is 40°C. Cup A moves up to 31°C and cup B moves down to 31°C over animation.",
      isDisable: false,
      labels: [
        {
          labelName: "Insulated cups with water",
          classes: "two-cup",
        },
        {
          labelName: "Metal bar",
          classes: "metal-bar",
        },
      ],
    },
    {
      id: "te_video_2",
      lablesBeforeAfter: [
        {
          // before: "100<span style='font-family:TisaPro'>°</span>C",
          // classes: "exp2__degree",
          // after: "100<span style='font-family:TisaPro'>°</span>C ",
          before: "100ºC",
          classes: "exp2__degree",
          after: "100ºC",
        },
      ],
      classes: "exp2",
      beforeExperiment:
        "This investigation demonstrates convection. <b> Convection </b> is a type of heat transfer that occurs in liquids and gases due to the rising of the hotter, less dense particles and the falling of cooler, more dense particles. Look at today’s lab setup. How do you think we will see convection occurring? Press play to see.",
      afterExperiment:
        "Observe the results. Notice the rice was rising and falling in the boiling water. This was due to <b> convection. </b> As the water warmed, it rose to the top and took the rice with it. It then pushed the cooler water at the top down. This created a circular current.",
      videoSrc: experiment2,
      isPlayed: false,
      buttonLabels: "Convection",
      experimentName: "Convection Investigation",
      afterAlt:
        "Water is boiling at 100°C. Rice is added to the boiling water.",
      alt: "A beaker of boiling water is on a hot plate. A plate with a pile of uncooked rice is on the table to the right of the hot plate.",
      liveText:
        "Water boils at 100°C. Rice is added to boiling water. Rice moves in circular pattern and falls toward bottom, gets heated, and then moves back to top.",
      isDisable: false,
      labels: [
        {
          labelName: "Water",
          classes: "water",
        },
        {
          labelName: "Hot plate",
          classes: "hot-plate",
        },
        {
          labelName: "Uncooked rice",
          classes: "uncooked-rice",
        },
      ],
    },
    {
      id: "te_video_3",
      lablesBeforeAfter: [],
      classes: "exp3",
      beforeExperiment:
        "This investigation demonstrates radiation. <b> Radiation </b> is a type of heat transfer that occurs from the movement of electromagnetic waves or subatomic particles. Look at our lab setup for today. How do you think radiation will occur? Turn the lamp on to see!",
      afterExperiment:
        "Notice what happened to the radiometer when the lamp was turned on. Even though the lamp was not touching it, the inside part was moving. This is because of <b> radiation.</b> Radiometers move whenever they detect infrared radiation. These tools help us determine whenever infrared radiation occurs because those waves are not visible to our eyes.",
      videoSrc: experiment3,
      isPlayed: false,
      buttonLabels: "Radiation",
      experimentName: "Radiation Investigation",
      afterAlt:
        "When light is turned on, the black and white vane in the radiometer moves.",
      liveText:
        "A radiometer, a light bulb-shaped device with a black and white vane, is under a light. When light is on, the vane moves. When light is off, it stops.",
      alt: "When light is turned off, the black and white vane in the radiometer does not moves.",
      isDisable: false,
      labels: [
        {
          labelName: "Heat lamp",
          classes: "heat-lamp",
        },
        {
          labelName: "Radiometer",
          classes: "radiometer",
        },
      ],
    },
  ],
  currentExperimentNumber: -1,
};

export default data;
