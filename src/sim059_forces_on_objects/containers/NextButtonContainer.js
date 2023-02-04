import { connect } from "react-redux";
import Button from "../../app/components/Button";
import data from "../data";
import {common} from "../actions"
const mapState = (state) => ({
  text: data.buttonLabels.next,
  isPopUpOpen: !!state.currentPopup.length,
  classes: "right-arrow toast-secondary-button positive",
  disabled:state.isVideoEnded?false:true
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(common.togglePopup(4));
    EventManager.broadcast("COMPLETION_SCREEN");
  },
});
export default connect(mapState, mapDispatch)(Button);
