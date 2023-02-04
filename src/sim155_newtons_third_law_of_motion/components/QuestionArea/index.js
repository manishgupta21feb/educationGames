import React from "react";
import MCQAreaContainer from "../../containers/MCQAreaContainer";
import RadioButtonContainer from "../../containers/RadioButtonContainer";
import "./style.scss";

const QuestionArea = (props) => {
  let { questionData, compassData, arrowData, questionInstruction } = props;

  const compass = compassData.map((item) => {
    return (
      <div className="compass-main" key={item}>
        <p className={`pole comp-${item}`}>{item}</p>
      </div>
    );
  });

  const arrows = arrowData.map((item) => {
    return (
      <div className={`arrow-main-${item}`} key={item}>
        <div className="arrow-1"></div>
        <div className="arrow-2"></div>
      </div>
    );
  });

  return (
    <div className={`question-cont ques-${questionData.serNo}`}>
      <h2 className="question-ins">{questionInstruction}</h2>
      <MCQAreaContainer>
        <>
          <RadioButtonContainer />
          <div
            className="centre-area"
            role="img"
            aria-label={questionData.alt}
            aria-hidden={questionData.serNo == 4 ? true : false}
          >
            {questionData.serNo == 2 ? (
              <div className="compp">
                <div className="vertical"></div>
                <div className="horizontal"></div>
                {compass}
              </div>
            ) : null}
            <div className={`mcq-img question-${questionData.serNo}`}></div>
            <div className={`arrow-question-${questionData.serNo}`}>
              {questionData.serNo == 4 ? (
                <div className="only-arrow">{arrows}</div>
              ) : null}
              <div className="arrow-1"></div>
              <div className="arrow-2"></div>
              <p className="arrow-text text-1">{questionData.text1}</p>
              <p className="arrow-text text-2">{questionData.text2}</p>
            </div>
          </div>
        </>
      </MCQAreaContainer>
    </div>
  );
};

export default QuestionArea;
