import commonData from "../../app/data/data.en";
import globalCommonData from "../../app/data/data.en";
import videoClip from "../assets/videos/main_animation.mp4";

const data = {
  greetingMessage: "Hello",
  nextScreenButtonText: "Next Screen",
  backScreenButtonText: "Back Screen",
  buttonLabels: { ...commonData.buttonLabels },
  startUpInfo: {
    buttonContinueText: globalCommonData.buttonLabels.start,
    buttonContinueLabel: globalCommonData.buttonLabels.start,
    instructionBoxContent:
      "Welcome to the Science Lab! Today, we will look at cheek cells and explore the three components of cell theory. ",
  },
  mcqScreenHeading: "Determine if each statement below describes cell theory.",
  buttonNo: globalCommonData.buttonLabels.no,
  buttonYes: globalCommonData.buttonLabels.yes,
  buttonClose: globalCommonData.buttonLabels.close,
  buttonInfo: globalCommonData.buttonLabels.info,
  buttonReset: globalCommonData.buttonLabels.reset,
  resetMsgContent: globalCommonData.resetPopupText,

  buttonNext: globalCommonData.buttonLabels.next,
  incorrectToastMessage: globalCommonData.incorrectToastMessage,
  correctToastMessage: globalCommonData.correctToastMessage,
  completionScreen: {
    ...globalCommonData.completionPopup,
    content: "You have completed the simulation.",
  },
  resetLiveText: globalCommonData.resetLiveText,
  levelOneCompletionScreen: {
    type: "attention",
    heading: globalCommonData.transitionPopup.heading,
    buttonText: globalCommonData.buttonLabels.continue,
    buttonClasses: "right-arrow icon",
    content:
      "You’ve just discovered the three components of cell theory. Now it’s time to show what you know!",
  },
  continueBtnText: globalCommonData.buttonLabels.continue,
  microscopicView: "View under microscope",

  magnificationButtonsData: [
    {
      id: "1",
      label: "100x magnification",
      text: "100x",
    },
    { id: "2", label: "400x magnification", text: "400x" },
  ],

  ostData: [
    {
      id: "1",
      text: "<h2 class='description-heading'><p>Believe it or not, the idea that all organisms are made of cells is not that old. Today, you will explore cheek cells under the microscope. You will view the cells from two magnifications.</p><p>First, click on the 100x magnification to get started.</p></h2>",
    },
    {
      id: "2",
      text: "<h2 class='description-heading'>Take a look at this sample of cheek cells. What do you notice? Did you know that every living thing is made of cells? Some organisms have many cells, while others are only made of one. Cells are microscopic, so you need a microscope to see them.</h2>",
    },
    {
      id: "3",
      text: "<h2 class='description-heading'>A <b>cell</b> is the basic unit of structure and function in all living things. You may wonder what this means. Simply stated, it means that cells are the building blocks of all simple and complex organisms.</h2>",
    },
    {
      id: "4",
      text: "<div><h2 class='description-heading'>You just learned the first two parts of <strong>cell theory</strong>:</h2><ol style='list-style:none'><li>1) All organisms are made up of one or more cells.</li><li>2) A cell is the basic unit of structure and function in all living things.</li></ol><p>Let's look more closely at the cheek cell samples to learn the third part of cell theory. In order to do this, we will need to use a higher magnification. Click the 400x magnification on the microscope to gain a closer view of the cells.</p></div>",
    },
    {
      id: "5",
      text: "<h2 class='description-heading'>Notice the cells are larger than before because they are more magnified. Look closely. What do you notice?</h2>",
    },
    {
      id: "6",
      text: "<h2 class='description-heading'>Each single cell is dividing and producing another cell. This process of cell division provides a way for cells to increase in number. Cell division is the process by which living cells produce new cells. You just discovered the third part of cell theory! Cells only come from preexisting cells.</h2>",
    },
  ],

  mcqData: [
    {
      id: "1",
      question: "All organisms are made of many cells.",
      radiobuttons: [
        {
          id: "1",
          value: "True",
          text: "True",
          label: "True",
        },
        {
          id: "2",
          value: "False",
          text: "False",
          label: "False",
        },
      ],
      answer: "2",
    },
    {
      id: "2",
      question: "Cells come from preexisting cells.",
      radiobuttons: [
        {
          id: "1",
          value: "True",
          text: "True",
          label: "True",
        },
        {
          id: "2",
          value: "False",
          text: "False",
          label: "False",
        },
      ],
      answer: "1",
    },
    {
      id: "3",
      question: "Cells are the basic units of structure and function of life.",
      radiobuttons: [
        {
          id: "1",
          value: "True",
          text: "True",
          label: "True",
        },
        {
          id: "2",
          value: "False",
          text: "False",
          label: "False",
        },
      ],
      answer: "1",
    },
    {
      id: "4",
      question: "Living and nonliving things are made of cells.",
      radiobuttons: [
        {
          id: "1",
          value: "True",
          text: "True",
          label: "True",
        },
        {
          id: "2",
          value: "False",
          text: "False",
          label: "False",
        },
      ],
      answer: "2",
    },
  ],

  pageHeading:
    "Students will view cheek cells under a microscope to develop an understanding of the three components of cell theory. Students will answer true/false questions to show understanding of simulation content",
  questionHeading: "Question: -1- of -2-",
  imageAltText:
    "A microscope on a lab table is set to view a cheek sample on a slide",
  screenHeading:
    "Observe the magnified view of the specimen under the microscope. Use this information to help answer the questions.",
  informationBoxContent:
    "Observe the cheek cell sample under the microscope to discover each component of cell theory.",
  imageAltTextTwo:
    "The cheek sample on the microscope slide is zoomed in showing somewhat round cells with dark spots in each one",
  altTextVideoEnd:
    "Two unique cheek cells are now viewable underneath the microscope",
  liveText:
    "The single cheek cell sample on the microscope slide begins to duplicate and split into two cells",

  videoData: [
    {
      id: "image1",
      videoSrc: videoClip,
      alt: "A single cheek cell sample on the microscope slide is enlarged for easier viewing",
      altEnd:
        "Two unique cheek cells are now viewable underneath the microscope",
    },
  ],

  images: [
    { id: "1", src: "image1", showOn: "2" },
    { id: "2", src: "image2", showOn: "3" },
  ],

  sampleLabel: "Cheek sample",
};
export default data;
