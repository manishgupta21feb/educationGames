import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { togglePopup } from "../actions/index";

const mapState = (state) => ({
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: data.buttonStart,
  buttonContinueLabel: data.buttonStart,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(1));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
