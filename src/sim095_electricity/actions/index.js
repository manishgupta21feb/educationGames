import data from "../data";
import * as actions from "../../app/actions";

import { isAndroid } from "react-device-detect";

const {
  togglePopup,
  ariaLiveText,
  toggleToastMessage,
  updateResetBtnState,
  setResetFocusState,
} = actions;
export const common = { ...actions };

export const SELECT_QUESTION = "SELECT_QUESTION";
export const RESET_QUESTION = "RESET_QUESTION";
export const SELECT_OPTION = "SELECT_OPTION";
export const ANSWER_ATTEMPTTED = "ANSWER_ATTEMPTTED";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const SET_ANSWERED = "SET_ANSWERED";
export const SET_HIDE_BUTTONS = "SET_HIDE_BUTTONS";
export const SET_SELECTED_BUTTON = "SET_SELECTED_BUTTON";

export const CLEAR_VALUES = "CLEAR_VALUES";

export const SHOW_CHECK_BUTTON = "SHOW_CHECK_BUTTON";

export const RESET_COUNTER = "RESET_COUNTER";

export const COUNT_ATTEMPTS = "COUNT_ATTEMPTS";

export const DELETE_ATTEMPTS = "DELETE_ATTEMPTS";

export const COUNTER_VALUES = "COUNTER_VALUES";

export const SHOW_MAIN_SCREEN = "SHOW_MAIN_SCREEN";

export const SHOW_FIRST_SCREEN = "SHOW_FIRST_SCREEN";

export const SHOW_SECOND_SCREEN = "SHOW_SECOND_SCREEN";

export const DROPZONE_ONE = "DROPZONE_ONE";
export const DROPZONE_TWO = "DROPZONE_TWO";
export const DROPZONE_THREE = "DROPZONE_THREE";
export const DROPZONE_FOUR = "DROPZONE_FOUR";
export const DROPZONE_FIVE = "DROPZONE_FIVE";
export const DROPZONE_SIX = "DROPZONE_SIX";
export const DROPZONE_SEVEN = "DROPZONE_SEVEN";
export const CLEAR_CIRCUITS = "CLEAR_CIRCUITS";
export const ADD_VISITED_PAGE = "ADD_VISITED_PAGE";
export const CLEAR_VISITED_PAGES = "CLEAR_VISITED_PAGES";

export const ADD_FAN = "ADD_FAN";
export const ADD_BATTERY = "ADD_BATTERY";
export const ADD_SWITCH = "ADD_SWITCH";
export const ADD_WIRE = "ADD_WIRE";
export const CLEAR_DROPPED_ITEMS = "CLEAR_DROPPED_ITEMS";
export const CLEAR_BUTTON_PRESSED = "CLEAR_BUTTON_PRESSED";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";

export const ACCESSIBLE_DROPPED_ITEM = "ACCESSIBLE_DROPPED_ITEM";
export const SELECTED_CIRCUIT = "SELECTED_CIRCUIT";

export const SET_DRAGGABLE_ITEM = "SET_DRAGGABLE_ITEM";
export const RESET_DRAGGABLE_ITEM = "RESET_DRAGGABLE_ITEM";

export const DRAG_TYPE = "DRAG_TYPE";
export const RESET_DRAGGABLES = "RESET_DRAGGABLES";
export const RESET_DROPPABLES = "RESET_DROPPABLES";
export const UPDATE_DRAGGABLES = "UPDATE_DRAGGABLES";
export const UPDATE_DROPPABLES = "UPDATE_DROPPABLES";
export const RESET_DRAGTYPE_FROM_DROPPABLES = "RESET_DRAGTYPE_FROM_DROPPABLES";
export const CLEAR_DRAGGABLES_FROM_DROP_REGION =
  "CLEAR_DRAGGABLES_FROM_DROP_REGION";

export const ANIMATE = "ANIMATE";
export const LEFT_CIRCUIT = "LEFT_CIRCUIT";
export const RIGHT_CIRCUIT = "RIGHT_CIRCUIT";

export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const SELECT_ANSWER_OPTION = "SELECT_ANSWER_OPTION";
export const SET_QUESTION = "SET_QUESTION";
export const SET_COUNT = "SET_COUNT";
export const MCQ_SCREEN = "MCQ_SCREEN";
export const SUBMIT_BTN_DISABLE = "SUBMIT_BTN_DISABLE";
export const KEEP_IMAGES = "KEEP_IMAGES";

export const UPDATE_DRAGGABLE_SERIES = "UPDATE_DRAGGABLE_SERIES";
export const CLEAR_DRAGGABLE_FROM_DROP_REGION_SERIES =
  "CLEAR_DRAGGABLE_FROM_DROP_REGION_SERIES";
export const SET_DRAGGABLE_SERIES_FROM_MCQ = "SET_DRAGGABLE_SERIES_FROM_MCQ";
export const RESET_SERIES_DRAGGABLE = "RESET_SERIES_DRAGGABLE";
export const CHECK_BUTTON = "CHECK_BUTTON";
export const STORE_DORPZONE = "STORE_DORPZONE";
export const SHOW_NEXT = "SHOW_NEXT";
export const SHOW_BRIGHT = "SHOW_BRIGHT";
export const ONLY_BATTERT_CORRECT = "ONLY_BATTERT_CORRECT";
export const DYNAMIC_ALTTEXT = "DYNAMIC_ALTTEXT";

