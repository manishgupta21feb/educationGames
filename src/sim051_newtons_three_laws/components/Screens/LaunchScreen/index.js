import React from "react";
import View from "../../../../app/components/View";
import LaunchPage from "../../LaunchPage";
import "./style.scss";

export default (props) => {
  const {
    isPopupActive,
    instructionText,
    launchScreenButtons,
    onChangeScreen,
    btnSound
  } = props;

  return (
    <div className="screen0-container">
      <View ariahidden={isPopupActive || null}>
        <LaunchPage
          instructionText={instructionText}
          launchScreenButtons={launchScreenButtons}
          onChangeScreen={onChangeScreen}
          btnSound={btnSound}
          isPopupActive={isPopupActive}
        ></LaunchPage>
      </View>
    </div>
  );
};
