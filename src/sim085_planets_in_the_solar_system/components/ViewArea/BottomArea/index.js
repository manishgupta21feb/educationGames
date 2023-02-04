import React from "react";
import Button from "../../../../app/components/Button";

import ButtonContinue from "../../../containers/ButtonContinue";
import "./style.scss";
const BottomArea = (props) => {
  const {
    headingData,
    clueCardType,
    planetName,
    clickedValue,
    clickButton,
    buttonList,
    isPopupActive,
    clueCardHeading,
    planetHeading,
  } = props;

  const clickedButton = (e) => {
    clickedValue(e.target.id);
  };

  return (
    <div aria-hidden={isPopupActive}>
      <h2 className="main-heading">{headingData}</h2>
      <div className="selected-hotspots-sections">
        <div className="selected-hotspots-section">
          <div className="heading-section">
            <h3>{clueCardHeading}</h3>
          </div>
          <div className="selected-hotspots">
            <p>{clueCardType}</p>
          </div>
        </div>
        <div className="selected-hotspots-section">
          <div className="heading-section">
            <h3>{planetHeading}</h3>
          </div>
          <div className="selected-hotspots">
            {planetName.map((items) => {
              return (
                <Button
                  key={items.id}
                  text={items.text}
                  id={items.id}
                  classes={`btn-chip ${
                    items.id == clickButton ? "selected" : ""
                  }`}
                  onClick={clickedButton}
                  disabled={buttonList.includes(items.id) || isPopupActive}
                  ariaPressed={
                    buttonList.includes(items.id) ||
                    clickButton.includes(items.id)
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
      <ButtonContinue />
    </div>
  );
};
export default BottomArea;
