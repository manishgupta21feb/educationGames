import React, { useEffect, useState } from "react";
import Right from "../../../containers/Right";
import View from "../../../../app/components/View";
import Video from "../../../containers/VideoContainer";
import EventManager from "../../../../app/events/manager";

const Main = (props) => {
  const {
    stepperValue,
    stepperCheck,
    nextContainer,
    answer,
    questionCount,
    isPopupActive,
    getIsVideoPause,
    resetCounterValues,
    toggleResetValue,
    videoDetails,
  } = props;

  const [videoState, setVideoState] = useState("stop");
  const [isDisabled, setIsDisabled] = useState(true);
  const [correctAttempted, setCorrectAttempted] = useState(false);
  const [correct, setCorrect] = useState(true);

  useEffect(() => {
    if (correctAttempted) {
      setCorrectAttempted(false);
    }
  }, [questionCount]);

  useEffect(() => {
    setIsDisabled(false);
    if (stepperValue == 0) {
      setCorrect(true);
    }
  }, [stepperValue]);

  useEffect(() => {}, [videoState]);

  const onClick2 = () => {
    setVideoState("pause");
    nextContainer(questionCount + 1 == 6 ? "finish" : "continue");
  };

  useEffect(() => {
    if (resetCounterValues) {
      setCorrectAttempted(false);
    }
  }, [resetCounterValues]);

  const onClick = () => {
    toggleResetValue("reset");
    if (!correctAttempted) {
      if (stepperValue == answer) {
        toggleResetValue("livetext", videoDetails);
        setCorrect(true);
        stepperCheck("correct");
        setVideoState("play");
        setCorrectAttempted(true); //tobefalse
        EventManager.broadcast("POSITIVE_FEEDBACK");
      } else if (stepperValue > answer) {
        setCorrect(false);
        setIsDisabled(true);
        stepperCheck("partialincorrect");
        setVideoState("stop");
        setCorrectAttempted(false);
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      } else {
        setCorrect(false);
        setIsDisabled(true);
        stepperCheck("incorrect");
        setVideoState("stop");
        setCorrectAttempted(false);
        EventManager.broadcast("NEGATIVE_FEEDBACK");
      }
    } else {
    }
  };

  useEffect(() => {
    if (getIsVideoPause) {
      setCorrect(true);
      stepperCheck("correct");
      setCorrectAttempted(true);
    }
  }, [getIsVideoPause]);

  return (
    <View ariahidden={isPopupActive || null} layout="leftright">
      <Video
        videoState={videoState}
        ariahidden={isPopupActive}
        tabindex={isPopupActive ? "-1" : null}
      />
      <Right
        onClick={onClick}
        onClick2={onClick2}
        correct={correct}
        answer={answer}
        correctAttempted={correctAttempted}
        isDisabled={isDisabled}
      />
    </View>
  );
};

export default Main;
