import React, { useRef, useEffect } from "react";
import AccessibleList from "../../../containers/AccessibleList";

const Droppable = (props) => {
  const ref = useRef(null);
  const { droppableItems, onDrop, isPopupActive } = props;
  const droppableItemsRef = useRef([...droppableItems]);

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
      if (elements && elements.length) {
        createDroppables(elements);
      }
    }
  }, []);

  useEffect(() => {
    if (droppableItems !== droppableItemsRef.current) {
      const length1 = droppableItems.filter((e) => e.hidden).length;
      const length2 = droppableItemsRef.current.filter((e) => e.hidden).length;

      if (length1 > length2) {
        for (let item of droppableItems) {
          const element = ref.current.querySelector(
            `.droppables-wrapper .${item.id}`
          );
          if (element && item.hidden) {
            $(element).droppable("disable");
          }
        }
      } else if (length1 < length2) {
        if (ref.current) {
          const elements = ref.current.querySelectorAll(".dropzones");
          if (elements && elements.length) {
            createDroppables(elements);
          }
        }
      }
    }
    droppableItemsRef.current = droppableItems;
  }, [droppableItems]);

  return (
    <div className="droppables" aria-hidden={isPopupActive}>
      <AccessibleList />
      <div className="droppables-wrapper" aria-hidden={isPopupActive} ref={ref}>
        {droppableItems.map((items) => {
          return (
            <div
              data-id={items.id}
              aria-hidden={isPopupActive}
              key={`droppable-${items.id}`}
              className={`dropzones  ${items.id} ${
                !items.hidden ? "no-drop" : ""
              }`}
            >
              <div
                aria-hidden={isPopupActive}
                className={`dropped-objects ${items.hidden ? items.class : ""}`}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Droppable;
