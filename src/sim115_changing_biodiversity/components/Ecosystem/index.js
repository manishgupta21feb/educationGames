import React from "react";
import "./ecosystem.scss";
import Button from "../../../app/components/Button";

const Ecosystem = (props) => {
  const {
    ecosystems,
    isPopupActive,
    onEcosystemBtn,
    visitedHotspots,
    selectedHotspot,
  } = props;

  const ecosystem = ecosystems.type?.map((item) => {
    return (
      <Button
        key={item.id}
        id={item.id}
        text={item.name}
        isPopupActive={isPopupActive}
        disabled={
          isPopupActive ||
          !!selectedHotspot ||
          visitedHotspots.indexOf(item.serNo) >= 0
        }
        classes={`primary-toggle-button ${
          visitedHotspots.indexOf(item.serNo) >= 0 ? "visited" : ""
        }`}
        onClick={(e) => onEcosystemBtn(item)}
      />
    );
  });
  return (
    <div className="main-home">
      <h2 className="paragraph">{ecosystems.title}</h2>
      {ecosystem}
    </div>
  );
};

export default Ecosystem;
