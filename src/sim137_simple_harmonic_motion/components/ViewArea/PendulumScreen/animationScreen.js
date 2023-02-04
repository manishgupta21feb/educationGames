import React, { useEffect, useRef } from "react";
import StartStop from "../../../containers/ButtonStartStopContainer";
import Stop from "../../../containers/ButtonStartStop";
import data from "../../../data/data.en";

const animationScreen = (props) => {
  const {
    ifSinglePendulum,
    pendulumOneLength,
    pendulumTwoLength,
    lengthValuePendulumOne,
    lengthValuePendulumTwo,
    startStop,
    PendulumOneAltText1,
    PendulumOneAltText2,
    PendulumTwoAltText1,
    PendulumTwoAltText2,
    PendulumOneAltText3,
    massValuePendulumOne,
    liveAltPendulumOne,
    massValuePendulumTwo,
    liveAltPendulumTwo,
  } = props;
  const btnRef = useRef();
  useEffect(() => {
    if (btnRef.current) {
      const buttons = btnRef.current.querySelector(".stop");

      if (buttons) {
        buttons.focus();
      }
    }
  }, [startStop]);
  return (
    <div className="animation-only-screen">
      {!ifSinglePendulum
        ? pendulumTwoLength.map((vm) => {
            return (
              <div
                aria-hidden={vm.id == lengthValuePendulumTwo.id ? false : true}
                key={vm.id}
                className={`string string--${vm.id} ${
                  vm.id == lengthValuePendulumTwo.id
                    ? `show ${
                        startStop
                          ? "stop"
                          : `anim${lengthValuePendulumTwo.value}`
                      }`
                    : "hide"
                }`}
              >
                <div
                  className="box-two"
                  aria-hidden={
                    vm.id == lengthValuePendulumTwo.id ? false : true
                  }
                >
                  <img
                    className="sr-only sr-image"
                    alt={
                      startStop
                        ? vm.id == lengthValuePendulumTwo.id
                          ? `${data.penTwoScreenTwoTxt1} ${massValuePendulumTwo.value} ${data.pendulumDoubleTxt2} ${lengthValuePendulumTwo.value} ${data.penDoubleTxt}`
                          : ""
                        : liveAltPendulumTwo
                    }
                  />
                  <span aria-hidden>{data.onPendulumTwoText}</span>
                </div>
              </div>
            );
          })
        : null}
      {pendulumOneLength.map((vm) => {
        return (
          <div
            aria-hidden={vm.id == lengthValuePendulumOne.id ? false : true}
            key={vm.id}
            className={`string string--${vm.id} ${
              vm.id == lengthValuePendulumOne.id
                ? `show ${
                    startStop ? "stop" : `anim${lengthValuePendulumOne.value}`
                  }`
                : "hide"
            }`}
          >
            <div
              className="box"
              aria-hidden={vm.id == lengthValuePendulumOne.id ? false : true}
            >
              <img
                className="sr-only sr-image"
                alt={
                  startStop
                    ? vm.id == lengthValuePendulumOne.id
                      ? ifSinglePendulum
                        ? `${data.penOneScrTwoTxt1} ${massValuePendulumOne.value} ${data.pendulumDoubleTxt2} ${lengthValuePendulumOne.value} ${data.penOneScrTwoTxt3}`
                        : `${data.penOneDoubleTxt1} ${massValuePendulumOne.value} ${data.pendulumDoubleTxt2} ${lengthValuePendulumOne.value} ${data.penDoubleTxt}`
                      : ""
                    : liveAltPendulumOne
                }
              />
              <span aria-hidden>{data.onPendulumText}</span>
            </div>
          </div>
        );
      })}
      <div ref={btnRef}>{startStop ? <StartStop /> : <Stop />}</div>
    </div>
  );
};

export default animationScreen;
