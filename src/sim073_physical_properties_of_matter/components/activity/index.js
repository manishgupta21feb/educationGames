import React, { useEffect } from "react";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import InfoPopupContainer from "../../containers/InfoPopupContainer";
import PyramidComplete from "../../containers/PyramidActivityComplete";
import PyramidActivity from "../../containers/PyramidActivityContainer";
import ResetDialogContainer from "../../containers/ResetDialogContainer";
import CompleteResetContainer from "../../containers/CompleteResetContainer";
import InitialInformationPopup from "../../containers/InitialInformationPopup";
import IncorrectToastContainer from "../../containers/IncorrectToastContainer";
import "../../stylesheets/activity/main.scss";

export default (props) => {
  const {
    togglePopup,
    currentScreen,
    showToastMessage,
    initialInformationText,
  } = props;

  useEffect(() => {
    togglePopup(1);
  }, []);

  return (
    <div className="activity-container">
      <HeaderContainer />
      <div role="main">
        {currentScreen == 0 ? <PyramidComplete /> : <PyramidActivity />}
        <PopupContainer>
          <Popup popupid={1}>
            <InitialInformationPopup>
              {initialInformationText.dialogData.start.content.map((a, i) => {
                return (
                  <p
                    className={`paragraph-${i}`}
                    key={i}
                    dangerouslySetInnerHTML={{ __html: a }}
                  ></p>
                );
              })}
            </InitialInformationPopup>
          </Popup>
          <Popup popupid={3}>
            <InfoPopupContainer>
              <p>{initialInformationText.dialogData.info.content}</p>
            </InfoPopupContainer>
          </Popup>
          <Popup popupid={6}>
            <ResetDialogContainer>
              <p>{initialInformationText.resetText[0].content}</p>
            </ResetDialogContainer>
          </Popup>
          <Popup popupid={7} autoFocus>
            <CompleteResetContainer />
          </Popup>
          {/* <Popup popupid={8} autoFocus>
            <CompletionScreenContainer />
          </Popup> */}
        </PopupContainer>
        {showToastMessage && <IncorrectToastContainer />}
      </div>
    </div>
  );
};
