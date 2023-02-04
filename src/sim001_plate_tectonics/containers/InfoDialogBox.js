import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import TextData from "../config/index";
import { common } from "../actions";

const mapState = (state) => ({
  id: "infoDialogPT",
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: TextData.start,
});

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
