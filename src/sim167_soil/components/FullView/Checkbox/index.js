import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

const CheckBox = (props) => {
  const { label, text, onChange, disabled, id, checked, isPopupActive } = props;
  const labelId = `${id}-label`;
  return (
    <div className={"checkbox"}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        aria-labelledby={labelId}
        onChange={() => onChange(id)}
        tabIndex={isPopupActive ? "-1" : "0"}
      />
      <div>
        <span>
          <span></span>
        </span>
      </div>
      <label
        htmlFor={id}
        aria-hidden="true"
        aria-label={label}
        dangerouslySetInnerHTML={{ __html: text }}
      ></label>
    </div>
  );
};

CheckBox.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  isPopupActive: PropTypes.bool,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CheckBox;
