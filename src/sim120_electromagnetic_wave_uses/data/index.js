import dataEn from "./data.en";
import dataEs from "./data.es";

const data = {
  en: dataEn,
  es: dataEs,
};

export const screenData = [
  {
    id: 0,
    component: "LaunchScreenContainer",
  },
  {
    id: 1,
    component: "WaveScreenContainer",
  }
];

export default data[ACTIVITY_CONFIG.lang];
