import commonData from "../../app/data/data.en";
import Foot_tapping from "../assets/videos/Foot_tapping.mp4";
import Hand_and_vibrating_guitar from "../assets/videos/Hand_and_vibrating_guitar.mp4";
import Speakers from "../assets/videos/Speakers.mp4";
import Water_vibrating from "../assets/videos/Water_vibrating.mp4";
import Musical_notes from "../assets/videos/Musical_notes.mp4";

const data = {
  buttonLabels: { ...commonData.buttonLabels },
  submitAnswer: commonData.buttonLabels.submitAnswer,
  completionPopup: { 
    type: "positive",
    buttonText: "Reset",
    heading: "Congratulations!",
    buttonClasses: "reset-white reverse icon",
    content:  
      "You have identified whether sounds are made by vibrating matter or whether the sounds are making matter vibrate. You were also able to tell whether the sounds were soft or loud depending on how they were used. Play again if you want!",
  },
  resetMsgContent: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  activityHeading:
    "Students will identify whether sounds are made by vibrating matter or whether sounds are making matter vibrate and Students will identify whether a sound is loud or soft based on how it is used.",
  hintContent:
    "Click on the object, read the statements, and choose the correct statement.",
    instructionBoxContent:
    "Sounds are made when matter vibrates or shakes quickly. Sometimes, it is sound that makes matter vibrate. Lin is playing the guitar for her school’s talent show. Let’s decide which is happening as Lin makes some sounds!",
  bgAltText: "Stage with a female holding a guitar, a music stand with a sheet of music on it, speakers beside the guitarist and a glass of water near the set of speakers.",
  screen0:"Lin’s music is coming out of the speakers. Click on the speakers.",
  hotspotVisitAlt:'Visited',
  hotspotQues:"Choose the correct statement.",
  feedbacks: {
    right: commonData.correctToastMessage,
    wrong: commonData.incorrectToastMessage,
    exception: "This is the correct answer.",
  },
  hotspots:[
     {
      serialNo: 0,
      id:"hotspot_1",
      visited: false,
      label:"Hand and vibrating guitar",
      hotspotText: "Lin is playing her guitar. She hears the music. Click on the guitar.",
      question:[
        {
          id:"q1",
          questionText:
          "Choose the correct statement.",
          answer: "option1B",
          options: [{
            id: "option1A",
            disabled: false,
            text: "The sound is making the strings vibrate.",
            label: "The sound is making the strings vibrate.",
          },
          {
            id:"option1B",
            disabled: false,
            text:"The vibrating strings are making sound.",
            label: "The vibrating strings are making sound.",
          }
        ],
        },
        {
          id:"q2",
          questionText:
          "Lin is the only person who can hear her guitar. Choose the correct statement.",
          answer:"option2B",
          options:[
            {
            id:"option2A",
            disabled: false,
            text:"The sound is loud.",
            label: "The sound is loud.",
          },
          {
            id:"option2B",
            disabled: false,
            text:"The sound is soft.",
            label: "The sound is soft.",
          }
        ],

        }
      ],
      details: {
        id:"video_Hotspot_1",
        videoSrc: Hand_and_vibrating_guitar,
        alt:'Hand and vibrating guitar strings',
      }    
     },
     {
       serialNo: 1,
       id:"hotspot_2",
       hotspotText:"Lin has a sheet of music in front of her guitar. Click on the sheet of music.",
       visited: false,
       label:"Musical notes",
       question:[
        {
          id:"q1",
          questionText:
          "Choose the correct statement.",
          answer: "option1A",
          options: [
            {
          id: "option1A",
          disabled: false,
          text: "The sound is making the paper vibrate.",
          label: "The sound is making the paper vibrate.",
        },
        {
          id:"option1B",
          disabled: false,
          text:"The vibrating paper is making sound.",
          label:"The vibrating paper is making sound.",
        },
        ],
        },
      ],
       details: {
         id:"video_Hotspot_2",
         videoSrc: Musical_notes,
         alt:"Sheet of music that appears to be moving",
         
       }
     },
     {
       serialNo: 2,
       id:"hotspot_3",
       hotspotText:"Lin is tapping her toe to the music. She hears the tapping sound. Click on her foot.",
       visited: false,
       label:"Foot Tapping",
       question:[
        {
          id:"q1",
          questionText:
          "Choose the correct statement.",
          answer:"option1B",
          options: [
            {
          id: "option1A",
          disabled: false,
          text: "The sound is making the floor vibrate.",
          label:"The sound is making the floor vibrate.",
        },
        {
          id:"option1B",
          disabled: false,
          text:"The vibrating floor is making sound.",
          label:"The vibrating floor is making sound.",
        },
          ],
        },
        {
          id:"q2",
          questionText:"Lin is the only person who can hear her foot tapping. Choose the correct statement.",
          answer:"option2B",
          options:[
            {
            id:"option2A",
            disabled: false,
            text:"The sound is loud.",
            label: "The sound is loud.",
          },
          {
            id:"option2B",
            disabled: false,
            text:"The sound is soft.",
            label: "The sound is soft.",
          }
          ],
        }
      ],   
       details: {
        id:"video_Hotspot_3",
        videoSrc: Foot_tapping,
        alt:'foot tapping on the floor',
      }
      },
      {
        serialNo: 3,
        id:"hotspot_4",
        hotspotText:"Lin’s music is coming out of the speakers. Click on the speakers.",
        visited: false,
        label:"Speakers",
        question:[
          {
            id:"q1",
            questionText:
            "Choose the correct statement.",
            answer:"option1B",
            options: [{
              id: "option1A",
              disabled: false,
              text:"The sound is making the speakers vibrate.",
              label:"The sound is making the speakers vibrate.",
            },
            {
              id: "option1B",
              disabled: false,
              text: "The vibrating speakers are making sound.",
              label: "The vibrating speakers are making sound.",
            },
          ],
          },
          {
            id:"q2",
            questionText:"Lin uses speakers so everyone can hear her music. Choose the correct statement.",
            answer:"option2A",
            options:[
              {
              id:"option2A",
              disabled: false,
              text:"The sound is loud.",
              label: "The sound is loud.",
            },
            {
              id:"option2B",
              disabled: false,
              text:"The sound is soft.",
              label: "The sound is soft.",
            }
          ],
          }
        ],
        details: {
         id:"video_Hotspot_4",
         videoSrc: Speakers,
         alt:'speakers',
         }
       },
       {
        serialNo: 4,
        id:"hotspot_5",
        hotspotText:"Lin put a glass of water near the speakers. Click on the glass.",
        visited: false,
        label:"Water vibrating",
        question:[
          {
            id:"q1",
            questionText:
            "Choose the correct statement.",
            answer:"option1A",
            options: [
              {
            id: "option1A",
            disabled: false,
            text:"The sound is making the water vibrate.",
            label:"The sound is making the water vibrate."
          },
          {
            id:"option1B",
            disabled: false,
            text:"The vibrating water is making sound.",
            label:"The vibrating water is making sound."
          },
        ],
          }
        ],
        details: {
          id:"video_Hotspot_3",
          videoSrc: Water_vibrating,
          alt:'Glass of water'
        }
      },
  ] , 
  
};

export default data;
