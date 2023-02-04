import { connect } from "react-redux";
import { common } from "../actions";
import DialogBox from "../../app/components/DialogBox";
import data from "../data";
import EventManager from "../../app/events/manager";

const mapStateToProps = (state) => ({
  id: "startupInfo",
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: data.StartUpInfo.buttonContinueText,
  buttonContinueLabel: data.StartUpInfo.buttonContinueLabel,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.ariaLiveText(""));
    dispatch(common.togglePopup(1));
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);
