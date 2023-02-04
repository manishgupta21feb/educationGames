import { connect } from "react-redux";

import SliderComponent from "../components/Slider";
import { setForceBegin, thunk, common } from "../actions";
const mapState = (state) => {
  const data = state.getData;
  return {
    isPopupActive: !!state.currentPopup.length,
    sliderHeading: data.slider.sliderHeader,
    testBtnText: data.buttonLabelsData.test,
    isActivityRunning: state.getForceBegin,
  };
};

const mapDispatch = (dispatch) => ({
  updateWarForce: () => {
    dispatch(setForceBegin(true));
    dispatch(thunk.videoAriaLive());
    dispatch(common.setResetFocusState(false));
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
    }, 200);
  },
});

export default connect(mapState, mapDispatch)(SliderComponent);
