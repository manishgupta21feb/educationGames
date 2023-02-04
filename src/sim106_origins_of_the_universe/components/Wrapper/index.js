import React from "react";
import View from "../../../app/components/View";
import "./wrapper.scss";

const Wrapper = (props) => {
  const { isPopupActive } = props;

  return <View ariahidden={isPopupActive} layout={props.layout}>{props.children}</View>;
};

export default Wrapper;
