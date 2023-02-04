import React, { useRef, useEffect } from "react";
import ActivityContainer from "../containers/ActivityContainer";
import ScalableContainer from "../containers/ScalableContainer";
import SFXManager from "../../app/components/SFXManager";
import EventManager from "../../app/events/manager";
import { LiveAnnouncer, LiveMessage } from "react-aria-live";

export default (props) => {
  const currentPopupRef = useRef(currentPopup);
  const { ariaLiveText, sounds, currentPopup } = props;

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
        <SFXManager sfxArray={sounds} />
      </ScalableContainer>
      <LiveAnnouncer>
        <LiveMessage message={ariaLiveText} aria-live="polite" />
      </LiveAnnouncer>
    </>
  );
};
