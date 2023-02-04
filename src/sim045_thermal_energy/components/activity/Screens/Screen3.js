import React, { useEffect, useRef, useState } from "react";
import DroppableContainer from "../../../containers/DroppableListContainer";
import DraggableContainer from "../../../containers/FullDraggableContainer";
import Button from "../../../../app/components/Button";
import "./style.scss";
const Screen3 = (props) => {
  const {
    isPopupActive,
    fetchElements,
    fetchQuestions,
    draggableItems,
    submitAnswer,
    submitBtnText,
    buttonFinish,
    finshAll,
    showFinishButton,
    quizArea,
    showIntroScreen,
    correctAttempt,
    currentPopup,
    h1InfoTextA11Y,
  } = props;

  const submit = useRef(null);
  const reset = useRef(null);

  const [isSubmitDisable, setSubmitDisable] = useState(true);
  const [disableFinishBtn, setDisableFinishBtn] = useState(false);

  useEffect(() => {
    if (currentPopup == 1) {
      setSubmitDisable(true);
      setDisableFinishBtn(false);
    }
  }, [currentPopup]);

  useEffect(() => {
    if (correctAttempt) {
      setSubmitDisable(true);
      // reset.current.focus();
      // return;
    } else {
      const disabledDraggables = draggableItems.filter(
        (item) => item.isDisable
      );

      const allanswered = disabledDraggables.length != 3;

      if (isSubmitDisable) {
        setSubmitDisable(allanswered);
      }
    }
  }, [draggableItems, showFinishButton]);

  useEffect(() => {
    if (!isSubmitDisable) {
      // setTimeout(() => {
      submit.current.focus();
      //   }, 100);
    }
  }, [isSubmitDisable]);

  useEffect(() => {
    fetchElements();
    fetchQuestions();
  }, []);

  return (
    <div className={`screen3 ${showIntroScreen == "3" ? "active" : ""}`}>
      {showIntroScreen == 3 ? (
        // <div className={`screen3 active`}>
        //   {3 == 3 ? (
        <div className="wrapper2">
          <h1 className="sr-only" aria-hidden={isPopupActive}>
            {h1InfoTextA11Y}
          </h1>

          <div className="instructor">
            <h2 className="heading">{quizArea}</h2>
          </div>

          <DraggableContainer />
          <DroppableContainer />

          <div className="submit-button">
            <Button
              tabIndex="-1"
              ref={submit}
              text={submitBtnText}
              isPopUpOpen={isPopupActive}
              classes="primary"
              onClick={() => {
                submitAnswer(draggableItems);
                setSubmitDisable(true);
                setDisableFinishBtn(false);
              }}
              disabled={isSubmitDisable}
            />
          </div>
          {correctAttempt && isSubmitDisable ? (
            <Button
              ref={reset}
              text={buttonFinish}
              isPopupActive={isPopupActive}
              disabled={disableFinishBtn}
              classes="toast-secondary-button positive"
              onClick={() => {
                setDisableFinishBtn(true);
                finshAll();
              }}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default Screen3;
