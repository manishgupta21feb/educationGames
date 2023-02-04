import data from "../data";
import * as actions from "../../app/actions";
import EventManager from "../../app/events/manager";
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

export const MOVE_BALANCE = "MOVE_BALANCE";

export const ADD_HYDROGEN = "ADD_HYDROGEN";
export const REMOVE_HYDROGEN = "REMOVE_HYDROGEN";

export const ADD_HYDROGEN_TWO = "ADD_HYDROGEN_TWO";
export const REMOVE_HYDROGEN_TWO = "REMOVE_HYDROGEN_TWO";

export const ADD_HYDROGEN_PRODUCT = "ADD_HYDROGEN_PRODUCT";
export const REMOVE_HYDROGEN_PRODUCT = "REMOVE_HYDROGEN_PRODUCT";

export const ADD_HYDROGEN_TWO_PRODUCT = "ADD_HYDROGEN_TWO_PRODUCT";
export const REMOVE_HYDROGEN_TWO_PRODUCT = "REMOVE_HYDROGEN_TWO_PRODUCT";

export const ADD_OXYGEN = "ADD_OXYGEN";
export const REMOVE_OXYGEN = "REMOVE_OXYGEN";

export const ADD_OXYGEN_TWO = "ADD_OXYGEN_TWO";
export const REMOVE_OXYGEN_TWO = "REMOVE_OXYGEN_TWO";

export const ADD_OXYGEN_PRODUCT = " ADD_OXYGEN_PRODUCT";
export const REMOVE_OXYGEN_PRODUCT = " REMOVE_OXYGEN_PRODUCT";

export const ADD_OXYGEN_PRODUCT_TWO = " ADD_OXYGEN_PRODUCT_TWO";
export const REMOVE_OXYGEN_PRODUCT_TWO = " REMOVE_OXYGEN_PRODUCT_TWO";

export const ADD_OXYGEN_PRODUCT_THREE = " ADD_OXYGEN_PRODUCT_THREE";
export const REMOVE_OXYGEN_PRODUCT_THREE = " REMOVE_OXYGEN_PRODUCT_THREE";

export const ADD_CARBON = "ADD_CARBON";
export const REMOVE_CARBON = "REMOVE_CARBON";

export const ADD_CARBON_PRODUCT = "ADD_CARBON_PRODUCT";
export const REMOVE_CARBON_PRODUCT = "REMOVE_CARBON_PRODUCT";

export const CLEAR_VALUES = "CLEAR_VALUES";

export const SHOW_CHECK_BUTTON = "SHOW_CHECK_BUTTON";

export const RESET_COUNTER = "RESET_COUNTER";

export const COUNT_ATTEMPTS = "COUNT_ATTEMPTS";

export const DELETE_ATTEMPTS = "DELETE_ATTEMPTS";

export const COUNTER_VALUES = "COUNTER_VALUES";

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

export const setAnswered = (value) => ({ value, type: "SET_ANSWERED" });

export const addOxygen = (value) => {
  return {
    value,
    type: ADD_OXYGEN,
  };
};
export const removeOxygen = (value) => {
  return {
    value,
    type: REMOVE_OXYGEN,
  };
};

export const addOxygenProduct = (value) => {
  return {
    value,
    type: ADD_OXYGEN_PRODUCT,
  };
};
export const removeOxygenProduct = (value) => {
  return {
    value,
    type: REMOVE_OXYGEN_PRODUCT,
  };
};

export const addOxygenTwo = (value) => {
  return {
    value,
    type: ADD_OXYGEN_TWO,
  };
};
export const removeOxygenTwo = (value) => {
  return {
    value,
    type: REMOVE_OXYGEN_TWO,
  };
};

export const addOxygenProductTwo = (value) => {
  return {
    value,
    type: ADD_OXYGEN_PRODUCT_TWO,
  };
};
export const removeOxygenProductTwo = (value) => {
  return {
    value,
    type: REMOVE_OXYGEN_PRODUCT_TWO,
  };
};

export const addOxygenProductThree = (value) => {
  return {
    value,
    type: ADD_OXYGEN_PRODUCT_THREE,
  };
};
export const removeOxygenProductThree = (value) => {
  return {
    value,
    type: REMOVE_OXYGEN_PRODUCT_THREE,
  };
};

export const addHydrogen = (value) => {
  return {
    value,
    type: ADD_HYDROGEN,
  };
};
export const removeHydrogen = (value) => {
  return {
    value,
    type: REMOVE_HYDROGEN,
  };
};

export const addHydrogenTwo = (value) => {
  return {
    value,
    type: ADD_HYDROGEN_TWO,
  };
};
export const removeHydrogenTwo = (value) => {
  return {
    value,
    type: REMOVE_HYDROGEN_TWO,
  };
};

