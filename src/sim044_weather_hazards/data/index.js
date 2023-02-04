import dataEn from "./data.en";
import dataEs from "./data.es";
import { getSimLanguage } from "../../app/helpers";

const data = { es: dataEs, en: dataEn };

export const screenData = [
  {
    id: 0,
    component: "Screen1",
  },
  {
    id: 1,
    component: "Screen2",
  },
];

export default data[getSimLanguage()];
