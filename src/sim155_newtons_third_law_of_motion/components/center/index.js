import React from "react";
import NextButtonContainer from "../../containers/NextButtonContainer";
import QuestionAreaContainer from "../../containers/QuestionAreaContainer";
import Interactive from "./Interactive";
import "./style.scss";

const CenterArea = (props) => {
  let { screenData, isMCQ, correctAttempt, animateType } = props;
  return (
    <div className="full-container">
      {isMCQ ? (
        <QuestionAreaContainer />
      ) : (
        <>
          <div
            className={`image-cont ${screenData.class}`}
            role="img"
            aria-label="image"
          ></div>
          {screenData.id == "screen1" ? null : (
            <div
              className="still-wall"
              style={{ opacity: animateType == "none" ? 1 : 0 }}
            ></div>
          )}
          <p
            className="screen-info"
            dangerouslySetInnerHTML={{
              __html: screenData.infoData,
            }}
          ></p>
          {screenData.id == "screen4" ? <Interactive {...props} /> : null}
          <div className={`arrow-${screenData.id}`}>
            <div className="arrow-1"></div>
            <div className="arrow-2"></div>
            <p className="gravity">{screenData.text1}</p>
            <p className="normal">{screenData.text2}</p>
          </div>
        </>
      )}
      {!isMCQ || correctAttempt ? <NextButtonContainer /> : null}
    </div>
  );
};

export default CenterArea;
