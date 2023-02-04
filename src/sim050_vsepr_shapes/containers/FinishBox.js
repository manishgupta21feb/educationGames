import { connect } from "react-redux";
import FinishBox from "../../app/components/DialogBox";

import data from "../data";
import { thunk } from "../actions";

const mapState = (state) => ({
  id: "finidshBox",
  dialogType: "positive",
  header: data.finsihBoxHeader,
  content: data.finishBoxContent,
  buttonContinueText: data.buttonReset,
  buttonContinueLabel: data.buttonReset,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunk.resetActivity(true));
  },
});

export default connect(mapState, matchDispatch)(FinishBox);
