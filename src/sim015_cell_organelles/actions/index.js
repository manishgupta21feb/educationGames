import data from "../data/index";
import * as actions from "../../app/actions";
import { isAndroid } from "react-device-detect";
export const common = { ...actions };
export const DEMO_ACTION = "DEMO_ACTION";
export const AUDIO_STATE_PLAY = "AUDIO_STATE_PLAY";
export const SHOW_PRIMARY_TEXT = "SHOW_PRIMARY_TEXT";
export const TOGGLE_CONTINUE = "TOGGLE_CONTINUE";
export const START_SIMULATION = "START_SIMULATION";
export const TOGGLE_NEXT = "TOGGLE_NEXT";
export const FETCH_DRAGGABLES = "FETCH_DRAGGABLES";
export const SELECT_DRAGGABLE = "SELECT_DRAGGABLE";
export const AUDIO_STATE_STOP = "AUDIO_STATE_STOP";
export const ADD_PLANT_DROPPABLE = "ADD_PLANT_DROPPABLE";
export const ADD_ANIMAL_DROPPABLE = "ADD_ANIMAL_DROPPABLE";
export const RESET_DROPPABLES = "RESET_DROPPABLES";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const FETCH_OPTIONS = "FETCH_OPTIONS";
export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const FORCE_ANIMAL_HIGHLIGHT = "FORCE_ANIMAL_HIGHLIGHT";
export const FORCE_PLANT_HIGHLIGHT = "FORCE_PLANT_HIGHLIGHT";
export const SET_RESET_DIALOG_NO_SELECTED = "SET_RESET_DIALOG_NO_SELECTED";
export const SET_PREVIOUS_SOUND = "SET_PREVIOUS_SOUND";
export const ADD_DRAGGABLE_ITEM = "ADD_DRAGGABLE_ITEM";
export const TOAST_MESSAGE = "TOAST_MESSAGE";
export const DISABLE_DROPPABLE = "DISABLE_DROPPABLE";
export const DISABLE_DRAGGABLE = "DISABLE_DRAGGABLE";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const ACTIVE_FINISH_BUTTON = "ACTIVE_FINISH_BUTTON";
export const SELECT_DRAGGABLE_FULL = "SELECT_DRAGGABLE_FULL";
export const SET_FOCUS_ON_LIST = "SET_FOCUS_ON_LIST";
export const SET_FOCUS_ON_DRAG = "SET_FOCUS_ON_DRAG";

export const ANSWER_SUBMITTED = "ANSWER_SUBMITTED";
export const CURRENT_LAYOUT = "CURRENT_LAYOUT";
export const CURRENT_DROP_ZONE_INDEX = "CURRENT_DROP_ZONE_INDEX";

export const answerSubmitted = (submitted) => ({
  submitted,
  type: ANSWER_SUBMITTED,
});

export const setFocusonDragItem = (answerId) => ({
  type: SET_FOCUS_ON_DRAG,
  data: answerId,
});
export const selectDraggableFull = (answerId) => ({
  type: SELECT_DRAGGABLE_FULL,
  data: answerId,
});
export const setFocusOnList = (answerId) => ({
  type: SET_FOCUS_ON_LIST,
  data: answerId,
});
export const showFinishButton = (val) => ({
  type: ACTIVE_FINISH_BUTTON,
  data: val,
});

export const disableDroppable = (
  answerId,
  markedAnswer,
  isDisable,
  hidden = false
) => ({
  type: DISABLE_DROPPABLE,
  data: { answerId, isDisable, markedAnswer, hidden },
});

export const resetDroppables = () => ({ type: RESET_DROPPABLES });
export const scaleChange = () => ({ type: DEMO_ACTION });

export const setAudioStatePlay = () => ({
  type: AUDIO_STATE_PLAY,
});
export const toggleScreen = (show) => ({
  type: SHOW_PRIMARY_TEXT,
  show,
});
export const toggleContinue = (val) => ({
  type: TOGGLE_CONTINUE,
  val,
});
export const startSim = (value) => ({
  type: START_SIMULATION,
  value,
});
export const toggleNext = (val) => ({
  type: TOGGLE_NEXT,
  val,
});
export const fetchDraggables = (data) => ({
  type: FETCH_DRAGGABLES,
  data,
});

