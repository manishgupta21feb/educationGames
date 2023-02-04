import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import { common, setSelectedOption, setSubmitBtnVisibility } from '../actions';

import data from "../data";

const mapState = (state) => {
  const index = state.getQuestionNumber;
  let isDisabled = false;
  if(index == 4 || index == 6){
    isDisabled = true;
  }
  if(state.getVideoStart){
    isDisabled = false;
  }

  return {
    //----> From Data
    radiobuttons: data.radioButtons[state.getQuestionNumber],
    labelledby: "mcq-question-heading",

    //----> From Reducer
    selectedOption: state.getSelectedOption,
    isPopupActive: !!state.currentPopup.length,
    disabled: isDisabled || state.getAnswer,
  }
};

const matchDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(setSelectedOption(id));
    dispatch(setSubmitBtnVisibility(true));
    dispatch(common.toggleToastMessage(false));
    dispatch(common.updateResetBtnState(false));
  },
});

export default connect(mapState, matchDispatch)(RadioButton);
