import React, { useState, useEffect, useRef } from "react";
import Button from "../../../app/components/Button";
import "./style.scss";
import { getSimLanguage } from "../../../app/helpers";

const FullView = (props) => {
  const [signArea, setSignArea] = useState({});
  const [fadeRoom, setFadeRoom] = useState(false);
  const [goToNext, setGotoNext] = useState(false);
  const [answerIndex, setAnswerIndex] = useState(-1);
  const doorRef = useRef(null);
  const simLanguage = getSimLanguage();
  const {
    heading,
    answered,
    questions,
    doorZoomMap,
    onItemClick,
    isPopupActive,
    screen1Heading,
    selectedQuestion,
    mainScreenText,
    selectedButton,
    setSelectedButton,
    setResetFocusState,
  } = props;

  useEffect(() => {
    if (selectedQuestion >= 0) {
      const q = questions.filter((q, i) => i == selectedQuestion)[0];
      const index = q.options.findIndex((o) => o.id == q.answerKey);
      setSignArea({
        alt: q.headingQuestion,
        text: q.signBoardQuestion,
      });
      setAnswerIndex(index);
      setFadeRoom(false);
      setGotoNext(false);
    }
  }, [selectedQuestion, questions]);

  const onAnimationEnd = (event) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    if (event.animationName) {
      if (event.animationName == "animateDoor") {
        setFadeRoom(true);
        setGotoNext(true);
        doorRef.current.classList.add("door-opened");
      } else if (
        event.animationName == `opaque` ||
        event.animationName.includes("animateZoom")
      ) {
        setResetFocusState(true);
        props.onDoorAnimationEnd();
        setSelectedButton("");
      }
    }
  };

  return (
    <div className="full-view">
      <div className="full-view-wrapper" onAnimationEnd={onAnimationEnd}>
        <div className="sr-only" aria-level="1" role="heading">
          <p>{screen1Heading}</p>
        </div>
        <div className="instructions">
          <h2 className={"questionNumber"}>{heading}</h2>
          <p>{mainScreenText}</p>
        </div>
        <div aria-hidden="true" className="bg-shadow"></div>
        <div
          className={`overlay-black ${
            fadeRoom && answered && selectedQuestion < questions.length - 1
              ? "opaque"
              : ""
          }`}
        ></div>
        {questions.map((question, index) => {
          return (
            <div key={`bg-image${question.id}-${index}`}>
              {selectedQuestion == index ? (
                <img className={`sr-only sr-image`} alt={question.altText} />
              ) : null}
              <div
                key={`bg-image-${index}`}
                aria-hidden={index !== selectedQuestion}
                className={`bg-image bg-image${question.id} ${
                  index == selectedQuestion && answered && goToNext
                    ? `animate-bg-scale-${doorZoomMap[answerIndex]}`
                    : ""
                }`}
                style={{
                  opacity: selectedQuestion == index ? "1" : "0",
                }}
              >
                {question.options.map((item, _index) => {
                  const selected = selectedButton == item.id ? "selected" : "";
                  const sub =
                    selectedQuestion == 0 || selectedQuestion == 3 ? "sub" : "";
                  return (
                    <div
                      key={`item-${_index}`}
                      className={`buttons buttonPosition${_index} ${item.className} ${simLanguage}`}
                    >
                      {selectedQuestion == index &&
                      item.id == question.answerKey ? (
                        <div
                          ref={doorRef}
                          key={`animated-door-${_index}`}
                          onAnimationEnd={onAnimationEnd}
                          className={`bg-image-sprite bg-image-sprite${selectedQuestion} ${
                            answered ? "animate" : ""
                          } `.trim()}
                          style={{
                            opacity:
                              selectedQuestion == index && answered ? "1" : "0",
                          }}
                        ></div>
                      ) : null}
                      <Button
                        key={`${item.id}`}
                        text={item.label}
                        label={item.text}
                        ariaLable={item.ariaLabel}
                        hideTooltip={item.hideTooltip}
                        isPopupActive={isPopupActive}
                        classes={`btn-chip ${selected} ${sub}`.trim()}
                        disabled={answered || index !== selectedQuestion}
                        ariaPressed={selectedButton == item.id ? true : false}
                        onClick={() => {
                          onItemClick(item.id);
                          setSelectedButton(item.id);
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div
          role="heading"
          aria-level="2"
          className="questionBoard"
          aria-label={signArea.alt}
        >
          <p
            aria-hidden
            dangerouslySetInnerHTML={{
              __html: signArea.text,
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default FullView;
