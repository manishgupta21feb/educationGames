import React  from "react";
import View from "../../../../app/components/View";
import Spectrum from "../../../containers/SpectrumContainer";
import "./style.scss";

export default (props) => {
  const { isPopupActive, buttonLabels } = props;

  return (
    <View ariahidden={isPopupActive || null}>
      <Spectrum></Spectrum>
    </View>
  );
};
