import React, { useEffect } from "react";
import "./main.scss";
import QuestionBackground from "../../containers/QuestionBackgroundContainer";
import { getSimLanguage } from "../../../app/helpers";
const simLanguage=getSimLanguage();

const ActivityArea = (props) => {
  const {
    questions,
    activeIndex,
    showIntroScreen,
    toggleQuestion,
    setQuestion,
    isPopupActive,
    setFocusOnReset,
    headingLevel1Text
  } = props;

  const goToQuestion = (serialNo) => {
    if (activeIndex == serialNo) {
      toggleQuestion(!showIntroScreen);
      setQuestion(activeIndex);
      setFocusOnReset();
    }
  }
 
  return (
    <>
      <div className="sr-only" aria-level="1" role="heading">
        <p>{headingLevel1Text}</p>
      </div>
      {showIntroScreen ?
        <div className="container">
          {questions.map((ques, index) => (
            <React.Fragment key={ques.serialNo}>
              <button
                type="button"
                aria-label={ques.ariaLabel}
                className={`optionBtn optionBtn${index + 1}`}
                onClick={() => goToQuestion(ques.serialNo)}
                disabled={activeIndex != ques.serialNo}
                tabIndex={isPopupActive ? -1 : 0}
                aria-hidden={isPopupActive}
              >
                <div className={`labItems labbutton${index}`} />
                {index === 0 ? <span aria-hidden="true" className="digitalText">{ques.temperature}</span> : null}
                {index === 2 ? <div className="labItems labbutton3" /> : null}
              </button>
              <p className={`labels label${index + 1} ${simLanguage}`} aria-hidden="true" >{ques.label}</p>
              {index === 2 ? <p className={`labels label4 ${simLanguage}`} aria-hidden="true">{ques.label1}</p> : null}
            </React.Fragment>
          ))
          }
        </div>
        : <QuestionBackground />}
    </>
  )
}
export default ActivityArea