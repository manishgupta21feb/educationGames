import * as actions from "../../app/actions";
import data from "../data/data.en";
import { isAndroid } from "react-device-detect";

export const QUESTIONS_DATA = "QUESTIONS_DATA";
export const SET_QUESTION = "SET_QUESTION";
export const DROPPABLE_CHNAGE_STATE = "DROPPABLE_CHNAGE_STATE";
export const DROPPABLE_CHANGE_FALSE = "DROPPABLE_CHANGE_FALSE";
export const SET_DROPPABLES = "SET_DROPPABLES";
export const DEFAULT_DROPZONE = "DEFAULT_DROPZONE";
export const SET_DROP_LABEL = "SET_DROP_LABEL";
export const ACCESSIBLE_LIST_VISIBLE = "ACCESSIBLE_LIST_VISIBLE";
export const SET_DRAGGABLE_VALUE = "SET_DRAGGABLE_VALUE";
export const NUMBER_OF_PROTONS = "NUMBER_OF_PROTONS";
export const NUMBER_OF_NEUTRONS = "NUMBER_OF_NEUTRONS";
export const NUMBER_OF_VALANCE_ELECTRONS = "NUMBER_OF_VALANCE_ELECTRONS";
export const SET_ITEMS_MATCHED = "SET_ITEMS_MATCHED";
export const UPDATE_ITEMS_MATCHED = "UPDATE_ITEMS_MATCHED";
export const UPDATE_DROP_ZONE = "UPDATE_DROP_ZONE";
export const ORBIT_ONE_ELECTRON = "ORBIT_ONE_ELECTRON";
export const ORBIT_TWO_ELECTRON = "ORBIT_TWO_ELECTRON";
export const ORBIT_THREE_ELECTRON = "ORBIT_THREE_ELECTRON";
export const UPDATE_SET_DROPPABLES = "UPDATE_SET_DROPPABLES";
export const ORBIT_TWO_NO_BORDER = "ORBIT_TWO_NO_BORDER";
export const ORBIT_THREE_NO_BORDER = "ORBIT_THREE_NO_BORDER";
export const ORBIT_ONE_NO_BORDER = "ORBIT_ONE_NO_BORDER";
export const SHOW_NUCLEUS = "SHOW_NUCLEUS";
export const EMPTY_COUNT_ONE = "EMPTY_COUNT_ONE";
export const EMPTY_COUNT_TWO = "EMPTY_COUNT_TWO";
export const EMPTY_COUNT_THREE = "EMPTY_COUNT_THREE";
export const CORRECT_ANSWER = "CORRECT_ANSWER";
export const DISABLE_SUBMIT = "DISABLE_SUBMIT";
export const DISABLE_PROTON = "DISABLE_PROTON";
export const DISABLE_NEUTRON = "DISABLE_NEUTRON";
export const DISABLE_VALANCE = "DISABLE_VALANCE";
export const PARTIAL_INCORRECT = "PARTIAL_INCORRECT";

export const common = { ...actions };

export const setPartialIncorrect = (val) => ({
  type: PARTIAL_INCORRECT,
  val,
});
export const setDisableProton = (val) => ({
  type: DISABLE_PROTON,
  val,
});

export const setDisableNeutron = (val) => ({
  type: DISABLE_NEUTRON,
  val,
});

export const setDisableValance = (val) => ({
  type: DISABLE_VALANCE,
  val,
});
export const setCorrectAnswer = (val) => ({
  type: CORRECT_ANSWER,
  val,
});

export const setDisableSubmit = (val) => ({
  type: DISABLE_SUBMIT,
  val,
});
export const setOneEmpty = () => ({
  type: EMPTY_COUNT_ONE,
});
export const setTwoEmpty = () => ({
  type: EMPTY_COUNT_TWO,
});
export const setThreeEmpty = () => ({
  type: EMPTY_COUNT_THREE,
});
export const setShowNucleus = (val) => ({
  type: SHOW_NUCLEUS,
  val,
});
export const setOrbitOneCount = (srno, orbitdata) => ({
  type: ORBIT_ONE_ELECTRON,
  srno,
  orbitdata,
});
export const setOrbitTwoCount = (srno, orbitdata) => ({
  type: ORBIT_TWO_ELECTRON,
  srno,
  orbitdata,
});
export const setOrbitThreeCount = (srno, orbitdata) => ({
  type: ORBIT_THREE_ELECTRON,
  srno,
  orbitdata,
});

