import React, { useEffect, useState, useRef } from "react";
import "./style.scss";
import AccessibleList from "../../containers/AccessibleList";
import Button from "../../../app/components/Button";

const LastScreenLeftView = (props) => {
  const dropRef = useRef();
  const itemsRef = useRef(props.matchedItems);

  const {
    mutationData,
    isPopupActive,
    currentScreen,
    lastScreenPart,
    showAlligatorInfo,
    alligatorsArray,
    onDrop,
    dropzones,
    matchedItems,
    accessibleListVisible,
  } = props;

  const [selectedBtn, setSelectedBtn] = useState("");

  const showAlligatorInfoFun = (val) => {
    setSelectedBtn(val);
    showAlligatorInfo(val);
  };

  useEffect(() => {
    setTimeout(() => {
      creatDroppable();
    }, 100);
  }, [lastScreenPart]);

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
          const matchedFilter = items.dropzone
            ? matchedItems.filter((item, idx) => {
                return items.dropzone.id === item.drop.id;
              })
            : "";
          return (
            <div
              className={
                "mutation-fifth-screen " +
                (currentScreen === "sixth" ? "mutation-last-screen" : "")
              }
              key={index}
            >
              <div className="mutation-row">
                {currentScreen === "fifth" ? (
                  <div className="mutation-label-container">
                    {items.sequence.map((item, key) => {
                      return (
                        <div key={key}>
                          {item.mutationLabel ? (
                            <div className="mutation-label">
                              {item.mutationLabel}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
                <div
                  className={
                    "mutations-container " +
                    (lastScreenPart === "first" && index === 2
                      ? "mutations-container-third"
                      : "")
                  }
                >
                  {items.sequence.map((item, key) => {
                    return (
                      <React.Fragment key={key}>
                        {item.mutationLabel || item.buttonTxt ? (
                          ""
                        ) : (
                          <div className="mutation-sequence">
                            <div
                              className={
                                "mutaion " +
                                (lastScreenPart === "first" && index === 2
                                  ? key < 8
                                    ? "mutation-blue-bg"
                                    : key > 7 && key < 15
                                    ? "mutation-green-bg"
                                    : "mutation-red-bg"
                                  : key < 7
                                  ? "mutation-blue-bg"
                                  : key > 6 && key < 13
                                  ? "mutation-green-bg"
                                  : "mutation-red-bg")
                              }
                            >
                              <p>{item.text}</p>
                            </div>
                            {lastScreenPart === "first" && index === 2 ? (
                              key !== 7 &&
                              key !== 14 &&
                              key < items.sequence.length - 2 ? (
                                <div
                                  className="dash-between-arr"
                                  aria-hidden="true"
                                >
                                  -
                                </div>
                              ) : (
                                ""
                              )
                            ) : key < items.sequence.length - 2 &&
                              key !== 6 &&
                              key !== 12 ? (
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
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>

              {currentScreen === "fifth" && items.dropzone ? (
                <div className="droppables">
                  <div
                    aria-hidden={accessibleListVisible}
                    className={`containerDroppable containerDroppable--${items.dropzone.classes}`}
                  >
                    <div
                      data-id={items.dropzone.id}
                      data-answer-id={items.dropzone.answerId}
                      data-hidden={items.dropzone.hidden}
                      data-arialabel={items.dropzone.arialabel}
                      className={`drop ${items.dropzone.id}`}
                    >
                      <span
                        className="sr-only sr-image"
                        aria-hidden={
                          lastScreenPart === "first"
                            ? dropzones[index - 1].hidden
                            : dropzones[index].hidden
                        }
                      >
                        {items.dropzone.arialabel}
                      </span>
                      {matchedFilter.map((items) => {
                        return (
                          <React.Fragment key={`fragment${items.id}`}>
                            <div
                              className={`drop-container drop-container${items.drag.id}`}
                            >
                              <p
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

              {currentScreen === "sixth" ? (
                <div className="mutation-button-container">
                  {items.sequence.map((item, key) => {
                    let isDisable = alligatorsArray.includes(item.id);
                    return (
                      <>
                        {item.buttonTxt ? (
                          <Button
                            text={item.buttonTxt}
                            classes={`hotspot-btn label ${
                              selectedBtn === item.id
                                ? "active"
                                : isDisable
                                ? "visited"
                                : ""
                            }`}
                            onClick={
                              selectedBtn !== item.id
                                ? () => showAlligatorInfoFun(item.id)
                                : null
                            }
                            ariaLable={item.buttonTxt}
                            ariaHidden={isPopupActive}
                            hideTooltip={false}
                            isPopUpOpen={isPopupActive}
                            disabled={isDisable && selectedBtn !== item.id}
                            key={key}
                          />
                        ) : (
                          ""
                        )}
                      </>
                    );
                  })}
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
      <div className="last-screen-left-main" ref={dropRef}>
        {mutations()}
        <AccessibleList />
      </div>
    </>
  );
};

export default LastScreenLeftView;
