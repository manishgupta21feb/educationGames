import commonData from "../../app/data/data.en";
import imgViewFromSpace from "../assets/images/view-from-space.jpg";
import imgViewFromEarth from "../assets/images/view-from-earth.jpg";
import videoSpace from "../assets/videos/fromspace.mp4";

//----> Images
import ques1Img1 from "../assets/images/questions/ques1-img1.png";
import ques1Img2 from "../assets/images/questions/ques1-img2.png";
import ques2Img1 from "../assets/images/questions/ques2-img1.jpg";
import ques2Img2 from "../assets/images/questions/ques2-img2.png";
import ques3Img1 from "../assets/images/questions/ques3-img1.png";
import ques3Img2 from "../assets/images/questions/ques3-img2.png";
import ques3Img3 from "../assets/images/questions/ques3-img3.png";
import iconSpain from '../assets/images/star-orange.png';
import iconNewZealand from '../assets/images/star-purple.png';

const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  resetLiveText: commonData.resetLiveText,
  buttonLabels: { ...commonData.buttonLabels },
  resetPopupText: commonData.resetPopupText,
  observationMotive:
    "In this simulation, the learner will explore and observe how Earth's rotation affects our sky.",
  introText:
    "The Sun, Earth, and the Moon are a system. This system works together and creates many of the different phenomena we see every day.  In this simulation, you will explore what Earth’s rotation looks like from space and from Earth.",
  infoText:[
    "Choose the view that you want to explore.",
    'Press "Play" to observe Earth rotating on its axis. After watching, check your understanding.',
    "Click on the answer you prefer.",
    "Drag the slider along the timeline to see how the sky and the shadow change."
  ],

  home: {
    title: "Choose the view to explore it.",
    frames: [
      {
        id: "viewFromSpace",
        img: imgViewFromSpace,
        title: "View from space",
        target: "viewFromSpace",
        spain: "Spain",
        newZealand: "New Zealand"
      },
      {
        id: "viewFromEarth",
        img: imgViewFromEarth,
        title: "View from Earth",
        target: "viewFromEarth",
      },
    ],

  },


  view: [
    {
      id: "viewSpace",
      source: "viewFromSpace",
      videoContent: {
        labels: ["Spain", "New Zealand"],
        class: "space-view",
      },
      questions: [
        {
          id: "question1",
          question: "Which image shows Spain at night?",
          answer: "question1_rb_o2",
          videoSrc: videoSpace,
          videoId: "videoSpace",
          alt: "View From Space",
          title:
            'Press "Play" to observe Earth rotating on its axis. After watching, check your understanding.',
        },
        {
          id: "question2",
          question: "Which image shows New Zealand in the daytime?",
          answer: "question2_rb_o2",
        },
        {
          id: "question3",
          question:
            "If it is daytime in New Zealand, what does the sky look like in Spain?",
          answer: "question3_rb_o1",
        },
      ],
    },
    {
      id: "viewEarth",
      source: "viewFromEarth",
    },
  ],

  legends: [
    {
      title: "Spain",
      label: "An Orange Star",
      icon: iconSpain
    },
    {
      title: "New Zealand",
      label: "A Purple Star",
      icon: iconNewZealand
    }
  ],

  radioButtons: [
    [
      {
        id: "question1_rb_o1",
        text: "A",
        label: "Top view of the Earth from space shows Spain and New Zealand in sunlight. A",
      },
      {
        id: "question1_rb_o2",
        text: "B",
        label: "Top view of the Earth from space shows Spain in dark and New Zealand in sunlight. B",
      },
    ],

    [
      {
        id: "question2_rb_o1",
        text: "A",
        label: "Top view of the Sun-Earth-Moon system from space shows Spain in dark and New Zealand in sunlight. A",
      },
      {
        id: "question2_rb_o2",
        text: "B",
        label: "Top view of the Sun-Earth-Moon system from space shows Spain in sunlight and New Zealand in dark. B",
      },
    ],

    [
      {
        id: "question3_rb_o1",
        text: "Dark",
        label: "Dark",
      },
      {
        id: "question3_rb_o2",
        text: "Bright",
        label: "Bright",
      },
      {
        id: "question3_rb_o3",
        text: "Some dark, some bright",
        label: "Some dark, some bright",
      },
    ],
  ],

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
      },
      {
        id: "ques1_img_2",
        src: ques1Img2,
        name: "",
        imgType: "couple",
        text1: "Spain",
        text2: "New Zealand",
        option: "B",
      },
    ],
    [
      {
        id: "ques2_img_1",
        src: ques2Img1,
        name: "",
        imgType: "couple",
        text1: "Spain",
        text2: "New Zealand",
        option: "A",
      },
      {
        id: "ques2_img_2",
        src: ques2Img2,
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
        src: ques3Img1,
        name: "",
        imgType: "single",
        text1: "Spain",
        text2: "New Zealand",
        option: "Dark"
      },
      {
        id: "ques3_img_2",
        src: ques3Img2,
        name: "",
        imgType: "single",
        text1: "Spain",
        text2: "New Zealand",
        option: "Bright"
      },
      {
        id: "ques3_img_3",
        src: ques3Img3,
        name: "",
        imgType: "single",
        text1: "Spain",
        text2: "New Zealand",
        option: "Some dark, some bright"
      },
    ],
  ],

  sliderTitle: "Drag the slider to see how the sky and the shadow change.",

  slider: {
    listitems: [
      { id: 0, value: 0, label: "8 am" },
      { id: 1, value: 1, label: "9 am" },
      { id: 2, value: 2, label: "10 am" },
      { id: 3, value: 3, label: "11 am" },
      { id: 4, value: 4, label: "12 pm" },
      { id: 5, value: 5, label: "1 pm" },
      { id: 6, value: 6, label: "2 pm" },
      { id: 7, value: 7, label: "3 pm" },
      { id: 8, value: 8, label: "4 pm" },
    ],
  },
  
  valuetextArray: {
    0: "8 am",
    1: "9 am",
    2: "10 am",
    3: "11 am",
    4: "12 pm",
    5: "1 pm",
    6: "2 pm",
    7: "3 pm",
    8: "4 pm",
  },
};

export default data;
