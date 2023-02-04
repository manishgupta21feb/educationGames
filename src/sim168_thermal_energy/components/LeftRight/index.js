import React from "react";
import Left from "../../containers/Left";
import Right from "../../containers/Right";
import View from "../../../app/components/View";
import "./style.scss";

const LeftRight = (props) => {
  return (
    <View layout="leftright">
      <Left />
      <Right />
    </View>
  );
};

export default LeftRight;
