import React, { useEffect } from "react";
import { LiveAnnouncer } from "react-aria-live";
import LiveMessage from "../containers/LiveMessage";
import ActivityContainer from "../containers/ActivityContainer";
import ScalableContainer from "../containers/ScalableContainer";

import LiveAnnouncerAssertive from "../containers/LiveAnnouncerAssertive";
import SFXManager from "../../app/components/SFXManager";

export default (props) => {
  const { sounds } = props;
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
      </ScalableContainer>
      <SFXManager sfxArray={sounds} />

      <LiveAnnouncer>
        <LiveMessage />
      </LiveAnnouncer>
      <LiveAnnouncerAssertive />
    </>
  );
};
