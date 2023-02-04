import * as actions from "../../app/actions";
import data from "../data";
import { isAndroid } from "react-device-detect";

export const common = { ...actions };

export const MAIN_SCREEN = "MAIN_SCREEN";
export const PENDULUM_PAGE = "PENDULUM_PAGE";
export const PENDULUM_ONE_MASS = "PENDULUM_ONE_MASS";
export const PENDULUM_ONE_LENGTH = "PENDULUM_ONE_LENGTH";
export const PENDULUM_TWO_LENGTH = "PENDULUM_TWO_LENGTH";
export const PENDULUM_TWO_MASS = "PENDULUM_TWO_MASS";
export const SET_DEGREE = "SET_DEGREE";
export const START_STOP_ANIMATION = "START_STOP_ANIMATION";
export const CONTINUE_BUTTON = "CONTINUE_BUTTON";
export const VISITED_HOTSPOT = "VISITED_HOTSPOT";
export const LIVE_ALT_PENDULUM_ONE = "LIVE_ALT_PENDULUM_ONE";
export const LIVE_ALT_PENDULUM_TWO = "LIVE_ALT_PENDULUM_TWO";

export const setLiveAltPendulumOne = (val) => {
  return {
    type: LIVE_ALT_PENDULUM_ONE,
    val,
  };
};

export const setLiveAltPendulumTwo = (val) => {
  return {
    type: LIVE_ALT_PENDULUM_TWO,
    val,
  };
};
export const setVisitedHotspot = (val) => {
  return {
    type: VISITED_HOTSPOT,
    val,
  };
};
export const setContinueButton = (val) => {
  return {
    type: CONTINUE_BUTTON,
    val,
  };
};
export const setStartStop = (val) => {
  return {
    type: START_STOP_ANIMATION,
    val,
  };
};
export const setDegree = (val) => {
  return {
    type: SET_DEGREE,
    val,
  };
};
export const setPendulumOneMass = (val) => {
  return {
    type: PENDULUM_ONE_MASS,
    val,
  };
};

export const setPendulumOneLength = (val) => {
  return {
    type: PENDULUM_ONE_LENGTH,
    val,
  };
};

export const setPendulumTwoMass = (val) => {
  return {
    type: PENDULUM_TWO_MASS,
    val,
  };
};

export const setPendulumTwoLength = (val) => {
  return {
    type: PENDULUM_TWO_LENGTH,
    val,
  };
};
export const setMainScreen = (val) => {
  return {
    type: MAIN_SCREEN,
    val,
  };
};
export const setPendulumPage = (val) => {
  return {
    type: PENDULUM_PAGE,
    val,
  };
};

