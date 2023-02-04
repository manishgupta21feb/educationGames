import React, { useEffect, useRef } from "react";
import AccessibleList from "../../containers/AccessibleList";
import "./style.scss";

const LeftArea = (props) => {
  const {
    dropZone,
    matchedItems,
    onDrop,
    arrows,
    holdSingleDrag,
    droppableChangeState,
    submitButtonState,
    accessibleListVisible,
  } = props;

  const dropRef = useRef();
  const itemsRef = useRef(props.matchedItems);

  useEffect(() => {
    const drop = dropRef.current.querySelectorAll(".drop");

    $(drop).droppable({
      tolerance: "pointer",

      drop: (event, ui) => {
        const { dataset } = event.target;
        onDrop({ ...dataset });
      },
    });
  }, []);

  useEffect(() => {
    if (itemsRef.current.length < matchedItems.length) {
      const item = { ...matchedItems[matchedItems.length - 1] };
      const dropBox = dropRef.current.querySelector(`.drop.${item.drop.id}`);

      droppableChangeState(item.drop.id, true);
      $(dropBox).droppable("disable");
    } else if (
      itemsRef.current.length == matchedItems.length &&
      matchedItems.length > 0
    ) {
      for (let item of matchedItems) {
        if (item.drop) {
          const dropBox = dropRef.current.querySelector(
            `.drop.${item.drop.id}`
          );

          droppableChangeState(item.drop.id, true);
          $(dropBox).droppable("disable");
        }
      }
    } else {
      const filterDragItem = itemsRef.current.filter((ele) => {
        return (
          matchedItems?.findIndex((m) => {
            m.drop.id == ele.drop.id;
          }) == -1
        );
      });

      for (let item of filterDragItem) {
        const dragBox = dropRef.current.querySelector(`.drop.${item.drop.id}`);

        dragBox ? droppableChangeState(dragBox.id, false) : null;
        $(dragBox).droppable("enable");
      }
    }

    itemsRef.current = matchedItems;
  });

  return (
    <div className="left-area-container" ref={dropRef}>
      {arrows.map((arrow) => {
        return <div aria-hidden className={arrow.clsName} key={arrow.id}></div>;
      })}
      <AccessibleList />
      {dropZone.map((ele) => {
        const matchedFilter = matchedItems.filter((item, idx) => {
          return ele.id == item.drop.id;
        });

        if (!submitButtonState) {
          holdSingleDrag.length && holdSingleDrag
            ? matchedFilter.push(holdSingleDrag[0])
            : null;
        }

        return (
          <div
            className={`drop--${ele.id}`}
            key={`top-container${ele.id}`}
            aria-hidden={accessibleListVisible}
          >
            <p className="sr-only">
              {matchedFilter.length &&
              matchedFilter.find((m) => m.drop && m.drop.id == ele.id)
                ? ele.beforeDropTxt + matchedFilter[0].drag.label
                : ele.beforeDropTxt}
            </p>

            <div
              id={ele.id}
              key={`main-div${ele.id}`}
              data-id={ele.id}
              className={`drop ${ele.id}`}
              data-label={ele.beforeDropTxt}
              data-answer-id={ele.answerId}
              aria-hidden={accessibleListVisible}
            >
              {matchedFilter.map((items) => {
                if (items.drop.id == ele.id) {
                  return (
                    <React.Fragment>
                      <div
                        aria-hidden
                        key={`img${items.drag.id}`}
                        className={`dropzone-img dropzone-img--${items.drag.id}`}
                      ></div>
                    </React.Fragment>
                  );
                }
              })}
            </div>
            {matchedFilter.map((items) => {
              if (items.drop.id == ele.id) {
                return (
                  <label
                    key={`label--${items.drag.id}`}
                    aria-hidden
                    className={`label-${items.drag.id}`}
                    dangerouslySetInnerHTML={{
                      __html: items.drag.label.replace("<br/>", ""),
                    }}
                  ></label>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default LeftArea;
