import React from "react";
import Button from "../../../app/components/Button";
import InfoDataTable from "../../../app/components/ItemInformationTable";
import "./style.scss";

const Right = (props) => {
  const {
    answered,
    arrayVisited,
    buttonFinish,
    itemsVisited,
    onFinishClick,
    isPopupActive,
    continueButton,
    totalQuestions,
    onContinueClick,
    headingScreenTwo,
    headingScreenone,
  } = props;

  const check = itemsVisited == totalQuestions;
  const btnText = check ? buttonFinish : continueButton;
  const btnClick = check ? onFinishClick : onContinueClick;
  const btnClasses = check
    ? "positive toast-secondary-button"
    : "positive toast-secondary-button right-arrow";

  return (
    <div className="right-container">
      {answered ? null : <p className="instructions">{headingScreenone}</p>}

      <div className="item-details">
        {answered ? <h2 className="instructions">{headingScreenTwo}</h2> : null}
        <div className="info">
          {arrayVisited.map((text, index) => {
            return (
              <React.Fragment key={index}>
                <InfoDataTable
                  key={`${text}${index}`}
                  heading={text.dataTitle}
                  list={text.table}
                ></InfoDataTable>
              </React.Fragment>
            );
          })}
          {answered ? (
            <Button
              key={`finish-btn`}
              text={btnText}
              onClick={btnClick}
              isPopupActive={isPopupActive}
              disabled={isPopupActive || arrayVisited.length < 3}
              classes={btnClasses}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Right;
