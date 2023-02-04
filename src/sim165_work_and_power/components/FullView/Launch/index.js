import React from "react";
import Buttons from "../../../../app/components/Button";
import "./style.scss";

const Launch = ({ launchPageData, onLocationChange, isPopupActive }) => {
  const { heading, imgSrc, sections, pageContent } = launchPageData;
  return (
    <>
      <div className="launchContainer">
        <h2 className="heading">{heading}</h2>
        <div className="content-container" aria-hidden="true">
          <p className="content-force">{pageContent[0]}</p>
          <p className="content-dis">{pageContent[1]}</p>
        </div>
        <img src={imgSrc.src} alt={imgSrc.alt} className="pageImage" />
        <div className="button-section">
          {sections.map((element, index) => (
            <Buttons
              text={element}
              classes={`hotspot-btn label`}
              onClick={() => {
                onLocationChange(element.toLowerCase());
              }}
              ariaLable={element}
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
