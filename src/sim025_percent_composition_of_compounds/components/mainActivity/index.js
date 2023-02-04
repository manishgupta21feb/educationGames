import React from "react";
import View from "../../../app/components/View";
import Left from "../../containers/LeftContainer";
import Right from "../../containers/RightContainer";
import "./style.scss";

const MainActivity = (props) => {
  const { isPopupActive } = props;
  return (
    <View layout="leftright" ariahidden={isPopupActive}>
      <Left />
      <Right />
    </View>
  );
};

export default MainActivity;
