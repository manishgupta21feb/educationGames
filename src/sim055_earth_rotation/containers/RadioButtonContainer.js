import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import { common, setSelectedOption, setRadioBtnChecked } from '../actions';

import data from "../data";

const mapState = (state) => {
  return {
    //----> From Data
    radiobuttons: data.radioButtons[state.getQuestionNumber],
    labelledby: "mcq-question-heading",

    //----> From Reducer
    selectedOption: state.getSelectedOption,
    isPopupActive: !!state.currentPopup.length,
    disabled: state.getRadioBtnChecked,
  }
};

const matchDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(setSelectedOption(id));
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, matchDispatch)(RadioButton);
