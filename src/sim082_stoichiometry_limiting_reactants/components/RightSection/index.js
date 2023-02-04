import React from 'react';
import MCQAreaContainer from '../../containers/MCQAreaContainer';
import RadioButtonContainer from '../../containers/RadioButtonContainer';
import NextButtonContainer from '../../containers/NextButtonContainer';
import './style.scss';

const RightSection = (props) => {

  const { 
    instructionText, 
    answerAttempted, 
    correctAttempt 
  } = props;

  return (
    <div className="right-section">
      <p className="instruction-text">{instructionText}</p>
      <MCQAreaContainer>
        <RadioButtonContainer />
      </MCQAreaContainer>
      {answerAttempted && correctAttempt ? <NextButtonContainer /> : null}
    </div>
  )
}

export default RightSection;