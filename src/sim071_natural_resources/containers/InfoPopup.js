import { connect } from "react-redux";
import InofBox from "../../app/components/DialogBox";

import data from "../data";
import { common, secondScreen } from "../actions";

const mapState = (state) => {
  return {
    header: "",
    id: "infoBox",
    dialogType: "attention",
    buttonContinueText: data.buttonLabels.close,
    ...data.dialogData.info,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
  },
});

export default connect(mapState, matchDispatch)(InofBox);
