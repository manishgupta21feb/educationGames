import { connect } from "react-redux";
import FinishBox from "../../app/components/DialogBox";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  dialogType: "positive",
  id: "finidshBox",
  header: data.finsihBoxHeader,
  content: data.finishBoxContent,
  buttonContinueText: data.buttonReset,
  buttonContinueLabel: data.buttonReset,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.resetActivity(true));
  },
});

export default connect(mapState, matchDispatch)(FinishBox);
