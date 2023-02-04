import React from 'react';
import './style.scss';
import NextButtonContainer from '../../../../containers/NextButtonContainer';
import MCQAreaContainer from '../../../../containers/MCQAreaContainer';
import RadioButtonContainer from '../../../../containers/RadioButtonContainer';
import CheckboxContainer from '../../../../containers/CheckboxContainer';

const BottomSection = (props) => {

  const {
    bottomHeading,
    screenStatus,
    answerAttempted,
    correctAttempt
  } = props;

  console.log(bottomHeading, "bottomHeading")

  return (
    <div className="bottom-section-wrapper">
      {
        bottomHeading.text &&
        <p className="instruction-text" aria-label={bottomHeading.ariaLabel ? bottomHeading.ariaLabel : null}>
          {
            bottomHeading.text.map((text, i) =>
              <span
                key={i}
                dangerouslySetInnerHTML={{
                  __html: text
                }}
              ></span>
            )
          }
        </p>
      }
      {
        (screenStatus == 'nitrogen-ND' ||
          screenStatus == 'carbon-and-nitrogen' ||
          screenStatus == 'nitrogen-fixation' ||
          screenStatus == 'climate'
        )
        &&
        <MCQAreaContainer>
          {
            (screenStatus == 'nitrogen-ND') ?
              <RadioButtonContainer /> :
              <CheckboxContainer />
          }
        </MCQAreaContainer>
      }
      {
        (screenStatus == 'nitrogen-ND' ||
          screenStatus == 'carbon-and-nitrogen' ||
          screenStatus == 'nitrogen-fixation' ||
          screenStatus == 'climate'
        ) ? (
          (answerAttempted && correctAttempt) ?
            <NextButtonContainer /> :
            null
        )
          :
          <NextButtonContainer />
      }
    </div>
  )
}

export default BottomSection;