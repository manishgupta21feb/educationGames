import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  text: data.buttonLabels.next,
  isPopUpOpen: !!state.currentPopup.length,
  classes: "right-arrow toast-secondary-button positive",
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.toggleToastMessage(false));
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
    }, 100);
    dispatch(thunks.onNextButton());
  },
});
export default connect(mapState, mapDispatch)(Button);
