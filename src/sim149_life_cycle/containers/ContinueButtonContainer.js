import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common, thunks } from "../actions";

const mapState = (state) => {
  const finish = state.visitedHotspotBtn.length == 4;
  const pageCount = state.count == 1;
  const sq = state.selectedQuestion.id == "frog";

  return {
    text:
      !state.getScreen && sq
        ? data.buttonLabels.finish
        : data.buttonLabels.continue,
    classes: `toast-secondary-button static-btn positive ${
      !state.getScreen && sq ? "" : "right-arrow"
    } `,
    isPopupActive: !!state.currentPopup.length,
    disabled: state.getScreen ? !finish : state.matchedItems.length != 4,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.handleContinue());
  },
});

export default connect(mapState, matchDispatch)(Button);
