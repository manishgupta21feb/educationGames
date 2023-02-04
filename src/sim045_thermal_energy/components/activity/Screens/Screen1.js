import React from "react";
import View from "../../../../app/components/View";
import TopAreaComponent from "../../../containers/TopAreaContainer";
import BottomAreaComponent from "../../../containers/BottomAreaComponent";
import "./style.scss";

const Screen1 = (props) => {
  const { isPopupActive, showIntroScreen } = props;
  return (
    <div className={`screen1 ${showIntroScreen == "1" ? "active" : ""}`}>
      {showIntroScreen == 1 ? (
        <View layout="topbottom" ariahidden={isPopupActive}>
          <TopAreaComponent />
          <BottomAreaComponent />
        </View>
      ) : null}
    </div>
  );
};

export default Screen1;
