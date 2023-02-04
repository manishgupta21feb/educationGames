import data from "../data";
import * as actions from "../../app/actions";


const { togglePopup, ariaLiveText, updateResetBtnState } = actions;

export const common = { ...actions };

export const INFO_OPEN = "INFO_OPEN";
export const SET_RADIO = "SET_RADIO";
export const SET_QUESTION = "SET_QUESTION";
export const WRONG_ANSWER = "WRONG_ANSWER";
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";
export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const UPDATE_DROPZONES = "UPDATE_DROPZONES";
export const QUESTIONS_COUNT = "QUESTIONS_COUNT";
export const SET_START_AGAIN = "SET_START_AGAIN";
export const RESET_DROPZONES = "RESET_DROPZONES";
export const RESET_MATCHED_ITEMS = "RESET_MATCHED_ITEMS";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SUBMIT_BUTTON_PRESSED = "SUBMIT_BUTTON_PRESSED";
export const IS_DND_SHOW = "IS_DND_SHOW";
export const SECOND_SCREEN = "SECOND_SCREEN";
export const SELECT_DRAGGABLE = "SELECT_DRAGGABLE";
export const ACCESSIBLE_LIST = "ACCESSIBLE_LIST";
export const ADD_MATCHED_ITEM = "ADD_MATCHED_ITEM";
export const CLICK_COUNT = "CLICK_COUNT";
export const DESCRIPTION_BOX_SHOW = "DESCRIPTION_BOX_SHOW";
export const SHOW_RESPONSE = "SHOW_RESPONSE";
export const DND_HEADING = "DND_HEADING";

export const setDNDHeading = (params) => ({
  type: DND_HEADING,
  params,
});

export const descriptionShow = (value) => ({
  type: DESCRIPTION_BOX_SHOW,
  value,
});
export const showResponse = (val) => ({
  type: SHOW_RESPONSE,
  val,
});
export const resetMatchedItem = () => ({
  type: RESET_MATCHED_ITEMS,
});
export const setClickCount = (count) => ({
  type: CLICK_COUNT,
  count,
});

export const updateDropzones = (items) => ({ items, type: UPDATE_DROPZONES });
export const resetDropzones = () => ({
  type: RESET_DROPZONES,
});
export const selectDraggable = (data) => ({
  type: SELECT_DRAGGABLE,
  data,
});
export const accessibleList = (value) => ({
  type: ACCESSIBLE_LIST,
  value,
});

export const addMatchedItem = (item) => ({ item, type: ADD_MATCHED_ITEM });
export const isDndShow = (value) => {
  return {
    value,
    type: IS_DND_SHOW,
  };
};
export const setSecondScreen = (id) => ({
  id,
  type: SECOND_SCREEN,
});
export const selectAnswerOption = (id) => ({
  id,
  type: SELECT_ANSWER_OPTION,
});

export const submitAnswer = (answer) => ({
  type: SUBMIT_ANSWER,
  answer,
});

export const wrongAnswer = (answer) => ({
  type: WRONG_ANSWER,
  answer,
});

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});

export const setQuestion = (question) => ({
  type: SET_QUESTION,
  question,
});

export const questionCount = (count) => ({
  type: QUESTIONS_COUNT,
  count,
});

export const setRadioValue = (count) => ({
  type: SET_RADIO,
  count,
});

export const submitButtonPressed = (pressed) => ({
  pressed,
  type: SUBMIT_BUTTON_PRESSED,
});

export const thunks = {
  nextQuestion: () => {
    return (dispatch, getState) => {
      const { getDNDHeading } = getState();
      dispatch(common.setResetFocusState(true));
      dispatch(descriptionShow(false));
      if (getDNDHeading + 1 != data.dragAndDropHeading.length) {
        dispatch(setDNDHeading(getDNDHeading + 1));
      }
    };
  },
  setQuestion: () => {
    return (dispatch, getState) => {
      const { questionsData } = getState();
      const _questionsData = questionsData.map((q) => ({ ...q }));
      const index = Math.floor(Math.random() * _questionsData.length);
      const question = { ..._questionsData.splice(0, 1)[0] };
      dispatch(setQuestion({ ...question }));
      dispatch(updateQuestionsData([..._questionsData]));
    };
  },

  selectAnswerOption: (id) => {
    return (dispatch, getState) => {
      const { resetBtnState } = getState();
      dispatch(selectAnswerOption(id));
      if (resetBtnState) {
        dispatch(updateResetBtnState(false));
      }
    };
  },

  submitAnswer: () => {
    return (dispatch, getState) => {
      const {
        selectedQuestion,
        selectedAnswerOption,
        questionCount: count,
      } = getState();
      if (selectedAnswerOption == selectedQuestion.answer) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);
        TincanManager.data.percentage = parseInt(
         50 + ((count / data.equationsData.length) * 50)
        );
        TincanManager.saveTincanData();
        dispatch(submitAnswer(true));
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(wrongAnswer(true));
      }

      dispatch(submitButtonPressed(true));
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      const { secondScreen } = getState();
      if (secondScreen) {
        dispatch(thunks.mcqNextScreen());
      } else {
      
        dispatch(thunks.dndNextScreen());
      }
    };
  },
  dndNextScreen: () => {
    return (dispatch, getState) => {
      const { dndShow } = getState();
      if (dndShow) {
        dispatch(togglePopup(6));
      

    TincanManager.data.percentage = 50; 
    TincanManager.saveTincanData();
        EventManager.broadcast("COMPLETION_SCREEN");
      } else {
     
        dispatch(updateResetBtnState(false));
        dispatch(isDndShow(true));
      }
    };
  },
  mcqNextScreen: () => {
    return (dispatch, getState) => {
      const { questionCount: count, setRadio } = getState();
      if (count < data.equationsData.length) {
        dispatch(thunks.setQuestion());
        dispatch(submitAnswer(false));
        dispatch(questionCount(count + 1));
        dispatch(setRadioValue(setRadio + 1));
        dispatch(selectAnswerOption(""));
        dispatch(wrongAnswer(false));

        
      } else {
        dispatch(togglePopup(7));
        EventManager.broadcast("COMPLETION_SCREEN");
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      }
      EventManager.broadcast("STOP_ALL");
    };
  },
  draggedItem: (value) => {
    return (dispatch, getState) => {
      const draggableItems = data.draggableItems;
      const draggableValue = {
        ...draggableItems.find((item) => item.id == value),
      };
      if (draggableValue && draggableValue.id) {
        dispatch(selectDraggable(draggableValue));
      } else {
        dispatch(selectDraggable(null));
      }
    };
  },
  resetActivity: (value) => {
    return (dispatch) => {
      dispatch(setDNDHeading(0));
       dispatch(setRadioValue(0));
      dispatch(isDndShow(false));
      dispatch(accessibleList(false));
      dispatch(setClickCount(0));
      dispatch(descriptionShow(false));
      dispatch(setSecondScreen(false));
      dispatch(updateQuestionsData([...data.equationsData]));
      dispatch(thunks.setQuestion());
      dispatch(questionCount(1));
      dispatch(resetMatchedItem());
      dispatch(selectAnswerOption(""));
      dispatch(submitAnswer(false));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
     setTimeout(()=>{
      dispatch(togglePopup(1));
     },60)
      dispatch(updateResetBtnState(true));
      dispatch(ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 600);
     
    };
  },

  dropCheck: (value) => {
    return (dispatch, getState) => {
      const { selectedDraggable, clickCount } = getState();
      dispatch(addMatchedItem({ ...selectedDraggable }));
      dispatch(setClickCount(clickCount + 1));
      dispatch(descriptionShow(true));
    };
  },
};
