const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: "Start",
  buttonContinueLabel: "Start",
  content:
    "Today, you will explore how Freezing, the emperor penguin, is made up of a collection of different parts.",
};

const completionScreen = {
  content: "You have completed the simulation.",
  type: "positive",
  heading: "Congratulations!",
  buttonText: "Reset",
  ButtonLabel: "Reset",
  buttonClasses: "reset-white reverse icon",
};

const RawTextData = {
  ecosystemContent: [
    {
      id: 1,
      className: "organism-penguin",
      textContent:
        "Freezing is an emperor penguin who loves living on the coast of Antarctica. She is a single, living <b>organism</b>. Any individual plant or animal is considered an <b>organism</b>.",
      clickContent: "Click on the <b>organism</b>.",
      correctText:
        "<b>Correct!</b> Freezing is the single <b>organism</b>. Let’s now zoom down to the next hierarchical organization level: the organ system.",
      altText:
        "A graphic of a penguin standing in the center with a gray background.",
      correctAnswer: ["penguin"],
      animals: [
        {
          id: "penguin",
          text: "Penguin",
        },
      ],
    },
    {
      id: 2,
      className: "organism-population",
      textContent:
        "Though Freezing is just one single <b>organism</b>, she is made up of many different <b>organ systems</b>. Many of her organ systems are similar to human organ systems. Just like us, she has a skeletal system, a circulatory system, and many other organ systems. Her circulatory system circulates oxygen through her blood to all parts of her body. Her skeletal system provides her body structure and support.",
      clickContent: " Click on the two <b>organ systems.</b>",
      correctText:
        "<b>Correct!</b> The circulatory and skeletal systems are just two of the <b>organ systems</b> that work together to allow the single <b>organism</b> to function. Let’s now zoom down to the next hierarchical organization level: the organ.",
      correctAnswer: ["skeletal-system", "circulatory-system"],
      altText:
        "A diagram showing the inside of the penguin. The bones of the skeletal system and the heart and blood vessels of the circulatory system can be seen.",
      animals: [
        {
          id: "skeletal-system",
          text: "Skeletal system",
          liveText:
            "Diagram of only the penguin's skeletal system to the right of the penguin that shows both body systems. Shows the bone structure of the penguin.",
        },
        {
          id: "circulatory-system",
          text: "Circulatory system",
          liveText:
            "Diagram of only the penguin's circulatory system to the right of the penguin that shows both body systems. Shows the penguin's heart and blood vessels ",
        },
      ],
    },
    {
      id: 3,
      className: "organism-community",
      textContent:
        "Each <b>organ system</b> is made up of distinct <b>organs</b>. Just like in humans, the organs that make up Freezing’s circulatory system include the heart, blood vessels, and blood.",
      clickContent:
        "Click on two of the key <b>organs</b> that make up the circulatory system.",
      correctText:
        "<b>Correct!</b> The heart and blood vessels are individual <b>organs</b> that work together to form an <b>organ system</b> (the circulatory system). Let’s now zoom down to the next hierarchical organization level: the tissue.",
      incorrectText:
        "<b>Incorrect!</b> You did not click on the correct tissue. Click on the three <b>cells</b> that make up the cardiac muscle <b>tissue</b>.",
      correctAnswer: ["heart", "blood-vessels"],
      altText:
        "A diagram showing the heart in the center of the penguin’s chest. Blood vessels branch out from the heart to the fins, head, kidneys, and feet.",
      animals: [
        {
          id: "heart",
          text: "Heart",
        },
        {
          id: "blood-vessels",
          text: "Blood vessels",
        },
      ],
    },
    {
      id: 4,
      className: "heart-system",
      textContent:
        "Each <b>organ</b> is made up of distinct <b>tissues</b>. A <b>tissue</b> is a mass of similar cells that perform a specialized function.",
      clickContent: "Click on the <b>tissues</b> that make up the heart.",
      correctText:
        "<b>Correct!</b> The blood <b>tissue</b>, nerve <b>tissue</b>, and cardiac muscle <b>tissue</b> all work together to form an <b>organ</b> (the heart). Let’s now zoom down to the next hierarchical organization level: the cell.",
      correctAnswer: ["blood-tissue", "cardiac-tissue", "nerve-tissue"],
      altText:
        "A diagram of the heart is in the center. Three types of tissue that make up the heart: blood tissue, nerve tissue, and cardiac tissue are shown",

      animals: [
        {
          id: "blood-tissue",
          text: "Blood tissue",
        },
        {
          id: "cardiac-tissue",
          text: "Cardiac tissue",
        },
        {
          id: "nerve-tissue",
          text: "Nerve tissue",
        },
      ],
    },
    {
      id: 5,
      className: "heart-open",
      textContent:
        "Every <b>tissue</b> is made up of <b>cells</b> that perform identical functions. A <b>cell</b> is the most basic structural and functional unit of living organisms. Cells are so tiny that it can sometimes be hard to tell them apart when looking at a section of tissue.",
      clickContent:
        "Click on the <b>cells</b> that make up the cardiac muscle <b>tissue</b>.",
      correctText:
        "<b>Correct!</b> Cardiac muscle <b>cells</b> help form the cardiac muscle <b>tissue</b>.",
      incorrectText:
        "<b>Incorrect!</b> You did not click on the correct tissue. Click on the <b>cells</b> that make up the cardiac muscle <b>tissue</b>.",
      correctAnswer: ["cardiac-cells"],
      altText:
        "Heart cross-section showing that blood cells make up blood tissue, nerve cells make up nerve tissue, and cardiac muscle cells make up cardiac tissue.",

      animals: [
        {
          id: "blood-cells",
          text: "Blood cells",
        },
        {
          id: "cardiac-cells",
          text: "Cardiac muscle cells",
        },
        {
          id: "nerve-cells",
          text: "Nerve cells",
        },
      ],
    },
  ],

  dialogData: {
    start: {
      ...info,
      buttonContinueText: "Start",
      buttonContinueLabel: "Start",
    },
    info: {
      ...info,
      header: "",
      buttonContinueText: "Close",
      buttonContinueLabel: "Close",
      buttonClasses: "",
      content: "Read the provided story and follow the directions.",
    },
    correct: {
      ...info,
      dialogType: "positive",
      buttonContinueText: "Continue",
      buttonContinueLabel: "Continue",
    },
    incorrect: {
      ...info,
      dialogType: "warning",
      buttonContinueText: "Close",
      buttonContinueLabel: "Close",
    },
  },

  mcqQuestionText: "Select the term that best applies to the clue.",
  mcqOptions: ["Organ system", "Tissue", "Cell", "Organ", "Organism"],

  mcqData: [
    {
      id: 1,
      ques: "I am a collection of tissues that work together to carry out a function. What am I?",
      class: "organism-seal",
      answer: "organ",
    },
    {
      id: 2,
      ques: "I am the most basic unit of life. When I combine with other units like me, we form a tissue. What am I?",
      class: "community",
      answer: "cell",
    },
    {
      id: 3,
      ques: "I am a collection of organs that work together to carry out a function. One of my collections includes the heart, blood vessels, and blood. What am I?",
      class: "population-penguin",
      answer: "organ system",
    },
    {
      id: 4,
      ques: "I am one bone within the skeletal system. What am I?",
      class: "population-fish",
      answer: "organ",
    },
    {
      id: 5,
      ques: "I am made up of cells that all serve the same function. I can form one part of the heart. What am I?",
      class: "ecosystem",
      answer: "tissue",
    },
  ],

  questionHeading: "Question -1- of 5.",

  completionDialog: {
    reset: { ...completionScreen },
    continue: {
      ...completionScreen,
      heading: "Great job!",
      buttonText: "Continue",
      buttonClasses: "right-arrow icon",
      type: "attention",
      content:
        "Now that you have explored the hierarchical organization of a penguin, show what you know.",
    },
  },

  resetText: [
    {
      type: "reset",
      resetButtonText: "Yes",
      buttonContinueText: "No",
      content: "Are you sure you want to reset?",
    },
  ],

  buttonText: "Continue",
  rightMsg: "That's right!",
  wrongMsg: "Not quite right. Try again!",
  submitAnswer: "Submit Answer",
  buttonFinish: "Finish",
  buttonNext: "Next",
  buttonClose: "Close",
  reset: "Reset",
  info: "Info",
  resetLiveText: "Your activity has been reset",
  mcqInfotext: "Select the term that best applies to the clue.",
  screen1Heading:
    "Students will track how an organism is made up of organ systems that are made up of organs that are made of tissues which are made of cells. Students will classify images as cell, tissue, organ, organ system, and organism.",
};

export default RawTextData;
