import React from "react";
import View from "../../../../app/components/View";
import NetForceContainer from "../../../containers/NetForceContainer";
import "./style.scss";

export default (props) => {
  const { isPopupActive, onChangeScreen } = props;

  return (
    <div className="screen2-container">
      <View ariahidden={isPopupActive || null}>
        <NetForceContainer onChangeScreen={onChangeScreen}></NetForceContainer>
      </View>
    </div>
  );
};
