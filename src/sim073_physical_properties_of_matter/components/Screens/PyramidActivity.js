import React, { useEffect, useRef, useState } from "react";
import View from "../../../app/components/View";
import LeftAreaContainer from "../../containers/LeftAreaContainer";
import RightAreaContainer from "../../containers/RightAreaContainer";
import "./style.scss";

export default (props) => {
  const { isPopupActive } = props;
  return (
    <div className="screen0-container">
      <View ariahidden={isPopupActive} layout="leftright">
        <LeftAreaContainer />
        <RightAreaContainer />
      </View>
    </div>
  );
};
