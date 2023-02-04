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
    component: "PyramidActivityContainer",
  },
  {
    id: 1,
    component: "PyramidActivityComplete",
  },
  {
    id: 2,
    component: "McqAcivityConatainer",
  },
];
