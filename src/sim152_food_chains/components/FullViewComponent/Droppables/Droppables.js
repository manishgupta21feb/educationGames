import React, { useRef, useEffect } from "react";
import data from "../../../data/data.en";
import AccessibleList from "../../../containers/AccessibleList";

import "./style.scss";

const Droppables = (props) => {
  const ref = useRef(null);
  const { items, onDrop, dropIds, selectedDraggable } = props;

  useEffect(() => {
    if (ref.current) {
      const droppables = ref.current.querySelectorAll(".dropzones");
      if (droppables && droppables.length) {
        $(droppables).droppable({
          drop: (ev, ui) => {
            ui.helper[0].style.display = "none";
            const id = ui.helper[0].dataset.id;
            const label = ui.helper[0].dataset.label;
            const dropppableId = ev.target.dataset.id;
            const dataset = { drag: id, label: label, id: dropppableId };
            onDrop(dataset);
          },
        });
      }
    }
  }, []);

  useEffect(() => {
    for (let item of items) {
      const booleanValue = dropIds.indexOf(item.id) > -1;
      const droppableState = booleanValue ? "disable" : "enable";
      const _droppable = ref.current.querySelector(`.dropzones.${item.id}`);
      if (_droppable) {
        $(_droppable).droppable(droppableState);
      }
    }
  }, [selectedDraggable]);

  return (
    <div className="droppables-wrapper" ref={ref}>
      <AccessibleList />
      {items.map((item, index) => {
        const check = dropIds.indexOf(item.id) > -1;
        const image = item.dragType;
        // console.log("check", check, dropIds);
        return (
          <React.Fragment key={item.id}>
            <div
              id={item.id}
              key={`${item.id}${index}`}
              className={`dropzones ${item.id} ${
                image ? "white-background" : ""
              }`}
              data-id={item.id}
              data-alt={item.altText}
              disabled={check}
            >
              {data.draggables.map((i, index) => {
                return (
                  <div
                    key={i.id}
                    // className="droppable"
                    className={`images ${image}`}
                    style={{
                      opacity: item.dragType == i.id ? "1" : "0",
                    }}
                  ></div>
                );
              })}
              <p className="sr-only">{`${item.label} ${
                image ? `${image} ${data.droppedText}` : ""
              }`}</p>
            </div>
            <div className={`arrow${item.srNo} arrow arrow-head`}>
              <div className="arrow-tail"></div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Droppables;
