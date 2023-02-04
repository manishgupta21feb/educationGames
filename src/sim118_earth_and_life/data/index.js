import dataEn from "./data.en";
import dataEs from "./data.es";
import { getSimLanguage } from "../../app/helpers";

const data = {
  en: dataEn,
  es: dataEs,
};

/* export const screenData = [
  {
    id: 0,
    component: "Screen0Container",
  },
  {
    id: 1,
    component: "Screen1Container",
  },
]; */

export default data[getSimLanguage()];
