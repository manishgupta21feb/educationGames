import React from "react";
import MCQcomponent from "../../../containers/MCQcomponentContainer";
import RadioButtons from "../../../containers/RadioButtonContainer";
import NextButton from "../../../containers/NextButtonContainer";
import "./style.scss";
import { data } from "jquery";
const index = (props) => {
  const { selectedTrait, currectQuestion, correctAnswer, data } = props;

  return (
    <div className="screen-container">
      <p className="top-para">{selectedTrait[0].noChangeTxt}</p>
      <div className={`img--container`}>
        {selectedTrait[0].mcqImages.map((mcqImg) => {
          const check = mcqImg.id == currectQuestion.id ? "show" : "hide";
          return (
            <div key={mcqImg.id} className={`img img--${mcqImg.id} ${check}`}>
              {check ? (
                <img
                  className="sr-only"
                  aria-hidden={check == "show" ? false : true}
                  alt={mcqImg.altText}
                />
              ) : null}
            </div>
          );
        })}
      </div>
      <h2>{selectedTrait[0].noChangeTxtTwo}</h2>
      <MCQcomponent>
        <RadioButtons />
      </MCQcomponent>

      {correctAnswer ? <NextButton /> : null}
    </div>
  );
};

export default index;
