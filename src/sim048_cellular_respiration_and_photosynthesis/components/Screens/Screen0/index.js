import React from "react";
import View from "../../../../app/components/View";
import Screen0Wrapper from "../../Screen0Wrapper";
import "../style.scss";

export default (props) => {
  const {
    instructionText,
    buttonLabels,
    setVisited,
    visited,
    screenData,
    onUpdate,
    onIncorrect,
    onCorrect,
    onNextClick,
    isPopupActive
  } = props;

  return (
    <div className="screen0-container">
      <View ariahidden={isPopupActive || null}>
        <Screen0Wrapper
          onNextClick={onNextClick}
          buttonLabels={buttonLabels}
          instructionText={instructionText}
          screenData={screenData}
          setVisited={setVisited}
          visited={visited}
          onUpdate={onUpdate}
          onCorrect={onCorrect}
          onIncorrect={onIncorrect}
          isPopupActive={isPopupActive}
        ></Screen0Wrapper>
      </View>
    </div>
  );
};
