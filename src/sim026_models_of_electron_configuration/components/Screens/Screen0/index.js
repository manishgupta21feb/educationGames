import React, { useState, useEffect } from "react";
import View from "../../../../app/components/View";
import EventManager from "../../../../app/events/manager";
import Screen0Wrapper from "../../Screen0Wrapper";

export default (props) => {
  const {
    instructionText,
    options,
    onCorrect,
    onIncorrect,
    optionsResult,
    onContinueClick,
    initData,
    updateResetState,
    isReset,
    hideToast,
    isPopupActive,
    setResetFocusState,
    buttonLabels,
  } = props;

  useEffect(() => {
    initData();
  }, []);

  const [visited, setVisited] = useState([]);
  const [i, setI] = useState(0);
  const [correctAttempt, setCorrectAttempt] = useState(false);

  useEffect(() => {
    setVisited([]);
    setI(0);
    setCorrectAttempt(false);
  }, [isReset]);

  const _instructionText = instructionText.replace("-1-", options[i]);

  const onSubmitAnswer = (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    if (visited.length === 0) {
      updateResetState();
    }
    if (optionsResult[options[i]] === id) {
      onCorrect();
      setCorrectAttempt(true);
    } else {
      onIncorrect();
      setCorrectAttempt(false);
    }
  };

  const onNext = () => {
    EventManager.broadcast("SECONDARY_CLICK");
    hideToast();
    setResetFocusState();
    setVisited([options[i], ...visited]);
    setI(i + 1);
    setCorrectAttempt(false);
  };

  return (
    <div className="screen0-container">
      <View ariahidden={isPopupActive}>
        <Screen0Wrapper
          instructionText={_instructionText}
          onSubmitAnswer={onSubmitAnswer}
          onNext={onNext}
          visited={visited}
          correctAttempt={correctAttempt}
          onContinueClick={onContinueClick}
          isReset={isReset}
          hideToast={hideToast}
          isPopupActive={isPopupActive}
          buttonLabels={buttonLabels}
        ></Screen0Wrapper>
      </View>
    </div>
  );
};
