import React, { useEffect } from "react";
import { LiveAnnouncer } from "react-aria-live";

import SFXManager from "../../app/components/SFXManager";
import ActivityContainer from "../containers/ActivityContainer";
import ScalableContainer from "../containers/ScalableContainer";
import LiveMessageContainer from "../containers/LiveMessageContainer";
import LiveAnnouncerAssertive from "../containers/LiveAnnouncerAssertive";


export default (props) => {
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
      <SFXManager />
      <LiveAnnouncer>
        <LiveMessageContainer />
        <LiveAnnouncerAssertive/>
      </LiveAnnouncer>
    </>
  );
};
