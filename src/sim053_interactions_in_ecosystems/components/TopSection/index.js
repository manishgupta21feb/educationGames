import React from "react";
import "./style.scss";

const TopSection = (props) => {
  const { imgToDisplay, answerImgIndex, questionText } = props;
  return (
    <div className="top-section">
      <div className="top-static">
        {imgToDisplay.map((q) => {
          return (
            <React.Fragment key={q.imageClass + q.id}>
              {q.id === answerImgIndex && <img
                className="sr-only sr-image"
                alt={q.imageAlt != '' ? q.imageAlt : questionText}
              />}
              <div
                key={q.id}
                role="img"
                className={q.imageClass}
                aria-hidden={true}
                style={{ opacity: q.id == answerImgIndex ? "1" : "0" }}
              ></div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default TopSection;
