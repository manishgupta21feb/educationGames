import React, { useEffect } from "react";
import ActivityContainer from "../containers/ActivityContainer";
import ScalableContainer from "../containers/ScalableContainer";
import { LiveAnnouncer, LiveMessage } from "react-aria-live";
import SFXManager from "../../app/components/SFXManager";
import LiveAnnouncerAssertive from "../containers/LiveAnnouncerAssertive";

export default (props) => {
  const { ariaLiveText } = props;

  useEffect(() => {
    TincanManager.recordElapsedTime(TincanManager.data, true);
    if (
      TincanManager.data.isFirstTimePlayed &&
      TincanManager.data.time_spent > 0
    ) {
      TincanManager.data.isFirstTimePlayed = false;
      TincanManager.saveTincanData();
    }
  }, []);

  return (
    <>
      <ScalableContainer>
        <ActivityContainer />
        <SFXManager />
      </ScalableContainer>
      <LiveAnnouncer>
        <LiveMessage message={ariaLiveText} aria-live="polite" />
      </LiveAnnouncer>
      <LiveAnnouncerAssertive />
    </>
  );
};
