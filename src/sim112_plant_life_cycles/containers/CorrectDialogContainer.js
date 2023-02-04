import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { common } from "../actions";
import EventManager from "../../app/events/manager";

const mapState = (state) => {
  return {
    // ...data.dialogCorrect,
    id: "5",
    header: "",
    dialogType: "positive",
    buttonClasses: "right-arrow",
    buttonContinueText: data.buttonLabels.continue,
    buttonContinueLabel: data.buttonLabels.continue,
    // resetBtnState: state.resetBtnState,
    // content: state.showStatic ? "" : content[0].correctText,
  };
};

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(5));
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, mapDispatch)(DialogBox);
