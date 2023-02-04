import { connect } from "react-redux";
import DialogBox from "../../app/components/DialogBox";

import data from "../data";
import { thunks, common, updateToastMsg } from "../actions";

const mapState = (state) => {
  return {
    resetDialog: true,
    id: "resetDialogPT",
    dialogType: "attention",
    resetButtonText: data.yes,
    buttonContinueText: data.no,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(2));
    dispatch(updateToastMsg(""));
    EventManager.broadcast("SECONDARY_CLICK");
  },
  onClick2: () => {
    dispatch(common.togglePopup(2));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.resetGame());
    dispatch(common.ariaLiveText(data.resetActivityText));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 200);
  },
});

export default connect(mapState, matchDispatch)(DialogBox);
