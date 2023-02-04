import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common, thunks, selectAnswerOption, updateToastMsg } from "../actions";

const mapState = (state) => {
  const finish = state.matchedItems.length == 5;
  return {
    text: finish ? data.buttonLabels.finish : data.buttonLabels.next,
    isPopupActive: !!state.currentPopup.length,
    classes: `toast-secondary-button positive ${finish ? "" : "right-arrow"} `,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.onNextButton());
    dispatch(updateToastMsg(""));
    dispatch(common.toggleToastMessage(false));
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, matchDispatch)(Button);
