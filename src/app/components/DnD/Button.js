import React from "react";
import PropTypes from "prop-types";
import { isIOS } from "react-device-detect";
import "./style.scss";

const accessibleButton = (props) => {
  const {
    label,
    text,
    classes,
    source,
    children,
    onClick,
    disabled,
    draghtml,
    onFocus,
    isPopupActive,
    ariaHiddenLabel,
  } = props;

  const onDraggableClick = (e) => (isIOS ? props.onDraggableClick(e) : null);

  return (
    <div className={`draggable-button ${classes}`}>
      <div className="button-label-wrapper">
        <div className="buttons-wrapper">
          <button
            title={label}
            onFocus={onFocus}
            onClick={onClick}
            data-source={source}
            className="accessible-element"
            disabled={disabled}
            aria-hidden={disabled}
            tabIndex={isPopupActive ? "-1" : null}
          />
          <div
            onClick={onDraggableClick}
            aria-hidden
            data-source={source}
            className="draggable-element"
            dangerouslySetInnerHTML={draghtml ? { __html: draghtml } : null}
          />
        </div>
        <label aria-hidden={ariaHiddenLabel ? ariaHiddenLabel : null}>
          {text || label}
        </label>
      </div>
      {children}
    </div>
  );
};

accessibleButton.defaultProps = {
  disabled: false,
  onDraggableClick: () => {},
};

accessibleButton.propTypes = {};

export default accessibleButton;
