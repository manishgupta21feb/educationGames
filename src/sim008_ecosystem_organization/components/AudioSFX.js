import React, { useEffect, useRef } from "react";
import EventManager from "../../app/events/manager";
import SFXManager from "../../app/components/SFXManager";

const sfx = (props) => {
  const { sounds, setPreviousSound } = props;

  useEffect(() => {
    EventManager.init("SCREEN_CHANGE", (data) => {
      // console.log(data.audioPlayState, "=======");
      if (data && data.audioPlayState) {
        const obj = {
          1: "FIRST",
          2: "SECOND",
          3: "THIRD",
          4: "FOURTH",
        };
        const feedback = obj[data.selectedQuestion] + "_ORGANISM";
        EventManager.broadcast("PLAY_AND_QUEUE_NEXT", {
          current: "MOVE_TO_NEXT_SCREEN",
          next: feedback,
        });
        setPreviousSound(feedback);
      } else {
        EventManager.broadcast("PLAY_AND_QUEUE_NEXT", {
          current: "MOVE_TO_NEXT_SCREEN",
        });
        setPreviousSound("MOVE_TO_NEXT_SCREEN");
      }
    });

    EventManager.init("POSITIVE_DIALOG", (data) => {
      if (data && data.audioPlayState) {
        const obj = {
          1: "FIRST",
          2: "SECOND",
          3: "THIRD",
          4: "FOURTH",
        };
        const feedback = obj[data.selectedQuestion] + "_CORRECT";
        EventManager.broadcast("PLAY_AND_QUEUE_NEXT", {
          current: "POSITIVE_FEEDBACK",
          next: feedback,
        });
        setPreviousSound(feedback);
      } else {
        EventManager.broadcast("PLAY_AND_QUEUE_NEXT", {
          current: "POSITIVE_FEEDBACK",
        });
        setPreviousSound("POSITIVE_FEEDBACK");
      }
    });

    EventManager.init("PLAY_SFX_AUDIO", (data) => {
      if (data && data.selectedQuestion != undefined) {
        const obj = {
          1: "FIRST",
          2: "SECOND",
          3: "THIRD",
          4: "FOURTH",
        };
        const feedback = obj[data.selectedQuestion] + "_ORGANISM";
        EventManager.broadcast(feedback);
        setPreviousSound(feedback);
      }
    });
  }, []);

  return <SFXManager sfxArray={sounds} />;
};

export default sfx;
