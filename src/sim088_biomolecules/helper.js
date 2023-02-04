export const getNumbers = (data) => {
  if (isNaN(data)) {
    return data.replace(/^\D+/g, "");
  } else {
    return data;
  }
};

export const shuffleArray = (inputArray) => {
  return inputArray.sort(() => Math.random() - 0.5);
};

export const nextScreenDetails = (getCurrentScreenStatus, itemId) => {
  let { id, totalScreen, currentScreen, nextNode } =
    getCurrentScreenStatus.filter((x) => x.isActive == true)[0];
  let result = [];
  if (itemId) {
    result = getCurrentScreenStatus.map((val) => {
      if (val.id == itemId) {
        val.isActive = true;
      } else {
        val.isActive = false;
      }
      return val;
    });
  } else if (totalScreen == currentScreen) {
    //next screen move
    result = getCurrentScreenStatus.map((val) => {
      if (val.id == "sn_" + (+getNumbers(id) + 1)) {
        val.isActive = true;
        val.isVisited = true;
      } else {
        val.isActive = false;
      }
      return val;
    });
  } else if (totalScreen > currentScreen) {
    // increment current screen
    result = getCurrentScreenStatus.map((val) => {
      if (val.id == `sn_${+getNumbers(id)}`) {
        val.currentScreen = +val.currentScreen + 1;
      }
      return val;
    });
  }
  return result;
};

const activeNextNode = (getCurrentScreenData, nextNode, id) => {
  let result = getCurrentScreenData.map((val) => {
    if (val.id == nextNode) {
      val.isActive = true;
    } else {
      val.isActive = false;
    }
    if (val.id == id) {
      val.isVisited = true;
    }
    return val;
  });
  return result;
};

const activeCurrentScreen = (getCurrentScreenData, id, previd) => {
  let result = getCurrentScreenData.map((val) => {
    if (val.id == id) {
      val.currentScreen = +val.currentScreen + 1;
      val.isActive = true;
    } else if (val.id == previd) {
      val.isVisited = true;
    }
    return val;
  });
  return result;
};

const activeParentScreen = (getCurrentScreenData, _id) => {
  let { isVisited, id, prevNode } = getCurrentScreenData.filter(
    (val) =>
      val.isSiblings == true &&
      val.id != _id &&
      val.prevNode ==
        getCurrentScreenData.find((element) => element.id == _id).prevNode
  )[0];

  let newId;

  if (isVisited) {
    newId = getCurrentScreenData.find(
      (element) => element.id == prevNode
    ).prevNode;
  } else {
    newId = prevNode;
  }

  return activeCurrentScreen(getCurrentScreenData, newId, _id);
};

export const findNextNode = (getCurrentScreenData, newId) => {
  let { nextNode, id, currentScreen, totalScreen, isSiblings } =
    getCurrentScreenData.filter((x) => x.isActive == true)[0];
  let result = [];
  if (isSiblings && currentScreen == totalScreen) {
    result = activeParentScreen(getCurrentScreenData, id);
  } else if (currentScreen < totalScreen) {
    result = activeCurrentScreen(getCurrentScreenData, id);
  } else {
    result = activeNextNode(getCurrentScreenData, newId ? newId : nextNode, id);
  }
  return result;
};

export const isRotate = (dropZone, atom) => {
  if (
    atom == 1 &&
    (dropZone == 2 || dropZone == 3 || dropZone == 4 || dropZone == 10)
  ) {
    return true;
  } else if (atom == 2 && (dropZone == 1 || dropZone == 5 || dropZone == 9)) {
    return true;
  } else if (atom == 4 && (dropZone == 4 || dropZone == 8)) {
    return true;
  } else if (atom == 3 && (dropZone == 3 || dropZone == 7)) {
    return true;
  }
  return false;
};
