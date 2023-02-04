import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common, updateResetGame } from "../actions";

const mapState = (state) => ({
  id: "infoDialogPT",
  dialogType: "attention",
  buttonClasses: "right-arrow",
  buttonContinueText: data.start,
});

const matchDispatch = (dispatch) => ({
  onClick: (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(1));
    dispatch(updateResetGame(false));
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
