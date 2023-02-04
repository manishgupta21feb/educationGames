import React from "react";

import TopSection from "../../containers/topSectionContainer";
import BottomSection from "./../../containers/bottonSectionContainer";
import NextButtonContainer from "../../containers/NextButtonQuestionContainer";

const QuestionSection = (props) => {
  return (
    <div className="question-container">
      <TopSection />
      <BottomSection />
      <NextButtonContainer />
    </div>
  );
};

export default QuestionSection;
