import globalCommonData from "../../app/data";

const data = {
  
  equationsData: [
    {
      srNo: "1",
      id: "question1",
      questionText:
        "After studying 100 years of temperatures and rainfall amounts across the globe, scientists have created this map of <span aria-hidden=true>_________</span><span class=sr-only> blank </span> zones around the world.  ",
        equationOptions: [
          {
            id: "weather",
            disabled: false,
            text: "weather",
            label: "Weather",
          },
          {
            id: "climate",
            disabled: false,
            text: "climate",
            label: "Climate",
          },
        ],
      answer: "climate",
      altimgText:
        "A world map that uses colors to identify different climate zones around the world based on temperature and rainfall over the last 100 years.",
      legends: [
        { id: "polar_zone", label: "Polar zone" },
        { id: "subpolar_zone", label: "Subpolar zone" },
        { id: "temprate_zone", label: "Temperate zone" },
        { id: "subtropical_zone", label: "Subtropical zone" },
        { id: "tropical_zone", label: "Tropical zone" },
        { id: "subequatorial_zone", label: "Subequatorial zone" },
        { id: "equatorial_zone", label: "Equatorial zone" },
      ],
    },

    {
      srNo: "2",
      id: "question2",
      questionText:
        "Get out your sunscreen and a hat! Today's <span aria-hidden=true>_________</span><span class=sr-only> blank </span> calls for high temperatures and no clouds.",
        equationOptions: [
          {
            id: "weather",
            disabled: false,
            text: "weather",
            label: "Weather",
          },
          {
            id: "climate",
            disabled: false,
            text: "climate",
            label: "Climate",
          },
        ],
        heading: "TODAY'S FORECAST",

      answer: "weather",
      altimgText:
        "The forecast for the upcoming day showing clear and sunny weather with temperatures ranging from a low of 62° to a high of 80°.",
      alldata: [
        {
          id: "time_1",
          data: [
            { id: "item1", value: "9 AM" },
            { id: "item2", value: "Clear" },
            { id: "item3", value: "62&deg;" },
          ],
        },
        {
          id: "time_2",
          data: [
            { id: "item1", value: "11 AM" },
            { id: "item2", value: "Clear" },
            { id: "item3", value: "72&deg;" },
          ],
        },
        {
          id: "time_3",
          data: [
            { id: "item1", value: "1 PM" },
            { id: "item2", value: "Clear" },
            { id: "item3", value: "77&deg;" },
          ],
        },
        {
          id: "time_4",
          data: [
            { id: "item1", value: "3 PM" },
            { id: "item2", value: "Clear" },
            { id: "item3", value: "80&deg;" },
          ],
        },
        {
          id: "time_5",
          data: [
            { id: "item1", value: "5 PM" },
            { id: "item2", value: "Clear" },
            { id: "item3", value: "78&deg;" },
          ],
        },
        {
          id: "time_6",
          data: [
            { id: "item1", value: "7 PM" },
            { id: "item2", value: "Clear" },
            { id: "item3", value: "73&deg;" },
          ],
        },
        {
          id: "time_7",
          data: [
            { id: "item1", value: "9 PM" },
            { id: "item2", value: "Clear" },
            { id: "item3", value: "66&deg;" },
          ],
        },
      ],
    },
    {
      srNo: "3",
      id: "question3",
      questionText:
        "Tomorrow looks to be a busy <span aria-hidden=true>_________</span><span class=sr-only> blank </span> day for much of the country. The central US should prepare for severe storms.",
        equationOptions: [
          {
            id: "weather",
            disabled: false,
            text: "weather",
            label: "Weather",
          },
          {
            id: "climate",
            disabled: false,
            text: "climate",
            label: "Climate",
          },
        ],
        answer: "weather",
      heading: "SEVERE WEATHER THREAT",
      altimgText:
        "A map of the US identifying a severe weather threat with the severe weather area in the middle of the country and marked in red.",

      legends: [
        { id: "possible", label: "Possible" },
        { id: "likely", label: "Likely" },
        { id: "very_likely", label: "Very likely" },
      ],
      alldata: [{}],
    },
    {
      srNo: "4",
      id: "question4",
      questionText:
        "This chart created by Atlantic Meteorologist shows us when in the year severe storms are most likely to occur. This is important information to keep in mind as you pick when you plan to row across the Atlantic Ocean!",
        equationOptions: [
          {
            id: "weather",
            disabled: false,
            text: " Weather",
            label: "Weather",
          },
          {
            id: "climate",
            disabled: false,
            text: "Climate",
            label: "Climate",
          },
        ],
        answer: "climate",
      altimgText:
        "A graph using colors to show the frequency of tropical weather in the Atlantic ocean each month over the last 100 years.",

      legends: [
        { id: "tropical_depression", label: "Tropical Depression" },
        { id: "tropical_storm", label: "Tropical Storm" },
        { id: "hurricane", label: "Hurricane" },
        { id: "major_hurricane", label: "Major Hurricane" },
      ],
      heading: "100 Year Frequency of Tropical Weather in the Atlantic Ocean",
      subheading: "Tropical Cyclones per 100 Years",
      alldata: [
        {
          id: "scale",
          data: [
            { id: "item22", value: "00" },
            { id: "item21", value: "05" },
            { id: "item20", value: "10" },
            { id: "item19", value: "15" },
            { id: "item18", value: "20" },
            { id: "item17", value: "25" },
            { id: "item16", value: "30" },
            { id: "item15", value: "35" },
            { id: "item14", value: "40" },
            { id: "item13", value: "45" },
            { id: "item12", value: "50" },
            { id: "item11", value: "55" },
            { id: "item10", value: "60" },
            { id: "item9", value: "65" },
            { id: "item8", value: "70" },
            { id: "item7", value: "75" },
            { id: "item6", value: "80" },
            { id: "item5", value: "85" },
            { id: "item4", value: "90" },
            { id: "item3", value: "95" },
            { id: "item2", value: "100" },
            { id: "item1", value: "105" },
          ],
        },
        {
          id: "day_scale",
          data: [
            { id: "item24", value: "May 1" },
            { id: "item23", value: "May 10" },
            { id: "item22", value: "May 20" },
            { id: "item21", value: "Jun 1" },
            { id: "item20", value: "Jun 10" },
            { id: "item19", value: "Jun 20" },
            { id: "item18", value: "Jul 1" },
            { id: "item17", value: "Jul 10" },
            { id: "item16", value: "Jul 20" },
            { id: "item15", value: "Aug 1" },
            { id: "item14", value: "Aug 10" },
            { id: "item13", value: "Aug 20" },
            { id: "item12", value: "Sep 1" },
            { id: "item11", value: "Sep 10" },
            { id: "item10", value: "Sep 20" },
            { id: "item9", value: "Oct 1" },
            { id: "item8", value: "Oct 10" },
            { id: "item7", value: "Oct 20" },
            { id: "item6", value: "Nov 1" },
            { id: "item5", value: "Nov 10" },
            { id: "item4", value: "Nov 20" },
            { id: "item3", value: "Dec 1" },
            { id: "item2", value: "Dec 10" },
            { id: "item1", value: "Dec 20" },
          ],
        },
      ],
    },
    {
      srNo: "5",
      id: "question5",
      questionText:
        "Breaking News</br>A tornado warning has been issued for this area. Please take shelter and be safe!",
        equationOptions: [
          {
            id: "weather",
            disabled: false,
            text: "Weather",
            label: "Weather",
          },
          {
            id: "climate",
            disabled: false,
            text: "Climate",
            label: "Climate",
          },
        ],
        answer: "weather",
      heading: "TORNADO WARNING",
      subheading: "UNTIL 11 PM",
      altimgText:
        "A tornado warning map that uses red to show where in the Dallas-Fort Worth area a tornado might occur until 11 p.m.",
      alldata: [
        {
          id: "country_4",
          data: [{ id: "graham", label: "Graham" }],
        },
        {
          id: "country_2",
          data: [{ id: "dallas", label: "Dallas" }],
        },
        {
          id: "country_1",
          data: [{ id: "fort_worth", label: "Fort Worth" }],
        },

        {
          id: "country_5",
          data: [{ id: "mineola", label: "Mineola" }],
        },
        {
          id: "country_3",
          data: [{ id: "stephenville", label: "Stephenville" }],
        },
      ],
    },
  ],

  

  buttonLabels: { ...globalCommonData.buttonLabels },
  completionScreen: {
    ...globalCommonData.completionPopup,
    content: "You have correctly answered all the questions!",
  },
 
  resetLiveText: globalCommonData.resetLiveText,
  resetMsgContent: globalCommonData.resetPopupText,
  correctToastMessage: globalCommonData.correctToastMessage,
  incorrectToastMessage: globalCommonData.incorrectToastMessage,
  questionHeading: "Question: -1- of -2-.",
  infoBoxContent: "Choose if the news is showing weather data or climate data.",
  altintroimgtext:
    "Newsroom with STEMscopes News logo on a blue background with a light blue world map ",

  instructionBoxContent:
    "As one of the newest anchors at STEMscopes News, you must make sure to present the news accurately. You will be given weather or climate data on the screen. It is your job to identify if that data refers to the weather or the climate, and then report the data correctly to your viewers.",
  activityHeading:
    "In this simulation, the learner will differentiate between weather and climate.",
};

export default data;
