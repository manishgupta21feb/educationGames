import dataEn from "./data.en";
import dataEs from "./data.es";
import { getSimLanguage } from "../../app/helpers";

const data = {
  en: dataEn,
  es: dataEs,
};

export default data[getSimLanguage()];

export const screenData = [
  {
    id: 0,
    component: "LaunchScreenContainer",
  },
  {
    id: 1,
    component: "VolcanicScreenContainer",
  },
  {
    id: 2,
    component: "WildfireScreenContainer",
  },
  {
    id: 3,
    component: "VolcanicAnimationScreenContainer",
  },
  {
    id: 4,
    component: "WildfireAnimationScreenContainer",
  },
];
