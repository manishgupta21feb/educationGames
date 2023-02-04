import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import { togglePopup } from "../actions";
import FinishButton from "../components/CarbonDataTable/FinishButton";
import data from "../data";

const mapState = (state) => ({
  text: data.buttonLabels.finish,
  isPopUpOpen: !!state.currentPopup.length,
  classes: "toast-secondary-button positive",
});

const mapDispatch = (dispatch) => ({
  onClick: () => {
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(togglePopup(4));
    EventManager.broadcast("COMPLETION_SCREEN");
  },
});

export default connect(mapState, mapDispatch)(FinishButton);
