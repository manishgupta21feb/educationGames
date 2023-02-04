import Question from "../components/Question";
import EventManager from "../../app/events/manager";
import { connect } from "react-redux";
import { thunk, common, onVideoEnded } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    //----> From Data
    continueBtnText: data.buttonLabels.continue,

    //----> From Reducer
    showContinueBtn: state.showContinueBtnReducer,
  };
};

const mapDispatch = (dispatch) => ({
  onContinueHandler: () => {
    EventManager.broadcast("STOP_ALL");
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(onVideoEnded(false));
      dispatch(thunk.continueHandler());
    }, 150);
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, mapDispatch)(Question);
