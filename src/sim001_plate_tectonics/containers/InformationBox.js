import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import InfoBox from "../../app/components/DialogBox";

import TextData from "../config/index";
import { common } from "../actions";

const mapState = (state) => ({
  id: "infoPT",
  dialogType: "attention",
  buttonContinueText: TextData.close,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(5));
  },
});

export default connect(mapState, matchDispatch)(InfoBox);
