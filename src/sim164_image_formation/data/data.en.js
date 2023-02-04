import globalConfig from "../../app/data";

import convexImage1 from "../assets/images/sim164_page1.png";
import convexImage2 from "../assets/images/sim164_page2.png";
import convexImage3 from "../assets/images/sim164_page3.png";
import convexImage4 from "../assets/images/sim164_page4.png";
import convexImage5 from "../assets/images/sim164_page5.png";
import convexImage6 from "../assets/images/sim164_page6.png";
import convexImage7 from "../assets/images/sim164_page7.png";

const data = {
  correctToastMsg: globalConfig.correctToastMessage,
  incorrectToastMsg: globalConfig.incorrectToastMessage,
  activityHeading:
    "Students will manipulate a ray diagram to predict image formation of a plane mirror and convex lens.",
  partialFeedback: [
    "Incorrect type of image and view. Try again!",
    "Incorrect view and size. Try again!",
    "Incorrect type of image and size. Try again!",
    "Incorrect type of image. Try again!",
    "Incorrect view. Try again!",
    "Incorrect size. Try again!",
  ],
  commonQuestionOst:
    "Attempt to identify the type, view, and size of the image that will be created by the mirror or lens based on the placement of the object.",
  equationsData: [
    {
      srNo: 1,
      id: "question1",
      questionImage: convexImage2,
      lensName: "Plane mirror",
      imageText:
        "Ray diagram showing an object on one side of a mirror, light rays bouncing against the mirror & an upright virtual image on opposite side of mirror.",
      answer: [
        ["virtual_image"],
        ["upright", "reversed_left_to_right"],
        ["same_size"],
      ],
    },
    {
      srNo: 2,
      id: "question2",
      questionImage: convexImage3,
      lensName: "Plane mirror",
      imageText:
        "Ray diagram showing an object on one side of a mirror, light rays bouncing against the mirror & an upright virtual image on opposite side of mirror.",
      answer: [
        ["virtual_image"],
        ["upright", "reversed_left_to_right"],
        ["same_size"],
      ],
    },
    {
      srNo: 3,
      id: "question3",
      questionImage: convexImage4,
      lensName: "Convex lens",
      imageText:
        "Ray diagram showing an object on one side of a convex lens, light rays going through the lens & an inverted real image on the other side of the lens.",
      answer: [["real_image"], ["inverted"], ["same_size"]],
    },
    {
      srNo: 4,
      id: "question4",
      questionImage: convexImage5,
      lensName: "Convex lens",
      imageText:
        "Ray diagram showing an object on one side of a convex lens, light rays going through the lens & an inverted real image on the other side of the lens.",
      answer: [["real_image"], ["inverted"], ["smaller_than_object"]],
    },
    {
      srNo: 5,
      id: "question5",
      questionImage: convexImage6,
      lensName: "Convex lens",
      imageText:
        "Ray diagram showing an object on one side of a convex lens, light rays going through the lens & no image being formed.",
      answer: [["no_imageA"], ["no_imageB"], ["no_imageC"]],
    },
    {
      srNo: 6,
      id: "question6",
      questionImage: convexImage7,
      lensName: "Convex lens",
      imageText:
        "Ray diagram showing an object on one side of a convex lens, light rays going through the lens & an upright virtual image on the same side of the lens.",
      answer: [["virtual_image"], ["upright"], ["larger_than_object"]],
    },
  ],

  equationOptions: [
    {
      context: "Type of Image",
      chkBoxes: [
        {
          id: "real_image",
          disabled: false,
          text: "Real image",
        },
        {
          id: "virtual_image",
          disabled: false,
          text: "Virtual image",
        },
        {
          id: "no_imageA",
          disabled: false,
          text: "No image",
        },
      ],
    },
    {
      context: "View",
      chkBoxes: [
        {
          id: "upright",
          disabled: false,
          text: "Upright",
        },
        {
          id: "inverted",
          disabled: false,
          text: "Inverted",
        },
        {
          id: "reversed_left_to_right",
          disabled: false,
          text: "Reversed left to right",
        },
        {
          id: "no_imageB",
          disabled: false,
          text: "No image",
        },
      ],
    },
    {
      context: "Size",
      chkBoxes: [
        {
          id: "larger_than_object",
          disabled: false,
          text: "Larger than object",
        },
        {
          id: "smaller_than_object",
          disabled: false,
          text: "Smaller than object",
        },
        {
          id: "same_size",
          disabled: false,
          text: "Same size",
        },
        {
          id: "no_imageC",
          disabled: false,
          text: "No image",
        },
      ],
    },
  ],
  focalLengthContent: {
    contentA: "Object",
    contentB: "Image",
    describeContent: "tooltip:",
    focalBar: [
      { content: "2F", hoverContent: "Focal length" },
      { content: "F", hoverContent: "Focal point" },
      { content: "O", hoverContent: "Optical centre" },
      { content: "F", hoverContent: "Focal point" },
      { content: "2F", hoverContent: "Focal length" },
    ],
  },
  resetLiveText: globalConfig.resetLiveText,
  rightMsg: globalConfig.correctToastMessage,
  resetPopupText: globalConfig.resetPopupText,
  buttonLabels: { ...globalConfig.buttonLabels },
  warningBoxHeader: globalConfig.incorrectToastMessage,

  infoContent:
    "Evaluate the diagram provided for you. Take into consideration the type of optical device used and the placement of the object. If needed, more than two options can be chosen for the view.",

  instructionBoxContent: {
    content:
      "Light rays interact to form images. These images can be classified as real or virtual based on the interactions of the light rays. Mirrors and lenses are examples of devices that interact with light to produce images. Today, you will be investigating image formation from mirrors and lenses. ",
    imgSrc: convexImage1,
    alt: "Ray diagram showing an object on one side of a convex lens, light rays going through the lens & an inverted real image on the other side of the lens.",

    placementTexts: {
      text1: "Convex lens",
      text2: "Object",
      text3: "Image",
      text4: "2F",
      text5: "F",
      text6: "F",
      text7: "2F",
    },
  },
  questionCount: { Question: "Question", of: "of" },
  completionScreen: {
    ...globalConfig.completionPopup,
    content: "You have successfully answered all the questions.",
  },
  imagesArr: [
    convexImage1,
    convexImage2,
    convexImage3,
    convexImage4,
    convexImage5,
    convexImage6,
    convexImage7,
  ],
};

export default data;
