import React, { forwardRef } from "react";
import "./style.scss";

const Button = (props, ref) => {
  const {
    label,
    text,
    onBlur,
    classes,
    onFocus,
    onClick,
    disabled,
    ariaLable,
    onKeyDown,
    ariaHidden,
    dataToggle,
    labelledby,
    describedby,
    ariaPressed,
    isPopUpOpen,
    ariaExpanded,
    ariaHaspopup,
    ariaSelected,
    isPopupActive,
    hideTooltip,
  } = props;

  const _ariaExpanded = "ariaExpanded" in props ? props.ariaExpanded : null;

  return (
    <button
      ref={ref}
      id={props.id}
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={props.style}
      data-toggle={dataToggle}
      aria-haspopup={ariaHaspopup}
      aria-expanded={_ariaExpanded}
      className={`btn ${classes}`}
      aria-selected={ariaSelected}
      onKeyDown={onKeyDown || null}
      aria-hidden={ariaHidden || null}
      aria-labelledby={labelledby || null}
      aria-describedby={describedby || null}
      title={!hideTooltip ? label || text : ""}
      aria-label={ariaLable ? ariaLable : label || text}
      tabIndex={isPopUpOpen || isPopupActive ? "-1" : null}
      aria-pressed={ariaPressed}
      onFocus={onFocus || null}
      onBlur={onBlur || null}
    >
      <span
        className="text"
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: text }}
      ></span>
      <span className="icon" aria-hidden="true"></span>
    </button>
  );
};

// Button.propTypes = {
//   text: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
//   classes: PropTypes.string.isRequired,

//   label: PropTypes.string,
//   isPopUpOpen: PropTypes.bool,
// };

export default forwardRef(Button);
