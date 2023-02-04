import React, { useEffect } from "react";
import Button from "../../../../app/components/Button";

const LaunchScreen = ({
  mainScreenData: { imageSrc, imageAlt },
  onTabLunch,
  hotSpotUpdate,
  hotSpots,
  isPopupActive,
}) => {
  const hotSpotAdder = () => {
    useEffect(() => {
      const elementList = document.querySelectorAll(".hotspot-btn");

      const filteredDragElement = Array.from(elementList).filter(
        (e) => !e.classList.contains("visited")
      );
      if (filteredDragElement.length) {
        filteredDragElement[0].focus();
      }
    }, []);

    let _hotSpotData = Object.values(hotSpots);
    const updateData = (ref) => {
      const _hotSpotData = { ...hotSpots };
      _hotSpotData[ref] = {
        ..._hotSpotData[ref],
        visited: true,
      };
      hotSpotUpdate(_hotSpotData);
    };

    let renderObject = _hotSpotData.map((value, index) => {
      return (
        <div className="planet_focus" key={`launch-screen-upper${index}`}>
          <div className="planet_focus__btn">
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
        </div>
      );
    });
    return renderObject;
  };

  return (
    <div className="launchScrUpSect bannerContainer" key={"launchScreen"}>
      <img src={imageSrc} alt={imageAlt} />
      {/* <div className="launchScrUpSect__hotSpotsHolder"></div> */}
      {hotSpotAdder()}
    </div>
  );
};

export default LaunchScreen;
