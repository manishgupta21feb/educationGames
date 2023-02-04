import { connect } from "react-redux";
import ButtonNext from "../../app/components/Button";

import data from "../data";
import {
  thunk,
  setViewFrame,
  setSubScreen,
  setSelectedOption,
  common,
} from "../actions";

const mapState = (state) => {
  const finish = state.visitedHotspotBtn.length == 6 && state.countNext == 7;

  return {
    data: data,
    classes: `toast-secondary-button positive ${finish ? "" : "right-arrow"} `,
    text: finish ? data.buttonLabels.finish : data.buttonLabels.next,
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => {
  return {
    onClick: () => {
      dispatch(thunk.nextButtonHandler());
      dispatch(setSelectedOption(""));
    },
  };
};

export default connect(mapState, matchDispatch)(ButtonNext);
