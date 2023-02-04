import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import data from "../data";
import { common, selectAnswerOption } from "../actions";

const mapState = (state) => {
  
  const activeHotspot = state.hotspots.filter(
    (a) =>a.id==state.selectedHotspot)[0];
    return {
    radiobuttons: data.hotspots[state.questionIndexReducer].question[state.questionNumberReducer].options,
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.selectedAnswerOption,
    disabled: state.answerSubmitted && state.submittedAnswer,
    resetBtnState: state.resetBtnState,
    labelledby:"mcq-question-heading",
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(selectAnswerOption(id));
    dispatch(common.toggleToastMessage(false));
    dispatch(common.updateResetBtnState(false));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
