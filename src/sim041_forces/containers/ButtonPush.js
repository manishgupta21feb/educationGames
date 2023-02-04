import { connect } from "react-redux";
import Button from "../../app/components/Button";
import { setArrowDirection, thunk, setButton } from "../actions/activity";

const mapState = (state) => ({
  text: "Push",
  disabled: !!state.currentPopup.length || !!state.arrowDirection,
  classes: `primary-toggle-button ${
    state.arrowDirection == "push" ? "selected" : ""
  }`,
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(setButton());
    dispatch(setArrowDirection("push"));
    dispatch(thunk.submitAnswer("push"));
  },
});

export default connect(mapState, mapDispatch)(Button);
