import globalConfig from "../../app/data/data.en";

import videoOne from "../assets/videos/one.mp4";
import videoTwo from "../assets/videos/two.mp4";
import questionThreeVideo from "../assets/videos/q3.mp4";

const completionScreen = {
  ...globalConfig.completionPopup,
  content:
    "You have successfully completed the simulation exploring the applications of Newton's three laws!",
};

const data = {
  buttonLabels: { ...globalConfig.buttonLabels },
  resetConfirmationText: globalConfig.resetLiveText,
  resetMsgContent: globalConfig.resetPopupText,
  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  wrongMsg: globalConfig.incorrectToastMessage,
  h1InfoTextA11Y:
    "Students will describe Newton’s Three Laws of Motion. Students will investigate scenarios and determine which of Newton's Three Laws is being described.",
  infoLabel: "Info",
  resetLabel: "Reset",
  audioAriaLabel:
    "If you are using screen reader, turn off the audio button for better experience.",
  audioPlay: "Audio On",
  audioStop: "Audio Off",
  instructionBoxContent:
    "Today, we will investigate how Newton's three laws of motion can be seen in our daily activities.",
  InfoBoxContentScreenOne:
    "Read the instructions, and click the screen where directed.",
  altInfoBoxContentOne:
    "Read the instructions, and click the screen where directed.",
  InfoBoxContentScreenTwo:
    "<ul><li>Newton's first law: Newton's law stating that an object at rest stays at rest, or an object in motion stays in motion, until unbalanced forces act upon it; often referred to as Newton's law of inertia</li><li>Newton's second law: Newton's law stating that acceleration of an object depends on the object's mass and the magnitude of the force acting upon it (F = ma); often referred to as Newton's law of force and acceleration</li><li>Newton's third law: Newton's law stating that for every action force there is an equal and opposite reaction force; often referred to as Newton's law of action-reaction</li></ul>",
  altInfoBoxContentTwo:
    "Newton's first law: Newton's law stating that an object at rest stays at rest, or an object in motion stays in motion, until unbalanced forces act upon it; often referred to as Newton's law of inertia. Newton's second law: Newton's law stating that acceleration of an object depends on the object's mass and the magnitude of the force acting upon it (Force is equal to mass into acceleration); often referred to as Newton's law of force and acceleration. Newton's third law: Newton's law stating that for every action force there is an equal and opposite reaction force; often referred to as Newton's law of action-reaction.",

  completionDialog: {
    reset: { ...completionScreen },
  },

  transitionPopup: {
    ...globalConfig.transitionPopup,
    heading: "Great job!",
    buttonText: "Continue",
    buttonClasses: "right-arrow icon",
    type: "attention",
    content:
      "Now that you’re familiar with each of Newton’s three laws, show what you know by applying each law to the following scenarios.",
  },
  questionHeading: "Question: -1- of 3",
  messages: [
    {
      type: "reset",
      resetButtonText: "Yes",
      buttonContinueText: "No",
      header: "Reset Simulation",
      content: "Are you sure you want to reset?",
    },
  ],
  nonInvestigatingData: [
    {
      id: 1,
      text: 'You might think that things "just happen" instead of truly understanding the science behind them. For example, an apple doesn\'t fall from a tree on a windless day "just because;" it falls from the tree because of a force and a change in motion. The relationship between force and change in motion follows three precise laws. Today, we will investigate each of those laws.',
      imageClass: "non-investigation-one-image",
      imageAlt:
        "An different size of apple tree on green grass with blue sky and two clouds in the sky",
      isVideo: false,
      videoSrc: "",
      videoClass: "",
      interactive: false,
    },
    {
      id: 2,
      text: "Click the apple to see the force acting on it.",
      imageClass: "non-investigation-one-image",
      imageAlt: "The apple tree has one apple highlighted.",
      isVideo: false,
      videoSrc: "",
      videoClass: "",
      interactive: true,
      videoStart: {
        id: 3,
        text: "Click the apple to see the force acting on it.",
        imageClass: "",
        imageAlt:
          "The highlighted apple is falling to the ground. A white arrow shows that the apple is falling down.",
        isVideo: true,
        videoSrc: videoOne,
        videoClass: "non-investigation-one-video",
        interactive: false,
      },
      videoEnd: {
        id: 4,
        text: "<b>Newton's first law, the law of inertia</b>, states that an object at rest stays at rest, and an object in motion stays in motion, until unbalanced forces act upon it. Let's think about an apple on a tree. The apple will stay on the tree until a force acts upon it. In this case, the unbalanced force is gravity.",
        imageClass: "non-investigation-three-image",
        imageAlt:
          "The apple tree has one apple sitting on the ground below it.",
        isVideo: false,
        videoSrc: "",
        videoClass: "",
        interactive: false,
      },
    },
    {
      id: 5,
      text: "Click the tree to see the accelerations of two apples of different masses.",
      imageClass: "non-investigation-four-image",
      imageAlt:
        "Two apples are highlighted on the apple tree. The apples have different masses. Apple 1 mass = 1.0 kg; Apple 2 mass = 0.5 kg",
      isVideo: false,
      videoSrc: "",
      videoClass: "",
      interactive: true,
      videoStart: {
        id: 6,
        text: "Click the tree to see the accelerations of two apples of different masses.",
        imageClass: "",
        imageAlt: "1 large apple and 1 small apple are falling to the ground.",
        isVideo: true,
        videoSrc: videoTwo,
        videoClass: "non-investigation-four-video",
        interactive: false,
      },
      videoEnd: {
        id: 7,
        text: "Continuing with the apple scenario, let's say that one apple has a mass of 1.0 kg, and the other apple has a mass of 0.5 kg. If you were to throw each of the apples with a force of 5 N, which do you think you could throw farther? ",
        imageClass: "non-investigation-five-image",
        imageAlt:
          "1 large apple and 1 small apple are on the ground under the tree.",
        isVideo: false,
        videoSrc: "",
        videoClass: "",
        interactive: false,
      },
    },
    {
      id: 8,
      text: "You'd be able to throw the 0.5 kg apple farther than the 1.0 kg apple because, according to <b>Newton's second law</b>, acceleration is equal to force divided by mass. Check out the math! <br/><br/>After doing the math, you can see that Apple 2, the apple with less mass, will accelerate faster than Apple 1.",
      imageClass: "non-investigation-six-image",
      imageAlt:
        "1 large apple and 1 small apple are on the ground under the tree.",
      isVideo: false,
      videoSrc: "",
      videoClass: "",
      interactive: false,
    },
    {
      id: 9,
      text: "Click the apples to see the forces acting on them.",
      imageClass: "non-investigation-seven-image",
      imageAlt:
        "Three different sizes of apples are on the ground underneath the apple tree.",
      isVideo: false,
      videoSrc: "",
      videoClass: "",
      interactive: false,
    },
    {
      id: 10,
      text: "When an apple falls from a tree, it lands on the ground. While sitting on the ground, the apple exerts a downward gravitational force on the ground (F<sub>g</sub>) while the ground exerts an upward normal force (F<sub>N</sub>) on the apple. If the normal force didn't exist, the gravitational force on the apple would continue to pull the apple through the ground toward the center of Earth! <br/><br/><b>Newton's third law of motion</b> can be seen in this example. It states that for every action, there is an equal and opposite reaction. Because of this, all forces appear in pairs.",
      imageClass: "non-investigation-seven-image",
      imageAlt:
        "Three apples of different sizes are sitting on the ground underneath the apple tree.",
      isVideo: false,
      videoSrc: "",
      videoClass: "",
      interactive: false,
    },
  ],
  investigatingData: [
    {
      investigationId: 1,
      mainHeading:
        "A car is traveling 60 mph down a highway. The driver slams on the brakes to avoid colliding with a stalled vehicle. The driver's seat belt immediately tightens around the driver. Identify how each of Newton's laws applies to vehicle restraints.",
      imageClass: "investigation-one-image",
      imageAlt:
        "Cross-section of a driver in a car without a door sitting with their back against the seat, the seat belt is tight across their chest. Cross-section of a driver in a car without a door; driver is moving forward toward the steering wheel. Seat belt is stretched but still holds the driver.",
      questionData: [
        {
          id: 1,
          text: "If the driver was traveling at a slower speed down the highway, the car would have required less force to stop. Which law does this demonstrate?",
          answer: "second-law",
        },
        {
          id: 2,
          text: "If the vehicle restraint did not provide a force holding the driver in the seat, the driver would have continued moving forward toward the steering wheel or front window. Which law does this demonstrate?",
          answer: "first-law",
        },
        {
          id: 3,
          text: "In order to stop the driver's forward momentum, the seat belt must provide a large opposite force. Which law does this demonstrate?",
          answer: "third-law",
        },
      ],
    },
    {
      investigationId: 2,
      mainHeading:
        "When a rocket launches into space, Newton's three laws of motion can be seen. Identify how each of Newton's laws applies to rocket launches.",
      imageClass: "investigation-two-image",
      imageAlt:
        "White space shuttle attached to an external tank with 2 rockets on side is launched upward. Fire is coming out of the rockets & clouds of smoke below.",
      questionData: [
        {
          id: 1,
          text: "The rocket sits motionless on the launchpad until a force is applied, then it moves. Which law does this demonstrate?",
          answer: "first-law",
        },
        {
          id: 2,
          text: "The rocket's engine produces hot exhaust gases that flow out the back of the rocket. When this happens, a thrusting force is produced in the opposite direction allowing the rocket to move. Which law does this demonstrate?",
          answer: "third-law",
        },
        {
          id: 3,
          text: " A rocket with a large amount of mass would need more force for it to take off compared to a rocket with less mass. Which law does this demonstrate?",
          answer: "second-law",
        },
      ],
    },
    {
      investigationId: 3,
      mainHeading:
        "A boy and his stepfather are spending the day at an amusement park. When they get to the bumper cars, the boy gets in one car and his stepfather gets in another. Identify how each of Newton's laws applies to the bumper cars.",
      imageClass: "investigation-three-image",
      imageAlt:
        "Two people in bumper cars are moving toward each other. Person one is a child; person two is an adult.",
      videoStart: {
        text: "",
        imageClass: "",
        imageAlt:
          "Two people in bumper cars are moving toward each other. Person one is a child; person two is an adult.",
        isVideo: true,
        videoSrc: questionThreeVideo,
        videoClass: "investigation-question-video",
        interactive: false,
      },
      questionData: [
        {
          id: 1,
          text: "When the stepfather's car bumps into the boy's car, both cars move backward. Which law does this demonstrate?",
          answer: "third-law",
        },
        {
          id: 2,
          text: "One bumper car moves forward at a constant speed and direction. It continues this motion until another car bumps it from the side, causing it to change direction. Which law does this demonstrate?",
          answer: "first-law",
        },
        {
          id: 3,
          text: "The car with the adult driver has more mass than the car with the child driver. The car with more mass requires more force to move compared to the one with less mass. Which law does this demonstrate?",
          answer: "second-law",
        },
      ],
    },
  ],
  mcqOptions: [
    {
      id: "first-law",
      disabled: false,
      text: "Newton's first law",
      label: "Newton's first law",
    },
    {
      id: "second-law",
      disabled: false,
      text: "Newton's second law",
      label: "Newton's second law",
    },
    {
      id: "third-law",
      disabled: false,
      text: "Newton's third law",
      label: "Newton's third law",
    },
  ],
  clickOnApple: "Apple on tree",
  clickOnTree: "Apple tree",
  largeApple: "Large apple",
  mediumApple: "Medium apple",
  smallApple: "Small apple",
  tableOne: {
    text: "Apple 1",
    altFormula: "acceleration equals to force per meter",
    formula: "a = F/m",
    altCalculation: "acceleration equals to 5 newton per 1 kg",
    calculation: "a = 5 N / 1.0 kg",
    altValue: "acceleration equals to 5 meter per second square",
    value: "a = 5 m/s<sup>2</sup>",
  },
  tableTwo: {
    text: "Apple 2",
    altFormula: "acceleration equals to force per meter",
    formula: "a = F/m",
    altCalculation: "acceleration equals to 5 newton per 0.5 kg",
    calculation: "a = 5 N / 0.5 kg",
    altValue: "acceleration equals to 10 meter per second square",
    value: "a = 10 m/s<sup>2</sup>",
  },
  textOne: {
    altText: "Apple 1 of mass 1 kg",
    text: "Apple 1",
    value: "m = 1.0 kg",
  },
  textTwo: {
    altText: "Apple 2 of mass 0.5 kg",
    text: "Apple 2",
    value: "m = 0.5 kg",
  },
  forceLiveText: {
    large:
      "1 large apple highlighted on the ground. Apple has 1 arrow pointing down on it labeled Fg & 1 equal length arrow pointing up from below ground labeled FN.",
    medium:
      "1 medium apple highlighted on the ground. Apple has 1 arrow pointing down on it labeled Fg & 1 equal length arrow pointing up from below ground labeled FN.",
    small:
      "1 small apple highlighted on the ground. Apple has 1 arrow pointing down on it labeled Fg & 1 equal length arrow pointing up from below ground labeled FN.",
    largeMedium:
      "1 large apple and 1 medium apple highlighted on the ground. Each has 1 arrow pointing down on it labeled Fg & 1 equal length arrow pointing up from below ground labeled FN.",
    largeSmall:
      "1 large apple and 1 small apple highlighted on the ground. Each has 1 arrow pointing down on it labeled Fg & 1 equal length arrow pointing up from below ground labeled FN.",
    mediumSmall:
      "1 medium apple and 1 small apple highlighted on the ground. Each has 1 arrow pointing down on it labeled Fg & 1 equal length arrow pointing up from below ground labeled FN",
    largeMediumSmall:
      "3 apples on the ground. 1 large, 1 medium, 1 small. Arrow pointing down on each labeled Fg & equal length arrow pointing up from below ground labeled FN.",
  },
};

export default data;
