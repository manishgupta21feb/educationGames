import React, { useState, useEffect, useRef } from "react";
import Button from "../../../app/components/Button";
import "./style.scss";

import Draggable from "../../containers/DraggableContainer";
import Droppable from "../../containers/DroppableContainer";
import CheckButtonContainer from "../../containers/CheckButtonContainer";
import ClearButtonContainer from "../../containers/ClearButtonContainer";
import NextButtonContainer from "../../containers/NextButtonContainer";

const FullView = (props) => {
  const [circuitName, setCircuitName] = useState("");
  const {
    screen1Heading,
    mainScreenText,

    data,
    pins,
    correct,
    answered,
    circuitAlt,
    mainScreen,
    firstScreen,
    visitedPages,
    isPopupActive,
    addVisitedPage,
    selectedCircuit,
    setShowMainScreen,
    setShowFirstScreen,
  } = props;

  console.log("Alt", circuitAlt);

  const buttonRef = useRef(null);

  const onItemClick = (id) => {
    selectedCircuit(id);
    setCircuitName(id);
    addVisitedPage(id);

    if (id == "series") {
      setShowMainScreen(false);
      setShowFirstScreen(true);
    } else if (id == "parallel") {
      setShowMainScreen(false);
      setShowFirstScreen(true);
    }
  };

  return (
    <div className="full-view">
      <div className="full-view-wrapper">
        <div className="sr-only" aria-level="1" role="heading">
          <p>{screen1Heading}</p>
        </div>

        {mainScreen ? (
          <div className="full-view-inner">
            <div className="instructions">
              <h2 id={"mainScreenText"}>{mainScreenText}</h2>
            </div>
            <div className={"main-screen"}>
              {data.mainScreenContent.map((item, i) => {
                const visited = visitedPages.indexOf(item.id) >= 0;
                // console.log("Visisted", visited, item.id, visitedPages);
                return (
                  <div className={"options"} key={i}>
                    <div className={"circuit-box"}>
                      <div className={`images ${item.img}`}>
                        <img className="sr-only sr-image" alt={item.imageAlt} />
                        <div aria-hidden>
                          {item.labels.map((item, i) => {
                            return (
                              <div
                                key={item.id}
                                className={`labels label${item.id}`}
                              >
                                <p>{item.label}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className={"button-option"}>
                      <Button
                        ref={buttonRef}
                        key={item.id}
                        isPopupActive={isPopupActive}
                        text={item.label}
                        label={item.label}
                        onClick={() => onItemClick(item.id)}
                        // classes={`hotspot-btn label ${
                        //   visited ? "visited" : ""
                        // }`}
                        // disabled={visited}
                        classes={`hotspot-btn label`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}
        {firstScreen ? (
          <div className="full-view-inner">
            <div className="instructions">
              <h2 id={"mainScreenText"}>
                {circuitName == "series"
                  ? data.seriesCircuit
                  : data.parallelCircuit}
              </h2>
            </div>
            <div className={"wrapper"}>
              <Draggable />
              <div className={"circuit-board"}>
                <img className="sr-only sr-image" alt={circuitAlt} />
                {pins &&
                  pins.map((item, i) => {
                    return (
                      <div className={`pins ${item.id}`} key={item.id}>
                        <span></span>
                      </div>
                    );
                  })}
              </div>
              <Droppable />
            </div>
            <div className={"checkButton"}>
              <div className={"clearButton"}>
                <ClearButtonContainer />
              </div>
              <div className={"check"}>
                {!answered ? <CheckButtonContainer /> : <NextButtonContainer />}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default FullView;
