import data from "../data";
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
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

export const DYNAMIC_ALTTEXT = "DYNAMIC_ALTTEXT";

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
  // console.log("Page", value);
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

export const setAltText = (value) => {
  return {
    type: DYNAMIC_ALTTEXT,
    value,
  };
};

export const thunks = {
  addObjects: () => {
    return (dispatch, getState) => {
      const { draggableItem } = getState();
      let name = draggableItem.id;
      if (name == "fan") {
        dispatch(addFan(name));
      }
      if (name == "battery") {
        dispatch(addBattery(name));
      }
      if (name == "switch") {
        dispatch(addSwitch(name));
      }
      if (name == "wire") {
        dispatch(addWire(name));
      }
      dispatch(setDraggableItem(null));
    };
  },

  onNextButton: () => {
    return (dispatch, getState) => {
      const { visitedPages } = getState();
      // dispatch(setShowMainScreen(true));
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
      dispatch(clearDroppedItems());
      dispatch(correctAnswer(false));
      dispatch(leftCircuit(false));
      dispatch(setAnimate(false));
      dispatch(clearCircuit());
      dispatch(setResetFocusState(true));
      setTimeout(() => {
        EventManager.broadcast("STOP_ALL");
      }, 300);
    };
  },

  verifyCircuit: (id) => {
    return (dispatch, getState) => {
      // console.log("here inside verifyCircuit");
      // dispatch(thunks.altText());
      dispatch(toggleToastMessage(false));
      const { circuitName: expectedCircuit } = getState();
      const series = verifySeriesCircuit(dispatch, getState);
      const parallel = verifyParallelCircuit(dispatch, getState);
      // console.log("Verify:", series, parallel);
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

      const { answered, visitedPages, countAttempts: a } = getState();
      if (
        answered &&
        !seriesFormedInsteadOfParallel &&
        !parallelFormedInsteadOfSeries
      ) {
        // EventManager.broadcast("POSITIVE_FEEDBACK");
        // dispatch(correctAnswer(true));
        // dispatch(toggleToastMessage(true));

        dispatch(setResetFocusState(true));
        dispatch(countAttempts(expectedCircuit));
        // console.log("Attempot", a, expectedCircuit);

        if (a.length < 1) {
          TincanManager.data.percentage = 50;
          TincanManager.saveTincanData();
        } else {
          // console.log("Reached");
          TincanManager.data.completed = true;
          TincanManager.data.percentage = 100;
          TincanManager.saveTincanData();
        }
        setTimeout(() => {
          EventManager.broadcast("POSITIVE_FEEDBACK");
          dispatch(correctAnswer(true));
          dispatch(toggleToastMessage(true));
        }, 300);
      } else {
        // dispatch(correctAnswer(false));
        dispatch(setAnswered(false));
        if (seriesFormedInsteadOfParallel) {
          dispatch(common.togglePopup(4));
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 300);
        } else if (parallelFormedInsteadOfSeries) {
          dispatch(common.togglePopup(5));
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }, 300);
        } else {
          setTimeout(() => {
            EventManager.broadcast("NEGATIVE_FEEDBACK");
            dispatch(correctAnswer(false));
            dispatch(toggleToastMessage(true));
          }, 100);
        }
      }
      if (!answered) {
        setTimeout(() => {
          dispatch(toggleToastMessage(true));
        }, 100);
      }
    };
  },

  storeDroppedData: (a) => {
    return (dispatch, getState) => {
      const { draggableItem, droppables, draggables } = getState();

      let b = draggableItem.id;
      let c = draggableItem.label;
      let CircuitNodeText = "";

      // console.log("A: ", a.id, "B:", b, "C: ", c);

      if (a.id == "dropzone1") {
        CircuitNodeText = data.nodeLiveTextOne;
        dispatch(dropZoneOne({ drop: a.id, drag: b, label: c }));
      }
      if (a.id == "dropzone2") {
        CircuitNodeText = data.nodeLiveTextTwo;
        dispatch(dropZoneTwo({ drop: a.id, drag: b, label: c }));
      }
      if (a.id == "dropzone3") {
        CircuitNodeText = data.nodeLiveTextThree;
        dispatch(dropZoneThree({ drop: a.id, drag: b, label: c }));
      }
      if (a.id == "dropzone4") {
        CircuitNodeText = data.nodeLiveTextFour;
        dispatch(dropZoneFour({ drop: a.id, drag: b, label: c }));
      }
      if (a.id == "dropzone5") {
        CircuitNodeText = data.nodeLiveTextFive;
        dispatch(dropZoneFive({ drop: a.id, drag: b, label: c }));
      }
      if (a.id == "dropzone6") {
        CircuitNodeText = data.nodeLiveTextSix;
        dispatch(dropZoneSix({ drop: a.id, drag: b, label: c }));
      }
      if (a.id == "dropzone7") {
        CircuitNodeText = data.nodeLiveTextSeven;
        dispatch(dropZoneSeven({ drop: a.id, drag: b, label: c }));
      }

      const livetext = data.onDropText
        .replace("-1-", c)
        .replace("-2-", a.altText)
        .concat(CircuitNodeText);
      // dispatch(ariaLiveText(livetext));
      if (isAndroid) {
        setTimeout(() => {
          dispatch(common.thunks.ariaLiveAssertive(livetext));
        }, 500);
      } else {
        setTimeout(() => {
          dispatch(common.thunks.ariaLiveAssertive(livetext));
        }, 800);
      }

      const _draggables = draggables.map((draggable) => {
        if (draggable.id == b) {
          const _draggable = { ...draggable };
          _draggable.totalDrops += 1;
          return _draggable;
        }
        return draggable;
      });

      const _droppables = droppables.map((droppable) => {
        if (droppable.id == a.id) {
          const _droppable = { ...droppable };
          _droppable.dragType = b;
          _droppable.hidden = true;
          return _droppable;
        }
        return droppable;
      });
      dispatch(updateDraggables(_draggables));
      dispatch(updateDroppables(_droppables));

      dispatch(updateAccessibleList(false));
    };
  },

  reset: () => {
    return (dispatch, state) => {
      dispatch(setAnswered(false));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(updateResetBtnState(true));
      dispatch(removeAllValues());
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
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
      dispatch(clearDroppedItems());
      dispatch(correctAnswer(false));
      dispatch(leftCircuit(false));
      dispatch(setAnimate(false));
      dispatch(clearCircuit());
      dispatch(deleteAttempts());
    };
  },
  clearDroppedItems: () => (dispatch, getState) => {
    dispatch(clearDraggables());
    dispatch(clearDroppedItems());
    dispatch(resetDragTypeFromDroppables());
    dispatch(setDraggableItem(null));
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
      } else {
        dispatch(setShowMainScreen(false));
        dispatch(setShowFirstScreen(true));
        dispatch(setAnswered(false));
        dispatch(leftCircuit(false));
        dispatch(setResetFocusState(true));
        dispatch(toggleToastMessage(false));
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
      // console.log("circuit", name);
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
  return object[0].drag == "fan" || object[0].drag == "wire";
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

const verifySeriesCircuit = (dispatch, getState) => {
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
    numberOfSwitch: sw,
    numberOfWire: wire,
  } = getState();

  // if (circuitName == "series") {
  //check for full circuit
  if (droppedAtSeven.length == 0) {
    if (
      droppedAtSeven.length == 0 &&
      ((fan.length == 2 && wire.length == 2) ||
        (fan.length == 1 && wire.length == 3)) &&
      battery.length == 1 &&
      sw.length == 1
    ) {
      // dispatch(setAnswered(true));
      // dispatch(setAnimate(true));
      dispatch(thunks.altText("fullCircuit"));
      responseObject.type = "series";
      responseObject.setAnimate = true;
      return responseObject;
    }
  }

  const { droppedAtSeven: seven } = getState();
  // const reduxState = getState();

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
          (fan.length == 2 && wire.length >= 0)) &&
        battery.length == 1 &&
        sw.length == 1 &&
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
        // dispatch(setAnswered(true)); // this circuit is in series.
        responseObject.type = "series";
        dispatch(thunks.altText("leftCircuit"));
        const { droppedAtOne, droppedAtFive, droppedAtSix, droppedAtSeven } =
          getState();
        if (
          droppedAtOne.length > 0 &&
          droppedAtFive.length > 0 &&
          droppedAtSix.length > 0 &&
          droppedAtSeven.length > 0
        ) {
          const animation =
            droppedAtOne[0].drag == "fan" ||
            droppedAtFive[0].drag == "fan" ||
            droppedAtSix[0].drag == "fan" ||
            droppedAtSeven[0].drag == "fan";
          if (animation) {
            responseObject.setAnimate = false;
            responseObject.leftCircuit = true;
            // dispatch(setAnimate(false));
            // dispatch(leftCircuit(true));
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
          (fan.length == 2 && wire.length >= 0)) &&
        battery.length == 1 &&
        sw.length == 1 &&
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
        // dispatch(setAnswered(true)); // this circuit is in series
        responseObject.type = "series";
        dispatch(thunks.altText("rightCircuit"));
        if (
          droppedAtTwo.length &&
          droppedAtThree.length &&
          droppedAtFour.length &&
          droppedAtSeven.length
        ) {
          const animation =
            droppedAtTwo[0].drag == "fan" ||
            droppedAtThree[0].drag == "fan" ||
            droppedAtFour[0].drag == "fan" ||
            droppedAtSeven[0].drag == "fan";
          if (animation) {
            responseObject.setAnimate = false;
            responseObject.rightCircuit = true;
            // dispatch(rightCircuit(true));
            // dispatch(setAnimate(false));
          }
        }
      }
    }
    return responseObject;
  }
  // }
  return responseObject;
};

