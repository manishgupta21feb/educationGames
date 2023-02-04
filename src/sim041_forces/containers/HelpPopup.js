import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { ariaLiveText, togglePopup } from "../actions";

const mapState = (state) => ({
  id: "help1",
  dialogType: "attention",
  buttonContinueText: data.closeButton,
  buttonContinueLabel: data.closeButton,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("AUDIO_STARTSECONDARY_CLICK");
    dispatch(togglePopup(2));
    dispatch(ariaLiveText(" "));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
