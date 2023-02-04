import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import "./style.scss";

const CompletionScreen = (props) => {
  const ref = useRef(null);
  const {
    id,
    type,
    heading,
    content,
    onClick,
    children,
    buttonText,
    buttonLabel,
    hideTooltip,
    buttonClasses,
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
  });

  const classes = `completion-screen ${type}`;
  return (
    <div className="completion-screen-container">
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        className={classes}
        aria-labelledby={`completion-screen-heading-${id} completion-screen-content-${id}`}
        // aria-describedby={`completion-screen-content-${id}`}
      >
        <div className="grass-left"></div>
        <div className="completion-screen-content">
          <div className="icon"></div>
          <p className="heading" id={`completion-screen-heading-${id}`}>
            {heading}
          </p>
          <p
            className="content"
            id={`completion-screen-content-${id}`}
            dangerouslySetInnerHTML={{ __html: content }}
          ></p>
          <Button
            onClick={onClick}
            text={buttonText}
            label={buttonLabel}
            hideTooltip={hideTooltip}
            classes={`completion-screen-button ${type} ${buttonClasses}`}
          />
        </div>
        <div className="leaves-left"></div>
        <div className="grass-leaves-right"></div>
      </div>
      {children}
    </div>
  );
};

CompletionScreen.propTypes = {
  content: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLabel: PropTypes.string,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
};

export default CompletionScreen;
