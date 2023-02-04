export const getOptionType = (type, data, state) => {
  if (type == "reactions") {
    return { ...state, reactions: data };
  } else if (type == "signs") {
    return { ...state, signs: data };
  } else if (type == "_h") {
    return { ...state, _h: data };
  } else if (type == "click") {
    return { ...state, isSubmitBtnClicked: data };
  } else {
    return { ...state, energy: data };
  }
};

export const getNumbers = (data) => {
  return data.replace(/\D/g, "");
};

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export const getActiveQuestion = (state) => {
  let result = shuffleArray(
    state.filter((x) => x.isVisited != true && x.isActive != true)
  );
  let value = result.map((val, index) => {
    if (index == 0) {
      val.isActive = true;
      return val;
    } else {
      val.isActive = false;
      return val;
    }
  });
  return value;
};
