import React, { useState, useEffect } from "react";
import View from "../../../../app/components/View";
import EventManager from "../../../../app/events/manager";
import Screen2Wrapper from "../../Screen2Wrapper";

export default (props) => {
  const {
    instructionText,
    options,
    onCorrect,
    onIncorrect,
    optionsResult,
    onContinueClick,
    initData,
    optionsSectionsOptions,
    screen2optionsSections,
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

  const _instructionText = instructionText.replace("-1-", options[i].text);
  const _instructionTextLabel = instructionText.replace(
    "-1-",
    options[i].label
  );
  const selectedSection = screen2optionsSections[options[i].id];
  const selectedSectionsOptions = optionsSectionsOptions[selectedSection] ?? [];

  const onSubmitAnswer = (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    if (optionsResult[options[i].id] === id) {
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
        <Screen2Wrapper
          instructionText={_instructionText}
          onSubmitAnswer={onSubmitAnswer}
          onNext={onNext}
          visited={visited}
          correctAttempt={correctAttempt}
          onContinueClick={onContinueClick}
          selectedSection={selectedSection}
          selectedSectionsOptions={selectedSectionsOptions}
          hideToast={hideToast}
          isPopupActive={isPopupActive}
          instructionTextLabel={_instructionTextLabel}
          buttonLabels={buttonLabels}
        ></Screen2Wrapper>
      </View>
    </div>
  );
};
