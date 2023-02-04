import React, { useEffect, useState, useRef } from "react";
import { renderToString } from "react-dom/server";
import WavelengthSlider from "../../containers/WavelengthSlider";
import RadioButtonContainer from "../../containers/RadioButtonContainer";
import FinishButtonContainer from "../../containers/FinishButtonContainer";
import RightInteractiveContainer from "../../containers/RightInteractiveContainer";

const Controls = (props) => {
  const {
    tripCount,
    radiobuttonLabel,
    controlsHeading,
    wavelengthName,
    animationState,
  } = props;
  const [rbuttons, setRButtons] = useState([]);
  const mcqAreaRef = useRef(null);

  const options = [
    {
      id: "sodium",
      alt: radiobuttonLabel.sodium.alt,
      label: (
        <span
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: radiobuttonLabel.sodium.label,
          }}
        ></span>
      ),
      disable: false,
    },
    {
      id: "copper",
      disable: false,
      alt: radiobuttonLabel.copper.alt,
      label: (
        <span
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: radiobuttonLabel.copper.label }}
        ></span>
      ),
    },
  ];

  useEffect(() => {
    const buttons = options.map((a) => ({
      id: a.id,
      label: a.alt,
      disabled: a.disable,
      html: renderToString(a.label),
    }));
    setRButtons(buttons);
    const element = mcqAreaRef.current.querySelector("#mcq-question-heading");
    if (element) {
      element.setAttribute("aria-level", 2);
    }
  }, []);

  return (
    <div
      ref={mcqAreaRef}
      className={`${tripCount > 5 ? "trip-completed" : ""}`}
    >
      <RightInteractiveContainer>
        <>
          <p id="instruction-text">{controlsHeading}</p>
          <div className="controller-content">
            <div className="selection-container">
              <RadioButtonContainer radiobuttons={rbuttons} />
            </div>

            <div className="wl-container">
              <p aria-hidden="true">{wavelengthName}</p>
              <WavelengthSlider />
            </div>
          </div>
        </>
      </RightInteractiveContainer>
      {tripCount > 5 && !animationState ? <FinishButtonContainer /> : null}
    </div>
  );
};

export default Controls;
