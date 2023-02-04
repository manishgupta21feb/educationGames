import React from "react";
import { LiveAnnouncer } from "react-aria-live";

import SFXManager from "../../app/components/SFXManager";
import ActivityContainer from "../containers/ActivityContainer";
import ScalableContainer from "../containers/ScalableContainer";
import LiveMessageContainer from "../containers/LiveMessageContainer";

export default (props) => {
  return (
    <>
      <ScalableContainer>
        <ActivityContainer />
      </ScalableContainer>
      <SFXManager />
      <LiveAnnouncer>
        <LiveMessageContainer />
      </LiveAnnouncer>
    </>
  );
};
