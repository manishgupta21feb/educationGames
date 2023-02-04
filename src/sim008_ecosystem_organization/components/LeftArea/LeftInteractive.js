import React, { useEffect, useState } from "react";
import "./style.scss";

const LeftInteractive = (props) => {
  const [question, setQuestion] = useState({});
  const [selectedOrganisms, setSelectedOrganisms] = useState([]);
  const { questions, startActivity, isPopupActive, selectedQuestion } = props;

  const onClick = (id) => {
    if (selectedOrganisms.indexOf(id) == -1) {
      setSelectedOrganisms([...selectedOrganisms, id]);
      props.onClick();
    }
  };

  useEffect(() => {
    const q = questions.filter((q) => q.id == selectedQuestion)[0];
    setSelectedOrganisms([]);
    setQuestion(q);
  }, [selectedQuestion]);

  useEffect(() => {}, [question]);

  useEffect(() => {
    if (
      selectedOrganisms.length &&
      question &&
      question.animals &&
      selectedOrganisms.length == question.animals.length
    ) {
      props.submitAnswer();
    }
  }, [selectedOrganisms]);

  return (
    <div className="left-interactive">
      <h1 className="sr-only">{props.headingText}</h1>
      <div className={`${question.className} ${startActivity ? "play" : ""}`}>
        {question.animals &&
          question.animals.map((a) => {
            const sel = selectedOrganisms.indexOf(a.id) >= 0;
            return (
              <div
                // id={a.id}
                aria-hidden={true}
                key={`${a.id}-anim`}
                className={a.classes}
              >
                <span className={sel ? "organism-selected" : ""}></span>
              </div>
            );
          })}
      </div>
      <div className="buttons-container">
        {question.animals &&
          question.animals.map((a) => {
            selectedOrganisms.indexOf(a.id) >= 0;
            return (
              <button
                id={a.id}
                key={a.id}
                type="button"
                title={a.altText}
                className={a.classes}
                aria-label={`${a.altText} ${
                  selectedOrganisms.indexOf(a.id) != -1 ? "Selected" : ""
                }`}
                aria-hidden={isPopupActive}
                onClick={() => onClick(a.id)}
                tabIndex={isPopupActive ? "-1" : null}
              ></button>
            );
          })}
      </div>
    </div>
  );
};

export default LeftInteractive;
