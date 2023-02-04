import React, { useState, useEffect, useRef } from "react";

import RadioButtonContainer from "../../containers/RadioButtonContainer";
import CheckButtonContainer from "../../containers/CheckButtonContainer";

import WaterCounter from "../../containers/Counter/Water";
import OxygenCounter from "../../containers/Counter/Oxygen";
import PropaneCounter from "../../containers/Counter/Propane";
import HydrogenCounter from "../../containers/Counter/Hydrogen";
import CarbonDioxideCounter from "../../containers/Counter/CarbonDioxide";

import OxygenSeeSawContainer from "../../containers/Seesaw/Oxygen";
import CarbonSeeSawContainer from "../../containers/Seesaw/Carbon";
import HydrogenSeeSawContainer from "../../containers/Seesaw/Hydrogen";
import "./style.scss";

const FullView = (props) => {
  const [equation, setEquation] = useState([]);
  const {
    optionOne,
    optionTwo,
    arrowTail,
    screen1Heading,
    selectedOption,
    mainScreenText,
    equations = [],
  } = props;

  useEffect(() => {
    const equation = equations
      .filter((e) => e.assocId == selectedOption)[0]
      .equation.map((e) => ({ ...e }));
    setEquation(equation);
  }, [selectedOption]);

  useEffect(() => {}, []);

  return (
    <div className="full-view">
      <div className="full-view-wrapper">
        <div className="sr-only" aria-level="1" role="heading">
          <p>{screen1Heading}</p>
        </div>
        <div className="instructions">
          <h2 id={"mainScreenText"}>{mainScreenText}</h2>
          <div>
            <RadioButtonContainer />
          </div>
        </div>
        <div style={{ position: "absolute", top: "100px", left: "100px" }}>
          <span
            style={{ transform: "rotate(90deg)" }}
            dangerouslySetInnerHTML={{ __html: arrowTail }}
          ></span>
        </div>
        {selectedOption == optionOne ? (
          <>
            <div className={`activity-space`}>
              <div>
                <div className={`seesaw seesaw1`}>
                  <OxygenSeeSawContainer />
                </div>
                <div className={`seesaw seesaw2`}>
                  <HydrogenSeeSawContainer />
                </div>
                <div className={`equation ${selectedOption}`}>
                  <div>
                    {equation &&
                      equation.map((item, i) => {
                        return (
                          <p key={`${item.id}${i}`}>
                            <span className="sr-only sr-image">
                              {item.ariaLabel}
                            </span>
                            <span
                              id={item.id}
                              aria-hidden="true"
                              dangerouslySetInnerHTML={{ __html: item.value }}
                            ></span>
                          </p>
                        );
                      })}
                  </div>
                </div>
                <div className={`counters counter-1`}>
                  <OxygenCounter />
                </div>
                <div className={`counters counter-2`}>
                  <HydrogenCounter />
                </div>
                <div className={`counters counter-3`}>
                  <WaterCounter />
                </div>
              </div>
            </div>
            <div>
              <CheckButtonContainer />
            </div>
          </>
        ) : null}
        {selectedOption == optionTwo ? (
          <>
            <div className={`activity-space`}>
              <div>
                <div className={`seesaw seesaw3`}>
                  <CarbonSeeSawContainer />
                </div>
                <div className={`seesaw seesaw4`}>
                  <HydrogenSeeSawContainer />
                </div>
                <div className={`seesaw seesaw5`}>
                  <OxygenSeeSawContainer />
                </div>
                <div className={`equation ${selectedOption}`}>
                  <div>
                    {equation &&
                      equation.map((item, i) => {
                        return (
                          <p key={`${item.id}${i}`}>
                            <span className="sr-only sr-image">
                              {item.ariaLabel}
                            </span>
                            <span
                              id={item.id}
                              aria-hidden={true}
                              dangerouslySetInnerHTML={{ __html: item.value }}
                            ></span>
                          </p>
                        );
                      })}
                  </div>
                </div>
                <div className={`counters counter-4`}>
                  <PropaneCounter />
                </div>
                <div className={`counters counter-5`}>
                  <OxygenCounter />
                </div>
                <div className={`counters counter-6`}>
                  <CarbonDioxideCounter />
                </div>
                <div className={`counters counter-7`}>
                  <WaterCounter />
                </div>
              </div>
            </div>
            <div>
              <CheckButtonContainer />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default FullView;
