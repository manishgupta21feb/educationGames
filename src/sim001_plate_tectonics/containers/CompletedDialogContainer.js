import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../config/index";
import { common } from "../actions";

const mapState = (state) => ({
  id: "completedPT",
  dialogType: "positive",
  buttonClasses: "right-arrow",
  content: state.setFinalDialogMsg,
  buttonContinueText: data.continue,
});

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
