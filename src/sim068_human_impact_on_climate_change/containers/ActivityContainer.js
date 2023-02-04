import Activity from "../components/activity";
import { connect } from "react-redux";

import { common, thunks } from "../actions";
import data from "../data";

const mapState = (state) => {
  return {
    data: data,
    isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  onInit: () => {
    dispatch(common.togglePopup(1));
    dispatch(thunks.sliderActivity());
    // dispatch(thunks.updateSliderValue());
  },
});

export default connect(mapState, mapDispatch)(Activity);
