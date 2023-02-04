export const getNumbers = (data) => {
  return data.replace(/^\D+/g, "");
};

export const shuffleArray = (inputArray) => {
  return inputArray.sort(() => Math.random() - 0.5);
};

export const getStringMonths = (inputArray) => {
  let result = [];
  inputArray.map((val) => {
    result.push(val.month);
  });
  return result;
};

export const getStringRecord = (inputArray, type) => {
  let result = [];
  inputArray.map((val) => {
    if (type == 1) {
      result.push(val.Calgary);
    } else if (type == 2) {
      result.push(val.Houston);
    } else if (type == 3) {
      result.push(val.SanGabriel);
    }
  });
  return result;
};

export const getAriaLabel = (seasonLabels, array) => {
  return seasonLabels.length == 0 ? "" : seasonLabels[0].ariaLabel[array];
};

export const getSubAriaLabel = (
  upperHeading,
  seasonLabels,
  array,
  month,
  Calgary,
  Houston,
  SanGabriel
) => {
  let result = "";
  if (seasonLabels.length != 0) {
    result = seasonLabels[0].subAriaLabel
      .replace("{upperHeading}", upperHeading)
      .replace("{MonthName}", month)
      .replace("{1st}", Calgary)
      .replace("{MonthName}", month)
      .replace("{2nd}", Houston)
      .replace("{MonthName}", month)
      .replace("{3rd}", SanGabriel);
  }
  return result;
};
