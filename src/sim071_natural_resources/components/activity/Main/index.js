import React from "react";
import Left from "../../../containers/Left";
import Right from "../../../containers/Right";
import View from "../../../../app/components/View";

const Main = (props) => {
  const { isPopupActive } = props;
  return (
    <View ariahidden={isPopupActive || null} layout="leftright">
      <Left />
      <Right />
    </View>
  );
};

export default Main;
