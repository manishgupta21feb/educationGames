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

import InitialInformationPopup from "../../containers/InitialInformationPopup";
import IncorrectToastContainer from "../../containers/IncorrectToastContainer";

import SeriesFormedInsteadOfParallel from "../../containers/SeriesFormedInsteadOfParallel";
import ParallelFormedInsteadOfSeries from "../../containers/ParallelFormedInsteadOfSeries";

import ParallelWrongText from "../../containers/ParallelWrongContainer";

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
    mainScreen,
    circuitNameProps,
    draggableItem,
  } = props;

  useEffect(() => {
    togglePopup(1);
  }, []);

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

      <div
        role="main"
        className={draggableItem && draggableItem.id ? "z-index" : ""}
      >
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {initialInformationText.screen1Heading}
        </h1>
        <View ariahidden={isPopupActive || null}>
          <FullView />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InitialInformationPopup>
              <div
                className="start-popup"
                dangerouslySetInnerHTML={{
                  __html: initialInformationText.initialInfoContent[0].txt,
                }}
              ></div>
              <img
                className="img-position"
                src={initialInformationText.initialInfoContent[0].path}
                alt={initialInformationText.initialInfoContent[0].alt}
              />
            </InitialInformationPopup>
          </Popup>
          <Popup popupid={3}>
            <InfoPopupContainer>
              <div className="initial-info-popup">
                {mainScreen
                  ? initialInformationText.mainScreenInfoText
                  : circuitNameProps == "series"
                  ? initialInformationText.seriesInfoText
                  : initialInformationText.parallelInfoText}
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
          {/* <Popup popupid={7} autoFocus>
            <CompleteResetContainer />
          </Popup> */}

          <Popup popupid={10}>
            <ParallelWrongText>
              <p
                dangerouslySetInnerHTML={{
                  __html: initialInformationText.parallelWrongText,
                }}
              ></p>
            </ParallelWrongText>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
