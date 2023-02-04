import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const check = state.mcqQuestions.length;
  return {
    disabled: !!state.currentPopup.length,
    text: check ? data.continue : data.finish,
    classes: `toast-secondary-button positive ${check ? "right-arrow" : ""}`,
  };
};
const matchDispatch = (dispatch) => ({
  onClick: (e) => {
    EventManager.broadcast("STOP_ALL");
    setTimeout(() => {
      EventManager.broadcast("SECONDARY_CLICK");
    }, 100);
    dispatch(thunks.screen2NextScreenHandler());
  },
});

export default connect(mapState, matchDispatch)(Button);
