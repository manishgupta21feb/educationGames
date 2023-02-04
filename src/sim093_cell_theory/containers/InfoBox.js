import { connect } from "react-redux";
import InofBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions/";

const mapState = (state) => {
  return {
    header: "",
    id: "infoBox",
    dialogType: "attention",
    buttonClasses: "right-arrow",
    buttonContinueText: data.startUpInfo.buttonContinueText,
    buttonContinueLabel: data.startUpInfo.buttonContinueLabel,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(1));
  },
});

export default connect(mapState, matchDispatch)(InofBox);
