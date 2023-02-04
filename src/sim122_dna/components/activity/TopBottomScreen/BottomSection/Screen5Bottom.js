import React from 'react';
import NextButtonContainer from '../../../../containers/NextButtonContainer';

const Screen5Bottom = (props) => {

  const {
    screen5QuestionText,
    selectedHotSpotText,
    visitedHotSpot,
    nextButtonClickState
  } = props;

  return (
    <>
      {
        nextButtonClickState || visitedHotSpot.length == 0 ?
          <p className="instruction-text">
            {screen5QuestionText}
          </p> :
          <>
            <p className="instruction-text">
              {selectedHotSpotText}
            </p>
            <NextButtonContainer />
          </>
      }
    </>
  )
}

export default Screen5Bottom;