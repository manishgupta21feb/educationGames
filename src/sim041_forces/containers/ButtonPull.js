import { connect } from "react-redux";
import Button from "../../app/components/Button";
import { setArrowDirection, thunk } from "../actions/activity";

const mapState = (state) => ({
  text: "Pull",
  disabled: !!state.currentPopup.length || !!state.arrowDirection,
  classes: `primary-toggle-button ${
    state.arrowDirection == "pull" ? "selected" : ""
  }`,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(setArrowDirection("pull"));
    dispatch(thunk.submitAnswer("pull"));
  },
});

export default connect(mapState, mapDispatch)(Button);
