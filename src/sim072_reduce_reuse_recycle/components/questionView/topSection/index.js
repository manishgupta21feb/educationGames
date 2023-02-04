import React, { useEffect, useRef } from "react";
import "./style.scss";

const TopSection = (props) => {
  const { questionOptions, questionNum, checkAnswer, options, isPopupActive } =
    props;

  const selectedOptionRef = useRef("");

  useEffect(() => {
    let temp = options.find((x) => x.active === true);

    if (temp) {
      document.getElementById(temp.id).focus();
    }
  }, [options]);

  return (
    <div className="top" aria-hidden={isPopupActive}>
      <div
        role="heading"
        aria-level="2"
        className="questionHeading"
        aria-label={questionOptions.question}
      >
        <p className="heading" aria-hidden="true">
          {questionOptions.question}
        </p>
      </div>
      <div className="option-container">
        {options.map((element, index) => (
          <div
            className={`option ${!element.active && "option-disabled"}`}
            key={index}
          >
            <button
              data-id={element.id}
              id={element.id}
              ref={selectedOptionRef}
              className={`option-img ${element.imageClass}`}
              disabled={!element.active || isPopupActive}
              aria-label={element.heading}
              title={element.heading}
              onClick={() => checkAnswer(element.id)}
            >
              <img aria-hidden="true" src={element.img} />
            </button>
            <div
              className={`option-name ${
                questionNum === 2 ? "option-name-four" : "option-name-eight"
              }`}
            >
              {element.heading}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSection;
