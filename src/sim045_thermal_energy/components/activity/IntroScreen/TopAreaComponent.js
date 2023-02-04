import React from "react";
import "./main.scss";
import Button from "../../../../app/components/Button";
import { getNumber } from "../../../helper";

const ActivityArea = (props) => {
  const {
    toggleScreen,
    observationsData,
    isPopupActive,
    observationAlt,
    currentPopup,
    data,
  } = props;

  const selectQuestion = (id) => {
    toggleScreen("2", id);
  };

  return (
    <div
      className="container"
      //aria-label={observationAlt} //role="definition"
    >
      <img className="sr-only sr-image" alt={data.mainScreenAlt} />

      {observationsData.map((ques, index) => (
        <React.Fragment key={`frag-` + ques.id}>
          <div
            className={`${ques.classes} ${
              ques.isPlayed
                ? ques.classes + "__after"
                : ques.classes + "__before"
            }`}
          >
            {ques.lablesBeforeAfter.map((val, i) => {
              return val.id == 0 ? (
                <span
                  aria-hidden
                  className={`${val.classes}`}
                  dangerouslySetInnerHTML={{
                    __html: !ques.isPlayed ? val.before : val.after,
                  }}
                  key={`labels` + i}
                ></span>
              ) : (
                <p className={`${val.classes}`} aria-hidden={true} key={i}>
                  {!ques.isPlayed ? val.before : val.after}
                  <span className={val.classes2}>{val.text}</span>
                </p>
              );
            })}

            {/* 

            <p className="exp1__meter-2" aria-hidden={true}>
              20
              <span className="exp1__degree2">°C</span>
            </p>

            <span aria-hidden="true" class="exp1__cup-a">
              A
            </span>
            <span aria-hidden="true" class="exp1__cup-b">
              B
            </span> */}
          </div>

          <Button
            text={ques.experimentName}
            disabled={ques.isPlayed || isPopupActive}
            label={ques.experimentName}
            ariaLable={ques.experimentName}
            classes={
              `hotspot-btn ${ques.isPlayed ? `visited` : ""} label label` +
              getNumber(ques.id)
            }
            isPopupActive={isPopupActive}
            id={getNumber(ques.id)}
            onClick={(e) => selectQuestion(getNumber(e.target.id))}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
export default ActivityArea;
