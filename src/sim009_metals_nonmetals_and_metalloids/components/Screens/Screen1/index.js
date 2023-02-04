import React from "react";
import View from "../../../../app/components/View";
import RightArea from "../../../containers/RightContainer";
import LeftArea from "../../../containers/LeftContainer";
import "./style.scss";

export default ({ isPopupActive }) => {
  return (
    <div className="screen1-container">
      <View layout="leftright" ariahidden={isPopupActive}>
        <LeftArea />
        <div className="right-area">
          <RightArea />
        </div>
      </View>
    </div>
  );
};
