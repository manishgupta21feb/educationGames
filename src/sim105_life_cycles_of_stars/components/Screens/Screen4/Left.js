import React, { useEffect, useRef } from "react";
import AccessibleList from "../../../containers/AccessibleList";

const Left = (props) => {
  const ref = useRef(null);
  const { onDrop, hotspots, graphAxes, dropzones, hertzsprungRussellImageAlt } =
    props;

  const createDraggable = (elements) => {
    $(elements).droppable({
      drop: (event, ui) => {
        const { accept } = event.target.dataset;
        onDrop(accept);
      },
    });
  };

  useEffect(() => {
    const dropzones = ref.current.querySelectorAll(
      ".dropzone-wrapper .dropzone"
    );
    if (dropzones && dropzones.length) {
      createDraggable(dropzones);
    }
  }, []);

  return (
    <div ref={ref} className="left-wrapper">
      <div className="hertzsprung-russell-diagram">
        <img className="sr-only sr-image" alt={hertzsprungRussellImageAlt} />
        <AccessibleList />
        <div className="dropzones">
          {dropzones.map((d) => {
            return (
              <div
                key={`dropzone-wrapper-screen4${d.id}`}
                className={`dropzone-wrapper ${d.id} ${d.hidden ? "hide" : ""}`}
              >
                <div className="dropzone" data-accept={d.id}></div>
              </div>
            );
          })}
        </div>
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
        <div   aria-hidden="true" className="graph x-axis">
          {graphAxes.xAxis.map((item) => {
            return <p key={item.id}>{item.text}</p>;
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
