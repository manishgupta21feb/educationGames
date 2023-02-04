import React from "react";
import View from "../../../../app/components/View";
import Waves from "../../../containers/WavesContainer";
import "./style.scss";

export default (props) => {
  const { isPopupActive, buttonLabels } = props;

  return (
    <View ariahidden={isPopupActive || null}>
      <Waves></Waves>
    </View>
  );
};
