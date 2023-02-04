import PropTypes from "prop-types";
import React, { useRef, useEffect } from "react";
import DropZoneTab from "../../containers/DropZoneTab";
import "./style.scss";

const Droppable = (props) => {
  const ref = useRef(null);
  const {
    addItem,
    matchedItems,
    droppableZones,
    updateDroppedAt,
    accessibleListVisible,
  } = props;

  const dropInitializer = () => {
    if (ref.current) {
      const droppableContainer = ref.current.querySelectorAll(
        ".droppable-container"
      );
      $(droppableContainer).droppable({
        accept: ".option",
        hoverClass: "hover",
        drop: function (ev, ui) {
          if (ui && ui.draggable && ui.draggable.length && ui.draggable[0]) {
            const target = $(this).data("target");
            addItem({ target });
          }
        },
      });
    }
  };

  useEffect(() => {
    setTimeout(() => {
      dropInitializer();
    }, 100);
  }, []);

  return (
    <div className="droppable-stage1">
      <div
        ref={ref}
        className="droppable-containers"
        aria-hidden={accessibleListVisible}
      >
        {droppableZones.map((d) => {
          return (
            <div
              data-target={d.target}
              key={`${d.name}-${d.target}`}
              className="droppable-container"
            >
              <DropZoneTab
                heading={d.heading}
                headingAlt={d.altText}
                items={matchedItems[d.target]}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

Droppable.propTypes = {
  data: PropTypes.object.isRequired,
  dropElement: PropTypes.object.isRequired,
  accessibleListVisible: PropTypes.bool.isRequired,
};

export default Droppable;
