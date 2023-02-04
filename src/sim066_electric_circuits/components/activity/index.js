import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import "./style.scss";

import FullView from "../../containers/FullViewContainer";
import PopupContainer from "../../containers/PopUpContainer";
import HeaderContainer from "../../containers/HeaderContainer";
import InfoPopupContainer from "../../containers/InfoPopupContainer";
import ResetDialogContainer from "../../containers/ResetDialogContainer";
import CorrectToastContainer from "../../containers/CorrectToastContainer";
import CompleteResetContainer from "../../containers/CompleteResetContainer";
import InitialInformationPopup from "../../containers/InitialInformationPopup";
import IncorrectToastContainer from "../../containers/IncorrectToastContainer";
import CompletionScreenContainer from "../../containers/CompletionScreenContainer";

import SeriesFormedInsteadOfParallel from "../../containers/SeriesFormedInsteadOfParallel";
import ParallelFormedInsteadOfSeries from "../../containers/ParallelFormedInsteadOfSeries";

export default (props) => {
  const {
    togglePopup,
    isPopupActive,
    correctAttempt,
    showToastMessage,
    selectedQuestion,
    initialInformationText,
    seriesFormedInsteadOfParallel,
    parallelFormedInsteadOfSeries,
  } = props;

  useEffect(() => {
    togglePopup(1);
  }, []);

  // console.log("Data", initialInformationText.initialInfoContent);

  return (
    <div className="activity-container">
      <HeaderContainer />
      {showToastMessage ? (
        correctAttempt ? (
          <CorrectToastContainer />
        ) : (
          <IncorrectToastContainer />
        )
      ) : null}
      <div role="main">
        <View ariahidden={isPopupActive || null}>
          <FullView />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InitialInformationPopup>
              <div>
                <div className={"info-container"}>
                  {initialInformationText.initialInfoContent.map((c, i) => {
                    return (
                      <div
                        key={`start-info${i}`}
                        className="initial-info-popup"
                      >
                        <div className={"heading"}>{c.heading}</div>
                        <div className={`images ${c.img}`}>
                          <img className="sr-only sr-image" alt={c.imageAlt} />
                          <div aria-hidden>
                            {c.labels.map((item, i) => {
                              return (
                                <div
                                  key={item.id}
                                  className={`labels label${item.id}`}
                                >
                                  {item.label}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <p>{c.content}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="initial-info-content">
                  <p>{initialInformationText.initialInfoText}</p>
                </div>
              </div>
            </InitialInformationPopup>
          </Popup>
          <Popup popupid={3}>
            <InfoPopupContainer>
              <div className="initial-info-popup">
                {initialInformationText.dialogData.info.content.map((a, i) => {
                  return (
                    <p key={i} dangerouslySetInnerHTML={{ __html: a }}></p>
                  );
                })}
              </div>
            </InfoPopupContainer>
          </Popup>
          <Popup popupid={4}>
            <SeriesFormedInsteadOfParallel>
              <p
                dangerouslySetInnerHTML={{
                  __html: seriesFormedInsteadOfParallel,
                }}
              ></p>
            </SeriesFormedInsteadOfParallel>
          </Popup>
          <Popup popupid={5}>
            <ParallelFormedInsteadOfSeries>
              <p
                dangerouslySetInnerHTML={{
                  __html: parallelFormedInsteadOfSeries,
                }}
              ></p>
            </ParallelFormedInsteadOfSeries>
          </Popup>
          <Popup popupid={6}>
            <ResetDialogContainer>
              <p>{initialInformationText.resetText[0].content}</p>
            </ResetDialogContainer>
          </Popup>
          <Popup popupid={7} autoFocus>
            <CompleteResetContainer />
          </Popup>
          <Popup popupid={8} autoFocus>
            <CompletionScreenContainer />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
