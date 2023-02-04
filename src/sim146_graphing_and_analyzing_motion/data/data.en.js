import commonData from "../../app/data/data.en";
import ambulanceVideo from "../assets/videos/ambulence.mp4";
import lawn_moverVideo from "../assets/videos/lawn_mower.mp4";
import truckVideo from "../assets/videos/ice_cream.mp4";
import PinkDot from "../assets/images/Pink_dot.png";

var yourImage = new Image(15, 15);
yourImage.src = PinkDot;

const data = {
  buttonLabels: { ...commonData.buttonLabels },
  plotButton: "Plot",
  restart: "Restart",
  objectiveHeading:
    "Students will create and identify the correct distance time graph to represent the motion of an object.",
  startScreenHeading:
    "Vehicles move in different ways. Some move fast, while others move slowly. Some stop often, and others keep moving. The motion of these vehicles can be shown on distance vs. time graphs.",
  infoText: "Follow the directions on screen to complete the activity.",

  resetLiveText: commonData.resetLiveText,
  resetMsgContent: commonData.resetPopupText,
  screenOneHeading: "Click on a vehicle and observe its motion.",

  completionPopup: {
    ...commonData.completionPopup,
    content: "You have successfully completed the simulation!",
  },
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,

  videoTime: "Time",
  videoDistance: "Distance traveled",
  screenOneContent: [
    {
      id: "ambulance",
      btnText: "Ambulance",
      alt: "A side view of an ambulance",
    },
    {
      id: "lawn_mover",
      btnText: "Lawn mower",
      alt: "A side view of a person driving a red lawn mower",
    },
    {
      id: "truck",
      btnText: "Ice cream truck",
      alt: "A side view of an ice cream truck—the upper half of the truck has orange & yellow stripes, the bottom half is pink with red lines in a diamond pattern",
    },
  ],
  graphAltTxt1: "A graph of the truck as it travels",
  graphAltTxt2: "meters in",
  graphAltTxt3: "seconds",

  timeLabel: "Time",
  secondOne: "second",
  distanceLabel: "Distance Travelled",
  distanceOne: "meter",
  graphHeading:
    "Click the points on the grid that best represent the motion of the truck that you observed. Click Restart if you need to see the animation again.",
  ScreenData: [
    {
      id: "ambulance",
      text: "ambulance",
      animationHeading:
        "Press Play to observe the motion of the ambulance. After watching, check your understanding.",

      mcqHeading: "Which graph approximates the movement of the ambulance?",
      graphHead:
        "Use the drop-down menus to add points to the graph that best represent the motion of the ambulance. Click Restart if you need to see the animation again.",
      answer: "option_a",
      videoSrc: ambulanceVideo,
      alt: "An ambulance is on a road at the top of the screen, and it is following the road to the hospital at the bottom of the screen.",
      liveText:
        "An ambulance is on a road at the top of the screen, and it is following the road to the hospital at the bottom of the screen.",
      distanceData: [
        {
          id: "val1",
          text: "25",
          value: 25,
        },
        {
          id: "val2",
          text: "30",
          value: 30,
        },
        {
          id: "val3",
          text: "40",
          value: 40,
        },
        {
          id: "val4",
          text: "41",
          value: 41,
        },
        {
          id: "val5",
          text: "45",
          value: 45,
        },
        {
          id: "val6",
          text: "71",
          value: 71,
        },
        {
          id: "val7",
          text: "80",
          value: 80,
        },
      ],
      timeData: [
        {
          id: "time1",
          text: "5",
          value: 5,
        },
        {
          id: "time2",
          text: "10",
          value: 10,
        },
        {
          id: "time3",
          text: "15",
          value: 15,
        },
        {
          id: "time4",
          text: "18",
          value: 18,
        },
        {
          id: "time5",
          text: "19",
          value: 19,
        },
        {
          id: "time6",
          text: "25",
          value: 25,
        },
        {
          id: "time7",
          text: "30",
          value: 30,
        },
      ],
      radioOptions: [
        {
          id: "option_a",
          text: "A",
          alt: "Graph A shows the ambulance travelling 30 meters in 20 seconds, staying in the same place until 40 seconds, then ending at 80 meters in 80 seconds.",
        },
        {
          id: "option_b",
          text: "B",
          alt: "Graph B shows the ambulance travelling 40 meters in 30 seconds, then staying in the same place until 50 seconds, then ending at 80 meters in 80 seconds.",
        },
        {
          id: "option_c",
          text: "C",
          alt: "Graph C shows the ambulance travelling 20 meters in 30 seconds, then staying in the same place until 50 seconds, then ending at 80 meters in 80 seconds.",
        },
      ],
    },
    {
      id: "lawn_mover",
      text: "lawn mower",
      animationHeading:
        "Press Play to observe the motion of the lawn mower. After watching, check your understanding.",

      mcqHeading: "Which graph approximates the movement of the lawn mower?",
      graphHead:
        "Use the drop-down menus to add points to the graph that best represent the motion of the lawnmower. Click Restart if you need to see the animation again.",
      answer: "option_c",
      videoSrc: lawn_moverVideo,
      alt: "A person drives a red lawn mower as it mows back and forth.",
      liveText: "A person drives a red lawn mower as it mows back and forth.",
      distanceData: [
        {
          id: "val1",
          text: "10",
          value: 10,
        },
        {
          id: "val2",
          text: "15",
          value: 15,
        },
        {
          id: "val3",
          text: "20",
          value: 20,
        },
        {
          id: "val4",
          text: "22",
          value: 22,
        },
        {
          id: "val5",
          text: "30",
          value: 30,
        },
        {
          id: "val6",
          text: "34",
          value: 34,
        },
        {
          id: "val7",
          text: "35",
          value: 35,
        },
      ],
      timeData: [
        {
          id: "time1",
          text: "5",
          value: 5,
        },
        {
          id: "time2",
          text: "10",
          value: 10,
        },
        {
          id: "time3",
          text: "12",
          value: 12,
        },
        {
          id: "time4",
          text: "20",
          value: 20,
        },
        {
          id: "time5",
          text: "24",
          value: 24,
        },
        {
          id: "time6",
          text: "26",
          value: 26,
        },
        {
          id: "time7",
          text: "38",
          value: 38,
        },
      ],
      radioOptions: [
        {
          id: "option_a",
          text: "A",
          alt: "Graph A shows the lawn mower starting at 0, moving up 30 meters for 15 seconds & back to 0 for 15 seconds, then repeating the up-down for 75 seconds.",
        },
        {
          id: "option_b",
          text: "B",
          alt: "Graph B shows the lawn mower starting at 0 and increasing at the same rate until it reaches 30 meters in 100 seconds.",
        },
        {
          id: "option_c",
          text: "C",
          alt: "Graph C shows the lawn mower starting at 0 and increasing at the same rate until it reaches 100 meters in 70 seconds.",
        },
      ],
    },
    {
      id: "truck",
      text: "ice cream truck",
      animationHeading:
        "Press Play to observe the motion of the ice cream truck. After watching, check your understanding.",
      alt: "An ambulance is on a road at the top of the screen and it is following the road to children who want to buy ice cream at the bottom of the screen.",
      mcqHeading:
        "Which graph approximates the movement of the ice cream truck?",
      graphHead:
        "Use the drop-down menus to add points to the graph that best represent the motion of the ice cream truck. Click Restart if you need to see the animation again.",
      answer: "option_a",
      videoSrc: truckVideo,
      liveText:
        "An ambulance is on a road at the top of the screen and it is following the road to children who want to buy ice cream at the bottom of the screen.",
      distanceData: [
        {
          id: "val1",
          text: "20",
          value: 20,
        },
        {
          id: "val2",
          text: "25",
          value: 25,
        },
        {
          id: "val3",
          text: "30",
          value: 30,
        },
        {
          id: "val4",
          text: "35",
          value: 35,
        },
        {
          id: "val5",
          text: "40",
          value: 40,
        },
        {
          id: "val6",
          text: "60",
          value: 60,
        },
        {
          id: "val7",
          text: "65",
          value: 65,
        },
      ],
      timeData: [
        {
          id: "time1",
          text: "5",
          value: 5,
        },
        {
          id: "time2",
          text: "10",
          value: 10,
        },
        {
          id: "time3",
          text: "12",
          value: 12,
        },
        {
          id: "time4",
          text: "15",
          value: 15,
        },
        {
          id: "time5",
          text: "17",
          value: 17,
        },
        {
          id: "time6",
          text: "20",
          value: 20,
        },
        {
          id: "time7",
          text: "23",
          value: 23,
        },
      ],
      radioOptions: [
        {
          id: "option_a",
          text: "A",
          alt: "Graph A shows the ice cream truck’s travels as it starts at 0 and stops at 30 meters, 50 meters, and 100 meters over a time of about 60 seconds.",
        },
        {
          id: "option_b",
          text: "B",
          alt: "Graph B shows the ice cream truck’s travels as it starts at 0 and stops at 15 meters, 25 meters, and 45 meters over a time of 100 seconds.",
        },
        {
          id: "option_c",
          text: "C",
          alt: "Graph C shows the ice cream truck’s travels as it starts at 0 and stops at 30 meters, 70 meters, and 100 meters over a time of 100 seconds.",
        },
      ],
    },
  ],

  defaultSelectData: {
    id: "time0",
    text: "0",
    value: 0,
  },

  distanceHeading: "Distance",
  timeHeading: "Time",

  graphData: [
    {
      datasets: [
        {
          data: [
            {
              x: 0,
              y: 0,
            },
          ],

          borderWidth: 2,
          borderColor: "#212121",
          pointRadius: [3],
          pointStyle: [yourImage],
        },
      ],
    },
  ],

  graphVals: [
    {
      id: "val0",
      txt: 0,
    },
    {
      id: "val1",
      txt: 10,
    },
    {
      id: "val2",
      txt: 20,
    },
    {
      id: "val3",
      txt: 30,
    },
    {
      id: "val4",
      txt: 40,
    },
    {
      id: "val5",
      txt: 50,
    },
    {
      id: "val6",
      txt: 60,
    },
    {
      id: "val7",
      txt: 70,
    },
    {
      id: "val8",
      txt: 80,
    },
    {
      id: "val9",
      txt: 90,
    },
    {
      id: "val10",
      txt: 100,
    },
  ],
  graphDistance: "Distance (meters)",
  graphTime: "Time (seconds)",
  hospital: "HOSPITAL",
  defaultGraphAlt: "A graph of the truck as it travels 0 meters in 0 seconds",
  altFromClientForPlotButton: "alt from client",
  newGraphVals: [
    {
      id: "val0",
      txt: 0,
    },
    {
      id: "val10",
      txt: 10,
    },
    {
      id: "val20",
      txt: 20,
    },
    {
      id: "val30",
      txt: 30,
    },
    {
      id: "val40",
      txt: 40,
    },
    {
      id: "val50",
      txt: 50,
    },
    {
      id: "val60",
      txt: 60,
    },
    {
      id: "val70",
      txt: 70,
    },
    {
      id: "val80",
      txt: 80,
    },
    {
      id: "val90",
      txt: 90,
    },
    {
      id: "val100",
      txt: 100,
    },
  ],
};

export default data;
