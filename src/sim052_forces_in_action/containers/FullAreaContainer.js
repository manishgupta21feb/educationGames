import FullArea from "../components/FullArea";
import { connect } from "react-redux";
import EventManager from "../../app/events/manager";

import {
  common,
  setLevel,
  setViewPlayed,
  thunk,
  setActivityStarted,
} from "../actions";

const mapState = (state) => {
  const data = state.getData;
  return {
    //----> From Data
    views: data.view.map((item) => item.source),

    //----> From Reducer
    isPopupActive: !!state.currentPopup.length,
    activityStarted: state.getActivityStarted,
  };
};

const mapDispatch = (dispatch) => ({
  btnSound: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.updateResetBtnState(false));
    dispatch(common.setResetFocusState(true));
  },
  levelMcq: () => {
    dispatch(setLevel(2));
  },
  viewHandler: (evt) => {
    if (evt.target.id == "tugOfWar") {
      dispatch(setLevel(1));
      dispatch(setViewPlayed("tugOfWar"));
    } else {
      dispatch(setLevel(2));
      dispatch(setViewPlayed("ballForce"));
    }
    dispatch(setActivityStarted(false));
  },
});

export default connect(mapState, mapDispatch)(FullArea);
