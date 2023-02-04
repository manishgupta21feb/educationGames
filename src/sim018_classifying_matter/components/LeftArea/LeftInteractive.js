import React, { useState } from "react";
import "./style.scss";

const LeftInteractive = (props) => {
  const {
    selectedLabel,
    questions,
    onClick,
    selectedQuestion,
    selectedOrganisms,
    resetBtnState,
    startActivity,
    isPopupActive,
  } = props;
  return (
    <div className="left-interactive">
      <div className="sr-only"></div>
      {questions
        .filter((q) => q.id == selectedQuestion)
        .map((q) => {
          return (
            <div key={q.id}>
              {props.kitchenItems.map((a) => {
                return (
                  <button
                    type="button"
                    title={a.altText}
                    aria-hidden={isPopupActive}
                    tabIndex={isPopupActive ? "-1" : null}
                    // aria-label={a.altText + `${selectedOrganisms.indexOf(a.id) >= 0 ? " " + selectedLabel : ''}`}
                    aria-label={a.altText}
                    onClick={() =>
                      onClick(a.id, selectedOrganisms.indexOf(a.id) >= 0)
                    }
                    id={a.id}
                    key={a.id}
                    className={a.className}
                  >
                    <span
                      className={
                        selectedOrganisms.indexOf(a.id) == 0
                          ? "item-selected"
                          : ""
                      }
                    >
                      {a.id}
                    </span>
                  </button>
                );
              })}
            </div>
          );
        })}
    </div>
  );
};

export default LeftInteractive;
