import React from 'react';

const Screen3Top = (props) => {

  const {
    screen3InstructionText,
    screen3Strand1Data,
    screen3Strand2Data,
    imgAltTexts
  } = props;

  return (
    <div className="screen-3-top-wrapper">
      <h2 className="instruction-text">{screen3InstructionText}</h2>
      <div className="strand-img-with-text screen3-strand">
        <span className="first-text" aria-hidden="true">
          5 <sup>'</sup>
        </span>
        <img className="sr-image sr-only" alt={imgAltTexts.screen3Strand1AltText} />
        <span className="img"></span>
        <div className="strand-text-wrapper" aria-hidden="true">
          {
            screen3Strand1Data.map((s) =>
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
      <div className="strand-img-with-text screen3-strand2">
        <span className="img"></span>
        <img className="sr-image sr-only" alt={imgAltTexts.screen3Strand2AltText} />
        <div className="strand-text-wrapper" aria-hidden="true">
          {
            screen3Strand2Data.map((s) =>
              <span
                key={s.class}
                className={`strand-text ${s.class}`}
              >
                {s.text}
              </span>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Screen3Top;