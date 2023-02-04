import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import AccessibleList from "../../containers/AccessibleList";

const FirstScreenLeftView = (props) => {
  const dropRef = useRef();
  const itemsRef = useRef(props.matchedItems);
  const {
    mutationData,
    onDrop,
    dropzones,
    matchedItems,
    accessibleListVisible,
    currentScreen,
  } = props;

  useEffect(() => {
    creatDroppable();
  }, []);

  const creatDroppable = () => {
    if (dropRef.current) {
      const drop = dropRef.current.querySelectorAll(".drop");
      $(drop).droppable({
        tolerance: "pointer",
        drop: (event, ui) => {
          const { dataset } = event.target;
          onDrop({ ...dataset });
        },
      });
    }
  };

  useEffect(() => {
    if (itemsRef.current.length < matchedItems.length) {
      const item = { ...matchedItems[matchedItems.length - 1] };
      const dropBox = dropRef.current.querySelector(`.drop.${item.drop.id}`);
      $(dropBox).droppable("disable");
    } else {
      const filterDragItem = itemsRef.current.filter((ele) => {
        return matchedItems.findIndex((m) => m.drop.id == ele.drop.id) == -1;
      });
      for (let item of filterDragItem) {
        const dragBox = dropRef.current.querySelector(`.drop.${item.drop.id}`);
        $(dragBox).droppable("enable");
      }
    }
    itemsRef.current = matchedItems;
  }, [matchedItems]);

  const mutations = () => {
    return (
      <>
        {mutationData.map((items, index) => {
          const matchedFilter = matchedItems.filter((item, idx) => {
            return items.dropzone.id == item.drop.id;
          });
          return (
            <div
              className={
                currentScreen === "first"
                  ? "mutation-first-screen"
                  : "mutation-other-screen"
              }
              key={index}
            >
              <div className="mutation-row">
                {items.sequence.map((item, key) => {
                  return (
                    <div key={key}>
                      {item.mutationLabel ? (
                        <div
                          className={`mutation-label ${
                            index === 0 ? "originalSeq-mutation-label" : ""
                          }`}
                        >
                          {item.mutationLabel}
                        </div>
                      ) : (
                        <div className="mutation-sequence">
                          <div
                            className={
                              "mutaion " +
                              (currentScreen === "first" ||
                              currentScreen === "second"
                                ? "mutation-blue-bg"
                                : "mutation-green-bg")
                            }
                          >
                            <p>{item.text}</p>
                          </div>
                          {key < items.sequence.length - 1 ? (
                            <div
                              className="dash-between-arr"
                              aria-hidden="true"
                            >
                              -
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              {currentScreen !== "first" ? (
                <div className="droppables">
                  <div
                    aria-hidden={accessibleListVisible}
                    className={`containerDroppable containerDroppable--${items.dropzone.classes}`}
                  >
                    <div
                      data-id={dropzones[index].id}
                      data-answer-id={dropzones[index].answerId}
                      data-hidden={dropzones[index].hidden}
                      data-arialabel={dropzones[index].arialabel}
                      className={`drop ${dropzones[index].id}`}
                    >
                      <span
                        className="sr-only sr-image"
                        aria-hidden={dropzones[index].hidden}
                      >
                        {dropzones[index].arialabel}
                      </span>
                      {matchedFilter.map((items) => {
                        return (
                          <React.Fragment key={`fragment${items.id}`}>
                            <div
                              key={`dropped-items${items.id}`}
                              className={`drop-container drop-container${items.drag.id}`}
                            >
                              <p
                                key={`dropped-items${items.id}`}
                                className="matched-label"
                                dangerouslySetInnerHTML={{
                                  __html: items.drag.text,
                                }}
                              ></p>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <div className="first-screen-left-main" ref={dropRef}>
        {mutations()}
        <AccessibleList />
      </div>
    </>
  );
};

export default FirstScreenLeftView;
