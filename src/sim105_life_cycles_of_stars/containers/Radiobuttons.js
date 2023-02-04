import { connect } from "react-redux";
import RadioButton from "../../app/components/RadioButton/index.jsx";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  radiobuttons: data.radiobuttons,
  selectedOption: state.starPathwayOption,
  isPopupActive: !!state.currentPopup.length,
});

const matchDispatch = (dispatch) => ({
  onChange: (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    dispatch(thunks.setStarPathwayOption(id));
  },
});

export default connect(mapState, matchDispatch)(RadioButton);
