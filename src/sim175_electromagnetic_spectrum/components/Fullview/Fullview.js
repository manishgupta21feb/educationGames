import React, { useEffect, useState, useRef } from "react";
import MCQContainer from "../../containers/MCQContainer";
import RadioButtons from "../../containers/RadioButtons";
import NextScreenButton from "../../containers/NextScreenButton";
import Button from "../../../app/components/Button";
import MainActivity from "../activity/MainActivity";
import data from "../../data/index";
import "./style.scss";

const Fullview = (props) => {
  const {
    text,
    subText,
    popupbutton,
    currentScreen,
    questionAnswered,
    onRadioButtonChange,
    question,
    onClick,
    toastMsg,
    selectedQuestion,
    selectedRadioQuestion,
    updateDropItems,
    droppedItems,
    correctAnswer,
    animatedElements,
    answerOptions,
    question2,
    radioQuestions,
  } = props;

  const check = question && question.id;
  const onChange = (id) => {
    onRadioButtonChange(id);
    EventManager.broadcast("STOP_ALL");
    EventManager.broadcast("PRIMARY_CLICK");
  };
  const [elementHint, setElementHint] = useState("");
  const [elementArray] = useState([]);
  const droppedElement = useRef({});

  const showHint = (val = "") => {
    setElementHint(val);
  };
  return (
    <div className="full-view">
      <div className="full-view-wrapper">
        {currentScreen == 0 ? (
          <MCQContainer>
            <>
              <p className="question-text" id="question-text-para">
                {text}
              </p>
              <span
                className="question-subtext"
                dangerouslySetInnerHTML={{ __html: subText }}
              ></span>
              <Button
                onClick={onClick}
                text={popupbutton}
                classes={` popupbutton`}
              />

              {check ? (
                <>
                  <div className="imageTitle">
                    <span
                      className="imageWl"
                      dangerouslySetInnerHTML={{ __html: question.waveLength }}
                    ></span>
                    <span
                      className="imagefq"
                      dangerouslySetInnerHTML={{ __html: question.frequency }}
                    ></span>
                  </div>
                  <div className={`screen${currentScreen} ${question.id}`}>
                    <img className="sr-only sr-image" alt={question.imageAlt} />
                  </div>
                  <div className="imageText">{question.type}</div>
                </>
              ) : null}
              {currentScreen == 0 ? <RadioButtons onChange={onChange} /> : null}
            </>
          </MCQContainer>
        ) : (
          <MainActivity
            showHint={showHint}
            elementArray={elementArray}
            data={data}
            elementHint={elementHint}
            droppedElement={droppedElement}
            selectedQuestion={selectedQuestion}
            selectedRadioQuestion={selectedRadioQuestion}
            radioQuestions={radioQuestions}
            toastMsg={toastMsg}
            droppedItems={droppedItems}
            correctAnswer={correctAnswer}
            updateDropItems={updateDropItems}
            animatedElements={animatedElements}
            answerOptions={answerOptions}
            question2={question2}
          />
        )}
        {questionAnswered ? <NextScreenButton /> : null}
      </div>
    </div>
  );
};

export default Fullview;
