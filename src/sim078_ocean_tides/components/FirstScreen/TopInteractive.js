import React from "react";
import Button from "../../../app/components/Button";
import "./style.scss";
import { getSimLanguage } from "../../../app/helpers";
const lang = getSimLanguage();

const TopInteractive = (props) => {
  const {
    onClick,
    lowTideText,
    highTideText,
    moonText,
    sunText,
    earthText,
    question,
    questions,
    isPopupActive,
    selectedHotspot,
    visitedHotspots,
    jumpToMCQScreenState,
  } = props;


  return (
 
    <>
      {jumpToMCQScreenState ? (
        <div className="top-static">
       
          {question.map((q) => {
        
            return (
              <div
                key={q.id}
                role="img"
                aria-label={q.imgAlt}
                className={q.imageClass}
                aria-hidden={q.id != selectedHotspot ? "true" : null}
                style={{ opacity: q.id == selectedHotspot ? "1" : "0" }}
            ><p aria-hidden="true" className={`moon${q.id} ${lang}`}>{moonText}</p>
             <p aria-hidden="true" className={`sun${q.id} ${lang} `}>{sunText}</p>
             <p aria-hidden="true" className={`earth${q.id} ${lang}`}>{earthText}</p>
            <p aria-hidden="true" className= {`tideText${q.id} ${lang} `}>{q.tideText}</p>
             <p aria-hidden="true" className = {`moonStage${q.id} ${lang} `}>{q.moonStage}</p>
             <p  aria-hidden="true" className = {`hightideText${q.id} ${lang} `}>{highTideText}</p>
            <p aria-hidden="true" className = {`lowtideText${q.id} ${lang} `}>{   lowTideText}</p>

              </div>
             
            );
          })}
        </div>
      ) : null}
      

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

                  <div 
                  key={a.id}className="hotspotarea">
                    <div className= {`line${a.id}  `}>
                      <span className={`dot${a.id}`}></span>
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
                      selectedHotspot ||
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
    </>
  );
};

export default TopInteractive;
