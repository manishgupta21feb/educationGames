const valueChecker = {
  valueCheck: {
    LeftLeft: "parallel",
    LeftRight: "notParallel",
    RightLeft: "notParallel",
    RightRight: "parallel",
    UpUp: "parallel",
    UpDown: "notParallel",
    DownUp: "notParallel",
    DownDown: "parallel",
    LeftUp: "perpendicular",
    LeftDown: "perpendicular",
    UpLeft: "perpendicular",
    DownLeft: "perpendicular",
    RightUp: "perpendicular",
    RightDown: "perpendicular",
    UpRight: "perpendicular",
    DownRight: "perpendicular",
  },
  Checker: (ref) => {
    return valueChecker.valueCheck[ref];
  },
};

export const workCalculation = (
  forceDir = "Left",
  disDir = "Left",
  disVal = 10
) => {
  const baseDis = 100;
  const baseDisVal = 0;
  let _value = valueChecker.Checker(forceDir.concat(disDir));
  if (_value == "parallel") {
    return baseDis * disVal;
  }
  if (_value == "notParallel") {
    return -Math.abs(baseDis * disVal);
  }
  if (_value == "perpendicular") {
    return baseDis * baseDisVal;
  }
};
