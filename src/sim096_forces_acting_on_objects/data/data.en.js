import commonData from "../../app/data/data.en";

import fifteen_ouns_part1 from "../assets/videos/fifteen_ounce_part1.mp4";
import fifteen_ouns_part2 from "../assets/videos/fifteen_ounce_part2.mp4";

import twenty_ouns_part1 from "../assets/videos/twenty_ounce_part1.mp4";
import twenty_ouns_part2 from "../assets/videos/twenty_ounce_part2.mp4";

import ball_1 from "../assets/videos/ball_1.mp4";
import ball_2 from "../assets/videos/ball_2.mp4";
import ball_3 from "../assets/videos/ball_3.mp4";

import start_screen_2 from "../assets/images/Start_screen1.png";
import fifteen_part1 from "../assets/images/fifteen_ounce_part1.png";
import fifteen_part2 from "../assets/images/fifteen_ounce_part2.png";
import twenty_part1 from "../assets/images/twenty_ounce_part1.png";
import twenty_part2 from "../assets/images/twenty_ounce_part2.png";

import ball1 from "../assets/images/ball_1.png";
import ball2 from "../assets/images/ball_2.png";
import ball3 from "../assets/images/ball_3.png";

import ball1_poster from "../assets/images/Start_screen1wth_ball.png";
import ball2_poster from "../assets/images/Start_screen2wth_ball.png";
import ball3_poster from "../assets/images/Start_screen3wth_ball.png";

import temp_1 from "../assets/images/Launch_page_tab1.png";
import temp_2 from "../assets/images/Launch_page_tab2.png";

import gravity_screen_1 from "../assets/images/Start_screen.png";
import arrow_head from "../assets/images/Arrow.png";

