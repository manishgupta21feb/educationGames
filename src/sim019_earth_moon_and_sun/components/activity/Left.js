import React, { useEffect, useRef, useState } from "react";
import ProgressRing from "../../../app/components/ProgressRing";

const left = (props) => {
  const ref = useRef(null);
  const toRef1 = useRef(null);
  const toRef2 = useRef(null);
  const [dates, setDates] = useState([]);
  const [degrees, setDegress] = useState([]);
  const [moonPhase, setMoonPhase] = useState("");
  const [marker, setMarkers] = useState(props.selectedDay);

  const {
    moonPhases,
    selectedDay,
    ariaLiveText,
    mainImageAlt,
    isPopupActive,
    rotationLiveText,
    calendarData: { days },
    moonAroundEarthAltText,
  } = props;

  useEffect(() => {
    const temp = [];
    const temp2 = [];
    const anglePerDegree = 360 / (days - 1);
    for (let i = 0; i < days - 1; i++) {
      temp2.push(i * anglePerDegree);
    }
    for (let i = 1; i <= days; i++) {
      temp.push(i);
    }
    setDates([...temp]);
    setDegress([...temp2]);
  }, []);

  useEffect(() => {
    let temp = "";
    for (let { dates, phase } of moonPhases) {
      if (dates.includes(selectedDay)) {
        temp = phase;
        break;
      }
    }
    clearTimeout(toRef1.current);
    clearTimeout(toRef2.current);
    const anglePerDegree = 360 / (days - 1);
    const totalAngle = (anglePerDegree * (selectedDay - 1)).toFixed(2);
    const liveText = rotationLiveText
      .replace("-1-", totalAngle)
      .replace("-2-", temp);
    console.log(`liveText: ${liveText}`);
    ariaLiveText(" ");
    toRef1.current = setTimeout(() => {
      ariaLiveText(liveText);
    }, 200);
    toRef2.current = setTimeout(() => {
      ariaLiveText(" ");
    }, 1000);
    setMoonPhase(temp);
  }, [selectedDay]);

  useEffect(() => {
    const delay = Math.round(700 / Math.abs(selectedDay - marker));
    clearInterval(ref.current);
    ref.current = setInterval(() => {
      setMarkers((state) => {
        if (state < selectedDay) {
          return state + 1;
        } else if (state > selectedDay) {
          return state - 1;
        } else {
          return state;
        }
      });
    }, delay);
  }, [selectedDay]);

  useEffect(() => {
    if (!isPopupActive) {
    }
  }, [moonPhase]);

  return (
    <div className="left-section">
      <img className="sr-only sr-image" alt={mainImageAlt} />
      <div className="moon-phases-container">
        <div className="moon-phases-wrapper">
          <div className="moon-phase">
            {dates.map((date) => {
              return (
                <div
                  key={date}
                  className={`moon-phase-img img${date} ${
                    selectedDay == date ? "active" : ""
                  }`.trim()}
                ></div>
              );
            })}
            <img
              className="sr-only sr-image"
              alt={
                moonPhases.filter(
                  (phase) => phase.dates.indexOf(selectedDay) !== -1
                )[0].alt
              }
            />
          </div>
          <p aria-hidden>{props.moonPhaseLabel}</p>
        </div>
        <div aria-hidden className="moon-phase-label">
          <span className="hr-line"></span>
          <p>{moonPhase}</p>
        </div>
      </div>
      <div className="moon-rotation-container">
        <div className="earth-image-wrapper">
          <div className="earth-image" />
        </div>
        <img
          className="sr-only sr-image"
          alt={moonAroundEarthAltText[selectedDay]}
        />
      </div>
      <ProgressRing total={29} circumference={370} value={selectedDay - 1} />
      <div className="moon-phases">
        {degrees.map((degree, index) => {
          const activeIndex = degrees.length - selectedDay;
          const check = activeIndex < index || index == 0;
          return (
            <div
              key={`moon-phase${degree}`}
              className={`moon-phase-marker`}
              style={{
                transform: `rotate(${degree}deg)`,
                opacity: check ? "1" : "0",
              }}
            >
              <div className="marker-wrapper">
                <div className="marker"></div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="moon-wrapper"
        style={{
          transform: `rotate(${90 - ((selectedDay - 1) * 360) / 29}deg)`,
        }}
      >
        <div
          className="moon"
          style={{
            transform: `rotate(${-(90 - ((selectedDay - 1) * 360) / 29)}deg)`,
          }}
        ></div>
      </div>
      <p className="earth-label">{props.earthLabel}</p>
    </div>
  );
};

export default left;
