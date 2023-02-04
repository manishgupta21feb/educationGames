import { connect } from "react-redux";
import ButtonContinue from "../../app/components/Button";

import data from "../data";
import { thunk, viewScreen, setSubScreen, common } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    text: data.buttonLabels.continue,
    classes: "right-arrow toast-secondary-button positive",
    viewScreen: state.viewScreen,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunk.continueBtnHandler());
      dispatch(common.setResetFocusState(true));
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    },
  };
};

export default connect(mapState, matchDispatch)(ButtonContinue);
