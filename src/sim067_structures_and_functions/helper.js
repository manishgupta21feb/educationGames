export const getNumbers = (data) => {
  if (data.match(/^[0-9]+$/) != null) {
    return data;
  } else {
    return data.replace(/^\D+/g, "");
  }
};

export const shuffleArray = (inputArray) => {
  return inputArray.sort(() => Math.random() - 0.5);
};

export const getDynamicClass = (state) => {
  if (state.length == 2) {
    state[1].classes =
      state[1].classes + "_o" + state[0].answerId + "_o" + state[1].answerId;
  }

  if (state.length == 3) {
    state[2].classes =
      state[2].classes +
      "_o" +
      state[0].answerId +
      "_o" +
      state[1].answerId +
      "_o" +
      state[2].answerId;
  }
  return state;
};
