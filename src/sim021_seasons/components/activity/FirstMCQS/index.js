import React from "react";
import View from "../../../../app/components/View";
import LeftAreaContainer from "../../../containers/LeftAreaContainer";
import RightAreaContainer from "../../../containers/RightAreaContainer";

const FirstMCQS = (props) => {
  const { isPopupActive } = props;
  return (
    <View layout="leftright" ariahidden={isPopupActive}>
      <LeftAreaContainer />
      <RightAreaContainer />
    </View>
  );
};

export default FirstMCQS;