export const setupdateSetDroppable = (updatedDropsZone) => ({
  type: UPDATE_SET_DROPPABLES,
  updatedDropsZone,
});

export const updateQuestionsData = (data) => ({
  type: QUESTIONS_DATA,
  data,
});

export const setOrbitThreeNoBorder = (val) => ({
  type: ORBIT_THREE_NO_BORDER,
  val,
});

export const setOrbitTwoNoBorder = (val) => ({
  type: ORBIT_TWO_NO_BORDER,
  val,
});

export const setOrbitOneNoBorder = (val) => ({
  type: ORBIT_ONE_NO_BORDER,
  val,
});

export const setQuestion = (question) => ({
  type: SET_QUESTION,
  question,
});
export const droppableChangeState = (value, blnState) => {
  return {
    type: DROPPABLE_CHNAGE_STATE,
    value,
    blnState,
  };
};

export const droppableChangeFalse = () => {
  return {
    type: DROPPABLE_CHANGE_FALSE,
  };
};
export const setDropZone = (question) => {
  return {
    type: SET_DROPPABLES,

    question,
  };
};
export const setDropLabel = (question) => {
  return {
    type: SET_DROP_LABEL,
    question,
  };
};
export const updateAccessibleList = (val) => ({
  val,
  type: ACCESSIBLE_LIST_VISIBLE,
});

export const setDraggableValue = (dragValue) => ({
  dragValue,
  type: SET_DRAGGABLE_VALUE,
});

export const setNumberOfProtons = (val) => ({
  type: NUMBER_OF_PROTONS,
  val,
});

export const setNumberOfNeutrons = (val) => ({
  type: NUMBER_OF_NEUTRONS,
  val,
});
export const setNumberOfValance = (val) => ({
  type: NUMBER_OF_VALANCE_ELECTRONS,
  val,
});

export const setItemsMatched = (drag, drop) => ({
  drag,
  drop,
  type: SET_ITEMS_MATCHED,
});
export const updateItemsMatched = (items) => ({
  items,
  type: UPDATE_ITEMS_MATCHED,
});
export const updateDropZone = () => ({
  type: UPDATE_DROP_ZONE,
});

