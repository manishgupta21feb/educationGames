import React, { useEffect, useRef, useState } from "react";
import RunButton from "./RunButton";
import SliderBox from "./SliderBox";
import Button from "../../../app/components/Button";
import "./style.scss";
import NextButtonContainer from "../../containers/NextButtonContainer";

export default (props) => {
  const {
    isPopupActive,
    instruction,
    sliderLabel,
    buttonLabels,
    onChange,
    selectedValue,
    onRun,
    runState,
    videoPlayed,
    buttons,
    onBtnClick,
    screen,
    selectedButton,
    notes,
    closeNote,
    slidValue,
    resetState,
    closeText,
  } = props;

  const closeButtonRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  const onRunClick = () => {
    setShowPopup(true);
    onRun();
    setFocusClose();
  };

  const setFocusClose = () => {
    setTimeout(() => {
      closeButtonRef.current.focus();
    });
  };

  useEffect(() => {
    setShowPopup(false);
  }, [screen]);

  const onSliderChange = (value) => {
    onChange(value);
  };

  const onButtonClick = (val) => {
    setShowPopup(true);
    onBtnClick(val);
    setFocusClose();
  };

  const onCloseClick = () => {
    setShowPopup(false);
    closeNote();
  };

  const button = buttons.map((item) => {
    return (
      <Button
        key={item.id}
        id={item.id}
        text={item.label}
        isPopupActive={isPopupActive}
        ariaPressed={selectedButton === item.value}
        classes={`primary-toggle-button but-${item.id} ${
          selectedButton == item.value ? "selected" : ""
        }`}
        onClick={(e) => onButtonClick(item.value)}
        disabled={runState}
      />
    );
  });

  return (
    <div className="right-container">
      <h2
        className="instruction"
        dangerouslySetInnerHTML={{ __html: instruction }}
      ></h2>
      {screen == 2 ? (
        <>
          <SliderBox
            value={selectedValue.value}
            sliderTitle={sliderLabel}
            altValue={sliderLabel + " " + slidValue}
            onChange={onSliderChange}
            disabled={isPopupActive || runState}
          ></SliderBox>

          <RunButton
            text={buttonLabels.run}
            onClick={onRunClick}
            isPopupActive={isPopupActive}
            disabled={runState}
          />
        </>
      ) : (
        <div className="button-main">{button}</div>
      )}
      {showPopup && (screen == 0 ? resetState : true) ? (
        <div className="question-wrapper">
          <p
            className="question-info-box"
            dangerouslySetInnerHTML={{ __html: notes }}
          ></p>
          <div className="close-button">
            <Button
              ref={closeButtonRef}
              text={closeText}
              classes={`hotspot-btn label buttons close`}
              onClick={(e) => onCloseClick()}
              isPopupActive={isPopupActive}
            />
          </div>
        </div>
      ) : null}

      {videoPlayed.length > 2 ? <NextButtonContainer /> : null}
    </div>
  );
};
