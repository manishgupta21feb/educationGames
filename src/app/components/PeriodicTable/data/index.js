import dataEn from "./data.en";
import dataEs from "./data.es";
import { getSimLanguage } from "../../../helpers";

const data = {
  en: dataEn,
  es: dataEs,
};

export default data[getSimLanguage()];
