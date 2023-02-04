import commonData from "../../app/data/data.en";
import arrow from "../assets/videos/arrow.mp4";
import lawn from "../assets/videos/lawn_mower_1.mp4";
import swing from "../assets/videos/swing.mp4";
import trampoline from "../assets/videos/Trampoline.mp4";

const data = {
  buttonLabels: { ...commonData.buttonLabels },
  completionPopup: {
    ...commonData.completionPopup,
    content:
      "You have successfully compared and contrasted kinetic and potential energies!",
  },
  transitionPopup: {
    ...commonData.transitionPopup,
    content:
      "Now that you have explored how potential energies transform into kinetic energies, it is time to show what you know.",
  },
  resetMsgContent: commonData.resetPopupText,
  resetLiveText: commonData.resetLiveText,
  correctToastMessage: commonData.correctToastMessage,
  incorrectToastMessage: commonData.incorrectToastMessage,
  activityHeading:
    "Students will compare and contrast kinetic energy with gravitational, elastic, and chemical potential energies.",
  hintContent:
    "Click on the hotspots to learn about the different energies used in each object. Then, drag and drop the key descriptors into the appropriate place on the Venn diagram.",
  instructionBoxContent:
    "Have you ever wondered how energy works in objects? Today, you will explore the kinetic and potential energies within different outdoor objects.",
  bgAltText: "A fenced-in yard with green grass has 4 hotspots: a swing, an archery set, a lawn mower, and a trampoline",
  screen0:"Let's explore the kinetic and potential energies within different outdoor objects.",
  screen0_subHeading:"All objects have energy. <b>Potential energy</b> is the stored energy within an object. <b>Kinetic energy</b> is the energy an object has during its motion. Select the hotspots to take a closer look and see how objects use potential and kinetic energy in this campsite.",
  hotspotVisitAlt:'Visited',
  labelling:["Max","0"],
  boxTitle:"Key Descriptors",
  dragBtnText:"draggable",
  hotspots:[
      {
       id:"hotspot_1",
       visited: false,
       label:"Swing",
       details: {
        id:"video_Hotspot_1",
        videoSrc: swing,
        label_0:"Kinetic energy",
        label_1:"Gravitational potential energy",
        labelling_0:"Max",
        labelling_1:"0",
        alt:'Student swinging & 2 bar graphs labeled kinetic energy (KE) & gravitational potential energy (GPE) changing; at peak swing GPE is maximum & KE is 0.',
        videoEndLiveText:"Student swinging & 2 bar graphs labeled kinetic energy (KE) & gravitational potential energy (GPE) changing; at peak swing GPE is maximum & KE is 0.",
        hotspotText:"When the swing moves forward and backward, it uses <b>kinetic energy.</b> As the swing climbs higher, the <b>gravitational potential energy</b> increases. The higher a person is off the ground, the more gravitational potential energy they have. ",
      }
      },
     {
       id:"hotspot_2",
       visited: false,
       label:"Bow and arrow",
       details: {
        id:"video_Hotspot_2",
        videoSrc: arrow,
        label_0:"Kinetic energy",
        label_1:"Elastic potential energy",
        labelling_0:"Max",
        labelling_1:"0",
        alt:"Shooting arrow & 2 bar graphs: kinetic energy (KE) & elastic potential energy (EPE) changing-EPE max when bow pulled back; KE max when arrow flying",
        videoEndLiveText:"Shooting arrow & 2 bar graphs: kinetic energy (KE) & elastic potential energy (EPE) changing-EPE max when bow pulled back; KE max when arrow flying",
        hotspotText:"When a person pulls an arrow back on a bow's string, there is stored energy, or <b>elastic potential energy</b>, in the string. When the person releases the string, this <b>elastic potential energy</b> is transferred to the arrow in the form of <b>kinetic energy.</b>",
      }
      },
     {
      id:"hotspot_3",
      visited: false,
      label:"Trampoline",
      hotspotText:"The trampoline contains several springs that connect the mat to the metal frame. These springs stretch and contract as a person jumps on the trampoline. As the spring coils stretch, they store <b>elastic potential energy</b>. This energy can then be transferred into <b>kinetic energy</b>, helping the person to jump really high!",
      details: {
        id:"video_Hotspot_3",
        videoSrc: trampoline,
        label_0:"Kinetic energy",
        label_1:"Elastic potential energy",
        labelling_0:"Max",
        labelling_1:"0",
        alt:'Jumping on trampoline & 2 bar graphs: kinetic energy (KE) & elastic potential energy (EPE); EPE max-trampoline pushed down most; KE max-girl in air',
        videoEndLiveText:"Jumping on trampoline & 2 bar graphs: kinetic energy (KE) & elastic potential energy (EPE); EPE max-trampoline pushed down most; KE max-girl in air",
        hotspotText:"The trampoline contains several springs that connect the mat to the metal frame. These springs stretch and contract as a person jumps on the trampoline. As the spring coils stretch, they store <b>elastic potential energy</b>. This energy can then be transferred into <b>kinetic energy</b>, helping the person to jump really high!",
      }
    },
     {
      id:"hotspot_4",
      visited: false,
      label:"Gasoline",
      details: {
        id:"video_Hotspot_4",
        videoSrc: lawn,
        label_0:"Kinetic energy",
        label_1:"Chemical potential energy",
        labelling_0:"Max",
        labelling_1:"0",
        alt:'Adding gas to lawn mower & 2 bar graphs: kinetic energy (KE) & chemical potential energy (CPE) changing; CPE increases as gas added & KE stays at 0',
        videoEndLiveText:"Adding gas to lawn mower & 2 bar graphs: kinetic energy (KE) & chemical potential energy (CPE) changing; CPE increases as gas added & KE stays at 0",
        hotspotText:"Gasoline is a liquid chemical that will provide kinetic energy for a lawn mower to move across grass once a person starts the mower. The gasoline has <b>chemical potential energy</b> because it has the potential to transform into <b>kinetic energy.</b>",
      }
     }
  ],
  venDiagramData:{
    instructionText: "Drag the key descriptors from the panel, and drop them in the appropriate place on the Venn diagram.",
    elements: [
      {
        id: "stored_energy",
        name: "Stored energy",
        accept: "potential_energy",
        isDisable: false
      },
      {
        id: "energy_of_motion",
        name: "Energy of motion",
        accept: "kinetic_energy",
        isDisable: false
      },
      {
        id: "elastic_energy",
        name: "Elastic energy",
        accept: "potential_energy",
        isDisable: false
      },
      {
        id: "can_be_transformed",
        name: "Can be transformed",
        accept: "both",
        isDisable: false
      },
      {
        id: "gravitational_energy",
        name: "Gravitational energy",
        accept: "potential_energy",
        isDisable: false
      },
      {
        id: "chemical_energy",
        name: "Chemical energy",
        accept: "potential_energy",
        isDisable: false
      },
    ],
    dropZones: [
      {
        id: "kinetic_energy",
        name: "Kinetic Energy",
        label: "Kinetic energy droppable area",
        text: "Kinetic Energy",
        answerId:"kinetic_energy",

      },
      {
        id: "both",
        name: "Both",
        label: "Both droppable area",
        text: "Both",
        answerId:"both",

      },
      {
        id: "potential_energy",
        name: "Potential Energy",
        label: "Potential energy droppable area",
        text: "Potential Energy",
        answerId:"potential_energy",
      },    
    ]
  }   
};

export default data;
