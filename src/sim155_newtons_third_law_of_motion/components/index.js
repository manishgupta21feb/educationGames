import React, { useEffect } from "react";
import { LiveAnnouncer, LiveMessage } from "react-aria-live";
import SFXManager from "../../app/components/SFXManager";
import ActivityContainer from "../containers/ActivityContainer";
import ScalableContainer from "../containers/ScalableContainer";
import LiveTextAssertiveContainer from "../containers/LiveTextAssertiveContainer";

export default (props) => {
  const { ariaLiveText } = props;

  useEffect(() => {
    TincanManager.recordElapsedTime(TincanManager.data, true);
  }, []);

  return (
    <>
      <ScalableContainer>
        <ActivityContainer />
      </ScalableContainer>
      <SFXManager />
      <LiveTextAssertiveContainer />
      <LiveAnnouncer>
        <LiveMessage message={ariaLiveText} aria-live="polite" />
      </LiveAnnouncer>
    </>
  );
};
