import { connect } from "react-redux";
import Top from "../components/Top/index";

import data from "../data";
import { thunks, common, setIsContinueDisable } from "../actions";

const mapState = (state) => {
  let screenData = state.getCurrentScreenData.filter(
    (x) => x.isActive == true
  )[0];

  return {
    screenData: screenData,
    buttonLabels: data.buttonLabels,
    currentPopup: state.currentPopup,
  };
};

const mapDispatch = (dispatch) => ({
  dropItem: (item) => {
    dispatch(thunks.checkDrop(item));
  },
  videoLiveTxt: (liveText) => {
    dispatch(common.ariaLiveText(liveText));
    setTimeout(() => {
      dispatch(common.ariaLiveText(" "));
    }, 300);
  },
  onVideoEnd: () => {
    dispatch(setIsContinueDisable(false));
  },
});

export default connect(mapState, mapDispatch)(Top);
