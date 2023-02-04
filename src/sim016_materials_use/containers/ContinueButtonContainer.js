import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data/index";
import { common } from "../actions";

const mapState = (state) => {
  return {
    text: data.buttonLabels.finish,
    audioStatePlay: state.audioStatePlay,
    classes: "toast-secondary-button positive",
    isPopupActive: !!state.currentPopup.length,
  };
};

const matchDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 300);
  },
});

export default connect(mapState, matchDispatch)(Button);
