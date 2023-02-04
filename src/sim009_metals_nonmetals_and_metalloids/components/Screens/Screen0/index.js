import React from "react";
import View from "../../../../app/components/View";
import FeedbackView from "../../../containers/FeedbackContainer";
import FullView from "../../../containers/FullViewContainer";
import "./style.scss";

export default ({ isPopupActive, answer }) => {
  return (
    <div className="screen0-container">
      <View ariahidden={isPopupActive} tabindex={isPopupActive ? "-1" : null}>
        {answer ? <FeedbackView /> : <FullView />}
      </View>
    </div>
  );
};
