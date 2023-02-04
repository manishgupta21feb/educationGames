import React from "react";
import View from "../../../../app/components/View";
import LaunchContainer from "../../../containers/LaunchContainer";

export default (props) => {
  const { changeScreen, isPopupActive } = props;

  return (
    <div className="screen2-container">
      <View
        ariahidden={isPopupActive || null}
        tabindex={isPopupActive ? "-1" : null}
      >
        <LaunchContainer changeScreen={changeScreen} />
      </View>
    </div>
  );
};
