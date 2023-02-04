import React from "react";
import Button from "../../../../app/components/Button";
import "./main.scss";

const Soil = (props) => {
  const { Soils, isPopupActive, onTopSoilSection, continueLabel } = props;
  const { imgSrc, alt, content, instruction } = Soils;
  return (
    <>
      <div className="mainContainer">
        <img src={imgSrc} alt={alt} className="imgContainer" />
        <div className="headerContent">
          <h2
            className="formatting"
            dangerouslySetInnerHTML={{ __html: content }}
          ></h2>
          <p
            className="instructionContent formatting"
            dangerouslySetInnerHTML={{ __html: instruction }}
          ></p>
        </div>
        <Button
          text={continueLabel}
          classes={`btn toast-secondary-button positive right-arrow`}
          onClick={() => {
            onTopSoilSection();
          }}
          ariaLable={continueLabel}
          ariaHidden={isPopupActive}
          hideTooltip={false}
          isPopUpOpen={isPopupActive}
          disabled={isPopupActive}
          key={`locationBtn_${0}`}
        />
      </div>
    </>
  );
};

export default Soil;
