import { connect } from "react-redux";
import InofBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    header: "",
    id: "instructionBox",
    dialogType: "attention",
    buttonContinueText: data.buttonLabels.close,
    buttonContinueLabel: data.buttonLabels.close,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
  },
});

export default connect(mapState, matchDispatch)(InofBox);
