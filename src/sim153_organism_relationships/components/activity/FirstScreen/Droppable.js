import React, { useRef, useEffect } from "react";
import AccessibleList from "../../../containers/AccessibleList";

const Droppable = (props) => {
  const ref = useRef(null);
  const {
    droppableItems,
    onDrop,
    isPopupActive,
  } = props;
  
  const createDroppables = (elements) => {
    $(elements).droppable({
      drop: function (event, ui) {
        const {
          dataset: { id },
        } = event.target;
        onDrop(id);
      },
    });
  };

  useEffect(() => {
    if (ref.current) {
      const elements = ref.current.querySelectorAll(".dropzones"); 
      if (elements) {
        createDroppables(elements);
      }
    }
  }, []);

  return (
    <div className="droppables" aria-hidden={isPopupActive}>
      <AccessibleList />
      <div className="droppables-wrapper" aria-hidden={isPopupActive} ref={ref}>
        <div
          data-id={droppableItems.id}
          aria-hidden={isPopupActive}
          key={`droppable-${droppableItems.id}`}
          className={`dropzones  ${droppableItems.id}`}
        ></div>
      </div>
    </div>
  );
};

export default Droppable;
