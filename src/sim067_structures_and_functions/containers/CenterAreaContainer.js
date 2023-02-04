import { connect } from "react-redux";
import EventManager from "../../app/events/manager";
import CenterArea from "../components/center";

import data from "../data/index";
import {
  common,
  setCurrentScreenAndEnvironment,
  isResetButtonDisable,
  thunks,
  setLabels,
  isVisitedType,
} from "../actions";

const mapState = (state) => {
  return {
    isPopupActive: !!state.currentPopup.length,
    introHeading: data.rightAreaTextDescription,
    topHeading: data.topHeading,
    centerPageData: data.centerPageData,
    btnHeading: data.btnHeading,
    setIsVisitedType: state.setIsVisitedType,

    //  isPopupActive: !!state.currentPopup.length,
  };
};

const mapDispatch = (dispatch) => ({
  togglePopup: () => {
    dispatch(common.toggleToastMessage(false));
    EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    dispatch(common.togglePopup(3));
    setTimeout(() => {
      EventManager.broadcast("COMPLETION_SCREEN");
    }, 300);
  },
  setCurrentScreenAndEnvironment: (item, env, organismType) => {
    let params = {
      screen: item,
      environment: env,
      questionNo: 0,
      organismType: organismType,
    };
    dispatch(setCurrentScreenAndEnvironment(params));
    dispatch(isResetButtonDisable(false));
    dispatch(isVisitedType(params));
    dispatch(setLabels(""));
    dispatch(common.setResetFocusState(true));
    EventManager.broadcast("PRIMARY_CLICK");
    // thunks.simTravel(params);
  },
});

export default connect(mapState, mapDispatch)(CenterArea);
