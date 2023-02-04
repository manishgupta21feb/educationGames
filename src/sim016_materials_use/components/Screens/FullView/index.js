import React, { useEffect, useRef, useState } from "react";
import View from '../../../../app/components/View';
import DroppableContainer from "../../../containers/DroppableListContainer";
import DraggableContainer from "../../../containers/FullDraggableContainer"
import Button from "../../../../app/components/Button"
import "./style.scss";
import EventManager from "../../../../app/events/manager"
export default (props) => {
  const { isPopupActive,
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
    questionsList
  } = props

  const submit = useRef(null);

  const [isSubmitDisable, setSubmitDisable] = useState(true);

  useEffect(() => {
    if (showFinishButton) {
      setSubmitDisable(true)
      return
    }
    const disabledDraggables = draggableItems.filter(item => item.isDisable);
    const allanswered = disabledDraggables.length != 5;
    if (allanswered) {
     setTimeout(() => {
      submit.current.focus();
     }, 3000) 
    }
    setSubmitDisable(allanswered)
  }, [draggableItems,showFinishButton])

  useEffect(() => {
    fetchElements()
    fetchQuestions()

  }, [])
  useEffect(() => {
    if (audioStatePlay) {
      EventManager.broadcast("SCREEN_INTRO");

    }
  }, [audioStatePlay])


  /**the button would be enable if all draggables are disable */

 

  return (
    <div className="screen1-container">
      <View ariahidden={isPopupActive} tabindex={isPopupActive ? "-1" : null}>
        <div className="wrapper2">
          <div className="instructor">
            <h1 className="heading">{instructionText}</h1>
          </div>
          <>
            <DraggableContainer />
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
            {showFinishButton && <Button
              text={buttonFinish}
              isPopupActive={isPopupActive}
              classes="right-arrow toast-secondary-button positive"
              onClick={finshAll}
            />
            }
          </>

        </div>

      </View>
    </div>
  );
};
