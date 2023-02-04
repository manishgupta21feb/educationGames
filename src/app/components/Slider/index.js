import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import DataListItem from "./DataListItem";
import "./styles.scss";

const Slider = (props) => {
  const {
    id,
    min,
    max,
    step,
    value,
    title,
    disabled,
    datalist,
    onChange,
    ariaLabel,
    labelledby,
    describedby,
    orientation,
    altValueText,
    isPopupActive,
    ariaValueText,
    buttonTabIndex,
    grayedOutItems,
    datalistClasses,
  } = props;

  const selectedOption = (o, v) => {
    const selected = o.value == v ? "selected" : "";
    return selected;
  };

  const _onChange = (value) => {
    if (!props.disabled) {
      onChange(value);
    }
  };

  return (
    <div className={`slider-container ${orientation}`}>
      <div className={`slider ${disabled ? "disabled" : ""}`}>
        <div className="slider-custom-track"></div>
        {datalist && (
          <div aria-hidden="true" className={`datalist ${datalistClasses}`}>
            {datalist.map((l, i) => {
              const selected = selectedOption(l, value);
              const key = `datalist-marker-${id}-${i}`;
              const classes = `list-item item${i} ${selected}`;
              return <DataListItem key={key} classes={classes} item={l} />;
            })}
          </div>
        )}
        <input
          min={min}
          max={max}
          step={step}
          type="range"
          value={value}
          title={title}
          disabled={disabled}
          aria-valuenow={value}
          aria-label={ariaLabel || null}
          aria-labelledby={labelledby || null}
          data-orientation={orientation || null}
          tabIndex={isPopupActive ? "-1" : null}
          aria-describedby={describedby || null}
          onChange={(e) => _onChange(e.target.value)}
          aria-hidden={isPopupActive || buttonTabIndex || null}
          aria-valuetext={
            altValueText || (ariaValueText && ariaValueText[value]) || null
          }
        />
      </div>
    </div>
  );
};

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.any,
  orientation: PropTypes.string,
  ariaValueText: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  min: 0,
  max: 5,
  id: "",
  step: 1,
  value: 1,
  disabled: false,
  orientation: "",
  ariaValueText: {},
  onChange: () => {},
  showDataListBars: false,
  title: "Slider Title",
};

export default Slider;
