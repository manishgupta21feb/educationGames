import React, { useState, useEffect } from "react";
import Home from "../../containers/HomeContainer";
import Workmat from "../../containers/WorkmatContainer";
import FinalScreen from "../FinalScreen";
import data from "../../data";
import "./fullView.scss";

const FullView = (props) => {
  const {
    onFossil,
    fossil,
    showFinalScreen,
    finalScreenData,
    continueBtnText,
    goToHomePage,
    activityEnd,
    isPopupActive,
  } = props;

  const [finalScreen, setFinalScreen] = useState(false);

  const _showFinalScreen = () => {
    showFinalScreen();
    setFinalScreen(true);
  };

  useEffect(() => {
    setFinalScreen(false);
  }, [activityEnd]);

  const renderComponents = () => {
    if (fossil && !finalScreen) {
      return (
        <Workmat
          fossil={fossil}
          finalScreen={finalScreen}
          showFinalScreen={_showFinalScreen}
        />
      );
    } else if (!fossil && !finalScreen) {
      return <Home onFossil={onFossil} activityEnd={activityEnd} />;
    }

    if (finalScreen) {
      return (
        <FinalScreen
          finalScreenData={finalScreenData}
          continueBtnText={continueBtnText}
          goToHomePage={goToHomePage}
          isPopupActive={isPopupActive}
        />
      );
    }
  };
  return (
    <>
      <h1 className="sr-only">{data.observationMotive}</h1>
      {renderComponents()}
    </>
  );
};

export default FullView;