export const addHydrogenProduct = (value) => {
  return {
    value,
    type: ADD_HYDROGEN_PRODUCT,
  };
};
export const removeHydrogenProduct = (value) => {
  return {
    value,
    type: REMOVE_HYDROGEN_PRODUCT,
  };
};

export const addHydrogenProductTwo = (value) => {
  return {
    value,
    type: ADD_HYDROGEN_TWO_PRODUCT,
  };
};
export const removeHydrogenProductTwo = (value) => {
  return {
    value,
    type: REMOVE_HYDROGEN_TWO_PRODUCT,
  };
};

export const addCarbon = (value) => {
  return {
    value,
    type: ADD_CARBON,
  };
};
export const removeCarbon = (value) => {
  return {
    value,
    type: REMOVE_CARBON,
  };
};

export const addCarbonProduct = (value) => {
  return {
    value,
    type: ADD_CARBON_PRODUCT,
  };
};
export const removeCarbonProduct = (value) => {
  return {
    value,
    type: REMOVE_CARBON_PRODUCT,
  };
};

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

export const setCountAttempts = (value) => {
  return {
    type: COUNT_ATTEMPTS,
    value,
  };
};

export const deleteAttempts = (value) => {
  return {
    type: DELETE_ATTEMPTS,
    value,
  };
};

export const counter = (value) => {
  return {
    type: COUNTER_VALUES,
    value,
  };
};

