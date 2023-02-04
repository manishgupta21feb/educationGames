import React, { useState, useEffect } from "react";

import KitchenItems from "./KitchenItems";
import SelectedItem from "./SelectedItem";
import "./style.scss";

const FullView = (props) => {
  const [question, setQuestion] = useState(null);

  const {
    answered,
    questions,
    onItemClick,
    fullViewBGAlt,
    isPopupActive,
    screen1Heading,
    continueButton,
    onContinueClick,
    selectedQuestion,
  } = props;

  useEffect(() => {
    if (selectedQuestion >= 1) {
      const q = questions.filter((q) => q.id == selectedQuestion)[0];
      setQuestion({ ...q });
    }
  }, [selectedQuestion]);

  return (
    <div className="full-view">
      <div className="full-view-wrapper">
        <h1 className="sr-only">{screen1Heading}</h1>
        <div
          aria-hidden="true"
          className={`bg-image ${answered ? question.className : ""}`}
        ></div>
        <div aria-hidden="true" className="bg-shadow"></div>
        {answered ? (
          <SelectedItem
            question={question}
            screen1Heading={screen1Heading}
            continueButton={continueButton}
            onContinueClick={onContinueClick}
            selectedQuestion={selectedQuestion}
            isPopupActive={isPopupActive}
          />
        ) : (
          <KitchenItems
            question={question}
            questions={questions}
            onItemClick={onItemClick}
            isPopupActive={isPopupActive}
            fullViewBGAlt={fullViewBGAlt}
            screen1Heading={screen1Heading}
            selectedQuestion={selectedQuestion}
          />
        )}
      </div>
    </div>
  );
};

export default FullView;
