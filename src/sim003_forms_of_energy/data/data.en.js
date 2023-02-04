import commonConfig from "../../app/data/data.en";
import basketball from "../assets/videos/basket_ball.mp4";
import bicycle from "../assets/videos/bicycle.mp4";
import waterfall from "../assets/videos/waterfall.mp4";
import Marquee from "../assets/videos/marquee.mp4";
import electric_meter from "../assets/videos/electric_meter.mp4";
import Kinetic_energy_graph from "../assets/videos/Kinetic_energy_graph.mp4";
import light_meter from "../assets/videos/light_meter.mp4";
import sound_energy from "../assets/videos/sound_energy.mp4";
import sound_energy1 from "../assets/videos/sound_energy1.mp4";

const data = {
  thumbnails: [
    {
      srNo: "0",
      id: "waterfall",
      label: "Waterfall",
      questionId: "waterfall",
      videoSrc: waterfall, //sound and kinetic
      alt: "A large river flowing over the edge of a cliff, making lots of noise as it lands in more water below.",
      associatedEnergy: ["sound_energy1", "kinetic_energy_graph"],
    },
    {
      srNo: "1",
      id: "basketball",
      label: "Basketball",
      questionId: "basketball",
      videoSrc: basketball, //motion, light,sound, electrical
      alt: "A student throws a ball at a basketball hoop while lights flash and a crowd cheers.",
      associatedEnergy: [
        "kinetic_energy_graph",
        "electric_meter",
        "sound_energy",
        "light_meter",
      ],
    },
    {
      srNo: "2",
      id: "bicycle",
      label: "Bicycle",
      questionId: "bicycle",
      videoSrc: bicycle, //sound and kinetic
      alt: "A bicycle with the pedals turning, which makes the wheels turn as well.",
      associatedEnergy: ["sound_energy1", "kinetic_energy_graph"],
    },
    {
      srNo: "3",
      id: "marquee",
      label: "Marquee",
      questionId: "marquee",
      videoSrc: Marquee, //light, electrical
      alt: "A big movie marquee sign with lights flashing so people can see the name of the latest movie.",
      associatedEnergy: ["light_meter", "electric_meter"],
    },
  ],
  energyData: [
    {
      srNo: "0",
      id: "Kinetic",
      label: "Kinetic Energy",
      answerId: "kinetic_energy_graph",
      AnsAnimation: Kinetic_energy_graph,
    },
    {
      srNo: "1",
      id: "Sound",
      label: "Sound Energy",
      answerId: "sound_energy",
      AnsAnimation: sound_energy,
    },
    {
      srNo: "2",
      id: "Sound",
      label: "Sound Energy",
      answerId: "sound_energy1",
      AnsAnimation: sound_energy1,
    },
    {
      srNo: "3",
      id: "Light",
      label: "Light energy",
      answerId: "light_meter",
      AnsAnimation: light_meter,
    },
    {
      srNo: "4",
      id: "Electrical",
      label: "Electrical Energy",
      answerId: "electric_meter",
      AnsAnimation: electric_meter,
    },
  ],

  videoPlayState: "Video is playing.",
  videoStopState: "Video is stopped.",
  resetLiveText: commonConfig.resetLiveText,
  resetPopupText: commonConfig.resetPopupText,
  energiesHeading: "Energies associated with a",
  buttonLabels: { ...commonConfig.buttonLabels },
  infoContent:
    "Play each activity, and see the associated energies on the data panel.",
  videosHeading:
    "Play an activity to find out the energies it produces on the data panel.",
  initialInfoDialog: {
    heading: "Play each activity, and look at what happens on the data panel.",
    list: [
      "Light Energy",
      "Sound Energy",
      "Electrical Energy",
      "Kinetic Energy",
    ],
  },
};
export default data;
