import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data/index";
import { thunks, common } from "../actions";

const mapState = (state) => {
  return {
    text:
      state.screenCount == 2
        ? data.buttonLabels.finish
        : data.buttonLabels.continue,
    isPopUpOpen: !!state.currentPopup.length,
    classes:
      state.screenCount == 2
        ? "toast-secondary-button positive"
        : "right-arrow toast-secondary-button positive",
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.updateResetBtnState(false));
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
      dispatch(thunks.nextButtonClick());
    }, 100);
  },
});

export default connect(mapState, mapDispatch)(Button);
