import Left from "../components/Left";
import { connect } from "react-redux";

import data from "../data";
import { thunks } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    arrows: data.arrows,
    runState: state.runState,
    selectedValue: state.selectedValue.value
  };
};

const mapDispatch = (dispatch) => ({
  onVideoEnded: () => {
    dispatch(thunks.setRunState(false));
  }
});

export default connect(mapState, mapDispatch)(Left);
