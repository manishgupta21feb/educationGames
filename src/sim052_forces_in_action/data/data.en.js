import commonData from "../../app/data/data.en";

//----> Images
import tab_1 from "../assets/images/tab1.png";
import tab_2 from "../assets/images/tab2.png";
import kid_1 from "../assets/images/kid1.png";
import kid_2 from "../assets/images/kid2.png";
import kid_3 from "../assets/images/kid3.png";
import kid_4 from "../assets/images/kid4.png";

// Tug of war images
import comboImage1 from "../assets/images/base0.png";
import comboImage2 from "../assets/images/combination1.png";
import comboImage3 from "../assets/images/combination2.png";
import comboImage4 from "../assets/images/combination3.png";
import comboImage5 from "../assets/images/combination4.png";
import comboImage6 from "../assets/images/combination5.png";
import comboImage7 from "../assets/images/combination6.png";
import comboImage8 from "../assets/images/combination7.png";
import comboImage9 from "../assets/images/combination8.png";
import comboImage10 from "../assets/images/combination9.png";
import comboImage11 from "../assets/images/combination10.png";
import comboImage12 from "../assets/images/combination11.png";
import comboImage13 from "../assets/images/combination12.png";
import comboImage14 from "../assets/images/combination13.png";
import comboImage15 from "../assets/images/combination14.png";

// Ball force images
import bgImage1 from "../assets/images/fast.png";
import ballBg1 from "../assets/images/slow.png";
import ballBg2 from "../assets/images/medium.png";
import ballBg3 from "../assets/images/fast.png";

import video1 from "../assets/videos/combination1.mp4";
import video2 from "../assets/videos/combination2.mp4";
import video3 from "../assets/videos/combination3.mp4";
import video4 from "../assets/videos/combination4.mp4";
import video5 from "../assets/videos/combination5.mp4";
import video6 from "../assets/videos/combination6.mp4";
import video7 from "../assets/videos/combination7.mp4";
import video8 from "../assets/videos/combination8.mp4";
import video9 from "../assets/videos/combination9.mp4";
import video10 from "../assets/videos/combination10.mp4";
import video11 from "../assets/videos/combination11.mp4";
import video12 from "../assets/videos/combination12.mp4";
import video13 from "../assets/videos/combination13.mp4";
import video14 from "../assets/videos/combination14.mp4";

// Tug of war images
import ballVideo1 from "../assets/videos/slow.mp4";
import ballVideo2 from "../assets/videos/medium.mp4";
import ballVideo3 from "../assets/videos/fast.mp4";

