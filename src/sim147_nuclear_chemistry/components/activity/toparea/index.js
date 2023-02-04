import React from "react";
import Video from "../../../../app/components/Video";
import "./style.scss";

export default (props) => {
  let { questionsData } = props;
  return (
    <div className={questionsData.classes}>
      <img className="sr-only sr-image" alt={questionsData.alt} />
      {questionsData.imgLabel
        ? questionsData.imgLabel.map((val) => {
            return (
              <p aria-hidden={true} className={val}>
                {val}
              </p>
            );
          })
        : ""}
      <span className={questionsData.imgClasses}>{questionsData.imgText}</span>
    </div>
  );
};
