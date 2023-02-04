import React from "react";
import Button from "../../../app/components/Button";
import "./style.scss";

const TopInteractive = (props) => {
  const {
    onClick,
    questions,
    isPopupActive,
    selectedHotspot,
    visitedHotspots,
  } = props;

  return (
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
            <img className="sr-only sr-image" alt={q.altText} />
            {q.hotspots.map((a) => {
              return (
                <div key={a.serNo}>
                  <div className={`button-wrapper ${a.class} `}>
                    <div className={`bullet `}></div>
                    <div className={`dotted-line `}></div>
                  </div>
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
                    onClick={() => onClick(a.serNo)}
                  ></Button>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default TopInteractive;
