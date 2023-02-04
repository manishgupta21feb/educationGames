import React, { useState, useEffect, useRef } from "react";
import Button from "../../../app/components/Button";
import "./style.scss";

import Draggable from "../../containers/DraggableContainer";
import Droppable from "../../containers/DroppableContainer";
import CheckButtonContainer from "../../containers/CheckButtonContainer";

import NextButtonContainer from "../../containers/NextButtonContainer";
import View from "../../../app/components/View";
import MCQComponent from "../../containers/MCQcomponentContainer";
import RadioButtons from "../../containers/RadioButtonContainer";
import McqButtonNext from "../../containers/McqNextContainer";

const FullView = (props) => {
  const {
    screen1Heading,
    mainScreenText,
    showNext,
    data,
    pins,
    correct,
    answered,
    mainScreen,
    firstScreen,
    visitedPages,
    isPopupActive,
    addVisitedPage,
    selectedCircuit,
    setShowMainScreen,
    setShowFirstScreen,
    ifMCQScreen,
    radioImg,
    count,
    getKeepImages,
    circuitNameProps,
    droppablesFull,
    leftImgAlt,
    circuitAlt,
  } = props;

  const buttonRef = useRef(null);
  const checkRef = useRef();

  const onItemClick = (id) => {
    selectedCircuit(id);

    addVisitedPage(id);

    if (id == "series") {
      setShowMainScreen(false);
      setShowFirstScreen(true);
    } else if (id == "parallel") {
      setShowMainScreen(false);
      setShowFirstScreen(true);
    }
  };
  useEffect(() => {
    if (droppablesFull) {
      const checkButton = checkRef.current.querySelector("button");

      if (checkButton) {
        checkButton.focus();
      }
    }
  }, [droppablesFull]);

  return (
    <div className="full-view">
      <div className="full-view-wrapper">
        {mainScreen ? (
          <div className="full-view-inner">
            <div className="instructions">
              <h2 id={"mainScreenText"}>{mainScreenText}</h2>
            </div>
            <div className={"main-screen"}>
              {data.mainScreenContent.map((item, i) => {
                const visited = visitedPages.indexOf(item.id) >= 0;

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
                        classes={`hotspot-btn label 
                        
                        `}
                      ></Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        {firstScreen ? (
          circuitNameProps == "parallel" ? (
            <View layout="leftright">
              <div className="parallel-container">
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
              <div>
                <h2
                  id={"mainScreenText"}
                  dangerouslySetInnerHTML={{
                    __html: `${
                      circuitNameProps == "series"
                        ? data.seriesCircuit
                        : data.parallelCircuit
                    }`,
                  }}
                ></h2>
                <Draggable />
                <div className={"check"} ref={checkRef}>
                  {!showNext ? (
                    <CheckButtonContainer />
                  ) : (
                    <NextButtonContainer />
                  )}
                </div>
              </div>
            </View>
          ) : ifMCQScreen ? (
            <View layout="leftright">
              <div className="leftContainer">
                <div className={"circuit-board-mcq"}>
                  <img className="sr-only sr-image" alt={leftImgAlt} />
                  {pins &&
                    pins.map((item, i) => {
                      return (
                        <div className={`pins ${item.id}`} key={item.id}>
                          <span></span>
                        </div>
                      );
                    })}
                </div>

                <div className="table"></div>
                {getKeepImages &&
                  getKeepImages.map((g) => {
                    return <div className={g} key={g}></div>;
                  })}
              </div>

              <div className="right-mcq">
                {radioImg.map((r) => {
                  return (
                    <div className={r.id} key={r.id}>
                      <div className={`img--${r.id}`}></div>
                    </div>
                  );
                })}
                <MCQComponent>
                  <RadioButtons />
                </MCQComponent>
                {correct ? <McqButtonNext /> : null}
              </div>
            </View>
          ) : (
            <View layout="leftright">
              <div className="after-mcq-board">
                <div className={"circuit-board-mcq"}>
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
                <div className="table"></div>
                <Droppable />
                <Draggable />
              </div>
              <div>
                <h2
                  id={"mainScreenText"}
                  dangerouslySetInnerHTML={{
                    __html: `${
                      circuitNameProps == "series"
                        ? data.seriesCircuit
                        : data.parallelCircuit
                    }`,
                  }}
                ></h2>

                <div className={"check"} ref={checkRef}>
                  {showNext ? (
                    <NextButtonContainer />
                  ) : (
                    <CheckButtonContainer />
                  )}
                </div>
              </div>
            </View>
          )
        ) : null}
      </div>
    </div>
  );
};

export default FullView;
