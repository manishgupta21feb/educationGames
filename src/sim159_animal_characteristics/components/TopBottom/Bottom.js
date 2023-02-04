import React, { useRef } from "react";
import MCQContainer from "../../containers/MCQContainer";
import RadioButtons from "../../containers/RadioButtons";
import NextScreenButton from "../../containers/NextScreenButton";
import Checkboxes from "../../containers/Checkboxes";

const Bottom = (props) => {
  const timeout = useRef(null);
  const { question, currentScreen, questionAnswered, onRadioButtonChange } =
    props;

  const onChange = (id) => {
    onRadioButtonChange(id);
    EventManager.broadcast("STOP_ALL");
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      EventManager.broadcast("PRIMARY_CLICK");
    }, 100);
  };

  return (
    <div className="bottom-wrapper">
      <MCQContainer>
        <>
          {question?.text.map((t, i) => (
            <p
              className="question-text"
              key={`${question.id}${i}`}
              id={question.text.length - 1 == i ? "question-text-para" : null}
            >
              {t}
            </p>
          ))}
          {currentScreen == 0 ? (
            <RadioButtons onChange={onChange} />
          ) : (
            <Checkboxes />
          )}
        </>
      </MCQContainer>
      {questionAnswered ? <NextScreenButton /> : null}
    </div>
  );
};

export default Bottom;
