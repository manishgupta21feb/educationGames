import React, { useState, useRef } from "react";
import "./question.scss";
import Button from "../../../../app/components/Button";
import VideoContainer from "../../../containers/VideoContainer"

const QuestionBackgroundArea = (props) => {
  const { videoStopText, videoPlayText, selectedQuestion, currentPopup, setSoundOnClick } = props
  return (
    <div className="backgroundContainer">
      {
        selectedQuestion.assetType === 'Video' ?
          <>
            <VideoContainer />
            {selectedQuestion.serialNo == 0 ? <span aria-hidden="true" className="digitalText">{selectedQuestion.temperature}</span> : null}
          </>
          :
          // <img src={selectedQuestion.assetUrl} alt={selectedQuestion.ariaLabel} style={{
          //   width: 800,
          //   height: 317
          // }} />
        <div role="img" aria-label={selectedQuestion.ariaLabel} className="questionImage"/>
      }
    </div>
  )
}

export default QuestionBackgroundArea