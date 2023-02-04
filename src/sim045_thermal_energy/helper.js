export const isAllObservationDone = (id, data) => {
  if (data) {
    let result = data.filter((val) => val.isPlayed == true);
    return result.length == 3 ? 3 : id;
  }
};

export const allDroppedItemFill = (data) => {
  if (data) {
    let result = data.filter((val) => val.isDisable == true);
    return result.length == 3 ? true : false;
  }
};

export const getString = (data) => {
  if (data) {
    let result = data.replace(/[^A-Za-z]/g, "");
    return result;
  }
};

export const getNumber = (data) => {
  if (data) {
    let result = data.replace(/\D/g, "");
    return result;
  }
};
