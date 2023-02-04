import React, { useEffect, useRef, useState } from "react";

import VideoOnly from "./VideoOnly";
import TopArea from "../../../containers/TopArea";
import "./style.scss";
import ContinueButton from "../../../containers/ContinueButton";

const index = (props) => {
  const {
    selectedVehicleData,
    data,
    currentPopup,
    setContinueState,
    isVideoPlay,
    videoTime,
  } = props;

  return (
    <div>
      <TopArea />
      <VideoOnly selectedVehicleData={selectedVehicleData} data={data} />
      <ContinueButton />
    </div>
  );
};

export default index;
