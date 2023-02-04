import React from "react";
import View from "../../../../app/components/View";
import VideoContainer from "../../../containers/VideoContainer";
import LeftAreaContainer from "../../../containers/LeftAreaContainer";
import RightAreaContainer from "../../../containers/RightAreaContainer";
import RightStaticContainer from "../../../containers/RightStaticContainer";

export default (props) => {
  const { isPopupActive, showVideo } = props;

  return (
    <div className="screen1-container">
      <View layout="leftright" ariahidden={isPopupActive}>
        {showVideo ? <VideoContainer /> : <LeftAreaContainer />}
        {showVideo ? <RightStaticContainer /> : <RightAreaContainer />}
      </View>
    </div>
  );
};
