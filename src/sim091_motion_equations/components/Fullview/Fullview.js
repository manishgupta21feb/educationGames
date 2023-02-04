import React, { useEffect, useState } from "react";
import Video from "../../../app/components/Video";
import Button from "../../../app/components/Button";
import RadioButtons from "../../containers/RadioButtonContainer";
import "./style.scss";
import { setResetFocusState } from "../../../app/actions";

const Fullview = (props) => {
  const {
    imgAlt,
    heading,
    buttonPlay,
    setPlayFocus,
    currentPopup,
    buttonLabels,
    isPopupActive,
    selectedAnswer,
    observationsData,
    currentExperimentNumber,
    onAriaLIVE,
  } = props;

  const [playButton, setPlayButton] = useState(false);

  useEffect(() => {
    if (playButton) {
      setPlayButton(false);
    }
  }, [currentPopup.length]);

  const onVideoEndedHandler = () => {
    setPlayButton(false);
  };

  const question = observationsData[currentExperimentNumber - 1];

  return (
    <div className="full-view">
      <div className="full-view-wrapper">
        <img
          alt={imgAlt}
          aria-hidden={playButton}
          className="sr-only sr-image"
        />
        {question && question.id ? (
          <Video
            question={question}
            buttonLabels={buttonLabels}
            currentPopup={currentPopup}
            disablePlayPauseButton={false}
            onVideoEnded={() => onVideoEndedHandler()}
            togglePlayState={playButton ? "play" : "stop"}
          />
        ) : null}
        <h2 className="main-heading" id={"mainHeading"}>
          {heading}
        </h2>
        <RadioButtons disabled={playButton || isPopupActive} />
      </div>
      <Button
        text={buttonPlay}
        classes="toast-secondary-button"
        onClick={(e) => {
          EventManager.broadcast("PRIMARY_CLICK");
          setPlayButton(true);
          setPlayFocus();
          onAriaLIVE(
            observationsData[currentExperimentNumber - 1].liveText
          );
        }}
        disabled={playButton || isPopupActive || !selectedAnswer}
      />
    </div>
  );
};

export default Fullview;
