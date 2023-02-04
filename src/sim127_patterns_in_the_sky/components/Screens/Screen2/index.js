import React from "react";
import View from "../../../../app/components/View";
import TopView from "../../../containers/Screen2TopView";
import BottomView from "../../../containers/Screen2BottomView";
import "./style.scss";

const Screen1 = (props) => {
  return (
    <div className="screen2">
      <View layout="topbottom">
        <TopView />
        <BottomView />
      </View>
    </div>
  );
};

export default Screen1;
