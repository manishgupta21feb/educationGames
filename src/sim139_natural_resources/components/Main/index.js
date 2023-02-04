import React from "react";
import Left from "../../containers/Left";
import Right from "../../containers/Right";
import View from "../../../app/components/View";
import "./style.scss";

const Main = (props) => {
  const { isPopupActive } = props;
  return (
    <View layout="leftright" ariahidden={isPopupActive}>
      <Left />
      <Right />
    </View>
  );
};

export default Main;
