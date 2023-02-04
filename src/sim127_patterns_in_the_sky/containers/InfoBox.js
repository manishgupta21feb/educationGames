import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common } from "../actions/";

const mapState = (state) => {
  return {
    id: "infoBox",
    dialogType: "attention",
    buttonContinueText: data.close,
    buttonContinueLabel: data.close,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(3));
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
