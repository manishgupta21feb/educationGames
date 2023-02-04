import commonData from "../../app/data/data.en";
import hotspotBackground from "../assets/images/Main.png";
import zoom_wheel from "../assets/images/zoom_wheel.png";
import zoom_top from "../assets/images/zoom_top.png";
import zoom_break from "../assets/images/zoom_breaks.png";
import cartAnimation from "../assets/videos/newVideo.mp4";
const data = {
  buttonLabels: { ...commonData.buttonLabels },
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have successfully identified the forces acting on the roller coaster!",
  },
  transitionPopup: {
    ...commonData.transitionPopup,
    content: "Now that you have explored how forces impact the roller coaster, it is time to show what you know.",
  },
  resetMsgContent: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  partiallyCorrectToastMessage: "Some of your answers are incorrect. Try again!",
  activityHeading:
    "the learner will analyze the effects of gravity, friction, magnetism, applied, and normal forces on an object.",
  hintContent: "Click on the hotspots to learn about the forces affecting the roller coaster. Then, match each example to the correct type of force.",
  instructionBoxContent: "Welcome to Force World, the greatest amusement park in the country! Today, you will explore how forces act on one of our most popular roller coasters.",
  bgAltText:"A roller coaster with one high hill and a second lower hill has one car on its track.",
  Screen1: {
    introductionHeading: "Have you ever been on a roller coaster before? While the lap bar or shoulder bar held you in the car, did you wonder what held the car on the track? Explore this roller-coaster simulation to find out how forces help keep a roller-coaster car on its track.",
    backgroundImg: hotspotBackground,
    helpPopupText: "Click on hotspot",
  },
  hotspots: [
    {
      id: "cart-wheel",
      travserId: 1,
      imgBgAlt:'A circle shows a close view of the wheel system of the roller-coaster car. The roller coaster is in the background.',
      hotspotDescription: {
        detail1: "The track has vertical tires inside of it. This helps <b>increase the force</b> of friction to safely start and end the ride. There are six wheels located at each wheel location on the bottom of the car. There are two wheels that contact the track from above, two wheels that contact the track from the side, and two wheels that contact the track from below. This combination of wheels and placement keeps the car secured to the track.",
        detail2: "<b>The force of friction</b> is working as the six wheels move along the steel track because the wheels rub against the steel track. Similarly, when the car approaches a large hill, the track has large tires that are used to propel the car up the hill at a speed of about 5–8 mph. The increase in <b>friction</b> between the car and the coaster-tire combination forces the car up the hill of the track. This is an example of the applied force of the track tires on the car. An <b>applied force</b> is used to make the car move against the pull of <b>gravity</b> and the force of <b>friction.</b> The pull of gravity would not allow the car to move up the hill. Track tires are also used at the braking location at the end of the track. There, track tires use an <b>applied force</b> to slow the car down rather than to speed it up.",
      },
      ariaLabel: "Cart Wheel",
      zoomImg: zoom_wheel,
      imgAlt: "A closer view of the wheel system of the roller-coaster car shows 2 pairs of wheels, 1 that runs above the track & 1 that runs below.",
    },
    {
      id: "cart",
      travserId: 2,
      imgBgAlt:"A circle shows a close view of the car on the roller-coaster track. The roller coaster is in the background.",
      hotspotDescription:
        { detail1: "At the top of the roller coaster, the car has the most <b>gravitational potential energy</b> because it is the farthest from the lowest point on the track. Typically, the larger the hill, the higher the speed of the car moving down the track. Similarly, as the car reaches the bottom of the hill and moves up the next hill of the track, it loses energy and speed because it is moving upward against the <b>force of gravity</b>. The roller-coaster car also has a <b>normal force </b> throughout the whole ride. A <b>normal force </b>is the force exerted on the object by its support. In this case, the normal force is the track pushing up against the car." },
      ariaLabel: "Roller coaster cart",
      zoomImg: zoom_top,
      imgAlt: "A closer view of the car on the roller-coaster track. The car is located at the top of the tallest hill on the roller coaster. ",
    },
    {
      id: "track",
      travserId: 3,
      imgBgAlt:"A circle shows a close view of the braking system section of the roller-coaster track. The roller coaster is in the background.",
      hotspotDescription: { detail1: "Do you know how roller coasters slow down at the end of the ride? Similar to a car, a roller coaster uses a brake system. The roller-coaster car reaches a point on the track where there are large magnets used for braking, or reducing speed, on both sides of the car. The large <b>magnets </b/> on each side of the car create a <b>magnetic field</b> with a current between the track and the car. The strong <b>force of magnetism</b> creates a <b>magnetic field.</b> This attracts the roller-coaster car to the <b>magnets</b>, and forces the car to slow down. Some roller coasters have <b>magnetic propulsion</b> to force the car up a large hill, rather than track tires or a chain system. In this part of the track, the attraction of <b>magnetic fields</b> between the track and roller-coaster car helps to quickly accelerate the car rather than decelerate the car." },
      ariaLabel: "coaster's magnetic brakes",
      zoomImg: zoom_break,
      imgAlt: "A closer view of the braking system section of the roller-coaster track. Two large magnets are attached to the outside of both sides of the track.",

    },
  ],
  animationAssest: {
    id: "video1",
    videoId: "animationCart",
    videoSrc: cartAnimation,
    startAlt: "The roller-coaster car is moving to the top of the first hill and preparing to move down the track. ",
    endAlt:"The roller-coaster car stops at the end of the track after passing the braking zone.",
    videoStartLiveText:"The roller-coaster car slowly climbs each hill & speeds up on the way down. It stops at the end of the track after passing the braking zone."

  },
  forceDirections: [
    {
      forceName: "Applied force",
      classes: "arrowApplied",
      ariaLable: "Applied force forward direction",
      lineWidth:"80px",
      direction:"right",
    },
    {
      forceName: "Friction force",
      classes: "arrowFriction",
      ariaLable: "Friction backward direction",
      lineWidth:"89px",
      direction:"left",
    },
    {
      forceName: "Normal force",
      classes: "arrowNormal",
      ariaLable: "Normal Force upward direction",
      lineWidth:"36px",
      direction:"top",

    },
     {
      forceName: "Gravity force",
      classes: "arrowGravity",
      ariaLable: "Gravity downward direction",
      lineWidth:"36px",
      direction:"bottom",
    },
  ]

  ,
  screen2: {
    questionHeading: "Drag the type of force and match it with the correct description.",
    aria:" is dropped",
    options: [
      { name: "Applied force", isDisable: false },
      { name: "Friction", isDisable: false },
      { name: "Gravity", isDisable: false },
      { name: "Magnetism", isDisable: false },
      { name: "Normal force", isDisable: false },
    ],
    description: "5 droppable area",
    blank:"blank dropzone",
    questionList: [
      {
        answerId: "Friction",
        label:"The resistance a surface or object encounters when moving over another. Dropzone",
        value:"1. The resistance a surface or object encounters when moving over another",
        id:"drop_1"

      },
      {
        answerId: "Gravity",
        label: "The pull on an object toward the center of Earth. Dropzone",
        value: "2. The pull on an object toward the center of Earth",
        id:"drop_2"

      },
      {
        answerId: "Normal force",
        label: "The pushing force exerted on an object by its support, such as a table or a floor. Dropzone",
        value: "3. The pushing force exerted on an object by its support, such as a table or a floor",
        id:"drop_3"
      },
      {
        answerId: "Applied force",
        label:"The force added to an object to either move it or change its shape. Dropzone",
        value: "4. The force added to an object to either move it or change its shape",
        id:"drop_4"
      },
      {
        answerId: "Magnetism",
        label: "The force that attracts or repels objects toward or away from each other. Dropzone",
        value: "5. The force that attracts or repels objects toward or away from each other",
        id:"drop_5"
      },
    ],
  },
};

export default data;
