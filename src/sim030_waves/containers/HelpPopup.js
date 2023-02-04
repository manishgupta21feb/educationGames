import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import InofBox from "../../app/components/DialogBox";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => {
  return {
    id: "helpPopup",
    dialogType: "attention",
    buttonContinueText: data.buttonLabels.close,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
  },
});

export default connect(mapState, matchDispatch)(InofBox);
