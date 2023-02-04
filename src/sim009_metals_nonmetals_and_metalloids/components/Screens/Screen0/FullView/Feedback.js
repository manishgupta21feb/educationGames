import React from "react";
import "./style.scss";
import Button from "../../../../../app/components/Button";
import VideoContainer from "../../../../containers/VideoContainer";

const Feedback = ({
  feedbackData,
  buttonContinueClasses,
  text,
  handleContinue,
  isPopupActive,
}) => {
  return (
    <div className="full-view">
      <div className="full-view-wrapper">
        <div className="sr-only" aria-level="1" role="heading">
          <p>{`${feedbackData.headingLevel1}`}</p>
        </div>
        {feedbackData.natureOfFeedback == "image" && (
          <>
            <div className={`bg-image-feedback ${feedbackData.classes}`}></div>
            <div className="bg-shadow-feedback"></div>

            <h2
              className="feedbackText"
              dangerouslySetInnerHTML={{ __html: feedbackData.testFeedback }}
            ></h2>

            <div
              role="img"
              aria-label={feedbackData.ariaLabel}
              className={`image-video-alt`}
            ></div>
            <p
              className={`tested-element ${feedbackData.experimentClass}`}
              dangerouslySetInnerHTML={{ __html: feedbackData.element }}
            ></p>
            <p
              className="experiment-label"
              dangerouslySetInnerHTML={{ __html: feedbackData.experimentName }}
            ></p>
          </>
        )}
        {feedbackData.natureOfFeedback == "video" && (
          <>
            <div className="bg-shadow-feedback"></div>
            <h2
              className="feedbackText"
              dangerouslySetInnerHTML={{ __html: feedbackData.testFeedback }}
            ></h2>
            <VideoContainer isPopupActive={isPopupActive} />
          </>
        )}

        <div className="continue-container">
          <Button
            classes={buttonContinueClasses}
            text={text}
            isPopupActive={isPopupActive ? "-1" : null}
            onClick={() => handleContinue()}
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
