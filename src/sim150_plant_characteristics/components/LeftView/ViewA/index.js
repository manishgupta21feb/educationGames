import React, { useEffect } from "react";
import Button from "../../../../app/components/Button";
import Select from "../../../../app/components/Select";

const ViewA = ({
  baseImage,
  onTabLunch,
  hotSpotUpdate,
  hotSpots,
  isPopupActive,
  selectOptions,
  currentLevel,
  dropSelection,
  onSelectionUpdate,
  selectPositionCl,
  disableRest,
  heading,
  imageAlt,
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

      for (let element in _hotSpotData) {
        if (_hotSpotData[element].current) {
          _hotSpotData[element] = { ..._hotSpotData[element], current: false };
        }
      }

      _hotSpotData[ref] = {
        ..._hotSpotData[ref],
        current: true,
      };
      hotSpotUpdate(_hotSpotData);
    };

    let renderObject = _hotSpotData.map((value, index) => {
      return (
        <div className="planet_focus" key={`launch-screen-upper${index}`}>
          <div className="planet_focus__btn">
            <Button
              text={value.content}
              classes={`custom-btn btn-chip label  ${
                value.current && !value.visited ? "selected" : ""
              } ${!disableRest && value.current ? "removePointer" : ""}`}
              onClick={() => {
                if (!disableRest && value.current) return;
                onTabLunch(value.location);
                updateData(value.location);
              }}
              ariaLable={value.altText}
              ariaHidden={isPopupActive}
              hideTooltip={true}
              isPopUpOpen={isPopupActive}
              disabled={value.visited || (!disableRest && !value.current)} //value.visited}
              key={`locationBtn_${index}`}
              ariaPressed={value.current && !value.visited}
            />
          </div>
          <div className="tail"></div>
        </div>
      );
    });
    return renderObject;
  };
  return (
    <div className="launchScrUpSect viewAPanel">
      <img src={baseImage} alt={imageAlt} />
      {currentLevel == 0 ? (
        <>{hotSpotAdder()}</>
      ) : (
        <div className={`selectData ${selectPositionCl}`}>
          <Select
            isPopupActive={isPopupActive}
            key={`select1`}
            heading={heading}
            options={selectOptions}
            value={dropSelection}
            disabled={!disableRest}
            onChange={(e) => onSelectionUpdate(e)}
            onClick={() => {}}
            classes={`horizontal`}
          />
          <div className="tail"></div>
        </div>
      )}
    </div>
  );
};

export default ViewA;
