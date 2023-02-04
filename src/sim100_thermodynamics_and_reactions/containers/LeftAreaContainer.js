import { connect } from "react-redux";
import LeftArea from "../components/activity/LeftArea";

import data from "../data";

const mapState = (state) => {
  if (state.questionsData.find((x) => x.isActive == true)) {
    console.log(
      "answerrr",
      state.questionsData.find((x) => x.isActive == true).answer
    );
  }

  return {
    itemData: state.questionsData.find((x) => x.isActive == true),
    subHeading: data.subHeading,
    data: data.equationsData,
    heading: data.screenHeading,
    question: state.selectedQuestion,
    currentPopup: state.currentPopup,
    questionCount: state.questionCount,
    labels: data.labels,
  };
};

export default connect(mapState)(LeftArea);
