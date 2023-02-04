import React from 'react';
import Button from '../../../app/components/Button';

const MainScreen = (props) => {

  const {
    objectHotspot,
    onClick,
    visitedHotspots,
    selectedHotspot,
    isPopupActive
  } = props;

  return (
    <>
      <div 
        className="top-interactive"
        style={{
          visibility: selectedHotspot ? "hidden" : "visible",
        }}
        aria-hidden={!!selectedHotspot || isPopupActive || null}
      >
        {objectHotspot.map((o) =>
          <div
            className={o.className}
            key={o.id}
            style={{ opacity: selectedHotspot ? "0" : "1" }}
            aria-hidden={!!selectedHotspot || isPopupActive || null}
          >
            <img className="sr-only sr-image" alt={o.altText} />
            {o.hotspots.map((h) =>
              <div key={h.id}>
                <div className={`bullet-line-wrapper ${h.id} `}>
                  <div className='bullet'></div>
                  <div className='dotted-line'></div>
                </div>
                <Button
                  classes={`hotspot-btn label ${visitedHotspots.indexOf(h.serNo) >= 0 ? "visited" : ""}`}
                  key={h.serNo}
                  id={h.id}
                  text={h.text}
                  disabled={
                    isPopupActive ||
                    !!selectedHotspot ||
                    visitedHotspots.indexOf(h.serNo) >= 0
                  }
                  ariaHidden={isPopupActive || !!selectedHotspot || null}
                  onClick={() => onClick(h.serNo)}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default MainScreen;