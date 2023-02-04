import React from "react";
import "./style.scss";
import SelectMass from "../../../containers/MassSelectContainer";
import SelectLength from "../../../containers/LengthSelectContainer";
import ButtonSetDegree from "../../../containers/ButtonSetDegreeContainer";
import ButtonContinue from "../../../containers/ButtonContinueContainer";
import AnimationScreen from "../../../containers/AnimationScreenContainer";
import StartStop from "../../../containers/ButtonStartStopContainer";
const pendulum = (props) => {
  const {
    ifSinglePendulum,
    data,
    pendulumHeadingOne,
    pendulumHeadingTwo,
    pendulumOneLength,
    pendulumTwoLength,
    massValuePendulumOne,
    lengthValuePendulumOne,
    massValuePendulumTwo,
    lengthValuePendulumTwo,
    changeMassOne,
    changeMassTwo,
    changeLengthTwo,
    changeLengthOne,
    degree,
    valuesMass,
    rularValues,
    protactorValue,
    PendulumOneAltText1,
    PendulumOneAltText2,
    PendulumTwoAltText1,
    PendulumTwoAltText2,
    PendulumOneAltText3,
    massLabelOnePendulum,
    massLabelTwoPendulum,
    lenghtLabelOnePendulum,
    lengthLabelTwoPendulum,
  } = props;

  return (
    <div className="second-screen-container">
      <h2>
        {ifSinglePendulum
          ? data.PendulumOneHeadingText
          : data.PendulumTwoHeadingText}
      </h2>
      <div
        role="img"
        aria-label={
          ifSinglePendulum ? data.rularAltSingle : data.rularAltDouble
        }
        className="left-scale-img"
      ></div>
      <div
        role="img"
        aria-label={
          degree
            ? ifSinglePendulum
              ? data.protactorAltSingle
              : data.protactorAltDouble
            : ifSinglePendulum
            ? data.protactorAltSingleNew
            : data.protactorAltNew
        }
        className="top-scale-img"
      ></div>
      {rularValues.map((rv) => {
        return (
          <span aria-hidden key={rv.id} className={`rular-val ${rv.id}`}>
            {rv.val}
          </span>
        );
      })}
      {protactorValue.map((pv) => {
        return (
          <span aria-hidden key={pv.id} className={`pro-val ${pv.id}`}>
            {pv.val}
          </span>
        );
      })}
      {degree ? (
        <div className="complete-animation-area">
          <div className="animation-wrapper">
            {!ifSinglePendulum
              ? pendulumTwoLength.map((vm) => {
                  return (
                    <div
                      key={vm.id}
                      className={`string string--${vm.id} ${
                        vm.id == lengthValuePendulumTwo.id ? "show" : "hide"
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
                            vm.id == lengthValuePendulumTwo.id
                              ? `${PendulumTwoAltText1} ${massValuePendulumTwo.value} ${data.ScreenTwoPendulumAltTxt2} ${lengthValuePendulumTwo.value} ${data.ScreenTwoPendulumAltTxt3}`
                              : ""
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
                  key={vm.id}
                  className={`string string--${vm.id} ${
                    vm.id == lengthValuePendulumOne.id ? "show" : "hide"
                  }`}
                >
                  <div
                    className="box"
                    aria-hidden={
                      vm.id == lengthValuePendulumOne.id ? false : true
                    }
                  >
                    <img
                      className="sr-only sr-image"
                      alt={
                        vm.id == lengthValuePendulumOne.id
                          ? ifSinglePendulum
                            ? `${PendulumOneAltText1} ${massValuePendulumOne.value} ${PendulumOneAltText2} ${lengthValuePendulumOne.value} ${PendulumOneAltText3}`
                            : `${data.ScreenTwoPendulumOneAltTxt1} ${massValuePendulumOne.value} ${data.ScreenTwoPendulumAltTxt2} ${lengthValuePendulumOne.value} ${data.ScreenTwoPendulumAltTxt3}`
                          : ""
                      }
                    />
                    <span aria-hidden>{data.onPendulumText}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pendulum-one" key={data.pendulumOne.id}>
            <div id="headingOne" className="pendulum-one-heading">
              {pendulumHeadingOne}
            </div>
            <div aria-describedby="headingOne" className="pendulum-one-mass">
              <SelectMass
                headingLabel={massLabelOnePendulum}
                value={massValuePendulumOne}
                onChange={(val) => changeMassOne(val)}
              />
            </div>
            <div className="pendulum-one-length">
              <SelectLength
                headingLabel={lenghtLabelOnePendulum}
                options={pendulumOneLength}
                value={lengthValuePendulumOne}
                onChange={(val) => changeLengthOne(val)}
              />
            </div>
          </div>
          {!ifSinglePendulum ? (
            <div className="pendulum-two" key={data.pendulumTwo.id}>
              <div className="animation-wrapper">
                {pendulumOneLength.map((vm) => {
                  return (
                    <div key={`pendulum${vm.id}`} className={`${vm.id}`}>
                      <div className="box"></div>
                    </div>
                  );
                })}
              </div>
              <div className="pendulum-two-heading">{pendulumHeadingTwo}</div>

              <div className="pendulum-two-mass">
                <SelectMass
                  headingLabel={massLabelTwoPendulum}
                  value={massValuePendulumTwo}
                  onChange={(val) => changeMassTwo(val)}
                />
              </div>
              <div className="pendulum-two-length">
                <SelectLength
                  headingLabel={lengthLabelTwoPendulum}
                  options={pendulumTwoLength}
                  value={lengthValuePendulumTwo}
                  onChange={(val) => changeLengthTwo(val)}
                />
              </div>
            </div>
          ) : null}
          <div className="degree-button">
            <ButtonSetDegree />
          </div>
        </div>
      ) : (
        <AnimationScreen />
      )}

      <div className="ball"></div>
      <ButtonContinue />
    </div>
  );
};

export default pendulum;
