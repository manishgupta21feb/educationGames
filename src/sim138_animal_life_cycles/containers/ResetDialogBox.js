import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  id: "db10",
  header: "",
  resetDialog: true,
  dialogType: "attention",
  resetBtnState: state.resetBtnState,
  resetButtonText: data.buttonLabels.yes,
  buttonContinueText: data.buttonLabels.no,
});

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    dispatch(common.togglePopup(6));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onClick2: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
    dispatch(thunks.setQuestion());
    dispatch(thunks.resetActivity(false));
    dispatch(common.ariaLiveText(data.resetLiveText));
    dispatch(common.updateResetBtnState(true));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 300);
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
