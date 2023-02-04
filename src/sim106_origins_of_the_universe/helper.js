export const shuffleArr = (arr, id, type) => {
  let res = arr;
  if (id == "reset") {
    res = shuffleArray(arr);

    return res.map((i, index) => {
      if (index == 0) {
        i.isActive = true;
        return i;
      } else {
        i.isActive = false;
        return i;
      }
    });
  } else {
    return res.map((i) => {
      if (i.id == id) {
        i.isActive = true;
        return i;
      } else {
        i.isActive = false;
        return i;
      }
    });
  }
};

export const shuffleArray = (inputArray) => {
  let arr = [];
  if (inputArray.length > 0) {
    let lastArr = inputArray.splice(inputArray.length - 2, inputArray.length);


    if (Math.floor(Math.random() * (4 - 1 + 1)) + 1 < 3) {
      arr = [...lastArr, ...inputArray.sort(() => Math.random() - 0.5)];
    } else {
      arr = [...inputArray.sort(() => Math.random() - 0.5), ...lastArr];
    }
  }


  return arr;
};
