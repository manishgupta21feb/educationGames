import React, { useEffect } from "react";
import { LiveAnnouncer } from "react-aria-live";

import SFXManager from "../../app/components/SFXManager";
import ActivityContainer from "../containers/ActivityContainer";
import ScalableContainer from "../containers/ScalableContainer";
import LiveMessageContainer from "../containers//LiveMessageContainer";
import LiveTextAssertiveContainer from "../containers/LiveTextAssertiveContainer";

export default (props) => {
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
        <LiveMessageContainer />
      </LiveAnnouncer>
    </>
  );
};
