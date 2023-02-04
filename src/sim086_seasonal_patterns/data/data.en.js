import globalDataSet from "../../app/data/data.en";
import instructionImg from "../assets/images/instructionImg.png";
import icon1 from "../assets/images/point_1.jpg";
import icon2 from "../assets/images/point_2.png";
import icon3 from "../assets/images/point_3.png";
import icon1_ from "../assets/images/point_1_re.jpg";
import icon2_ from "../assets/images/point_2_re.jpg";
import icon3_ from "../assets/images/point_3_re.jpg";

import pattern1 from "../assets/images/1.png";
import pattern2 from "../assets/images/2.png";
import pattern3 from "../assets/images/3.png";

const data = {
  observationMotive:
    "In this simulation, students will use data on temperature and daylight to identify and predict sequences and patterns of seasonal change.",
  topHeading:
    "Select each label to compare seasonal data from cities in Canada, the United States, and Ecuador.",
  patterns: [pattern1],
  icon: [icon1_, icon2_, icon3_],
  dummyData: [
    {
      src: pattern1,
      class: "p1",
    },
    {
      src: pattern2,
      class: "p2",
    },
    {
      src: pattern3,
      class: "p3",
    },
  ],
  legendArea: [
    {
      title: "Calgary",
      img: icon1,
    },
    {
      title: "Houston",
      img: icon2,
    },
    {
      title: "San Gabriel",
      img: icon3,
    },
  ],
  tabArray: [
    { id: "Winter", title: "Winter" },
    { id: "Spring", title: "Spring" },
    { id: "Summer", title: "Summer" },
    { id: "Autumn", title: "Autumn" },
  ],
  instructionBoxContent: {
    label:
      "When we think of seasons, we often think about general weather stereotypes. It snows in the winter, spring has flowers, summer is really hot, and finally, in autumn, leaves begin to fall off the trees.<br>",
    label2:
      "But much more happens between seasons. Click Start to compare seasonal data from cities in Canada, the United States, and Ecuador.",
    img: instructionImg,
    imgLabel: [
      "Calgary, Canada",
      "Houston, United States",
      "San Gabriel, Ecuador",
    ],
    alt: "The western hemisphere on a globe with the following 3 cities identified: Calgary, Canada; Houston, United States; & San Gabriel, Ecuador",
  },
  InfoBoxContent: "Click the label to see the data for each season.",
  rightAreaTextDescription:
    "Choose the puzzle piece that has the correct word to make the sentence true.",
  buttonLabels: { ...globalDataSet.buttonLabels },
  completionPopup: {
    ...globalDataSet.completionPopup,
    content: "You have successfully completed the simulation.",
  },
  resetLiveText: globalDataSet.resetLiveText,
  resetMsgContent: globalDataSet.resetPopupText,
  correctToastMsg: globalDataSet.correctToastMessage,
  incorrectToastMsg: globalDataSet.incorrectToastMessage,

  lineChart1: [
    {
      month: "December",
      Calgary: "17",
      Houston: "53",
      SanGabriel: "54.3",
      tabIndex: "0",
    },
    {
      month: "January",
      Calgary: "15",
      Houston: "50",
      SanGabriel: "54",
      tabIndex: "0",
    },
    {
      month: "February",
      Calgary: "21",
      Houston: "54",
      SanGabriel: "54",
      tabIndex: "0",
    },
    {
      month: "March",
      Calgary: "28",
      Houston: "61",
      SanGabriel: "54.1",
      tabIndex: "1",
    },
    {
      month: "April",
      Calgary: "39",
      Houston: "68",
      SanGabriel: "54.5",
      tabIndex: "1",
    },
    {
      month: "May",
      Calgary: "49",
      Houston: "74",
      SanGabriel: "54.3",
      tabIndex: "1",
    },
    {
      month: "June",
      Calgary: "57",
      Houston: "80",
      SanGabriel: "53.1",
      tabIndex: "2",
    },
    {
      month: "July",
      Calgary: "62",
      Houston: "83",
      SanGabriel: "52.2",
      tabIndex: "2",
    },
    {
      month: "August",
      Calgary: "60",
      Houston: "82",
      SanGabriel: "52.5",
      tabIndex: "2",
    },
    {
      month: "September",
      Calgary: "51",
      Houston: "78",
      SanGabriel: "53.2",
      tabIndex: "3",
    },
    {
      month: "October",
      Calgary: "42",
      Houston: "70",
      SanGabriel: "54.3",
      tabIndex: "3",
    },
    {
      month: "November",
      Calgary: "27",
      Houston: "61",
      SanGabriel: "54.5",
      tabIndex: "3",
    },
  ],
  barChart2: [
    {
      tabIndex: "0",
      month: "December",
      Calgary: "0.5",
      Houston: "3.5",
      SanGabriel: "7.5",
    },
    {
      tabIndex: "0",
      month: "January",
      Calgary: "0.5",
      Houston: "3",
      SanGabriel: "5.2",
    },
    {
      tabIndex: "0",
      month: "February",
      Calgary: "0.5",
      Houston: "3.5",
      SanGabriel: "6.5",
    },
    {
      tabIndex: "1",
      month: "March",
      Calgary: "0.5",
      Houston: "3",
      SanGabriel: "9.5",
    },
    {
      tabIndex: "1",
      month: "April",
      Calgary: "1",
      Houston: "3",
      SanGabriel: "12.2",
    },
    {
      tabIndex: "1",
      month: "May",
      Calgary: "2",
      Houston: "5",
      SanGabriel: "8.7",
    },
    {
      tabIndex: "2",
      month: "June",
      Calgary: "3",
      Houston: "5",
      SanGabriel: "4",
    },
    {
      tabIndex: "2",
      month: "July",
      Calgary: "3",
      Houston: "3.5",
      SanGabriel: "2.5",
    },
    {
      tabIndex: "2",
      month: "August",
      Calgary: "2",
      Houston: "3.5",
      SanGabriel: "1.5",
    },
    {
      tabIndex: "3",
      month: "September",
      Calgary: "2",
      Houston: "5",
      SanGabriel: "3.5",
    },
    {
      tabIndex: "3",
      month: "October",
      Calgary: "0.5",
      Houston: "4.5",
      SanGabriel: "9",
    },
    {
      tabIndex: "3",
      month: "November",
      Calgary: "0.5",
      Houston: "4",
      SanGabriel: "10.5",
    },
  ],
  lineChart2: [
    {
      tabIndex: "0",
      month: "December",
      Calgary: "15.5",
      Houston: "36.6",
      SanGabriel: "66",
    },
    {
      tabIndex: "0",
      month: "January",
      Calgary: "19.1",
      Houston: "40.2",
      SanGabriel: "69.4",
    },
    {
      tabIndex: "0",
      month: "February",
      Calgary: "28.5",
      Houston: "49.5",
      SanGabriel: "78.5",
    },
    {
      tabIndex: "1",
      month: "March",
      Calgary: "39.3",
      Houston: "60.4",
      SanGabriel: "88.2",
    },
    {
      tabIndex: "1",
      month: "April",
      Calgary: "50.9",
      Houston: "72.1",
      SanGabriel: "78.6",
    },
    {
      tabIndex: "1",
      month: "May",
      Calgary: "59.2",
      Houston: "80.3",
      SanGabriel: "70.3",
    },
    {
      tabIndex: "2",
      month: "June",
      Calgary: "62.3",
      Houston: "83.5",
      SanGabriel: "67.2",
    },
    {
      tabIndex: "2",
      month: "July",
      Calgary: "59.2",
      Houston: "80.3",
      SanGabriel: "70.2",
    },
    {
      tabIndex: "2",
      month: "August",
      Calgary: "50.8",
      Houston: "72",
      SanGabriel: "78.6",
    },
    {
      tabIndex: "3",

      month: "September",
      Calgary: "39.4",
      Houston: "60.5",
      SanGabriel: "88.3",
    },
    {
      tabIndex: "3",
      month: "October",
      Calgary: "27.9",
      Houston: "49",
      SanGabriel: "77.9",
    },
    {
      tabIndex: "3",
      month: "November",
      Calgary: "18.8",
      Houston: "39.9",
      SanGabriel: "69.1",
    },
  ],
  barChart1: [
    {
      tabIndex: "0",
      month: "December",
      Calgary: "8",
      Houston: "10",
      SanGabriel: "12",
    },
    {
      tabIndex: "0",
      month: "January",
      Calgary: "8.5",
      Houston: "10.25",
      SanGabriel: "12",
    },
    {
      tabIndex: "0",
      month: "February",
      Calgary: "10",
      Houston: "11.05",
      SanGabriel: "12",
    },
    {
      tabIndex: "1",
      month: "March",
      Calgary: "12",
      Houston: "11.55",
      SanGabriel: "12",
    },
    {
      tabIndex: "1",
      month: "April",
      Calgary: "14",
      Houston: "12.5",
      SanGabriel: "12",
    },
    {
      tabIndex: "1",
      month: "May",
      Calgary: "15.5",
      Houston: "13.25",
      SanGabriel: "12",
    },
    {
      tabIndex: "2",
      month: "June",
      Calgary: "16.5",
      Houston: "14",
      SanGabriel: "12",
    },
    {
      tabIndex: "2",
      month: "July",
      Calgary: "16",
      Houston: "13.45",
      SanGabriel: "12",
    },
    {
      tabIndex: "2",
      month: "August",
      Calgary: "14.5",
      Houston: "13",
      SanGabriel: "12",
    },
    {
      tabIndex: "3",
      month: "September",
      Calgary: "12.5",
      Houston: "12.25",
      SanGabriel: "12",
    },
    {
      tabIndex: "3",
      month: "October",
      Calgary: "10.5",
      Houston: "11.25",
      SanGabriel: "12",
    },
    {
      tabIndex: "3",
      month: "November",
      Calgary: "9",
      Houston: "10.5",
      SanGabriel: "12",
    },
  ],
  location: [
    {
      id: 1,
      key: "Calgary",
      name: "Calgary",
    },
    {
      id: 2,
      key: "Houston",
      name: "Houston",
    },
    {
      id: 3,
      key: "SanGabriel",
      name: "San Gabriel",
    },
  ],
  graphLabels: [
    {
      topHeading: "Average Number of Daylight Hours",
      leftHeading: "Average number of hours",
      ariaLabel_topHeading: "Average number of daylight hours",
    },
    {
      topHeading: "Average Temperature",
      leftHeading: "Degrees Fahrenheit",
      ariaLabel_topHeading: "Average temperature",
    },
    {
      topHeading: "Average Amount of Precipitation",
      leftHeading: "Amount of precipitation (in.)",
      ariaLabel_topHeading: "Average amount of precipitation",
    },
    {
      topHeading: "Sun’s Altitude at Noon on the 21st of Each Month",
      leftHeading: "Degrees",
      ariaLabel_topHeading: "Sun's altitude at noon on the 21st of each month",
    },
  ],
  barChartColor: ["#0056B9", "#D84900", "#35374E"],
  lineChartColor: "35374C",
  seasonLabels: [
    {
      tabIndex: 0,
      ariaLabel: [
        "A bar graph of the average number of daylight hours in all three cities in December, January, and February.",
        "A line graph of the average temperature in all three cities in December, January, and February.",
        "A bar graph of the average amount of precipitation in all three cities in December, January, and February.",
        "A line graph of the Sun’s altitude at noon on the 21st of each month in all three cities in December, January, and February.",
      ],
      subAriaLabel:
        "{upperHeading} in Month of {MonthName} is {1st} in Calgary {2nd} in Houston and {3rd} in San Gabriel.",
    },
    {
      tabIndex: 1,
      ariaLabel: [
        "A bar graph of the average number of daylight hours in all three cities in March, April, and May.",
        "A line graph of the average temperature in all three cities in March, April, and May.",
        "A bar graph of the average amount of precipitation in all three cities in March, April, and May",
        "A line graph of the Sun’s altitude at noon on the 21st of each month in all three cities in March, April, and May.",
      ],
      subAriaLabel:
        "{upperHeading} in Month of {MonthName} is {1st} in Calgary {2nd} in Houston and {3rd} in San Gabriel.",
    },
    {
      tabIndex: 2,
      ariaLabel: [
        "A bar graph of the average number of daylight hours in all three cities in June, July, and August.",
        "A line graph of the average temperature in all three cities in June, July, and August.",
        "A bar graph of the average amount of precipitation in all three cities in June, July, and August.",
        "A line graph of the Sun’s altitude at noon on the 21st of each month in all three cities in June, July, and August.",
      ],
      subAriaLabel:
        "{upperHeading} in Month of {MonthName} is {1st} in Calgary {2nd} in Houston and {3rd} in San Gabriel.",
    },
    {
      tabIndex: 3,
      ariaLabel: [
        "A bar graph of the average number of daylight hours in all three cities in September, October, and November.",
        "A line graph of the average temperature in all three cities in September, October, and November.",
        "A bar graph of the average amount of precipitation in all three cities in September, October, and November.",
        "A line graph of the Sun’s altitude at noon on the 21st of each month in all three cities in September, October, and November.",
      ],
      subAriaLabel:
        "{upperHeading} in Month of {MonthName} is {1st} in Calgary {2nd} in Houston and {3rd} in San Gabriel.",
    },
  ],
};

export default data;
