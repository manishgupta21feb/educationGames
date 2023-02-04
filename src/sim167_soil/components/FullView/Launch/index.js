import React from "react";
import Buttons from "../../../../app/components/Button";

import "./style.scss";

const Launch = (props) => {
  const { launchPageData, onLocationChange, isPopupActive, sections } = props;
  const { heading, imgSrc, alt } = launchPageData;
  return (
    <>
      <div className="launchContainer">
        <img src={imgSrc} alt={alt} className="pageImage" />
        <h2 className="heading">{heading}</h2>
        <div className="button-section">
          {sections.map((element, index) => (
            <Buttons
              text={element.name}
              classes={`hotspot-btn label `}
              onClick={() => {
                onLocationChange(element.loc, index);
              }}
              ariaLable={element.name}
              ariaHidden={isPopupActive}
              hideTooltip={false}
              isPopUpOpen={isPopupActive}
              disabled={isPopupActive}
              key={`locationBtn_${index}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Launch;
