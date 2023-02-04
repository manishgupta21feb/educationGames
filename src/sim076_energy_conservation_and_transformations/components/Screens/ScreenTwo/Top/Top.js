import React from "react";
import "./style.scss";
import Button from "../../../../../app/components/Button";

const Top = (props) => {
  const {
    hotspots,
    isPopupActive,
    activeHotspot,
    selectHotspot,
    activityHeading,
    isScreenToggle,
    noOfArrows,
  } = props;
  return (
    <div className="container-top">
      <h1 className="sr-only">{activityHeading}</h1>
      <div className="hotspot-area">
        <img className="sr-only sr-image" alt={isScreenToggle?activeHotspot.assets.alt :activeHotspot.alt} />
        {!isScreenToggle &&
          hotspots.map((h, index) => {
            const disabledBtn =
              activeHotspot && activeHotspot.id == h.id ? "" : "visited";
            return (
              <React.Fragment key={h.id}>
                <Button
                  id={h.id}
                  classes={`btn hotspot-btn label ${disabledBtn} ${h.id}`}
                  text={h.text}
                  disabled={activeHotspot && activeHotspot.id != h.id}
                  isPopupActive={isPopupActive}
                  onClick={selectHotspot}
                />
                <div className={`dotted-lines ${h.id}`}></div>
                <div className={`dot-circle ${h.id}`}></div>
              </React.Fragment>
            );
          })}
        {!isScreenToggle &&
          activeHotspot  && noOfArrows.length > 0 ? (
          noOfArrows.map((arrow,index)=>{
            return(
              <React.Fragment key={`Show_label${index}`}>
              <div className={`arrow-container label_${index}`}>
              <div className="arrowAnimation"></div>
            </div>
            </React.Fragment>
            )
          })
        ) : null}
        {isScreenToggle &&
          activeHotspot &&
          activeHotspot.assets.arrowLabel.map((label, index) => {
            return (
              <React.Fragment key={`label${index}`}>
                <div className={`arrow-container label_${index}`}>
                  <div className="arrowAnimation animate"></div>
                  <div className="arrow-label">{label}</div>
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default Top;
