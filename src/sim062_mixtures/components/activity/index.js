import React, { useEffect } from "react";
import InfoBox from "../../containers/InfoBox";
import HintBox from "../../containers/HintBox";
import TransitionPopup from "../../containers/LevelOneCompletionContainer";
import CompletionPopup from "../../containers/completionPopup";
import ResetBox from "../../containers/ResetBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import Header from "../../containers/HeaderContainer";
import Section1Right from "../../containers/Section1RightContainer";
import Section1Left from "../../containers/Section1LeftContainer";
import Section2Right from "../../containers/Section2RightContainer";
import Section2Left from "../../containers/Section2LeftContainer";

const activity = (props) => {
  let { isPopupActive, data, activityChange } = props;

  let { introductoryText, hint, learningObjective, resetPopupData } = data;
  useEffect(() => {
    props.onInit();
  }, []);

  return (
    <div className="activity-container">
      <Header />

      <div role="main" className="sim062">
        <h1 aria-hidden={isPopupActive} className="sr-only">
          {learningObjective}
        </h1>
        {activityChange ? (
          <View layout="leftright" ariahidden={isPopupActive}>
            <Section2Right />
            <Section2Left />
          </View>
        ) : (
          <View layout="leftright" ariahidden={isPopupActive}>
            <Section1Right />
            <Section1Left />
          </View>
        )}

        <PopupContainer>
          <Popup popupid={1}>
            <InfoBox>
              <p>{introductoryText}</p>
            </InfoBox>
          </Popup>
          <Popup popupid={2}>
            <HintBox>
              <p>{hint}</p>
            </HintBox>
          </Popup>
          <Popup popupid={3} autoFocus>
            <TransitionPopup />
          </Popup>
          <Popup popupid={4} autoFocus>
            <CompletionPopup />
          </Popup>
          <Popup popupid={5} autoFocus>
            <ResetBox>{resetPopupData}</ResetBox>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
