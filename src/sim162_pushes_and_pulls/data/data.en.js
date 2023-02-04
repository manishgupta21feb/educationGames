import commonData from "../../app/data/data.en";
import pushSoft from "../assets/videos/push_soft.mp4";
import pushMed from "../assets/videos/push_med.mp4";
import pushHard from "../assets/videos/push_hard.mp4";
import pullSoft from "../assets/videos/pull_soft.mp4";
import pullMed from "../assets/videos/pull_med.mp4";
import pullhard from "../assets/videos/pull_hard.mp4";
import collideLess from "../assets/videos/collide_less.mp4";
import collideMed from "../assets/videos/collide_med.mp4";
import collideFast from "../assets/videos/collide_fast.mp4";

const data = {
  buttonLabels: { ...commonData.buttonLabels, run: "collide the Cars" },

  completionPopup: commonData.completionPopup,
  completionPopupText: `You have completed the game.`,

  resetPopupText: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,

  activityheading: `Students will explore different strengths of push and pull forces that change a car’s motion. Students will explore what happens to two cars when they collide.`,

  startUpInfoText: `Push and pull forces can change the motion of objects.`,

  infoText: `Click on the button and watch the cars move!`,

  instruction: `Explore what happens when the number of copper coils is increased.`,

  sliderLabel: "Speed:",
  close: "Close",

  NotesData: [
    {
      id: 1,
      notes: [
        {
          serNo: 1,
          text: "The car moved away from the hand slowly! It changed its motion! A push with not very much strength made the car move slowly.",
        },
        {
          serNo: 2,
          text: "The car moved away from the hand. It changed its motion! A push with medium strength made the car move faster than the soft push but slower than the hard push.",
        },
        {
          serNo: 3,
          text: "The car moved away from the hand quickly! It changed its motion! A push with a lot of strength made the car move fast!",
        },
      ],
    },
    {
      id: 2,
      notes: [
        {
          serNo: 1,
          text: "The car moved toward the hand slowly! It changed its motion!  A pull with not very much strength made the car move slowly.",
        },
        {
          serNo: 2,
          text: "The car moved toward the hand. It changed its motion! A medium strength pull made the car move  more slowly than the hard pull but faster than the soft pull.",
        },
        {
          serNo: 3,
          text: "The car moved toward the hand very fast! It changed its motion! A pull with a lot of strength made the car move fast!",
        },
      ],
    },
    {
      id: 3,
      notes: [
        {
          serNo: 1,
          text: "When the cars collided, they pushed on each other more softly. They moved in other directions but not very far. It did not take much time for them to stop moving. They didn’t change shape very much. <b>Less speed</b> made the cars have a <b>smaller</b> collision!",
        },
        {
          serNo: 2,
          text: "When the cars collided, they pushed on each other. They moved in other directions. Then, they stopped moving. The front of the cars changed shape.",
        },
        {
          serNo: 3,
          text: "When the cars collided with more speed, they pushed on each other harder. They moved farther in other directions. It took longer for them to stop moving. Their shape changed more. <b>More speed</b> made the cars have a <b>bigger</b> collision!",
        },
      ],
    },
  ],

  mainInfo: [
    {
      id: 1,
      class: "screen1",
      infoText:
        " Select how the hand will push the toy car.</br> Then, watch what happens to the motion of the car when it is pushed. Does the amount of <b>strength</b> used to <b>push</b> the toy car change its motion?",
      buttons: [
        { id: 0, value: 1, label: "Soft push" },
        { id: 1, value: 2, label: "Medium push" },
        { id: 2, value: 3, label: "Hard push" },
      ],
      videos: [
        {
          id: "poster1",
          videoSrc: pushSoft,
          alt: "A dummy alt for slow push",
          liveText: "Car is pushed slowly",
        },
        {
          id: "poster2",
          videoSrc: pushMed,
          alt: "A dummy alt for medium push",
          liveText: "Car is pushed medium",
        },
        {
          id: "poster3",
          videoSrc: pushHard,
          alt: "A dummy alt for hard push",
          liveText: "Car is pushed fast",
        },
      ],
    },
    {
      id: 2,
      class: "screen2",
      infoText:
        "Select how the hand will pull the toy car.</br> Then, watch what happens to the motion of the car when it is pulled. Does the amount of <b>strength</b> used to <b>pull</b> the toy car change its motion?",
      buttons: [
        { id: 0, value: 1, label: "Soft pull" },
        { id: 1, value: 2, label: "Medium pull" },
        { id: 2, value: 3, label: "Hard pull" },
      ],
      videos: [
        {
          id: "poster1",
          videoSrc: pullSoft,
          alt: "A dummy alt for slow pull",
          liveText: "Car is pulled slowly",
        },
        {
          id: "poster2",
          videoSrc: pullMed,
          alt: "A dummy alt for medium pull",
          liveText: "Car is pulled medium",
        },
        {
          id: "poster3",
          videoSrc: pullhard,
          alt: "A dummy alt for fast pull",
          liveText: "Car is pulled fast",
        },
      ],
    },

    {
      id: 3,
      class: "screen3",
      infoText:
        "Select how the hand will push the cars toward each other.</br> Then, watch what happens to the motion of the cars when they collide. Does the speed of the cars affect how their motion changes once they collide?",
      buttons: [],
      videos: [
        {
          id: "poster1",
          videoSrc: collideLess,
          alt: "A dummy alt for slow collide",
          liveText: "Car is collide slowly",
        },
        {
          id: "poster2",
          videoSrc: collideMed,
          alt: "A dummy alt for medium collide",
          liveText: "Car is collide meduim",
        },
        {
          id: "poster3",
          videoSrc: collideFast,
          alt: "A dummy alt for hard collide",
          liveText: "Car is collide hard",
        },
      ],
    },
  ],

  sliderValues: [
    { id: 0, value: 1, label: "Low" },
    { id: 1, value: 2, label: "Medium" },
    { id: 2, value: 3, label: "High" },
  ],

  buttons: [
    { id: 0, value: 1, label: "Soft push" },
    { id: 1, value: 2, label: "Medium push" },
    { id: 2, value: 3, label: "Hard push" },
  ],

  videos: [
    {
      id: "poster1",
      videoSrc: pushSoft,
      alt: "Generate power with 1 coil",
    },
    {
      id: "poster2",
      videoSrc: pushMed,
      alt: "Generate power with 2 coil",
    },
    {
      id: "poster3",
      videoSrc: pushHard,
      alt: "Generate power with 3 coil",
    },
  ],
};

export default data;
