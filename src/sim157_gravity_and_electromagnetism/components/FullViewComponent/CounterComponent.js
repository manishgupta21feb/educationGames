import React, { useEffect } from "react";
import MassOneCounter from "../../containers/Counters/MassOneCounter";
import MassTwoCounter from "../../containers/Counters/MassTwoCounter";
import ChargeOneCounter from "../../containers/Counters/ChargeOneCounter";
import ChargeTwoCounter from "../../containers/Counters/ChargeTwoCounter";
import DistanceCounter from "../../containers/Counters/DistanceCounter";
import "./CounterComponent.scss";

const CounterComponent = (props) => {
  const { value, counters } = props;

  useEffect(() => {}, [value]);

  const counterData = counters.filter((a) => a.id == value);

  return (
    <div className="counter-area">
      {value ? (
        <>
          {counterData.map((a, i) => {
            return (
              <React.Fragment key={a.id}>
                <div className="counters mass-counter1">
                  <p id="label1">{a.label1}</p>
                  <div className="counters mass">
                    {value === "1" ? <MassOneCounter /> : null}
                    {value === "2" ? <ChargeOneCounter /> : null}
                    {value === "3" ? <DistanceCounter /> : null}
                  </div>
                </div>
                <div className="counters mass-counter2">
                  <p id="label2">{a.label2}</p>
                  <div className="counters mass">
                    {value === "1" ? <MassTwoCounter /> : null}
                    {value === "2" ? <ChargeTwoCounter /> : null}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default CounterComponent;
