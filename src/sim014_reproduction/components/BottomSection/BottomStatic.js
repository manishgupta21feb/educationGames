import React from "react";
import NextButtonContainer from "../../containers/NextButtonContainer";

const BottomStatic = (props) => {
  const { questions, selectedHotspot, hotspotData } = props;
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
                    className="instruction-text"
                    dangerouslySetInnerHTML={{
                      __html: q.introductionHeading,
                    }}
                  ></p>
                  <p
                    className="instruction-blue-text"
                    dangerouslySetInnerHTML={{
                      __html: selectedHotspot.length > 0 ? "" : q.clickContent,
                    }}
                  ></p>
                  <div>
                    <NextButtonContainer />
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
                <p
                  className="instruction-blue-text"
                  dangerouslySetInnerHTML={{
                    __html: selectedHotspot.length > 0 ? "" : text.clickContent,
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
