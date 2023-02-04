import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import { togglePopup } from "../actions";
import DialogBox from "../../app/components/DialogBox";

const mapState = (state) => {
  const msg = state.appData.messages["use"];
  return {
    id: "db5",
    dialogType: "attention",
    buttonClasses: "right-arrow",
    buttonContinueText: msg.buttonText,
    buttonContinueLabel: msg.buttonText,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(5));
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
