import React, { useEffect } from "react";
import { LiveAnnouncer } from "react-aria-live";

import EventManager from "../../app/events/manager";
import SFXManager from "../../app/components/SFXManager";
import ActivityContainer from "../containers/ActivityContainer";
import ScalableContainer from "../containers/ScalableContainer";
import LiveMessageContainer from "../containers/LiveMessageContainer";

export default (props) => {
  const { sounds } = props;

  useEffect(() => {
    TincanManager.recordElapsedTime(TincanManager.data, true);
    // EventManager.init("PLAY_AUDIO_NARRATION", (data) => {
    //   EventManager.broadcast("STOP_ALL_AND_PLAY", { ...data });
    // });
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
      </ScalableContainer>
      <SFXManager sfxArray={sounds} />
      <LiveAnnouncer>
        <LiveMessageContainer />
      </LiveAnnouncer>
    </>
  );
};
