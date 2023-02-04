import React, { useEffect, useState, useRef } from "react";
import RadioButtonArea from "../../containers/RadioButtonAreaContainer";
import FinishButton from "../../containers/FinishButtonContainer";
import "./style.scss";
import Button from "../../../app/components/Button";
import EventManager from "../../../app/events/manager";
import { getSimLanguage } from "../../../app/helpers";

const RightArea = (props) => {
  const {
    introHeading,
    activityCompleted,
    questionSet,
    toastMsg,
    getNextQuestion,
    isPopupActive,
    currentPopup,
    questionHeading,
    nextButtonState,
    informationBoxLabel,
    getQuestionSet,
    optionResults,
    selectedOptions,
    isRadioButtonDisable,
    onClickOfImage,
    buttonLabels,
  } = props;

  const [generationText, setGenerationText] = useState("");
  const [infomationBtnShow, setInfomationBtnShow] = useState(false);
  const closeBtnRef = useRef();
  useEffect(() => {
    if (nextButtonState) {
      setInfomationBtnShow(true);
    } else {
      setInfomationBtnShow(false);
    }
  }, [nextButtonState]);

  const onClose = () => {
    setInfomationBtnShow(false);
    onClickOfImage();
    EventManager.broadcast("PRIMARY_CLICK");
  };

  const getGenerationText = () => {
    let res = getQuestionSet.radioOptions.find((val) => {
      return val.id == selectedOptions.id;
    });
    if (getSimLanguage() == "es") {
      if (res) {
        res.label ? setGenerationText(": " + res.label) : setGenerationText("");
      }
    } else {
      if (res) {
        res.label
          ? setGenerationText(" - " + res.label)
          : setGenerationText("");
      }
    }
  };

  useEffect(() => {
    getGenerationText();
  }, [selectedOptions]);

  useEffect(() => {
    if (closeBtnRef && closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, [closeBtnRef.current, infomationBtnShow]);

  return (
    <div className={`right-area-${getSimLanguage()}`}>
      <RadioButtonArea />
      {infomationBtnShow ? (
        <div
          role="alertdialog"
          className="wrapper-1 show"
          aria-labelledby="pid1 pid2 pid3"
        >
          <p id="pid1" className="content">
            <b> {informationBoxLabel} </b> {generationText}
          </p>
          <div className="close-btn">
            <Button
              text={buttonLabels.close}
              ref={closeBtnRef}
              isPopUpOpen={isPopupActive}
              onClick={() => onClose()}
              classes={`toast-button positive`}
            />
          </div>
        </div>
      ) : null}
      {nextButtonState ? (
        <>
          <FinishButton />
        </>
      ) : null}
    </div>
  );
};

export default RightArea;
