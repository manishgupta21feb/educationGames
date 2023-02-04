export const getNumbers = (data) => {
  return data.replace(/^\D+/g, "");
};

export const shuffleArray = (inputArray) => {
  return inputArray.sort(() => Math.random() - 0.5);
};
