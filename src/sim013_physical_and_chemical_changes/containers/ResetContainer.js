import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  id: "db10",
  resetDialog: true,
  dialogType: "attention",
  resetBtnState: state.resetBtnState,
  resetButtonText: data.messages[0].resetButtonText,
  buttonContinueText: data.messages[0].buttonContinueText,
});

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    dispatch(common.togglePopup(6));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onClick2: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
    dispatch(thunks.resetActivity(false));
    dispatch(common.ariaLiveText(data.resetLiveText));
    dispatch(common.updateResetBtnState(true));
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
