import React from "react";
import View from "../../../../app/components/View";
import Screen2Wrapper from "../../Screen2Wrapper";
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
    onScreen2Reset,
    isPopupActive
  } = props;

  return (
    <div className="screen0-container">
      <View ariahidden={isPopupActive || null}>
        <Screen2Wrapper
          instructionText={instructionText}
          screenData={screenData}
          setVisited={setVisited}
          visited={visited}
          onCorrect={onCorrect}
          onIncorrect={onIncorrect}
          onNextClick={onNextClick}
          buttonLabels={buttonLabels}
          onScreen2Reset={onScreen2Reset}
          isPopupActive={isPopupActive}
        ></Screen2Wrapper>
      </View>
    </div>
  );
};
