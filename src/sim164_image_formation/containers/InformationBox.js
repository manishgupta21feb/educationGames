import { connect } from "react-redux";
import InfoBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  id: "db4",
  dialogType: "attention",
  buttonContinueText: data.buttonLabels.close,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(4));
    dispatch(common.setResetFocusState(false));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(InfoBox);
