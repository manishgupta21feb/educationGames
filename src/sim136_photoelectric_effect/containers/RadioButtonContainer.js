import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import { thunk } from "../actions";

const mapStateToProps = (state) => {
  return {
    selectedOption: state.selectedControl,
    disabled: state.animationState || state.tripCount > 5,
    isPopupActive: !!state.currentPopup.length,
    resetBtnState: state.resetBtnState,
    labelledby: "instruction-text",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (id) => {
      EventManager.broadcast("PRIMARY_CLICK");
      dispatch(thunk.setSelectedControlOption(id));
    },
  };
};

const RadioButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioButton);

export default RadioButtonContainer;
