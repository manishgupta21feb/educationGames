import globalConfig from "../../app/data";
import Animation from "../assets/videos/Animation.mp4";
const buttonLabels = { ...globalConfig.buttonLabels };

const data = {
  buttonNo: buttonLabels.no,
  buttonYes: buttonLabels.yes,
  buttonLabelsData: { ...globalConfig.buttonLabels },
  infoText: buttonLabels.info,
  resetText: buttonLabels.reset,
  buttonContinue: buttonLabels.continue,
  buttonNext: buttonLabels.next,
  buttonStart: buttonLabels.start,
  buttonClose: buttonLabels.close,
  buttonFinish: buttonLabels.finish,
  resetConfirmationText: globalConfig.resetLiveText,
  altintroimgtextOne: "Beach scene near sunset. Water extends all the way to shore. No sand is visible.",
  altintroimgtextTwo: "Same beach scene during the day. Water extends half way up sand. Half of sand is visible.",
  instructionBoxContent:
    "Imagine that one evening you are fishing, and you find a great rock to stand on and cast your line from. The next day, you take your friend to the exact same spot to fish together, but when you get there, the water is so far away. Today, you will explore what makes ocean tides possible.",
  InfoBoxContent:
    "Click on the buttons to learn about the differences in Earth’s tides. Then, read each scenario and predict which type of tide may occur.",
  resetMsgContent: globalConfig.resetPopupText,
  commonText:
    "Predict the type of tide Earth would experience during each scenario.",
 
  observationsData: [
    {
      id: "animation",
      classes: "animation",
      videoSrc: Animation,
      isPlayed: false,
      buttonLabels: "Planet moving",
      alt: "As the Moon orbits around the Earth, Earth’s tidal bulge changes to continually pull towards the direction of the Moon.",
      ariaLiveText: "As the Moon orbits around the Earth, Earth’s tidal bulge changes to continually pull towards the direction of the Moon.",
      text: "Planet moving",
      experimentName: "Animation",
      isDisable: false,
    },
  ],
  time1: "6:00 p.m.",
  time2: "11:00 a.m.",
  equationsData: [
    {
      srNo: 1,
      id: "question1",
      answer: "springtide",
      moonStageText: "New moon",
      altimgText: "Moon in the new moon position located in a straightline between the Sun and Earth; tidal bulge pulls toward the Moon",
      questionText:
        "If the Moon is in the new moon phase in its orbit around Earth, then I predict that the ocean will have a <span aria-hidden=true>_________.</span><span class=sr-only> blank </span>  ",
    },
    {
      srNo: 2,
      id: "question2",
      answer: "neaptide",
      moonStageText: "First quarter moon",
      altimgText: "Moon in the first quarter moon position located perpendicular to and below Earth; tidal bulge pulls toward the Moon",
      questionText:
        "If the Moon is in the first quarter moon phase in its orbit around Earth, then I predict that the ocean will have a<span aria-hidden=true>_________.</span><span class=sr-only> blank </span> ",
    },
    {
      srNo: 3,
      id: "question3",
      answer: "neaptide",
      moonStageText: "Third quarter moon",
      altimgText: "Moon in the third quarter moon position located perpendicular to and above Earth; tidal bulge pulls toward the Moon",
      questionText:
        "If the Moon is in the third quarter moon phase in its orbit around Earth, then I predict that the ocean will have a<span aria-hidden=true>_________.</span><span class=sr-only> blank </span> ",
    },
    {
      srNo: 4,
      id: "question4",
      moonStageText: "Full moon",
      answer: "springtide",
      altimgText: "Moon in the full moon position created by a straight line of the Sun, Earth, and the Moon; tidal bulge pulls toward the Moon",
      questionText:
        "If the Moon is in the full moon phase in its orbit around Earth, then I predict that the ocean will have a <span aria-hidden=true>_________.</span><span class=sr-only> blank </span> ",
    },
  ],
  equationOptions: [
    {
      id: "springtide",
      disabled: false,
      text: "spring tide",
      label: "spring tide",
    },
    {
      id: "neaptide",
      disabled: false,
      text: "neap tide",
      label: "neap tide",
    },
  ],

  submitAnswer: buttonLabels.submitAnswer,
  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  wrongMsg: globalConfig.incorrectToastMessage,

  hotspotData: [
    {
      id: 0,
      className: "outdoor-screen",
      altText: "Diagram of Earth-Sun-Moon system. Moon shown in 4 locations around Earth. Location A is between Sun & Earth. Moon moves counterclockwise around Earth.",
      hotspots: [
        
        {
          id: "B",
          altText: "Moon B",
          serNo: 2,
          text: "B",
        },
        {
          id: "C",
          altText: "Moon C",
          serNo: 3,
          text: "C",
        },
        {
          id: "A",

          altText: "Moon A",
          serNo: 1,
          text: "A",
        },
        {
          id: "D",
          altText: "Moon D",
          serNo: 4,
          text: "D",
        },
      ],
      introductionHeading:
        "The Moon’s <b>gravitational force</b> causes the oceans to bulge, or pull, toward it every day. As Earth rotates, different locations around the globe experience more or less of this force.<br><br>The locations where the oceans are bulging experience <b>high tides</b>. This is when the sea level is the highest, and the ocean water moves farthest onto land. The locations where the oceans are not bulging experience <b>low tides</b>. This is when the sea level is the lowest, and the ocean water is very low near land.<br><br>In addition to daily high and low tides, Earth experiences spring and neap tides. Today, you will explore how the <b>gravitational force</b> from different positions of the Sun and the Moon affect spring and neap tides on Earth. Click on the buttons to learn more.",
      clickContent: "Click on each element to find out more.",
      ariaLabel: "Outdoor area",
    },
  ],
  lowTideText: "Low tide",
  highTideText: "High tide",
  moonText: "Moon",
  sunText: "Sun",
  earthText: "Earth",
  secondScreenText: [
    {
      id: 1,
      imageClass: "hotspot-a",
      moonStage: "New moon",
      tideText: "Spring tide",
      imgAlt: "Moon in a straight line between Earth & Sun. Tidal bulge pulls towards Moon. Spring tide occurs on Earth with highest high tides & lowest low tides.",
      introductionHeading:
        "When the Moon is positioned in a straight line between Earth and the Sun, it is in the <b>new moon</b> phase. In this position, the Sun and the Moon both exert <b>gravitational force</b> on Earth in the same direction. This magnifies the effect of the force and causes the oceans to bulge significantly on these days. Twice in a lunar cycle, Earth experiences these maximum high and low tides called <b>spring tides.</b>",
    },
    {
      id: 2,
      imageClass: "hotspot-b",
      moonStage: "First quarter",
      tideText: "Neap tide",
      imgAlt: "Moon located perpendicular to and above Earth. Tidal bulge pulling towards the Moon. Neap tide occurs on Earth with moderate high and low tides.",

      introductionHeading:
        " After about seven days, the Moon moves to the <b>first quarter</b> phase. At this position, the Moon, Earth, and the Sun form a 90° angle. Since the Moon is closer in distance to Earth than the Sun, it has a stronger gravitational pull on Earth. Therefore, Earth's ocean bulges toward the location of the Moon but not toward the location of the Sun. The Moon and Sun's gravitational forces are not exerted in the same direction, and therefore the forces cancel out some of the impact. Twice in a lunar cycle, Earth experiences these minimum high and low tides called <b>neap tides</b>.",
    },
    {
      id: 3,

      imageClass: "hotspot-c",
      moonStage: "Full moon",
      tideText: "Spring tide",
      imgAlt: "Earth in a straight line between Moon & Sun. Tidal bulge pulls towards Moon. Spring tide occurs on Earth with highest high tides & lowest low tides.",
      introductionHeading:
        "After about seven days, the Moon moves to the <b>full moon</b> phase. Once again, the Moon, Earth, and the Sun are positioned in a straight line. Whenever the three celestial bodies form a straight line, Earth experiences a <b>spring tide</b>.",
    },
    {
      id: 4,
      imageClass: "hotspot-d",
      moonStage: "Third quarter",
      tideText: "Neap tide",
      imgAlt: "Moon located perpendicular to and below Earth. Tidal bulge pulling towards the Moon. Neap tide occurs on Earth with moderate high and low tides.",
      introductionHeading:
        " After about seven days, the Moon moves to the <b>third quarter</b> phase. Once again, the Moon, Earth, and the Sun form a 90° angle. Whenever the three celestial bodies form a 90° angle, Earth experiences a <b>neap tide</b>.",
    },
  ],

  questionHeading: "Question: -1- of 4",
  completionPopup: {
    ...globalConfig.completionPopup,
    content:
      "You have successfully predicted how the positions of the Sun, Earth, and the Moon impact tides!",
  },
  transitionPopup: {
    ...globalConfig.transitionPopup,
    content:
      "You have successfully explored how the positions of the Sun, Earth, and the Moon impact tides. Now it’s time to show what you know.",
  },
  messages: [
    {
      type: "reset",
      resetButtonText: buttonLabels.yes,
      buttonContinueText: buttonLabels.no,
      content: globalConfig.resetPopupText,
    },
  ],
  activityHeading:
    "Students will observe and predict the spring and neap tides based on the gravitational forces from the position of the Sun and Moon.",
};

export default data;
