import Button from "../../app/components/Button";
import { connect } from "react-redux";
import data from "../data";
import { common, thunks } from "../actions";

const mapStateToProps = (state) => {
  const preventAutoHide = state.currentPopup.indexOf(3) >= 0;

  return {
    preventAutoHide,
    hideImmediately: state.showToastMessage,
    isPopupActive: !!state.currentPopup.length,
    disabled: state.continueButton,
    text: data.buttonLabels.continue,
    classes: `toast-secondary-button static-btn positive right-arrow`,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onContinue());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
