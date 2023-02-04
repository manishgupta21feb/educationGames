import React, { useEffect, useState } from "react";
import "./style.scss";
import Video from "../../../app/components/Video";
import Screen1 from "../../containers/Screen1Container";
import Screen3 from "../../containers/Screen3Container";
import Screen9 from "../../containers/Screen9Container";
import Screen11 from "../../containers/Screen11Container";
import Screen5 from "../../containers/Screen5Container";

const TopArea = (props) => {
  const {
    screenNo,
    screenData,
    currentPopup,
    buttonLabels,
    videoLiveTxt,
    onVideoEnd,
  } = props;

  const [isVideoEnd, setIsVideoEnd] = useState(false);
 
  const onVideoEndedHandler = () => {
    onVideoEnd();
  
  };
  const playStateToggledHandler = (evt) => {
    setIsVideoEnd(false);
    if (evt) {
      setTimeout(() => {
        setIsVideoEnd(true);
      }, 5000);
      videoLiveTxt(screenData.liveTxt);
    }
  };

  if (screenNo == 1) {
    return <Screen1 />;
  } else if (
    screenNo == 3 ||
    screenNo == 7 ||
    screenNo == 12 ||
    screenNo == 10
  ) {
    return <Screen3 />;
  } else if (screenNo == 11) {
    return <Screen11 />;
  } else if (screenNo == 5) {
    return <Screen5 />;
  } else if (screenNo == 9) {
    return <Screen9 />;
  } else if (screenNo == 14 || screenNo == 15) {
    return (
      <div className={`screen${screenNo}-top`}>
        <Video
          buttonLabels={buttonLabels}
          question={screenData}
          currentPopup={currentPopup}
          onVideoEnded={(e) => onVideoEndedHandler(e)}
          playStateToggled={(playState) => playStateToggledHandler(playState)}
        />

        {isVideoEnd
          ? screenData.compoundData[0].label.map((val, index) => {
              return (
                <p key={index} className={`bond_lbl ${val.classes}`}>
                  {val.name}
                </p>
              );
            })
          : ""}
      </div>
    );
  }
};

export default TopArea;
