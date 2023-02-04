import { connect } from "react-redux";
import Left from "../components/activity/Main/Left";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => ({
  materials: data.materials,
  scaleChange: state.scaleChange,
  currentPopup: state.currentPopup,
  imageAlt: state.mainImageAltText,
  readingMeters: data.readingMeters,
  animationState: state.animationState,
  selectedMaterial: state.selectedMaterial,
});

const matchDispatch = (dispatch) => ({
  setAnimationState: (state) => {
    dispatch(thunks.setAnimationState(state));
  },
});

export default connect(mapState, matchDispatch)(Left);
