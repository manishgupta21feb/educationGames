import React, { useState, useRef } from "react";
import CheckBox from "../Checkbox";
import "./style.scss";

const Card = (props) => {
  const { cardData, CardName, index, cardsHandler, isPopupActive } = props;
  const [showPanel, setShowPanel] = useState(false);
  const btnRef = useRef(null);

  const addRowData = () => {
    let _finalOutput = cardData.map((element, index) => {
      return (
        <li className="rowSection" key={`rowSection${index}`}>
          <div
            className="sr-only"
            aria-hidden="true"
            id={`${element.checkData.id}-label`}
          >
            {`${CardName.btnName} ${element.checkData.text}`}
          </div>
          {element.className ? (
            <div className="boxWrapper">
              <div className={element.className}></div>
            </div>
          ) : (
            <div className="imageContainer">
              <img src={element.imageSrc} alt="" />
            </div>
          )}
          <CheckBox
            {...element.checkData}
            onChange={() => {}}
            key={`checkbox-${element.checkData.id}`}
            isPopupActive={element.checkData.disabled}
            checked={element.checkData.disabled}
            disabled={true}
            label={`${element.checkData.text}`}
          />
        </li>
      );
    });
    return _finalOutput;
  };
  return (
    <div className="cardPanel">
      <div className="flip-card">
        <div
          className="flip-card-inner"
          style={showPanel ? { transform: "rotateY(180deg)" } : {}}
        >
          <div className="flip-card-front">
            <button
              ref={btnRef}
              className="btn clickContainer"
              title={CardName.btnName}
              aria-label={CardName.btnName}
              aria-hidden={isPopupActive || showPanel}
              disabled={isPopupActive || showPanel}
              tabIndex={isPopupActive ? "-1" : null}
              onClick={() => {
                setShowPanel(true);
                cardsHandler(index);
                EventManager.broadcast("SECONDARY_CLICK");
              }}
            ></button>
            <div className="cardBoxUpper" aria-hidden="true">
              <p className="cardHeading">{CardName.btnName}</p>
            </div>
          </div>

          <div
            className="flip-card-back"
            aria-hidden={showPanel ? "false" : "true"}
          >
            <h3 className="reveal_paragraph">{CardName.btnName}</h3>
            <ul className="cardReveal">{addRowData()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
