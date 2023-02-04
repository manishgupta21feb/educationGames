import React from "react";
import View from "../../../../app/components/View";
import Left from "../../../containers/LeftScreen1";
import Right from "../../../containers/RightScreen1";
import "./style.scss";

const Screen1 = (props) => {
  return (
    <View
      key="screen1"
      classes="screen1"
      layout="leftright"
      isPopupActive={props.isPopupActive}
    >
      <Left />
      <Right />
    </View>
  );
};

export default Screen1;
