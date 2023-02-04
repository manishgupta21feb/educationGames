import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  return {
    text: data.buttonNext,
    classes: "right-arrow toast-secondary-button positive",
    isPopupActive: !!state.currentPopup.length,
    disabled: state.switchState ? false : true,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onNextButton());
    dispatch(thunks.changeScreen());
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(Button);
