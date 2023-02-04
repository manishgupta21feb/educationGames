import React, { useEffect } from "react";
import View from "../../../app/components/View";
import { Popup } from "../../../app/components/Popup";

import InfoBox from "../../containers/InfoBox";
import Header from "../../containers/HeaderContainer";
import PopupContainer from "../../containers/PopUpContainer";
import InstructionBox from "../../containers/InstructionBox";
import ResetDialogBox from "../../containers/ResetDialogBox";
import FullView from "../../containers/FullViewContainer";
import "../../stylesheets/main.scss";
export default (props) => {
  const { data, isPopupActive, onStartActivity, activityHeading } = props;

  useEffect(() => {
    onStartActivity();
  }, []);

  return (
    <>
      <div className="activity-container">
        <Header />
        <div role="main">
          <h1 className="sr-only" aria-hidden={isPopupActive}>
            {activityHeading}
          </h1>
          <View ariahidden={isPopupActive || null}>
            <FullView />
          </View>

          <PopupContainer>
            <Popup popupid={1}>
              <InstructionBox>
                <p>{data.instructionBoxContent}</p>
              </InstructionBox>
            </Popup>
            <Popup popupid={4}>
              <InfoBox>
                <p
                  dangerouslySetInnerHTML={{ __html: data.InfoBoxContent }}
                ></p>
              </InfoBox>
            </Popup>

            <Popup popupid={8}>
              <ResetDialogBox>
                <p>{data.resetMsgContent}</p>
              </ResetDialogBox>
            </Popup>
          </PopupContainer>
        </div>
      </div>
    </>
  );
};
