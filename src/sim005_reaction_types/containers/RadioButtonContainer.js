import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";
import { common, selectAnswerOption } from "../actions";

const mapState = (state) => {
  return {
    disabled: state.submitAnswer,
    radiobuttons: data.equationOptions,
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.selectedAnswerOption,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(selectAnswerOption(id));
    dispatch(common.updateResetBtnState(false));
    dispatch(common.toggleToastMessage(false));
    // dispatch(common.setStartAgain(true));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
