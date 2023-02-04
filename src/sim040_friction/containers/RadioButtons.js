import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  disabled: state.animationState,
  selectedOption: state.selectedMaterial,
  isPopupActive: !!state.currentPopup.length,
  radiobuttons: data.materials.filter((m) => m.id !== "none"),
});

const matchDispatch = (dispatch) => ({
  onChange: (material) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.selectMaterial(material));
  },
});

export default connect(mapState, matchDispatch)(RadioButton);
