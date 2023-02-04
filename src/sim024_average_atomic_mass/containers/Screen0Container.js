import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import Screen0 from "../components/Screens/Screen0";
import { thunks } from "../actions";

import data from "../data";
import { setResetFocusState, updateResetBtnState, thunk } from "../actions/activity";
import { ariaLiveText } from "../../app/actions";

const mapState = (state) => ({
  isPopupActive: !!state.currentPopup.length,
  data,
  instructionText: data.instructionText,
  visited: state.visited,
});

const mapDispatch = (dispatch) => ({
  changeScreen: (val) => {
    dispatch(thunks.onChangeScreen(val));
    EventManager.broadcast("PRIMARY_CLICK");
  },
  updateResetBtnState: (val) => {
    dispatch(updateResetBtnState(val));
    dispatch(setResetFocusState(true))
  },
  setVisited: (val) => {
    dispatch(thunk.updateVisited(val));
    dispatch(ariaLiveText(data.onDroppedLiveText.replace("-1-", val)));
    setTimeout(() => {
      dispatch(ariaLiveText(" "));
    }, 300);
  },
});

export default connect(mapState, mapDispatch)(Screen0);