import datas from "./data/index";

export const getNumbers = (data) => {
  return data.replace(/^\D+/g, "");
};

export const insectsArray = (data, state, insectsType) => {
  let btnresult = data.isButtonType ? "btn" : "lbl";
  let mainResult = [];
  let green_counter = 1;
  let brown_counter = 1;

  if (data.green == 1 && data.brown == 0) {
    mainResult = state.map((val, index) => {
      if (index == 0) {
        val.top = "232px";
        val.left = "209px";
        val.classes1 = "light-insects";
        val.classes2 = "dark-insects";
        val.insects = data.green;
        val.key = getUniqueId();
        val.show = true;
        val.subTypes = btnresult + "-l";
        val.keyValue = green_counter;
        val.arialbl = datas.greenAlt;
        green_counter++;
        return val;
      } else {
        val.top = "";
        val.left = "";
        val.arialbl = "";
        val.show = false;
        return val;
      }
    });
  } else if (data.green + data.brown == 1) {
    mainResult = state.map((val, index) => {
      if (index == 1) {
        val.top = "232px";
        val.left = "209px";
        val.classes1 = "light-insects";
        val.classes2 = "dark-insects";
        val.insects = insectsType.green;
        val.key = getUniqueId();
        val.show = true;
        val.subTypes = btnresult + "-l";
        val.keyValue = green_counter;
        green_counter++;
        return val;
      } else {
        val.top = "";
        val.left = "";
        val.show = false;
        return val;
      }
    });
  } else if (data.green + data.brown == 6) {
    let count = data.green + data.brown;
    mainResult = [...state];
    mainResult = state.map((val, i) => {
      if (i < data.green) {
        val.top = staticDimension[i].top;
        val.left = staticDimension[i].left;
        val.classes1 = "light-insects";
        val.classes2 = "dark-insects";
        val.insects = insectsType.green;
        val.key = getUniqueId();
        val.show = true;
        val.subTypes = btnresult + "-l";
        val.keyValue = green_counter;
        val.arialbl = datas.greenAlt;
        green_counter++;
        return val;
      } else if (i >= data.green && i < count) {
        val.top = staticDimension[i].top;
        val.left = staticDimension[i].left;
        val.classes1 = "light-insects";
        val.classes2 = staticDimension[i].classes2;
        val.insects = staticDimension[i].insects;
        val.key = getUniqueId();
        val.show = true;
        val.subTypes = btnresult + "-d";
        val.keyValue = brown_counter;
        val.arialbl = staticDimension[i].arialbl;
        brown_counter++;
        return val;
      } else {
        val.top = "0px";
        val.left = "0px";
        val.show = false;
        return val;
      }
    });
  } else {
    let count = data.green + data.brown;
    mainResult = [...state];
    mainResult = state.map((val, i) => {
      if (i < data.green) {
        val.top = "";
        val.left = "";
        val.classes1 = "light-insects";
        val.classes2 = "dark-insects";
        val.insects = datas.insectsType.green; // "Green Grasshopper";
        val.arialbl = datas.greenAlt;
        val.key = getUniqueId();
        val.show = true;
        val.subTypes = btnresult + "-l";
        val.keyValue = green_counter;
        green_counter++;
        return val;
      } else if (i >= data.green && i < count) {
        val.top = "";
        val.left = "";
        val.classes1 = "light-insects";
        val.classes2 = "dark-insects";
        val.insects = insectsType.brown;
        val.arialbl = datas.brownAlt;
        val.key = getUniqueId();
        val.show = true;
        val.subTypes = btnresult + "-d";
        val.keyValue = brown_counter;
        brown_counter++;
        return val;
      } else {
        val.show = false;
        return val;
      }
    });
  }
  return mainResult;
};

export const getUniqueId = () => {
  return (
    "_" +
    Math.random().toString(36).substr(2, 9) +
    Math.floor(Math.random() * 100)
  );
};

export const resetInsectData = (state) => {
  return state.map((val, index) => {
    if (index == 0) {
      val.top = "232px";
      val.left = "209px";
      val.classes1 = "light-insects";
      val.classes2 = "dark-insects";
      val.insects = data.green;
      val.key = getUniqueId();
      val.show = true;
      val.subTypes = btnresult + "-l";
      val.keyValue = green_counter;
      val.arialbl = data.greenAlt;
      green_counter++;
      return val;
    } else {
      val.top = "";
      val.left = "";
      val.arialbl = "";
      val.show = false;
      return val;
    }
  });
};

let staticDimension = [
  {
    id: 0,
    top: "232px",
    left: "72px",
    classes1: "",
    classes2: "dark-insects",
    insects: datas.insectsType.brown,
    key: getUniqueId(),
    arialbl: datas.brownAlt,
  },
  {
    id: 1,
    top: "232px",
    left: "209px",
    classes1: "",
    classes2: "dark-insects",
    insects: datas.insectsType.brown,
    key: getUniqueId(),
    arialbl: datas.brownAlt,
  },
  {
    id: 2,
    key: getUniqueId(),
    top: "232px",
    left: "356px",
    classes1: "",
    classes2: "dark-insects",
    insects: datas.insectsType.brown,
    arialbl: datas.brownAlt,
  },
  {
    id: 3,
    key: getUniqueId(),
    top: "308px",
    left: "5px",
    classes1: "",
    classes2: "dark-insects",
    insects: datas.insectsType.brown,
    arialbl: datas.brownAlt,
  },
  {
    id: 4,
    key: getUniqueId(),
    top: "308px",
    left: "148px",
    classes1: "",
    classes2: "dark-insects",
    insects: datas.insectsType.brown,
    arialbl: datas.brownAlt,
  },
  {
    id: 5,
    key: getUniqueId(),
    top: "308px",
    left: "290px",
    classes1: "",
    classes2: "dark-insects",
    insects: datas.insectsType.brown,
    arialbl: datas.brownAlt,
  },
];

export const getSelectedData = (data, id, genId, parentA, parentB) => {
  let resultArr = [];
  if (genId == 1) {
    resultArr = data.map((val) => {
      if (val.caseType == id) {
        val.isSelected = true;
        return val;
      } else {
        val.isSelected = false;
        return val;
      }
    });
  } else if (genId == 2) {
    resultArr = data.map((val) => {
      if (val.isSelected == true) {
        let res = val.subCase.map((i) => {
          if (
            (i.id == id && i.parentA == parentA && i.parentB == parentB) ||
            (i.id == id && i.parentA == parentB && i.parentB == parentA)
          ) {
            i.isCompleted = true;
            return i;
          } else {
            i.isCompleted = false;
            return i;
          }
        });
        val.subCase = res;
        return val;
      } else {
        return val;
      }
    });
  }
  return resultArr;
};

export const getALtData = (filterData, altText) => {
  let returnStr = "";
  let green = filterData.filter(
    (item) => item.show == true && item.insects == datas.insectsType.green
  );
  let brown = filterData.filter(
    (item) => item.show == true && item.insects == datas.insectsType.brown
  );
  let result = altText.filter(
    (item) => item.brown == brown.length && item.green == green.length
  );

  if (result.length > 0) {
    returnStr = result[0].alt;
  } else {
    returnStr = altText[0].alt
      .replace("{green-count}", green.length)
      .replace("{brown-count}", brown.length);
  }
  return returnStr;
};
