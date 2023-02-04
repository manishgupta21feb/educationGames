import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import "./style.scss";

const Toast = (props) => {
  const ref = useRef(null);
  const {
    id,
    content,
    onClick,
    iconOnly,
    toastType,
    buttonClasses,
    buttonText,
    onAutoHide,
    buttonLabel,
    hideTooltip,
  } = props;

  /****
   *
   * Below code will be used when this component will be passed as children to the Popup component.
   *
   ******/
  useEffect(() => {
    if (ref && ref.current) {
      const buttons = ref.current.querySelectorAll("button");
      if (buttons && buttons.length) {
        if (props.setPopupFirstElement) {
          props.setPopupFirstElement(buttons[0]);
        }
        if (props.setPopupLastElement) {
          props.setPopupLastElement(buttons[buttons.length - 1]);
        }
      }
    }
  }, []);

  /**
   *
   * This code is to unmount this component from DOM when the slide-up animation will be completed.
   *
   * */

  const onAnimationEnd = (e) => {
    if (e.animationName == "slide-up") {
      if (onAutoHide && typeof onAutoHide == "function") {
        onAutoHide();
      }
    }
  };

  const buttonType = iconOnly ? "icon-only" : "text";
  const classes = `toast-container ${buttonType} ${toastType}`;
  const _buttonText = iconOnly ? "" : buttonText;

  return (
    <div className={`toast-wrapper ${toastType}`}>
      <div ref={ref} className={classes} onAnimationEnd={onAnimationEnd}>
        <div>
          <span></span>
          <p role="alert" aria-live="assertive" aria-atomic="true">
            {content}
          </p>
        </div>
        <Button
          onClick={onClick}
          text={_buttonText}
          hideTooltip={hideTooltip}
          label={buttonLabel || buttonText}
          classes={`toast-button ${toastType} ${buttonType} ${buttonClasses}`}
        />
      </div>
      {props.children}
    </div>
  );
};

Toast.propTypes = {
  iconOnly: PropTypes.bool,
  content: PropTypes.string,
  onAutoHide: PropTypes.func,
  buttonText: PropTypes.string,
  buttonLabel: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  toastType: PropTypes.string.isRequired,
  buttonClasses: PropTypes.string,
};

export default Toast;
