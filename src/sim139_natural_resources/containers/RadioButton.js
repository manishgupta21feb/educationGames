import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";
import EventManager from "../../app/events/manager";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  radiobuttons: data.options,
  disabled: state.correctAnswerSubmitted,
  selectedOption: state.selectedResourceType,
  isPopupActive: !!state.currentPopup.length,
  labelledby: "main-instruction-ost selected-item-label",
});

const matchDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("STOP_ALL");
    setTimeout(() => {
      EventManager.broadcast("PRIMARY_CLICK");
    }, 100);
    dispatch(thunks.selectResourceType(id));
  },
});

export default connect(mapState, matchDispatch)(RadioButton);
