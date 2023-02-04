import { connect } from "react-redux";
import Screen2 from "../components/Screens/Screen2";

import data from "../data";

const mapState = (state) => {
  return {
    periodicLables: data.periodicTableLables,
    isPopupActive: !!state.currentPopup.length,
    headingScreen2: data.headingScreen2,
  };
};

export default connect(mapState)(Screen2);
