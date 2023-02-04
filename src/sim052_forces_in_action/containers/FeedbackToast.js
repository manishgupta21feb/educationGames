import { connect } from "react-redux";
import InofBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import { common, thunk } from "../actions";

const mapState = (state) => {
  const data = state.getData;
  return {
    header: "",
    id: "tugToastBox",
    dialogType: state.getCurrentVideo == 11 ? "positive" : "warning",
    buttonContinueText: data.buttonLabels.continue,
    buttonContinueLabel: data.buttonLabels.continue,
    buttonClasses: "right-arrow",
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
    dispatch(thunk.resetTugWar());
  },
});

export default connect(mapState, matchDispatch)(InofBox);
