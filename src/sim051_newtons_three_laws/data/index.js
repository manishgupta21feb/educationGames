import dataEn from "./data.en";
import dataEs from "./data.es";
import { getSimLanguage } from "../../app/helpers";

const data = {
  en: dataEn,
  es: dataEs,
};

export const screenData = [
  {
    id: 0,
    component: "LaunchScreen",
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

export default data[getSimLanguage()];
