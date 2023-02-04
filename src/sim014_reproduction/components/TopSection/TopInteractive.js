import React from "react";
import Button from "../../../app/components/Button";
import "./style.scss";

const TopInteractive = (props) => {
  const {
    onClick,
    question,
    questions,
    isPopupActive,
    selectedHotspot,
    visitedHotspots,
    jumpToMCQScreenState,
  } = props;
  return (
    <>
      <div className="top-static">
        {question.map((q) => {
          return (
            <div
              role="img"
              key={q.id}
              aria-label={q.imageAlt}
              className={q.imageClass}
              aria-hidden={q.id != selectedHotspot ? "true" : null}
              style={{ opacity: q.id == selectedHotspot ? "1" : "0" }}
            ></div>
          );
        })}
      </div>
      <div
        className="top-interactive"
        style={{
          visibility: selectedHotspot ? "hidden" : "visible",
        }}
        aria-hidden={!!selectedHotspot || isPopupActive || null}
      >
        {questions.map((q) => {
          return (
            <div
              key={q.id}
              className={`${q.className} `}
              style={{ opacity: selectedHotspot ? "0" : "1" }}
              aria-hidden={!!selectedHotspot || isPopupActive || null}
            >
              <img className="sr-only sr-image" title={q.altText} />
              {q.hotspots.map((a) => {
                return (
                  <Button
                    classes={`hotspot-btn label ${
                      visitedHotspots.indexOf(a.serNo) >= 0 ? "visited" : ""
                    }`}
                    id={a.id}
                    key={a.serNo}
                    text={a.text}
                    label={a.altText}
                    isPopupActive={selectedHotspot || isPopupActive}
                    ariaHidden={isPopupActive || !!selectedHotspot || null}
                    disabled={
                      isPopupActive ||
                      !!selectedHotspot ||
                      visitedHotspots.indexOf(a.serNo) >= 0
                    }
                    onClick={() =>
                      onClick(a.serNo, selectedHotspot.indexOf(a.serNo) >= 0)
                    }
                  ></Button>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TopInteractive;
