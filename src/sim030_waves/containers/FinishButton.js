import { connect } from "react-redux";
import Button from "../../app/components/Button";
import EventManager from "../../app/events/manager";

import data from "../data";
import { common } from "../actions";

const mapState = (state) => ({
  text: data.buttonLabels.finish,
  classes: "toast-secondary-button positive",
});

const matchDispatch = (dispatch) => ({
  onClick: () => {
    dispatch(common.togglePopup(4));
    EventManager.broadcast("SECONDARY_CLICK");
  },
});

export default connect(mapState, matchDispatch)(Button);
