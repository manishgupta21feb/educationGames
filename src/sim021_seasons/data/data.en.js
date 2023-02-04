import globalData from "../../app/data/data.en";
const info = {
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: "Start",
  buttonContinueLabel: "Start",
  content:
    "Every year, Earth completes one revolution around the Sun. Today, you will explore how Earth's movement along its orbit impacts the seasons in both the northern and southern hemispheres. Advance Earth through the different positions and note the average temperatures of Washington, DC, and Sydney, Australia, at four points during the year.",
};

const earthPositionLabels = [
  {
    id: "iplabel4",
    labels: [
      { id: "i4l1", text: "September 23" },
      { id: "i4l2", text: "Autumnal Equinox" },
    ],
  },
  {
    id: "iplabel1",
    labels: [
      { id: "i1l1", text: "December 22" },
      { id: "i1l2", text: "Winter Solstice" },
    ],
  },
  {
    id: "iplabel3",
    labels: [
      { id: "i3l1", text: "June 22" },
      { id: "i3l2", text: "Summer Solstice" },
    ],
  },
  {
    id: "iplabel2",
    labels: [
      { id: "i2l1", text: "March 21" },
      { id: "i2l2", text: "Vernal Equinox" },
    ],
  },
];

const imagesAltText = {
  intro:
    "Four models of Earth showing different orbital positions around the Sun during the four seasons. All models are tilted at 23.5 degrees.",
  tiltedDec22:
    "Tilted Earth at its orbital position on December 22. Southern hemisphere is receiving more direct rays from the Sun than the northern hemisphere.",
  tiltedMar21:
    "Tilted Earth at its orbital position on March 21. The southern and northern hemispheres are receiving similar direct rays from the Sun.",
  tiltedJun22:
    "Tilted Earth at its orbital position on June 22. The northern hemisphere is receiving more direct rays from the Sun than the southern hemisphere.",
  tiltedSep23:
    "Tilted Earth at its orbital position on September 23. The southern and northern hemispheres are receiving similar direct rays from the Sun.",
  nontiltedDec22:
    "Earth without axial tilt at its orbital position on December 22. Southern and northern hemispheres are receiving similar direct rays from the Sun.",
  nontiltedMar21:
    "Earth without axial tilt at its orbital position on March 21. Southern and northern hemispheres are receiving similar direct rays from the Sun.",
  nontiltedJun22:
    "Earth without axial tilt at its orbital position on June 22. Southern and northern hemispheres are receiving similar direct rays from the Sun.",
  nontiltedSep23:
    "Earth without axial tilt at its orbital position on September 23. Southern and northern hemispheres are receiving similar direct rays from the Sun.",
  lastmcq:
    "Four models of Earth showing different orbital positions around the Sun during the four seasons. All models are tilted.",
};

