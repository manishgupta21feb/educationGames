import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
import { getNumbers } from "../helper.js";
import data from "../data";
export const common = { ...actions };
const {
  togglePopup,
  ariaLiveText,
  toggleToastMessage,
  setResetFocusState,
  updateResetBtnState,
} = actions;

export const IS_ACCESSIBLE = "IS_ACCESSIBLE";
export const ALL_QUESTION_SET = "ALL_QUESTION_SET";
export const UPDATE_QUESTION = "UPDATE_QUESTION";
export const SELECTED_OPTIONS = "SELECTED_OPTIONS";
export const IS_BUTTON_CLICK = "IS_BUTTON_CLICK";
export const IS_RESET_BUTTON_DISABLE = "IS_RESET_BUTTON_DISABLE";
export const CURRENTSCREEN_AND_ENVIRONMENT = "CURRENTSCREEN_AND_ENVIRONMENT";
export const QUESTION_OPTION = "QUESTION_OPTION";
export const INFO_BUTTON = "INFO_BUTTON";
export const IMAGE_PATH = "IMAGE_PATH";
export const RESET_IMAGE_PATH = "RESET_IMAGE_PATH";
export const SHOW_CONTINUE_BUTTON = "SHOW_CONTINUE_BUTTON";
export const IS_VISITED_TYPE = "IS_VISITED_TYPE";
export const GET_LABELS = "GET_LABELS";
export const INFO_BTN_STATUS = "INFO_BTN_STATUS";
export const RESET_QUESTION_OPTION = "RESET_QUESTION_OPTION";
export const RESET_IS_VISITED_TYPE = "RESET_IS_VISITED_TYPE";
export const RESET_INFO_BUTTON = "RESET_INFO_BUTTON";

export const GET_PREVIOUS_SELECTED_ITEM = "GET_PREVIOUS_SELECTED_ITEM";
export const RESET_PREVIOUS_SELECTED_ITEM = "RESET_PREVIOUS_SELECTED_ITEM";

export const setInfoButtonReset = () => {
  return {
    type: RESET_INFO_BUTTON,
  };
};

export const setPreviousSelectedItem = (params) => {
  return {
    type: GET_PREVIOUS_SELECTED_ITEM,
    params,
  };
};

export const resetPreviousSelectedItem = () => {
  return {
    type: RESET_PREVIOUS_SELECTED_ITEM,
  };
};

export const resetIsVisitedType = () => {
  return {
    type: RESET_IS_VISITED_TYPE,
  };
};

export const resetQuestionOption = () => {
  return {
    type: RESET_QUESTION_OPTION,
  };
};

export const setInfoBtnStatus = (params) => {
  return {
    type: INFO_BTN_STATUS,
    params,
  };
};

export const setLabels = (aria) => {
  return {
    type: GET_LABELS,
    aria,
  };
};
export const setShowContinueButton = (params) => {
  return {
    type: SHOW_CONTINUE_BUTTON,
    params,
  };
};

export const setResetImagePart = () => {
  return {
    type: RESET_IMAGE_PATH,
  };
};

export const setInfoButton = (val) => {
  return {
    type: INFO_BUTTON,
    val,
  };
};

export const setImagePart = (val) => {
  return {
    type: IMAGE_PATH,
    val,
  };
};

export const setCurrentScreenAndEnvironment = (params) => {
  return {
    type: CURRENTSCREEN_AND_ENVIRONMENT,
    params,
  };
};

export const setQuestionOption = (params) => {
  return {
    type: QUESTION_OPTION,
    params,
  };
};

export const isResetButtonDisable = (data) => {
  return {
    type: IS_RESET_BUTTON_DISABLE,
    data,
  };
};

export const getOptionsValue = (data) => ({
  type: SELECTED_OPTIONS,
  data,
});

export const updateQuestion = (items) => ({
  items,
  type: UPDATE_QUESTION,
});

export const isVisitedType = (params) => ({
  params,
  type: IS_VISITED_TYPE,
});