const verifyParallelCircuit = (dispatch, getState) => {
  const responseObject = {
    type: null,
    setAnimate: false,
  };

  const {
    numberOfFan: fan,
    numberOfBattery: battery,
    numberOfSwitch: sw,
    numberOfWire: wire,
  } = getState();

  // if (circuitName == "parallel") {
  const {
    droppedAtOne,
    droppedAtTwo,
    droppedAtThree,
    droppedAtFour,
    droppedAtSix,
    droppedAtFive,
    droppedAtSeven,
  } = getState();

  const temp1 = ["battery", "switch", "wire"];

  const one = checkForTypes(temp1, droppedAtOne);
  const two = checkForTypes(temp1, droppedAtTwo);
  const four = checkForTypes(temp1, droppedAtFour);
  const sixSecond = checkForTypes(temp1, droppedAtSix);
  const fiveSecond = checkForTypes(temp1, droppedAtFive);
  const threeSecond = checkForTypes(temp1, droppedAtThree);

  const six = checkForTypes(["fan"], droppedAtSix);
  const three = checkForTypes(["fan"], droppedAtThree);
  const seven = checkForTypes(["fan"], droppedAtSeven);
  const threeThird = checkForTypes(["fan"], droppedAtThree);

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
    seven &&
    oneSecond &&
    sw.length == 1 &&
    battery.length == 1
  ) {
    // dispatch(setAnswered(true));
    // dispatch(setAnimate(false));
    responseObject.type = "parallel";
    dispatch(thunks.altText("parallel"));
  }

  if (
    one &&
    twoSecond &&
    threeThird &&
    seven &&
    fourSecond &&
    fiveSecond &&
    sixSecond &&
    sw.length == 1 &&
    battery.length == 1
  ) {
    // dispatch(setAnswered(true));
    // dispatch(setAnimate(false));
    responseObject.type = "parallel";
    dispatch(thunks.altText("parallel"));
  }
  return responseObject;
  // }
};
