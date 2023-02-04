import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";

const Stepper = (props) => {
  const {
    max,
    min,
    step,
    text,
    reset,
    label,
    labelOne,
    labelTwo,
    onChange,
    disabled,
    labelledby,
    ariaLabels,
    hideTooltip,
    isPopUpOpen,
    initialValue,
    isPopupActive,
    titleIncrement,
    titleDecrement,
    heading,
    countValue,
    classes,
  } = props;

  const [count, setCount] = useState(initialValue);

  useEffect(() => {
    setCount(countValue);
  }, [countValue]);

  const increase = () => {
    if (count != max) {
      setCount(count + step);
    }
  };

  const decrease = () => {
    if (count != min) {
      setCount(count - step);
    }
  };

  useEffect(() => {
    onChange(count);
  }, [count]);

  useEffect(() => {
    if (reset) {
      setCount(initialValue);
    }
  }, [reset]);

  return (
    <div className={`stepper ${classes ? "" : "incorrect"}`}>
      <p className="heading">
        {props.heading}
      </p>
      <div className="stepperCount">
        <p className="count">{count}</p>
        <div className="buttondiv">
          <button
            id={`${labelOne || label}${ariaLabels.plusButton}`}
            className={`uparrow ${disabled ? "disabled" : ""} `}
            onClick={increase}
            disabled={count == max || isPopupActive || disabled}
            tabIndex={isPopUpOpen || isPopupActive ? "-1" : null}
            aria-label={`${
              labelOne ? labelOne : `${label} ${ariaLabels.plusButton}`
            } `}
            title={titleIncrement}
          ></button>
          <button
            id={`${labelTwo || label}${ariaLabels.minusButton}`}
            className="downarrow"
            onClick={decrease}
            disabled={count == min || isPopupActive || disabled}
            tabIndex={isPopUpOpen || isPopupActive ? "-1" : null}
            aria-label={`${
              labelTwo ? labelTwo : `${label} ${ariaLabels.minusButton}`
            }`}
            title={titleDecrement}
          ></button>
        </div>
      </div>
    </div>
  );
};

Stepper.defaultProps = {
  step: 1,
  initialValue: 0,
  ariaLabels: {
    minusButton: "Minus",
    plusButton: "Plus",
  },
};

Stepper.propTypes = {
  step: PropTypes.number.isRequired,
  initialValue: PropTypes.number.isRequired,
  ariaLabels: PropTypes.shape({
    minusButton: PropTypes.string.isRequired,
    plusButton: PropTypes.string.isRequired,
  }),
};
export default Stepper;