export const thunks = {
  onHotSpotClick: (id) => {
    return (dispatch, getState) => {
      const { visitedHotspot } = getState();
      dispatch(setContinueButton(true));
      dispatch(setMainScreen(false));
      dispatch(common.updateResetBtnState(false));
      dispatch(common.setResetFocusState(true));
      if (!visitedHotspot.includes(id)) {
        dispatch(setVisitedHotspot(id));
      }

      if (id == "singlependulum") {
        dispatch(setPendulumPage(true));
      } else {
        dispatch(setPendulumPage(false));
      }

      EventManager.broadcast("SECONDARY_CLICK");
    };
  },

  startStop: () => {
    return (dispatch, getState) => {
      const {
        startStop,
        pendulumScreen,
        pendulumOneMass,
        pendulumOneLength,
        pendulumTwoMass,
        pendulumTwoLength,
      } = getState();
      if (startStop) {
        dispatch(setStartStop(false));
        let txt1 = "";
        let occilation = 0;
        let occilation2 = 0;
        switch (pendulumOneLength.value) {
          case 3:
            occilation = 1.1;
            break;
          case 4:
            occilation = 1.2;
            break;
          case 5:
            occilation = 1.4;
            break;
        }
        switch (pendulumTwoLength.value) {
          case 7:
            occilation2 = 1.6;
            break;
          case 8:
            occilation2 = 1.8;
            break;
          case 9:
            occilation2 = 1.9;
            break;
        }
        if (pendulumScreen) {
          txt1 =
            data.penOneLiveText1 +
            pendulumOneMass.value +
            data.penOneLiveText2 +
            pendulumOneLength.value +
            data.penOneLiveText3 +
            occilation +
            data.penLiveTxt;
          dispatch(setLiveAltPendulumOne(txt1));
        } else {
          txt1 =
            data.penOneDoubleAltTxt1 +
            pendulumOneMass.value +
            data.penOneDoubleTxt2 +
            pendulumOneLength.value +
            data.penOneLiveText3 +
            occilation +
            data.penLiveTxt +
            data.penTwoTxt1 +
            pendulumTwoMass.value +
            data.penOneDoubleTxt2 +
            pendulumTwoLength.value +
            data.penOneLiveText3 +
            occilation2 +
            data.penLiveTxt;
          let pen1 =
            data.penOneDoubleAltTxt1 +
            pendulumOneMass.value +
            data.penOneDoubleTxt2 +
            pendulumOneLength.value +
            data.penOneLiveText3 +
            occilation +
            data.penLiveTxt;

          let pen2 =
            data.penTwoTxt1 +
            pendulumTwoMass.value +
            data.penOneDoubleTxt2 +
            pendulumTwoLength.value +
            data.penOneLiveText3 +
            occilation2 +
            data.penLiveTxt;
          dispatch(setLiveAltPendulumOne(pen1));
          dispatch(setLiveAltPendulumTwo(pen2));
        }

        if (isAndroid) {
          setTimeout(() => {
            dispatch(common.thunks.ariaLiveAssertive(txt1));
          }, 500);
        } else {
          dispatch(common.thunks.ariaLiveAssertive(txt1));
        }

        EventManager.broadcast("SECONDARY_CLICK");
      } else {
        const { visitedHotspot } = getState();
        dispatch(setStartStop(true));
        dispatch(setDegree(true));
        dispatch(setContinueButton(false));
        dispatch(common.setResetFocusState(true));
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        setTimeout(() => {
          EventManager.broadcast("SECONDARY_CLICK");
        });

        TincanManager.data.percentage = parseInt(
          (visitedHotspot.length / 2) * 100
        );

        TincanManager.saveTincanData();
      }
    };
  },
  onContinue: () => {
    return (dispatch, getState) => {
      dispatch(setMainScreen(true));
      dispatch(common.setResetFocusState(true));
      dispatch(setPendulumTwoMass(data.valuesMass[1]));
      dispatch(setPendulumOneMass(data.valuesMass[1]));
      dispatch(setPendulumTwoLength(data.pendulumTwo.valuesLength[0]));
      dispatch(setPendulumOneLength(data.pendulumOne.valuesLength[0]));

      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
      setTimeout(() => {
        EventManager.broadcast("SECONDARY_CLICK");
      });
    };
  },
  resetActivity: () => {
    return (dispatch, getState) => {
      dispatch(setVisitedHotspot(""));
      dispatch(common.togglePopup(3));
      dispatch(common.togglePopup(1));
      dispatch(setMainScreen(true));
      dispatch(common.updateResetBtnState(true));
      dispatch(setDegree(true));
      dispatch(setStartStop(true));
      dispatch(setPendulumTwoMass(data.valuesMass[1]));
      dispatch(setPendulumOneMass(data.valuesMass[1]));
      dispatch(setPendulumTwoLength(data.pendulumTwo.valuesLength[0]));
      dispatch(setPendulumOneLength(data.pendulumOne.valuesLength[0]));
      dispatch(setLiveAltPendulumOne(""));
      dispatch(setLiveAltPendulumTwo(""));
      TincanManager.resetTincanData();
    };
  },
};
