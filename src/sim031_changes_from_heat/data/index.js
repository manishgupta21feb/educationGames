import dataEn from "./data.en";
import dataEs from "./data.es";

const data = {
  en: dataEn,
  es: dataEs,
};

export default data[ACTIVITY_CONFIG.lang];
