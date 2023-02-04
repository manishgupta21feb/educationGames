import React from "react";
import Button from "../../../../app/components/Button";
import "./style.scss";

const LeftArea = (props) => {
  const {
    buttonInformation,
    buttonList,
    clickedValue,
    selectedButton,
    submitButtonPressed,
    questionVisited,
    answerAttempt,
    isPopupActive,
    imageAltText,
    disabledButton,
    answerCorrect,
    linesInfo,
  } = props;

  const clickedVal = (e) => {
    clickedValue(e.target.id);
  };
  return (
    <div className="left-area">
      <img className="sr-only sr-image" alt={imageAltText} />
      {linesInfo.map((item) => {
        const show = questionVisited.includes(item.line1);
        return (
          <div aria-hidden="true" key={item.line1}>
            {item.data.map((lines, index) => {
              return (
                <div
                  key={`${lines.id}${index}`}
                  className={`${lines.id} ${show ? "show" : ""}`}
                >
                  <div />
                  {lines.data.map((linearrow) => {
                    const arrowShow = questionVisited.includes(
                      linearrow.lineid
                    );
                    return arrowShow
                      ? linearrow.datafile.map((arrow, indexes) => {
                          return (
                            <div
                              key={`${linearrow.lineid}${indexes}`}
                              className="arrowShow"
                            >
                              <div className={`${arrow}`} />
                            </div>
                          );
                        })
                      : null;
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
      {buttonInformation.map((items, index) => {
        return (
          <div key={items.id} className={`button-${items.id}`}>
            <Button
              label={
                items.id == "mouse" && questionVisited.includes("question4")
                  ? items.label3
                  : selectedButton.includes(items.id)
                  ? items.label2
                  : items.label1
              }
              text={items.text}
              id={items.id}
              disabled={
                (submitButtonPressed && answerAttempt) ||
                isPopupActive ||
                (disabledButton && !buttonList.includes(items.id)) ||
                // !buttonList.includes(items.id)
                answerCorrect.includes(items.id)
              }
              classes={`${items.id} btn-chip ${
                buttonList.includes(items.id) ||
                selectedButton.includes(items.id)
                  ? "selected"
                  : ""
              }  ${selectedButton.includes(items.id) ? "shaping" : ""} ${
                items.id == "mouse" && questionVisited.includes("question4")
                  ? "secondary-consumer"
                  : ""
              }`}
              ariaHidden={isPopupActive}
              ariaPressed={
                buttonList.includes(items.id) ||
                answerCorrect.includes(items.id)
              }
              onClick={clickedVal}
            />
          </div>
        );
      })}
    </div>
  );
};
export default LeftArea;
