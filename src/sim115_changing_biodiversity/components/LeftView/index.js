import React from "react";
import "./leftview.scss";
import Home from "../Home";
import EcosystemScreen from "../EcosystemScreen";

const LeftView = (props) => {
  const {
    names,
    screenType,
    ecosystemData,
    nextSection,
    hotspotData,
    hotspotClick,
    clickedButtonValue,
    disabledButton,
    correctOptions,
    isPopupActive,
    triangles,
    ecosystems,
  } = props;

  const viewFilter = () => {
    switch (screenType) {
      case "ecosystem1":
      case "ecosystem2":
      case "ecosystem3":
        return <EcosystemScreen ecosystemData={ecosystemData} />;
      default:
        return (
          <Home
            names={names}
            nextSection={nextSection}
            hotspotData={hotspotData}
            hotspotClick={hotspotClick}
            clickedButtonValue={clickedButtonValue}
            disabledButton={disabledButton}
            correctOptions={correctOptions}
            isPopupActive={isPopupActive}
            triangles={triangles}
            ecosystems={ecosystems}
          />
        );
    }
  };
  return <>{viewFilter()}</>;
};

export default LeftView;
