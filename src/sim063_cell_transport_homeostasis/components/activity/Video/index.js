import React, { useEffect } from "react";
import Video from "../../../../app/components/Video";
import "./style.scss";

export default (props) => {
  let { onLoad, question } = props;

  const playStateToggledHandler = (playState) => {
    if (true) {
      onLoad(question);
    }
  };

  return (
    <Video
      {...props}
      playStateToggled={(playState) => playStateToggledHandler(playState)}
    />
  );
};
