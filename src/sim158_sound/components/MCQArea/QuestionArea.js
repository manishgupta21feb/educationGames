import React from "react";
import RadioButton from "../../containers/RadioButtonContainer";
import MCQArea from "../../containers/MCQAreaContainer";
import VideoContainer from "../../containers/VideoContainer";
import ButtonNextQuestion from "../../containers/ButtonNextQuestion";
import "./style.scss";

const QuestionArea = (props) => {
  const { answerSubmitted, correctAttempt, videoAlt } = props;
  return (
    <div className="physical-class">
      <MCQArea>
        <>
          <RadioButton />
          <img className="video-alt sr-only sr-image" alt={videoAlt} />
          <VideoContainer />
        </>
      </MCQArea>
      {answerSubmitted && correctAttempt ? <ButtonNextQuestion /> : null}
    </div>
  );
};

export default QuestionArea;