export const setAltText = (value) => {
  return {
    type: DYNAMIC_ALTTEXT,
    value,
  };
};

export const setBatteryCorrect = (val) => ({
  type: ONLY_BATTERT_CORRECT,
  val,
});
export const setShowBright = (val) => ({
  type: SHOW_BRIGHT,
  val,
});
export const setShowNext = (val) => ({
  type: SHOW_NEXT,
  val,
});
export const setStoreDropZoneBulb = (dropzone) => ({
  type: STORE_DORPZONE,
  dropzone,
});
export const setCheckButton = (val) => ({
  type: CHECK_BUTTON,
  val,
});
export const setResetSeriesDraggable = () => ({
  type: RESET_SERIES_DRAGGABLE,
});
export const setUpdateDraggableSeries = (items) => ({
  type: UPDATE_DRAGGABLE_SERIES,
  items,
});
export const setClearDraggableFromSeries = () => ({
  type: CLEAR_DRAGGABLE_FROM_DROP_REGION_SERIES,
});
export const setDraggableSeriesFromMcq = (dataArray) => ({
  type: SET_DRAGGABLE_SERIES_FROM_MCQ,
  dataArray,
});
export const setSubmitBtnDisabled = (answer) => ({
  type: SUBMIT_BTN_DISABLE,
  answer,
});
export const setKeepImages = (val) => ({
  type: KEEP_IMAGES,
  val,
});
export const setCount = (count) => ({
  type: SET_COUNT,
  count,
});
export const setMcqScreen = (bln) => ({
  type: MCQ_SCREEN,
  bln,
});
export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});
export const selectAnswerOption = (id) => ({
  id,
  type: SELECT_ANSWER_OPTION,
});
export const setQuestion = (question) => ({
  type: SET_QUESTION,
  question,
});

export const resetQuestion = () => {
  return {
    type: RESET_QUESTION,
  };
};

export const selectOption = (option) => {
  return {
    type: SELECT_OPTION,
    option,
  };
};

export const selectMcqQuestion = () => {
  return {
    type: SELECT_MCQ_QUESTION,
  };
};

export const answerAttempted = (attempted) => {
  return {
    type: ANSWER_ATTEMPTTED,
    attempted,
  };
};

export const correctAnswer = (correct) => {
  return {
    type: CORRECT_ANSWER,
    correct,
  };
};

export const setAnswered = (value) => ({ value, type: SET_ANSWERED });

export const removeAllValues = () => {
  return {
    type: CLEAR_VALUES,
  };
};

export const resetCounterValues = (value) => {
  return {
    type: RESET_COUNTER,
    value,
  };
};

export const countAttempts = (value) => {
  return {
    type: COUNT_ATTEMPTS,
    value,
  };
};

export const deleteAttempts = () => {
  return {
    type: DELETE_ATTEMPTS,
  };
};

export const setShowMainScreen = (value) => {
  return {
    type: SHOW_MAIN_SCREEN,
    value,
  };
};

export const setShowFirstScreen = (value) => {
  return {
    type: SHOW_FIRST_SCREEN,
    value,
  };
};

export const setShowSecondScreen = (value) => {
  return {
    type: SHOW_SECOND_SCREEN,
    value,
  };
};

export const dropZoneOne = (value) => {
  return {
    type: DROPZONE_ONE,
    value,
  };
};

export const dropZoneTwo = (value) => {
  return {
    type: DROPZONE_TWO,
    value,
  };
};

export const dropZoneThree = (value) => {
  return {
    type: DROPZONE_THREE,
    value,
  };
};

export const dropZoneFour = (value) => {
  return {
    type: DROPZONE_FOUR,
    value,
  };
};

export const dropZoneFive = (value) => {
  return {
    type: DROPZONE_FIVE,
    value,
  };
};

export const dropZoneSix = (value) => {
  return {
    type: DROPZONE_SIX,
    value,
  };
};

export const dropZoneSeven = (value) => {
  return {
    type: DROPZONE_SEVEN,
    value,
  };
};

export const clearCircuit = () => {
  return {
    type: CLEAR_CIRCUITS,
  };
};

export const addVisitedPage = (value) => {
  return {
    type: ADD_VISITED_PAGE,
    value,
  };
};

export const clearVisitedPages = () => {
  return {
    type: CLEAR_VISITED_PAGES,
  };
};

export const addFan = (value) => {
  return {
    type: ADD_FAN,
    value,
  };
};

export const addBattery = (value) => {
  return {
    type: ADD_BATTERY,
    value,
  };
};

export const addSwitch = (value) => {
  return {
    type: ADD_SWITCH,
    value,
  };
};

export const addWire = (value) => {
  return {
    type: ADD_WIRE,
    value,
  };
};

export const clearDroppedItems = () => {
  return {
    type: CLEAR_DROPPED_ITEMS,
  };
};

export const clearButtonPressed = (value) => {
  return {
    type: CLEAR_BUTTON_PRESSED,
    value,
  };
};

export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

export const accessibleDroppedItem = (val) => ({
  val,
  type: ACCESSIBLE_DROPPED_ITEM,
});

export const selectedCircuit = (value) => {
  return {
    type: SELECTED_CIRCUIT,

    value,
  };
};

