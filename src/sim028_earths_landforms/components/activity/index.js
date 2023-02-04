import React, { useEffect } from "react";
import Header from "../../containers/Header";
import View from "../../../app/components/View";
import HelpPopup from "../../containers/HelpPopup";
import ResetPopup from "../../containers/ResetPopup";
import { Popup } from "../../../app/components/Popup";
import HotspotArea from "../../containers/HotspotArea";
import RightSection from "../../containers/RightSection";
import PopupContainer from "../../containers/PopUpContainer";
import InitialInfoPopup from "../../containers/InitialInfoPopup";

export default (props) => {
  const {
    isPopupActive,
    helpPopupText,
    resetPopupText,
    initialInfoPopupText,
    activityHeading,
  } = props;

  useEffect(() => {
    if (props.onMount) {
      props.onMount();
    }
  }, []);

  return (
    <div className="activity-container">
      <Header />
      <div role="main">
        <h1 aria-hidden={isPopupActive} className="sr-only">
          {activityHeading}
        </h1>
        <View layout="leftright" ariahidden={isPopupActive}>
          <HotspotArea />
          <RightSection />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InitialInfoPopup>
              <p>{initialInfoPopupText}</p>
            </InitialInfoPopup>
          </Popup>
          <Popup popupid={2}>
            <HelpPopup>
              {helpPopupText.map((h, i) => {
                return (
                  <p key={`help-popup-text${i}`} className={`help-popup-text`}>
                    {h}
                  </p>
                );
              })}
            </HelpPopup>
          </Popup>
          <Popup popupid={3}>
            <ResetPopup>
              <p>{resetPopupText}</p>
            </ResetPopup>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
