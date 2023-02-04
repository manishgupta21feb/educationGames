import { connect } from "react-redux";
import TransitionPopup from "../../app/components/CompletionScreen";
import data from "../data";
import { thunk, common, secondScreen } from "../actions";

const mapState = (state) => ({
  ...data.transitionPopup,
  id: "transitionPopup",
});

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunk.onNextBtnClickOfMCQ(true));
      dispatch(common.toggleToastMessage(false));
      dispatch(common.updateResetBtnState(false));
      dispatch(common.setResetFocusState(true));
      EventManager.broadcast("SECONDARY_CLICK");
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    },
  };
};

export default connect(mapState, matchDispatch)(TransitionPopup);
