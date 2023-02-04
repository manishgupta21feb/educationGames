import React from "react";
import ContinueButtonContainer from "../../containers/ContinueButtonContainer";

const BottomStatic = (props) => {
  const {
    hotspotData,
    questions,
    bottomIntroText,
    isPopupActive,
    selectedHotspot,
  } = props;
 
  return (
    <div className="bottom-static">
      <div className="intstruction-area">
        {selectedHotspot &&
          questions
            .filter((q) => q.id == selectedHotspot)
            .map((q) => {
              return (
                <div key={q.id}>
                  <p
                    className="bottom-intro-text"
                    dangerouslySetInnerHTML={{
                      __html: bottomIntroText,
                    }}
                  ></p>
                  <p
                    className="instruction-text"
                    dangerouslySetInnerHTML={{
                      __html: q.introductionHeading,
                    }}
                  ></p>

                  <div>
                    <  ContinueButtonContainer  isPopupActive={isPopupActive} />
                  </div>
                </div>
              );
            })}
        {!selectedHotspot &&
          hotspotData.map((text) => {
            return (
              <div key={text.id}>
                <p
                  className="instruction-text"
                  dangerouslySetInnerHTML={{
                    __html:
                      selectedHotspot.length > 0
                        ? ""
                        : text.introductionHeading,
                  }}
                ></p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default BottomStatic;
