import React from "react";

import NextQuestion from "../../containers/NextQuestion";

import "./style.scss";

const NonInteractive = (props) => {
  const { heading, infoLabel } = props;
  return (
    <>
      <div className="mcq-question-area">
        <div className="inner-wrapper">
          <p
            className="question"
            dangerouslySetInnerHTML={{
              __html: heading,
            }}
          ></p>
        </div>
        {props.show && (
          <div className="question-wrapper">
            <p className="question-info-box">
              <span className="sr-only">{infoLabel}</span>
              <span
                aria-hidden={true}
                dangerouslySetInnerHTML={{ __html: props.questionInfo }}
              ></span>
            </p>
          </div>
        )}
      </div>
      <NextQuestion />
    </>
  );
};

export default NonInteractive;
