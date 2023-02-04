import React, { useEffect } from "react";
import "./main.scss";
import ButtonNextQuestion from "../../../containers/ButtonNextQuestion";

const BottomAreaComponent = (props) => {
  const { observationsData, currentExperimentNumber, nextText } = props;
  return (
    <>
      {currentExperimentNumber != -1 ? (
        nextText ? (
          <p
            className="questionIntroSubHead"
            dangerouslySetInnerHTML={{
              __html:
                observationsData[currentExperimentNumber - 1].afterExperiment,
            }}
          ></p>
        ) : (
          <p
            className="questionIntroHeading"
            dangerouslySetInnerHTML={{
              __html:
                observationsData[currentExperimentNumber - 1].beforeExperiment,
            }}
          ></p>
        )
      ) : (
        ""
      )}
      <ButtonNextQuestion />
    </>
  );
};

export default BottomAreaComponent;
