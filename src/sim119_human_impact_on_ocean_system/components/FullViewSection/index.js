import React from 'react';
import MCQAreaContainer from '../../containers/MCQAreaContainer';
import RadioButtonContainer from '../../containers/RadioButtonContainer';
import NextButtonContainer from '../../containers/NextButtonContainer';
import "./style.scss";

const FullViewSection = (props) => {

  const {
    instructionText,
    answerAttempted,
    correctAnswer
  } = props;

  return (
    <div className="full-section">
      <h2 className="instruction-text">{instructionText}</h2>
      <MCQAreaContainer>
        <RadioButtonContainer />
      </MCQAreaContainer>
      {
        answerAttempted && correctAnswer ?
          <NextButtonContainer />
          :
          null
      }
    </div>
  )
}

export default FullViewSection;