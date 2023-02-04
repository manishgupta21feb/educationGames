import * as actions from "../../app/actions";

export const CURRENT_SECTION = "CURRENT_SECTION";
export const BALL_DATA = "BALL_DATA";
export const CURRENT_BALL = "CURRENT_BALL";
export const CURRENT_FRICTION = "CURRENT_FRICTION";
export const CURRENT_LEVEL = "CURRENT_LEVEL";
export const CURRENT_EXPERIMENT = "CURRENT_EXPERIMENT";
export const TEST_RUNNING = "TEST_RUNNING";
export const TEST_COMPLETED = "TEST_COMPLETED";
export const VIDEO_COMPLETED = "VIDEO_COMPLETED";
export const FRICTION_COMPLETED = "FRICTION_COMPLETED";
export const ACTIVITY_COMPLETION = "ACTIVITY_COMPLETION";

import data from "../data";
import { cloneDeep } from "lodash";

export const common = { ...actions };

export const setCurrentSection = (currentSection) => {
  return {
    type: CURRENT_SECTION,
    currentSection,
  };
};
export const setBallsData = (data) => {
  return {
    type: BALL_DATA,
    _data: data,
  };
};
export const setCurrentBall = (data) => {
  return {
    type: CURRENT_BALL,
    _data: data,
  };
};
export const setCurrentFriction = (data) => {
  return {
    type: CURRENT_FRICTION,
    _data: data,
  };
};

export const setCurrentLevel = (data) => {
  return {
    type: CURRENT_LEVEL,
    _data: data,
  };
};
export const setCurrentExperiement = (data) => {
  return {
    type: CURRENT_EXPERIMENT,
    _data: data,
  };
};
export const setRunningTest = (data) => {
  return {
    type: TEST_RUNNING,
    _data: data,
  };
};
export const setTestCompleted = (data) => {
  return {
    type: TEST_COMPLETED,
    _data: data,
  };
};
export const setVideoEnded = (data) => {
  return {
    type: VIDEO_COMPLETED,
    _data: data,
  };
};
export const setFrictionTest = (data) => {
  return {
    type: FRICTION_COMPLETED,
    _data: data,
  };
};

export const setActivityCompletion = (data) => {
  return {
    type: ACTIVITY_COMPLETION,
    _data: data,
  };
};

export const thunks = {
  resetExperiment1: () => {
    return (dispatch) => {
      dispatch(setTestCompleted(false));
      dispatch(setRunningTest(false));
      dispatch(setCurrentExperiement("experiment1"));
      dispatch(setCurrentLevel(0));
      dispatch(setCurrentFriction(""));
      dispatch(setVideoEnded(false));
      dispatch(common.setResetFocusState(true));
    };
  },

  updateActivityCompletion: () => {
    return (dispatch, getState) => {
      const { getActivityCompleted } = getState();

      const isCompleted = getActivityCompleted.reduce((acc, intr) => {
        return acc + intr;
      }, 0);

      if (isCompleted == 1) {
        TincanManager.data.percentage = 50;
        TincanManager.saveTincanData();
      } else {
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      }
    };
  },
  resetToLaunch: (_check = "") => {
    return (dispatch) => {
      dispatch(setTestCompleted(false));
      dispatch(setRunningTest(false));
      dispatch(setCurrentExperiement("experiment1"));
      dispatch(setCurrentLevel(0));
      dispatch(setCurrentFriction(""));
      dispatch(setBallsData(cloneDeep(data.gravity.balls)));
      dispatch(setCurrentSection("launch"));
      dispatch(setVideoEnded(false));
      dispatch(setFrictionTest([0, 0]));
      dispatch(setCurrentBall(0));
      if (_check != "levelPopup") {
        TincanManager.data.percentage = 0;
        TincanManager.data.completed = false;
        TincanManager.resetTincanData();
        TincanManager.saveTincanData();
      }
    };
  },
  frictionUpdate: () => {
    return (dispatch, getState) => {
      const { getCurrentFriction, getFrictionTest } = getState();
      const _setFrictionTest = [...getFrictionTest];
      let num = getCurrentFriction == "experiment1" ? 0 : 1;
      _setFrictionTest[num] = 1;

      dispatch(setFrictionTest(_setFrictionTest));
    };
  },
  setGravityLiveText: () => {
    return (dispatch, getState) => {
      const { getCurrentBall } = getState();
      dispatch(
        common.thunks.ariaLiveAssertive(
          data.gravity.videoData[getCurrentBall - 1].liveText
        )
      );
    };
  },
  setFrictionLiveText: () => {
    return (dispatch, getState) => {
      const { getCurrentSection, getCurrentFriction, getCurrentLevel } =
        getState();
      dispatch(
        common.thunks.ariaLiveAssertive(
          data[getCurrentSection][getCurrentFriction][getCurrentLevel].liveText
        )
      );
    };
  },
  frictionTestLive: () => {
    return (dispatch, getState) => {
      const { getCurrentLevel, getCurrentSection, getCurrentFriction } =
        getState();
      let liveContent =
        getCurrentLevel > 0
          ? data[getCurrentSection][getCurrentFriction][getCurrentLevel]
              .conclusionLive
          : "";
      dispatch(common.thunks.ariaLiveAssertive(liveContent));
    };
  },
  setScreenData: (_data) => {
    return (dispatch, getState) => {
      const { getActivityCompleted } = getState();
      const _activitySts = [...getActivityCompleted];
      _data == "gravity" ? (_activitySts[0] = 1) : (_activitySts[1] = 1);

      dispatch(setActivityCompletion(_activitySts));
    };
  },
};
