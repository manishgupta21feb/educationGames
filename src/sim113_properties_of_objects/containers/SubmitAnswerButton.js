import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  classes: "primary",
  text: data.submitAnswer,
  disabled:
    !!state.currentPopup.length ||
    !state.selectedItems.length ||
    state.questionAnswered == "answered",
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.checkSubmissions());
  },
});

export default connect(mapState, matchDispatch)(Button);
