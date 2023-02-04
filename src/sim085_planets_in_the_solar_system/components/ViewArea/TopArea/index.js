import React, { useEffect, useRef } from "react";
import { inputFeildId } from "../../../actions";
import "./style.scss";
const TopArea = (props) => {
  const {
    inputData,
    inputFeildDisable,
    inputValue,
    inputId,
    inputFeildId,
    inputClicked,
    imageAltText,
    isPopupActive,
    showToastMessage,
    highlightedValue,
  } = props;

  let refs = useRef([React.createRef(), React.createRef()]);

  const inputChangeValue = (e) => {
    inputValue(e.target.value);
    inputId(e.target.id);
  };
  useEffect(() => {
    if (!inputFeildDisable) {
      setTimeout(() => {
        if (refs.current[0]) {
          refs.current[0].current.focus();
        }
      });
    }
  }, [inputFeildDisable]);

  return (
    <div className="top-area" aria-hidden={isPopupActive}>
      <img className="sr-only sr-image" alt={imageAltText} />

      {inputData.map((items, index) => {
        return (
          <div key={index}>
            <div
              className={`highlighted ${items.id} ${
                showToastMessage && highlightedValue == items.id
                  ? "highlight-show"
                  : ""
              }`}
            />
            <div className={`dotted-lines ${items.id}`} />
            <input
              ref={refs.current[index]}
              
              id={items.id}
              onChange={inputChangeValue}
              className={`input-tag ${items.id} ${
                inputClicked.includes(items.altText.toLowerCase()) ? "show" : ""
              }`}
              type="text"
              placeholder={items.text}
              readOnly={
                inputFeildDisable ||
                (inputFeildId && items.id != inputFeildId) ||
                inputClicked.includes(items.altText.toLowerCase())
              }
              tabIndex={
                isPopupActive ||
                inputFeildDisable ||
                (inputFeildId && items.id != inputFeildId) ||
                inputClicked.includes(items.altText.toLowerCase())
                  ? "-1"
                  : "0"
              }
            />
          </div>
        );
      })}
    </div>
  );
};
export default TopArea;
