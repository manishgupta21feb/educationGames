import React from 'react';
import './style.scss';
import NextButtonContainer from '../../../../containers/NextButtonContainer';
import DraggableContainer from '../../../../containers/DraggablesContainer';
import StrandTableContainer from '../../../../containers/StrandTableContainer';
import Button from '../../../../../app/components/Button';

const RightSection = (props) => {

  const {
    screen6QuestionText,
    checkDropAnswers,
    droppedItems,
    screen6CorrectAnswer
  } = props;

  return (
    <div className="right-section">
      <h2 className="instruction-text">
        {screen6QuestionText}
      </h2>
      <StrandTableContainer />
      <DraggableContainer />
      {
        screen6CorrectAnswer ?
          <NextButtonContainer />
          :
          <div className="screen6-submit-btn">
            <Button
              classes="btn primary"
              text="Submit Answer"
              onClick={checkDropAnswers}
              disabled={droppedItems.length <= 7}
            >
            </Button>
          </div>
      }
    </div>
  )
}

export default RightSection;