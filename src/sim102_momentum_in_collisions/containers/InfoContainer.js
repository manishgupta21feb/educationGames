import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import InfoBox from "../../app/components/DialogBox";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  id: "db4",
  dialogType: "attention",
  buttonContinueText: data.buttonLabels.close,
  buttonContinueLabel: data.buttonLabels.close,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(4));
    dispatch(common.setResetFocusState(false));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(InfoBox);
