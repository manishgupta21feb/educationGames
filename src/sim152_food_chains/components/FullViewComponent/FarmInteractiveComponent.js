import React, { useState, useEffect, useRef } from "react";
import Button from "../../../app/components/Button";
import data from "../../data";
import { isIOS, isAndroid } from "react-device-detect";

import "./style.scss";
import ContinueButtonContainer from "../../containers/ContinueButtonContainer";

const FarmInteractiveComponent = (props) => {
  const { isPopupActive, addVisitedButtons, visited, setButtonID, buttonId } =
    props;
  const buttonRef = useRef(null);
  const closeButtonRef = useRef(null);

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      const focusElement = closeButtonRef.current.querySelector("button");
      if (focusElement) {
        focusElement.focus();
      }
    }
  }, [showPopup]);

  useEffect(() => {
    if (visited.length) {
      const buttons = buttonRef.current.querySelectorAll("button");
      for (let button of buttons) {
        if (button.getAttribute("disabled") == null) {
          button.focus();
          break;
        }
      }
    }
  }, [visited]);

  const onClickBtn = (id) => {
    setButtonID(id);
    setShowPopup(true);
    EventManager.broadcast("SECONDARY_CLICK");
  };

  const closeDialog = (e, id) => {
    setShowPopup(false);
    addVisitedButtons(id);
    EventManager.broadcast("SECONDARY_CLICK");
    const focusElement = closeButtonRef.current.querySelector("button");
    if (focusElement) {
      focusElement.focus();
    }
    setButtonID("");
  };

  const onFocus = (id) => {
    setShowPopup(false);
    if (buttonId != "") {
      addVisitedButtons(buttonId);
      setButtonID("");
    }
  };

  const poupData = buttonId
    ? data.foodChainData.filter((f) => f.id == buttonId)[0]
    : {};
  return (
    <>
      <div className="farm-view" ref={buttonRef}>
        {data.foodChainData.map((item, i) => {
          const disableBtn = visited.indexOf(item.id) > -1;
          return (
            <div className="buttons-container" key={`${item.id}-${item.srNo}`}>
              <div key={`${item.srNo}`}>
                <div className={`pointer${item.srNo} pointer`}></div>
                <Button
                  id={`${item.id}-${item.srNo}`}
                  key={item.srNo}
                  text={item.label}
                  label={item.label}
                  disabled={disableBtn || item.id == buttonId}
                  isPopupActive={isPopupActive}
                  onClick={() => onClickBtn(item.id)}
                  classes={`hotspot-btn label buttons ${item.id} ${
                    item.id == buttonId ? "active" : ""
                  } ${disableBtn ? "visited" : ""}
                }`}
                  onFocus={onFocus}
                ></Button>
              </div>
              {showPopup && item.id == buttonId ? (
                <>
                  <div
                    role="alertdialog"
                    ref={closeButtonRef}
                    key={`${item.id}${item.srNo}`}
                    className={`info-box info-${item.id}`}
                    aria-labelledby={`${item.id}`}
                    // aria-hidden={isDraggableSelected}
                  >
                    <div className="content">
                      <p id={item.id}>{item.description}</p>
                      <div key={`${item.id}`}>
                        <Button
                          text={data.buttonLabels.close}
                          key={item.id}
                          id={`${item.srNo}${item.id}`}
                          classes="hotspot-btn close"
                          isPopUpOpen={isPopupActive}
                          onClick={(e) => closeDialog(e, item.id)}
                          labelledby={isAndroid ? `${item.id}` : null}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`connecting-lines-outside connecting-lines-outside-${buttonId}`}
                    key={`${poupData.srNo}`}
                  >
                    <div className="connecting-lines-inside"></div>
                  </div>
                  <span className={`dot dot-${buttonId}`}></span>
                </>
              ) : null}
            </div>
          );
        })}
      </div>
      <ContinueButtonContainer />
    </>
  );
};

export default FarmInteractiveComponent;
