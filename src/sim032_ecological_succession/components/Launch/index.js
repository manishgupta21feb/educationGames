import React from "react";
import ButtonFooter from "./ButtonFooter";
import Content from "./Content";
import InfoImage from "./InfoImage";
import "./style.scss";

export default (props) => {
  const {
    changeScreen,
    initialTexts,
    isPopupActive,
    infoImageAltText,
    launchScreenButtons,
  } = props;

  return (
    <div className="intial-container">
      <InfoImage infoImageAltText={infoImageAltText}></InfoImage>
      <Content initialTexts={initialTexts}></Content>
      <ButtonFooter
        changeScreen={changeScreen}
        isPopupActive={isPopupActive}
        launchScreenButtons={launchScreenButtons}
      ></ButtonFooter>
    </div>
  );
};
