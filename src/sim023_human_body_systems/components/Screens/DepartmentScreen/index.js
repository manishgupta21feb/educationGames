import React, { useEffect, useState } from "react";
import View from "../../../../app/components/View";
import Departments from "../../Departments";
import Right from "../../../containers/RightContainer";
import Video from "../../common/Video";
import "./style.scss";

export default (props) => {
  const { isPopupActive, departmentData, focusToReset, playStateToggled } =
    props;

  const [selectedHotspot, setSelectedHotspot] = useState(null);
  const [selectedHotspotNumber, setSelectedHotspotNumber] = useState([]);

  useEffect(() => {
    if (!Object.keys(departmentData).length) {
      setSelectedHotspotNumber([]);
    }
  }, [departmentData]);

  const onClick = (value) => {
    EventManager.broadcast("SECONDARY_CLICK");
    const selectH = departmentData.hotspots.filter((h) => h.id === value);
    if (selectH.length > 0) {
      focusToReset();
      setSelectedHotspot(selectH[0]);
      setSelectedHotspotNumber([...new Set([...selectedHotspotNumber, value])]);
    }
  };

  const onContinueClick = () => {
    EventManager.broadcast("SECONDARY_CLICK");
    focusToReset();
    setSelectedHotspot(null);
  };

  return (
    <div className="screen0-container">
      <View layout="leftright" ariahidden={isPopupActive || null}>
        {selectedHotspot && selectedHotspot.visualType === "video" ? (
          <Video
            playStateToggled={playStateToggled}
            data={selectedHotspot}
          ></Video>
        ) : (
          <Departments
            onClick={onClick}
            data={departmentData}
            selectedHotspot={selectedHotspot}
            isPopupActive={isPopupActive}
          />
        )}
        <Right
          onContinueClick={onContinueClick}
          selectedHotspot={selectedHotspot}
          disabledBackToLobby={
            !departmentData.reVisited &&
            selectedHotspotNumber.length < departmentData.hotspots.length
          }
        />
      </View>
    </div>
  );
};
