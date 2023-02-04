import React, { useEffect, useRef, useState } from "react";
import DroppableContainer from "../../../containers/DroppableListContainer";
import DraggableContainer from "../../../containers/FullDraggableContainer";
import Button from "../../../../app/components/Button";
import AccessibleList from "../../../containers/AccessibleListContainer";
import "./style.scss";
export default (props) => {
  const {
    isPopupActive,
    instructionText,
    fetchElements,
    fetchQuestions,
    audioStatePlay,
    draggableItems,
    submitAnswer,
    submitBtnText,
    buttonFinish,
    finshAll,
    showFinishButton,
    setPreviousSound,
    isAccessibleListVisible,
  } = props;

  const submit = useRef(null);

  const [isSubmitDisable, setSubmitDisable] = useState(true);

  useEffect(() => {
    if (showFinishButton) {
      setSubmitDisable(true);
    }
  }, [showFinishButton]);

  useEffect(() => {
    const disabled = draggableItems.filter((item) => item.isDisable);
    setSubmitDisable(disabled.length !== 5);
  }, [draggableItems]);

  useEffect(() => {
    if (!isSubmitDisable) {
      if (submit.current) {
          submit.current.focus();
      }
    }
  }, [isSubmitDisable]);

  useEffect(() => {
    fetchElements();
    fetchQuestions();
  }, []);
  useEffect(() => {
    if (audioStatePlay) {
      EventManager.broadcast("PLAY_AUDIO_NARRATION", { id: "SCREEN_INTRO" });
      setPreviousSound("SCREEN_INTRO");
    }
  }, [audioStatePlay]);

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
            classes="primary"
            text={submitBtnText}
            onClick={submitAnswer}
            isPopUpOpen={isPopupActive}
            disabled={isSubmitDisable}
          />
        </div>
        {showFinishButton && (
          <Button
            text={buttonFinish}
            onClick={finshAll}
            isPopupActive={isPopupActive}
            classes="toast-secondary-button positive"
          />
        )}
      </>
    </div>
  );
};