const data = {
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  resetLiveText: commonData.resetLiveText,
  buttonLabels: { ...commonData.buttonLabels },
  resetPopupText: commonData.resetPopupText,
  observationMotive:
    "In this simulation, the learner will experiment with forces to observe what happens to objects when greater amounts of force are applied to an object.",
  introText:
    "How do applied force and speed affect the movement of objects?<br/>Click Start to explore.",
  infoText: [
    "Choose one of the scenarios to explore: Amount of force or Speed and force.",
    "Choose up to 3 students for the navy team  to play tug-of-war with the orange team by dragging them to the rope.",
    "Add speed to the ball by moving the slider, and then click Test to see what happens to the ball.",
  ],

  home: {
    title: "Choose a situation to explore.",
    frames: [
      {
        id: "tugOfWarLaunch",
        img: tab_1,
        title: "Amount of force",
        target: "tugOfWar",
        imageAlt:
          "Some students are playing tug-of-war. 3 students on the left pull in one direction & 3 other students on the right pull in the opposite direction.",
      },
      {
        id: "ballForceLaunch",
        img: tab_2,
        title: "Speed and force",
        target: "ballForce",
        imageAlt:
          "5 different-colored, evenly spaced lines are on the ground between a yellow ball and a brick wall. There is a white line from the ball to the wall.",
      },
    ],
  },

  view: [
    {
      id: "tugOfWar",
      source: "tugOfWar",
      data: {
        header: "Amount of force",
        content:
          "Choose up to 3 students to play tug-of-war for the navy team by dragging them to the rope. Who do you think will win?<br/>Students have been given a strength number to help you choose your team.",
      },
      teamLabel: [{ teamName: "Team Navy" }, { teamName: "Team Orange" }],
    },
    {
      id: "ballForce",
      source: "ballForce",
      data: {
        header: "Speed and force",
        content:
          "Pick a rolling speed for the ball by moving the slider, and then click Test to see what happens when the ball hits the wall. How far will the ball bounce back after it collides with the wall?",
      },
    },
  ],
  dragObjects: [
    {
      imgSrc: kid_1,
      content: 1,
      label: "Strength number-1 Student 1",
      id: "kid 1",
    },
    {
      imgSrc: kid_2,
      content: 2,
      label: "Strength number-2 Student 2",
      id: "kid 2",
    },
    {
      imgSrc: kid_3,
      content: 3,
      label: "Strength number-3 Student 3",
      id: "kid 3",
    },
    {
      imgSrc: kid_4,
      content: 4,
      label: "Strength number-4 Student 4",
      id: "kid 4",
    },
  ],
  dropObjects: [
    { id: "one", value: "One", label: "Dropzone Team Navy", content: 0 },
  ],
  TugOfWarImages: [
    {
      src: comboImage1,
      value: [0],
      altText:
        "3 students holding a rope are on Team Orange. 2 have the number 2 above their heads & 1 has the number 4 above their head",
    },
    {
      src: comboImage2,
      value: [1],
      videoSource: 1,
      altText:
        "3 students holding a rope are on Team Orange. 2 have the number 2 above their heads & 1 has the number 4 above their head",
    },
    {
      src: comboImage3,
      value: [2],
      videoSource: 2,
      altText:
        "3 students holding a rope are on Team Orange. 2 have the number 2 above their heads & 1 has the number 4 above their head",
    },
    {
      src: comboImage4,
      value: [3],
      videoSource: 3,
      altText:
        "3 students holding a rope are on Team Orange. 2 have the number 2 above their heads & 1 has the number 4 above their head",
    },
    {
      src: comboImage5,
      value: [4],
      videoSource: 4,
      altText:
        "3 students holding a rope are on Team Orange. 2 have the number 2 above their heads & 1 has the number 4 above their head",
    },
    {
      src: comboImage6,
      value: [2, 1],
      videoSource: 5,
      altText:
        "3 students holding a rope are on Team Orange. 2 have the number 2 above their heads & 1 has the number 4 above their head",
    },
    {
      src: comboImage7,
      value: [3, 1],
      videoSource: 6,
      altText:
        "3 students holding a rope are on Team Orange. 2 have the number 2 above their heads & 1 has the number 4 above their head",
    },
    {
      src: comboImage8,
      value: [4, 1],
      videoSource: 7,
      altText:
        "3 students holding a rope are on Team Orange. 2 have the number 2 above their heads & 1 has the number 4 above their head",
    },
    {
      src: comboImage9,
      value: [3, 2, 1],
      videoSource: 8,
      altText:
        "3 students holding a rope are on Team Orange. 2 have the number 2 above their heads & 1 has the number 4 above their head",
    },
    {
      src: comboImage10,
      value: [4, 2, 1],
      videoSource: 9,
      altText:
        "3 students holding a rope are on Team Orange. 2 have the number 2 above their heads & 1 has the number 4 above their head",
    },
    {
      src: comboImage11,
      value: [4, 3, 1],
      videoSource: 10,
      altText:
        "3 students holding a rope are on Team Orange. 2 have the number 2 above their heads & 1 has the number 4 above their head",
    },
    {
      src: comboImage12,
      value: [4, 3, 2],
      videoSource: 11,
      altText:
        "3 students holding a rope are on Team Orange. 2 have the number 2 above their heads & 1 has the number 4 above their head",
    },
    {
      src: comboImage13,
      value: [4, 2],
      videoSource: 12,
      altText:
        "3 students holding a rope are on Team Orange. 2 have the number 2 above their heads & 1 has the number 4 above their head",
    },
    {
      src: comboImage14,
      value: [3, 2],
      videoSource: 13,
      altText:
        "3 students holding a rope are on Team Orange. 2 have the number 2 above their heads & 1 has the number 4 above their head",
    },
    {
      src: comboImage15,
      value: [4, 3],
      videoSource: 14,
      altText:
        "3 students holding a rope are on Team Orange. 2 have the number 2 above their heads & 1 has the number 4 above their head",
    },
  ],

  tugOfWarVideos: [
    {
      id: "poster1",
      videoSrc: video1,
      bgSrc: comboImage2,
      isViewed: false,
      alt: "Team Navy has one student on the left with the number 1 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      altEnd:
        "Team Navy has one student on the left with the number 1 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      liveText:
        "Team Navy has one student on the left with the number 1 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      tostContent:
        "Orange team wins!<br/>The orange team had more force and overpowered the navy team.",
    },
    {
      id: "poster2",
      videoSrc: video2,
      bgSrc: comboImage3,
      isViewed: false,
      alt: "Team Navy has one student on the left with the number 2 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      altEnd:
        "Team Navy has one student on the left with the number 2 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      liveText:
        "Team Navy has one student on the left with the number 2 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      tostContent:
        "Orange team wins!<br/>The orange team had more force and overpowered the navy team.",
    },
    {
      id: "poster3",
      videoSrc: video3,
      bgSrc: comboImage4,
      isViewed: false,
      alt: "Team Navy has one student on the left with the number 3 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      altEnd:
        "Team Navy has one student on the left with the number 3 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      liveText:
        "Team Navy has one student on the left with the number 3 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      tostContent:
        "Orange team wins!<br/>The orange team had more force and overpowered the navy team.",
    },
    {
      id: "poster4",
      videoSrc: video4,
      bgSrc: comboImage5,
      isViewed: false,
      alt: "Team Navy has one student on the left with the number 4 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      altEnd:
        "Team Navy has one student on the left with the number 4 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      liveText:
        "Team Navy has one student on the left with the number 4 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      tostContent:
        "Orange team wins!<br/>The orange team had more force and overpowered the navy team.",
    },
    {
      id: "poster5",
      videoSrc: video5,
      bgSrc: comboImage6,
      isViewed: false,
      alt: "Team Navy has two students on the left with the number 1 and number 2 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      altEnd:
        "Team Navy has two students on the left with the number 1 and number 2 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      liveText:
        "Team Navy has two students on the left with the number 1 and number 2 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      tostContent:
        "Orange team wins!<br/>The orange team had more force and overpowered the navy team.",
    },
    {
      id: "poster6",
      videoSrc: video6,
      bgSrc: comboImage7,
      isViewed: false,
      alt: "Team Navy has two students on the left with the number 3 and number 1 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      altEnd:
        "Team Navy has two students on the left with the number 3 and number 1 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      liveText:
        "Team Navy has two students on the left with the number 3 and number 1 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      tostContent:
        "Orange team wins!<br/>The orange team had more force and overpowered the navy team.",
    },
    {
      id: "poster7",
      videoSrc: video7,
      bgSrc: comboImage8,
      isViewed: false,
      alt: "Team Navy has two students on the left with the number 4 and number 1 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      altEnd:
        "Team Navy has two students on the left with the number 4 and number 1 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      liveText:
        "Team Navy has two students on the left with the number 4 and number 1 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      tostContent:
        "Orange team wins!<br/>The orange team had more force and overpowered the navy team.",
    },
    {
      id: "poster8",
      videoSrc: video8,
      bgSrc: comboImage9,
      isViewed: false,
      alt: "Team Navy has three students on the left with the number 1, number 2 and number 3 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      altEnd:
        "Team Navy has three students on the left with the number 1, number 2 and number 3 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      liveText:
        "Team Navy has three students on the left with the number 1, number 2 and number 3 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      tostContent:
        "Orange team wins!<br/>The orange team had more force and overpowered the navy team.",
    },
    {
      id: "poster9",
      videoSrc: video9,
      bgSrc: comboImage10,
      isViewed: false,
      alt: "Team Navy has three students on the left with the number 1, number 2 and number 4 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      altEnd:
        "Team Navy has three students on the left with the number 1, number 2 and number 4 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      liveText:
        "Team Navy has three students on the left with the number 1, number 2 and number 4 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      tostContent:
        "Orange team wins!<br/>The orange team had more force and overpowered the navy team.",
    },
    {
      id: "poster10",
      videoSrc: video10,
      bgSrc: comboImage11,
      isViewed: false,
      alt: "Team Navy has three students on the left with the number 1, number 3 and number 4 above their head. The 3 students from Team Orange are on the right. Match ties.",
      altEnd:
        "Team Navy has three students on the left with the number 1, number 3 and number 4 above their head. The 3 students from Team Orange are on the right. Match ties.",
      liveText:
        "Team Navy has three students on the left with the number 1, number 3 and number 4 above their head. The 3 students from Team Orange are on the right. Match ties.",
      tostContent: "It’s a tie!<br/>Both teams have equal force.",
    },
    {
      id: "poster11",
      videoSrc: video11,
      bgSrc: comboImage12,
      isViewed: false,
      alt: "Team Navy has three students on the left with the number 4, number 3 and number 2 above their head. The 3 students from Team Orange are on the right. Team Navy wins.",
      altEnd:
        "Team Navy has three students on the left with the number 4, number 3 and number 2 above their head. The 3 students from Team Orange are on the right. Team Navy wins.",
      liveText:
        "Team Navy has three students on the left with the number 4, number 3 and number 2 above their head. The 3 students from Team Orange are on the right. Team Navy wins.",
      tostContent:
        "Navy team wins!<br/>The navy team had more force and overpowered the orange team.",
    },
    {
      id: "poster12",
      videoSrc: video12,
      bgSrc: comboImage13,
      isViewed: false,
      alt: "Team Navy has two students on the left with the number 4 and number 2 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      altEnd:
        "Team Navy has two students on the left with the number 4 and number 2 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      liveText:
        "Team Navy has two students on the left with the number 4 and number 2 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      tostContent:
        "Orange team wins!<br/>The orange team had more force and overpowered the navy team.",
    },
    {
      id: "poster13",
      videoSrc: video13,
      bgSrc: comboImage14,
      isViewed: false,
      alt: "Team Navy has two students on the left with the number 3 and number 2 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      altEnd:
        "Team Navy has two students on the left with the number 3 and number 2 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      liveText:
        "Team Navy has two students on the left with the number 3 and number 2 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      tostContent:
        "Orange team wins!<br/>The orange team had more force and overpowered the navy team.",
    },
    {
      id: "poster14",
      videoSrc: video14,
      bgSrc: comboImage15,
      isViewed: false,
      alt: "Team Navy has two students on the left with the number 4 and number 3 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      altEnd:
        "Team Navy has two students on the left with the number 4 and number 3 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      liveText:
        "Team Navy has two students on the left with the number 4 and number 3 above their head. The 3 students from Team Orange are on the right. Team Orange wins.",
      tostContent:
        "Orange team wins!<br/>The orange team had more force and overpowered the navy team.",
    },
  ],
  dropZoneCustomStr: {
    kid: "kid",
    are: "are",
    is: "is",
    s: "s",
    and: "and",
    dropped: "already dropped",
  },
  ballForceImage: [
    {
      imgSrc: bgImage1,
      alt: "5 different-colored, evenly spaced lines are on the ground between a yellow ball and a brick wall. There is a white line from the ball to the wall.",
    },
  ],
  ballForceVideos: [
    {
      id: "ballPoster1",
      videoSrc: ballVideo1,
      bgSrc: ballBg1,
      alt: "After moving slowly and hitting the wall, the ball bounces back to the line closest to the wall.",
      altEnd:
        "After moving slowly and hitting the wall, the ball bounces back to the line closest to the wall.",
      liveText:
        "After moving slowly and hitting the wall, the ball bounces back to the line closest to the wall.",
    },
    {
      id: "ballPoster2",
      videoSrc: ballVideo2,
      bgSrc: ballBg2,
      alt: "After moving at medium speed and hitting the wall, the ball bounces back to the middle line between where the ball started and the wall.",
      altEnd:
        "After moving at medium speed and hitting the wall, the ball bounces back to the middle line between where the ball started and the wall.",
      liveText:
        "After moving at medium speed and hitting the wall, the ball bounces back to the middle line between where the ball started and the wall.",
    },
    {
      id: "ballPoster3",
      videoSrc: ballVideo3,
      bgSrc: ballBg3,
      alt: "After moving fast and hitting the wall, the ball bounces back very close to the line where the ball started.",
      altEnd:
        "After moving fast and hitting the wall, the ball bounces back very close to the line where the ball started.",
      liveText:
        "After moving fast and hitting the wall, the ball bounces back very close to the line where the ball started.",
    },
  ],
  buttonLabelsData: {
    test: "Test",
  },

  sliderTitle: "Drag the slider to see how the sky and the shadow change.",

  slider: {
    sliderHeader: "Speed",
    title: "speed",
    listitems: [
      { id: 0, value: 0, label: "Slow" },
      { id: 1, value: 1, label: "Medium" },
      { id: 2, value: 2, label: "Fast" },
    ],
  },

  valuetextArray: {
    0: "Slow",
    1: "Medium",
    2: "Fast",
  },

  liveDropText: "dropped on",
  draggableText: "draggable",
};

export default data;
