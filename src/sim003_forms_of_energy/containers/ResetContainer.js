import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import {
  common,
  setVideoState,
  toggleQuestion,
  selectQuestion,
  resetVisitedThumbnails,
} from "../actions";

const mapState = (state) => ({
  id: "db10",
  header: "",
  resetDialog: true,
  dialogType: "attention",
  resetButtonText: data.buttonLabels.yes,
  buttonContinueText: data.buttonLabels.no,
});

const mapDispatch = (dispatch) => ({
  onClick: (id) => {
    dispatch(common.togglePopup(6));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onClick2: (id) => {
    dispatch(selectQuestion(null));
    dispatch(common.updateResetBtnState(true));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(6));
    dispatch(common.togglePopup(1));
    dispatch(toggleQuestion(true));
    dispatch(setVideoState(false));
    dispatch(resetVisitedThumbnails());
    dispatch(common.ariaLiveText(data.resetLiveText));
    TincanManager.data.percentage = 0;
    TincanManager.resetTincanData();
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 400);
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