export const selectDraggable = (data) => ({
  type: SELECT_DRAGGABLE,
  data,
});
export const audioStateStop = (val) => ({
  type: AUDIO_STATE_STOP,
  val,
});
export const addPlantDroppable = (draggableItem) => ({
  type: ADD_PLANT_DROPPABLE,
  data: draggableItem,
});
export const addAnimalDraggable = (draggableItem) => ({
  type: ADD_ANIMAL_DROPPABLE,
  data: draggableItem,
});

export const answerAttempted = (attempted) => {
  return {
    type: ANSWER_ATTEMPTTED,
    attempted,
  };
};
export const correctAnswer = (val) => {
  return {
    type: CORRECT_ANSWER,
    val,
  };
};
export const displayElementDataOptions = (val) => {
  return {
    type: FETCH_OPTIONS,
    data: val,
  };
};

export const forceAnimalHighlight = (val) => {
  return {
    type: FORCE_ANIMAL_HIGHLIGHT,
    data: val,
  };
};

export const forcePlantHighlight = (val) => {
  return {
    type: FORCE_PLANT_HIGHLIGHT,
    data: val,
  };
};
export const setResetDialogNoSelected = (value) => ({
  value,
  type: SET_RESET_DIALOG_NO_SELECTED,
});
export const setPreviousSound = (sound) => ({
  type: SET_PREVIOUS_SOUND,
  data: sound,
});
export const fetchQuestions = (val) => {
  return {
    type: FETCH_QUESTIONS,
    data: val,
  };
};

export const updateToastMsg = (val) => ({
  type: TOAST_MESSAGE,
  val,
});

export const disableDraggable = (answerId, isDisable = false) => ({
  type: DISABLE_DRAGGABLE,
  data: { answerId, isDisable },
});

