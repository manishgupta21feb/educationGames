import React, { useEffect, useRef } from "react";
import Button from "../../../app/components/Button";
import "./style.scss";
const DescriptionBox = (props) => {
  const ref = useRef(null);
  const {
    closeLabel,
    onClick,
    helpHintContent,
    response,
    buttonText,
    responseClick,
    isPopupActive,
    showResponse,
  } = props;
  const responseRef = useRef(null);

  useEffect(() => {
    if (showResponse) {
      setTimeout(() => {
        if (responseRef.current) {
          responseRef.current.focus();
        }
      });
    }
  }, [showResponse]);

  return (
    <div className="instruction-text-wrapper" aria-hidden={isPopupActive}>
      <div role="alertdialog" aria-labelledby="info-text">
        <div className="closeButton">
          <Button
            label={closeLabel}
            onClick={onClick}
            isPopupActive={isPopupActive}
            ariaHidden={isPopupActive}
            ref={responseRef}
            classes={`toast-button positive icon-only`}
          />
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: helpHintContent }}
          className="info-text"
          id="info-text"
        ></p>
        {response ? (
          <button
            className="button-css"
            aria-label={buttonText}
            title={buttonText}
            onClick={responseClick}
          >
            <span
              aria-hidden="true"
              dangerouslySetInnerHTML={{ __html: buttonText }}
            ></span>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default DescriptionBox;
