import { connect } from "react-redux";
import RightNonInteractive from "../components/right/nonInteractive";
import data from "../data/data.en";

const mapState = (state) => {
  let flag = false;
  let questionInfo = state.isBall
    ? data.screenTwo.subHeading.selectedBall
    : state.fluidPouredCount === 0
    ? data.screenOne.subHeading.firstFluid
    : state.fluidPouredCount === 1 ||
      state.fluidPouredCount === 2 ||
      state.fluidPouredCount === 3
    ? data.screenOne.subHeading.otherFluid
    : state.fluidPouredCount === 4 && data.screenOne.subHeading.fourthFluid;

  let questionInfolabel = questionInfo;
  if (state.isBall) {
    const selectedSphere = state.sphereData.filter(function (index) {
      return index.id == state.sphereType;
    });

    if (selectedSphere[0]) {
      questionInfo = questionInfo.replace(
        "(insert density)",
        selectedSphere[0].densityValue
      );
      questionInfolabel = questionInfo.replace("g/mL", data.unitLabel2);
      flag = true;
    }
  } else {
    const selectedFluid = state.fluidData.filter(function (index) {
      return index.id == state.fluidType;
    });

    if (
      state.fluidPouredCount === 1 ||
      state.fluidPouredCount === 2 ||
      state.fluidPouredCount === 3
    ) {
      questionInfo = questionInfo
        .replace("Fluid 2", selectedFluid[0].fluid)
        .replace("0.82", selectedFluid[0].densityValue);
      questionInfolabel = questionInfo
        .replace("g/mL", data.unitLabel2)
        .replace("<br>", "");
    }
  }

  return {
    answerAttempt: state.submitAnswer,
    submitButtonPressed: state.submitButtonPressed,
    heading: state.isBall ? data.screenTwo.heading : data.screenOne.heading,
    show: state.isBall ? flag : state.fluidPouredCount > -1,
    questionInfo,
    infoLabel: questionInfolabel,
  };
};

export default connect(mapState)(RightNonInteractive);
