import commonData from "../../app/data/data.en";

const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  buttonLabels: { ...commonData.buttonLabels },
  startUpInfo: {
    buttonContinueText: "Start",
    buttonContinueLabel: "Start",
    instructionBoxContent: [
      "A food web shows all the feeding relationships in an ecosystem. It can show us how energy moves from organism to organism. You will be learning more about this desert ecosystem and the food web it supports.",
    ],
  },
  completionScreen: {
    ...commonData.completionPopup,
    content:
      "You have successfully marked the food web in the desert ecosystem.",
  },
  buttonInformation: [
    {
      id: "sun",
      value: "Sun",
      disabled: false,
      text: "Sun",
      label1: "Sun",
      label2: "Sun - Source of Energy",
    },
    {
      id: "hawk",
      value: "Hawk",
      disabled: false,
      text: "Hawk",
      label1: "Hawk",
      label2: "Hawk - Secondary Consumer",
    },
    {
      id: "cactus",
      value: "Cactus",
      disabled: false,
      text: "Cactus",
      label1: "Cactus",
      label2: "Cactus- Producer",
    },
    {
      id: "coyote",
      value: "Coyote",
      disabled: false,
      text: "Coyote",
      label1: "Coyote",
      label2: "Coyote - Secondary Consumer",
    },
    {
      id: "rabbit",
      value: "Rabbit",
      disabled: false,
      text: "Rabbit",
      label1: "Rabbit",
      label2: "Rabbit - Primary Consumer",
    },

    {
      id: "grass",
      value: "Grass",
      disabled: false,
      text: "Grass",
      label1: "Grass",
      label2: "Grass - Producer",
    },
    {
      id: "lizard",
      value: "Lizard",
      disabled: false,
      text: "Lizard",
      label1: "Lizard",
      label2: "Lizard - Primary Consumer",
    },
    {
      id: "mouse",
      value: "Mouse",
      disabled: false,
      text: "Mouse",
      label1: "Mouse",
      label2: "Mouse - Primary Consumer",
      label3: "Mouse - Both primary and secondary consumer",
    },
    {
      id: "snake",
      value: "Snake",
      disabled: false,
      text: "Snake",
      label1: "Snake",
      label2: "Snake - Secondary Consumer",
    },

    {
      id: "spider",
      value: "Spider",
      disabled: false,
      text: "Spider",
      label1: "Spider",
      label2: "Spider - Primary Consumer",
    },
  ],
  mcqData: [
    {
      id: "question1",
      mcqQuestion:
        "All energy in a food web starts in the same place. Really, we are not kidding! A food web in the ocean, in the garden near your school, in the rain forest, and in this desert all start from the same source.<br><br> Select where you think the energy for all food webs begins.",
      radioButton: false,
      correctAnswer: ["sun"],
      liveText: "A desert scene with the Sun and a variety of desert organisms",
      imageAltText:
        "A desert scene with the Sun and a variety of desert organisms",
      imageAltText2:
        "A desert scene with the Sun and a variety of desert organisms",
    },
    {
      id: "question2",
      mcqQuestion:
        "The Sun provides energy to the producers. Producers are the organisms in a food web that make their own food directly from the energy of the Sun. <br><br> Look at this desert ecosystem, and select all the producers you see.",
      radioButton: false,
      correctAnswer: ["cactus", "grass"],
      liveText:
        "A solid yellow line connects the Sun to the producers - cactus and grass.",
      imageAltText:
        "A desert scene with the Sun and a variety of desert organisms",
      imageAltText2:
        "A solid yellow line connects the Sun to the producers - cactus and grass.",
    },
    {
      id: "question3",
      mcqQuestion:
        "Energy started at the Sun and moved on to the producers. Now, the primary consumers get their energy by eating the producers. Primary means first, and consumer means eater. In the case of a food web, the primary consumers are the first group of organisms to eat. Remember, the producers did not eat; they made their own food.<br><br>Find all the primary consumers in this ecosystem.",
      radioButton: false,
      correctAnswer: ["mouse", "spider", "lizard", "rabbit"],
      liveText:
        "A dotted green line connects the producers - cactus and grass - to the primary consumers - mouse, spider, rabbit, and lizard.",
      imageAltText:
        "A solid yellow line connects the Sun to the producers - cactus and grass.",
      imageAltText2:
        "A dotted green line connects the producers - cactus and grass - to the primary consumers - mouse, spider, rabbit, and lizard.",
    },
    {
      id: "question4",
      mcqQuestion:
        "Now, the energy in this food web is moved to what we call the secondary consumers. A secondary consumer is an organism that eats a primary consumer. Think about this: some animals eat both consumers and producers, like most humans. This means you might check an organism off as being both a primary and secondary consumer.<br><br> Find all the secondary consumers in this ecosystem.",
      radioButton: false,
      correctAnswer: ["coyote", "snake", "hawk"],
      liveText:
        "A dashed orange line connects the primary consumers - mouse, spider, rabbit and lizard - to the secondary consumers - coyote, snake, and hawk.",
      imageAltText:
        "A dotted green line connects the producers - cactus and grass - to the primary consumers - mouse, spider, rabbit, and lizard.",
      imageAltText2:
        "A solid yellow line from sun to the producer. A dotted green line from producers to primary consumers. A dashed orange line connects the primary consumers to the secondary consumers.",
    },
    {
      id: "question5",
      mcqQuestion:
        "Now you are starting to see why we call this a food web! <br><br>But there is one very important part we have failed to label: the direction the energy is flowing in this web. Select a line below, and then choose the direction the energy is flowing for each part of the food web.<br><br><b>Yellow solid line</b><br>What direction is the energy going on the yellow solid line?",
      radioButton: true,
      correctAnswer: "toward_the_producers",
      radiobuttonLabel: [
        {
          id: "toward_the_sun",
          value: "Toward the Sun",
          text: "Toward the Sun",
          label: "Toward the Sun",
        },
        {
          id: "toward_the_producers",
          value: "Toward the producers",
          text: "Toward the producers",
          label: "Toward the producers",
        },
      ],
      liveText:
        "Yellow arrows show the energy flowing from the Sun to the producers.",
      imageAltText:
        "A solid yellow line from sun to the producer. A dotted green line from producers to primary consumers. A dashed orange line connects the primary consumers to the secondary consumers.",
      imageAltText2:
        "Yellow arrows show energy from Sun to producers; green line - producers to mouse, spider, rabbit & lizard; orange line - from them to coyote, snake & hawk",
    },
    {
      id: "question6",
      mcqQuestion:
        "Now you are starting to see why we call this a food web! <br><br>But there is one very important part we have failed to label: the direction the energy is flowing in this web. Select a line below, and then choose the direction the energy is flowing for each part of the food web.<br><br><b>Green dotted line</b> <br>What direction is the energy going on the green dotted line?",
      radioButton: true,
      correctAnswer: "toward_the_primary_consumers",
      radiobuttonLabel: [
        {
          id: "toward_the_producers",
          value: "Toward the producers",
          text: "Toward the producers",
          label: "Toward the producers",
        },
        {
          id: "toward_the_primary_consumers",
          value: "Toward the primary consumers",
          text: "Toward the primary consumers",
          label: "Toward the primary consumers",
        },
      ],
      liveText:
        "Green arrows show the energy moving from the producers to the primary consumers.",
      imageAltText2:
        "Yellow arrows - energy from Sun to producers; Green arrow - energy from producers to the primary consumers; Orange line- from them to coyote, snake & hawk",
      imageAltText:
        "Yellow arrows show energy from Sun to producers; green line - producers to mouse, spider, rabbit & lizard; orange line - from them to coyote, snake & hawk",
    },
    {
      id: "question7",
      mcqQuestion:
        "Now you are starting to see why we call this a food web! <br><br>But there is one very important part we have failed to label: the direction the energy is flowing in this web. Select a line below, and then choose the direction the energy is flowing for each part of the food web.<br><br><b>Orange dashed line</b><br>What direction is the energy going on the orange dashed line?",
      radioButton: true,
      correctAnswer: "toward_the_secondary_consumers",
      radiobuttonLabel: [
        {
          id: "toward_the_secondary_consumers",
          value: "Toward the secondary consumers",
          text: "Toward the secondary consumers",
          label: "Toward the secondary consumers",
        },
        {
          id: "toward_the_primary_consumers",
          value: "Toward the primary consumers",
          text: "Toward the primary consumers",
          label: "Toward the primary consumers",
        },
      ],
      liveText:
        "Orange arrows show the energy flowing from the primary consumers to the secondary consumers.",
      imageAltText:
        "Yellow arrows - energy from Sun to producers; Green arrow - energy from producers to the primary consumers; Orange line- from them to coyote, snake & hawk",
      imageAltText2:
        "Yellow arrows - energy from Sun to producers; Green arrow - energy from producers to the primary consumers; Orange arrow - energy from primary to secondary consumers",
    },
  ],
  // imageAltText: "Containing the oraganism in the ecosystem.",
  resetLiveText: commonData.resetLiveText,
  buttonNext: "Next",
  buttonFinish: "Finish",
  correctToastMessage: "That's right!",
  incorrectToastMessage: "Not quite right.Try again!",
  partiallyIncorrectToastMessage:
    "Some elements are not identified correctly. Try again!",
  resetMsgContent: "Are you sure you want to reset?",
  questionHeading: "Question: -1- of -2-",
  buttonInfo: "Info",
  buttonReset: "Reset",
  buttonYes: "Yes",
  buttonNo: "No",
  buttonClose: "Close",
  pageHeading:
    "In this simulation, the learner will describe the flow of energy through an ecosystem, including recognizing the roles of the sun, producers, consumers, and decomposers.",

  infoPopupText: {
    helpInfo: [
      "Read the question prompt and answer by selecting the correct organism in the ecosystem.",
      "Here is the key for symbols used for property:",
    ],
    shapesInfo: [
      {
        id: "energysource",
        label: "Source of Energy",
        altText: "Square represent Source of Energy",
      },
      {
        id: "producer",
        label: "Producers",
        altText: "Triangle represent Producers",
      },
      {
        id: "primaryconsumer",
        label: "Primary Consumers",
        altText: "Hexagon represent Primary Consumers",
      },
      {
        id: "secondaryconsumer",
        label: "Secondary Consumers",
        altText: "Circle represent Secondary Consumers",
      },
    ],
  },
  linesInfo: [
    {
      line1: "question2",
      data: [
        {
          id: "yelllow-line1",
          data: [
            { lineid: "question5", datafile: ["arrow", "arrow", "arrow"] },
          ],
        },
        {
          id: "yelllow-line2",
          data: [
            {
              lineid: "question5",
              datafile: ["arrow", "arrow", "arrow", "arrow"],
            },
          ],
        },
      ],
    },
    {
      line1: "question3",
      data: [
        {
          id: "green-line1",
          data: [{ lineid: "question6", datafile: ["arrow", "arrow"] }],
        },
        {
          id: "green-line2",
          data: [{ lineid: "question6", datafile: ["arrow", "arrow"] }],
        },
        {
          id: "green-line3",
          data: [{ lineid: "question6", datafile: ["arrow", "arrow"] }],
        },
        {
          id: "green-line4",
          data: [{ lineid: "question6", datafile: ["arrow", "arrow"] }],
        },
        {
          id: "green-line5",
          data: [{ lineid: "question6", datafile: ["arrow"] }],
        },
        {
          id: "green-line6",
          data: [{ lineid: "question6", datafile: ["arrow"] }],
        },
        {
          id: "green-line7",
          data: [
            { lineid: "question6", datafile: ["arrow", "arrow", "arrow"] },
          ],
        },
        {
          id: "green-line8",
          data: [
            { lineid: "question6", datafile: ["arrow", "arrow", "arrow"] },
          ],
        },
      ],
    },
    {
      line1: "question4",
      data: [
        {
          id: "orange-line1",
          data: [
            {
              lineid: "question7",
              datafile: ["arrow", "arrow", "arrow", "arrow"],
            },
          ],
        },
        {
          id: "orange-line2",
          data: [
            {
              lineid: "question7",
              datafile: ["arrow", "arrow", "arrow", "arrow"],
            },
          ],
        },
        {
          id: "orange-line3",
          data: [
            { lineid: "question7", datafile: ["arrow", "arrow", "arrow"] },
          ],
        },
        {
          id: "orange-line4",
          data: [{ lineid: "question7", datafile: ["arrow", "arrow"] }],
        },
        {
          id: "orange-line5",
          data: [
            {
              lineid: "question7",
              datafile: ["arrow", "arrow", "arrow", "arrow"],
            },
          ],
        },
        {
          id: "orange-line6",
          data: [{ lineid: "question7", datafile: ["arrow", "arrow"] }],
        },
        {
          id: "orange-line7",
          data: [{ lineid: "question7", datafile: ["arrow", "arrow"] }],
        },
        {
          id: "orange-line8",
          data: [{ lineid: "question7", datafile: ["arrow", "arrow"] }],
        },
      ],
    },
  ],
};

export default data;
