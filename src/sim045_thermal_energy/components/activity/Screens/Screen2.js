import React from "react";
import View from "../../../../app/components/View";
import BottomAreaComponents from "../../../containers/BottomAreaComponents";
import VideoAreaComponent from "../../../containers/VideoAreaComponent";
import "./style.scss";

const Screen2 = (props) => {
  const { isPopupActive, showIntroScreen } = props;

  return (
    <div className={`screen2 ${showIntroScreen == "2" ? "active" : ""}`}>
      {showIntroScreen == 2 ? (
        <View layout="topbottom" ariahidden={isPopupActive}>
          <VideoAreaComponent />
          <BottomAreaComponents />
        </View>
      ) : null}
    </div>
  );
};

export default Screen2;
