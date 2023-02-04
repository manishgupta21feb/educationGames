import React, { useEffect } from "react";
import { LiveAnnouncer, LiveMessage } from "react-aria-live";
import ActivityContainer from "../containers/ActivityContainer";
import ScalableContainer from "../containers/ScalableContainer";
import SFXManager from "../../app/components/SFXManager";
import LiveAnnouncerAssertive from "../containers/LiveAnnouncerAssertive";

export default (props) => {
  const { ariaLiveText, sounds } = props;

  useEffect(() => {
    TincanManager.recordElapsedTime(TincanManager.data, true);
    if (
      TincanManager.data.isFirstTimePlayed &&
      TincanManager.data.time_spent > 0
    ) {
      TincanManager.data.isFirstTimePlayed = false;
      TincanManager.saveTincanData();
    }
    EventManager.init("PLAY_AUDIO_NARRATION", (data) => {
      EventManager.broadcast("STOP_ALL_AND_PLAY", { ...data });
    });
  }, []);

  return (
    <>
      <ScalableContainer>
        <ActivityContainer />
      </ScalableContainer>
      <SFXManager sfxArray={sounds} />
      <LiveAnnouncer>
        <LiveMessage message={ariaLiveText} aria-live="polite" />
        <LiveAnnouncerAssertive />
      </LiveAnnouncer>
    </>
  );
};
