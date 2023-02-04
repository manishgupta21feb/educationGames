import React from 'react';
import MCQAreaContainer from '../../../containers/MCQAreaContainer';
import RadioButtonContainer from '../../../containers/RadioButtonContainer';
import NextButtonContainer from '../../../containers/NextButtonContainer';
import './style.scss';

const FullSection = (props) => {

  const {
    answerAttempted,
    correctAttempt
  } = props;

  return (
    <div className="full-section-container">
      <MCQAreaContainer>
        <RadioButtonContainer/>
      </MCQAreaContainer>
      {answerAttempted && correctAttempt ? <NextButtonContainer /> : null}
    </div>
  )
}

export default FullSection;