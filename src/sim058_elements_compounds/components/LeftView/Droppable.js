import React, { useEffect, useRef, useState } from "react";
import AccessibleDnDList from "../../containers/AccessibleList";

import "./style.scss";

export default (props) => {
  const dropRef = useRef();
  const itemsRef = useRef(props.matchedItems);
  const {
    onDrop,
    dropzones,
    data,
    matchedItems,
    droppableChangeState,
    list,
    accessibleListVisible,
  } = props;

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
    } else {
      const filterDragItem = itemsRef.current.filter((ele) => {
        return matchedItems.findIndex((m) => m.drop.id == ele.drop.id) == -1;
      });
      for (let item of filterDragItem) {
        const dragBox = dropRef.current.querySelector(`.drop.${item.drop.id}`);

        droppableChangeState(dragBox.id, false);
        $(dragBox).droppable("enable");
      }
    }
    itemsRef.current = matchedItems;
  }, [matchedItems]);

  return (
    <div className="main" ref={dropRef}>
      <div
        role="img"
        className="sr-only sr-image"
        aria-label={data.dndLeftAltText}
      ></div>

      <div className="container" aria-hidden>
        <div className="box box--left"></div>
        <div className="box box--mid"></div>
        <div className="box box--right"></div>
      </div>

      {data.curve.map((classes, idx) => {
        return (
          <div aria-hidden className={classes.className} key={classes.id}></div>
        );
      })}

      <AccessibleDnDList />
      {dropzones.map((ele, idx) => {
        const matchedFilter = matchedItems.filter((item, idx) => {
          return ele.id == item.drop.id;
        });

        return ele.isNotDrop ? (
          <div
            key={ele.id}
            className={ele.cls}
            aria-hidden={accessibleListVisible}
          >
            <p>{ele.name}</p>
          </div>
        ) : (
          <div
            key={ele.id}
            aria-hidden={accessibleListVisible}
            className={`containerDroppable--${ele.classes}`}
          >
            <p className="sr-only">
              {matchedFilter.length
                ? matchedFilter[0].drop.ariaLabel +
                  matchedFilter[0].drag.arialabel.replace("draggable", "")
                : ele.label}
            </p>
            {ele.title ? (
              <div className={`${ele.cls}`} aria-hidden>
                <p>{ele.title}</p>
              </div>
            ) : null}

            <div
              id={ele.id}
              key={ele.id}
              data-id={ele.id}
              data-label={ele.label}
              data-answer-id={ele.answerId}
              data-hidden={ele.hidden}
              data-arialabel={ele.ariaLabel}
              className={`drop drop--${ele.classes} ${ele.id}`}
              aria-hidden={accessibleListVisible || ele.hidden ? true : false}
            >
              {matchedFilter.map((items) => {
                return (
                  <React.Fragment key={`fragment${items.id}`}>
                    {items.drag.text ? (
                      <div
                        aria-hidden
                        key={`dropped-items${items.id}`}
                        className={`drop-container drop-container${items.drag.id}`}
                      >
                        <p
                          aria-hidden
                          key={`dropped-items${items.id}`}
                          className={`label--${items.drag.id}`}
                          dangerouslySetInnerHTML={{
                            __html: items.drag.label.replace("<br/>", ""),
                          }}
                        ></p>
                        <div
                          key={`dropcard--${items.drag.id}`}
                          className={`dropcard__img dropcard--${items.drag.id}`}
                        >
                          {items.drag.text
                            ? items.drag.text.split(",").map((imgTxt, idx) => {
                                return (
                                  <p
                                    aria-hidden
                                    key={`key${imgTxt}${idx}`}
                                    className={`imgtext--${imgTxt}${idx}`}
                                  >
                                    {imgTxt}
                                  </p>
                                );
                              })
                            : null}
                        </div>
                      </div>
                    ) : (
                      <p
                        key={`dropped-items${items.id}`}
                        className={`label--${items.drag.id}`}
                        dangerouslySetInnerHTML={{
                          __html: items.drag.label,
                        }}
                        aria-hidden
                      ></p>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