export default {
  dialogData: {
    start: {
      ...info,
      buttonContinueText: globalData.buttonLabels.start,
      buttonContinueLabel: globalData.buttonLabels.start,
    },
    info: {
      ...info,
      buttonClasses: "",
      buttonContinueText: globalData.buttonLabels.close,
      buttonContinueLabel: globalData.buttonLabels.close,
      content:
        "Washington, DC, is located in the northern hemisphere. Sydney, Australia, is located in the southern hemisphere.",
    },
    correct: {
      ...info,
      buttonContinueText: globalData.buttonLabels.continue,
      buttonContinueLabel: globalData.buttonLabels.continue,
    },
    incorrect: {
      ...info,
      dialogType: "warning",
      buttonContinueText: globalData.buttonLabels.close,
      buttonContinueLabel: globalData.buttonLabels.close,
    },
  },

  mcqQuestionText:
    "What seasons is the northern hemisphere experiencing while Earth is at this position in its orbit?(Hint: Washington, DC, is located in the northern hemisphere.)",
  mcqOptions: [
    { text: "Winter", id: "winter" },
    { text: "Summer", id: "summer" },
    { text: "Spring", id: "spring" },
    { text: "Fall/Autumn", id: "fall_autumn" },
  ],
  mcqOptions2: [
    { text: "The month of the year", id: "month" },
    { text: "The average temperature", id: "temperature" },
    {
      text: "The direction of Earth's revolution around the Sun",
      id: "direction",
    },
    { text: "The tilt of Earth's axis", id: "tilt" },
  ],

  mcqData: [
    {
      id: 1,
      type: "part1",
      timeLabel: "December 22",
      alt: imagesAltText.tiltedDec22,
      textContent:
        "What season is the northern hemisphere experiencing while Earth is at this position in its orbit?",
      answer: "winter",
      graphData: {
        data1: {
          templeft: "48",
          tempright: "30",
          city: "Washington, DC",
        },
        data2: {
          templeft: "78",
          tempright: "64",
          city: "Sydney, Australia",
        },
      },
    },
    {
      id: 2,
      type: "part2",
      timeLabel: "December 22",
      alt: imagesAltText.tiltedDec22,
      textContent:
        "What season is the southern hemisphere experiencing while Earth is at this position in its orbit? ",
      answer: "summer",
      graphData: {
        data1: {
          templeft: "48",
          tempright: "30",
          city: "Washington, DC",
        },
        data2: {
          templeft: "78",
          tempright: "64",
          city: "Sydney, Australia",
        },
      },
    },

    {
      id: 3,
      type: "part3",
      timeLabel: "March 21",
      alt: imagesAltText.tiltedMar21,
      textContent:
        "What season is the northern hemisphere experiencing while Earth is at this position in its orbit?",
      answer: "spring",
      graphData: {
        data1: {
          templeft: "56",
          tempright: "35",
          city: "Washington, DC",
        },
        data2: {
          templeft: "71",
          tempright: "59",
          city: "Sydney, Australia",
        },
      },
    },
    {
      id: 4,
      type: "part4",
      timeLabel: "March 21",
      alt: imagesAltText.tiltedMar21,
      textContent:
        "What season is the southern hemisphere experiencing while Earth is at this position in its orbit? ",
      answer: "fall_autumn",
      graphData: {
        data1: {
          templeft: "56",
          tempright: "35",
          city: "Washington, DC",
        },
        data2: {
          templeft: "71",
          tempright: "59",
          city: "Sydney, Australia",
        },
      },
    },

    {
      id: 5,
      type: "part5",
      timeLabel: "June 22",
      alt: imagesAltText.tiltedJun22,
      textContent:
        "What season is the northern hemisphere experiencing while Earth is at this position in its orbit?",
      answer: "summer",
      graphData: {
        data1: {
          templeft: "85",
          tempright: "63",
          city: "Washington, DC",
        },
        data2: {
          templeft: "63",
          tempright: "49",
          city: "Sydney, Australia",
        },
      },
    },
    {
      id: 6,
      type: "part6",
      timeLabel: "June 22",
      alt: imagesAltText.tiltedJun22,
      textContent:
        "What season is the southern hemisphere experiencing while Earth is at this position in its orbit? ",
      answer: "winter",
      graphData: {
        data1: {
          templeft: "85",
          tempright: "63",
          city: "Washington, DC",
        },
        data2: {
          templeft: "63",
          tempright: "49",
          city: "Sydney, Australia",
        },
      },
    },

    {
      id: 7,
      type: "part7",
      timeLabel: "September 23",
      alt: imagesAltText.tiltedSep23,
      textContent:
        "What season is the northern hemisphere experiencing while Earth is at this position in its orbit?",
      answer: "fall_autumn",
      graphData: {
        data1: {
          templeft: "81",
          tempright: "59",
          city: "Washington, DC",
        },
        data2: {
          templeft: "69",
          tempright: "53",
          city: "Sydney, Australia",
        },
      },
    },
    {
      id: 8,
      type: "part8",
      timeLabel: "September 23",
      alt: imagesAltText.tiltedSep23,
      textContent:
        "What season is the southern hemisphere experiencing while Earth is at this position in its orbit? ",
      answer: "spring",
      graphData: {
        data1: {
          templeft: "81",
          tempright: "59",
          city: "Washington, DC",
        },
        data2: {
          templeft: "69",
          tempright: "53",
          city: "Sydney, Australia",
        },
      },
    },
    {
      id: 9,
      type: "part9",
      timeLabel: "December 22",
      alt: imagesAltText.nontiltedDec22,
      graphData: {
        data1: {
          templeft: "69",
          tempright: "46",
          city: "Washington, DC",
        },
        data2: {
          templeft: "73",
          tempright: "59",
          city: "Sydney, Australia",
        },
      },
    },
    {
      id: 10,
      type: "part10",
      timeLabel: "March 21",
      alt: imagesAltText.nontiltedMar21,
      graphData: {
        data1: {
          templeft: "69",
          tempright: "46",
          city: "Washington, DC",
        },
        data2: {
          templeft: "73",
          tempright: "59",
          city: "Sydney, Australia",
        },
      },
    },
    {
      id: 11,
      type: "part11",
      timeLabel: "June 22",
      alt: imagesAltText.nontiltedJun22,
      graphData: {
        data1: {
          templeft: "69",
          tempright: "46",
          city: "Washington, DC",
        },
        data2: {
          templeft: "73",
          tempright: "59",
          city: "Sydney, Australia",
        },
      },
    },
    {
      id: 12,
      type: "part12",
      timeLabel: "September 23",
      alt: imagesAltText.nontiltedSep23,
      graphData: {
        data1: {
          templeft: "69",
          tempright: "46",
          city: "Washington, DC",
        },
        data2: {
          templeft: "73",
          tempright: "59",
          city: "Sydney, Australia",
        },
      },
    },
    {
      id: 13,
      type: "part9",
      timeLabel: "December 22",
      alt: imagesAltText.nontiltedDec22,
      graphData: {
        data1: {
          templeft: "69",
          tempright: "46",
          city: "Washington, DC",
        },
        data2: {
          templeft: "73",
          tempright: "59",
          city: "Sydney, Australia",
        },
      },
    },
    {
      id: 14,
      alt: imagesAltText.lastmcq,
      type: "lastmcq",
      textContent:
        "Which factor most impacts how seasons are experienced on Earth? ",
      answer: "tilt",
      timeLabels: [...earthPositionLabels],
    },
  ],

  graphCommonData: {
    yaxis: [0, 20, 40, 60, 80, 100],
    axis: { xaxis: "x-axis", yaxis: "y-axis" },
    temperature: "Average Temperature (&degF)",
    average: {
      hightemperature: "Average high temperature",
      lowtemperature: "Average low temperature",
    },
    temperatureUnit: "fahrenheit",
    graphSRLabel:
      "Graph showing average temperature in degree Fahrenheit, the horizontal axis is labeled as Zones and the vertical axis is labeled as Temperature.",
    highTempAltText: "-1- average high temperature -2- degrees fahrenheit",
    lowTempAltText: "-1- average low temperature -2- degrees fahrenheit",
  },

  questionHeading: "Question -1- of 2.",
  buttonLabels: { ...globalData.buttonLabels },

  completionPopup: {
    ...globalData.completionPopup,
    content: "You have completed the simulation.",
  },

  transitionPopup1: {
    ...globalData.transitionPopup,
    content:
      "You just modeled how the movement of Earth along its orbit impacts the seasons in both the northern and southern hemispheres over an entire year. Next, you will explore how eliminating Earth’s tilt on its axis would impact seasons.",
  },
  transitionPopup2: {
    ...globalData.transitionPopup,
    content:
      "Now that you have completed another orbit around the Sun, successfully answer the following question to conclude the simulation.",
  },

  InfoBoxContent:
    "Identify the type of reaction based on your knowledge of reaction types and chemicals present.",
  instructionBoxContent:
    "Every year, Earth completes one revolution around the Sun. Today, you will explore how Earth’s movement along its orbit impacts the seasons in both the northern and southern hemispheres. Click the arrow to advance Earth through the different positions and note the average temperatures of Washington, DC, and Sydney, Australia, at four points during the year.",
  infoContent:
    "Go through 10 different nuclear equations and select the right radioactive particle to balance them.",
  audioAriaLable:
    "If you are using screen reader, turn off the audio button for better experience.",
  commonTextForMCQScreen1:
    "Observe the location of Earth along its orbit and examine the data in the graph. Successfully answer the questions before advancing to the next orbital location.",
  commonTextForMCQScreen2:
    'Observe the location of Earth along its orbit and examine the data in the graph. Click the "Next" arrow to move Earth to its next orbital location.',
  introImageAlt: imagesAltText.intro,
  introPopupLabels: [
    {
      id: "iplabel0",
      labels: [
        {
          id: "i0l1",
          text: "23.5<span style='font-weight:400 !important;'>&deg</span>",
        },
      ],
    },
    ...earthPositionLabels,
  ],
  resetLiveText: globalData.resetLiveText,
  resetPopupText: globalData.resetPopupText,
  correctToastMessage: globalData.correctToastMessage,
  incorrectToastMessage: globalData.incorrectToastMessage,
};
