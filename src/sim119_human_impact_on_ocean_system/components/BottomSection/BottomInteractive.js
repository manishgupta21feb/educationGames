import React from 'react';
import MCQAreaContainer from '../../containers/MCQAreaContainer';
import RadioButtonContainer from '../../containers/RadioButtonContainer';
import NextButtonContainer from '../../containers/NextButtonContainer';

const BottomInteractive = (props) => {

  const {
    answerAttempted,
    correctAnswer
  } = props;

  return (
    <>
      <MCQAreaContainer>
        <RadioButtonContainer />
      </MCQAreaContainer>
      {
        answerAttempted && correctAnswer ?
          <NextButtonContainer />
          :
          null
      }
    </>
  )
}

export default BottomInteractive;