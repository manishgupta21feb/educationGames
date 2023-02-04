import { connect } from "react-redux";
import FullView from "../components/activity/FullView";

import data from "../data";
import { thunk, updateForce } from "../actions/activity";

const mapState = (state) => ({
  force: state.force,
  scaleChange: state.scaleChange,
  currentPopup: state.currentPopup,
  forceApplied: state.forceApplied,
  selectedDirection: state.arrowDirection,
  questionDirection:
    (state.selectedQuestion && state.selectedQuestion.value) || "",
  selectedForce: state.selectedForce,
  instruction: data.activityInstructions,
  directionText: data.actionString.replace(
    "-1-",
    (state.selectedQuestion && state.selectedQuestion.value) || ""
  ),
  altTexts: data.activityAltTexts,
});

const mapDispatch = (dispatch) => ({
  animationEnd: () => {
    dispatch(thunk.animationEnd());
  },
});

export default connect(mapState, mapDispatch)(FullView);
