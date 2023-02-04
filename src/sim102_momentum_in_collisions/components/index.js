import React, { useEffect } from "react";
import ActivityContainer from "../containers/ActivityContainer";
import ScalableContainer from "../containers/ScalableContainer";
import { LiveAnnouncer } from "react-aria-live";
import SFXManager from "../../app/components/SFXManager";
import LiveMessageContainer from "../containers/LiveMessageContainer";
import LiveTextAssertiveContainer from "../containers/LiveTextAssertiveContainer";

export default (props) => {
  const { ariaLiveText } = props;

  useEffect(() => {}, []);

  return (
    <>
      <ScalableContainer>
        <ActivityContainer />
      </ScalableContainer>
      <SFXManager />
      <LiveTextAssertiveContainer />
      <LiveAnnouncer>
      <LiveMessageContainer/>
      </LiveAnnouncer>
    </>
  );
};
