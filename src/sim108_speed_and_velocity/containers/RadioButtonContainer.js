import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";
import { common, selectAnswerOption } from "../actions";

const mapState = (state) => {

  return {
    radiobuttons:
      data.mcqScreenoneData[state.selectedQuestion].questionData[state.setMcq]
        .radiobuttons,
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.selectedAnswerOption,
    disabled: state.submitAnswer,
 
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(selectAnswerOption(id));
    dispatch(common.toggleToastMessage(false));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);