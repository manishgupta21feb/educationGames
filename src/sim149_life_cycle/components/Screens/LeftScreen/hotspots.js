import React from "react";

import "./style.scss";
import Button from "../../../../app/components/Button";

const draggable = (props) => {
  const {
    data,
    isPopupActive,
    currentHotSpot,
    visitedHotspotBtn,
    selectedQuestion,
    onClick,
    selectedSubQuestion,
  } = props;

  return (
    <div className="left-container">
      <h2 className="left-heading">{selectedQuestion.leftHeading}</h2>

      <div className={`img--${selectedQuestion.id}`}>
        <img className="sr-only sr-image" alt={selectedQuestion.imgAlt} />
      </div>
      {selectedQuestion.leftImages.map((hb) => {
        return (
          <Button
            isPopupActive={isPopupActive}
            key={`btn--${hb.id}`}
            text={hb.text}
            data-id={hb.id}
            aria-label={hb.text}
            classes={
              currentHotSpot && currentHotSpot == hb.id
                ? `hot-spot hot-spot--${hb.id} hotspot-btn label active`
                : visitedHotspotBtn.includes(hb.id)
                ? `hot-spot hot-spot--${hb.id} hotspot-btn label visited`
                : `hotspot-btn label hot-spot hot-spot--${hb.id}`
            }
            ariaPressed={
              visitedHotspotBtn.includes(hb.id) || currentHotSpot == hb.id
            }
            onClick={(e) => onClick(hb.id)}
            disabled={
              visitedHotspotBtn.includes(hb.id) ||
              selectedSubQuestion.nextBtn != hb.id
            }
          />
        );
      })}
    </div>
  );
};

export default draggable;