export const thunks = {
  continueBtn: () => {
    return (dispatch, getState) => {
      dispatch(
        setCurrentScreenAndEnvironment({
          screen: 0,
          environment: "",
          questionNo: 0,
        })
      );
      dispatch(setLabels(""));
      dispatch(setResetImagePart());
      dispatch(togglePopup(3));
      dispatch(resetPreviousSelectedItem());
      let result = { status: "", id: "" };
      dispatch(setInfoBtnStatus(result));
      EventManager.broadcast("MOVE_TO_NEXT_SCREEN");
    };
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(
        setCurrentScreenAndEnvironment({
          screen: 0,
          environment: "",
          questionNo: 0,
        })
      );
      dispatch(setInfoButtonReset());
      dispatch(resetIsVisitedType());
      dispatch(resetQuestionOption());
      let result = { status: "", id: "" };
      dispatch(setInfoBtnStatus(result));
      dispatch(setLabels(""));
      dispatch(isResetButtonDisable(true));
      dispatch(togglePopup(1));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(setResetImagePart());
      dispatch(updateResetBtnState(true));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      if (currentPopup.indexOf(3) >= 0) {
        dispatch(togglePopup(3));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(togglePopup(4));
      }
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
    };
  },
  submitOption: (item, src, live, aria) => (dispatch, getState) => {
    let {
      selectedOptions,
      getCurrentScreenAndEnvironment,
      getPreviousSelectedItem,
    } = getState();

    console.log(
      " src ",
      src,
      " live ",
      live,
      " getCurrentScreenAndEnvironment",
      getCurrentScreenAndEnvironment
    );

    let params = {};
    let ariaTxt = "";

    console.log(" getPreviousSelectedItem ", getPreviousSelectedItem);
    if (getCurrentScreenAndEnvironment.screen == 1) {
      params = {
        root: getCurrentScreenAndEnvironment.questionNo == 1 ? live : "",
        stem: getCurrentScreenAndEnvironment.questionNo == 2 ? live : "",
      };

      ariaTxt = data.allMainAltPlant[
        getCurrentScreenAndEnvironment.questionNo - 1
      ]
        .replace(
          "{enviroment}",
          getCurrentScreenAndEnvironment.environment.toLowerCase()
        )
        .replace("{name}", aria.toLowerCase())
        .replace("{rootname}", getPreviousSelectedItem.root)
        .replace("{stemname}", getPreviousSelectedItem.stem);
    } else if (getCurrentScreenAndEnvironment.screen == 2) {
      params = {
        body: getCurrentScreenAndEnvironment.questionNo == 1 ? live : "",
        mouth: getCurrentScreenAndEnvironment.questionNo == 2 ? live : "",
      };
      ariaTxt = data.allMainAltAnimal[
        getCurrentScreenAndEnvironment.questionNo - 1
      ]
        .replace(
          "{enviroment}",
          getCurrentScreenAndEnvironment.environment.toLowerCase()
        )
        .replace("{name}", aria.toLowerCase())
        .replace("{bodyname}", getPreviousSelectedItem.body)
        .replace("{mouthname}", getPreviousSelectedItem.mouth);
    }

    dispatch(
      setImagePart({
        path: data.organism_type_option.find((x) => x.src == src).path,
        classes: src,
        answerId: getNumbers(item),
        questionNo: getCurrentScreenAndEnvironment.questionNo,
        altText: data.altTextDummy + src,
      })
    );
    dispatch(setLabels(ariaTxt));
    console.log(" livelivelive ", live);
    dispatch(setPreviousSelectedItem(params));
    //  dispatch(ariaLiveText(live));
    dispatch(isResetButtonDisable(false));
    dispatch(setShowContinueButton(false));
    // setTimeout(() => {
    //   dispatch(ariaLiveText(" "));
    // }, 300);
    EventManager.broadcast("PRIMARY_CLICK");
  },
  nextQuestion: () => (dispatch, getState) => {
    let { getCurrentScreenAndEnvironment, setIsVisitedType, aria } = getState();

    let new_val = {
      ...getCurrentScreenAndEnvironment,
      questionNo: getCurrentScreenAndEnvironment.questionNo + 1,
    };

    dispatch(resetQuestionOption());
    dispatch(setShowContinueButton(true));
    if (getCurrentScreenAndEnvironment.questionNo + 1 > 3) {
      dispatch(togglePopup(3));
      TincanManager.data.percentage = (setIsVisitedType.length / 6) * 100;
      TincanManager.data.completed = true;
      TincanManager.saveTincanData();
      EventManager.broadcast("PRIMARY_CLICK");
      EventManager.broadcast("COMPLETION_SCREEN");
    } else {
      let params = {
        id: getCurrentScreenAndEnvironment.questionNo + 1,
        screen: getCurrentScreenAndEnvironment.screen,
        environment: getCurrentScreenAndEnvironment.environment,
      };
      dispatch(setQuestionOption(params));
      dispatch(setCurrentScreenAndEnvironment(new_val));
      EventManager.broadcast("PRIMARY_CLICK");
    }

    dispatch(common.setResetFocusState(true));
  },
};
