import React, { useEffect, useRef } from "react";
import Button from "../../../../app/components/Button";

const Left = (props) => {
  const {
    hotspots,
    graphAxes,
    selectHotspot,
    selectedHotspot,
    hertzsprungRussellImageAlt,
  } = props;
  const ref = useRef(null);
  const selectedHotspotRef = useRef(selectedHotspot);

  const _onClick = (e, id) => {
    selectHotspot(id);
  };

  useEffect(() => {
    if (!selectedHotspot && selectedHotspotRef.current) {
      const button = ref.current.querySelector(
        `.hotspot-wrapper.${selectedHotspotRef.current} button`
      );
      if (button) {
        button.focus();
      }
    }
    selectedHotspotRef.current = selectedHotspot;
  }, [selectedHotspot]);

  return (
    <div ref={ref} className="left-wrapper">
      <div className="hertzsprung-russell-diagram">
        <img className="sr-only sr-image" alt={hertzsprungRussellImageAlt} />
        {hotspots.map((hotspot) => {
          return (
            <div
              key={`hotspot-${hotspot.id}`}
              className={`hotspot-wrapper ${hotspot.id}`}
            >
              <Button
                label={hotspot.text}
                onClick={(e) => _onClick(e, hotspot.id)}
                classes={`icon icon-only glowing-hotspot`}
                ariaPressed={hotspot.id == selectedHotspot}
                key={selectedHotspot ? "active" : "inactive"}
              />
            </div>
          );
        })}
        {hotspots.map((hotspot) => {
          return (
            <div
              key={`hotspot-${hotspot.id}`}
              className={`label-wrapper opensans-label ${hotspot.id}`}
            >
              <p aria-hidden>{hotspot.text}</p>
            </div>
          );
        })}
        <div  aria-hidden="true" className="graph x-axis">
          {graphAxes.xAxis.map((item) => {
            return <p   key={item.id}>{item.text}</p>;
          })}
        </div>
        <div  aria-hidden="true" className="graph y-axis">
          {graphAxes.yAxis.map((item) => {
            return <p key={item.id}>{item.text}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Left;
