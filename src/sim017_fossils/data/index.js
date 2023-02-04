import dataen from "./data.en";
import dataes from "./data.es";

const data = { es: dataes, en: dataen };

export default data[ACTIVITY_CONFIG.lang];
