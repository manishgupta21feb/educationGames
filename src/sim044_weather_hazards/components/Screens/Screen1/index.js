import React, { useState, useEffect } from "react";
import View from "../../../../app/components/View";
import HotspotArea from "../../../containers/HotspotArea";
import RightSection from "../../../containers/RightSection";

export default (props) => {
  const {
    onClick,
    hotspots,
    isPopupActive,
    selectedHotspot,
    fossilsBGAltText,
    activityInstructions,
    visitedNodes,
  } = props;

  return (
    <div className="screen1">
      <View layout="leftright" ariahidden={isPopupActive}>
        <HotspotArea />
        <RightSection />
      </View>
    </div>
  );
};
