import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";
import InfoBox from "../../containers/InfoBox";
import Header from "../../containers/HeaderContainer";
import Center from "../../containers/CenterAreaContainer";
import PopupContainer from "../../containers/PopUpContainer";
import ResetContainer from "../../containers/ResetContainer";
import StartInformationBox from "../../containers/StartInfoBoxContainer";
import "./style.scss";
import location from "../../assets/images/location.png";

export default (props) => {
  const { data, onInit, isPopupActive, selectedDraggable, observationMotive } =
    props;

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
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {observationMotive}
        </h1>
        <View ariahidden={isPopupActive} className="view-container">
          <Center />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <StartInformationBox>
              <p
                dangerouslySetInnerHTML={{
                  __html: data.instructionBoxContent.label,
                }}
              ></p>
              <p
                className="marginTop-9"
                dangerouslySetInnerHTML={{
                  __html: data.instructionBoxContent.label2,
                }}
              ></p>
              <div className="sr-image instruction-area ">
                <img
                  src={data.instructionBoxContent.img}
                  alt={data.instructionBoxContent.alt}
                />
                <p className="imgLabel1" aria-hidden="true">
                  {data.instructionBoxContent.imgLabel[0]}
                </p>
                <p className="imgLabel2" aria-hidden="true">
                  {data.instructionBoxContent.imgLabel[1]}
                </p>
                <p className="imgLabel3" aria-hidden="true">
                  {data.instructionBoxContent.imgLabel[2]}
                </p>
              </div>
            </StartInformationBox>
          </Popup>
          <Popup popupid={2}>
            <InfoBox>
              <p dangerouslySetInnerHTML={{ __html: data.InfoBoxContent }}></p>
            </InfoBox>
          </Popup>
          <Popup popupid={4}>
            <ResetContainer>
              <p>{data.resetMsgContent}</p>
            </ResetContainer>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
