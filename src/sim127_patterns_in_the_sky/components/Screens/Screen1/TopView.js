import React from "react";
import Button from "../../../containers/Screen1TopViewButton";

const TopView = (props) => {
  const {
    isPopupActive,
    selectedHotspot,
    visitedHotspots,
    screen1MainImageAlt,
    screen1TopViewButtons,
  } = props;
  return (
    <div className="screen1-top" aria-hidden={isPopupActive}>
      {!selectedHotspot ? (
        <img className="sr-only sr-image" alt={screen1MainImageAlt} />
      ) : null}
      {screen1TopViewButtons.map((s) => {
        return (
          <div
            key={`hotspot-bg-image-${s.id}`}
            className={`active-hotspot-image ${s.id} ${
              selectedHotspot == s.id ? "show" : ""
            }`.trim()}
          >
            {selectedHotspot == s.id ? (
              <img className="sr-only sr-image" alt={s.alt} />
            ) : null}
          </div>
        );
      })}
      {selectedHotspot ? null : (
        <div className="buttons-container">
          {screen1TopViewButtons.map((s) => {
            const visited = visitedHotspots.indexOf(s.id) >= 0;
            return (
              <React.Fragment key={`button-wrapper-${s.id}`}>
                <span aria-hidden className={`hotspot-line ${s.id}`}></span>
                <Button
                  id={s.id}
                  text={s.text}
                  disabled={isPopupActive || visited}
                  classes={`hotspot-btn label ${visited ? "visited" : ""}`}
                />
              </React.Fragment>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TopView;
