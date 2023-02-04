import React from "react";
import View from "../../../../app/components/View";
import OvercomingFrictionContainer from "../../../containers/OvercomingFrictionContainer";
import "./style.scss";

export default (props) => {
  const { isPopupActive, onChangeScreen } = props;

  return (
    <div className="screen1-container">
      <View ariahidden={isPopupActive || null}>
        <OvercomingFrictionContainer
          onChangeScreen={onChangeScreen}
        ></OvercomingFrictionContainer>
      </View>
    </div>
  );
};
