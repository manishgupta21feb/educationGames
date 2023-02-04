import React from "react";
import Launch from "../../containers/LaunchContainer";
import Work from "../../containers/WorkContainer";
import Power from "../../containers/PowerContainer";

const FullView = ({ currentSection = "launch" }) => {
  const componentRenderer = () => {
    switch (currentSection) {
      case "work":
        return <Work />;
      case "power":
        return <Power />;
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
