import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  const check =
    state.visitedHotspots.length < data.screen1TopViewButtons.length;
  return {
    disabled: !!state.currentPopup.length,
    text: check ? data.continue : data.next,
    classes: `toast-secondary-button positive right-arrow`,
  };
};
const matchDispatch = (dispatch) => ({
  onClick: (e) => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.screen1NextScreenHandler());
  },
});

export default connect(mapState, matchDispatch)(Button);
