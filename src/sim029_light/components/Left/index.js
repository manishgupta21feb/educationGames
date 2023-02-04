import "./style.scss";
import React, { useEffect, useRef, useState } from "react";
import AccessibleDnDList from "../../../app/components/AccessibleList";

const LeftArea = (props) => {
  const ref = useRef(null);
  const popupRef = useRef(props.currentPopup);
  const [imageAlt, setImageAlt] = useState("");
  const {
    dropItem,
    dropzones,
    currentPopup,
    buttonLabels,
    isAccessible,
    droppedItems,
    setAccessible,
    activeDropzone,
    selectDraggable,
  } = props;

  const [a11yDropzoneList, setA11yDropzoneList] = useState([]);

  const disableDroppable = (element) => {
    $(element).droppable("disable");
  };

  const createDroppable = (element) => {
    $(element).droppable({
      tolerance: "touch",
      drop: (ev, ui) => {
        const { id } = ev.target.dataset;
        const item = dropzones.filter((d) => d.id == id)[0];
        dropItem({ ...item });
        ui.helper[0].style.display = "none";
      },
    });
  };

  useEffect(() => {
    if (!isAccessible) {
      selectDraggable(null);
    }
  }, [isAccessible]);

  useEffect(() => {
    if (
      (popupRef.current.indexOf(3) >= 0 || popupRef.current.indexOf(4) >= 0) &&
      currentPopup.indexOf(1) >= 0
    ) {
      const droppable = ref.current.querySelectorAll(
        `.dropzone-label .dropzone.ui-droppable`
      );
      $(droppable).droppable("destroy");
      setTimeout(() => {
        const item = dropzones.filter((d) => d.id == activeDropzone)[0];
        const droppable = ref.current.querySelector(
          `.dropzone-label.label-${dropzones[0].id} .dropzone`
        );
        if (droppable) {
          createDroppable(droppable);
        }
        setImageAlt(`${item.alt}`);
      }, 100);
    }
    popupRef.current = currentPopup;
  }, [currentPopup]);

  useEffect(() => {
    if (activeDropzone) {
      const dropzone = dropzones.filter(
        (dropzone) => dropzone.id == activeDropzone
      );
      setImageAlt(`${dropzone[0].alt}`);
      if (droppedItems.length < 4) {
        setA11yDropzoneList([{ ...dropzone[0] }]);
      } else {
        setA11yDropzoneList(null);
      }
      const droppable = ref.current.querySelector(
        `.dropzone-label .dropzone.ui-droppable`
      );
      if (droppable) {
        disableDroppable(droppable);
      }
      setTimeout(() => {
        const droppable = ref.current.querySelector(
          `.dropzone-label.label-${activeDropzone} .dropzone`
        );
        if (droppable) {
          createDroppable(droppable);
        }
      });
    }
  }, [activeDropzone]);

  return (
    <div ref={ref} className="left-area">
      <img className="sr-only sr-image" alt={imageAlt} />
      {dropzones.map((dropzone) => {
        return (
          <div
            aria-hidden
            key={`bg-${dropzone.id}`}
            className={`bg-dropzone bg-${dropzone.id}`}
            style={{ opacity: activeDropzone == dropzone.id ? 1 : 0 }}
          />
        );
      })}
      <p className="start-label">{buttonLabels.start}</p>
      {dropzones
        .filter((d) => droppedItems.indexOf(d.id) >= 0)
        .map((d) => {
          return (
            <p
              key={`sr-only${d.id}`}
              className={`dropped-item-label sr-only ${d.id}`}
            >
              {d.ariaLabelMatched}
            </p>
          );
        })}
      {dropzones
        .filter((dropzone) => droppedItems.indexOf(dropzone.id) == -1)
        .map((dropzone) => {
          return (
            <div
              key={`label-${dropzone.id}`}
              className={`dropzone-label label-${dropzone.id}`}
            >
              <div
                className="dropzone"
                data-id={dropzone.id}
                data-target={dropzone.target}
              ></div>
              <p aria-hidden={dropzone.id !== activeDropzone}>
                <span aria-hidden>{dropzone.target}</span>
                <span className="sr-only">{dropzone.label}</span>
              </p>
            </div>
          );
        })}
      <p className="finish-label">{buttonLabels.finish}</p>
      {a11yDropzoneList ? (
        <AccessibleDnDList
          onClick={dropItem}
          opened={isAccessible}
          list={a11yDropzoneList}
          classes={activeDropzone}
          closeList={() => setAccessible(false)}
        />
      ) : null}
    </div>
  );
};

export default LeftArea;
