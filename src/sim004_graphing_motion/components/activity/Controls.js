import React, { useEffect, useState, useRef } from "react";
import { renderToString } from "react-dom/server";

import TimeSlider from "../../containers/TimeSlider";
import DistanceSlider from "../../containers/DistanceSlider";
import AccelerationSlider from "../../containers/AccelerationSlider";
import DirectionButton from "../../containers/DirectionButtonsContainer";
import RadioButtonContainer from "../../containers/RadioButtonContainer";
import FinishButtonContainer from "../../containers/FinishButtonContainer";
import RightInteractiveContainer from "../../containers/RightInteractiveContainer";

const Controls = (props) => {
  const {
    distance,
    time,
    directions,
    acceleration,
    animationState,
    selectDirection,
    selectedDirection,
    tripCount,
    accelerationData,
    text,
    disableState,
    selectedControlOption,
    playAudio,
    radiobuttonLabel,
    controlInstructionsText,
  } = props;

  const [rbuttons, setRButtons] = useState([]);
  const timerRef = useRef(null);
  const mcqAreaRef = useRef(null);

  const options = [
    {
      id: "time",
      disable: false,
      alt: radiobuttonLabel.time.alt,
      label: (
        <span
          aria-hidden="true"
          dangerouslySetInnerHTML={{ __html: radiobuttonLabel.time.label }}
        ></span>
      ),
    },
    {
      id: "acceleration",
      alt: radiobuttonLabel.acceleration.alt,
      label: (
        <span
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: radiobuttonLabel.acceleration.label,
          }}
        ></span>
      ),
      disable: false,
    },
  ];

  useEffect(() => {
    const buttons = options.map((a) => ({
      id: a.id,
      label: a.alt,
      disabled: a.disabled,
      html: renderToString(a.label),
    }));
    setRButtons(buttons);
    const element = mcqAreaRef.current.querySelector("#mcq-question-heading");
    if (element) {
      element.setAttribute("aria-level", 2);
    }
  }, []);

  useEffect(() => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      playAudio();
    });
  }, [distance, time, acceleration, selectedDirection, selectedControlOption]);

  useEffect(() => {
    if (tripCount === 6) {
      mcqAreaRef.current.classList.add("hide-submit-button");
    } else {
      mcqAreaRef.current.classList.remove("hide-submit-button");
    }
  }, [tripCount]);

  const _selectDirection = (direction) => {
    selectDirection(direction.toLowerCase());
  };

  const checkSelected = (selected, current) => {
    if (selected == current.toLowerCase()) {
      return "selected";
    }
    return "";
  };

  return (
    <div
      ref={mcqAreaRef}
      className={`${tripCount > 5 ? "trip-completed" : ""}`}
    >
      <p className="instruction-text">{controlInstructionsText}</p>
      {/* <p className="instruction-text">
        Program the car to move by selecting the distance it will travel. Then,
        select either the acceleration or the time it will take for the car to
        travel the distance.
      </p> */}
      <RightInteractiveContainer>
        <>
          <div className="controller-content">
            <div className="direction-container">
              <p>{text.direction}</p>
              <div className="direction-btns-wrapper">
                {directions.map((direction, i) => {
                  const state = checkSelected(selectedDirection, direction.id);
                  return (
                    <DirectionButton
                      key={i}
                      text={direction.text}
                      classes={`direction-btn ${state}`}
                      onClick={() => _selectDirection(direction.id)}
                      ariaLable={`${direction.text} direction ${state}`}
                    ></DirectionButton>
                  );
                })}
              </div>
            </div>

            <div className="distance-container">
              <p aria-hidden="true">{text.distance}</p>
              <DistanceSlider />
            </div>

            <div className="selection-container">
              <RadioButtonContainer radiobuttons={rbuttons} />
            </div>
            {selectedControlOption === "acceleration" ? null : (
              <div className="time-container">
                <p aria-hidden="true">{text.time}</p>
                <TimeSlider />
              </div>
            )}
            {selectedControlOption === "time" ? null : (
              <div className={"acceleration-container"}>
                <p aria-hidden="true">
                  {text.acceleration} (m/s<sup>2</sup>)
                </p>
                <AccelerationSlider />
              </div>
            )}
          </div>
        </>
      </RightInteractiveContainer>
      {tripCount === 6 ? <FinishButtonContainer /> : null}
    </div>
  );
};

export default Controls;
