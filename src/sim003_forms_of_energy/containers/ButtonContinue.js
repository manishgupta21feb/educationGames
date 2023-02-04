import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import {
  common,
  setVideoState,
  toggleQuestion,
  selectQuestion,
} from "../actions";
import data from "../data";

const mapState = (state) => ({
  classes: "right-arrow primary",
  text: data.buttonLabels.continue,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(toggleQuestion(true));
    dispatch(setVideoState(false));
    dispatch(selectQuestion(null));
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
    }, 200);
  },
});

export default connect(mapState, matchDispatch)(Button);
