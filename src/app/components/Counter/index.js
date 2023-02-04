import React, { useEffect, useState, useRef } from "react";
import "./style.scss";

const Counter = (props) => {
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
    startFromMin,
    initialValue,
    isPopupActive,
    titleIncrement,
    titleDecrement,
    onIncrementClick,
    onDecrementClick,
  } = props;

  const startValue = startFromMin ? min : max;
  const _startValue = startValue || initialValue;
  const countRef = useRef(_startValue);
  const [count, setCount] = useState(_startValue);

  useEffect(() => {
    setCount(_startValue);
    countRef.current = _startValue;
    onChange(_startValue, "initial");
  }, []);

  const increase = () => {
    countRef.current = count;
    if (count != max) {
      setCount(count + step);
      if (onDecrementClick) {
        onIncrementClick();
      }
    }
  };

  const decrease = () => {
    countRef.current = count;
    if (count != min) {
      setCount(count - step);
      if (onIncrementClick) {
        onDecrementClick();
      }
    }
  };

  useEffect(() => {
    const changeType =
      countRef.current == count
        ? "none"
        : countRef.current > count
        ? "decrement"
        : "increment";
    if (changeType != "none") {
      onChange(count, changeType);
    }
  }, [count]);

  useEffect(() => {
    if (reset) {
      setCount(_startValue);
    }
  }, [reset]);

  return (
    <div className={`counter`}>
      <button
        onClick={increase}
        title={titleIncrement || ""}
        aria-describedby={labelledby || null}
        id={`${labelOne || label}${ariaLabels.plusButton}`}
        disabled={disabled || count == max || isPopupActive}
        aria-label={`${
          labelOne ? labelOne : `${label} ${ariaLabels.plusButton}`
        } `}
      ></button>
      <p>{count}</p>
      <button
        onClick={decrease}
        title={titleDecrement || ""}
        aria-describedby={labelledby || null}
        id={`${labelTwo || label}${ariaLabels.minusButton}`}
        disabled={disabled || count == min || isPopupActive}
        aria-label={`${
          labelTwo ? labelTwo : `${label} ${ariaLabels.minusButton}`
        }`}
      ></button>
    </div>
  );
};

Counter.defaultProps = {
  step: 1,
  initialValue: 0,
  startFromMin: true,
  ariaLabels: {
    minusButton: "Minus",
    plusButton: "Plus",
  },
};
export default Counter;
