import React, { useEffect, useState } from "react";
import "./style.scss";
import FinishButtonContainer from "../../containers/FinishButtonContainer";
import Atom1DD from "../../containers/Atom1DD";
import Atom3DD from "../../containers/Atom3DD";
import Atom2DD from "../../containers/Atom2DD";
import MCQcomponentContainer from "../../containers/MCQcomponentContainer";
import RadioButtonContainer from "../../containers/RadioButtonContainer";

const BottomArea = (props) => {
  const { screenNo, currentScreen, screenData, totalScreen } = props;

  
  return (
    <div className={`screen${screenNo}-bottom`}>
      {screenData.img ? (
        <>
          <img src={screenData.img.path} alt={screenData.img.alt} />
          {screenData.img.label?.map((val, index) => {
            return (
              <span className={`lbl${index}`} key={index}>
                {val}
              </span>
            );
          })}
        </>
      ) : null}

      {currentScreen ? (
        <>
          <p
            className={screenData.compoundData[currentScreen - 1].classes}
            dangerouslySetInnerHTML={{
              __html: screenData.compoundData[currentScreen - 1].heading,
            }}
          ></p>
          {currentScreen != 1 && screenNo == 10 ? (
            <div className={`mcq-wrapper`}>
              <MCQcomponentContainer>
                <div>
                  <RadioButtonContainer />
                </div>
              </MCQcomponentContainer>
            </div>
          ) : null}

          {screenNo == 5 || screenNo == 9 ? (
            <div className={`mcq-wrapper`}>
              <MCQcomponentContainer>
                <div>
                  {screenNo == 9 && currentScreen == 4 ? (
                    <RadioButtonContainer />
                  ) : (
                    <>
                      <Atom1DD />
                      <Atom2DD />
                      <Atom3DD />
                    </>
                  )}
                </div>
              </MCQcomponentContainer>
            </div>
          ) : null}
        </>
      ) : null}

      <FinishButtonContainer />
    </div>
  );
};

export default BottomArea;
