import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import InfoBox from "../../app/components/DialogBox";

import data from "../data";
import { togglePopup } from "../actions/index";

const mapState = (state) => ({
  id: "db4",
  dialogType: "attention",
  content: data.infoContent,
  buttonContinueText: data.buttonClose,
  buttonContinueLabel: data.buttonClose,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(3));
  },
});

export default connect(mapState, matchDispatch)(InfoBox);
