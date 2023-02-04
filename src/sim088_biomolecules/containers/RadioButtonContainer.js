import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";
import { thunks, setIsContinueDisable } from "../actions";

const mapState = (state) => {
  let screenData = state.getCurrentScreenData.filter(
    (x) => x.isActive == true
  )[0];

  return {
    groupIdentifier: "group2",
    labelledby: "mcq-question-heading",
    radiobuttons:
      screenData.compoundData[screenData.currentScreen - 1].radioOptions,
    isPopupActive: !!state.currentPopup.length,
    selectedOption: state.selectedRadioOptions.id,
    disabled: state.getDisableDD[0] ? true : false,
  };
};

const mapDispatch = (dispatch) => ({
  onChange: (id) => {
    dispatch(thunks.onRadioClick(id));
    EventManager.broadcast("PRIMARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(RadioButton);
