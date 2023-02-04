import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import Draggable from "../../containers/Draggable";
import Droppable from "../../containers/Droppable";
import Button from "../../../app/components/Button";
import ButtonNextDnD from "../../containers/ButtonNextDnD";

const TopArea = (props) => {
  const {
    data,
    count,
    matchedItems,
    correctAnswer,
    isPopupActive,
    submitAnswerDnD,
    answerSubmitted,
    question,
    submitButtonState,
    showToastMessage,
    opened,
  } = props;
  const btnRef = useRef();
  const btnNextRef = useRef();
  const [matchedItemsCountState, setMatchedItemsCountState] = useState(true);

  useEffect(() => {
    if (matchedItems.length == 2) {
      setMatchedItemsCountState(false);
    } else {
      setMatchedItemsCountState(true);
    }
  }, [matchedItems]);
  useEffect(() => {
    if (matchedItems.length == 2) {
      const btnFocus = btnRef.current.querySelector(".primary");

      btnFocus.focus();
    }
  }, [matchedItems.length]);

  return (
    <div className="position-top">
      <h2 className="questionNumber">
        {data.questionHeading.replace("-1-", count)}
      </h2>
      <p className="top-para">{data.topAreaTextDescription}</p>
      <div className="top-img">
        <img className="sr-only sr-image" alt={data.imgAltText} />
        {data.imgText.map((texts, idx) => {
          return (
            <div className={`img-div--${texts.id}`} key={texts.id}>
              <p
                aria-hidden={texts.hidden}
                className={`top-img--${texts.id}`}
                dangerouslySetInnerHTML={{
                  __html: texts.text,
                }}
              ></p>
            </div>
          );
        })}
      </div>
      <Draggable />
      <div>
        <table
          className="main-container"
          aria-hidden={opened ? true : false}
          key={
            isPopupActive && !opened && !correctAnswer && !answerSubmitted
              ? "popup-active"
              : "popup-not-active"
          }
        >
          <caption className="sr-only sr-image">{data.tableCaption}</caption>
          <thead>
            <tr className="labels">
              {data.dropLabels.map((label, idx) => {
                return (
                  <th key={label.id} className="th">
                    <span key={label.id} className={label.id}>
                      {label.text}
                    </span>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {data.staticQuestion.map((ques, idx) => {
              return (
                <tr className="static-ques" key={`tr--${idx}`}>
                  {ques.map((cell, idx) => {
                    return (
                      <td
                        className="static-question-Box"
                        key={`box--${cell.value}`}
                        dangerouslySetInnerHTML={{
                          __html: cell.value,
                        }}
                      ></td>
                    );
                  })}
                </tr>
              );
            })}

            <tr className="static-ques">
              {data.replaceTableContent.map((rtc, id) => {
                const innerHTML =
                  question.dropZone && question.dropZone[id].value
                    ? `${question.dropZone[id].value} <p class='sr-only'>${question.dropZone[id].ariaName}</p>`
                    : matchedItems.length &&
                      matchedItems.find(
                        (m) => m.drop && m.drop.id == question.dropZone[id].id
                      )
                    ? matchedItems
                        .filter((item) => {
                          return question.dropZone[id].id == item.drop.id;
                        })
                        .map((items) => {
                          return items.drag.value
                            ? `<p class='sr-only'>${
                                items.drop.label +
                                " " +
                                items.drag.label.replace("draggable", "")
                              }</p>`
                            : `<p class="sr-only">
                        ${question.dropZone[id].ariaName}
                      </p>`;
                        })
                    : `<p class="sr-only">
                ${
                  question &&
                  question.dropZone &&
                  question.dropZone[id].ariaName
                }
              </p>`;
                return (
                  <td
                    className={`static-question-Box ${
                      question.dropZone && !question.dropZone[id].value
                        ? "transparent"
                        : null
                    }`}
                    key={`box--${rtc.id}`}
                    dangerouslySetInnerHTML={{
                      __html: innerHTML,
                    }}
                  ></td>
                );
              })}
            </tr>
          </tbody>
        </table>

        <Droppable />
      </div>
      <div className="submit-button" ref={btnRef}>
        <Button
          label={data.buttonLabels.submitAnswer}
          text={data.buttonLabels.submitAnswer}
          isPopupActive={isPopupActive}
          classes="primary"
          onClick={(e) => {
            submitAnswerDnD();
          }}
          disabled={submitButtonState || isPopupActive}
        />
      </div>

      {correctAnswer && answerSubmitted ? (
        <div ref={btnNextRef}>
          <ButtonNextDnD
            isPopupActive={isPopupActive}
            disabled={isPopupActive}
          />
        </div>
      ) : null}
    </div>
  );
};

export default TopArea;
