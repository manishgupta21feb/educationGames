import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const check = state.visitedResources.length == data.resources.length - 1;
  return {
    text: check ? data.finish : data.continue,
    isPopupActive: !!state.currentPopup.length,
    classes: `toast-secondary-button positive ${check ? "" : "right-arrow"}`,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(thunks.moveToNextQuestion());
  },
});

export default connect(mapState, matchDispatch)(Button);