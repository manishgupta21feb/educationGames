import React from "react";
import "./style.scss";

const Output = (props) => {
  const { isVideoVisible, hotspots, selectedHotspot, introImageAlt } = props;

  return (
    <div
      className={`videoOutputContainer ${
        isVideoVisible ? "selectedView" : "hiddenView"
      }`}
    >
      <div className={`fullViewVideoContainers`}>
        {hotspots.map((m) => {
          const showContainer = m.id == selectedHotspot;
          return (
            <div
              key={`output-${m.id}`}
              className={`videoSection ${m.id} ${
                showContainer ? "show" : "hide"
              }`}
            >
              {showContainer && (
                <div className="topAreaImage">
                  <img className="sr-only sr-image" alt={introImageAlt} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Output;
