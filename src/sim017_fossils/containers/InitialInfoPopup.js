import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { ariaLiveText, togglePopup } from "../actions";

const mapState = (state) => ({
  id: "info1",
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: data.startButton,
  buttonContinueLabel: data.startButton,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(1));
    dispatch(ariaLiveText(" "));
    // dispatch(setActivityStart(true));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
