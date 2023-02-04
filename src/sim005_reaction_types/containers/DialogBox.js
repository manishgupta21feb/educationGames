import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common, selectAnswerOption } from "../actions";

const mapState = (state) => ({
  content: null,
  id: "dialogBox",
  dialogType: "warning",
  header: data.dialogBoxHeader,
  buttonContinueText: data.buttonTryAgain,
  buttonContinueLabel: data.buttonTryAgain,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(2));
    dispatch(selectAnswerOption(""));
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
