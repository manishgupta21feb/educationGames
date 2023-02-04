import { connect } from "react-redux";
import { thunk, setSelectedControl } from "../actions/activity";
import RadioButton from "../../app/components/RadioButton/index.jsx";

const mapStateToProps = (state) => {
  return {
    selectedOption: state.selectedControl,
    disabled: state.animationState || state.tripCount > 5,
    isPopupActive: !!state.currentPopup.length,
    resetBtnState: state.resetBtnState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: () => {
      dispatch(thunk.setSelectedControlOption());
    },
  };
};

const RadioButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RadioButton);

export default RadioButtonContainer;
