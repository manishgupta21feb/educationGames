import React from "react";
import ActivityContainer from "../containers/ActivityContainer";
import ScalableContainer from "../containers/ScalableContainer";
import SFXManager from "../../app/components/SFXManager";
import { LiveAnnouncer, LiveMessage } from "react-aria-live";

export default (props) => {
  const { ariaLiveText } = props;

  return (
    <>
      <ScalableContainer>
        <ActivityContainer />
      </ScalableContainer>
      <SFXManager />
      <LiveAnnouncer>
        <LiveMessage message={ariaLiveText} aria-live="polite" />
      </LiveAnnouncer>
    </>
  );
};