export const thunks = {
  setQuestion: () => {
    return (dispatch, getState) => {
      const { questionsData, questionCount, selectedQuestion } = getState();

      const _questionsData = questionsData.map((q) => ({ ...q }));

      const index = Math.floor(Math.random() * _questionsData.length);

      const question = { ..._questionsData.splice(index, 1)[0] };

      dispatch(updateQuestionsData(_questionsData));
      dispatch(setQuestion(question));
    };
  },
  setMandatoryData: () => {
    return (dispatch, getState) => {
      dispatch(thunks.setQuestion());
      const { selectedQuestion } = getState();
      dispatch(setDropLabel(selectedQuestion));
    };
  },
  onDrop: (dropzone) => {
    return (dispatch, getState) => {
      const {
        draggableValue,
        setDroppable,
        dndCount,
        orbitOneCount,
        orbitTwoCount,
        orbitThreeCount,
      } = getState();

      dispatch(setItemsMatched(draggableValue, dropzone));
      if (dropzone.id.includes("orbit1")) {
        dispatch(setOrbitOneCount(dropzone.srno, dropzone.id));
      }
      if (dropzone.id.includes("orbit2")) {
        dispatch(setOrbitTwoCount(dropzone.srno, dropzone.id));
      }
      if (dropzone.id.includes("orbit3")) {
        dispatch(setOrbitThreeCount(dropzone.srno, dropzone.id));
      }
      dispatch(setDisableSubmit(false));

      const livetext = `${draggableValue.altxt} ${data.droppedLabel} ${dropzone.label}`;

      if (isAndroid) {
        setTimeout(() => {
          dispatch(common.thunks.ariaLiveAssertive(livetext));
        }, 500);
      } else {
        setTimeout(() => {
          dispatch(common.thunks.ariaLiveAssertive(livetext));
        });
      }
      dispatch(common.updateResetBtnState(false));
      dispatch(setDraggableValue(null));
    };
  },

  submitAnswer: () => {
    return (dispatch, getState) => {
      const {
        matchedItems,
        selectedQuestion,
        orbitOneCount,
        orbitTwoCount,
        orbitThreeCount,
        numberOfProtons,
        numberOfNeutrons,
        numberOfValance,
        setDroppable,
      } = getState();
      let p = false;
      let n = false;
      let ve = false;

      let orbit3Val = false;
      let orbit2Val = false;
      let orbit1Val = false;
      let _setDroppable = [...setDroppable];

      if (selectedQuestion.orbitThree == orbitThreeCount.length) {
        orbit3Val = true;
        dispatch(setOrbitThreeNoBorder(true));

        _setDroppable = _setDroppable.filter((sd) => {
          if (!sd.id.includes("orbit3")) {
            return { ...sd };
          }
        });
      }

      if (selectedQuestion.orbitTwo == orbitTwoCount.length) {
        orbit2Val = true;
        dispatch(setOrbitTwoNoBorder(true));

        _setDroppable = _setDroppable.filter((sd) => {
          if (!sd.id.includes("orbit2")) {
            return { ...sd };
          }
        });
      }

      if (selectedQuestion.orbitOne == orbitOneCount.length) {
        orbit1Val = true;

        dispatch(setOrbitOneNoBorder(true));

        _setDroppable = _setDroppable.filter((sd) => {
          if (!sd.id.includes("orbit1")) {
            return { ...sd };
          }
        });
      }

      dispatch(setupdateSetDroppable(_setDroppable));

      if (
        selectedQuestion.proton == numberOfProtons.value &&
        selectedQuestion.neutron == numberOfNeutrons.value
      ) {
        dispatch(setShowNucleus(true));
      }
      let _matchedItems = [];

      _matchedItems = matchedItems.filter((item) => {
        if (orbit3Val && item.drop.id.includes("orbit3")) {
          return item;
        }
        if (orbit2Val && item.drop.id.includes("orbit2")) {
          return item;
        }
        if (orbit1Val && item.drop.id.includes("orbit1")) {
          return item;
        }
        return;
      });

      dispatch(updateItemsMatched(_matchedItems));
      if (selectedQuestion.proton == numberOfProtons.value) {
        dispatch(setDisableProton(true));
      }
      if (selectedQuestion.neutron == numberOfNeutrons.value) {
        dispatch(setDisableNeutron(true));
      }
      if (selectedQuestion.valenceElectron == numberOfValance.value) {
        dispatch(setDisableValance(true));
      }
      if (orbit3Val && orbit2Val && orbit1Val) {
        if (
          selectedQuestion.proton == numberOfProtons.value &&
          selectedQuestion.neutron == numberOfNeutrons.value &&
          selectedQuestion.valenceElectron == numberOfValance.value
        ) {
          EventManager.broadcast("POSITIVE_FEEDBACK");
          dispatch(setCorrectAnswer(true));
          dispatch(common.toggleToastMessage(true));
          dispatch(setDisableSubmit(true));
        } else if (
          selectedQuestion.proton == numberOfProtons.value &&
          selectedQuestion.neutron == numberOfNeutrons.value &&
          selectedQuestion.valenceElectron != numberOfValance.value
        ) {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
          dispatch(common.togglePopup(7));
        } else if (
          selectedQuestion.proton == numberOfProtons.value &&
          selectedQuestion.valenceElectron == numberOfValance.value &&
          selectedQuestion.neutron != numberOfNeutrons.value
        ) {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
          dispatch(common.togglePopup(6));
        } else if (
          selectedQuestion.proton != numberOfProtons.value &&
          selectedQuestion.neutron == numberOfNeutrons.value &&
          selectedQuestion.valenceElectron == numberOfValance.value
        ) {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
          dispatch(common.togglePopup(5));
        } else {
          dispatch(setCorrectAnswer(false));
          dispatch(setPartialIncorrect(true));
          dispatch(common.toggleToastMessage(true));
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        }
      } else if (
        orbitThreeCount.length + orbitTwoCount.length + orbitOneCount.length ==
        selectedQuestion.orbitThree +
          selectedQuestion.orbitTwo +
          selectedQuestion.orbitOne
      ) {
        if (
          selectedQuestion.proton == numberOfProtons.value &&
          selectedQuestion.neutron == numberOfNeutrons.value &&
          selectedQuestion.valenceElectron == numberOfValance.value
        ) {
          dispatch(common.togglePopup(9));
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        } else if (
          selectedQuestion.proton == numberOfProtons.value &&
          selectedQuestion.neutron == numberOfNeutrons.value &&
          selectedQuestion.valenceElectron != numberOfValance.value
        ) {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
          dispatch(common.toggleToastMessage(true));
          dispatch(setCorrectAnswer(false));
          dispatch(setPartialIncorrect(true));
        } else if (
          selectedQuestion.proton == numberOfProtons.value &&
          selectedQuestion.valenceElectron == numberOfValance.value &&
          selectedQuestion.neutron != numberOfNeutrons.value
        ) {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
          dispatch(common.toggleToastMessage(true));
          dispatch(setCorrectAnswer(false));
          dispatch(setPartialIncorrect(true));
        } else if (
          selectedQuestion.proton != numberOfProtons.value &&
          selectedQuestion.neutron == numberOfNeutrons.value &&
          selectedQuestion.valenceElectron == numberOfValance.value
        ) {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
          dispatch(common.toggleToastMessage(true));
          dispatch(setCorrectAnswer(false));
          dispatch(setPartialIncorrect(true));
        } else {
          const { disableNeuton, disableProton, disableValance } = getState();
          if (disableNeuton || disableProton || disableValance) {
            dispatch(setCorrectAnswer(false));
            dispatch(setPartialIncorrect(true));
            dispatch(common.toggleToastMessage(true));
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          } else {
            dispatch(setCorrectAnswer(false));
            dispatch(setPartialIncorrect(false));
            dispatch(common.toggleToastMessage(true));
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }
        }
      } else {
        if (
          selectedQuestion.proton == numberOfProtons.value &&
          selectedQuestion.neutron == numberOfNeutrons.value &&
          selectedQuestion.valenceElectron == numberOfValance.value
        ) {
          dispatch(common.togglePopup(8));
          EventManager.broadcast("NEGATIVE_FEEDBACK");
        } else if (
          selectedQuestion.proton == numberOfProtons.value &&
          selectedQuestion.neutron == numberOfNeutrons.value &&
          selectedQuestion.valenceElectron != numberOfValance.value
        ) {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
          dispatch(common.toggleToastMessage(true));
          dispatch(setCorrectAnswer(false));
          dispatch(setPartialIncorrect(true));
        } else if (
          selectedQuestion.proton == numberOfProtons.value &&
          selectedQuestion.valenceElectron == numberOfValance.value &&
          selectedQuestion.neutron != numberOfNeutrons.value
        ) {
          EventManager.broadcast("NEGATIVE_FEEDBACK");
          dispatch(common.toggleToastMessage(true));
          dispatch(setCorrectAnswer(false));
          dispatch(setPartialIncorrect(true));
        } else if (
          selectedQuestion.proton != numberOfProtons.value &&
          selectedQuestion.neutron == numberOfNeutrons.value &&
          selectedQuestion.valenceElectron == numberOfValance.value
        ) {
          EventManager.broadcast("NEGATIVE_FEEDBACK");

          dispatch(common.toggleToastMessage(true));
          dispatch(setCorrectAnswer(false));
          dispatch(setPartialIncorrect(true));
        } else {
          const { disableNeuton, disableProton, disableValance } = getState();
          if (disableNeuton || disableProton || disableValance) {
            dispatch(setCorrectAnswer(false));
            dispatch(setPartialIncorrect(true));
            dispatch(common.toggleToastMessage(true));
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          } else {
            dispatch(setCorrectAnswer(false));
            dispatch(setPartialIncorrect(false));
            dispatch(common.toggleToastMessage(true));
            EventManager.broadcast("NEGATIVE_FEEDBACK");
          }
        }
      }
      if (!orbit3Val) {
        dispatch(setThreeEmpty([]));
      }
      if (!orbit2Val) {
        dispatch(setTwoEmpty([]));
      }
      if (!orbit1Val) {
        dispatch(setOneEmpty([]));
      }
    };
  },
  onNext: () => {
    return (dispatch, getState) => {
      const { questionsData, selectedQuestion } = getState();
      if (questionsData.length > 0) {
        dispatch(common.setResetFocusState(true));

        dispatch(updateDropZone([]));

        dispatch(setNumberOfNeutrons({}));
        dispatch(setNumberOfProtons({}));
        dispatch(setNumberOfValance({}));

        dispatch(setOrbitOneNoBorder(false));
        dispatch(setOrbitThreeNoBorder(false));
        dispatch(setOrbitTwoNoBorder(false));
        dispatch(thunks.setQuestion());
        const { selectedQuestion } = getState();

        dispatch(setupdateSetDroppable(data.dropZonesOrbits));
        dispatch(setDropLabel(selectedQuestion));
        dispatch(setThreeEmpty([]));
        dispatch(setTwoEmpty([]));
        dispatch(setOneEmpty([]));
        dispatch(setShowNucleus(false));
        dispatch(setDisableSubmit(true));
        dispatch(setCorrectAnswer(false));
        dispatch(droppableChangeFalse());
        setTimeout(() => {
          EventManager.broadcast("SECONDARY_CLICK");
        });
        EventManager.broadcast("MOVE_TO_NEXT_SCREEN");

        dispatch(setDisableProton(false));
        dispatch(setDisableNeutron(false));
        dispatch(setDisableValance(false));
      } else {
        dispatch(common.togglePopup(3));
        setTimeout(() => {
          EventManager.broadcast("COMPLETION_SCREEN");
        });
        EventManager.broadcast("STOP_ALL");
      }
      dispatch(common.toggleToastMessage(false));
    };
  },
  resetActivity: () => {
    return (dispatch, getState) => {
      const { currentPopup } = getState();

      dispatch(common.updateResetBtnState(true));

      dispatch(updateQuestionsData(data.atomicStructures));
      dispatch(updateDropZone([]));

      dispatch(setNumberOfNeutrons({}));
      dispatch(setNumberOfProtons({}));
      dispatch(setNumberOfValance({}));

      dispatch(setOrbitOneNoBorder(false));
      dispatch(setOrbitThreeNoBorder(false));
      dispatch(setOrbitTwoNoBorder(false));
      dispatch(thunks.setQuestion());
      const { selectedQuestion } = getState();

      dispatch(setupdateSetDroppable(data.dropZonesOrbits));
      dispatch(setDropLabel(selectedQuestion));
      dispatch(setThreeEmpty([]));
      dispatch(setTwoEmpty([]));
      dispatch(setOneEmpty([]));
      dispatch(setShowNucleus(false));
      dispatch(setDisableSubmit(true));
      dispatch(setCorrectAnswer(false));
      dispatch(droppableChangeFalse());
      dispatch(common.ariaLiveText(data.resetLiveText));
      dispatch(setDisableProton(false));
      dispatch(setDisableNeutron(false));
      dispatch(setDisableValance(false));

      if (currentPopup.indexOf(3) >= 0) {
        dispatch(common.togglePopup(3));
      }
      if (currentPopup.indexOf(4) >= 0) {
        dispatch(common.togglePopup(4));
      }
      dispatch(common.togglePopup(1));
    };
  },
};
