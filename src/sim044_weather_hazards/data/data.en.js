import globalData from "../../app/data/data.en";

const data = {
  activityInstructions:
    "Click on the hotspots to read weather tips for the correct area of the country.",
  hotspots: [
    {
      id: "tarantula",
      title: "Drought New Mexico-Arizona border",
      imageAlt: "A dry, cracked desert with bright sun and no plants",
      heading:
        "This area is experiencing a drought. They have not had rain in over 165 days.",
      listItems: [],
    },
    {
      id: "differentrocklayers",
      title: "Tornado Iowa-Missouri border",
      imageAlt:
        "A tornado coming down from a storm cloud on the side of an empty, flat road",
      heading:
        "Tornadoes are predicted here! These occur in thunderstorms with rotating wind speeds up to 300 mph.",
      listItems: [],
    },
    {
      id: "stingray",
      title: "Blizzard Pennsylvania",
      imageAlt:
        "A road completely covered by snow, the snowdrifts reach halfway up the trunks of the trees that line the road",
      heading:
        "A blizzard is coming! That means lots of snow, low temperatures, and maybe even high winds.",
      listItems: [],
    },
    {
      id: "coyotetracks",
      title: "Hurricane South Carolina",
      imageAlt:
        "An aerial view of the clouds of a hurricane, the white clouds swirl and spread out to cover the entire image",
      heading:
        "A hurricane will be in this area for a few days. Hurricanes are huge storms that form over the ocean before coming to land.",
      listItems: [],
    },
  ],
  transitionPopup: {
    ...globalData.transitionPopup,
    content:
      "<p>Now that you have read about the weather conditions, choose the action that is best suited for hazardous weather conditions.</p><p>This is important information Wanda the Weather Reporter needs her audience to know so they can be safe.</p>",
  },
  completionPopup: {
    ...globalData.completionPopup,
    content: "You have correctly completed the simulation.",
  },


  questionHeading: "Question: 1 of 7",
  questionHeading2:
    "Choose  the  hazardous weather incident that relates to the action statement. ",
  questionsData: [
    {
      id: 1,
      label: "Conserve water at your home.",
      answer: "Drought",
      answerId: "Drought",
    },
    {
      id: 2,
      label: "Sip cool drinks to stay hydrated.",
      answer: "Drought",
      answerId: "Drought",
    },
    {
      id: 3,
      label:
        "Have a plan to stay warm in case you lose power. You can use a fireplace for heat. Make sure you have plenty of blankets, gloves, and hats.",
      answer: "Blizzard",
      answerId: "Blizzard",
    },
    {
      id: 4,
      label: "Do not drive in the snow. Roads will be very slippery.",
      answer: "Blizzard",
      answerId: "Blizzard",
    },
    {
      id: 5,
      label: "Stay safe from winds by moving into a room with no windows.",
      answer: "Tornado",
      answerId: "Tornado",
    },
    {
      id: 6,
      label:
        "Listen to local news radio stations because changes in this weather happen very quickly. A Watch means this weather might happen. A Warning means that the weather is happening in the area, and you should get to shelter.",
      answer: "Tornado",
      answerId: "Tornado",
    },
    {
      id: 7,
      label:
        "Know the evacuation route from your city, and be ready to go if local governments ask. It is safest not to stay in this type of weather. Cover windows with shutters or boards to protect from flying objects.",
      answer: "Hurricane",
      answerId: "Hurricane",
    },
  ],
  answerOptions: [
    {
      id: "Drought",
      disabled: false,
      imgAlt: "",
      text: "Drought",
      label: "Drought",
    },
    {
      id: "Tornado",
      disabled: false,
      text: "Tornado",
      label: "Tornado",
    },
    {
      id: "Blizzard",
      disabled: false,
      text: "Blizzard",
      label: "Blizzard",
    },
    {
      id: "Hurricane",
      disabled: false,
      text: "Hurricane",
      label: "Hurricane",
    },
  ],

  resetLiveText: globalData.resetLiveText,
  resetMsgContent: globalData.resetPopupText,
  // questionHeading: globalData.questionCounterString,
  correctToastMessage: globalData.correctToastMessage,
  incorrectToastMessage: globalData.incorrectToastMessage,
  next: globalData.buttonLabels.next,
  continue: globalData.buttonLabels.continue,
  submitAnswer: globalData.buttonLabels.submitAnswer,
  close: globalData.buttonLabels.close,
  finish: globalData.buttonLabels.finish,

  // buttonLabels: { ...globalData.buttonLabels },
  // next: "Next",
  noButton: globalData.buttonLabels.no,
  yesButton: globalData.buttonLabels.yes,
  infoText: globalData.buttonLabels.info,
  resetText: globalData.buttonLabels.reset,
  closeButton: globalData.buttonLabels.close,
  startButton: globalData.buttonLabels.start,
  resetPopupText: globalData.resetPopupText,
  helpPopupText:
    "Click on the hotspots on the map to read the descriptions about weather conditions and help Wanda’s viewers get ready for the weather predicted in their area. ",
  initialInfoPopupText: [
    "Today, you will help Wanda the Weather Reporter and her news team tell viewers how to respond to the hazards in their areas.",
    "It may be hot or cold, sunny or rainy. Sometimes, we have wild weather that can cause hazards to people and property.",
  ],
  fossilsBGAltText:
    "A map of the United States of America with hot spots over four areas: New Mexico-Arizona border, Iowa-Missouri border, South Carolina and Pennsylvania",
};

export default data;
