import React, { useState, useEffect } from "react";
import View from "../../../../app/components/View";
import EventManager from "../../../../app/events/manager";
import Screen1Wrapper from "../../Screen1Wrapper";

export default (props) => {
  const {
    instructionText,
    options,
    onCorrect,
    onIncorrect,
    optionsResult,
    onContinueClick,
    initData,
    screen1optionsSections,
    screen1optionsSectionsOptions,
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

  const optionKey = options.length ? options[i].key : null;
  const optionValue = options.length ? options[i].value : null;

  const _instructionText = instructionText.replace("-1-", optionKey);
  const _instructionTextAlt = instructionText.replace("-1-", optionValue);
  const selectedSection = screen1optionsSections[optionKey];
  const selectedSectionsOptions =
    screen1optionsSectionsOptions[selectedSection] ?? [];

  const onSubmitAnswer = (id) => {
    EventManager.broadcast("SECONDARY_CLICK");
    if (optionsResult[optionKey] === id) {
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
    setVisited([optionKey, ...visited]);
    setI(i + 1);
    setCorrectAttempt(false);
  };

  return (
    <div className="screen0-container">
      <View ariahidden={isPopupActive}>
        <Screen1Wrapper
          instructionText={_instructionText}
          instructionTextAlt={_instructionTextAlt}
          onSubmitAnswer={onSubmitAnswer}
          onNext={onNext}
          visited={visited}
          correctAttempt={correctAttempt}
          onContinueClick={onContinueClick}
          selectedSection={selectedSection}
          selectedSectionsOptions={selectedSectionsOptions}
          hideToast={hideToast}
          isPopupActive={isPopupActive}
          buttonLabels={buttonLabels}
        ></Screen1Wrapper>
      </View>
    </div>
  );
};
