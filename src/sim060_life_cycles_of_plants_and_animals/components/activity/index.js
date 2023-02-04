import React, { useEffect, useState } from "react";
import InfoBox from "../../containers/InfoBox";
import StartBox from "../../containers/StartBox";
import ResetBox from "../../containers/ResetBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import SuccessToast from "../../containers/SuccessToast";
import IncorrectToast from "../../containers/IncorrectToast";
import CompleteScreenContainer from "../../containers/CompleteScreenContainer";
import Header from "../../containers/HeaderContainer";
import LeftView from "../LeftView";
import RightView from "../../containers/RightContainer";
import Home from "../Home";

const activity = (props) => {
  const [toastMessage, setToastMessage] = useState(null);
  
  const {
    introText,
    infoText,
    resetPopupText,
    isPopupActive,
    showToastMessage,
    getDndScreenFor,
    result,
    observationMotive,
    istructionText,
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
      <div role="main" className={getDndScreenFor != "home" ? "main-containment-zone" : ""}>
        {toastMessage}

        <View>
          {getDndScreenFor == "home" ? (
            <View ariahidden={isPopupActive}>
              <Home observationMotive={observationMotive} istructionText={istructionText}/>
            </View>
          ) : (
            <View layout="leftright" ariahidden={isPopupActive}>
              <LeftView/>
              <RightView />
            </View>
          )}
        </View>

        <PopupContainer>
          <Popup popupid={1}>
            <StartBox>
              <p>{introText}</p>
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
          <Popup popupid={4} autoFocus>
            <CompleteScreenContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
