import React, { useEffect } from "react";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import ScreensContainer from "../../containers/ScreensContainer";
import Header from "../../containers/HeaderContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import InfoBox from "../../containers/InfoBox";
import ResetContainer from "../../containers/ResetContainer";
import CustomInfo from "../../containers/CustomInfoContainer";
import CorrectToastContainer from "../../containers/SuccessToast";
import InCorrectToastConatiner from "../../containers/IncorrectToast.js";
import LevelOneCompletionContainer from "../../containers/LevelOneCompletionContainer";
import HelpContainer from "../../containers/HelpContainer";
import CompletionConatiner from "../../containers/CompletionContainer";
import { Screen } from "../../../app/components/Screens";
import data from "../../data";
import ActivityScreens from "../Screens";
const screenData = data.screenData;

export default (props) => {
  const {
    togglePopup,
    currentScreen,
    correctAttempt,
    helpBoxContent,
    testDescription,
    answerSubmitted,
    showToastMessage,
    screen3InfoPopupText,
  } = props;

  useEffect(() => {
    togglePopup();
  }, []);

  return (
    <div className="activity-container">
      <Header />

      <div role="main">
        {showToastMessage && answerSubmitted ? (
          correctAttempt ? (
            <CorrectToastContainer />
          ) : (
            <InCorrectToastConatiner />
          )
        ) : null}
        <ScreensContainer>
          {screenData.map(({ component, id }, i) => {
            return (
              <Screen index={id} key={`screen-${id}`}>
                {React.createElement(ActivityScreens[component], {
                  index: id,
                })}
              </Screen>
            );
          })}
        </ScreensContainer>

        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p>{data.startUpInfo.instructionBoxContent}</p>
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            {currentScreen != 1 ? (
              <InfoBox>
                {currentScreen == 0 ? (
                  testDescription.map((item, i) => {
                    return (
                      <React.Fragment key={i}>
                        <h2
                          style={{
                            marginBottom: "4px",
                            marginTop: "0px",
                          }}
                        >
                          {item.testHeading}
                        </h2>
                        <p
                          style={{
                            marginBottom: "16px",
                            marginTop: "0px",
                          }}
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        ></p>
                      </React.Fragment>
                    );
                  })
                ) : (
                  <p>{screen3InfoPopupText}</p>
                )}
              </InfoBox>
            ) : (
              <HelpContainer>
                <h2
                  className="headerArea"
                  dangerouslySetInnerHTML={{ __html: helpBoxContent }}
                ></h2>
                <CustomInfo />
              </HelpContainer>
            )}
          </Popup>
          <Popup popupid={3}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
          </Popup>
          <Popup popupid={4} autoFocus>
            <LevelOneCompletionContainer />
          </Popup>
          <Popup popupid={5} autoFocus>
            <CompletionConatiner />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
