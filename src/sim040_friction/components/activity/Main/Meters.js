import React, { useEffect, useState, useRef } from "react";

const meters = (props) => {
  const ref = useRef(null);
  const rafRef = useRef(null);
  const timeoutRef = useRef(null);
  const currentPopupRef = useRef(currentPopup);
  const { currentPopup, readingMeters, animationState, selectedMaterial } =
    props;
  const [temp, setTemp] = useState(readingMeters.thermometer.initial);
  const [force, setForce] = useState(readingMeters.forceGauge.initial);

  useEffect(() => {
    if (animationState) {
      setForce(readingMeters.forceGauge.initial);
      setTemp(readingMeters.thermometer.readings?.[selectedMaterial][0]);
      if (ref.current) {
        timeoutRef.current = setTimeout(() => {
          setForce(readingMeters.forceGauge.readings?.[selectedMaterial]);
          animateValue(
            readingMeters.thermometer.readings?.[selectedMaterial][0],
            readingMeters.thermometer.readings?.[selectedMaterial][1],
            1000
          );
        }, 400);
      }
    }
  }, [animationState]);

  useEffect(() => {
    if (selectedMaterial) {
      if (selectedMaterial !== "none") {
        setForce(readingMeters.forceGauge.initial);
        setTemp(readingMeters.thermometer.readings?.[selectedMaterial][0]);
      } else {
        setForce(readingMeters.forceGauge.initial);
        setTemp(readingMeters.thermometer.initial);
      }
    }
  }, [selectedMaterial]);

  useEffect(() => {
    if (
      currentPopup.indexOf(1) >= 0 &&
      currentPopupRef.current.indexOf(1) == -1 &&
      currentPopupRef.current.indexOf(2) >= 0
    ) {
      if (selectedMaterial) {
        if (selectedMaterial !== "none") {
          setForce(readingMeters.forceGauge.initial);
          setTemp(readingMeters.thermometer.readings?.[selectedMaterial][0]);
        } else {
          setForce(readingMeters.forceGauge.initial);
          setTemp(readingMeters.thermometer.initial);
        }
      }
    }
    currentPopupRef.current = currentPopup;
  }, [currentPopup]);

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const animateValue = (start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = (progress * (end - start) + start).toFixed(1);
      const _temp = parseInt(value);
      const _value = value - _temp > 0 ? value : _temp;
      setTemp(_value);
      if (progress < 1) {
        rafRef.current = window.requestAnimationFrame(step);
      }
    };
    rafRef.current = window.requestAnimationFrame(step);
  };

  return (
    <div aria-hidden className="reading-meters">
      <div className="force-gauge-wrapper">
        <div className="force-gauge">
          <p className="value force">{force}</p>
          <p
            className="unit force"
            dangerouslySetInnerHTML={{
              __html: readingMeters.forceGauge.unit,
            }}
          ></p>
        </div>
        <p>{readingMeters.forceGauge.label}</p>
      </div>
      <div className="thermometer-wrapper">
        <div className="thermometer">
          <p ref={ref} className="value farenheit">
            {temp}
          </p>
          <p
            className="unit farenheit"
            dangerouslySetInnerHTML={{
              __html: readingMeters.thermometer.unit,
            }}
          ></p>
        </div>
        <p>{readingMeters.thermometer.label}</p>
      </div>
    </div>
  );
};

export default meters;
