import commonData from "../../app/data/data.en";
import globalCommonData from "../../app/data/data.en";
const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  buttonLabels: { ...commonData.buttonLabels },
  startUpInfo: {
    buttonContinueText: "Start",
    buttonContinueLabel: "Start",
    instructionBoxContent: [
      "Weather is different all across the United States, even on the same day.",
      "You will compare the weather on the same day in various cities, as well as the weather on two separate days in one city, to see how different weather can be.",
    ],
  },
  resetLiveText: globalCommonData.resetLiveText,
  completionScreen: {
    ...globalCommonData.completionPopup,
    content: "You have successfully completed the simulation.",
  },
  initialTextOnScreen: "Click on a city to read the weather instruments.",
  mcqQuestion:
    "Read the weather instruments to compare weather on different days and locations around the US.",
  radioButtons: [
    {
      id: "rb1",
      value: "June 30",
      disabled: false,
      text: "June 30",
      label: "June 30",
    },
    {
      id: "rb2",

      value: "November 18",
      disabled: false,
      text: "November 18",
      label: "November 18",
    },
  ],
  buttonLabels: [
    {
      id: "medway-me",
      value: "Medway, ME",
      disabled: false,
      text: "Medway, ME",
      label: "Medway, ME",
    },
    {
      id: "seattle-wa",
      value: "Seattle, WA",
      disabled: false,
      text: "Seattle, WA",
      label: "Seattle, WA",
    },
    {
      id: "terre-aute-in",
      value: "Terre Haute, IN",
      disabled: false,
      text: "Terre Haute, IN",
      label: "Terre Haute, IN",
    },
    {
      id: "parker-az",
      value: "Parker, AZ",
      disabled: false,
      text: "Parker, AZ",
      label: "Parker, AZ",
    },
    {
      id: "wilmington-nc",
      value: "Wilmington, NC",
      disabled: false,
      text: "Wilmington, NC",
      label: "Wilmington, NC",
    },
    {
      id: "brownsville-tx",
      value: "Brownsville, TX",
      disabled: false,
      text: "Brownsville, TX",
      label: "Brownsville, TX",
    },
  ],
  reading: [
    {
      s: {
        temperature: ["70", "65", "60"],
        direction: "S",
        windDirection: "5 mph",
        precipitation: [" 1", "0"],
        imageAltText:
          "In Seattle, WA on June 30, thermometer reads 66°F, rain/snow gage reads 0.3 in. of precipitation, wind vane shows winds from the south at 5 mph",
      },

      p: {
        temperature: ["105", "100"],
        direction: "E",
        windDirection: "10 mph",
        precipitation: [" 1", "0"],
        imageAltText:
          "In Parker, AZ on June 30, thermometer reads 106°F, rain/snow gage reads 0.0 in. of precipitation, wind vane shows winds from the east at 10 mph",
      },

      b: {
        temperature: ["95", "90"],
        direction: "E",
        windDirection: "17 mph",
        precipitation: [" 1", "0"],
        imageAltText:
          "In Brownsville, TX on June 30, thermometer reads 94°F, rain/snow gage reads 0.2 in. of precipitation, wind vane shows winds from the east at 17 mph",
      },

      t: {
        temperature: ["90", "85", "80"],
        direction: "SE",
        windDirection: "2 mph",
        precipitation: [" 1", "0"],
        imageAltText:
          "In Terre Haute, IN on June 30, thermometer reads 86°F, rain/snow gage reads 0.2 in. of precipitation, wind vane shows winds from the east at 2 mph",
      },

      m: {
        temperature: ["75", "70", "65"],
        direction: "E",
        windDirection: "2 mph",
        precipitation: [" 1", "0"],
        imageAltText:
          "In Medway, ME on June 30, thermometer reads 71°F, rain/snow gage reads 0.8 in. of precipitation, wind vane shows winds from the east at 2 mph",
      },

      w: {
        temperature: ["95", "90", "85"],
        direction: "E",
        windDirection: "20 mph",
        precipitation: [" 1", "0"],
        imageAltText:
          "In Wilmington, NC on June 30, thermometer reads 90°F, rain/snow gage reads 0.6 in. of precipitation, wind vane shows winds from the east at 20 mph",
      },
    },
    {
      s: {
        temperature: ["55", "50", "45"],
        windDirection: "2 mph",
        direction: "W",
        precipitation: ["2", "1"],
        imageAltText:
          "In Seattle, WA on November 18, thermometer reads 51°F, rain/snow gage reads 1.7 in. of precipitation, wind vane shows winds from the west at 2 mph",
      },
      p: {
        temperature: ["80", "75"],
        windDirection: "3 mph",
        direction: "W",
        precipitation: [" 1", "0"],
        imageAltText:
          "In Parker, AZ on November 18, thermometer reads 79°F, rain/snow gage reads 0.0 in. of precipitation, wind vane shows winds from the west at 3 mph",
      },

      b: {
        temperature: ["80", "75", "70"],
        windDirection: "6 mph",
        direction: "E",
        precipitation: [" 1", "0"],
        imageAltText:
          "In Brownsville, TX on November 18, thermometer reads 76°F, rain/snow gage reads 0.1 in. of precipitation, wind vane shows winds from the east at 6 mph",
      },

      t: {
        temperature: ["55", "50 ", "45"],
        windDirection: "4 mph",
        direction: "SW",
        precipitation: [" 1", "0"],
        imageAltText:
          "In Terre Haute, IN on November 18, thermometer reads 50°F, rain/snow gage reads 0.4 in. of precipitation, wind vane shows winds from southwest at 4 mph",
      },

      m: {
        temperature: ["40", "35", "30"],
        windDirection: "7 mph",
        direction: "E",
        precipitation: ["3"],
        imageAltText:
          "In Medway, ME on November 18, thermometer reads 37°F, rain/snow gage reads 3.0 in. of precipitation, wind vane shows winds from the east at 7 mph",
      },

      w: {
        temperature: ["65", "60"],
        windDirection: "14 mph",
        direction: "SW",
        precipitation: [" 0", "1"],
        imageAltText:
          "In Wilmington, NC on November 18, thermometer reads 62°F, rain/snow gage reads 0.4 in. of precipitation, wind vane shows winds from southwest at 14 mph",
      },
    },
  ],

  bgs: [
    {
      id: "bg1",
      answer: 0,
      type: "s",
    },
    {
      id: "bg2",
      answer: 1,
      type: "s",
    },
    {
      id: "bg3",
      answer: 0,
      type: "p",
    },
    {
      id: "bg4",
      answer: 1,
      type: "p",
    },
    {
      id: "bg5",
      answer: 0,
      type: "b",
    },
    {
      id: "bg6",
      answer: 1,
      type: "b",
    },
    {
      id: "bg7",
      answer: 0,
      type: "t",
    },
    {
      id: "bg8",
      answer: 1,
      type: "t",
    },
    {
      id: "bg9",
      answer: 0,
      type: "m",
    },
    {
      id: "bg10",
      answer: 1,
      type: "m",
    },
    {
      id: "bg11",
      answer: 0,
      type: "w",
    },
    {
      id: "bg12",
      answer: 1,
      type: "w",
    },
  ],

  imageAltText:
    "USA map with buttons to highlight Seattle, WA; Parker, AZ;  Brownsville, TX; Terre Haute, IN;  Medway, ME; and Wilmington, NC",
  imageText:
    "A map of the United States of America with a button highlighting -1-",
  altImageText:
    "It shows different weather conditions in different cities of United States",
  weatherInstrument: ["Thermometer", "Rain/Snow gauge", "Wind vane"],
  buttonFinish: "Finish",
  buttonInfo: "Info",
  buttonReset: "Reset",
  resetMsgContent: "Are you sure you want to reset?",
  buttonYes: "Yes",
  buttonNo: "No",
  buttonClose: "Close",
  buttonContinue: "Continue",

  pageHeading:
    "Explore different cities for getting weather information around the different cities and months in United States.",
  infoBoxContent:
    "Weather data is specific to the area and the day.  Explore weather in different locations around the United States.",
};

export default data;
