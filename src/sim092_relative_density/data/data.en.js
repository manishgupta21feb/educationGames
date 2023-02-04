import globalCommonData from "../../app/data/data.en";

const data = {
  buttonLabels: {
    ...globalCommonData.buttonLabels,
  },
  completionScreen: {
    ...globalCommonData.completionPopup,
    content: " You have shown your knowledge of relative density!",
  },

  transitionPopupFluid: {
    ...globalCommonData.transitionPopup,
    content:
      "Now that you have explored how fluids layer based on their densities, let’s explore relative density. <b>Relative density</b> is how dense something is compared to a reference material.",
  },

  transitionPopupBall: {
    ...globalCommonData.transitionPopup,
    content:
      "You have just demonstrated relative density by comparing different fluids and solids! Now it is time to show what you know.",
  },

  tubeData: ["red", "green", "yellow", "purple"],

  resetLiveText: globalCommonData.resetLiveText,
  resetMsgContent: globalCommonData.resetPopupText,
  correctToastMessage: globalCommonData.correctToastMessage,
  incorrectToastMessage: globalCommonData.incorrectToastMessage,
  infoBoxContentScene1:
    "Pour each fluid into the graduated cylinder to see how it layers with the other fluids based on its density. Then, place each sphere into the graduated cylinder with the layered fluids to see how its density affects where it layers. ",
  infoBoxContentScene2: "Read each scenario, and select the correct answer.",
  instructionBoxContent:
    "Welcome to the Science Lab! Today, we will discover why substances sink or float.",
  activityHeading:
    "Students will compare the densities of four different fluids. Students will compare the relative densities of substances compared to fluids.",

  unitLabel1: "gram per mili litre",
  unitLabel2: " gram per mili litre",
  screenOne: {
    heading:
      "<b>Density</b> is the amount of matter in a given space. It’s essentially how much stuff is inside an object or a substance. Some objects and substances are more dense than others. When a fluid is more dense than another fluid, what do you think will happen? Let’s explore today and find out! Pour the fluids into the graduated cylinder, and observe what happens! ",
    subHeading: {
      firstFluid:
        "This is the first fluid you are pouring into the graduated cylinder. It will go directly to the bottom. Let’s see how adding other fluids changes that.",
      otherFluid:
        "Fluid 2 has a density of <br>0.82 g/mL. Where do you think it will layer in the graduated cylinder?",
      fourthFluid:
        " Now that you’ve layered the fluids, what observations can you make? Is the most dense fluid at the top or the bottom? What about the least dense one?",
    },
    id: "screenOne",
    altimgText: "alt screen one for fluid",
  },

  screenTwo: {
    heading:
      "Although the spheres all look similar, they are made of different materials and each has its own unique density. Select a sphere and place it into the graduated cylinder to determine its density relative to each fluid.",
    subHeading: {
      selectedBall:
        "The density of this sphere is (insert density). Based on your knowledge of density, where do you think it will layer in the graduated cylinder?",
    },
    id: "screenTwo",
    altimgText: "alt screen two for fluid and ball",
  },

  fluid: [
    {
      id: "red",
      density: "Fluid 1: Density = 1.30 g/mL",
      show: true,
      hideButton: false,
      fluid: "Fluid 1",
      densityInfo: "Fluid 1: 1.30 g/mL",
      densityValue: 1.3,
      label: "Fluid 1: Density = 1.30 gram per mili litre",
      labelInfo: "Fluid 1: 1.30 gram per mili litre",
      liveAlt:
        "Red fluid with a density of 1.30 gram per mili litre is poured into the graduated cylinder.",
    },
    {
      id: "green",
      density: "Fluid 2: Density = 0.82 g/mL",
      show: true,
      hideButton: false,
      fluid: "Fluid 2",
      densityInfo: "Fluid 2: 0.82 g/mL",
      densityValue: 0.82,
      label: "Fluid 2: Density = 0.82 gram per mili litre",
      labelInfo: "Fluid 2: 0.82 gram per mili litre",
      liveAlt:
        "Green fluid with a density of 0.82 gram per mili litre is poured into the graduated cylinder.",
    },
    {
      id: "yellow",
      density: "Fluid 3: Density = 0.76 g/mL",
      show: true,
      hideButton: false,
      fluid: "Fluid 3",
      densityInfo: "Fluid 3: 0.76 g/mL",
      densityValue: 0.76,
      label: "Fluid 3: Density = 0.76 gram per mili litre",
      labelInfo: "Fluid 3: 0.76 gram per mili litre",
      liveAlt:
        "Yellow fluid with a density of 0.76 gram per mili litre is poured into the graduated cylinder.",
    },
    {
      id: "purple",
      density: "Fluid 4: Density = 1.03 g/mL",
      show: true,
      hideButton: false,
      fluid: "Fluid 4",
      densityInfo: "Fluid 4: 1.03 g/mL",
      densityValue: 1.03,
      label: "Fluid 4: Density = 1.03 gram per mili litre",
      labelInfo: "Fluid 4: 1.03 gram per mili litre",
      liveAlt:
        "Purple fluid with a density of 1.03 gram per mili litre is poured into the graduated cylinder.",
    },
  ],

  labelData: [
    {
      id: "brown",
      show: true,
      densityInfo: "Sphere 2: 0.64 g/mL",
      label: "Sphere 2: 0.64 gram per mili litre",
    },
    {
      id: "yellow",
      show: false,
      densityInfo: "Fluid 3: 0.76 g/mL",
      label: "Fluid 3: 0.76 gram per mili litre",
    },
    {
      id: "green-fluid",
      show: false,
      densityInfo: "Fluid 2: 0.82 g/mL",
      label: "Fluid 2: 0.82 gram per mili litre",
    },
    {
      id: "blue",
      show: true,
      densityInfo: "Sphere 1: 0.92 g/mL",
      label: "Sphere 1: 0.92 gram per mili litre",
    },
    {
      id: "purple",
      show: false,
      densityInfo: "Fluid 4: 1.03 g/mL",
      label: "Fluid 4: 1.03 gram per mili litre",
    },
    {
      id: "green",
      show: true,
      densityInfo: "Sphere 3: 1.10 g/mL",
      label: "Sphere 3: 1.10 gram per mili litre",
    },
    {
      id: "red",
      show: false,
      densityInfo: "Fluid 1: 1.30 g/mL",
      label: "Fluid 1: 1.30 gram per mili litre",
    },
  ],

  sphere: [
    {
      id: "blue",
      density: "Sphere 1:<br/>Density = 0.92 g/mL",
      show: true,
      visited: false,
      densityValue: "0.92 g/mL",
      densityInfo: "Sphere 1: 0.92 g/mL",
      label: "Sphere 1: 0.92 gram per mili litre",
      labelInfo: "Sphere 1:Density = 0.92 gram per mili litre",
      liveAlt:
        "Sphere 1 of density 0.92 gram per mili litre is dropped in the graduated cylinder having different liquids inside",
    },
    {
      id: "brown",
      density: "Sphere 2:<br/>Density = 0.64 g/mL",
      show: true,
      visited: false,
      densityValue: "0.64 g/mL",
      densityInfo: "Sphere 2: 0.64 g/mL",
      label: "Sphere 2: 0.64 gram per mili litre",
      labelInfo: "Sphere 2:Density = 0.64 gram per mili litre",
      liveAlt:
        "Sphere 2 of density 0.64 gram per mili litre is dropped in the graduated cylinder having different liquids inside",
    },
    {
      id: "green",
      density: "Sphere 3:<br/>Density = 1.10 g/mL",
      show: true,
      visited: false,
      densityValue: "1.10 g/mL",
      densityInfo: "Sphere 3: 1.10 g/mL",
      label: "Sphere 3: 1.10 gram per mili litre",
      labelInfo: "Sphere 3:Density = 1.10 gram per mili litre",
      liveAlt:
        "Sphere 3 of density 1.10 gram per mili litre is dropped in the graduated cylinder having different liquids inside",
    },
  ],

  questionHeading: "Question: -1- of -2-",
  equationsData: [
    {
      srNo: "1",
      id: "question1",
      questionText:
        "If a screw sinks to the bottom of a fluid, is it more dense or less dense than the fluid?",
      answer: "moreDense",
      altimgText: "alt question 1",
      options: [
        {
          id: "moreDense",
          disabled: false,
          text: "More dense",
          label: "More Dense",
        },
        {
          id: "lessDense",
          disabled: false,
          text: "Less dense",
          label: "Less Dense",
        },
      ],
    },
    {
      srNo: "2",
      id: "question2",
      questionText:
        "A substance with a density of 0.55 g/mL is placed in a fluid with a density of 0.74 g/mL. Will the substance sink or float?",
      answer: "float",
      altimgText: "alt question 2",
      options: [
        {
          id: "sink",
          disabled: false,
          text: "Sink",
          label: "Sink",
        },
        {
          id: "float",
          disabled: false,
          text: "Float",
          label: "Float",
        },
      ],
    },
    {
      srNo: "3",
      id: "question3",
      questionText:
        "Two fluids are poured into a container. Fluid 1 has a density of 1.45 g/mL while Fluid 2 has a density of 1.76 g/mL. Which substance will sink?",
      answer: "fluid2",
      altimgText: "alt question 3",
      options: [
        {
          id: "fluid1",
          disabled: false,
          text: "Fluid 1",
          label: "Fluid 1",
        },
        {
          id: "fluid2",
          disabled: false,
          text: "Fluid 2",
          label: "Fluid 2",
        },
      ],
    },
    {
      srNo: "4",
      id: "question4",
      questionText:
        "Two fluids are in a container. Fluid 1 has a density of 4 g/mL and Fluid 2 has a density of 8 g/mL. An unknown object with a density of 2 g/mL is placed in the container. Compared to Fluid 1, will this object sink or float?",
      answer: "float",
      altimgText: "alt question 4",
      options: [
        {
          id: "sink",
          disabled: false,
          text: "Sink",
          label: "Sink",
        },
        {
          id: "float",
          disabled: false,
          text: "Float",
          label: "Float",
        },
      ],
    },
    {
      srNo: "5",
      id: "question5",
      questionText:
        "When oil is placed in water, it floats to the top. Is oil more dense or less dense than water?",
      answer: "lessDense",
      altimgText: "alt question 5",
      options: [
        {
          id: "moreDense",
          disabled: false,
          text: "More dense",
          label: "More dense",
        },
        {
          id: "lessDense",
          disabled: false,
          text: "Less dense",
          label: "Less dense5",
        },
      ],
    },
  ],
};

export default data;
