import React from "react";
import View from "../../../../app/components/View";
import Screen1Wrapper from "../../Screen1Wrapper";
import "../style.scss";

export default (props) => {
  const {
    instructionText,
    screenData,
    setVisited,
    visited,
    onIncorrect,
    onCorrect,
    onNextClick,
    buttonLabels,
    isPopupActive
  } = props;

  return (
    <div className="screen0-container">
      <View ariahidden={isPopupActive || null}>
        <Screen1Wrapper
          instructionText={instructionText}
          screenData={screenData}
          setVisited={setVisited}
          visited={visited}
          onCorrect={onCorrect}
          onIncorrect={onIncorrect}
          onNextClick={onNextClick}
          buttonLabels={buttonLabels}
          isPopupActive={isPopupActive}
        ></Screen1Wrapper>
      </View>
    </div>
  );
};
