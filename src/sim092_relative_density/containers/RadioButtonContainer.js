import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import { common, thunks, helper } from "../actions";

const mapState = (state) => {
  return {
    //radiobuttons: state.selectedQuestion.options,
    radiobuttons: state.getOptionList,
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.selectedAnswerOption,
    disabled: state.submitAnswer,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.selectAnswerOption(id));
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
