import React, { useEffect } from "react";
import { LiveAnnouncer } from "react-aria-live";

import Activity from "../containers/Activity";
import LiveMessage from "../containers//LiveMessage";
import SFXManager from "../../app/components/SFXManager";
import ScalableContainer from "../containers/ScalableContainer";
import LiveText from "../containers/LiveText";

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
        <Activity />
      </ScalableContainer>
      <SFXManager />
      <LiveText />
      <LiveAnnouncer>
        <LiveMessage />
      </LiveAnnouncer>
    </>
  );
};
