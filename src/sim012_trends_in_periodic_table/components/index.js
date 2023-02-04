import React, { useEffect } from "react";
import ActivityContainer from "../containers/ActivityContainer";
import ScalableContainer from "../containers/ScalableContainer";
import SFXManager from "../../app/components/SFXManager";
import { LiveAnnouncer } from "react-aria-live";
import LiveMessageContainer from "../containers/LiveMessageContainer";
import LiveTextAssertiveContainer from "../containers/LiveTextAssertiveContainer";
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
      <LiveTextAssertiveContainer />
      <LiveAnnouncer>
        <LiveMessageContainer />
      </LiveAnnouncer>
    </>
  );
};
