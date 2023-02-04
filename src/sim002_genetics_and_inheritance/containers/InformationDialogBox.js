import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import { togglePopup } from "../actions";
import DialogBox from "../../app/components/DialogBox";

const mapState = (state) => {
  const info = state.appData.messages["info"];
  return {
    id: "db1",
    dialogType: "attention",
    buttonContinueText: info.buttonText,
    buttonContinueLabel: info.buttonText,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(2));
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
