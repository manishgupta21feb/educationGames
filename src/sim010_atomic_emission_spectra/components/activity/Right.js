import React from "react";
import McqAreaContainer from "../../containers/McqAreaContainer";
import WavelengthSliderContainer from "../../containers/WavelengthSliderContainer";

const RightComponent = (props) => {
  const { isPopupActive, instructionText, wavelengthAlt, wavelengthLabel } =
    props;

  return (
    <div className="right-container">
      <p className="instruction-text">{instructionText}</p>
      <McqAreaContainer isPopupActive={isPopupActive}>
        <div>
          <p className="wavelength-label" aria-hidden="true">
            {wavelengthLabel}
          </p>
          <span className="sr-only">{wavelengthAlt}</span>
          <WavelengthSliderContainer />
        </div>
      </McqAreaContainer>
    </div>
  );
};

export default RightComponent;
