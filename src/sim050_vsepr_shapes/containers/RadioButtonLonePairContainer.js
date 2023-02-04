import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => {
  return {
    groupIdentifier: "group2",
    labelledby: "question2-para",
    radiobuttons: data.loneOptions,
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.selectedLonePairAnswerOption,
    disabled: state.showNextBtn || state.disableLonePairRadio,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunk.selectLonePairAnswerOption(id));
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
