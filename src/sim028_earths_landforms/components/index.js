import React, { useEffect } from "react";

import ActivityContainer from "../containers/Activity";
import SFXManager from "../../app/components/SFXManager";
import { LiveAnnouncer, LiveMessage } from "react-aria-live";
import ScalableContainer from "../containers/ScalableContainer";

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
      </ScalableContainer>
      <SFXManager sfxArray={props.sfxs} />
      <LiveAnnouncer>
        <LiveMessage message={ariaLiveText} aria-live="polite" />
      </LiveAnnouncer>
    </>
  );
};
