import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  text: data.finish,
  isPopUpOpen: !!state.currentPopup.length,
  classes: "right-arrow toast-secondary-button positive",
});

const mapDispatch = (dispatch) => ({
  onFinishClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    // dispatch(common.togglePopup(7));
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 100);
  },
});
export default connect(mapState, mapDispatch)(Button);
