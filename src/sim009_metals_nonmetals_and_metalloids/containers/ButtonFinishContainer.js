import { connect } from "react-redux";
import Button from "../../app/components/Button";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  text: data.buttonLabels.finish,
  isPopUpOpen: !!state.currentPopup.length,
  classes: "toast-secondary-button positive",
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    EventManager.broadcast("COMPLETION_SCREEN");
    dispatch(common.togglePopup(5));
  },
});
export default connect(mapState, mapDispatch)(Button);
