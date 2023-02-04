import React from "react";
import "./style.scss";
import { getSimLanguage } from "../../../app/helpers";
const lang = getSimLanguage();
const ImageContainer = (props) => {
  const { question, questions } = props;

  return (
    <div className="top-view">
    
      {questions.map((q) => (
        <div
          key={`image${q.id}`}
          role="img"
          aria-label={q.altimgText}
          className={`image${q.id} ${q.id == question.id ? "" : "hide"}`}
       
        >
          <p aria-hidden="true" className={`stageText${q.id} ${lang}`}>{q.moonStageText}</p>
        </div>
      ))}
    </div>
  );
};

export default ImageContainer;
