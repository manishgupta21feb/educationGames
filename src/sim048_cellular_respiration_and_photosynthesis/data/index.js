import dataEn from "./data.en";
import dataEs from "./data.es";

const data = {
  en: dataEn,
  es: dataEs,
};

export const screenData = [
  {
    id: 0,
    component: "Screen0Container",
  },
  {
    id: 1,
    component: "Screen1Container",
  },
  {
    id: 2,
    component: "Screen2Container",
  },
];

export default data[ACTIVITY_CONFIG.lang];
