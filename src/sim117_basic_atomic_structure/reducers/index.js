import * as actions from "../actions";
import { combineReducers } from "redux";
import reducers from "../../app/reducers";
import data from "../data";

const questionsData = (state = [...data.atomicStructures], action) => {
  switch (action.type) {
    case actions.QUESTIONS_DATA:
      return action.data;
    default:
      return state;
  }
};
const selectedQuestion = (state = {}, { type, question }) => {
  switch (type) {
    case actions.SET_QUESTION:
      return question;
    default:
      return state;
  }
};

const setDroppable = (
  state = data.dropZonesOrbits,
  { type, dropValue, dragValue, value, blnState, question, updatedDropsZone }
) => {
  switch (type) {
    case actions.DROPPABLE_CHNAGE_STATE:
      let _state = [...state];

      let result = _state.map((element, idx) => {
        if (element.id == value) {
          element.hidden = blnState;

          return element;
        } else return element;
      });

      return result;

    case actions.DROPPABLE_CHANGE_FALSE:
      let _state1 = [...state];

      let result2 = _state1.map((elements) => {
        if (elements.hidden) {
          elements.hidden = false;
          return elements;
        } else return elements;
      });

      return result2;
    case actions.UPDATE_SET_DROPPABLES:
      return [...updatedDropsZone];
    case actions.SET_DROP_LABEL:
      let _stateLabel = [...state];

      let labelResult = _stateLabel.map((drops) => {
        let _drops = { ...drops };
        _drops.label = question.id + " " + _drops.label;
        return _drops;
      });

      return [...labelResult];
    default:
      return state;
  }
};

const accessibleListVisible = (state = false, { type, val }) => {
  switch (type) {
    case actions.ACCESSIBLE_LIST_VISIBLE:
      return val;
    default:
      return state;
  }
};
const draggableValue = (state = "", { type, dragValue }) => {
  switch (type) {
    case actions.SET_DRAGGABLE_VALUE:
      return dragValue;
    default:
      return state;
  }
};
const numberOfProtons = (state = {}, { type, val }) => {
  switch (type) {
    case actions.NUMBER_OF_PROTONS:
      return val;
    default:
      return state;
  }
};
const numberOfNeutrons = (state = {}, { type, val }) => {
  switch (type) {
    case actions.NUMBER_OF_NEUTRONS:
      return val;
    default:
      return state;
  }
};
const numberOfValance = (state = {}, { type, val }) => {
  switch (type) {
    case actions.NUMBER_OF_VALANCE_ELECTRONS:
      return val;
    default:
      return state;
  }
};

const matchedItems = (state = [], { drag, drop, type, items }) => {
  switch (type) {
    case actions.SET_ITEMS_MATCHED:
      return [...state, { drag: { ...drag }, drop: { ...drop } }];
    case actions.UPDATE_ITEMS_MATCHED:
      return items;
    case actions.UPDATE_DROP_ZONE:
      let emptyState = [];
      return emptyState;

    default:
      return state;
  }
};

const orbitOneCount = (state = [], { type, srno, orbitdata }) => {
  switch (type) {
    case actions.ORBIT_ONE_ELECTRON:
      return [...state, { srno, orbitdata }];
    case actions.EMPTY_COUNT_ONE:
      return [];
    default:
      return state;
  }
};

const orbitTwoCount = (state = [], { type, srno, orbitdata }) => {
  switch (type) {
    case actions.ORBIT_TWO_ELECTRON:
      return [...state, { srno, orbitdata }];
    case actions.EMPTY_COUNT_TWO:
      return [];
    default:
      return state;
  }
};

const orbitThreeCount = (state = [], { type, srno, orbitdata }) => {
  switch (type) {
    case actions.ORBIT_THREE_ELECTRON:
      return [...state, { srno, orbitdata }];
    case actions.EMPTY_COUNT_THREE:
      return [];
    default:
      return state;
  }
};

const orbitThreeNoBorder = (state = false, { type, val }) => {
  switch (type) {
    case actions.ORBIT_THREE_NO_BORDER:
      return val;
    default:
      return state;
  }
};
const orbitTwoNoBorder = (state = false, { type, val }) => {
  switch (type) {
    case actions.ORBIT_TWO_NO_BORDER:
      return val;
    default:
      return state;
  }
};
const orbitOneNoBorder = (state = false, { type, val }) => {
  switch (type) {
    case actions.ORBIT_ONE_NO_BORDER:
      return val;
    default:
      return state;
  }
};

const showNucleus = (state = false, { type, val }) => {
  switch (type) {
    case actions.SHOW_NUCLEUS:
      return val;
    default:
      return state;
  }
};
const correctAnswer = (state = false, { type, val }) => {
  switch (type) {
    case actions.CORRECT_ANSWER:
      return val;
    default:
      return state;
  }
};
const disableSubmit = (state = true, { type, val }) => {
  switch (type) {
    case actions.DISABLE_SUBMIT:
      return val;
    default:
      return state;
  }
};

const disableProton = (state = false, { type, val }) => {
  switch (type) {
    case actions.DISABLE_PROTON:
      return val;
    default:
      return state;
  }
};

const disableNeuton = (state = false, { type, val }) => {
  switch (type) {
    case actions.DISABLE_NEUTRON:
      return val;
    default:
      return state;
  }
};

const disableValance = (state = false, { type, val }) => {
  switch (type) {
    case actions.DISABLE_VALANCE:
      return val;
    default:
      return state;
  }
};

const partialCorrect = (state = false, { type, val }) => {
  switch (type) {
    case actions.PARTIAL_INCORRECT:
      return val;
    default:
      return state;
  }
};

export default combineReducers({
  questionsData,
  selectedQuestion,
  draggableValue,
  setDroppable,
  accessibleListVisible,
  numberOfProtons,
  numberOfNeutrons,
  numberOfValance,
  matchedItems,
  orbitOneCount,
  orbitTwoCount,
  orbitThreeCount,
  orbitThreeNoBorder,
  orbitTwoNoBorder,
  orbitOneNoBorder,
  showNucleus,
  correctAnswer,
  disableSubmit,
  disableProton,
  disableNeuton,
  disableValance,
  partialCorrect,

  ...reducers,
});
