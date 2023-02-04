import React, { useEffect } from "react";
import { LiveAnnouncer } from "react-aria-live";
import LiveMessage from "../containers/LiveMessage";
import ActivityContainer from "../containers/ActivityContainer";
import ScalableContainer from "../containers/ScalableContainer";
import SequentialSoundManager from "../../app/components/SFXManager";

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
      <SequentialSoundManager logIds />
      <LiveAnnouncer>
        <LiveMessage message={props.ariaLiveText} />
      </LiveAnnouncer>
    </>
  );
};
