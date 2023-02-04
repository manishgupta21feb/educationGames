import { connect } from "react-redux";
import data from "../data";
import { togglePopup } from "../actions/";
import EventManager from "../../app/events/manager";
import InfoBox from "../../app/components/DialogBox";
// import { thunk } from "../actions/activity";

const mapState = (state) => ({
  id: "infomationBox",
  dialogType: "attention",
  buttonContinueText: data.buttonClose,
  buttonContinueLabel: data.buttonClose,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(togglePopup(4));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(InfoBox);
