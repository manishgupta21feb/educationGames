import React, { useRef, useEffect, useState } from "react";
import AccessibleList from "../../containers/AccessibleList";
import PropTypes from "prop-types";
import "./style.scss";

const Droppable = (props) => {
  const ref = useRef(null);
  const [alt, setAlt] = useState("");
  const [currentDraggedItem, setCurrentDraggedItem] = useState(null);
  const {
    addItem,
    elementData,
    itemsDetail,
    matchedItems,
    showDropZone,
    droppableZones,
    hideDroppedItem,
    draggablesBurger,
    setHideDroppedItem,
  } = props;

  useEffect(() => {
    if (matchedItems.length) {
      const item = matchedItems[matchedItems.length - 1];
      const _item = elementData.find((i) => i.id == item);
      if (_item) {
        setAlt(_item.alt);
      }
      setCurrentDraggedItem(item);
    } else {
      setCurrentDraggedItem(null);
      setAlt("");
    }
  }, [matchedItems]);

  const dropInitializer = () => {
    if (ref.current) {
      const droppableContainer = ref.current.querySelectorAll(
        ".droppable-container .dropzone"
      );
      $(droppableContainer).droppable({
        accept: ".option",
        hoverClass: "hover",
        drop: function (ev, ui) {
          if (ui && ui.draggable && ui.draggable.length && ui.draggable[0]) {
            setHideDroppedItem(false);
            const source = ui.draggable[0].dataset.target;
            addItem(source);
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
    <div role="region" className="droppable-stage1">
      <div ref={ref} className="droppable-containers">
        {droppableZones.map((d) => {
          const _alt = currentDraggedItem && !hideDroppedItem ? alt : d.altText;
          return (
            <div
              data-target={d.target}
              key={`${d.name}-${d.target}`}
              className="droppable-container"
            >
              <div
                className={`dropzone ${
                  showDropZone && !hideDroppedItem ? "hover" : ""
                }`}
              >
                <div
                  role="img"
                  title={_alt}
                  style={{ clip: "unset" }}
                  className="sr-only sr-image"
                ></div>
                {currentDraggedItem && !hideDroppedItem ? (
                  <div className="dropped-item">
                    <div className={`img ${currentDraggedItem}`}></div>
                  </div>
                ) : null}
              </div>
              <div className="bg-image">
                {itemsDetail.map((item) => {
                  return currentDraggedItem === item.id && !hideDroppedItem ? (
                    <p
                      key={`itemdetails-${item.id}`}
                      className={`item-details ${
                        showDropZone && !hideDroppedItem ? "hover" : ""
                      }`}
                      aria-hidden="true"
                    >
                      {item.info.mass} {item.info.massUnit}
                    </p>
                  ) : null;
                })}
              </div>
            </div>
          );
        })}
        <AccessibleList />
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
