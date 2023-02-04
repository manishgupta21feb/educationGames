import React, { useEffect } from "react";
import { LiveAnnouncer, LiveMessage } from "react-aria-live";
import ActivityContainer from "../containers/ActivityContainer";
import ScalableContainer from "../containers/ScalableContainer";
import SoundManager from "../../app/components/SFXManager";

export default (props) => {
  const { ariaLiveText } = props;

  useEffect(() => {
    TincanManager.recordElapsedTime(TincanManager.data, true);
  }, []);

  return (
    <>
      <ScalableContainer>
        <ActivityContainer />
      </ScalableContainer>
      <SoundManager />
      <LiveAnnouncer>
        <LiveMessage message={ariaLiveText} aria-live="polite" />
      </LiveAnnouncer>
    </>
  );
};