export const setDraggableItem = (item) => ({
  item,
  type: SET_DRAGGABLE_ITEM,
});

export const resetDraggableItem = () => ({
  type: RESET_DRAGGABLE_ITEM,
});

export const setDragType = (item) => {
  return {
    item,
    type: DRAG_TYPE,
  };
};

export const resetDroppables = () => {
  return {
    type: RESET_DROPPABLES,
  };
};

export const updateDroppables = (items) => ({
  items,
  type: UPDATE_DROPPABLES,
});

export const resetDragTypeFromDroppables = () => ({
  type: RESET_DRAGTYPE_FROM_DROPPABLES,
});

export const resetDraggables = () => {
  return {
    type: RESET_DROPPABLES,
  };
};

export const updateDraggables = (items) => ({
  items,
  type: UPDATE_DRAGGABLES,
});

export const clearDraggables = () => ({
  type: CLEAR_DRAGGABLES_FROM_DROP_REGION,
});

export const leftCircuit = (value) => ({
  type: LEFT_CIRCUIT,
  value,
});

export const rightCircuit = (value) => ({
  type: RIGHT_CIRCUIT,
  value,
});

export const setAnimate = (value) => ({
  type: ANIMATE,
  value,
});

export const thunks = {
  addObjects: () => {
    return (dispatch, getState) => {
      const { draggableItem } = getState();

      let name = draggableItem.id;

      if (name == "battery") {
        dispatch(addBattery(name));
      } else if (name == "wire") {
        dispatch(addWire(name));
      } else {
        dispatch(addFan(name));
      }
      dispatch(setDraggableItem(null));
    };
  },

  setQuestion: (id) => {
    return (dispatch, getState) => {
      const { questionsData, getCount } = getState();

      const _questionsData = questionsData.map((q) => ({ ...q }));

      const question = _questionsData.filter((ques) => {
        return ques.id.includes(getCount);
      });

      dispatch(setQuestion(...question));
    };
  },

  submitAnswerMcq: (answer) => {
    return (dispatch, getState) => {
      const {
        selectedQuestion,
        selectedAnswerOption,
        currentHotSpot,
        getCount,
        visitedPages,
      } = getState();

      if (selectedQuestion.answer.includes(selectedAnswerOption)) {
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
        }, 500);

        dispatch(common.toggleToastMessage(true));
        dispatch(correctAnswer(true));
        dispatch(setSubmitBtnDisabled(true));

        if (
          visitedPages.indexOf("series") ==
            visitedPages.lastIndexOf("series") ||
          visitedPages.indexOf("parallel") ==
            visitedPages.lastIndexOf("parallel")
        ) {
          if (visitedPages.includes("parallel")) {
            TincanManager.data.percentage = parseInt(
              (getCount / (data.mcqQuestion.length + 1)) * 50 + 50
            );
            TincanManager.saveTincanData();
          } else {
            TincanManager.data.percentage = parseInt(
              (getCount / (data.mcqQuestion.length + 1)) * 50
            );
            TincanManager.saveTincanData();
          }
        }
      } else {
        setTimeout(() => {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }, 500);
        dispatch(common.toggleToastMessage(true));
        dispatch(correctAnswer(false));
      }
    };
  },

  onContinueButton: () => {
    return (dispatch, getState) => {
      const { getCount, selectedAnswerOption, circuitName, visitedPages } =
        getState();
      dispatch(setKeepImages(selectedAnswerOption));
      dispatch(correctAnswer(false));
      dispatch(leftCircuit(false));
      dispatch(rightCircuit(false));
      dispatch(setBatteryCorrect(false));
      if (getCount < 3) {
        dispatch(setCount(getCount + 1));
        dispatch(thunks.setQuestion());
      } else {
        dispatch(setMcqScreen(false));
        dispatch(correctAnswer(false));

        const { getKeepImages } = getState();

        dispatch(setDraggableSeriesFromMcq(getKeepImages));
      }
    };
  },
  onNextButton: () => {
    return (dispatch, getState) => {
      const { visitedPages } = getState();

      dispatch(setShowNext(false));

      dispatch(setBatteryCorrect(false));

      dispatch(thunks.levelOneContinue());
    };
  },

  levelOneContinue: () => {
    return (dispatch, getState) => {
      dispatch(correctAnswer(false));

      dispatch(thunks.changeScreen());
      dispatch(clearDroppedItems());
      dispatch(selectedCircuit(""));
      dispatch(setShowMainScreen(true));
      dispatch(setShowFirstScreen(false));
      dispatch(setShowSecondScreen(false));
      dispatch(clearButtonPressed(false));
      dispatch(resetDraggableItem());
      dispatch(resetDroppables());
      dispatch(clearDraggables());
      dispatch(setBatteryCorrect(false));

      dispatch(setAnimate(false));
      dispatch(clearCircuit());
      dispatch(setResetFocusState(true));
      dispatch(leftCircuit(false));
      dispatch(rightCircuit(false));
      dispatch(setShowBright(false));
      dispatch(setStoreDropZoneBulb(""));
      dispatch(setKeepImages(""));
      dispatch(setMcqScreen(true));
      dispatch(setCount(1));
      dispatch(setResetSeriesDraggable());
      dispatch(selectAnswerOption(""));
      dispatch(setClearDraggableFromSeries());
    };
  },
  verifyCircuit: (id) => {
    return (dispatch, getState) => {
      dispatch(toggleToastMessage(false));
      const { circuitName: expectedCircuit, numberOfFan } = getState();
      dispatch(setCheckButton(true));
      dispatch(setShowNext(false));
      const series = verifySeriesCircuit(getState, dispatch);
      const parallel = verifyParallelCircuit(getState, dispatch);

      if (
        (series.type && series.type == "series") ||
        (parallel.type && parallel.type == "parallel")
      ) {
        dispatch(setAnswered(true));
      }
      dispatch(setAnimate(series.setAnimate || parallel.setAnimate));
      if (series.type && series.type == "series") {
        dispatch(leftCircuit(series.leftCircuit));
        dispatch(rightCircuit(series.rightCircuit));
      }
      const seriesFormedInsteadOfParallel =
        series.type && series.type !== expectedCircuit;
      const parallelFormedInsteadOfSeries =
        parallel.type && parallel.type !== expectedCircuit;

      const { answered, visitedPages, animate, batteryCorrect } = getState();

      if (
        answered &&
        !seriesFormedInsteadOfParallel &&
        !parallelFormedInsteadOfSeries
      ) {
        dispatch(setResetFocusState(true));

        if (batteryCorrect) {
          dispatch(setShowNext(true));
          EventManager.broadcast("POSITIVE_FEEDBACK");
          dispatch(correctAnswer(true));
          dispatch(toggleToastMessage(false));
        } else {
          dispatch(setShowNext(true));
          EventManager.broadcast("POSITIVE_FEEDBACK");
          if (numberOfFan[0] == "bell") {
            setTimeout(() => {
              EventManager.broadcast("BUZZER");
            });
          }

          if (
            visitedPages.indexOf("series") ==
              visitedPages.lastIndexOf("series") ||
            visitedPages.indexOf("parallel") ==
              visitedPages.lastIndexOf("parallel")
          ) {
            if (
              visitedPages.includes("series") &&
              visitedPages.includes("parallel")
            ) {
              TincanManager.data.completed = true;
              TincanManager.data.percentage = 100;
              TincanManager.saveTincanData();
            } else {
              TincanManager.data.completed = true;
              TincanManager.data.percentage = 50;
              TincanManager.saveTincanData();
            }
          }

          dispatch(correctAnswer(true));
          dispatch(toggleToastMessage(true));
        }
      } else {
        if (seriesFormedInsteadOfParallel) {
          dispatch(setShowNext(false));
          dispatch(setShowBright(true));

          dispatch(common.togglePopup(4));
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 300);
        } else if (parallelFormedInsteadOfSeries) {
          dispatch(setShowNext(false));

          dispatch(common.togglePopup(5));
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 300);
        } else {
          if (expectedCircuit == "series") {
            dispatch(setShowNext(false));
            setTimeout(() => {
              EventManager.broadcast("NEGATIVE_FEEDBACK");
            }, 300);
            dispatch(correctAnswer(false));
            dispatch(toggleToastMessage(false));

            dispatch(common.togglePopup(5));
          } else {
            setTimeout(() => {
              EventManager.broadcast("NEGATIVE_FEEDBACK");
            }, 300);
            dispatch(setShowNext(false));
            dispatch(correctAnswer(false));
            dispatch(toggleToastMessage(false));

            dispatch(common.togglePopup(10));
          }
        }
        const {
          numberOfFan: fan,
          numberOfBattery: battery,

          numberOfWire: wire,
        } = getState();
        if (
          (fan.length == 2 || fan.length == 1) &&
          (wire.length == 5 || wire.length == 4) &&
          battery.length == 1
        ) {
          if (numberOfFan[0] == "bell") {
            setTimeout(() => {
              EventManager.broadcast("BUZZER");
            });
          }
          dispatch(correctAnswer(true));
        }
      }
    };
  },

  storeDroppedData: (a) => {
    return (dispatch, getState) => {
      const {
        draggableItem,
        droppables,
        draggables,
        seriesDraggbale,
        circuitName,
      } = getState();

      let b = draggableItem.id;

      let c = draggableItem.label;
      let CircuitNodeText = "";

      if (a == "dropzone1") {
        CircuitNodeText = data.nodeLiveTextOne;
        dispatch(dropZoneOne({ drop: a, drag: b, label: c }));
      }
      if (a == "dropzone2") {
        CircuitNodeText = data.nodeLiveTextTwo;
        dispatch(dropZoneTwo({ drop: a, drag: b, label: c }));
      }
      if (a == "dropzone3") {
        CircuitNodeText = data.nodeLiveTextThree;
        dispatch(dropZoneThree({ drop: a, drag: b, label: c }));
      }
      if (a == "dropzone4") {
        CircuitNodeText = data.nodeLiveTextFour;
        dispatch(dropZoneFour({ drop: a, drag: b, label: c }));
      }
      if (a == "dropzone5") {
        CircuitNodeText = data.nodeLiveTextFive;
        dispatch(dropZoneFive({ drop: a, drag: b, label: c }));
      }
      if (a == "dropzone6") {
        CircuitNodeText = data.nodeLiveTextSix;
        dispatch(dropZoneSix({ drop: a, drag: b, label: c }));
      }
      if (a == "dropzone7") {
        CircuitNodeText = data.nodeLiveTextSeven;
        dispatch(dropZoneSeven({ drop: a, drag: b, label: c }));
      }
      if (b == "bulb") {
        dispatch(setStoreDropZoneBulb(a));
      }

      const livetext = data.onDropText
        .replace("-1-", draggableItem.label)
        .replace("-2-", a)
        .concat(CircuitNodeText);

      if (isAndroid) {
        setTimeout(() => {
          dispatch(common.thunks.ariaLiveAssertive(livetext));
        }, 500);
      } else {
        setTimeout(() => {
          dispatch(common.thunks.ariaLiveAssertive(livetext));
        }, 800);
      }
      if (circuitName == "parallel") {
        const _draggables = draggables.map((draggable) => {
          if (draggable.id == b) {
            const _draggable = { ...draggable };
            _draggable.totalDrops += 1;
            return _draggable;
          }
          return draggable;
        });
        dispatch(updateDraggables(_draggables));
      } else {
        const _draggables = seriesDraggbale.map((draggable) => {
          if (draggable.id == b) {
            const _draggable = { ...draggable };
            _draggable.totalDrops += 1;
            return _draggable;
          }
          return draggable;
        });
        dispatch(setUpdateDraggableSeries(_draggables));
      }

      const _droppables = droppables.map((droppable) => {
        if (droppable.id == a) {
          const _droppable = { ...droppable };
          _droppable.dragType = b;
          _droppable.hidden = true;
          return _droppable;
        }
        return droppable;
      });

      dispatch(updateDroppables(_droppables));

      dispatch(updateAccessibleList(false));
    };
  },

  reset: () => {
    return (dispatch, state) => {
      dispatch(setAnswered(false));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(updateResetBtnState(true));
      dispatch(setShowBright(false));
      dispatch(setShowNext(false));
      dispatch(setStoreDropZoneBulb(""));
      dispatch(removeAllValues());
      dispatch(setMcqScreen(true));
      dispatch(setKeepImages(""));
      dispatch(setResetSeriesDraggable());
      dispatch(setBatteryCorrect(false));
      dispatch(selectAnswerOption(""));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
      dispatch(setCount(1));
      const { currentPopup } = state();
      if (currentPopup.indexOf(6) >= 0) {
        dispatch(togglePopup(6));
      }
      if (currentPopup.indexOf(7) >= 0) {
        dispatch(togglePopup(7));
      }
      dispatch(togglePopup(1));
      dispatch(resetCounterValues(true));
      dispatch(deleteAttempts());
      TincanManager.resetTincanData();

      dispatch(clearVisitedPages());
      dispatch(clearDroppedItems());
      dispatch(selectedCircuit(""));
      dispatch(setShowMainScreen(true));
      dispatch(setShowFirstScreen(false));
      dispatch(setShowSecondScreen(false));
      dispatch(clearButtonPressed(false));
      dispatch(resetDraggableItem());
      dispatch(resetDroppables());
      dispatch(clearDraggables());
      dispatch(setClearDraggableFromSeries());

      dispatch(correctAnswer(false));

      dispatch(setAnimate(false));
      dispatch(clearCircuit());
      dispatch(leftCircuit(false));
      dispatch(rightCircuit(false));
      TincanManager.resetTincanData();
    };
  },
  clearDroppedItems: () => (dispatch, getState) => {
    dispatch(clearDraggables());
    dispatch(setClearDraggableFromSeries());
    dispatch(clearDroppedItems());
    dispatch(resetDragTypeFromDroppables());
    dispatch(setDraggableItem(null));
    dispatch(setAnswered(false));
    dispatch(clearCircuit());
    dispatch(leftCircuit(false));
    dispatch(rightCircuit(false));
    dispatch(setCheckButton(false));
    dispatch(setStoreDropZoneBulb(""));
    dispatch(setShowBright(false));
    dispatch(setBatteryCorrect(false));
    dispatch(correctAnswer(false));
    setTimeout(() => {
      EventManager.broadcast("STOP_ALL");
    });
  },

  changeScreen: () => {
    return (dispatch, getState) => {
      const { visitedPages } = getState();
      if (visitedPages.length < 2) {
        dispatch(setShowMainScreen(true));
        dispatch(setShowFirstScreen(false));
        dispatch(correctAnswer(false));
        dispatch(setAnswered(false));
        dispatch(leftCircuit(false));
        dispatch(setResetFocusState(true));
        dispatch(toggleToastMessage(false));
        dispatch(setBatteryCorrect(false));
      } else {
        dispatch(setShowMainScreen(false));
        dispatch(setShowFirstScreen(true));
        dispatch(setAnswered(false));
        dispatch(leftCircuit(false));
        dispatch(setResetFocusState(true));
        dispatch(toggleToastMessage(false));
        dispatch(setBatteryCorrect(false));
      }
    };
  },

  selectedCircuit: (circuit) => (dispatch, getState) => {
    dispatch(selectedCircuit(circuit));
    const { resetBtnState } = getState();
    if (resetBtnState) {
      dispatch(common.updateResetBtnState(false));
    }
    setTimeout(() => {
      dispatch(common.setResetFocusState(true));
    }, 10);
  },

  altText: (name) => {
    return (dispatch, getState) => {
      const {
        droppedAtOne: atOne,
        droppedAtTwo: atTwo,
        droppedAtThree: atThree,
        droppedAtFour: atFour,
        droppedAtFive: atFive,
        droppedAtSix: atSix,
        droppedAtSeven: atSeven,
      } = getState();

      let escapeObject = data.wireText;

      let dropzoneTopLeft = alt(atOne);
      let dropzoneTopRight = alt(atTwo);
      let dropzoneBottomLeft = alt(atFive);
      let dropzoneBottomRight = alt(atFour);
      let dropzoneLeft = alt(atSix);
      let dropzoneRight = alt(atThree);
      let center = alt(atSeven);

      let stringTop = "";
      let stringBottom = "";
      let stringLeft =
        dropzoneLeft != escapeObject
          ? data.left.replace("-1-", dropzoneLeft)
          : "";
      let stringRight =
        dropzoneRight != escapeObject
          ? data.right.replace("-1-", dropzoneRight)
          : "";

      if (
        dropzoneTopLeft == dropzoneTopRight &&
        dropzoneTopLeft != escapeObject &&
        dropzoneTopRight != escapeObject
      ) {
        stringTop = data.topAltOne.replace("-1-", dropzoneTopLeft);
      } else if (dropzoneTopLeft != dropzoneTopRight) {
        stringTop =
          dropzoneTopLeft != escapeObject && dropzoneTopRight != escapeObject
            ? data.topAltTwo
                .replace("-1-", dropzoneTopLeft)
                .replace("-2-", dropzoneTopRight)
            : data.topWithoutWire.replace(
                "-1-",
                dropzoneTopLeft != escapeObject
                  ? dropzoneTopLeft
                  : "" || dropzoneTopRight != escapeObject
                  ? dropzoneTopRight
                  : ""
              );
      }

      if (
        dropzoneBottomLeft == dropzoneBottomRight &&
        dropzoneBottomLeft != escapeObject &&
        dropzoneBottomRight != escapeObject
      ) {
        stringBottom = data.bottomAltOne.replace("-1-", dropzoneBottomRight);
      } else if (dropzoneBottomLeft != dropzoneBottomRight) {
        stringBottom =
          dropzoneBottomLeft != escapeObject &&
          dropzoneBottomRight != escapeObject
            ? data.bottomAltTwo
                .replace("-1-", dropzoneBottomLeft)
                .replace("-2-", dropzoneBottomRight)
            : data.bottomWithoutWire.replace(
                "-1-",
                dropzoneBottomLeft != escapeObject
                  ? dropzoneBottomLeft
                  : "" || dropzoneBottomRight != escapeObject
                  ? dropzoneBottomRight
                  : ""
              );
      }

      if (name == "fullCircuit") {
        let fullCircuitAlt = data.fullCircuitAlt
          .replace("-1-", stringLeft)
          .replace("-2-", stringTop)
          .replace("-3-", stringRight)
          .replace("-4-", stringBottom);
        dispatch(setAltText(fullCircuitAlt));
      }

      if (name == "leftCircuit") {
        let leftCircuitAlt = data.leftCircuitAlt
          .replace("-1-", dropzoneLeft)
          .replace("-2-", dropzoneTopLeft)
          .replace("-3-", center)
          .replace("-4-", dropzoneBottomLeft);
        dispatch(setAltText(leftCircuitAlt));
      }

      if (name == "rightCircuit") {
        let rightCircuitAlt = data.rightCircuitAlt
          .replace("-1-", center)
          .replace("-2-", dropzoneTopRight)
          .replace("-3-", dropzoneRight)
          .replace("-4-", dropzoneBottomRight);
        dispatch(setAltText(rightCircuitAlt));
      }

      if (name == "parallel") {
        let parallel = data.parallelAlt
          .replace("-1-", stringLeft)
          .replace("-2-", stringTop)
          .replace("-3-", stringRight)
          .replace("-4-", stringBottom)
          .replace("-5-", center);
        dispatch(setAltText(parallel));
      }
    };
  },
};

