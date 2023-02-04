import globalCommonData from "../../app/data/data.en";
import scenario1 from "../assets/videos/Video_1.mp4";
import scenario3 from "../assets/videos/Video_3.mp4";
import scenario4 from "../assets/videos/Video_4.mp4";
import scenario5 from "../assets/videos/Video_5.mp4";
const data = {
  observationsData: [
    {
      id: "screen1",
      classes: "scenario1",
      videoSrc: scenario1,
      isPlayed: false,
      buttonLabels: "scenario1",
      text: "scenario1",
      experimentName: "scenario1",
      alt: "Yellow train leaves at 10:00, stops from 12:00 to12:25 after 100 miles, travels from 12:30 to 1:00, and stops at the next station–150 miles from start",
      isDisable: false,
     liveText: "Yellow train leaves at 10:00, stops from 12:00 to12:25 after 100 miles, travels from 12:30 to 1:00, and stops at the next station–150 miles from start",
    },
    {
      id: "screen2",
      classes: "scenario2",
     
    
    },
    {
      id: "screen3",
      classes: "scenario3",
      videoSrc: scenario3,
      isPlayed: false,
      buttonLabels: "scenario3",
      text: "scenario3",
      experimentName: "scenario3",
      alt: "Map shows a train route between Buffalo, NY and New York CIty. Train icon moves from New York City to Buffalo with stops in Syracuse and Rochester.",

      isDisable: false,
      liveText: "Map shows a train route between Buffalo, NY and New York CIty. Train icon moves from New York City to Buffalo with stops in Syracuse and Rochester.",
    },
    {
      id: "screen4",
      classes: "scenario4",
      videoSrc: scenario4,
      isPlayed: false,
      buttonLabels: "scenario4",
      text: "scenario4",
      experimentName: "scenario4",
      alt: "2 trains face each other on tracks; 2 compasses are seen.Train A heads east at 50 miles per hour; train B heads west at 50 miles per hour. Trains cross in the middle of the station.",

      isDisable: false,
      liveText: "2 trains face each other on tracks; 2 compasses are seen.Train A heads east at 50 miles per hour; train B heads west at 50 miles per hour. Trains cross in the middle of the station.",
    },
    {
      id: "screen5",
      classes: "scenario5",
      videoSrc: scenario5,
      isPlayed: false,
      buttonLabels: "scenario5",
      text: "scenario5",
      experimentName: "scenario5",
      alt: "Trains begin at the same station and go east for 150 mi, then stop. Train X back at the station on the left, distance reads 300 mi. Train Y at the station on the right, distance reads 220 mi",

      isDisable: false,
      liveText: "Trains begin at the same station and go east for 150 mi, then stop. Train X back at the station on the left, distance reads 300 mi. Train Y at the station on the right, distance reads 220 mi",
    },
  ],
  scenarioTwoAlt:"The speed equation is at top; a number line displays elapsed time from 10:00  to 1:00, which is 3 hours. 150 miles divided by 3 hours equals the speed",

  mcqScreenoneData: [
    {
      id: "scenerio1",
      heading:
        " A train leaves the station at 10:00 a.m. on Tuesday and heads toward New York City. It travels 100 miles, makes one stop, and then travels 50 more miles before arriving at 1:00 p.m.",
      labels: [
        { id: "label1", label: "Distance" },
        { id: "label2", label: "mi." },
      ],
    

      questionData: [
        {
          id: "mcq1",
          question:
            "<B>Distance</B> is how far an object travels.  What distance did the train travel?",
          radiobuttons: [
            {
              id: "50miles",
              disabled: false,
              text: "50 miles",
              label: "50 miles",
            },
            {
              id: "100miles",
              disabled: false,
              text: "100 miles",
              label: "100 miles",
            },
            {
              id: "150miles",
              disabled: false,
              text: "150 miles",
              label: "150 miles",
            },
            {
              id: "1000miles",
              disabled: false,
              text: "1000 miles",
              label: "1000 miles",
            },
          ],
          answer: "150miles",
        },
        {
          id: "mcq2",
          question:
            "How much <B>time</B> elapsed from when the train departed the home station to when it arrived at the New York City station?",
          radiobuttons: [
            {
              id: "1hours",
              disabled: false,
              text: "1 hour",
              label: "1 hour",
            },
            {
              id: "3hours",
              disabled: false,
              text: "3 hours",
              label: "3 hours",
            },
            {
              id: "3.5hours",
              disabled: false,
              text: "3.5 hours",
              label: "3.5 hours",
            },
            {
              id: "5hours",
              disabled: false,
              text: "5 hours",
              label: "5 hours",
            },
          ],
          answer: "3hours",
        },
      ],
    },

    {
      id: "scenerio2",
     
      labels: [
        { id: "label1", label: '<span aria-hidden="true">Speed</span><span class="sr-only">Speed equals to Distance upon Time</span>' },
        { id: "label2", label: '<span aria-hidden="true">=</span>' },
        { id: "label3", label:  '<span aria-hidden="true">Distance</span>' },
        { id: "label4", label: '<span aria-hidden="true">Time</span>'  },
        { id: "label5", label: '<span aria-hidden="true"></span>'  },
        { id: "label6", label: '<span aria-hidden="true">Distance</span><span class="sr-only">Distance equals to 100 miles plus 50 miles equals to 150 miles.</span>'  },
        { id: "label7", label: '<span aria-hidden="true">=</span>' },
        { id: "label8", label: '<span aria-hidden="true">100 miles + 50 miles = 150 miles</span>' },
        { id: "label9", label: "Time" },
        { id: "label10", label: "Train departs: 10:00 am" },
        { id: "label11", label: "Train arrives: 1:00 pm" },
        { id: "label12", label: "Total time elapsed: 3 hours" },
        { id: "label13", label:'<span aria-hidden="true">Start Time</span>'  },
       
        { id: "label15", label:'<span aria-hidden="true">10:00</span>' },
        { id: "label16", label: '<span aria-hidden="true">11:00</span>' },
        { id: "label17", label: '<span aria-hidden="true">12:00</span>' },
        { id: "label14", label: '<span aria-hidden="true">End Time</span>' },
        { id: "label18", label:  '<span aria-hidden="true">1:00</span>'},
        { id: "label19", label: '<span aria-hidden="true">1 hr</span>' },
        { id: "label20", label: '<span aria-hidden="true">1 hr</span>' },
        { id: "label21", label: '<span aria-hidden="true">1 hr</span>' },
        { id: "label22", label: '<span aria-hidden="true">3 hr</span>'},
        { id: "label23", label: '<span aria-hidden="true">S</span><span class="sr-only">Speed equals to Distance upon Time</span>' },
        { id: "label24", label: '<span aria-hidden="true">=</span>' },
        { id: "label25", label: '<span aria-hidden="true">d</span>' },
        { id: "label26", label: '<span aria-hidden="true">t</span>' },
        { id: "label27", label: '<span aria-hidden="true"></span>' },
        { id: "label28", label: '<span aria-hidden="true">d = 150 mi.</span><span class="sr-only">Distance equals to 150 miles</span>' },
        { id: "label29", label:'<span aria-hidden="true">t = 3 hr</span><span class="sr-only">Time equals to 3 hour</span> ' },
        { id: "label30", label: '<span aria-hidden="true">S</span><span class="sr-only">Speed equals to 150 miles upon 3 hour</span>'  },
        { id: "label31", label: '<span aria-hidden="true">=</span>'},
        { id: "label32", label:'<span aria-hidden="true">150 mi.</span>'  },
        { id: "label33", label: '<span aria-hidden="true">3 hr</span>'  },
        { id: "label34", label: '<span aria-hidden="true"></span>' },
        { id: "label35", label: "=" },
        { id: "label36", label:'<span aria-hidden="true">?</span><span class="sr-only"> Question mark</span>' },
      ],
      heading:
        "<B>Average speed</B> is a measure of how far an object travels <B> (distance) </B>and how long it takes it to cover that distance <B>(time).</B> ",
      questionData: [
        {
          id: "mcq1",
          question:
            " What was the average speed of the train on its journey to New York City?",
          radiobuttons: [
            {
              id: "3mi/hr",
              disabled: false,
              text: '<span aria-hidden="true">3 mi/hr</span> <span class="sr-only">3 miles per hour</span>',
              label: "3 miles per hour",
            },
            {
              id: "50mi/hr",
              disabled: false,
              text: '<span aria-hidden="true">50 mi/hr</span> <span class="sr-only">50 miles per hour</span>',
              label: "50 miles per hour",
            },
            {
              id: "150mi/hr",
              disabled: false,
              text: '<span aria-hidden="true">150 mi/hr</span> <span class="sr-only">150 miles per hour</span>',
              label: "150 miles per hour",
            },
            {
              id: "450mi/hr",
              disabled: false,
              text: '<span aria-hidden="true">450 mi/hr</span> <span class="sr-only">450 miles per hour</span>',
              label: "450 miles per hour",
            },
          ],
          answer: "50mi/hr",
        },
      ],
    },
    {
      id: "scenerio3",
    
      labels: [
        { id: "label1", label: "Buffalo" },
        { id: "label2", label: "Rochester" },
        { id: "label3", label: "Syracuse" },
        { id: "label4", label: "New York City" },
      ],
      heading: "Now it's your turn to calculate average speed on your own.",
      questionData: [
        {
          id: "mcq1",
          question:
            " A train leaves New York City at 2:00 p.m. headed for Buffalo. It arrives in Buffalo at 11:00 p.m. after making two 30-minute stops in Syracuse and Rochester. The train travels a distance of 360 miles. What was the train’s average speed? ",

          radiobuttons: [
            {
              id: "18mi/hr",
              disabled: false,
              text: '<span aria-hidden="true">18 mi/hr</span> <span class="sr-only"> 18 miles per hour</span>',
              label: "18 miles per hour",
            },
            {
              id: "40mi/hr",
              disabled: false,
              text: '<span aria-hidden="true">40 mi/hr</span> <span class="sr-only">40 miles per hour</span>',
              label: "40 miles per hour",
            },
            {
              id: "50mi/hr",
              disabled: false,
              text: '<span aria-hidden="true">50 mi/hr</span> <span class="sr-only">50 miles per hour</span>',
              label: "50 miles per hour",
            },
            {
              id: "150mi/hr",
              disabled: false,
              text: '<span aria-hidden="true">150 mi/hr</span>',
              label: "150 miles per hour",
            },
          ],
          answer: "40mi/hr",
        },
      ],
    },

    {
      id: "scenerio4",
    
      heading:
        "Train A and Train B depart from the same station at the same time.",
      labels: [
        { id: "label1", label: "Train A" },
        { id: "label3", label: '<span aria-hidden="true"> Speed: 50 mi/hr</span> <span class="sr-only">Speed: 50 miles per hour</span>' },
        { id: "label2", label: "Train B" },
        { id: "label4", label: '<span aria-hidden="true"> Speed: 50 mi/hr</span> <span class="sr-only">Speed: 50 miles per hour</span>'},
      ],
      questionData: [
       
        {
          id: "mcq1",
          question: "What direction is Train A moving?",
          answer: "east ",

          radiobuttons: [
            {
              id: "north",
              disabled: false,
              text: "North",
              label: "North",
            },
            {
              id: "south",
              disabled: false,
              text: "South",
              label: "South",
            },
            {
              id: "east ",
              disabled: false,
              text: "East ",
              label: "East ",
            },
            {
              id: "west",
              disabled: false,
              text: "West",
              label: "West",
            },
          ],
        },
        {
          id: "mcq2",
          question: "What direction is Train B moving?",
          answer: "west",

          radiobuttons: [
            {
              id: "north",
              disabled: false,
              text: "North",
              label: "North",
            },
            {
              id: "south",
              disabled: false,
              text: "South",
              label: "South",
            },
            {
              id: "east",
              disabled: false,
              text: "East ",
              label: "East ",
            },
            {
              id: "west",
              disabled: false,
              text: "West",
              label: "West",
            },
          ],
        },
        {
          id: "mcq3",
          question: "What is the average speed of Train A?",

          answer: "50mi/hr",

          radiobuttons: [
            {
              id: "50mi/hr",
              disabled: false,
              text: '<span aria-hidden="true">50 mi/hr</span> <span class="sr-only">50 miles per hour</span>',
              label: "50 miles per hour",
            },
            {
              id: "100mi/hr",
              disabled: false,
              text: '<span aria-hidden="true">100 mi/hr</span> <span class="sr-only">100 miles per hour</span>',
              label: "100 miles per hour",
            },
            {
              id: "150mi/hr",
              disabled: false,
              text: '<span aria-hidden="true">150 mi/hr</span> <span class="sr-only">150 miles per hour</span>',
              label: "150 miles per hour",
            },
            {
              id: "500mi/hr",
              disabled: false,
              text: '<span aria-hidden="true">500 mi/hr</span> <span class="sr-only">500 miles per hour</span>',
              label: "500 miles per hour",
            },
          ],
        },
        {
          id: "mcq4",
          question: "What is the average speed of Train B?",

          answer: "50mi/hr",

          radiobuttons: [
            {
              id: "50mi/hr",
              disabled: false,
              text: '<span aria-hidden="true">50 mi/hr</span> <span class="sr-only">50 miles per hour</span>',
              label: "50 miles per hour",
            },
            {
              id: "100mi/hr",
              disabled: false,
              text: '<span aria-hidden="true">100 mi/hr</span> <span class="sr-only">100 miles per hour</span>',
              label: "100 miles per hour",
            },
            {
              id: "150mi/hr",
              disabled: false,
              text: '<span aria-hidden="true">150 mi/hr</span> <span class="sr-only">150 miles per hour</span>',
              label: "150 miles per hour",
            },
            {
              id: "500mi/hr",
              disabled: false,
              text: '<span aria-hidden="true">500 mi/hr</span> <span class="sr-only">500 miles per hour</span>',
              label: "500 miles per hour",
            },
          ],
        },

        {
          id: "mcq5",
          question:
            " Are both trains traveling at the same average speed?",

          answer: "yes",

          radiobuttons: [
            {
              id: "yes",
              disabled: false,
              text: "Yes",
              label: "Yes",
            },
            {
              id: "no",
              disabled: false,
              text: "No",
              label: "No",
            },
          ],
        },

        {
          id: "mcq6",
          question:
            "<b>Velocity</b> is the average speed an object travels in a particular direction. Train A has a velocity of 50 mi/hr east. What is the velocity of Train B?",

          answer: "50mi/hrwest",

          radiobuttons: [
            {
              id: "50mi/hr",
              disabled: false,
              text: '<span aria-hidden="true">50 mi/hr</span> <span class="sr-only">50 miles per hour</span>',
              label: "50 miles per hour",
            },
            {
              id: "50mi/hreast",
              disabled: false,
              text: '<span aria-hidden="true">50 mi/hr east</span> <span class="sr-only">50 miles per hour east</span>',
              label: "50 miles per hour east",
            },
            {
              id: "50mi/hrsouth",
              disabled: false,
              text: '<span aria-hidden="true">50 mi/hr south</span> <span class="sr-only">50 miles per hour south</span>',
              label: "50 miles per hour south",
            },
            {
              id: "50mi/hrwest",
              disabled: false,
              text: '<span aria-hidden="true">50 mi/hr west</span> <span class="sr-only">50 miles per hour west</span>',
              label: "50 miles per hour west",
            },
          ],
        },

        {
          id: "mcq7",
          question: " Are both trains traveling with the same velocity?",

          answer: "no",

          radiobuttons: [
            {
              id: "yes",
              disabled: false,
              text: "Yes",
              label: "Yes",
            },
            {
              id: "no",
              disabled: false,
              text: "No",
              label: "No",
            },
          ],
        },
      ],
    },
    {
      id: "scenerio5",
    
      heading:
        "Train X and Train Y depart from the same home station and travel 150 miles to a New York City station. After reaching that destination, Train X turns around and travels back to its home station. Train Y continues on from New York to a station in New Jersey that is an additional 70 miles away.",
      labels: [
        { id: "label1", label: "Train X" },
        { id: "label2", label: "Train Y" },
        { id: "label3", label: "Distance" },
        { id: "label4", label: "mi." },
        { id: "label5", label: "Distance" },
        { id: "label6", label: "mi." },
      ],
      questionData: [
        {
          id: "mcq1",
          question: "What total distance did Train X travel?",
          radiobuttons: [
            {
              id: "50mi",
              disabled: false,
              text: '<span aria-hidden="true">50 mi.</span> <span class="sr-only">50 miles</span>',
              label: "50 miles",
            },
            {
              id: "150mi",
              disabled: false,
              text:  '<span aria-hidden="true">150 mi.</span> <span class="sr-only">150 miles</span>',
              label: "150 miles",
            },
            {
              id: "300mi",
              disabled: false,
              text:  '<span aria-hidden="true">300 mi.</span> <span class="sr-only">300 miles</span>',
              label: "300 miles",
            },
            {
              id: "600mi",
              disabled: false,
              text:  '<span aria-hidden="true">600 mi.</span> <span class="sr-only">600 miles</span>',
              label: "600 miles",
            },
          ],
          answer: "300mi",
        },
        {
          id: "mcq2",
          question: "What total distance did Train Y travel?",
          radiobuttons: [
            {
              id: "150mi",
              disabled: false,
              text:  '<span aria-hidden="true">150 mi.</span> <span class="sr-only">150 miles</span>',
              label: "150 miles",
            },
            {
              id: "220mi",
              disabled: false,
              text: '<span aria-hidden="true">220 mi.</span> <span class="sr-only">220 miles</span>',
              label: "220 miles",
            },
            {
              id: "250mi",
              disabled: false,
              text: '<span aria-hidden="true">250 mi.</span> <span class="sr-only">250 miles</span>',
              label: "250 miles",
            },
            {
              id: "300mi",
              disabled: false,
              text: '<span aria-hidden="true">300 mi.</span> <span class="sr-only">300 miles</span>',
              label: "300 miles",
            },
          ],
          answer: "220mi",
        },
        {
          id: "mcq3",
          question:
            "<b>Displacement</b> is the measure of how far an object traveled relative to its starting position. In the case of the trains, their starting position is the home station. What is the displacement of Train X?",

          answer: "0mi",

          radiobuttons: [
            {
              id: "0mi",
              disabled: false,
              text: '<span aria-hidden="true">0 mi.</span> <span class="sr-only">0 miles</span>',
              label: "0 miles",
            },
            {
              id: "220mi",
              disabled: false,
              text:  '<span aria-hidden="true">220 mi.</span> <span class="sr-only">220 miles</span>',
              label: "220 miles",
            },
            {
              id: "250mi",
              disabled: false,
              text:  '<span aria-hidden="true">250 mi.</span> <span class="sr-only">250 miles</span>',
              label: "250 miles",
            },
            {
              id: "300mi",
              disabled: false,
              text:  '<span aria-hidden="true">300 mi.</span> <span class="sr-only">300 miles</span>',
              label: "300 miles",
            },
          ],
        },
        {
          id: "mcq4",
          question: "What is the displacement of Train Y?",

          answer: "220mi",

          radiobuttons: [
            {
              id: "0mi",
              disabled: false,
              text:  '<span aria-hidden="true">0 mi.</span> <span class="sr-only">0 miles</span>',
              label: "0 miles",
            },
            {
              id: "220mi",
              disabled: false,
              text: '<span aria-hidden="true">220 mi.</span> <span class="sr-only">220 miles</span>',
              label: "220 miles",
            },
            {
              id: "250mi",
              disabled: false,
              text: '<span aria-hidden="true">250 mi.</span> <span class="sr-only">250 miles</span>',
              label: "250 miles",
            },
            {
              id: "300mi",
              disabled: false,
              text:  '<span aria-hidden="true">300 mi.</span> <span class="sr-only">300 miles</span>',
              label: "300 miles",
            },
          ],
        },
      ],
    },

  ],
  buttonLabels: { ...globalCommonData.buttonLabels },
  completionScreen: {
    ...globalCommonData.completionPopup,
    content:
      "You have successfully compared speed, velocity, distance, and displacement!",
  },
  resetLiveText: globalCommonData.resetLiveText,
  resetMsgContent: globalCommonData.resetPopupText,
  correctToastMessage: globalCommonData.correctToastMessage,
  incorrectToastMessage: globalCommonData.incorrectToastMessage,
  questionHeading: "Question: -1- of -2-",
  infoBoxContent:
    "Click Continue to advance to the next screen.",
  transitionPopup: {
    ...globalCommonData.transitionPopup,
    content:
      "You have successfully calculated average speed! Now, let's compare speed and velocity.",
  },
  altintroimgtext: "A yellow passenger train is stopped at an empty station platform. The analog clock shows it is 10:00.",

  instructionBoxContent:
    "A train is leaving a train station at 10:00 a.m. and traveling to New York City. Let's investigate its motion.",
  activityHeading:
    "Students identify the total distance and time a train travels and then calculate its average speed. They then compare the directions, velocities, and displacements of two different trains.",
};

export default data;
