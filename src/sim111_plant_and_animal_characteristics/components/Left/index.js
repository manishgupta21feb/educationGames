import "./style.scss";
import React, { useEffect, useRef, useState } from "react";
import AccessibleDnDList from "../../../app/components/AccessibleList";
const LeftArea = (props) => {
  const ref = useRef(null);
  const {
    dropItem,
    dropzones,
    currentPopup,
    buttonLabels,
    isAccessible,
    droppedItems,
    setAccessible,
    selectDraggable,
    isSecondScreenEnable,
    monkeyDropzones,
    flag,
    selectedDraggable,
    activityCompleted,
    firstActivityCompleted,
    treeDroppableImgAria,
    menkeyDroppableImgAria,
    monekyFinalImageAria,
    treeFinalImageAria,
    leftImgAria,
  } = props;

  const dropRef = useRef(dropzones);
  const [temp, setTemp] = useState(null);

  useEffect(() => {
    if (!isAccessible) {
      selectDraggable(null);
    }
  }, [isAccessible]);

  const createDroppable = (domElements) => {
    $(domElements).droppable({
      tolerance: "pointer",
      greedy: "true",
      drop: (event, ui) => {
        if (flag.current && droppedItems.indexOf(flag.current.id) >= 0) {
          flag.current = null;
        }
        if (flag.current) {
          return;
        }

        const { id } = event.target.dataset;
        const item = dropzones.filter((d) => d.id == id)[0];
        dropItem({ ...item });
        flag.current = { ...selectedDraggable };
      },
      over: (event, ui) => {
        setTemp(event.target.dataset.id);
      },
      out: (event, ui) => {
        setTemp(null);
      },
    });
  };

  useEffect(() => {
    const dropZones = ref.current.querySelectorAll(".dropzone-label");
    createDroppable(dropZones);
  }, []);

  useEffect(() => {
    if (dropzones !== dropRef.current) {
      const length1 = dropzones.filter((d) => d.hidden).length;
      const length2 = dropRef.current.filter((d) => d.hidden).length;
      if (length1 > length2) {
        if (ref.current) {
          for (let item of dropzones) {
            const element = ref.current.querySelector(
              `.left-area .label-${item.id}`
            );
            if (element) {
              const state = item.hidden ? "disable" : "enable";
              $(element).droppable(state);
            }
          }
        }
      } else if (length1 < length2) {
        const dropZones = ref.current.querySelectorAll(".dropzone-label");
        createDroppable(dropZones);
      }
    }
    dropRef.current = dropzones;
  }, [dropzones]);

  useEffect(() => {
    if (temp == null) {
    } else {
      const items = ref.current.querySelectorAll(".dropzone-label");
      if (items && items.length) {
        for (let item of items) {
          item.classList.remove("temp");
        }
      }
      const currentItem = ref.current.querySelector(
        `.dropzone-label[data-id="${temp}"]`
      );
      if (currentItem) {
        currentItem.classList.add("temp");
      }
    }
  }, [temp]);

  return (
    <div
      ref={ref}
      className={
        "left-area " + (!isSecondScreenEnable ? "left-area-treeBG" : "")
      }
    >
      {activityCompleted || firstActivityCompleted ? (
        <>
          {activityCompleted ? (
            <div className="bg-dropzone">
              <div
                className="monkey-final-img"
                role="img"
                aria-label={monekyFinalImageAria}
              ></div>
            </div>
          ) : null}
          {firstActivityCompleted ? (
            <div className="bg-dropzone">
              <div
                className="tree-final-img"
                role="img"
                aria-label={treeFinalImageAria}
              ></div>
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div aria-hidden className={"bg-dropzone"}>
            <div
              className={isSecondScreenEnable ? "moneky-bg" : "tree-bg"}
            ></div>
          </div>

          <AccessibleDnDList
            onClick={dropItem}
            opened={isAccessible}
            list={dropzones}
            classes={`label-${dropzones.id}`}
            closeList={() => setAccessible(false)}
            label={dropzones.label}
          />
          <div
            role="img"
            className="sr-only sr-image"
            aria-label={leftImgAria}
          ></div>

          {dropzones.map((dropzone) => {
            return (
              <div
                key={`label-${dropzone.id}`}
                className={`dropzone-label label-${dropzone.id}`}
                data-id={dropzone.id}
              >
                <div
                  className={`dropzone_${dropzone.id}`}
                  data-id={dropzone.id}
                  data-target={dropzone.target}
                ></div>
              </div>
            );
          })}

          {dropzones
            .filter((d) => droppedItems.indexOf(d.id) >= 0)
            .map((d) => {
              return (
                <div
                  key={`sr-only${d.id}`}
                  className={`dropped-item-label ${d.id}`}
                ></div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default LeftArea;
