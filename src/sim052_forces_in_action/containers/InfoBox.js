import { connect } from "react-redux";
import InofBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import { common } from "../actions";

const mapState = (state) => {
  const data = state.getData;
  return {
    header: "",
    id: "infoBox",
    dialogType: "help",
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
