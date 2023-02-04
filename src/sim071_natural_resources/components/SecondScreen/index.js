import React from "react";
import Left from "../../containers/LeftSecondScreen";
import Right from "../../containers/RightSecondScreen";
import View from "../../../app/components/View";

const SecondScreen = (props) => {
  const { isPopupActive } = props;

  return (
    <View ariahidden={isPopupActive || null} layout="leftright">
      <Left />
      <Right />
    </View>
  );
};

export default SecondScreen;
