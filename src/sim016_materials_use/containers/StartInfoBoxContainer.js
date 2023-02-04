import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import StartInfo from "../../app/components/DialogBox";

import data from "../data";
import { common, thunks, toggleContinue } from "../actions/index";

const mapStateToProps = (state) => ({
  id: "1",
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: data.buttonLabels.start,
  // buttonContinueLabel: data.buttonLabels.start,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(1));
    dispatch(toggleContinue(true)); //show continue button
    dispatch(thunks.toggleAudioBtn());
    dispatch(common.ariaLiveText(" "));
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("SCREEN_TEXT");
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(StartInfo);
