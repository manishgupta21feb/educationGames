import React, { useEffect } from "react";
import { LiveAnnouncer } from "react-aria-live";

import SFXManager from "../../app/components/SFXManager";
import ActivityContainer from "../containers/ActivityContainer";
import ScalableContainer from "../containers/ScalableContainer";
import LiveMessageContainer from "../containers//LiveMessageContainer";
import AriaLiveAssertive from "../containers/LiveAnnouncerAsserative";
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
      <LiveAnnouncer>
        <LiveMessageContainer />
      </LiveAnnouncer>
      <AriaLiveAssertive />
    </>
  );
};
