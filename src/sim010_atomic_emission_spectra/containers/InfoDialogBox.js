import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  id: "infoDialogPT",
  dialogType: "attention",
  buttonContinueText: data.buttonLabels.close,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(3));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
