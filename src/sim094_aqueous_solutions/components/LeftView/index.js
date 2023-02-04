import React from "react";
import "./leftview.scss";
import Video from "../../containers/VideoContainer";
import Labels from "../Labels";

const LeftView = (props) => {
  const { question, questionNumber, isPopupActive, observationMotive } = props;

  return (
    <>
      <h1 className="sr-only">{observationMotive}</h1>
      <div className="object">
        <Labels
          question={question}
          questionNumber={questionNumber}
          key={`lablecomponent${isPopupActive ? "act" : "inact"}`}
        />

        {questionNumber == 4 || questionNumber == 6 ? (
          <Video />
        ) : (
          <img src={question.img} className="object__img" alt={question.alt} />
        )}
      </div>
    </>
  );
};

export default LeftView;
