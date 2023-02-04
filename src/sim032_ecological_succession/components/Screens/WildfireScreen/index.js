import React from "react";
import View from "../../../../app/components/View";
import SuccessionStopsContainer from "../../../containers/SuccessionStopsContainer";

export default (props) => {
  const { isPopupActive } = props;

  return (
    <div className="screen1-container">
      <View
        ariahidden={isPopupActive || null}
        tabindex={isPopupActive ? "-1" : null}
      >
        <SuccessionStopsContainer
        ></SuccessionStopsContainer>
      </View>
    </div>
  );
};
