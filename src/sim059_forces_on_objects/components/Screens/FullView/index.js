import React, { useEffect, useRef, useState } from "react";
import DroppableContainer from "../../../containers/DroppableListContainer";
import DraggableContainer from "../../../containers/DraggableContainer";
import Button from "../../../../app/components/Button";
import "./style.scss";
import AccessibleList from "../../../containers/AccessibleListContainer";
export default (props) => {
  const {
    isPopupActive,
    instructionText,
    fetchElements,
    fetchQuestions,
    draggableItems,
    submitAnswer,
    submitBtnText,
    buttonFinish,
    finshAll,
    showFinishButton,
    isAccessibleListVisible,
  } = props;

  const submit = useRef(null);

  const [isSubmitDisable, setSubmitDisable] = useState(true);

  useEffect(() => {
    if (showFinishButton) {
      setSubmitDisable(true);
    }
  }, [draggableItems, showFinishButton]);

  useEffect(() => {
    const disabled = draggableItems.filter((item) => item.isDisable);
    setSubmitDisable(disabled.length !== 5);
  }, [draggableItems]);

  useEffect(() => {
    if (!isSubmitDisable && submit.current && !isAccessibleListVisible) {
      submit.current.focus();
    }
  }, [isSubmitDisable, isAccessibleListVisible]);

  useEffect(() => {
    fetchElements();
    fetchQuestions();
  }, []);

  /**the button would be enable if all draggables are disable */

  return (
    <div className="wrapper2">
      <div className="instructor">
        <h1 className="heading">{instructionText}</h1>
      </div>
      <>
        <DraggableContainer />
        <AccessibleList />
        <DroppableContainer />

        <div className="submit-button">
          <Button
            ref={submit}
            text={submitBtnText}
            isPopUpOpen={isPopupActive}
            classes="primary"
            onClick={submitAnswer}
            disabled={isSubmitDisable}
          />
        </div>
        {showFinishButton && (
          <Button
            text={buttonFinish}
            isPopupActive={isPopupActive}
            classes="toast-secondary-button positive"
            onClick={finshAll}
          />
        )}
      </>
    </div>
  );
};
