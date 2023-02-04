import commonData from "../../app/data/data.en";

const data = {
  buttonLabels: { ...commonData.buttonLabels, play: "Play" },

  resetPopupText: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,

  initialInfotext: `Let's experiment with some forces acting on a box in two situations: 
  overcoming friction and net force.`,

  hintText: `Drag the slider to adjust the amount of force on the box!`,

  launchScreenTitle: `Choose the experiment to explore!`,

  launchScreenButtons: [
    {
      id: "overcomingFriction",
      name: "Overcoming friction",
      altText: `Brown box rests on a surface with a red arrow labeled F1 pointing to the 
      left & 3 blue arrows each pointing in a different direction: up, down & right`,
      nextScreen: 1,
      leftText: "F1",
    },
    {
      id: "netForce",
      name: "Net force",
      altText: `Brown box rests on a surface. Red arrow labeled F1 points left, 
      green arrow labeled F2 points right, 1 blue arrow points up, 1 blue arrow points down`,
      nextScreen: 2,
      leftText: "F1",
      rightText: "F2",
    },
  ],

  sliderLabel: "Force",

  dataList: [
    { id: 0, value: 60, label: 60 },
    { id: 1, value: 80, label: 80 },
    { id: 2, value: 100, label: 100 },
    { id: 3, value: 120, label: 120 },
    { id: 4, value: 140, label: 140 },
  ],

  ScreenInfo: {
    screen1: {
      title: "Overcoming friction:",
      infoText: `Adjust the amount of applied force to see if the box will move!`,
      slider: {
        title: `Applied force (F1) in newtons`,
        altText: `applied force F1 is `,
      },
      errorMsg: `The force you chose wasn't enough to overcome friction. Try again!`,
      sucessMsg: `Good job, you moved the box!`,
      leftText: "F1",
      altText: `Brown box rests on a surface with a red arrow labeled F1 pointing 
      to the left & 3 blue arrows each pointing in a different direction: up, down & right`,
      altTextAfter: `A brown box rests on the far left edge of a surface after sliding. 
      A slider labeled applied force is in the upper left corner.`,
    },
    screen2: {
      title: "Net force:",
      infoText: `Adjust the amount of applied forces to see if the box will move!`,
      errorMsg: `The forces are balanced, so the box won’t move!`,
      sucessMsg: `The forces are unbalanced, so the box moves!`,
      slider: {
        title1: `Applied force (F1) in newtons`,
        title2: `Applied force (F2) in newtons`,
        altText1: `applied force F1 is `,
        altText2: `applied force F2 is `,
      },
      leftText: "F1",
      rightText: "F2",
      altText: `Brown box rests on surface. Red F1 arrow points left, green F2 arrow right, 
      1 blue arrow up & 1 blue arrow down. Applied force sliders in each corner`,
      altTextRight: `A brown box rests on the far right edge of a surface after sliding.`,
      altTextLeft: `A brown box rests on the far left edge of a surface after sliding.`,
      altTextDynamic: `Box rests on surface. Red F1 arrow points left & green F2 arrow points right. 
      F1 applied force slider reads -1- and F2 applied force slider reads -2-`
    },
  },
};

export default data;
