import React, { useEffect, useState } from "react";
import View from "../../../../app/components/View";
import DataTableContainer from "../../../containers/DataTableContainer";
import LaunchPage from "../../LaunchPage";

export default (props) => {
  const {
    data,
    instructionText,
    updateResetBtnState,
    visited,
    setVisited,
    isPopupActive,
  } = props;
  const [isReset, setIsReset] = useState(false);

  const setVisitedCarbon = (val) => {
    updateResetBtnState(true);
    setVisited(val);
  };

  useEffect(() => {
    setIsReset(visited.length === 0);
  }, [visited]);

  return (
    <div className="screen0-container">
      <View layout="leftright" ariahidden={isPopupActive || null}>
        <LaunchPage
          instructionText={instructionText}
          setVisitedCarbon={setVisitedCarbon}
          carbon={data.carbon}
          visited={visited}
          updateResetBtnState={updateResetBtnState}
          isReset={isReset}
          initialScaleAltText={data.initialScaleAltText}
          isPopupActive={isPopupActive}
          labels={data.labels}
          list={data.accessibilityList}
        ></LaunchPage>
        <DataTableContainer
          isReset={isReset}
          visited={visited}
          data={data}
        ></DataTableContainer>
      </View>
    </div>
  );
};
