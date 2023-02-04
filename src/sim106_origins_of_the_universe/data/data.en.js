import commonData from "../../app/data/data.en";
import imgViewFromSpace from "../assets/images/steady_state_model.png";
import imgViewFromEarth from "../assets/images/big_bang_new.png";
import videoSpace from "../assets/videos/redshift.mp4";

//----> Images
import ques1Img1 from "../assets/images/steady_state_model.png";
import ques1Img2 from "../assets/images/big_bang_new.png";
import globalDataSet from "../../app/data/data.en";

const data = {
  completionPopup: {
    ...globalDataSet.completionPopup,
    content: "You have successfully completed the simulation.",
  },
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  resetLiveText: commonData.resetLiveText,
  buttonLabels: { ...commonData.buttonLabels },
  resetPopupText: commonData.resetPopupText,
  observationMotive:
    "In this simulation, students will examine different ideas of the origins of the universe and then examine the evidence that supports the big bang theory.",
  introText:
    "Scientific theories provide explanations about phenomena in our world. Evidence from many different scientists is pulled together to create these theories. Today, we are going to examine different pieces of evidence about the origins of the universe.",
  infoText: [
    "Read evidence and answer questions about the potential origins of the universe.",
  ],

  home: {
    title: [
      "Our universe contains everything we know: space, time, stars, planets, and galaxies. There have been many different ideas proposed about how the universe was created. Within the last hundred years, two big ideas have been proposed that scientists have used to explain the origins of the universe. <p class='title_sub'> Click on each element to learn more. </p>",
    ],
    frames: [
      {
        id: "viewFromSpace",
        img: imgViewFromSpace,
        title: "Steady State Model",
        alt: "Steady state model showing three increasingly larger circles with dots inside each;  the space increases between the dots as each circle increases",

        target: "viewFromSpace",
        spain: "Spain",
        newZealand: "New Zealand",
      },
      {
        id: "viewFromEarth",
        img: imgViewFromEarth,
        title: "Big Bang Theory",
        alt: "Big bang theory model showing an initial explosion & four color bands to represent time periods; some stars form in band 3 & planets form in band 4.",
        target: "viewFromEarth",
      },
    ],
  },

  view: [
    {
      id: "viewFromSpace",
      source: "viewFromSpace",
      videoContent: {
        labels: ["Spain", "New Zealand"],
        class: "space-view",
      },
      questions: [
        {
          videoSrc: videoSpace,
          id: "question1",
          question:
            "Which of these ideas has more evidence to show that it could be the correct explanation for the origin of the universe?",
          answer: "question1_rb_o2",
          img: imgViewFromSpace,
          alt: "Spiral galaxy moving away from the viewer changing in color from blue to red",
          ariaLiveText:
            "Spiral galaxy moving away from the viewer changing in color from blue to red",
          title:
            "The steady state model was proposed by several British scientists in 1948. This model says that the stars and galaxies may change, but the way the universe looks now is the way it has always looked and will continue to look. ",
          titleSecond:
            "The steady state model has no beginning or ending. It says that the density of matter stays the same because matter is continuously created.",
        },
      ],
    },
    {
      id: "viewFromEarth",
      source: "viewFromEarth",
    },
  ],

  legends: [
    {
      title: "Spain",
      label: "An Orange Star",
    },
    {
      title: "New Zealand",
      label: "A Purple Star",
    },
  ],

  altTextSteadyState:
    "Steady state model showing three increasingly larger circles with dots inside each;  the space increases between the dots as each circle increases.",
  altTextBigBang:
    "Big bang theory model showing an initial explosion & four color bands to represent time periods; some stars form in band 3 & planets form in band 4.",
  radioButtons: [
    [
      {
        id: "question1_rb_o1",
        text: "Steady state model",
        label: "Steady state model",
      },
      {
        id: "question1_rb_o2",
        text: "Big bang theory",
        label: "Big bang theory",
      },
    ],
  ],

  questionHeading: ["Question:", "of 3"],

  imagesAltText:
    "On left–steady-state model: 3 increasingly larger circles with dots inside; on right–big bang model: initial explosion & 4 bands for time periods",

  questionsImages: [
    [
      {
        id: "ques1_img_1",
        src: ques1Img1,
        name: "",
        imgType: "couple",
        text1: "Spain",
        text2: "New Zealand",
        option: "A",
        alt: "On left–steady-state model: 3 increasingly larger circles with dots inside; on right–big bang model: initial explosion & 4 bands for time periods",
      },
      {
        id: "ques1_img_2",
        src: ques1Img2,
        name: "",
        imgType: "couple",
        text1: "Spain",
        text2: "New Zealand",
        option: "B",
        alt: "The previously shown steady state model and big bang theory model shown side-by-side",
      },
    ],
    [
      {
        id: "ques2_img_1",
        name: "",
        imgType: "couple",
        text1: "Spain",
        text2: "New Zealand",
        option: "A",
      },
      {
        id: "ques2_img_2",
        name: "",
        imgType: "couple",
        text1: "Spain",
        text2: "New Zealand",
        option: "B",
      },
    ],
    [
      {
        id: "ques3_img_1",
        name: "",
        imgType: "single",
        text1: "Spain",
        text2: "New Zealand",
        option: "Dark",
      },
      {
        id: "ques3_img_2",
        name: "",
        imgType: "single",
        text1: "Spain",
        text2: "New Zealand",
        option: "Bright",
      },
      {
        id: "ques3_img_3",
        name: "",
        imgType: "single",
        text1: "Spain",
        text2: "New Zealand",
        option: "Some dark, some bright",
      },
    ],
  ],

  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "Now that you have examined two ideas of the origin of the universe, let’s look more at the evidence for the big bang theory.",
  },
  completionPopup: {
    ...commonData.completionPopup,
    content: "You have successfully completed this simulation!",
  },

  pieContent:
    "Right after the Big Bang, temperatures were too hot, and there was too much energy, so particles like protons, neutrons, and electrons wouldn’t bind to each other. As the temperature cooled in the universe, the particles were able to bind together and form atoms of the simplest elements. Hydrogen, which contains only one proton per atom, was the first element to form. Helium, which contains two protons per atom, formed next.",

  questionsData: [
    {
      id: 1,
      label:
        "This animation shows a galaxy that is moving away from you. Galaxies moving away show that the universe is still expanding today. Which piece of evidence of the big bang theory is this?",
      answer: "ao_1",
      answerId: "Redshift",
      videoSrc: videoSpace,
      ariaLiveText: "Video  videoSpace",
      questions: [
        {
          videoSrc: videoSpace,
          id: "question1",
          question:
            "Which of these ideas has more evidence to show that it could be the correct explanation for the origin of the universe?",
          answer: "question1_rb_o2",
          img: imgViewFromSpace,
          alt: "Spiral galaxy moving away from the viewer changing in color from blue to red",
          title:
            "The steady state model was proposed by several British scientists in 1948. This model says that the stars and galaxies may change, but the way the universe looks now is the way it has always looked and will continue to look. ",
          titleSecond:
            "The steady state model has no beginning or ending. It says that the density of matter stays the same because matter is continuously created.",
        },
      ],
    },
    {
      id: 2,
      label:
        "This image shows the radiation left over from the Big Bang. The different colors represent differences in temperature, which correspond to different densities of matter. (Red and yellow areas are hotter, and dark blue areas are cooler.) Which piece of evidence of the big bang theory is this?",
      answer: "ao_2",
      answerId: "Cosmic microwave background radiation",
    },
    {
      id: 3,
      label:
        "Right after the Big Bang, temperatures were too hot, and there was too much energy, so particles like protons, neutrons, and electrons wouldn’t bind to each other. As the temperature cooled in the universe, the particles were able to bind together and form atoms of the simplest elements. Hydrogen, which contains only one proton per atom, was the first element to form. Helium, which contains two protons per atom, formed next.",
    },
    {
      id: 4,
      label:
        "As more cooling occurs, two hydrogen atoms can fuse to make helium. Which piece of evidence of the big bang theory is this?",
      answer: "ao_3",
      answerId: "Elemental composition of the universe.",
    },
  ],

  cosmicImageAlt: "Planet model of Earth with areas of different colors",
  answerOptions: [
    {
      id: "ao_1",
      disabled: false,
      text: "Redshift",
      label: "Redshift",
    },
    {
      id: "ao_2",
      disabled: false,
      text: "Cosmic microwave background radiation",
      label: "Cosmic microwave background radiation",
    },
    {
      id: "ao_3",
      disabled: false,
      text: "Elemental composition of the universe",
      label: "Elemental composition of the universe",
    },
  ],

  submitAnswer: globalDataSet.buttonLabels.submitAnswer,
  bigBang: "Big Bang Theory",
  stateModel: "Steady State Model",
  graphColor: ["#35374C", "#0056B3", "#35374C", "#BA5B08"],

  pieChartData: [
    {
      SerNo: 1,
      graphData: [20, 80],
      graphLabel: [
        {
          text: "Hydrogen, 80%",
          class: "pattern1",
          altText: "Hydrogen, 80%",
        },
        {
          text: "Helium, 20%",
          class: "pattern2",
          altText: "Helium, 20%",
        },
      ],
    },
  ],

  pieChartDataTwo: [
    {
      SerNo: 1,
      graphData: [25, 74, 1],
      graphLabel: [
        {
          text: "Other Elements, 1%",
          class: "pattern3",
          altText: "Other Elements, 1%",
        },
        {
          text: "Helium, 24%",
          class: "pattern4",
          altText: "Helium, 24%",
        },
        {
          text: "Hydrogen, 75%",
          class: "pattern1",
          altText: "Hydrogen, 75%",
        },
      ],
    },
  ],

  mainScreenData: [
    {
      SerNo: 1,
      graphAlt: "Circle graph showing 80% hydrogen and 20% helium",
      graphAltTwo:
        "Circle graph showing 1% other elements, 24% helium, and 75% hydrogen",
    },
  ],
  earlySpace: "Early space",
  currentSpace: "Current space",
  sliderTitle: [
    {
      text: "The big bang theory was first proposed in 1927. It states that the universe could be traced back to a single starting point. All matter in the universe came into existence at that time. From that singularity, the universe started expanding and is still expanding today.",
    },
    {
      text: 'In 1929, scientists noted a "redshift" in the galaxies observed. When stars give off light, it travels in waves through space. We see longer waves as red light and shorter waves as blue light. As a star moves away from Earth, light waves from the star that reach Earth seem to have stretched and appear redder.',
    },
    {
      text: "In 1964, the cosmic microwave background radiation, or CMB, was discovered. It is electromagnetic radiation that is left over from the early stage of the universe. It is the oldest electromagnetic radiation in the universe.",
    },
  ],
};

export default data;
