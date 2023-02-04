import React, { useEffect, useRef } from "react";
import "./style.scss";
import Button from "../../../../../app/components/Button";
import HotspotImgZoom from "../../../../containers/HotspotImgPopupContainer";
import VideoArea from "../../../../containers/VideoContainer"
import Direction from "../../../../containers/DirectionContainer";
const HotspotArea = (props) => {
    const ref = useRef(null);
    const selectedHotspotRef = useRef("");
    const { helpPopupText,
        hotspots,
        selectedHotspot,
        isPopupActive,
        onClick,
        moveToAnimation,
        visitedHotspot,
        bgAltText,
        isTravserHotspot } = props;

    
  useEffect(() => {
    if (selectedHotspotRef.current && selectedHotspot == "") {
      if (ref && ref.current) {
        ((element) => {
          setTimeout(() => {
            if (element) {
              const button = ref.current.querySelector(`button#${element}`);
              if (button) {
                button.focus();
              }
            }
          });
        })(selectedHotspotRef.current);
      }
    }
    selectedHotspotRef.current = selectedHotspot;
  }, [selectedHotspot]);

    return (
        <div className="activity-area" key={selectedHotspotRef.current ? "act" : "inact"}>
        <h1 className="sr-only">{helpPopupText}</h1>

            {visitedHotspot.length > 0 ? <Direction /> : null}
             {moveToAnimation ? <VideoArea /> :
             
                    <div className="hotspot-area" ref={ref}>
                        <img className="sr-only sr-image" alt={visitedHotspot.length==0?bgAltText:selectedHotspot.imgBgAlt} />
                        {hotspots.map((m) => {
                            const selected = selectedHotspot.id == m.id;
                            const hotspotGlowClasses = `icon icon-only glowing-hotspot ${m.id} ${selected ? "selected" : ""
                                }`;
                            return (
                                <React.Fragment key={`${m.id}`}>
                                    <div className={`hotspot-btn-wrapper ${m.id}`}>
                                        <Button
                                            id={m.id}
                                            ariaPressed={selected}
                                            classes={hotspotGlowClasses}
                                            disabled={isPopupActive || selectedHotspot.travserId == isTravserHotspot && m.travserId != 1}
                                            ariaLable={m.ariaLabel}
                                            onClick={() => {
                                                if(!selected){
                                                    onClick(m.id)

                                                }
                                            }}
                                            isPopupActive={isPopupActive}
                                        ></Button>
                                    </div>

                                    {selectedHotspot && selectedHotspot.id == m.id ? (
                                        <HotspotImgZoom />
                                    ) : null}
                                </React.Fragment>
                            )
                        })}
                    </div>
              
            }
        </div>

    )
}

export default HotspotArea