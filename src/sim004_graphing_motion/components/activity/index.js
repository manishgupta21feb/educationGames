import React, { useEffect } from "react";
import View from "../../../app/components/View";
import Header from "../../containers/HeaderContainer";
import LineGraph from "../../containers/LineGraphContainer";
import Controller from "../../containers/ControlsContainer";
import CarComponent from "../../containers/CarAnimationContainer";
import { Popup } from "../../../app/components/Popup";
import PopupContainer from "../../containers/PopUpContainer";
import ResetDialogBox from "../../containers/ResetDialogBox";
import InfoDialogBox from "../../containers/InfoDialogBox";
import InformationBox from "../../containers/InformationBox";
import SuccessToast from "../../containers/SuccessToast";
import CompletionScreen from "../../containers/CompletionScreen";

const Activity = (props) => {
  const {
    isPopupActive,
    showToastMessage,
    informationText,
    resetDialogText,
    startDialogBox1,
    startDialogBox2,
  } = props;

  useEffect(() => {
    props.togglePopup(1);
  }, []);

  useEffect(() => {
    console.log("props.currentPopup: ", props.currentPopup);
  }, [props.currentPopup]);

  return (
    <div className="activity-container">
      {showToastMessage ? <SuccessToast /> : null}
      <Header />
      <div role="main">
        <View layout="leftright" ariahidden={isPopupActive}>
          <>
            <LineGraph />
            <CarComponent />
          </>
          <>
            <Controller />
          </>
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InfoDialogBox>
              <p>{startDialogBox1}</p>
              <p>{startDialogBox2}</p>
            </InfoDialogBox>
          </Popup>
          <Popup popupid={6}>
            <ResetDialogBox>
              <p>{resetDialogText}</p>
            </ResetDialogBox>
          </Popup>
          <Popup popupid={4}>
            <InformationBox>
              <p>{informationText}</p>
            </InformationBox>
          </Popup>
          <Popup popupid={3} autoFocus>
            <CompletionScreen />
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};

export default Activity;
