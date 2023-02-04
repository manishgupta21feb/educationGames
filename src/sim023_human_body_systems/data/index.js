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
    component: "LaunchScreenContainer",
  },
  {
    id: 1,
    component: "DepartmentScreenContainer",
  },
];

export default data[getSimLanguage()];