export const thunks = {
  verifyItem: (id) => {
    return (dispatch, getState) => {
      dispatch(toggleToastMessage(false));
      const {
        oxygens,
        carbons,
        hydrogens,
        oxygenProduct,
        carbonProduct,
        selectedOption,
        hydrogenProduct,
        oxygenProductTwo,
      } = getState();

      if (selectedOption == "synthesis_of_water") {
        const oxygen = oxygens.length == oxygenProduct.length;
        const hydrogen = hydrogens.length == hydrogenProduct.length;
        const check = oxygen && hydrogen;
        if (check) {
          dispatch(setCountAttempts(1));
          dispatch(setResetFocusState(true));
        }
        setTimeout(() => {
          dispatch(correctAnswer(check));
          dispatch(toggleToastMessage(true));
          EventManager.broadcast(
            check ? "POSITIVE_FEEDBACK" : "NEGATIVE_FEEDBACK"
          );
        }, 100);
      } else if (selectedOption == "combustion_of_propane") {
        const combined = oxygenProduct.length + oxygenProductTwo.length;
        const oxygen = oxygens.length == combined;
        const hydrogen = hydrogens.length == hydrogenProduct.length;
        const carbon = carbons.length == carbonProduct.length;

        const check = oxygen && hydrogen && carbon;
        if (check) {
          dispatch(setCountAttempts(2));
          dispatch(setResetFocusState(true));
        }
        setTimeout(() => {
          dispatch(correctAnswer(check));
          dispatch(toggleToastMessage(true));
          EventManager.broadcast(
            check ? "POSITIVE_FEEDBACK" : "NEGATIVE_FEEDBACK"
          );
        }, 100);
      }
      dispatch(resetCounterValues(false));
      const { countAttempts } = getState();
      if (countAttempts.length < 2) {
        TincanManager.data.percentage = parseInt(
          (countAttempts.length / 2) * 100
        );
        TincanManager.saveTincanData();
      } else {
        TincanManager.data.completed = true;
        TincanManager.data.percentage = 100;
        TincanManager.saveTincanData();
      }
    };
  },

  reset: () => {
    return (dispatch, state) => {
      dispatch(setAnswered(false));
      dispatch(ariaLiveText(data.resetLiveText));
      dispatch(updateResetBtnState(true));
      dispatch(removeAllValues());
      dispatch(selectOption("synthesis_of_water"));
      // dispatch(showCheckButton(true));
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
      dispatch(deleteAttempts([]));
      TincanManager.resetTincanData();
    };
  },

  onHydrogenChange: (count, number, type) => (dispatch, getState) => {
    const { hydrogens } = getState();
    const diff = absoluteDiff(hydrogens.length, count);
    if (hydrogens.length > count) {
      dispatch(removeHydrogen(diff));

      if (type == "hydrogen") {
        const text = data.hydrogenLiveText
          .replace("-1-", data.decreased)
          .replace("-2-", number);
        dispatch(ariaLiveText(text));
        setTimeout(() => {
          dispatch(ariaLiveText(" "));
        }, 300);
      }
    } else if (hydrogens.length < count) {
      dispatch(addHydrogen(diff));

      if (type == "hydrogen") {
        const text = data.hydrogenLiveText
          .replace("-1-", data.increased)
          .replace("-2-", number);
        dispatch(ariaLiveText(text));
        setTimeout(() => {
          dispatch(ariaLiveText(" "));
        }, 300);
      }
    }
  },

  onCarbonChange: (count, number, type) => (dispatch, getState) => {
    const { carbons } = getState();
    const diff = absoluteDiff(carbons.length, count);
    if (carbons.length > count) {
      dispatch(removeCarbon(diff));
      if (type == "propane") {
        const text = data.propaneLiveText
          .replace("-1-", data.decreased)
          .replace("-2-", number);
        dispatch(ariaLiveText(text));
        setTimeout(() => {
          dispatch(ariaLiveText(" "));
        }, 300);
      }
    } else if (carbons.length < count) {
      dispatch(addCarbon(diff));

      if (type == "propane") {
        const text = data.propaneLiveText
          .replace("-1-", data.increased)
          .replace("-2-", number);
        dispatch(ariaLiveText(text));
        setTimeout(() => {
          dispatch(ariaLiveText(" "));
        }, 300);
      }
    }
  },

  onOxygenChange: (count, number, type) => (dispatch, getState) => {
    const { oxygens } = getState();
    const diff = absoluteDiff(oxygens.length, count);
    if (oxygens.length > count) {
      dispatch(removeOxygen(diff));

      if (type == "oxygen") {
        const text = data.oxygenLiveText
          .replace("-1-", data.decreased)
          .replace("-2-", number);
        dispatch(ariaLiveText(text));
        setTimeout(() => {
          dispatch(ariaLiveText(" "));
        }, 300);
      }
    } else if (oxygens.length < count) {
      dispatch(addOxygen(diff));

      if (type == "oxygen") {
        const text = data.oxygenLiveText
          .replace("-1-", data.increased)
          .replace("-2-", number);
        dispatch(ariaLiveText(text));
        setTimeout(() => {
          dispatch(ariaLiveText(" "));
        }, 300);
      }
    }
  },

  onProductHydrogenChange: (count, number) => (dispatch, getState) => {
    const { hydrogenProduct } = getState();
    const diff = absoluteDiff(hydrogenProduct.length, count);
    // console.log("onProductHydrogenChange: ", diff);
    if (hydrogenProduct.length > count) {
      dispatch(removeHydrogenProduct(diff));

      const text = data.waterLiveText
        .replace("-1-", data.decreased)
        .replace("-2-", number);
      dispatch(ariaLiveText(text));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
    } else if (hydrogenProduct.length < count) {
      dispatch(addHydrogenProduct(diff));

      const text = data.waterLiveText
        .replace("-1-", data.increased)
        .replace("-2-", number);
      dispatch(ariaLiveText(text));
      setTimeout(() => {
        dispatch(ariaLiveText(" "));
      }, 300);
    }
  },

  onProductOxygenChange: (count, number) => (dispatch, getState) => {
    const { oxygenProduct } = getState();
    const diff = absoluteDiff(oxygenProduct.length, count);
    if (oxygenProduct.length > count) {
      dispatch(removeOxygenProduct(diff));
    } else if (oxygenProduct.length < count) {
      dispatch(addOxygenProduct(diff));
    }
  },

  onProductOxygenChangeTwo: (count, number) => (dispatch, getState) => {
    const { oxygenProductTwo } = getState();
    const diff = absoluteDiff(oxygenProductTwo.length, count);
    if (oxygenProductTwo.length > count) {
      dispatch(removeOxygenProductTwo(diff));
    } else if (oxygenProductTwo.length < count) {
      dispatch(addOxygenProductTwo(diff));
    }
  },

  onProductCarbonChange: (count, number, type) => (dispatch, getState) => {
    const { carbonProduct } = getState();
    const diff = absoluteDiff(carbonProduct.length, count);
    if (carbonProduct.length > count) {
      dispatch(removeCarbonProduct(diff));

      if (type == "carbonDiOxide") {
        const text = data.carbonLiveText
          .replace("-1-", data.decreased)
          .replace("-2-", number);
        dispatch(ariaLiveText(text));
        setTimeout(() => {
          dispatch(ariaLiveText(" "));
        }, 300);
      }
    } else if (carbonProduct.length < count) {
      dispatch(addCarbonProduct(diff));

      if (type == "carbonDiOxide") {
        const text = data.carbonLiveText
          .replace("-1-", data.increased)
          .replace("-2-", number);
        dispatch(ariaLiveText(text));
        setTimeout(() => {
          dispatch(ariaLiveText(" "));
        }, 300);
      }
    }
  },
};

const absoluteDiff = (one, two) => {
  return Math.abs(one - two);
};
