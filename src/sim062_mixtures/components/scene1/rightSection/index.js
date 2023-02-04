import React, { useEffect, useRef, useState } from "react";
import CompoundHolder from "../../compoundHolder";
import PropTypes from "prop-types";
import EventManager from "../../../../app/events/manager";

import "../stylesheets/_main.scss";

const RightSection = ({
  tabsData,
  onSectionDataUpdate,
  announceAriaLive,
  isPopupActive,
  resetBtnState,
  data,
}) => {
  const rightContainer = useRef(null);
  const selectionContainer = useRef(null);
  const [isObjectSelected, setIsObjectSelected] = useState(false);
  const [imgAlt, setImageAlt] = useState("");
  const [currentCompound, setCurrentCompound] = useState({});
  let {
    unitData,
    labBackgroundData: { ...labBackgroundData },
    accessibilityContent: { clearCompound },
    selectionContent,
  } = data;
  let [measureContent, setMeasureContent] = useState(10);
  let exceptionCompound = "beaker";

  useEffect(() => {
    if (resetBtnState) {
      setIsObjectSelected(false);
      setMeasureContent(10);
      setCurrentCompound({});
    }
  }, [resetBtnState]);

  const compoundButtons = () => {
    let compoundArr = Object.entries(tabsData);
    let renderObject = compoundArr.map((value, index) => {
      let boxData = value[1];
      return (
        index != 0 && (
          <CompoundHolder
            boxData={boxData}
            source={
              boxData.isSelected ? boxData.emptyContainerSrc : boxData.source
            }
            isObjectSelected={isObjectSelected}
            isPopupActive={isPopupActive}
            disabled={
              boxData.isMeasured || (!boxData.isSelected && isObjectSelected)
            }
            index={index}
            value={value[0]}
            callBack={compoundSelect}
            ariaLabel={`${boxData.content} ${
              boxData.isSelected ? selectionContent : ""
            }`}
            key={`section1Box_${index}${boxData.isSelected ? "sel" : "del"}`}
          />
        )
      );
    });
    return renderObject;
  };

  // Compound display where selected compound appears

  const compoundDisplay = () => {
    let compoundArr = Object.entries(tabsData);
    let renderObject = compoundArr.map((value, index) => {
      let boxData = value[1];
      return (
        <span
          className={`rightSection__compoundSelected__compoundDisplayHolder ${
            boxData.isSelected ? "" : "hide"
          }`}
          key={`comp1_${index}`}
          data-beaker={value[0]}
        >
          <img key={`img1_${index}`} src={boxData.source} alt="" />
        </span>
      );
    });
    return renderObject;
  };

  const compoundSelect = (ref) => {
    EventManager.broadcast("SECONDARY_CLICK");
    setIsObjectSelected(true);

    const tempData = { ...tabsData };
    tempData[ref] = { ...tempData[ref], isSelected: true };
    tempData[exceptionCompound] = {
      ...tempData[exceptionCompound],
      isSelected: false,
    };

    setCurrentCompound(tempData[ref]);
    setMeasureContent(tempData[ref].weight);
    onSectionDataUpdate(tempData);
    announceAriaLive(tempData[ref].liveText);
    setTimeout(() => {
      selectionContainer.current.focus();
    }, 200);
  };

  const removeCompound = (evt) => {
    EventManager.broadcast("SECONDARY_CLICK");
    setIsObjectSelected(false);
    removeSelected(currentCompound.name);
    setMeasureContent(10);
    setTimeout(() => {
      setTabsFocus();
    }, 200);

    announceAriaLive(tabsData[currentCompound.name].compoundRemovedLive);
  };

  const setTabsFocus = () => {
    const elementList = document.querySelectorAll(
      ".rightSection__tabSection .rightSection__tabSection__compoundHolder"
    );

    const filteredDragElement = Array.from(elementList).filter(
      (e) => !e.firstChild.disabled
    );

    if (filteredDragElement.length) {
      filteredDragElement[0].firstChild.focus();
    }
  };
  const removeSelected = (currentCompound) => {
    let tempData = { ...tabsData };
    for (let data in tempData) {
      if (data == currentCompound) {
        tempData[data] = { ...tempData[data], isMeasured: true };
      }
      if (data != exceptionCompound) {
        tempData[data] = { ...tempData[data], isSelected: false };
      }
    }
    tempData[exceptionCompound] = {
      ...tempData[exceptionCompound],
      isSelected: true,
    };
    onSectionDataUpdate(tempData);
  };

  return (
    <div className="rightSection">
      <img
        src={labBackgroundData.source}
        className="rightSection__labBackground"
        alt={
          isObjectSelected
            ? `${currentCompound.content} ${labBackgroundData.updatedAlt} ${currentCompound.weight} ${unitData}.`
            : `${labBackgroundData.alt}`
        }
      />
      <button
        className="rightSection__compoundSelected"
        onClick={() => {
          removeCompound();
        }}
        disabled={!isObjectSelected}
        ref={selectionContainer}
        aria-hidden={isPopupActive}
        aria-label={clearCompound}
        tabIndex={isPopupActive ? "-1" : null}
      >
        {compoundDisplay()}
      </button>
      <div className="rightSection__measureContent">{`${measureContent} ${unitData}`}</div>
      <div className="rightSection__tabSection" ref={rightContainer}>
        {compoundButtons()}
      </div>
    </div>
  );
};

RightSection.propTypes = {
  tabsData: PropTypes.object,
  onSectionDataUpdate: PropTypes.func,
  announceAriaLive: PropTypes.func,
  isPopupActive: PropTypes.bool,
};
RightSection.defaultProps = {
  tabsData: {},
  onSectionDataUpdate: () => {},
  announceAriaLive: () => {},
  isPopupActive: false,
};

export default RightSection;
