import React, { useEffect, useState } from "react";
import "./style.scss";
import { getNumbers } from "../../helper.js";

export default (props) => {
  const {
    updateValue,
    _hValue,
    energyValue,
    getWrongAnswerValue,
    disableTextbox,
    disableTextbox2,
    placeHolderData,
    dropdownHeading,
    isPopupActive,
  } = props;

  const onChangeHandler = (evt, type) => {
    if (evt.target.value.length < 3) {
      updateValue({ type: type, data: getNumbers(evt.target.value) });
    }
  };

  return (
    <>
      <div className="inputTxtMain1">
        <div className="mt-txt1 txt1Label">
          <div className="sr-only sr-image">{dropdownHeading[3].ariaLabel}</div>
          <span className="txt1Label" aria-hidden={true}>
            {dropdownHeading[3].heading}
          </span>
        </div>

        <input
          className={`txt1 ${getWrongAnswerValue._h ? "incorrect_txt" : null} ${
            disableTextbox2 ? "txtDisabled" : null
          }`}
          type="text"
          id="txt1"
          value={_hValue || ""}
          name="field-name"
          placeholder={placeHolderData}
          onChange={(evt) => onChangeHandler(evt, "_h")}
          disabled={disableTextbox2 || isPopupActive}
          aria-label={dropdownHeading[3].ariaLabel + ";" + placeHolderData}
        />
      </div>

      <div className="inputTxtMain2">
        <div className="mt-txt2 txt2Label">
          <div className="sr-only sr-image">{dropdownHeading[4].ariaLabel}</div>
          <span className="txt2Label" aria-hidden={true}>
            {dropdownHeading[4].heading}
          </span>
        </div>
        <input
          className={`txt2 ${
            getWrongAnswerValue.energy ? "incorrect_txt" : null
          } ${disableTextbox ? "txtDisabled" : null}`}
          type="text"
          id="txt2"
          value={energyValue || ""}
          name="field-name"
          placeholder={placeHolderData}
          onChange={(evt) => onChangeHandler(evt, "energy")}
          disabled={disableTextbox || isPopupActive}
          aria-label={dropdownHeading[4].ariaLabel + ";" + placeHolderData}
        />
      </div>
    </>
  );
};
