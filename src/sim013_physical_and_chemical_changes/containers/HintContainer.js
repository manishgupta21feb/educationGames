import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  id: "db4",
  dialogType: "attention",
  buttonContinueText: data.buttonClose,
  buttonContinueLabel: data.buttonClose,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(4));
    dispatch(common.setResetFocusState(false));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
