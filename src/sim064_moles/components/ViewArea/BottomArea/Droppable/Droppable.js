import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import AccessibleDnDList from "../../../../containers/AccessibleList";
const Droppable = (props) => {
  const {
    matchedItems,
    onDrop,
    count,

    question,
    droppableChangeState,
  } = props;

  const dropRef = useRef();
  const itemsRef = useRef(props.matchedItems);

  const [dropClass, setDropClass] = useState(true);

  useEffect(() => {
    if (dropRef) {
      const drop = dropRef.current.querySelectorAll(".drop");

      $(drop)
        .droppable({
          tolerance: "pointer",

          drop: (event, ui) => {
            const { dataset } = event.target;
            onDrop({ ...dataset });
          },
        })
        .droppable("enable");
    }
  }, [question]);

  useEffect(() => {
    if (itemsRef.current.length < matchedItems.length) {
      const item = { ...matchedItems[matchedItems.length - 1] };
      const dropBox = dropRef.current.querySelector(`.drop.${item.drop.id}`);

      droppableChangeState(item.drop.id, true, question);
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

          droppableChangeState(item.drop.id, true, question);
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
        if (item.drop.matched && item.drop.matched != "") {
          const dragBox = dropRef.current.querySelector(
            `.drop.${item.drop.id}`
          );

          dragBox ? droppableChangeState(dragBox.id, false, question) : null;
          $(dragBox).droppable("enable");
        }
      }
    }

    itemsRef.current = matchedItems;
  });

  return (
    <div className="container" ref={dropRef} aria-hidden>
      {Object.keys(question).length
        ? question.dropZone.map((ele, idx) => {
            const item = matchedItems.filter((m) => m.drop.id == ele.id);

            const incorrect =
              item &&
              item[0] &&
              item[0].drop &&
              item[0].drop.matched == "incorrect"
                ? "redcolor"
                : "";
            const classes = ele.isStatic
              ? ele.classes
              : `drop ${ele.classes} ${ele.id}`;
            return (
              <div
                id={ele.id}
                key={ele.id}
                data-id={ele.id}
                className={`${classes} ${incorrect} `}
                data-label={ele.label}
                data-answer-id={ele.answerId}
              >
                <p className="sr-only"></p>
                {ele.value ? null : (
                  <p
                    className="span-border"
                    dangerouslySetInnerHTML={{
                      __html: matchedItems

                        ?.filter((item, idx) => {
                          return ele.id == item.drop.id;
                        })
                        .map((items) => {
                          return items.drag.value;
                        }),
                    }}
                  ></p>
                )}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Droppable;
