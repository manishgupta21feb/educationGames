import React from "react";
import Launch from "../../containers/LaunchContainer";
import SoilContainer from "../../containers/SoilContainer";
import TopSoilContainer from "../../containers/TopSoilContainer.js";
import DndTableContainer from "../../containers/DndTableContainer.js";
import "./style.scss";

const FullView = (props) => {
  const { currentSection = "launch" } = props;

  const componentRenderer = () => {
    switch (currentSection) {
      case "soilExpend":
        return <SoilContainer />;
      case "soilChoice":
        return <TopSoilContainer />;
      case "dnd":
        return <DndTableContainer />;
      default:
        return <Launch />;
    }
  };
  return (
    <>
      <div className="full-view">{componentRenderer()}</div>
    </>
  );
};

export default FullView;
