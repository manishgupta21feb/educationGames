import React, { useRef, useEffect } from "react";
import AccessibleList from "../../../containers/AccessibleList";
import "./droppable.scss";

const Droppable = (props) => {
  const { onDropElement, currentStrength, dropZones, draggableData } = props;
  const ref = useRef(null);
  const strengthLen = useRef(0);

  const droppablesRef = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    return () => (strengthLen.current = 0);
  });

  useEffect(() => {
    droppableInitializer(droppablesRef);
  }, []);

  useEffect(() => {
    strengthLen.current = currentStrength.length;
  }, [currentStrength]);

  const _onDropElement = (soil, _soil) => {
    onDropElement(soil, _soil);
  };

  const droppableInitializer = (item) => {
    item?.map((droppables) => {
      $(droppables.current).droppable({
        drop: function (evt, ui) {
          const { soil: _soil } = evt.target.dataset;
          const { soil } = ui.draggable[0].dataset;
          if (strengthLen.current >= 3) return;
          _onDropElement(soil, _soil);
        },
      });
    });
  };

  return (
    <div ref={ref} className="dropContainer">
      <AccessibleList />
      <div className="dropHolder" aria-hidden>
        {dropZones.map((dropElement, index) => {
          return draggableData[index].isDropped ? (
            <div className="replicaDrop" key={`replica${index}`}>
              <p>{dropElement.content}</p>
            </div>
          ) : (
            <div
              key={`dropaable${index}`}
              className={`droppable`}
              ref={droppablesRef[index]}
              data-index={index}
              data-title={dropElement.label}
              data-soil={dropElement.content}
            >
              <p className="sr-only">{dropElement.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Droppable;
