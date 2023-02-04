import React from "react";
import { useEffect } from "react";
import "./ResultAreaComponent.scss";

const ResultAreaComponent = (props) => {
  const {
    massOne,
    massTwo,
    distance,
    ballData,
    chargeOne,
    chargeTwo,
    prevMassOne,
    prevChargeOne,
    previousValue: arr,
  } = props;

  let prev = arr[arr.length - 2];
  let prevMass_one = prevMassOne[prevMassOne.length - 2];
  let prevCharge_one = prevChargeOne[prevChargeOne.length - 2];

  let mass = massOne + massTwo;
  let charge = chargeOne + chargeTwo;

  const renderSymbol = (count, symbol) => [...Array(count).fill(symbol)];

  useEffect(() => {}, [massOne, massTwo, chargeOne, chargeTwo, distance]);

  return (
    <div className="action-area">
      <img className="sr-only sr-image" alt={"Demo alt text"} />
      <div className={`balls container-one move_${prev}_${distance}`}>
        {ballData.map((item, i) => {
          return (
            <div
              key={item.id}
              style={{ opacity: item.id == massOne ? "1" : "0" }}
              className={`balls mass mass${massOne}`}
            ></div>
          );
        })}
        <div className={`charge-container1 mass_plus__${massOne}`}>
          {chargeOne > 1 ? (
            renderSymbol(chargeOne, "+").map((a, i) => {
              return (
                <div key={i} className={`plus_${i}`} aria-hidden={true}>
                  {a}
                </div>
              );
            })
          ) : (
            <div aria-hidden={true}>{"+"}</div>
          )}
        </div>
        <div
          className={`balls container-one arrow-container1 mass_increased${massOne}`}
        >
          <div className={`arrowOne1`}>
            <div
              className={`image1 charge_${prevCharge_one}_${charge} distance_${prev}_${distance}`}
            ></div>
          </div>
          <div className={`arrowTwo1`}>
            <div
              className={`image2 mass_${prevMass_one}_${mass} distance_${prev}_${distance}`}
            ></div>
            <div className="arrow-end"></div>
          </div>
        </div>
        <div className="pointer"></div>
      </div>

      <div className={`balls container-two move2_${prev}_${distance}`}>
        {ballData.map((item, i) => {
          return (
            <div
              key={item.id}
              style={{ opacity: item.id == massTwo ? "1" : "0" }}
              className={`balls mass mass${massTwo}`}
            ></div>
          );
        })}
        <div className={`charge-container2 mass_plus_${massTwo}`}>
          {chargeTwo > 1 ? (
            renderSymbol(chargeTwo, "-").map((a, i) => {
              return (
                <div key={i} className={`minus_${i}`} aria-hidden={true}>
                  {a}
                </div>
              );
            })
          ) : (
            <div aria-hidden={true}>{"-"}</div>
          )}
        </div>
        <div
          className={`balls container-two arrow-container2 mass_increased${massTwo}`}
        >
          <div className={`arrowOne2`}>
            <div
              className={`image3 charge-right_${prevCharge_one}_${charge} distance2_${prev}_${distance}`}
            ></div>
          </div>
          <div className={`arrowTwo2`}>
            <div
              className={`image4 mass_${prevMass_one}_${mass} distance2_${prev}_${distance}`}
            ></div>
            <div className="arrow-end-two"></div>
          </div>
        </div>
        <div className="pointer"></div>
      </div>
    </div>
  );
};

export default ResultAreaComponent;
