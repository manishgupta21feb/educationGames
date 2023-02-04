import React, { useEffect } from "react";
import "../../stylesheets/components/_globalNuclear.scss";
import Reactant1 from "../../containers/Reactant1";
import Reactant2 from "../../containers/Reactant2";
import Resultant from "../../containers/Resultant";

const ActivityArea = (props) => {
  const {
    data,
    question,
    returnAnswer,
    answerSubmitted,
    onStartActivity,
  } = props;
  useEffect(() => {
    onStartActivity();
  }, []);
  const questionId = question && question.id ? question.id : "";
  return (
    <>
      <div
        role="img"
        aria-label={returnAnswer ? question.anslabel : question.queslabel}
        className={`background-container ${questionId}`}
      >
        {data.nuclearData.map((n) => {
          return (
            <div
              key={n.id}
              aria-hidden="true"
              className={`equation-image ${n.id}`}
            ></div>
          );
        })}
        <div aria-hidden="true" className={`arrow-container ${questionId}`}>
          <span className="arrow"></span>
          <span className="plus"></span>
        </div>

        <Reactant1 />
        {returnAnswer ? null : <div className="blank_space"></div>}
        <span>
          <Reactant2 />
        </span>
        {answerSubmitted ? (
          returnAnswer ? (
            <div
              aria-hidden="true"
              className={`mol-formula ${question.answer}`}
            >
              <Resultant />
            </div>
          ) : null
        ) : null}
      </div>
    </>
  );
};

export default ActivityArea;
