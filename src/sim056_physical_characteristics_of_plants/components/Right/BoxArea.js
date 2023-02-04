import React, { useRef, useEffect } from "react";

const Draggables = (props) => {
  const {
    draggableItems,
    submitOption,
    toastMsg,
    selectedOptions,
    buttonVisible,
    getNextQuestion,
    currentPopup,
    isPopupActive,
  } = props;

  const clickHandler = (e) => {
    if (!getNextQuestion) {
      const { id } = e.target.dataset;
      submitOption(id);
    }
  };

  return (
    <div className="wrapper">
      {draggableItems.map((item, i) => {
        return (
          <div className="option-container" key={item.srNo}>
            <div className="draggables">
              <button
                data-id={item.id}
                disabled={
                  selectedOptions.find((e) => e == item.id) ||
                  getNextQuestion ||
                  isPopupActive
                    ? true
                    : false
                }
                id={`subBox` + item.srNo}
                title={item.label}
                onClick={(e) => clickHandler(e)}
                className={`box-button accessible-button  ${
                  selectedOptions.find((e) => e == item.id) || getNextQuestion
                    ? `box-button__disabled`
                    : ``
                }`}
                tabIndex={isPopupActive ? "-1" : null}
              >
                <span
                  aria-hidden
                  data-id={item.id}
                  className={`${item.path} ${
                    selectedOptions.find((e) => e == item.id) ||
                    getNextQuestion ||
                    currentPopup
                      ? item.path + "__disable"
                      : ""
                  }`}
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Draggables;
