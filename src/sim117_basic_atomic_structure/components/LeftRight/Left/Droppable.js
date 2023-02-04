import React, { useEffect, useRef } from "react";
import AccessibleList from "../../../containers/AccessibleList";

const Droppable = (props) => {
  const {
    droppableOrbits,
    onDrop,
    matchedItems,
    orbitThreeNoBorder,
    orbitTwoNoBorder,
    orbitOneNoBorder,
    selectedQuestion,
    droppableChangeState,
    opened,
  } = props;

  const dropRef = useRef();
  const itemsRef = useRef(matchedItems);

  useEffect(() => {
    const drop = dropRef.current.querySelectorAll(".drop");

    $(drop).droppable({
      tolerance: "pointer",

      drop: (event, ui) => {
        const { dataset } = event.target;
        onDrop({ ...dataset });
      },
    });
  }, [selectedQuestion]);

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

        droppableChangeState(item.drop.id, false);

        $(dragBox).droppable("enable");
      }
    }
    itemsRef.current = matchedItems;
  }, [matchedItems]);
  return (
    <div className="droppable-container" ref={dropRef}>
      <AccessibleList />

      {droppableOrbits && droppableOrbits.length
        ? droppableOrbits.map((dropOrbit) => {
            const matchedFilter = matchedItems.filter((item, idx) => {
              return dropOrbit.id == item.drop.id;
            });
            return (
              <div
                data-id={dropOrbit.id}
                data-srno={dropOrbit.srno}
                data-label={dropOrbit.label}
                className={`drop ${dropOrbit.id}

                `}
                key={dropOrbit.id}
                aria-hidden={opened}
              >
                <p className="sr-only">
                  {matchedFilter.length
                    ? `${dropOrbit.label} ${matchedFilter[0].drag.altxt}`
                    : `${dropOrbit.label}`}
                </p>
                {matchedItems.length
                  ? matchedItems.map((items) => {
                      if (items.drop.id == dropOrbit.id) {
                        return (
                          <div
                            key={`span--${dropOrbit.id}`}
                            aria-hidden
                            className="hold-drag"
                          ></div>
                        );
                      }
                    })
                  : null}
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Droppable;
