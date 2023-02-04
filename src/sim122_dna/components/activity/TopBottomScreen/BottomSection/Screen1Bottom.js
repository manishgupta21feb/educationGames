import React from 'react';
import NextButtonContainer from '../../../../containers/NextButtonContainer';

const Screen1Bottom = (props) => {

  const {
    screen1QuestionText,
    selectedHotSpotText,
    visitedHotSpot,
    nextButtonClickState
  } = props;

  return (
    <>
      {
        nextButtonClickState || visitedHotSpot.length == 0 ?
          <p className="instruction-text">
            {screen1QuestionText}
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

export default Screen1Bottom;