import { connect } from "react-redux";
import InfoBox from "../../app/components/DialogBox";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  header: "",
  id: "infoBox",
  dialogType: "attention",
  buttonContinueText: data.buttonClose,
  buttonContinueLabel: data.buttonClose,
  disabled: !state.startSimulation,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.onInfoClose());
  },
});

export default connect(mapState, matchDispatch)(InfoBox);
