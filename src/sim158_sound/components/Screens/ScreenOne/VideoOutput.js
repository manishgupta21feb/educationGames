import React from "react";
import "./style.scss";
import QuestionArea from "../../../containers/QuestionAreaContainer";

const Output = (props) => {
  const { activeHotspot, isVideoEnded } = props;
  return (
    <>
      <QuestionArea />
      <div className="output-container">
        {isVideoEnded ? (
          <p
            className="video-description"
            dangerouslySetInnerHTML={{
              __html: activeHotspot.details.hotspotText,
            }}
          />
        ) : null}
      </div>
    </>
  );
};

export default Output;
