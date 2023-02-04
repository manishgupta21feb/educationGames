import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks, common } from "../actions";

const mapState = (state) => ({
  text:
    state.setVisitedData.length == data.thumbnails.length
      ? data.buttonLabels.finish
      : data.buttonLabels.next,
  disabled:
    !state.selectedHotspot || state.sliderClicked || state.driveClicked <= 0,
  ariaHidden: !state.selectedHotspot,
  isPopupActive: !!state.currentPopup.length,
  classes: `toast-secondary-button positive ${
    state.setVisitedData.length == data.thumbnails.length ? "" : "right-arrow"
  }`,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.handleNextButtonClick());
    dispatch(common.setResetFocusState(true));
  },
});

export default connect(mapState, mapDispatch)(Button);
