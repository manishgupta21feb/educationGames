import React from "react";
import Top from "../../containers/Top";
import Bottom from "../../containers/Bottom";
import View from "../../../app/components/View";
import "./style.scss";

const TopBottom = (props) => {
  return (
    <View layout="topbottom" ariahidden={props.isPopupActive}>
      <Top />
      <Bottom />
    </View>
  );
};

export default TopBottom;