const alt = (zone) => {
  if (zone.length > 0 && zone[0].label == data.fanText) {
    return data.whiteFan;
  } else if (zone.length > 0 && zone[0].label == data.bulbText) {
    return data.glowBulb;
  } else if (zone.length > 0 && zone[0].label == data.bellText) {
    return data.ringingBell;
  } else if (zone.length > 0) {
    return zone[0].label;
  } else {
    return "";
  }
};

const checkEverything = (object) => {
  return (
    object[0].drag == "battery" ||
    object[0].drag == "switch" ||
    checkOnlyFanAndWire(object)
  );
};

const checkOnlyFanAndWire = (object) => {
  return (
    object[0].drag == "fan" ||
    object[0].drag == "bell" ||
    object[0].drag == "bulb" ||
    object[0].drag == "wire"
  );
};

const checkForTypes = (types, object) => {
  return types.some(
    (type) => object.length && object[0].drag && object[0].drag == type
  );
};

const checkDroppedAt = (keys, object) => {
  return keys.every(
    (key) =>
      object[key] && Array.isArray(object[key]) && object[key].length <= 1
  );
};

const verifySeriesCircuit = (getState, dispatch) => {
  const responseObject = {
    type: null,
    setAnimate: false,
    leftCircuit: false,
    rightCircuit: false,
  };
  const { droppedAtSeven } = getState();

  const {
    numberOfFan: fan,
    numberOfBattery: battery,

    numberOfWire: wire,
  } = getState();

  //check for full circuit
  if (droppedAtSeven.length == 0) {
    if (
      droppedAtSeven.length == 0 &&
      ((fan.length == 2 && (wire.length == 3 || wire.length == 2)) ||
        (fan.length == 1 && wire.length == 4)) &&
      (battery.length == 1 || battery.length == 2)
    ) {
      dispatch(thunks.altText("fullCircuit"));
      responseObject.type = "series";
      responseObject.setAnimate = true;
      return responseObject;
    }
  }

  const { droppedAtSeven: seven } = getState();

  //series on left side
  if (seven.length == 1) {
    const reduxStateOne = getState();
    if (
      checkDroppedAt(
        ["droppedAtTwo", "droppedAtThree", "droppedAtFour"],
        reduxStateOne
      )
    ) {
      const { droppedAtOne, droppedAtSix, droppedAtFive } = getState();
      let zoneOne = false;
      let zoneFive = false;
      let zoneSix = false;
      let zoneSeven = false;
      let zoneTwo = true;
      let zoneThree = true;
      let zoneFour = true;

      if (droppedAtOne.length) {
        zoneOne = checkEverything(droppedAtOne);
      }
      if (droppedAtFive.length) {
        zoneFive = checkEverything(droppedAtFive);
      }
      if (droppedAtSix.length) {
        zoneSix = checkEverything(droppedAtSix);
      }
      if (seven.length) {
        zoneSeven = checkEverything(seven);
      }
      const { droppedAtTwo, droppedAtFour, droppedAtThree } = getState();
      if (droppedAtTwo.length) {
        zoneTwo = checkOnlyFanAndWire(droppedAtTwo);
      }
      if (droppedAtThree.length) {
        zoneThree = checkOnlyFanAndWire(droppedAtThree);
      }
      if (droppedAtFour.length) {
        zoneFour = checkOnlyFanAndWire(droppedAtFour);
      }

      if (
        ((fan.length == 1 && wire.length >= 1) ||
          (fan.length == 2 && (wire.length >= 0 || wire.length == 0))) &&
        (battery.length == 1 || battery.length == 2) &&
        droppedAtOne.length == 1 &&
        droppedAtFive.length == 1 &&
        droppedAtSix.length == 1 &&
        zoneOne &&
        zoneFive &&
        zoneSix &&
        zoneSeven &&
        zoneTwo &&
        zoneThree &&
        zoneFour &&
        ((droppedAtTwo.length == 0 &&
          droppedAtThree.length == 0 &&
          droppedAtFour.length == 0) ||
          (droppedAtTwo.length == 1 &&
            droppedAtThree.length == 0 &&
            droppedAtFour.length == 0) ||
          (droppedAtTwo.length == 0 &&
            droppedAtThree.length == 1 &&
            droppedAtFour.length == 0) ||
          (droppedAtTwo.length == 0 &&
            droppedAtThree.length == 0 &&
            droppedAtFour.length == 1) ||
          (droppedAtTwo.length == 1 &&
            droppedAtThree.length == 1 &&
            droppedAtFour.length == 0) ||
          (droppedAtTwo.length == 0 &&
            droppedAtThree.length == 1 &&
            droppedAtFour.length == 1) ||
          (droppedAtTwo.length == 1 &&
            droppedAtThree.length == 0 &&
            droppedAtFour.length == 1))
      ) {
        dispatch(thunks.altText("leftCircuit"));
        responseObject.type = "series";
        const { droppedAtOne, droppedAtFive, droppedAtSix, droppedAtSeven } =
          getState();
        if (
          droppedAtOne.length > 0 &&
          droppedAtFive.length > 0 &&
          droppedAtSix.length > 0 &&
          droppedAtSeven.length > 0
        ) {
          const animation =
            droppedAtOne[0].drag == "bulb" ||
            droppedAtFive[0].drag == "bulb" ||
            droppedAtSix[0].drag == "bulb" ||
            droppedAtSeven[0].drag == "bulb";

          if (animation) {
            responseObject.setAnimate = false;
            responseObject.leftCircuit = true;
          }
        }
      }
    }

    //series on right side
    const { droppedAtOne, droppedAtSix, droppedAtFive } = getState();
    const reduxState = getState();
    if (
      checkDroppedAt(
        ["droppedAtOne", "droppedAtFive", "droppedAtSix"],
        reduxState
      )
    ) {
      const { droppedAtTwo, droppedAtThree, droppedAtFour } = getState();

      let zoneSecond = false;
      let zoneThird = false;
      let zoneFourth = false;
      let zoneSeventh = false;
      let zoneFirst = true;
      let zoneSixth = true;
      let zoneFifth = true;

      if (droppedAtTwo.length) {
        zoneSecond = checkEverything(droppedAtTwo);
      }

      if (droppedAtThree.length) {
        zoneThird = checkEverything(droppedAtThree);
      }

      if (droppedAtFour.length) {
        zoneFourth = checkEverything(droppedAtFour);
      }

      if (seven.length) {
        zoneSeventh = checkEverything(seven);
      }

      if (droppedAtOne.length) {
        zoneFirst = checkOnlyFanAndWire(droppedAtOne);
      }

      if (droppedAtFive.length) {
        zoneFifth = checkOnlyFanAndWire(droppedAtFive);
      }

      if (droppedAtSix.length) {
        zoneSixth = checkOnlyFanAndWire(droppedAtSix);
      }

      if (
        ((fan.length == 1 && wire.length >= 1) ||
          (fan.length == 2 && (wire.length >= 0 || wire.length == 0))) &&
        (battery.length == 1 || battery.length == 2) &&
        droppedAtTwo.length == 1 &&
        droppedAtThree.length == 1 &&
        droppedAtFour.length == 1 &&
        zoneSecond &&
        zoneFourth &&
        zoneThird &&
        zoneSeventh &&
        zoneFifth &&
        zoneFirst &&
        zoneSixth &&
        ((!droppedAtOne.length &&
          !droppedAtFive.length &&
          !droppedAtSix.length) ||
          (droppedAtOne.length == 1 &&
            !droppedAtFive.length &&
            !droppedAtSix.length) ||
          (!droppedAtOne.length &&
            droppedAtFive.length == 1 &&
            !droppedAtSix.length) ||
          (!droppedAtOne.length &&
            !droppedAtFive.length &&
            droppedAtSix.length == 1) ||
          (droppedAtOne.length == 1 &&
            droppedAtFive.length == 1 &&
            !droppedAtSix.length) ||
          (droppedAtOne.length == 1 &&
            !droppedAtFive.length &&
            droppedAtSix.length == 1) ||
          (!droppedAtOne.length &&
            droppedAtFive.length == 1 &&
            droppedAtSix.length == 1))
      ) {
        dispatch(thunks.altText("rightCircuit"));
        responseObject.type = "series";
        if (
          droppedAtTwo.length &&
          droppedAtThree.length &&
          droppedAtFour.length &&
          droppedAtSeven.length
        ) {
          const animation =
            droppedAtTwo[0].drag == "bulb" ||
            droppedAtThree[0].drag == "bulb" ||
            droppedAtFour[0].drag == "bulb" ||
            droppedAtSeven[0].drag == "bulb";

          if (animation) {
            responseObject.setAnimate = false;
            responseObject.rightCircuit = true;
          }
        }
      }
    }
    return responseObject;
  }

  return responseObject;
};

