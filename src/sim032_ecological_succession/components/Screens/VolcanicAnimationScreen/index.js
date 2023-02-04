import React from "react";
import View from "../../../../app/components/View";
import SuccessionAnimationContainer from "../../../containers/SuccessionAnimationContainer";

export default (props) => {
  const { isPopupActive } = props;
  return (
    <div className="screen0-container">
      <View
        ariahidden={isPopupActive || null}
        tabindex={isPopupActive ? "-1" : null}
      >
        <SuccessionAnimationContainer
        ></SuccessionAnimationContainer>
      </View>
    </div>
  );
};
