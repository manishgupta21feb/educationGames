import * as actions from "../../app/actions";
import data from "../data";
import { isAndroid } from "react-device-detect";

export const common = { ...actions };

export const SCREEN_VAL = "SCREEN_VAL";
export const MAIN_SCREEN = "MAIN_SCREEN";
export const VISITED_PAGE = "VISITED_PAGE";
export const VEHICLE_DATA = "VEHICLE_DATA";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const CORRECT_ANSWER_MCQ = "CORRECT_ANSWER_MCQ";
export const SUBMIT_BUTTON_STATE = "SUBMIT_BUTTON_STATE";
export const DISTANCE = "DISTANCE";
export const TIME = "TIME";
export const PLOT = "PLOT";
export const CONTINUE_STATE = "CONTINUE_STATE";
export const KEEP_DISTANCE = "KEEP_DISTANCE";
export const KEEP_TIME = "KEEP_TIME";
export const PLOT_STATE = "PLOT_STATE";
export const ALT_FOR_GRAPH = "ALT_FOR_GRAPH";

export const VIDEO_TIME = "VIDEO_TIME";
export const setPlotState = (val) => {
  return {
    type: PLOT_STATE,
    val,
  };
};
export const setKeepDistance = (val) => {
  return {
    type: KEEP_DISTANCE,
    val,
  };
};

export const setKeepTime = (val) => {
  return {
    type: KEEP_TIME,
    val,
  };
};
export const setContinueState = (val) => {
  return {
    type: CONTINUE_STATE,
    val,
  };
};
export const setPlot = (val) => {
  return {
    type: PLOT,
    val,
  };
};
export const setSelectDistance = (val) => {
  return {
    type: DISTANCE,
    val,
  };
};

export const setSelectTime = (val) => {
  return {
    type: TIME,
    val,
  };
};

export const setMainScreen = (val) => {
  return {
    type: MAIN_SCREEN,
    val,
  };
};

export const setScreen = (val) => {
  return {
    type: SCREEN_VAL,
    val,
  };
};

export const setKeepVideoTime = (val) => {
  return {
    type: VIDEO_TIME,
    val,
  };
};

export const setVisitedPage = (val) => {
  return {
    type: VISITED_PAGE,
    val,
  };
};

export const setVehicleData = (val) => {
  return {
    type: VEHICLE_DATA,
    val,
  };
};

export const selectAnswerOption = (id) => ({
  id,
  type: SELECT_ANSWER_OPTION,
});

export const setCorrectAnswer = (val) => {
  return {
    type: CORRECT_ANSWER_MCQ,
    val,
  };
};

export const setSubmitBtnState = (val) => {
  return {
    type: SUBMIT_BUTTON_STATE,
    val,
  };
};

export const setAltForGraph = (val) => {
  return {
    type: ALT_FOR_GRAPH,
    val,
  };
};

