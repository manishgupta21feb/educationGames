import dataen from "./data.en";
import dataes from "./data.es";
import { getSimLanguage } from "../../app/helpers";

const data = { es: dataes, en: dataen };

export default data[getSimLanguage()];
