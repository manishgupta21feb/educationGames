import React from 'react';
import Button from '../../../../app/components/Button';
import NextButtonContainer from '../../../containers/NextButtonContainer';

const FullViewScreen2 = (props) => {

  const {
    screen2QuestionText1,
    screen2QuestionText2,
    screen2GreenStrandData,
    screen2BlueStrandData,
    onClick,
    correctAttempt,
    answerAttempted,
    imgAltTexts
  } = props;

  return (
    <>
      <div className="full-view-wrapper">
        <h2 className="instruction-text bottom-gap">
          {screen2QuestionText1}
        </h2>
        <h2 className="instruction-text">
          {screen2QuestionText2}
        </h2>
        <div className="main-strand-wrapper">
          <div className="strand-img-with-text green-strand">
            <span className="first-text" aria-hidden="true">
              3 <sup>'</sup>
            </span>
            <img className="sr-only sr-image" alt={imgAltTexts.screen2Strand1AltText} />
            <span className="img"></span>
            <div className="strand-text-wrapper" aria-hidden="true">
              {
                screen2GreenStrandData.map((s) =>
                  <span
                    key={s.class}
                    className={`strand-text ${s.class}`}
                  >
                    {s.text}
                  </span>
                )
              }
            </div>
            <span className="last-text" aria-hidden="true">
              5 <sup>'</sup>
            </span>
          </div>
          <div className='strand-btn-wrapper green'>
            <Button
              classes="hotspot-btn label"
              text="Green strand"
              onClick={() => onClick('greenStrand')}
              disabled={correctAttempt}
            >
            </Button>
          </div>
          <div className="strand-img-with-text blue-strand">
            <span className="first-text" aria-hidden="true">
              5 <sup>'</sup>
            </span>
            <img className="sr-only sr-image" alt={imgAltTexts.screen2Strand2AltText} />
            <span className="img"></span>
            <div className="strand-text-wrapper" aria-hidden="true">
              {
                screen2BlueStrandData.map((s) =>
                  <span
                    key={s.class}
                    className={`strand-text ${s.class}`}
                  >
                    {s.text}
                  </span>
                )
              }
            </div>
            <span className="last-text" aria-hidden="true">
              3 <sup>'</sup>
            </span>
          </div>
          <div className='strand-btn-wrapper blue'>
            <Button
              classes="hotspot-btn label"
              text="Blue strand"
              onClick={() => onClick('blueStrand')}
              disabled={correctAttempt}
            >
            </Button>
          </div>
        </div>
        {
          answerAttempted && correctAttempt ?
            <NextButtonContainer /> :
            null
        }
      </div>
    </>
  )
}

export default FullViewScreen2;