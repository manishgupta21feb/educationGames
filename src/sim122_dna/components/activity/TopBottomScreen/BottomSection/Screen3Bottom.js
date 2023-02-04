import React from 'react';
import MCQAreaContainer from '../../../../containers/MCQAreaContainer';
import RadioButtonContainer from '../../../../containers/RadioButtonContainer';
import NextButtonContainer from '../../../../containers/NextButtonContainer';

const Screen3Bottom = (props) => {

  const {
    answerAttempted,
    correctAttempt
  } = props;

  return (
    <div className="screen-3-bottom-wrapper">
      <MCQAreaContainer>
        <RadioButtonContainer />
      </MCQAreaContainer>
      {answerAttempted && correctAttempt ? <NextButtonContainer /> : null}
    </div>
  )
}

export default Screen3Bottom;