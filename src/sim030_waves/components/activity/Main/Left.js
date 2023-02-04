import React, { useEffect, useState } from "react";
import Checkbox from "../../../../app/components/Checkbox";
import VideoContainer from "../../../containers/VideoContainer";
import "./style.scss";

import Waves from "./waves";

const left = (props) => {
  const [checked, setChecked] = useState(false);
  const { selectedForce, videoPlayState } = props;

  return (
    <div className="left-area">
      <div className="left-area__top">
        <img aria-hidden className="sr-only video1" />
        <img aria-hidden className="sr-only video2" />
        <img aria-hidden className="sr-only video3" />
        <VideoContainer />
        <div
          aria-hidden={!!selectedForce}
          className={`main-bg ${selectedForce ? "hide" : ""}`.trim()}
        >
          <img className="sr-only sr-image" alt={"Image"} />
        </div>
      </div>
      <div className="left-area__bottom">
        <div className="left-area__bottom-wrapper">
          <div className="scale-top"></div>
          <Waves
            depth="deep"
            hideDuckTether
            frequency="high"
            playState={videoPlayState}
          />
          <div className="bottom-labels">
            <p>Side view of pool</p>
            <Checkbox
              id="cbShowLabel"
              text="Show Labels"
              checked={checked}
              onChange={() => setChecked((check) => !check)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default left;
