import React, { useRef, useEffect, useState } from "react";
import AccessibleList from "../../containers/AccessibleList";
import "./droppable.scss";

const Droppable = (props) => {
  const { onDropElement, currentStrength, updatedLabel } = props;
  const ref = useRef(null);
  const droppedItemsRef = useRef(props.getDroppedItems);

  const strengthLen = useRef(0);

  const droppablesRef = useRef(null);

  useEffect(() => {
    return () => (strengthLen.current = 0);
  });

  useEffect(() => {
    droppableInitializer();
  }, []);

  useEffect(() => {
    strengthLen.current = currentStrength.length;
  }, [currentStrength]);

  const _onDropElement = (num) => {
    onDropElement(num);
  };

  const droppableInitializer = () => {
    $(droppablesRef.current).droppable({
      drop: function (evt, ui) {
        const { strength } = ui.draggable[0].dataset;
        if (strengthLen.current >= 3) return;
        _onDropElement(parseInt(strength));
      },
    });
  };

  return (
    <div ref={ref} className="dropContainer">
      <AccessibleList />
      <div className={`droppable`} ref={droppablesRef}>
        <p className="sr-only">{updatedLabel}</p>
      </div>
    </div>
  );
};

export default Droppable;
