import React, { useRef, useEffect, useState } from "react";
import BoxArea from "../../containers/BoxAreaContainer";
import FinishButton from "../../containers/FinishButtonContainer";
import "./style.scss";
import { getNumbers } from "../../helper.js";
import EventManager from "../../../app/events/manager";
import Button from "../../../app/components/Button";

const RightArea = (props) => {
  const dialogRef = useRef(null);
  const [scrollTabIndex, setScrollTabIndex] = useState(null);
  const {
    getInfoBtnStatus,
    introHeading,
    activityCompleted,
    questionSet,
    selectedOptions,
    toastMsg,
    getNextQuestion,
    isPopupActive,
    currentPopup,
    questionHeading,
    buttonLabels,
    getCurrentScreenAndEnvironment,
    getQuestionNumber,
    getQuestionOption,
    getInfoButton,
    infoData,
    setInfoButton,
  } = props;

  const [showInfoDilog, setShowInfoDilog] = useState(false);

  const closeBtnRef = useRef();
  const onClose = (e) => {
    setShowInfoDilog(false);
    setInfoButton(0, e.target.id);
    EventManager.broadcast("PRIMARY_CLICK");
  };
  useEffect(() => {
    if (infoData.length > 0 && getInfoBtnStatus.status != true) {
      setShowInfoDilog(true);
      setTimeout(() => {
        closeBtnRef.current.focus();
      }, 50);
    }
  }, [infoData]);

  useEffect(() => {
    setShowInfoDilog(false);
  }, [getCurrentScreenAndEnvironment.questionNo]);

  useEffect(() => {
    if (showInfoDilog) {
      setTimeout(() => {
        if (dialogRef.current) {
          const para = dialogRef.current.querySelector(".content");
          if (para && para.clientHeight < para.scrollHeight) {
            setScrollTabIndex("0");
          } else {
            setScrollTabIndex(null);
          }
        }
      }, 50);
    } else {
      setScrollTabIndex(null);
    }
  }, [showInfoDilog]);

  return (
    <div className="right-area">
      {getNumbers(questionSet[0].id) == 0 ? (
        <h2 className="upper-heading-text">
          {questionSet[0].name.replace(
            "{forest_type}",
            getCurrentScreenAndEnvironment.environment
          )}
        </h2>
      ) : (
        <>
          <h2 className="questionNumber">
            {questionHeading.replace(
              "count",
              getCurrentScreenAndEnvironment.questionNo
            )}
          </h2>
          <p className="heading-text">{questionSet[0].name}</p>

          <BoxArea questions={questionSet[0].name} />
          {showInfoDilog ? (
            <div
              ref={dialogRef}
              role="alertdialog"
              className={`wrapper-1 show ${`${
                "screen" + getCurrentScreenAndEnvironment.screen
              }-answer-{count}-info-popup`
                .replace("{count}", getNumbers(questionSet[0].id))
                .replace("screen1", "plant")
                .replace("screen2", "animal")}
               `}
              aria-labelledby="pid1 pid2 pid3"
            >
              <p
                id="pid1"
                className={`content ${
                  getCurrentScreenAndEnvironment.screen == 2 ? "d-height" : ""
                }`}
                tabIndex={scrollTabIndex}
                dangerouslySetInnerHTML={{ __html: infoData }}
              ></p>
              <div className="close-btn">
                <Button
                  id={`${getInfoBtnStatus.id}-close`}
                  text={buttonLabels.close}
                  ref={closeBtnRef}
                  isPopUpOpen={isPopupActive}
                  onClick={(e) => onClose(e)}
                  classes={"hotspot-btn close"}
                />
              </div>
            </div>
          ) : null}
        </>
      )}

      <FinishButton />
    </div>
  );
};

export default RightArea;
