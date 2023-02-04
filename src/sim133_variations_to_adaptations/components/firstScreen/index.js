import React, { useEffect } from "react";
import Button from "../../../app/components/Button";
import "./style.scss";

const FirstScreen = ({
  onTabLunch,
  hotSpotUpdate,
  hotSpots,
  isPopupActive,
  mainScreenData,
  firstScreenImgAria,
}) => {
  const hotSpotAdder = () => {
    let _hotSpotData = Object.values(hotSpots);
    const updateData = (val) => {
      const _hotSpotData = { ...hotSpots };
      _hotSpotData[val] = {
        ..._hotSpotData[val],
        visited: true,
      };
      hotSpotUpdate(_hotSpotData);
    };

    let renderObject = _hotSpotData.map((value, index) => {
      return (
        <div
          className={`bird_focus bird_focus_${index}`}
          key={`launch-screen-upper${index}`}
        >
          <div className="bird_focus__btn">
            <Button
              text={value.content}
              classes={`hotspot-btn label ${value.visited ? "visited" : ""}`}
              onClick={() => {
                onTabLunch("locations", value.location);
                updateData(value.location);
              }}
              ariaLable={value.altText}
              ariaHidden={isPopupActive}
              hideTooltip={false}
              isPopUpOpen={isPopupActive}
              disabled={value.visited}
              key={`locationBtn_${index}`}
            />
          </div>
          <div className="tail"></div>
          <div className="tail-point"></div>
        </div>
      );
    });
    return renderObject;
  };

  return (
    <div className="firstScreen">
      <div className="firstScreenTop">
        <p dangerouslySetInnerHTML={{ __html: mainScreenData }}></p>
      </div>
      <div className="firstScreenBottom" key={"launchScreen"}>
        <img className="sr-only sr-image" aria-label={firstScreenImgAria} />
        {hotSpotAdder()}
      </div>
    </div>
  );
};

export default FirstScreen;
