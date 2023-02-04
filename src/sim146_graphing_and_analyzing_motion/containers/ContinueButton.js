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
    text:
      state.screenVal == "three"
        ? state.visitedPage.length == 3
          ? data.buttonLabels.finish
          : data.buttonLabels.next
        : data.buttonLabels.continue,

    classes: `toast-secondary-button positive static ${
      state.screenVal == "three" && state.visitedPage.length == 3
        ? ""
        : "right-arrow"
    }`,
    disabled: state.continueState,
  };
};
const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.handleContinue());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);
