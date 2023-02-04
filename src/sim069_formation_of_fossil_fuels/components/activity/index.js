import React, { useEffect, useState } from "react";
import InfoBox from "../../containers/InfoBox";
import StartBox from "../../containers/StartBox";
import ResetBox from "../../containers/ResetBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import SuccessToast from "../../containers/SuccessToast";
import IncorrectToast from "../../containers/IncorrectToast";
import Header from "../../containers/HeaderContainer";
import FullView from "../../containers/FullViewContainer";

const activity = (props) => {
  const [toastMessage, setToastMessage] = useState(null);

  const {
    introText,
    infoText,
    resetPopupText,
    isPopupActive,
    showToastMessage,
    result,
    mainImg,
  } = props;

  useEffect(() => {
    props.onInit();
  }, []);

  useEffect(() => {
    let toastMessage = null;
    if (showToastMessage) {
      if (result) {
        toastMessage = <SuccessToast />;
      } else if (!result) {
        toastMessage = <IncorrectToast />;
      }
    }
    setToastMessage(toastMessage);
  }, [showToastMessage]);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        {toastMessage}

       <View ariahidden={isPopupActive}>
         <FullView/>
       </View>

        <PopupContainer>
          <Popup popupid={1}>
            <StartBox>
              <p>{introText}</p>
              <img src={mainImg.img} alt={mainImg.alt}/>
            </StartBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p>{infoText}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={3}>
            <ResetBox>
              <p>{resetPopupText}</p>
            </ResetBox>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