export const thunks = {
  resetActivity: () => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(common.updateResetBtnState(true));
      dispatch(setContinueState(true));
      dispatch(setKeepVideoTime(0));
      if (currentPopup.indexOf(3) >= 0) {
        dispatch(common.togglePopup(3));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(common.togglePopup(4));
      }
      dispatch(setVisitedPage(""));
      dispatch(setScreen(""));
      dispatch(common.togglePopup(1));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
    };
  },

  onHotSpotClick: (id) => {
    return (dispatch, getState) => {
      dispatch(setVisitedPage(id));
      dispatch(setScreen("one"));
      dispatch(setVehicleData(id));
      dispatch(common.updateResetBtnState(false));
      EventManager.broadcast("SECONDARY_CLICK");
      dispatch(common.setResetFocusState(true));
    };
  },

  submitAnswerMcq: (answer) => {
    return (dispatch, getState) => {
      const { vehicleData, selectedAnswerOption, questionCount, visitedPage } =
        getState();

      if (selectedAnswerOption == vehicleData.answer) {
        EventManager.broadcast("POSITIVE_FEEDBACK");

        dispatch(common.toggleToastMessage(true));
        dispatch(setSubmitBtnState(true));
        dispatch(setCorrectAnswer(true));
        dispatch(setContinueState(false));
        TincanManager.data.percentage = parseInt(
          (visitedPage.length / data.ScreenData.length) * 100
        );
        TincanManager.saveTincanData();
      } else {
        EventManager.broadcast("NEGATIVE_FEEDBACK");

        dispatch(common.toggleToastMessage(true));
        dispatch(setCorrectAnswer(false));
        dispatch(setSubmitBtnState(false));
      }
    };
  },

  handleContinue: () => {
    return (dispatch, getState) => {
      const { screenVal, visitedPage } = getState();

      if (screenVal == "one") {
        dispatch(setAltForGraph(""));
        dispatch(setScreen("two"));
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 100);
        dispatch(common.setResetFocusState(true));
      } else if (screenVal == "two") {
        dispatch(setScreen("three"));
        setTimeout(() => {
          EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
        }, 100);
        dispatch(common.setResetFocusState(true));
      } else {
        if (visitedPage.length == 3) {
          dispatch(common.togglePopup(4));
          setTimeout(() => {
            EventManager.broadcast("COMPLETION_SCREEN");
          }, 100);
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 100;
          TincanManager.saveTincanData();
        } else {
          setTimeout(() => {
            EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
          }, 100);
          dispatch(common.setResetFocusState(true));
          dispatch(setScreen(""));
        }
      }
      dispatch(selectAnswerOption(""));

      dispatch(setPlot(true));
      dispatch(setContinueState(true));
      dispatch(setPlotState(true));
      dispatch(setSelectDistance(data.defaultSelectData));
      dispatch(setSelectTime(data.defaultSelectData));
      dispatch(common.toggleToastMessage(false));
      dispatch(setCorrectAnswer(false));
      EventManager.broadcast("STOP_ALL");
      setTimeout(() => {
        EventManager.broadcast("SECONDARY_CLICK");
      });

      dispatch(setKeepDistance(""));
      dispatch(setKeepTime(""));
    };
  },

  onPlot: () => {
    return (dispatch, getState) => {
      const { selectDistance, selectTime } = getState();
      let txt1 = data.altFromClientForPlotButton;
      if (isAndroid) {
        setTimeout(() => {
          dispatch(common.thunks.ariaLiveAssertive(txt1));
        }, 500);
      } else {
        dispatch(common.thunks.ariaLiveAssertive(txt1));
      }
      dispatch(setKeepDistance(selectDistance));
      dispatch(setKeepTime(selectTime));
      const { keepDistance, keepTime } = getState();

      if (keepDistance.length > 2 || keepTime.length > 2) {
        dispatch(setContinueState(false));
      }
      dispatch(setPlot(true));
      dispatch(setPlotState(true));
      dispatch(
        setAltForGraph(
          `${data.graphAltTxt1} ${selectDistance.value} ${data.graphAltTxt2} ${selectTime.value} ${data.graphAltTxt3}`
        )
      );
      EventManager.broadcast("SECONDARY_CLICK");
    };
  },
  videoTimeDistance: (curr) => {
    return (dispatch, getState) => {
      const { vehicleData, videoTime } = getState();
      if (vehicleData.id == "truck") {
        let prev = videoTime;
        let newTime = curr * 1.95;

        let truckTime = Math.trunc(newTime);
        if (prev != truckTime) {
          dispatch(setKeepVideoTime(truckTime));
        }
      } else {
        let prev = videoTime;
        let newTime = curr * 2;

        let truckTime = Math.trunc(newTime);
        if (prev != truckTime) {
          dispatch(setKeepVideoTime(truckTime));
        }
      }
    };
  },

  setLive: () => {
    return (dispatch, getState) => {
      const { vehicleData } = getState();
      dispatch(common.ariaLiveText(vehicleData.liveText));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 300);
    };
  },
};
