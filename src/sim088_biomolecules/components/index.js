import React, { useEffect } from "react";
import { LiveAnnouncer, LiveMessage } from "react-aria-live";
import SFXManager from "../../app/components/SFXManager";
import ActivityContainer from "../containers/ActivityContainer";
import ScalableContainer from "../containers/ScalableContainer";
import LiveAnnouncerAssertive from "../containers/LiveAnnouncerAssertive";

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
      <SFXManager />
      <LiveAnnouncer>
        <LiveMessage message={ariaLiveText} aria-live="polite" />
      </LiveAnnouncer>
      <LiveAnnouncerAssertive />
    </>
  );
};
