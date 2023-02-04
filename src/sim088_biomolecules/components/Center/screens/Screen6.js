import React, { useEffect, useState, useRef } from "react";
import "./style.scss";
import Button from "../../../../app/components/Button";
import AccessibleList from "../../../containers/AccessibleList";
import Monosaccharides from "../../InnerComponents/Monosaccharides";
import GlycogenTypes from "../../InnerComponents/GlycogenTypes";
import { getNumbers } from "../../../helper.js";
import { isIOS, isMobileSafari } from "react-device-detect";
import FinishButtonContainer from "../../../containers/FinishButtonContainer";

const Screen2 = (props) => {
  const {
    visitedHotspot,
    dropItemData,
    screenNo,
    screenData,
    nextScreen,
    isPopupActive,
    getMatchedValuelen,
    currentScreen,
    DND1Drag,
    onDrop,
    buttonLabels,
    onSubmitDND,
    getMatchedValue,
    updateAccessibleList,
    btnLbl,
    setSubmitButton,
  } = props;

  const dragRef = useRef();
  const dropRef = useRef();
  const finishRef = useRef();

  const clickHandler = (event) => {
    let { dataset } = event.target;
    updateAccessibleList(true);
    DND1Drag({ ...dataset });
  };

  const getDropAllItemsList = (id) => {
    if (id == 1) {
      return <Monosaccharides />;
    } else {
      return <GlycogenTypes types={id} />;
    }
  };

  useEffect(() => {
    if (screenNo == 6) {
      // carbohydrates screen drag
      if (dragRef.current) {
        const draggable = dragRef.current.querySelector(".drag-img");
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

      // carbohydrates screen drop
      if (dropRef.current) {
        const droppable = dropRef.current;
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

  const selectedDraggableRef = useRef(dropItemData);
  useEffect(() => {
    if (
      !dropItemData &&
      selectedDraggableRef.current &&
      getMatchedValuelen < 4
    ) {
      const buttons = dragRef.current.querySelector(".accessible");
      buttons.focus();
    }

    if (getMatchedValuelen == 4) {
      setTimeout(() => {
        finishRef.current.focus();
      }, 50);
    }
    selectedDraggableRef.current = dropItemData;
  }, [dropItemData]);

  return (
    <div className={`screen${screenNo}-center`}>
      {screenData.compoundData.map((val, index) => {
        return <p key={index}>{val}</p>;
      })}

      <div className="dnd-area" ref={dragRef}>
        <div
          className={`drag ${getMatchedValuelen == 4 ? `disabled-drag ` : ""}`}
        >
          {screenData.img.slice(0, 1)?.map((val, index) => {
            return (
              <div key={index}>
                <button
                  className="accessible"
                  data-id={val.id}
                  data-label={val.alt}
                  data-live={val.liveTxt}
                  disabled={getMatchedValuelen == 4 ? true : false}
                  onClick={(e) => clickHandler(e)}
                />

                <div
                  data-id={val.id}
                  data-label={val.alt}
                  className="drag-img non-accessible"
                  aria-hidden
                  tabIndex={-1}
                  onClick={isIOS ? (e) => clickHandler(e) : null}
                >
                  <Monosaccharides />
                </div>
              </div>
            );
          })}
        </div>
        <div
          className={`drop ${getMatchedValuelen == 4 ? `disabled-drop` : ""}`}
          ref={dropRef}
          data-live={screenData.img[screenData.img.length - 1].liveTxt}
          data-label={screenData.img[screenData.img.length - 1].alt}
        >
          <AccessibleList />
          {getMatchedValue.length > 0
            ? screenData.img
                .slice(getMatchedValue.length - 1, getMatchedValue.length)
                .map((val, index) => {
                  return (
                    <div
                      key={`ddn` + index}
                      data-id={val.id}
                      data-label={val.alt}
                      data-live={val.liveTxt}
                      className={"drop-img"}
                    >
                      {getDropAllItemsList(getNumbers(val.id))}
                      <div className={`txtWaterLabel${getNumbers(val.id)}`}>
                        {val.waterAtom.map((value, index) => {
                          return (
                            <span key={index} className={`txtLbl${index}`}>
                              {value}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
            : ""}
        </div>
      </div>

      <div className="submit-button">
        <Button
          ref={finishRef}
          id={btnLbl}
          classes="primary"
          text={buttonLabels.submitAnswer}
          onClick={onSubmitDND}
          disabled={isPopupActive || setSubmitButton || getMatchedValuelen != 4}
        />
      </div>
      {getMatchedValuelen == 4 && setSubmitButton ? (
        <FinishButtonContainer />
      ) : null}
    </div>
  );
};

export default Screen2;
