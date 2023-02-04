import RightContainer from "../components/scene1/rightSection";
import { connect } from "react-redux";
import data from "../data";
import { section1Data, common } from "../actions";
import { thunks } from "../../app/actions";
import { isAndroid, isMacOs } from "react-device-detect";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    activityChange: state.activityChange,
    tabsData: state.section1Data,
    resetBtnState: state.resetBtnState,
    data,
  };
};

const mapDispatch = (dispatch) => ({
  onSectionDataUpdate: (data) => {
    dispatch(section1Data(data));
    dispatch(common.updateResetBtnState(false));
  },
  announceAriaLive: (data) => {
    if (isAndroid || isMacOs) {
      setTimeout(() => {
        dispatch(thunks.ariaLiveAssertive(data));
      }, 500);
    } else {
      dispatch(thunks.ariaLiveAssertive(data));
    }
  },
});

export default connect(mapState, mapDispatch)(RightContainer);
