import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  return {
    groupIdentifier: "group1",
    radiobuttons: data.shapesOptions,
    labelledby: "mcq-question-heading",
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.selectedShapeAnswerOption,
    disabled: state.showNextBtn || state.disableShapeRadio,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunk.selectShapeAnswerOption(id));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
