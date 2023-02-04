import React from "react";
import View from "../../../app/components/View";
import RightContainer from "../../containers/RightContainer";
import LeftContainer from "../../containers/LeftContainer";

export default (props) => {
  const { isPopupActive } = props;

  return (
    <View ariahidden={isPopupActive || null} layout="leftright">
      <LeftContainer></LeftContainer>
      <RightContainer></RightContainer>
    </View>
  );
};
