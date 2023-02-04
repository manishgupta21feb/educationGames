import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";

const mapState = (state) => {
  return {
    resetBtnState: state.resetBtnState,
    radiobuttons: data.equationOptions.screen0,
    isPopupActive: !!state.currentPopup.length,
  };
};

export default connect(mapState)(RadioButton);
