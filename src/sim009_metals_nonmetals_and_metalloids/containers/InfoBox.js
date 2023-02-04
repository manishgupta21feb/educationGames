import { connect } from "react-redux";
import InfoBox from "../../app/components/DialogBox";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  id: "2",
  dialogType: "attention",
  buttonContinueText: data.buttonLabels.close,
  buttonContinueLabel: data.buttonLabels.close,
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(2));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(InfoBox);
