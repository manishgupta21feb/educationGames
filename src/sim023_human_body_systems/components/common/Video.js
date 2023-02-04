import React, { useEffect } from "react";
import VideoContainer from "../../containers/VideoContainer";

export default (props) => {
  const { data, playStateToggled } = props;

  useEffect(() => {
    if (data.textLabel) {
      playStateToggled(data.textLabel);
    }
  }, []);

  const toggglePlay = () => {
    if (data.textLabel) {
      playStateToggled(data.textLabel);
    }
  };
  
  return (
    <VideoContainer
      togglePlayState={"play"}
      question={data}
      playStateToggled={toggglePlay}
    ></VideoContainer>
  );
};
