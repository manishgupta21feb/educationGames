import React from "react";
import View from "../../../../app/components/View";
import Left from "../../../containers/LeftScreen2";
import Right from "../../../containers/RightScreen2";
import "./style.scss";

const Screen2 = (props) => {
  return (
    <View
      key="screen2"
      classes="screen2"
      layout="leftright"
      isPopupActive={props.isPopupActive}
    >
      <Left />
      <Right />
    </View>
  );
};

export default Screen2;
