import React from "react";
import View from "../../../../app/components/View";
import Left from "../../../containers/LeftScreen3";
import Right from "../../../containers/RightScreen3";
import "./style.scss";

const Screen2 = (props) => {
  return (
    <View
      key="screen3"
      classes="screen3"
      layout="leftright"
      isPopupActive={props.isPopupActive}
    >
      <Left />
      <Right />
    </View>
  );
};

export default Screen2;
