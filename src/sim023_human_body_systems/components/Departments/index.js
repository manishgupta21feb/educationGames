import React from "react";
import Button from "../common/HotspotBtn";
import "./style.scss";

export default (props) => {
  const { data, onClick, selectedHotspot, isPopupActive } = props;

  return (
    <div
      className={`department ${data.id}`}
      key={selectedHotspot ? selectedHotspot.id : null}
    >
      <img
        className="sr-only sr-image"
        alt={selectedHotspot ? selectedHotspot.alt : data.alt}
      />
      {data.diagramLabel ? (
        <div aria-hidden className="dig-label">
          <p>{data.diagramLabel[0]}</p>
          <p>{data.diagramLabel[1]}</p>
        </div>
      ) : null}
      {!selectedHotspot ? (
        data.hotspots.map((hotspot) => {
          return (
            <div className={hotspot.id} key={hotspot.id}>
              <div className="btnWrapper">
                <div className="line"></div>
                {data.id === "endocrinology" ? (
                  <div className="line-one"></div>
                ) : null}
                <Button
                  id={hotspot.id}
                  text={hotspot.name}
                  isPopupActive={isPopupActive}
                  classes={` icon-only glowing-hotspot`}
                  onClick={(e) => onClick(hotspot.id)}
                />
              </div>
              <p>{hotspot.name}</p>
            </div>
          );
        })
      ) : !selectedHotspot.visualType ? (
        <div className={`empty-label ${selectedHotspot.id}`}>
          <p>{selectedHotspot.name}</p>
          <div className="line"></div>
        </div>
      ) : null}

      {selectedHotspot && selectedHotspot.visualType === "image" ? (
        <div aria-hidden className={selectedHotspot.id + "-zoom"}>
          {selectedHotspot.labels && selectedHotspot.labels.length
            ? selectedHotspot.labels.map((l) => (
                <div key={l.id} aria-hidden className={`hotspot-label ${l.id}`}>
                  <div className="line"></div>
                  <p className="label">{l.name}</p>
                </div>
              ))
            : null}
        </div>
      ) : null}
    </div>
  );
};
