import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import data from "../data";
import { common, setStartAgain, selectAnswerOption } from "../actions";

const mapState = (state) => {
  return {
    radiobuttons: data.equationOptions,
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.selectedAnswerOption,
    disabled: state.submitAnswer,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(selectAnswerOption(id));
    dispatch(common.updateResetBtnState(false));
    dispatch(common.toggleToastMessage(false));
    // dispatch(setStartAgain(true));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
