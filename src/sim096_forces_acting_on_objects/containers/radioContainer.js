import RadioButton from "../../app/components/RadioButton/index.jsx";
import { connect } from "react-redux";

import simData from "../data";
import { common, setCurrentFriction } from "../actions";

const mapState = (state) => {
  return {
    //----> From Data
    radiobuttons: simData.radioButtons,
    labelledby: "mcq-question-heading",

    //----> From Reducer
    selectedOption: state.getCurrentFriction, //state.getSelectedOption,
    isPopupActive: !!state.currentPopup.length,
    disabled: state.getRunningTest, //state.getAnswer,
  };
};

const mapDispatch = (dispatch) => ({});

export default connect(mapState, mapDispatch)(RadioButton);
