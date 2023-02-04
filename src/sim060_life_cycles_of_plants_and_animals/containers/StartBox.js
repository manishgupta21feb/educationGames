import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    id: "startBox",
    dialogType: "attention",
    buttonClasses: "right-arrow",
    buttonContinueText: data.buttonLabels.start,
    buttonContinueLabel: data.buttonLabels.start,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(1));
    dispatch(common.ariaLiveText(" "));
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
