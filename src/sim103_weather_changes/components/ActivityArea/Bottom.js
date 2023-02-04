import React, { useRef, useEffect } from "react";

const Bottom = (props) => {
  const ref = useRef(null);
  const {
    item,
    index,
    onDrop,
    isShow,
    selectedDay,
    seasonsSequence,
    selectedDraggable,
  } = props;

  useEffect(() => {
    if (ref.current) {
      const droppableContainer = ref.current.querySelectorAll(".drop_img");
      $(droppableContainer).droppable({
        classes: { "ui-droppable-hover": "setBlueHoverColor" },
        tolerance: "pointer", //Mouse pointer overlaps the droppable.
        drop: function (e, u) {
          if (u?.helper[0]?.dataset && e?.target.dataset) {
            const target = e.target.dataset;
            onDrop({ ...target });
          }
        },
      });
    }
  }, [selectedDraggable]);

  return (
    <div
      className="bottomContainer"
      aria-hidden={item.visited || selectedDay == item.id ? false : true}
    >
      <div ref={ref} className="droppable-containers">
        <div
          key={`bottom-wrapper${index}`}
          className={`bottom-wrapper  wrapper_${index} ${seasonsSequence}`}
        >
          <div
            className={`day_img ${item.name} ${
              item.visited || selectedDay == item.id ? "showImg" : ""
            }`}
          >
            <img
            
              className={`sr-only day_img ${item.name}`}
              alt={item.alt[seasonsSequence]}
            />
          </div>
          {item.visited ? (
            <>
              <img
                alt={item.afterDrop[seasonsSequence]}
                className={`sr-only dropped_img`}
              />
              <div className={`dropped_img ${item.id}`}></div>
            </>
          ) : (
            <>
              <div   className="sr-only drop_img">
              <span className="sr-only">{item.label}</span>
              </div>
              <div
                data-id={item.id}
                style={{ display: selectedDay == item.id ? "block" : "none" }}
                className={`drop_img ${seasonsSequence} drop_img_${index} ${isShow}`}
              ></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bottom;
