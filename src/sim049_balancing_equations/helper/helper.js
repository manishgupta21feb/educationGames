import data from "../data";

export const altTextFunction = (
  leftCount,
  rightCount,
  leftString,
  rightString
) => {
  const leftSideCount = leftCount;
  const rightSideCount = rightCount;

  const numberOfCirclesLeftAlt =
    leftSideCount > 1 ? data.circlesAlt : data.circleAlt;

  const numberOfCirclesRightAlt =
    rightSideCount > 1 ? data.circlesAlt : data.circleAlt;

  const addedLeft =
    leftSideCount > 0
      ? leftString
          .replace("-1-", leftSideCount)
          .replace("-2-", numberOfCirclesLeftAlt)
      : data.emptyLeftSideAlt;

  const addedRight =
    rightSideCount > 0
      ? rightString
          .replace("-1-", rightSideCount)
          .replace("-2-", numberOfCirclesRightAlt)
      : data.emptyRightSideAlt;

  const lower =
    leftSideCount > rightSideCount
      ? data.leftSideLowerAlt
      : data.rightSideLowerAlt;

  const forBalanced = leftSideCount == rightSideCount ? data.balanced : lower;

  return `${addedLeft} ${addedRight} ${forBalanced}`;
};
