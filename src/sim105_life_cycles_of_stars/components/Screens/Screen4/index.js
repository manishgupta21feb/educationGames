import React from "react";
import View from "../../../../app/components/View";
import Left from "../../../containers/LeftScreen4";
import Right from "../../../containers/RightScreen4";
import "./style.scss";

const Screen2 = (props) => {
  return (
    <View
      key="screen4"
      classes="screen4"
      layout="leftright"
      isPopupActive={props.isPopupActive}
    >
      <Left />
      <Right />
    </View>
  );
};

export default Screen2;
