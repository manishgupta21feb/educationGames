import configEn from "./config.en";
import configEs from "./config.es";

const config = {
  en: configEn,
  es: configEs,
};

export default config[ACTIVITY_CONFIG.lang];
