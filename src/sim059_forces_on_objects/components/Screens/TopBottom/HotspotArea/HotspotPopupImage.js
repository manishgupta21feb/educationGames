import React from "react";
import "./style.scss";

const HotspotImagePopup = (props) => {
  const { selectedHotspot, hotspots } = props
  return (
      <>
        {Array.isArray(hotspots) && hotspots.map((n) => {
          const selected = selectedHotspot.id == n.id ? "show" : "";
          return (
            <div key={`zoom-${n.id}`} className={`zoomView ${selected}`}>
              <div className={`triangle ${n.id}`}></div>
              <div
                role="img"
                aria-label={n.imgAlt}
                aria-hidden={selected ? false : true}
                className={`zoom ${n.id}`}
              ></div>
            </div>

          );
        })}
      </>
  )
}


export default HotspotImagePopup;