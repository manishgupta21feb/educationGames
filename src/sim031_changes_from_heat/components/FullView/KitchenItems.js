import React, { useState, useEffect, useRef } from "react";
import Button from "../../../app/components/Button";
import EventManager from "../../../app/events/manager";
import "./style.scss";

const KitchenItems = (props) => {
  const ref = useRef(props.currentPopup);
  const {
    questions,
    onItemClick,
    fullViewBGAlt,
    isPopupActive,
    selectedQuestion,
    selectQuestion,
    onTemperatureButtonClick,
    arrayVisited,
    setResetFocusState,
    ariaLiveText,
    ariaLiveText2,
    answered,
    altTexts,
  } = props;

  const [imageAlt, setImageAlt] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [visitedItems, setVisitedItems] = useState([]);
  const [thermometerButton, setThermometerButton] = useState(-1);
  const [visitedThermometerButtons, setVisitedThermometerButtons] = useState(
    []
  );
  const [altText, setAltText] = useState("");
  useEffect(() => {
    setAltText("");
  }, [selectedQuestion]);

  useEffect(() => {
    if (
      ref.current.indexOf(1) == -1 &&
      (ref.current.indexOf(6) >= 0 || ref.current.indexOf(7) >= 0) &&
      props.currentPopup.indexOf(1) >= 0
    ) {
      selectQuestion(-1);
      setVisitedItems([]);
    }
    ref.current = props.currentPopup;
  }, [props.currentPopup]);

  const _setSelectedId = (id) => {
    setSelectedId(id);
    setThermometerButton(1);
    setVisitedItems((items) => [...items, id]);
    if (id) {
      onItemClick(id);
    }
  };

  useEffect(() => {
    if (thermometerButton !== -1) {
      onTemperatureButtonClick(thermometerButton);
      setVisitedThermometerButtons((tbtns) => {
        if (tbtns.indexOf(thermometerButton) >= 0) {
          return tbtns;
        } else {
          return [...tbtns, thermometerButton];
        }
      });
    } else {
      setVisitedThermometerButtons([]);
    }
  }, [thermometerButton]);

  useEffect(() => {
    if (selectedQuestion == -1) {
      setSelectedId("");
      setThermometerButton(-1);
      setVisitedThermometerButtons([]);
    }
  }, [selectedQuestion]);

  useEffect(() => {
    let imageAlt = fullViewBGAlt;
    if (selectedId) {
      imageAlt = questions
        .filter((q) => q.id == selectedId)[0]
        .buttons.filter((b) => b.id == thermometerButton)[0].altText;
    }
    setImageAlt(imageAlt);
  }, [selectedId]);
  return (
    <div>
      <div
        role="img"
        className="sr-only sr-image"
        aria-label={
          !answered
            ? fullViewBGAlt
            : altText
            ? altText
            : altTexts[selectedQuestion - 1].text
        }
      ></div>
      {!selectedId
        ? questions.map((q) => {
            const disabled = isPopupActive || visitedItems.indexOf(q.id) >= 0;
            return (
              <div key={`btn-wrapper${q.id}`}>
                <button
                  title={q.alt}
                  text={q.label}
                  disabled={disabled}
                  aria-label={q.label}
                  aria-hidden={disabled}
                  onClick={() => {
                    _setSelectedId(q.id);
                    setTimeout(() => {
                      ariaLiveText(q.liveText);
                    }, 100);
                  }}
                  tabIndex={isPopupActive ? -1 : null}
                  className={`btn highlighter ${q.className}`}
                ></button>
                <p className={`itemname ${q.className}`}>{q.label}</p>
              </div>
            );
          })
        : null}
      {questions.map((question) => {
        return question.buttons.map((item, i) => {
          const check = thermometerButton == item.id;
          const check2 = visitedThermometerButtons.indexOf(item.id) >= 0;
          const btnstate = selectedId && check ? "show" : "hide";
          const classes = `bg-image ${`${question.className}${
            item.backgroundImg
          } ${
            check && arrayVisited.length == 3 ? `completed${selectedId}` : ""
          } ${btnstate}`}`;
          const btnClasses = `hotspot-btn label ${item.className} ${
            check ? "active" : ""
          } ${!check && check2 ? "visited" : ""}`;
          const disabled = (check2 && !check) || selectedId !== question.id;
          return (
            <div
              key={`${item.className} ${3}`}
              aria-hidden={selectedId !== question.id}
              style={{ opacity: selectedId == question.id ? "1" : "0" }}
            >
              <div key={`${i}${1}`} aria-hidden className={classes}></div>
              <Button
                text={item.label}
                ariaPressed={check}
                disabled={disabled}
                classes={btnClasses}
                key={`${item.id} ${1}`}
                ariaHidden={disabled || !selectedId}
                isPopupActive={isPopupActive || selectedId !== question.id}
                onClick={() => {
                  EventManager.broadcast("SECONDARY_CLICK");
                  setThermometerButton(item.id);
                  setTimeout(() => {
                    ariaLiveText2(item.liveText);
                  }, 100);
                  setAltText(item.altText);
                }}
              />
            </div>
          );
        });
      })}
      {selectedId
        ? questions
            .filter((q) => q.id == selectedId)
            .map((q) => {
              return (
                <div key={`label-div${selectedId}`} className={"label-div"}>
                  <p className={"label-state labelitemname"}>{q.label}</p>
                  <p className={"label-state labelhotplate"}>
                    {props.hotPlateLabel}
                  </p>
                  <p className={"label-state labelicebox"}>
                    {props.iceBoxLabel}
                  </p>
                </div>
              );
            })
        : null}
    </div>
  );
};

export default KitchenItems;
