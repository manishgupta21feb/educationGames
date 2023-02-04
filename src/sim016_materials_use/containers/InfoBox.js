import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import InfoBox from "../../app/components/DialogBox";

import data from "../data";
import { common, audioStateStop } from "../actions";

const mapState = (state) => ({
  header: "",
  id: "infoBox",
  dialogType: "attention",
  buttonContinueText: data.buttonLabels.close,
  // buttonContinueLabel: data.buttonLabels.close,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(2));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(audioStateStop());
  },
});

export default connect(mapState, matchDispatch)(InfoBox);
