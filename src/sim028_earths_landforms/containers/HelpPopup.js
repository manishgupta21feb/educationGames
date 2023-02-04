import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  id: "help1",
  dialogType: "attention",
  buttonContinueText: data.buttonLabels.close,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(2));
    dispatch(common.ariaLiveText(" "));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
