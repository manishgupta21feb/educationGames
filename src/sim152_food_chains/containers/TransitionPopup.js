import { connect } from "react-redux";
import TransitionPopup from "../../app/components/CompletionScreen";
import data from "../data";
import {
  thunk,
  common,
  secondScreen,
  changeScreen,
  clearVisitedButtons,
} from "../actions";

const mapState = (state) => ({
  ...data.transitionPopup,
  id: "transitionPopup",
});

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      // dispatch(thunk.onNextBtnClickOfMCQ(true));
      dispatch(common.toggleToastMessage(false));
      dispatch(common.updateResetBtnState(false));
      dispatch(common.setResetFocusState(true));
      EventManager.broadcast("SECONDARY_CLICK");
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      dispatch(common.togglePopup(5));
      dispatch(changeScreen(true));
      dispatch(clearVisitedButtons());
    },
  };
};

export default connect(mapState, matchDispatch)(TransitionPopup);
