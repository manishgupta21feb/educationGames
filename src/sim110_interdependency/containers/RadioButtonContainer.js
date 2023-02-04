import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";
import { common, selectAnswerOption, setSubmitBtnDisabled } from "../actions";

const mapState = (state) => {
  return {
    radiobuttons: data.radioOptions,
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.selectedAnswerOption,
    disabled: state.submitAnswerMcq,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(selectAnswerOption(id));
    dispatch(setSubmitBtnDisabled(false));

    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
