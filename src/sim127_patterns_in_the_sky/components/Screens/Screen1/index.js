import React from "react";
import View from "../../../../app/components/View";
import TopView from "../../../containers/Screen1TopView";
import BottomView from "../../../containers/Screen1BottomView";
import "./style.scss";

const Screen1 = (props) => {
  return (
    <div className="screen1">
      <View layout="topbottom">
        <TopView />
        <BottomView />
      </View>
    </div>
  );
};

export default Screen1;
