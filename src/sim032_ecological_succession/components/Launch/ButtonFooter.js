import React from "react";
import Button from "../../../app/components/Button";

const ButtonFooter = (props) => {
  const {
    changeScreen,
    isPopupActive,
    launchScreenButtons,
  } = props;

  const volcanicScreenClick = () => {
    changeScreen(1);
  };

  const wildfireScreenClick = () => {
    changeScreen(2);
  };

  return (
    <div className="button-footer">
      <Button
        ariaHidden={isPopupActive}
        isPopupActive={isPopupActive}
        onClick={volcanicScreenClick}
        text={launchScreenButtons.volcanicEruption}
        label={launchScreenButtons.volcanicEruption}
        classes={`primary`}
      />

      <Button
        ariaHidden={isPopupActive}
        isPopupActive={isPopupActive}
        onClick={wildfireScreenClick}
        text={launchScreenButtons.wildfire}
        label={launchScreenButtons.wildfire}
        classes={`primary`}
      />
    </div>
  );
};

export default ButtonFooter;
