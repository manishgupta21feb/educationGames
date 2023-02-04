import React from "react";
import PropTypes from "prop-types";

const CompoundHolder = (props) => {
  const {
    boxData: { isSelected, content },
    source,
    isObjectSelected,
    isPopupActive,
    index,
    callBack,
    value,
    disabled,
    ariaLabel,
  } = props;
  return (
    <div
      className="rightSection__tabSection__compoundHolder"
      key={`box1_${index}`}
    >
      <button
        className={`compoundContainer ${
          isSelected ? "compoundContainer--active" : ""
        }`}
        onClick={() => {
          if (isObjectSelected) return;
          callBack(value);
        }}
        disabled={disabled}
        aria-label={ariaLabel}
        aria-hidden={isPopupActive}
        /* aria-pressed={isSelected ? "true" : null} */
        tabIndex={isPopupActive ? "-1" : null}
      >
        <img src={source} className="compoundContainer__compound" alt="" />
      </button>

      <div className="compoundContainer__compoundName" aria-hidden="true">
        {content}
      </div>
    </div>
  );
};

CompoundHolder.defaultProps = {
  isObjectSelected: false,
  isSelected: false,
  content: "",
  source: null,
  isObjectSelected: false,
  isPopupActive: false,
  index: 1,
  callBack: () => {},
  value: "",
  disabled: false,
};

CompoundHolder.propTypes = {
  isObjectSelected: PropTypes.bool,
  isSelected: PropTypes.bool,
  content: PropTypes.string,
  source: PropTypes.string,
  isObjectSelected: PropTypes.bool,
  isPopupActive: PropTypes.bool,
  index: PropTypes.number,
  callBack: PropTypes.func,
  value: PropTypes.string,
  disabled: PropTypes.bool,
};
export default CompoundHolder;
