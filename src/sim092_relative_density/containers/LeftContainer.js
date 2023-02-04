import { connect } from "react-redux";
import LeftSection from "../components/left";

import data from "../data";
import {
  thunks,
  setFluidType,
  setAnimationIndex,
  setFluidPouredCount,
  common,
  animateEnd,
} from "../actions";

const mapState = (state) => ({
  isMCQ: state.isMCQ,
  isBall: state.isBall,
  id: state.isBall ? data.screenTwo.id : data.screenOne.id,
  altimgText: state.isBall
    ? data.screenTwo.altimgText
    : data.screenOne.altimgText,
  fluidData: state.fluidData,
  sphereData: state.sphereData,
  fluidType: state.fluidType,
  animationIndex: state.animationIndex,
  fluidPouredCount: state.fluidPouredCount,
  animateEnd: state.animateEnd,
  isPopupActive: !!state.currentPopup.length,
  isReset: state.isReset,
  tubeData: data.tubeData,
  labelData: data.labelData,
  sphereType: state.sphereType,
});

const matchDispatch = (dispatch) => ({
  onClickSphere: (id) => {
    dispatch(animateEnd(true));
    dispatch(common.setResetFocusState(true));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(thunks.onClickSphere(id));
    dispatch(thunks.setLiveText(id));
    setTimeout(() => {
      dispatch(animateEnd(false));
    }, 4050);
  },
  onClickTestTube: (id, index, count) => {
    dispatch(common.updateResetBtnState(false));
    dispatch(animateEnd(true));
    EventManager.broadcast("SECONDARY_CLICK");
    dispatch(setFluidType(id));
    dispatch(setAnimationIndex(index));
    dispatch(thunks.hideButton(id));
    dispatch(common.setResetFocusState(true));
    dispatch(setFluidPouredCount(count));
    dispatch(thunks.setLiveText(id, count));
    if (count === 3) {
      setTimeout(() => {
        dispatch(setFluidPouredCount(4));
      }, 6500);
    }
    setTimeout(() => {
      dispatch(animateEnd(false));
    }, 6500);
  },
  setFluidPouredCount: () => {
    dispatch(setFluidPouredCount(4));
  },
  makeTestTubeEmpty: (id) => {
    dispatch(thunks.makeTestTubeEmpty(id));
  },
});

export default connect(mapState, matchDispatch)(LeftSection);
