import React, { useState, useEffect } from "react";
import { isIOS } from "react-device-detect";
import PropTypes from "prop-types";

const DragBox = (props) => {
  const { element, accessibleButtonOption, itemDroppedAt, isPopupActive } =
    props;

  const [buttonLabel, setButtonLabel] = useState("");

  useEffect(() => {
    if (itemDroppedAt && itemDroppedAt.length) {
      const drop = [];
      const notDropped = [];
      for (let obj of itemDroppedAt) {
        const check = element.accept.includes(obj);
        if (check) {
          drop.push(obj);
        } else {
          notDropped.push(obj);
        }
      }
      let label = "";
      if (drop.length) {
        label += "correctly dropped at";
      }
      for (let obj of drop) {
        label += ` ${obj}, `;
      }
      if (notDropped.length) {
        if (drop.length) {
          label += " and ";
        }
        label += "not matched with";
      }
      for (let obj of notDropped) {
        label += ` ${obj}, `;
      }
      setButtonLabel(label);
    }
  }, [itemDroppedAt]);

  return (
    <div className="drag-box">
      <div className="geometry">
        <button
          disabled={
            isPopupActive || (itemDroppedAt && itemDroppedAt.length == 4)
          }
          data-value={element.name}
          key={`draggable-button${element.name}${
            itemDroppedAt ? itemDroppedAt.length : 0
          }`}
          onClick={accessibleButtonOption}
          aria-label={`${element.name} draggable ${buttonLabel}`}
          className={`option-drag accessible-button`}
          data-target={element.accept ? element.accept : element.name}
        >
          {element.htmlText ? (
            <span
              style={{ pointerEvents: "none" }}
              dangerouslySetInnerHTML={{ __html: element.htmlText }}
            ></span>
          ) : (
            <span style={{ pointerEvents: "none" }}></span>
          )}
        </button>
        <div
          tabIndex="-1"
          aria-hidden={true}
          data-value={element.name}
          className={`option not-accessible-button ${element.id}`}
          data-target={element.accept ? element.accept : element.name}
          onClick={
            isIOS
              ? (e) => {
                  accessibleButtonOption(e);
                }
              : null
          }
        >
          {element.htmlText ? (
            <span
              style={{ pointerEvents: "none" }}
              dangerouslySetInnerHTML={{ __html: element.htmlText }}
            ></span>
          ) : (
            <span style={{ pointerEvents: "none" }}></span>
          )}
        </div>
        <div
          className="shapes"
          key={new Date().getTime()}
          style={{ pointerEvents: "none" }}
        >
          {itemDroppedAt &&
            itemDroppedAt.map((d) => {
              return (
                <div
                  key={`${element.name}-${d}`}
                  className={`${d} ${
                    element.accept.includes(d) ? "active" : ""
                  }`.trim()}
                ></div>
              );
            })}
        </div>
      </div>
      <div aria-hidden className="label" style={{ pointerEvents: "none" }}>
        {element.name}
      </div>
    </div>
  );
};

DragBox.propTypes = {
  index: PropTypes.number.isRequired,
  element: PropTypes.object.isRequired,
  // onKeyUpHandle: PropTypes.func.isRequired,
  accessibleButtonOption: PropTypes.func.isRequired,
  elementDescriptionAltTex: PropTypes.object,
};

export default DragBox;
