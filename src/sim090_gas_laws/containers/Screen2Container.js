import { connect } from "react-redux";
import Screen2Screen from "../components/ViewArea/Screen2";

import data from "../data";
import { thunk, setViewFrame, setVisitedBtn, common } from "../actions";

const mapState = (state) => {
  return {
    data: data,
    isPopupActive: !!state.currentPopup.length,
    viewFrame: state.viewFrame,
    visitedQue: state.visitedHotspotBtn,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: (id) => {
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(setVisitedBtn(id));
      dispatch(setViewFrame(id));
      dispatch(thunk.setQuestion());
      dispatch(common.setResetFocusState(true));
    },
  };
};

export default connect(mapState, matchDispatch)(Screen2Screen);
