import React, { useEffect, useRef } from "react";
import InfoBox from "../../containers/InfoBox";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import Header from "../../containers/HeaderContainer";
import SuccessToast from "../../containers/ToastContainerSuccess";
import ResetContainer from "../../containers/ResetContainer";
import FailureToast from "../../containers/ToastContainerFailure";
import CompletionContainer from "../../containers/CompletionContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import Left from "../../containers/LeftContainer";
import Right from "../../containers/DraggableContainer";
import PeriodicTable from "../../containers/PeriodicTableContainer";
import IncorrectProton from "../../containers/IncorrectProton";
import IncorrectNeutron from "../../containers/IncorrectNeutron";
import IncorrectValance from "../../containers/IncorrectValance";
import IncorrectElectrons from "../../containers/IncorrectElectrons";
import IncorrectPlaceElectron from "../../containers/IncorrectPlaceElectron";
import PartialIncorrect from "../../containers/ToastContainerPartialIncorrect";

const activity = (props) => {
  const {
    isPopupActive,
    data,
    onInit,
    selectedDraggable,
    showToastMessage,
    correctAnswer,
    partialCorrect,
  } = props;
  useEffect(() => {
    onInit();
  }, []);
  return (
    <div className="activity-container">
      <Header />

      <div
        role="main"
        className={selectedDraggable && selectedDraggable.id ? "z-index" : ""}
      >
        {showToastMessage ? (
          correctAnswer ? (
            <SuccessToast />
          ) : partialCorrect ? (
            <PartialIncorrect />
          ) : (
            <FailureToast />
          )
        ) : null}
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {data.activityHeading}
        </h1>

        <View layout="leftright" ariahidden={isPopupActive}>
          <Left />
          <Right />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p
                dangerouslySetInnerHTML={{ __html: data.instructionBoxContent }}
              ></p>
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p className="infoContentHeader">{data.InfoBoxContent}</p>
              <div className="periodic-table-container colorByCategory legend-container">
                <p className="sr-only">{data.periodicTabelLegend}</p>
                <div className="element noble-gas">
                  {data.elementBlock.map((eb) => {
                    return (
                      <div key={eb.id} className={eb.classes} aria-hidden>
                        {eb.text}
                      </div>
                    );
                  })}
                </div>

                <div className="atomic-number-line" aria-hidden></div>
                <div className="symbol-line" aria-hidden></div>
                <div className="atomic-mass-line" aria-hidden></div>
                <div className="atomic-number" aria-hidden>
                  {data.atomicNumber}
                </div>
                <div className="atomic-symbol" aria-hidden>
                  {data.symbol}
                </div>
                <div className="atomic-mass" aria-hidden>
                  {data.atomicMass}
                </div>
              </div>
              <div className="full-tabel-container">
                <PeriodicTable />
              </div>
            </InfoBox>
          </Popup>
          <Popup popupid={3} autoFocus>
            <CompletionContainer />
          </Popup>
          <Popup popupid={4}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
          </Popup>
          <Popup popupid={5}>
            <IncorrectProton>
              <p>{data.incorrectProton}</p>
            </IncorrectProton>
          </Popup>
          <Popup popupid={6}>
            <IncorrectNeutron>
              <p>{data.incorrectNeutron}</p>
            </IncorrectNeutron>
          </Popup>
          <Popup popupid={7}>
            <IncorrectValance>
              <p>{data.incorrectValance}</p>
            </IncorrectValance>
          </Popup>
          <Popup popupid={8}>
            <IncorrectElectrons>
              <p>{data.incorrectElectrons}</p>
            </IncorrectElectrons>
          </Popup>
          <Popup popupid={9}>
            <IncorrectPlaceElectron>
              <p>{data.incorrectPlaceElectron}</p>
            </IncorrectPlaceElectron>
          </Popup>
          {/* <Popup popupid={10}>
            <PartialIncorrect>
              <p>{data.partialIncorrect}</p>
            </PartialIncorrect>
          </Popup> */}
        </PopupContainer>
      </div>
    </div>
  );
};

export default activity;
