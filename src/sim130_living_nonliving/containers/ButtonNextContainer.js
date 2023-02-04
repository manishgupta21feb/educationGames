import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common, thunks, selectAnswerOption, setStatic } from "../actions";

const mapState = (state) => {
  const finish = state.visitedHotspotBtn.length == 11;

  return {
    text: finish ? data.buttonLabels.finish : data.buttonLabels.next,
    classes: `toast-secondary-button static-btn positive ${
      finish ? "" : "right-arrow"
    } `,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onFinishButton());

    dispatch(common.toggleToastMessage(false));
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, matchDispatch)(Button);
