import React, { useEffect } from "react";
import View from "../../containers/ViewContainer";
import Header from "../../containers/HeaderContainer";
import GenotypeHeaderButton from "../../containers/GenotypeHeaderButton";
import Flower from "../../containers/FlowerContainer";
import PopupContainer from "../../containers/PopUpContainer";
import { Popup } from "../../../app/components/Popup";
import InitialDialogBox from "../../containers/InitialDialogBox";
import ResetDialogBox from "../../containers/ResetDialogBox";
import InformationDialogBox from "../../containers/InformationDialogBox";
import UseInfoDialogBox from "../../containers/UseInfoDialogBox";
import PhenotypeGenotypeTable from "../../containers/PhenotypeGenotypeTableContainer";
import ResetToast from "../../containers/ResetToast";

export default (props) => {
  const {
    isPopupActive,
    resetDialogText,
    initialDialogText,
    useInfoDialogText,
    activityHeading,
    informationDialogText,
    showLimitWarning,
  } = props;

  useEffect(() => {
    props.togglePopup(1);
  }, []);

  return (
    <div className="activity-container">
      <Header>
        <GenotypeHeaderButton />
      </Header>
      <div role="main">
        {showLimitWarning ? <ResetToast /> : null}
        <h1 className="sr-only" aria-hidden={isPopupActive}>
          {activityHeading}
        </h1>
        <View ariahidden={isPopupActive}>
          <Flower />
        </View>
        <PopupContainer>
          <Popup popupid={1}>
            <InitialDialogBox>
              <p>{initialDialogText}</p>
            </InitialDialogBox>
          </Popup>
          <Popup popupid={2}>
            <InformationDialogBox>
              <p>{informationDialogText}</p>
              <PhenotypeGenotypeTable />
            </InformationDialogBox>
          </Popup>
          <Popup popupid={3}>
            <ResetDialogBox>
              <p>{resetDialogText}</p>
            </ResetDialogBox>
          </Popup>
          <Popup popupid={5}>
            <UseInfoDialogBox>
              <p>{useInfoDialogText}</p>
            </UseInfoDialogBox>
          </Popup>
        </PopupContainer>
      </div>
    </div>
  );
};