export const setLayout = (value = "topbottom") => ({
  type: CURRENT_LAYOUT,
  data: value,
});
export const currentDropZoneIndex = (val) => {
  return {
    type: CURRENT_DROP_ZONE_INDEX,
    data: val,
  };
};
//helper
export const helper = {
  shuffleArray: (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  },
};
export const setAccessibleListVisible = (value = false) => ({
  type: ACCESSIBLE_LIST_VISIBLE,
  payload: value,
});
export const thunk = {
  startUpInfo: () => {
    return (dispatch, getState) => {
      const { audioStatePlay } = getState();
      dispatch(common.togglePopup(1));
      dispatch(toggleContinue(true)); //show continue button
      dispatch(thunk.toggleAudioBtn());
      EventManager.broadcast("PLAY_AND_QUEUE_NEXT", {
        current: "SECONDARY_CLICK",
        next: "SCREEN_TEXT",
      });
    };
  },
  continuePress: () => {
    return (dispatch, getState) => {
      //console.log("getState",getState())
      const { audioStatePlay } = getState();
      dispatch(common.updateResetBtnState(false));
      dispatch(common.setResetFocusState(true));
      dispatch(toggleContinue(false));
      if (audioStatePlay) {
        setTimeout(() => {
          EventManager.broadcast("PLAY_AUDIO_NARRATION", {
            id: "SCREEN_TEXT2",
          });
          dispatch(setPreviousSound("SCREEN_TEXT2"));
        }, 100);
      }
      dispatch(toggleScreen(true));
      dispatch(toggleNext(true));
    };
  },

  onDrop: (isAnimalDropzone) => {
    return (dispatch, getState) => {
      const { selectedDraggable, dropedItemList } = getState();
      //console.log("selectedDraggable",selectedDraggable)
      const isEmptyDraggable = Object.keys(selectedDraggable).length === 0;
      let rightAnswer = false;
      if (!isEmptyDraggable) {
        if (selectedDraggable.assetURL) {
          // Check dropzone is  plant cell
          if (selectedDraggable.assetURL.plantAsset && !isAnimalDropzone) {
            // type does not exist
            const typeAlreadyExist = dropedItemList.plantDragList.find(
              (item) => item.type === selectedDraggable.type
            );
            //console.log("the type alredy exist", typeAlreadyExist, selectedDraggable.type, plantDragableItems)
            if (!typeAlreadyExist) {
              const newPlantImageBg = {
                imgSource: selectedDraggable.assetURL.plantAsset,
                zIndex: selectedDraggable.srNo,
                type: selectedDraggable.type,
                altText: selectedDraggable.ariaLabel,
              };
              dispatch(addPlantDroppable(newPlantImageBg));
              dispatch(selectDraggable({}));
              rightAnswer = true;
              //dispatch(setPreviousSound('AUDIO_STARTSECONDARY_CLICK'));
            }
          } else if (
            selectedDraggable.assetURL.animalAsset &&
            isAnimalDropzone
          ) {
            const typeAlreadyExist = dropedItemList.animalDragList.find(
              (item) => item.type === selectedDraggable.type
            );
            if (!typeAlreadyExist) {
              const newAnimalImageBG = {
                imgSource: selectedDraggable.assetURL.animalAsset,
                zIndex: selectedDraggable.srNo,
                type: selectedDraggable.type,
                altText: selectedDraggable.ariaLabel,
              };
              dispatch(addAnimalDraggable(newAnimalImageBG));
              dispatch(selectDraggable({}));
              rightAnswer = true;
            }
          }

          dispatch(thunk.checkCorrectIncorrect(rightAnswer, true));
        }
      }
    };
  },
  checkCorrectIncorrect: (value, toggle) => {
    return (dispatch, getState) => {
      // dispatch(toggleToastMessage(true));
      // dispatch(correctAnswer(value))
      // EventManager.broadcast("STOP_ALL");
      if (value) {
        dispatch(updateToastMsg("correct"));
        dispatch(common.toggleToastMessage(true));
        dispatch(answerSubmitted(true));
        dispatch(correctAnswer(value));
        EventManager.broadcast("STOP_ALL_AND_PLAY", {
          id: "POSITIVE_FEEDBACK",
        });
      } else {
        dispatch(updateToastMsg("incorrect"));
        dispatch(common.toggleToastMessage(true));
        dispatch(answerSubmitted(true));
        dispatch(correctAnswer(value));
        EventManager.broadcast("STOP_ALL_AND_PLAY", {
          id: "NEGATIVE_FEEDBACK",
        });
      }
    };
  },
  toggleAudioBtn: () => {
    return (dispatch, getstate) => {
      const { audioStatePlay } = getstate();
      if (!audioStatePlay) {
        //console.log("hi")
        dispatch(setAudioStatePlay(audioStatePlay));
      }
    };
  },
  resetActivity: (value) => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();
      dispatch(common.ariaLiveText(data.resetLiveText));
      setTimeout(() => {
        dispatch(common.ariaLiveText(" "));
      }, 100);
      dispatch(startSim(true));
      dispatch(common.updateResetBtnState(true));
      dispatch(common.toggleToastMessage(false));
      dispatch(toggleScreen(false));
      dispatch(toggleContinue(false));
      dispatch(toggleNext(false));
      dispatch(selectDraggable({}));
      dispatch(fetchDraggables(data.draggableData.draggables));
      dispatch(resetDroppables());
      dispatch(showFinishButton(false));
      dispatch(setLayout("topbottom"));
      TincanManager.data.percentage = 0;
      TincanManager.resetTincanData();
      if (currentPopup.indexOf(5) >= 0) {
        dispatch(common.togglePopup(5));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(common.togglePopup(4));
      }
      setTimeout(() => {
        dispatch(common.togglePopup(1));
      }, 100);
    };
  },
  setResetDialogNoSelected: (value) => {
    return (dispatch, getState) => {
      const { audioStatePlay } = getState();
      if (audioStatePlay) {
        dispatch(setResetDialogNoSelected(value));
        //console.log("no is selected");
        EventManager.broadcast(getState().setPreviousSound);
      }
    };
  },
  fetchElements: () => {
    return (dispatch, getState) => {
      dispatch(
        displayElementDataOptions(
          helper.shuffleArray([...data.Screen2.options])
        )
      );
    };
  },
  fetchQuestionsList: () => {
    return (dispatch, getState) => {
      dispatch(fetchQuestions([...data.Screen2.questionList]));
    };
  },
  checkForCorrectAnswer: () => {
    return (dispatch, getState) => {
      dispatch(updateToastMsg("correct"));
      dispatch(common.toggleToastMessage(true));
      dispatch(answerSubmitted(true));
      dispatch(correctAnswer(true));
      EventManager.broadcast("POSITIVE_FEEDBACK");
    };
  },
  checkForIncorrectAnswer: () => {
    return (dispatch, getState) => {
      dispatch(updateToastMsg("incorrect"));
      dispatch(thunk.checkforIncorrect());
    };
  },
  checkForPartialCorrectAnswer: () => {
    return (dispatch, getState) => {
      dispatch(updateToastMsg("partiallyCorrect"));
      dispatch(thunk.checkforIncorrect());
    };
  },
  checkforIncorrect: () => {
    return (dispatch, getState) => {
      dispatch(common.toggleToastMessage(true));
      dispatch(answerSubmitted(true));
      dispatch(correctAnswer(false));
      EventManager.broadcast("NEGATIVE_FEEDBACK");
    };
  },
  updateDragDropdisablity: () => {
    return (dispatch, getState) => {
      const { questionsList, optionsData } = getState();
      for (const item of questionsList) {
        //console.log(item);
        if (item.markedAnswer === item.answerId) {
        } else {
          dispatch(disableDraggable(item.answerId, false));
          dispatch(disableDroppable(item.answerId, "", false, false));
          dispatch(common.setResetFocusState(true));
        }
      }
    };
  },
  submitAnswer: () => {
    return (dispatch, getState) => {
      //console.log("get state", getState())
      const { questionsList } = getState();
      const correctlyAnswered = questionsList.filter(
        (q) => q.markedAnswer === q.answerId
      );
      const incorrectAnswered = questionsList.filter(
        (q) => q.markedAnswer !== q.answerId
      );
      if (incorrectAnswered.length <= 4 && correctlyAnswered.length <= 4) {
        dispatch(thunk.checkForPartialCorrectAnswer());
        dispatch(thunk.updateDragDropdisablity());
      } else if (incorrectAnswered.length === 5) {
        dispatch(thunk.checkForIncorrectAnswer());
        dispatch(thunk.updateDragDropdisablity());
      } else if (correctlyAnswered.length === 5) {
        dispatch(thunk.checkForCorrectAnswer());
        dispatch(showFinishButton(true));
      }
    };
  },
  finshAll: () => {
    return (dispatch, getState) => {
      dispatch(common.toggleToastMessage(false));
      TincanManager.data.percentage = 100;
      TincanManager.data.completed = true;
      TincanManager.saveTincanData();
      EventManager.broadcast("COMPLETION_SCREEN");
      dispatch(common.togglePopup(4));
    };
  },
  toggleSound: () => {
    return (dispatch, getState) => {
      const { audioStatePlay } = getState();
      //console.log("tpggle",audioStatePlay)
      dispatch(audioStateStop());
      if (audioStatePlay) {
        EventManager.broadcast("SECONDARY_CLICK");
        setTimeout(() => {
          EventManager.broadcast("STOP_ALL");
        }, 100);
      }
    };
  },
  setAudioStatePlay: () => {
    return (dispatch, getState) => {
      const { audioStatePlay } = getState();
      if (audioStatePlay) {
        setTimeout(() => {
          EventManager.broadcast("STOP_ALL");
        }, 100);
      }
      dispatch(setAudioStatePlay());
    };
  },
  onDropFull: (accept) => (dispatch, getState) => {
    const { selectDraggableFull: source } = getState();
    const object = {
      source,
      target: accept,
    };
    dispatch(disableDraggable(source, true));
    dispatch(disableDroppable(accept, source, true, true));
    const ariaText = source + " " + data.Screen2.aria;
    if (isAndroid) {
      setTimeout(() => {
        dispatch(common.thunks.ariaLiveAssertive(ariaText));
      }, 500);
    } else {
      dispatch(common.thunks.ariaLiveAssertive(ariaText));
    }
    dispatch(selectDraggableFull(null));
    dispatch(setAccessibleListVisible(false));
  },
};