const verifyParallelCircuit = (getState, dispatch) => {
  const responseObject = {
    type: null,
    setAnimate: false,
  };

  const {
    numberOfFan: fan,
    numberOfBattery: battery,

    numberOfWire: wire,
  } = getState();

  const {
    droppedAtOne,
    droppedAtTwo,
    droppedAtThree,
    droppedAtFour,
    droppedAtSix,
    droppedAtFive,
    droppedAtSeven,
  } = getState();

  const temp1 = ["battery", "wire"];

  const one = checkForTypes(temp1, droppedAtOne);
  const two = checkForTypes(temp1, droppedAtTwo);
  const four = checkForTypes(temp1, droppedAtFour);
  const sixSecond = checkForTypes(temp1, droppedAtSix);
  const fiveSecond = checkForTypes(temp1, droppedAtFive);
  const threeSecond = checkForTypes(temp1, droppedAtThree);

  const six = checkForTypes(["bulb", "fan", "bell"], droppedAtSix);
  const three = checkForTypes(["bulb", "fan", "bell"], droppedAtThree);
  const seven = checkForTypes(["bulb", "fan", "bell"], droppedAtSeven);
  const threeThird = checkForTypes(["bulb", "fan", "bell"], droppedAtThree);
  const sevenNew = checkForTypes(["battery"], droppedAtSeven);
  const sixBattery = checkForTypes(["battery"], droppedAtSix);
  const twoBulb = checkForTypes(["bulb", "fan", "bell"], droppedAtTwo);
  const fourBulb = checkForTypes(["bulb", "fan", "bell"], droppedAtFour);

  const oneBulb = checkForTypes(["bulb", "fan", "bell"], droppedAtOne);
  const fiveBulb = checkForTypes(["bulb", "fan", "bell"], droppedAtFive);
  const five = checkForTypes(["wire"], droppedAtFive);
  const oneSecond = checkForTypes(["wire"], droppedAtOne);
  const twoSecond = checkForTypes(["wire"], droppedAtTwo);
  const fourSecond = checkForTypes(["wire"], droppedAtFour);

  if (
    two &&
    threeSecond &&
    four &&
    five &&
    six &&
    (seven || sevenNew) &&
    oneSecond &&
    (battery.length == 1 || battery == 2)
  ) {
    dispatch(correctAnswer(true));
    responseObject.type = "parallel";
    dispatch(thunks.altText("parallel"));
  } else if (
    three &&
    seven &&
    twoSecond &&
    fourSecond &&
    battery.length == 1 &&
    wire.length == 4
  ) {
    dispatch(correctAnswer(true));
    responseObject.type = "parallel";
    dispatch(thunks.altText("parallel"));
  } else if (
    sevenNew &&
    (twoBulb || three || fourBulb) &&
    (fiveBulb || six || oneBulb) &&
    wire.length == 4 &&
    battery.length == 1
  ) {
    dispatch(thunks.altText("parallel"));
    dispatch(correctAnswer(true));
    responseObject.type = "parallel";
  }

  return responseObject;
};
