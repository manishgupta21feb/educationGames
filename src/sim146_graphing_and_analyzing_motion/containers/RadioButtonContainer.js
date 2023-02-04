import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";
import { common, selectAnswerOption, setSubmitBtnState } from "../actions";

const mapState = (state) => {
  return {
    radiobuttons: state.vehicleData.radioOptions,
    labelledby: "mcq-custome",
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.selectedAnswerOption,
    disabled: state.correctAnswerMcq,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(selectAnswerOption(id));
    dispatch(setSubmitBtnState(false));

    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
