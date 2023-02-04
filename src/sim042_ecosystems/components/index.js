import React, { useEffect } from "react";
import { LiveAnnouncer } from "react-aria-live";

import LiveMessage from "../containers/LiveMessage";
import ActivityContainer from "../containers/Activity";
import SFXManager from "../../app/components/SFXManager";
import ScalableContainer from "../containers/ScalableContainer";

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
        <LiveMessage />
      </LiveAnnouncer>
    </>
  );
};
