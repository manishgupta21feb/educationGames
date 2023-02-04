import React, { useEffect, useState, useRef } from "react";
import "./style.scss";
import Button from "../../../../app/components/Button";
import AccessibleList from "../../../containers/AccessibleList";
import FinishButtonContainer from "../../../containers/FinishButtonContainer";
import NucleicAcidAtoms from "../../InnerComponents/NucleicAcidAtoms";
import { isIOS, isMobileSafari } from "react-device-detect";

const Screen13 = (props) => {
  const {
    visitedHotspot,
    screenNo,
    screenData,
    nextScreen,
    isPopupActive,
    currentScreen,
    updateAccessibleList,
    getMatchedValuelen,
    DND1Drag,
    getMatchedValue2,
    onDrop,
    dropItemData,
    enableContinueBtn,
  } = props;

  const dragRef1 = useRef();
  const dropRef1 = useRef();
  const finishRef = useRef();

  const accessibleRef = useRef();
  const selectedDraggableRef = useRef(dropItemData);

  useEffect(() => {
    if (screenNo == 11 && currentScreen == 3) {
      // nucleic acid drag
      if (dragRef1.current) {
        const draggable = dragRef1.current.querySelectorAll(".dragItem");
        $(draggable).draggable({
          helper: "clone",
          containment: ".view-container",
          zIndex: 4,
          start: (event, ui) => {
            let { dataset } = event.target;
            DND1Drag({ ...dataset });
          },
          revert: (ev, ui) => {
            if (!ev) {
              setTimeout(() => {
                DND1Drag({});
              }, 500);
              EventManager.broadcast("INCORRECT_DRAG_REVERT");
              return true;
            } else {
              return false;
            }
          },
        });
      }

      //nucleic acid drop
      if (dropRef1.current) {
        const droppable = dropRef1.current.querySelectorAll(".atom-dropzone");
        $(droppable).droppable({
          tolerance: "pointer",
          drop: (event, ui) => {
            const { dataset } = event.target;
            onDrop({ ...dataset });
          },
        });
      }
    }
  }, [screenNo, getMatchedValuelen, currentScreen]);

  const clickHandler = (event) => {
    let { dataset } = event.target;
    updateAccessibleList(true);
    DND1Drag({ ...dataset });
  };

  useEffect(() => {
    if (!dropItemData && selectedDraggableRef.current) {
      const buttons = dragRef1.current.querySelector(".accessible");
      buttons.focus();
    }
    selectedDraggableRef.current = dropItemData;
  }, [dropItemData]);

  useEffect(() => {
    if (getMatchedValuelen == 10) {
      enableContinueBtn();
      let btn = finishRef.current.querySelector(".dnd-zone");
      setTimeout(() => {
        btn.focus();
      }, 100);
    }
  }, [getMatchedValuelen]);

  return (
    <div className={`screen${screenNo}-center`}>
      <div className="all-img">
        {screenData.compoundData[currentScreen - 1].img?.map((val, index) => {
          return (
            <img
              key={index}
              src={val.src}
              alt={val.alt}
              className={val.classes}
            />
          );
        })}
        <div className="all-labels">
          {screenData.compoundData[currentScreen - 1].label?.map(
            (val, index) => {
              return (
                <span
                  key={index}
                  className={val.classes}
                  dangerouslySetInnerHTML={{ __html: val.value }}
                ></span>
              );
            }
          )}
        </div>
        <div className="arrows">
          {screenData.compoundData[currentScreen - 1].arrows?.map(
            (val, index) => {
              return <img src={val.src} key={index} className={val.classes} />;
            }
          )}
        </div>
      </div>

      <div className="bottom-heading">
        {screenData.compoundData[currentScreen - 1].heading?.map(
          (val, index) => {
            return (
              <p
                key={index}
                className={val.classes}
                dangerouslySetInnerHTML={{ __html: val.txt }}
              ></p>
            );
          }
        )}
      </div>

      <div className={`dd-area${screenNo}`}>
        <div className={`drag-zone-${screenNo}`} ref={dragRef1}>
          {screenData.compoundData[currentScreen - 1].dragZone?.map(
            (val, i) => {
              return (
                <div className="dragBox" key={i}>
                  <button
                    className="accessible"
                    ref={accessibleRef}
                    data-id={val.type}
                    aria-label={val.alt}
                    data-atomname={val.atomName}
                    disabled={getMatchedValue2.length == 10 ? true : false}
                    onClick={(e) => clickHandler(e)}
                    key={i}
                    data-index={i}
                  />
                  <div onClick={isIOS ? (e) => clickHandler(e) : null}>
                    <NucleicAcidAtoms
                      type={val.type}
                      atomname={val.atomName}
                      length={getMatchedValue2.length}
                    />
                  </div>
                </div>
              );
            }
          )}
        </div>

        <div className={`drop-zone-${screenNo} drop-zone-area`} ref={dropRef1}>
          <AccessibleList />
          {screenData.compoundData[currentScreen - 1].imgDD?.map(
            (val, index) => {
              return <img src={val.src} alt={val.alt} key={index} />;
            }
          )}
          {screenData.compoundData[currentScreen - 1].dropZone?.map(
            (val, index) => {
              let showAtom = getMatchedValue2.filter((i) => i.id == val.id);
              return (
                <div
                  className={`atom-dropzone item${+index + 1}`}
                  data-id={val.id}
                  data-tag={val.tag}
                  data-pid={val.pid}
                  key={index}
                >
                  <p className="sr-only">abcde</p>
                  {showAtom.length > 0 ? (
                    <>
                      <NucleicAcidAtoms
                        type={showAtom[0].tag}
                        size={"s"}
                        dropZone={+index + 1}
                        id={val.id}
                      />
                    </>
                  ) : (
                    <div
                      className={val.beforeClass}
                      aria-label={val.aria}
                    ></div>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className={`legend-area`}>
        {screenData.compoundData[currentScreen - 1].legendArea?.map(
          (val, index) => {
            return (
              <div className="box" key={index}>
                <p className={`mini-left ${val.classes}`}>
                  <span> {val.value} </span>
                </p>
                <span className="mini-right"> {val.label} </span>
              </div>
            );
          }
        )}
      </div>
      <div ref={finishRef}>
        <FinishButtonContainer />
      </div>
    </div>
  );
};

export default Screen13;
