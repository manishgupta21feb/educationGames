import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { isIOS } from "react-device-detect";
import "./style.scss";

const DialogBox = (props) => {
  const ref = useRef(null);
  const {
    id,
    header,
    onClick,
    onClick2,
    dialogType,
    hideTooltip,
    resetDialog,
    buttonClasses,
    buttonClasses2,
    popupAutoFocus,
    resetButtonText,
    resetButtonLabel,
    buttonContinueText,
    buttonContinueLabel,
  } = props;

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

  const onAnimationEnd = (e) => {
    if (e && e.animationName && e.animationName == "slide-down") {
      ref.current.classList.add("bg-with-opacity");
      if (ref && ref.current && !popupAutoFocus) {
        setTimeout(() => {
          const buttons = ref.current.querySelectorAll("button");
          if (buttons && buttons.length) {
            buttons[0].focus();
          }
        }, 50);
      }
    }
  };

  const _onClick = (e) => {
    onClick(e);
    ref.current.classList.remove("bg-with-opacity");
  };

  const _onClick2 = (e) => {
    onClick2(e);
    ref.current.classList.remove("bg-with-opacity");
  };

  return (
    <div ref={ref} className="dialogbox-container">
      <div
        role="alertdialog"
        aria-modal="true"
        onAnimationEnd={onAnimationEnd}
        className={`dialog-container ${dialogType}`}
        aria-labelledby={
          header ? `dialog-title-${id}` : `dialog-description-${id}`
        }
        aria-describedby={
          header && props.children ? `dialog-description-${id}` : null
        }
      >
        <div>
          <span></span>
        </div>
        <div>
          {header ? <h1 id={`dialog-title-${id}`}>{header}</h1> : null}
          {props.children ? (
            <div id={`dialog-description-${id}`}>{props.children}</div>
          ) : null}
          <div className="dialogbox-buttons">
            <Button
              onClick={_onClick}
              text={buttonContinueText}
              hideTooltip={hideTooltip}
              label={buttonContinueLabel}
              classes={`popup-button ${dialogType} ${buttonClasses} ${
                resetDialog ? "transparent-bg" : ""
              }`}
            />
            {resetDialog ? (
              <Button
                onClick={_onClick2}
                text={resetButtonText}
                label={resetButtonLabel}
                hideTooltip={hideTooltip}
                classes={`popup-button ${dialogType} ${buttonClasses2}`}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

DialogBox.propTypes = {
  header: PropTypes.string,
  onClick2: PropTypes.func,
  resetDialog: PropTypes.bool,
  buttonClasses: PropTypes.string,
  buttonClasses2: PropTypes.string,
  resetButtonText: PropTypes.string,
  resetButtonLabel: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  buttonContinueText: PropTypes.string,
  buttonContinueLabel: PropTypes.string,
  dialogType: PropTypes.string.isRequired,
};

export default DialogBox;
