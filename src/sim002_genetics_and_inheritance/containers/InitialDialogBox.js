import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import { togglePopup } from "../actions";
import DialogBox from "../../app/components/DialogBox";

const mapState = (state) => {
  const initialInfo = state.appData.messages["initialInfo"];
  return {
    id: "db2",
    dialogType: "attention",
    buttonClasses: "right-arrow",
    buttonContinueText: initialInfo.buttonText,
    buttonContinueLabel: initialInfo.buttonText,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(1));
    dispatch(togglePopup(5));
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
