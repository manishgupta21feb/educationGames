import Left from "../components/Left";
import { connect } from "react-redux";

import data from "../data";
import { selectedButton, thunks } from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    runState: state.runState,
    selectedValue: state.selectedValue.value,
    screen: state.screenCount,
  };
};

const mapDispatch = (dispatch) => ({
  onVideoEnded: () => {
    dispatch(thunks.setVideoEnd());
  },
});

export default connect(mapState, mapDispatch)(Left);