const data = {
  simHeading:
    "In this simulation, the learner will explore gravity and friction.",
  infoContent:
    "Force is a push or a pull. There are forces that you cannot see that act on objects. Even though you cannot see the force pushing or pulling an object, you can see the effects of that force on the object. Gravity is a force that pulls, and friction is a push.",
  hintContent: {
    launch: "Select any one of the given scenarios.",
    gravity:
      "Choose a ball, read the information, and then test the effect gravity has on it.",
    friction:
      "Choose the amount of rice to put in the bottle and click on Test.",
  },
  launchPage: {
    ostHeading: "Pick one force to explore.",
    gravity: {
      imgSrc: temp_1,
      imgAlt: "An apple tree in a field with one apple falling to the ground",
      content: "Gravity",
    },
    friction: {
      imgSrc: temp_2,
      imgAlt: "A boy at the top of a slide in a park",
      content: "Friction",
    },
  },
  gravity: {
    content:
      "Gravity is a force that pulls objects toward the center of Earth. In this simulation, you will test the effect of gravity on different balls.<span class='break' aria-hidden='true'></span>This test is a free-fall test.  That means the balls are falling in a vacuum, and there is no other force acting on the ball—only gravity.<span class='break' aria-hidden='true'></span>Select a ball to test the effect gravity has on it.",
    balls: [
      {
        imgSrc: ball1,
        isViewed: false,
        currentSelected: false,
        details: {
          name: "Bowling ball",
          Weight: "Weight: 10 lbs.",
          Diameter: "Diameter: 8.5 in.",
          diameterAria: "Diameter 8.5 inches.",
          Timer: "4.45",
        },
      },
      {
        imgSrc: ball2,
        isViewed: false,
        currentSelected: false,
        details: {
          name: "Baseball",
          Weight: "Weight: 5.25 oz.",
          Diameter: "Diameter: 3 in.",
          diameterAria: "Diameter 3 inches.",
          Timer: "4.45",
        },
      },
      {
        imgSrc: ball3,
        isViewed: false,
        currentSelected: false,
        details: {
          name: "Marble",
          Weight: "Weight: 0.15 oz.",
          Diameter: "Diameter: 0.5 in.",
          diameterAria: "Diameter 0.5 inches.",
          Timer: "4.45",
        },
      },
    ],
    baseImgData: [
      {
        imgSrc: gravity_screen_1,
        alt: "A 100m high testing stand in the grass with trees and blue sky in the background",
      },
      {
        imgSrc: ball1_poster,
        alt: "A bowling ball at the top of the 100m tall testing stand",
      },
      {
        imgSrc: ball2_poster,
        alt: "A baseball at the top of the 100m tall testing stand",
      },
      {
        imgSrc: ball3_poster,
        alt: "A marble at the top of the 100m tall testing stand",
      },
    ],
    videoData: [
      {
        id: "gravity_poster_1",
        videoSrc: ball_1,
        bgSrc: ball1_poster,
        alt: "A bowling ball at the top of the 100m tall testing stand",
        altEnd: "A bowling ball on the ground below the testing stand",
        liveText:
          "A bowling ball falling toward the ground from the testing stand",
      },
      {
        id: "gravity_poster_2",
        videoSrc: ball_2,
        bgSrc: ball2_poster,
        alt: "A baseball at the top of the 100m tall testing stand",
        altEnd: "A baseball on the ground below the testing stand",
        liveText:
          "A baseball falling toward the ground below the testing stand",
      },
      {
        id: "gravity_poster_3",
        videoSrc: ball_3,
        bgSrc: ball3_poster,
        alt: "A marble at the top of the 100m tall testing stand",
        altEnd: "A marble on the ground below the testing stand",
        liveText: "A marble falling toward the ground below the testing stand",
      },
    ],
    timerAria: { minutes: "minutes", seconds: "seconds" },
  },
  friction: {
    content:
      "We often think of friction as rubbing our hands together, or we think about not having friction when we try walking on an icy sidewalk.<span class='break' aria-hidden='true'></span>Friction is the opposing force, or resistance, that happens when two things rub against each other. Sometimes there is a lot of friction, like when we rub our hands together, and sometimes there is not much friction, like when we slide on ice.",
    questionContent:
      "Choose an amount of rice to put in the 20 oz. water bottle to test how strong friction can be.",
    experiment1: [
      {
        id: "friction_poster_1",
        videoSrc: fifteen_ouns_part1,
        bgSrc: fifteen_part1,
        alt: "The beaker with less rice has 15 oz. of rice. The rice is being poured into the empty bottle through a funnel.",
        altEnd: "The glass bottle filled with 15 oz. of rice.",
        liveText:
          "The beaker with less rice has 15 oz. of rice. The rice is being poured into the empty bottle through a funnel.",
      },
      {
        id: "friction_poster_2",
        videoSrc: fifteen_ouns_part2,
        bgSrc: fifteen_part2,
        alt: "The chopstick is placed into the glass bottle and then lifted. The bottle stays on the table, and the chopstick comes out of the bottle.",
        altEnd:
          "A close-up of the rice in the bottle shows a lot of space between the grains of rice in the bottle",
        liveText:
          "The chopstick is placed into the glass bottle and then lifted. The bottle stays on the table, and the chopstick comes out of the bottle.",
        conclusion:
          "What happened? Was it what you expected?<br><br>Try again with the other amount to see if the result is different. If you have already tried both amounts, what do you think caused the outcomes?",
        conclusionLive:
          "What happened? Was it what you expected? Try again with the other amount to see if the result is different. If you have already tried both amounts, what do you think caused the outcomes?",
      },
    ],
    experiment2: [
      {
        id: "friction_poster_3",
        videoSrc: twenty_ouns_part1,
        bgSrc: twenty_part1,
        alt: "The beaker with more rice has 20 oz. of rice. The rice is poured into the bottle through a funnel. The bottle is shaken to make room for all the rice.",
        altEnd: "The glass bottle filled with 20 oz. of rice",
        liveText:
          "The beaker with more rice has 20 oz. of rice. The rice is poured into the bottle through a funnel. The bottle is shaken to make room for all the rice.",
      },
      {
        id: "friction_poster_4",
        videoSrc: twenty_ouns_part2,
        bgSrc: twenty_part2,
        alt: "The chopstick is placed into the glass bottle and then lifted. The bottle is lifted off the table.",
        altEnd:
          "Close-up of the rice in the bottle shows the grains very close together",
        liveText:
          "The chopstick is placed into the glass bottle and then lifted. The bottle is lifted off the table.",
        conclusion:
          "What happened? Was it what you expected?<br><br>Try again with the other amount to see if the result is different. If you have already tried both amounts, what do you think caused the outcomes?",
        conclusionLive:
          "What happened? Was it what you expected? Try again with the other amount to see if the result is different. If you have already tried both amounts, what do you think caused the outcomes?",
      },
    ],
    baseImgData: {
      baseImage: {
        imgSrc: start_screen_2,
        alt: "A funnel, a chopstick, an empty glass bottle, and two beakers with different amounts of rice on a lab table",
      },
      experiment1: [
        {
          imgSrc: fifteen_part1,
          alt: "The beaker with less rice has 15 oz. of rice. The rice is being poured into the empty bottle through a funnel.",
        },
        {
          imgSrc: fifteen_part2,
          alt: "The chopstick is placed into the glass bottle and then lifted. The bottle stays on the table, and the chopstick comes out of the bottle.",
        },
      ],
      experiment2: [
        {
          imgSrc: twenty_part1,
          alt: "The beaker with more rice has 20 oz. of rice. The rice is poured into the bottle through a funnel. The bottle is shaken to make room for all the rice.",
        },
        {
          imgSrc: twenty_part2,
          alt: "The chopstick is placed into the glass bottle and then lifted. The bottle is lifted off the table.",
        },
      ],
    },
  },
  radioButtons: [
    {
      id: "experiment1",
      text: "15 oz.",
      label: "15 oz.",
    },
    {
      id: "experiment2",
      text: "20 oz.",
      label: "20 oz.",
    },
  ],
  transitionPopup: {
    ...commonData.transitionPopup,
    content: "Try another force.",
  },
  poleData: {
    imgSrc: arrow_head,
    alt: "arrow head up and down",
    content: "100 m",
  },
  buttonContent: { test: "Test" },
  buttonLabels: { ...commonData.buttonLabels },
  commonData,
};

export default data;
