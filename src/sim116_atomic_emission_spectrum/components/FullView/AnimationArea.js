import React, { useEffect, useState, useRef } from "react";
import TableOne from "./TableOne";
import TableTwo from "./TableTwo";
import TableThree from "./TableThree";
import Button from "../../../app/components/Button";
import NextButtonContainer from "../../containers/NextButtonContainer";

const AnimationArea = (props) => {
  const arrowOne = useRef(null);
  const setOnToTwo = useRef(null);
  const reverseOne = useRef(null);
  const reverseTwo = useRef(null);
  const waveTwoTime = useRef(null);
  const redWaveTime = useRef(null);
  const waveOneTime = useRef(null);
  const reverseThree = useRef(null);
  const blueWaveTime = useRef(null);
  const radiationsTime = useRef(null);
  const yellowWaveTime = useRef(null);
  const {
    data,
    waveOne,
    waveTwo,
    redWave,
    blueWave,
    showTable,
    arrowThree,
    yellowWave,
    forwardArrow,
    setShowTable,
    toggleMessage,
    reverseArrowOne,
    reverseArrowTwo,
    switchCondition,
    animateRadiations,
    setForwardArrow,
    setReverseArrowOne,
    setReverseArrowTwo,
    setArrowThree,
    setRedWave,
    setBlueWave,
    setYellowWave,
    ariaLiveText,
    isPopupActive,
    selectedOption,
    visitedPages,
    on,
    setOn,
    setSwitchCondition,
    setSwitchState,
    setWaveOne,
    setAnimateRadiations,
    setWaveTwo,
  } = props;

  const [check1, setCheck1] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [randomAnimation, setRandomAnimtaion] = useState("");
  const [randomHeliumElectron, setRandomHeliumElectron] = useState("");
  const [animationState, setAnimationState] = useState(false);

  useEffect(() => {
    setCheck1(selectedOption == "hydrogen");
    setCheck3(selectedOption == "helium");
  }, []);

  const animationStart = () => {
    setSwitchCondition(true);
  };

  const animationEnd = () => {
    setSwitchCondition(false);
    toggleMessage();
    setSwitchState(true);
    setAnimationState(true);
  };

  const clicked = () => {
    setOn("1");
    ariaLiveText(
      selectedOption == "hydrogen"
        ? data.onLiveTextHydrogen
        : data.onLiveTextHelium
    );
    setTimeout(() => {
      ariaLiveText(" ");
    }, 300);
    setSwitchCondition(false);
    EventManager.broadcast("SECONDARY_CLICK");
  };

  useEffect(() => {
    if (on == "1") {
      setOnToTwo.current = setTimeout(() => {
        setOn("2");
      }, 5000);
      setWaveOne(false);
      setWaveTwo(false);
      setRedWave(false);
      setBlueWave(false);
      setYellowWave(false);
      setAnimateRadiations(false);
      setReverseArrowOne(false);
      setReverseArrowTwo(false);
      setArrowThree(false);
      setForwardArrow(false);
      setShowTable(true);
      setAnimationState(false);
    }

    if (on == "1") {
      let randomNumber = Math.round(Math.random());
      let helium = selectedOption == "helium" ? randomNumber : -1;
      setRandomHeliumElectron(helium);
      setRandomAnimtaion(randomNumber);
    }
  }, [on]);

  useEffect(() => {
    if (on == "2") {
      // ariaLiveText(data.offLiveText);
      // setTimeout(() => {
      //   ariaLiveText(" ");
      // }, 300);

      radiationsTime.current = setTimeout(() => {
        setAnimateRadiations(true);
      }, 490);

      reverseOne.current = setTimeout(() => {
        setReverseArrowOne(true);
      }, 600);

      waveOneTime.current = setTimeout(() => {
        setWaveOne(true);
      }, 800);

      redWaveTime.current = setTimeout(() => {
        setRedWave(true);
      }, 1000);

      waveTwoTime.current = setTimeout(() => {
        setWaveTwo(true);
        setReverseArrowTwo(true);
      }, 1400);

      yellowWaveTime.current = setTimeout(() => {
        setYellowWave(true);
      }, 1800);

      reverseThree.current = setTimeout(() => {
        setArrowThree(true);
      }, 2600);

      blueWaveTime.current = setTimeout(() => {
        setBlueWave(true);
      }, 3000);
    } else if (on == "1") {
      arrowOne.current = setTimeout(() => {
        setForwardArrow(true);
      }, 1800);
    }

    return () => {
      clearTimeout(arrowOne.current);
      clearTimeout(setOnToTwo.current);
      clearTimeout(reverseTwo.current);
      clearTimeout(reverseOne.current);
      clearTimeout(redWaveTime.current);
      clearTimeout(waveOneTime.current);
      clearTimeout(waveTwoTime.current);
      clearTimeout(reverseThree.current);
      clearTimeout(blueWaveTime.current);
      clearTimeout(radiationsTime.current);
      clearTimeout(yellowWaveTime.current);
    };
  }, [on]);

  return (
    <div className="full-view-inner">
      <div className="instructions">
        <h2 id={"mainScreenText"}>{data.activityOst}</h2>
      </div>
      <div className={"wrapper"}>
        <div className={"torch"}>
          <img className="sr-only sr-image" alt={data.flashLightAlt} />
          <div className="image">
            <div className="flash"></div>
            <div
              className="flash-on"
              style={{ opacity: on == 1 ? 1 : 0 }}
            ></div>
          </div>
          <div className={check1 && on == 1 ? "greyWave" : ""}></div>
          <div
            className={
              check3 && on == 1 ? `greyWave${randomHeliumElectron}` : ""
            }
          ></div>
          <div className={"flashLabel off"}>{data.offLabel}</div>
          <div className={"toggle-button"}>
            <Button
              onClick={clicked}
              text={data.toggleButtonLabel}
              label={data.toggleButtonLabel}
              ariaPressed={on == "1"}
              classes={`btn btn-switch`}
              isPopupActive={isPopupActive}
              disabled={on == "1" || switchCondition}
            />
          </div>
          <div className={"flashLabel on"}>{data.onLabel}</div>
        </div>

        <div className={`diagram ${selectedOption}`}>
          <div className="circle1"></div>
          <div className="circle2"></div>

          {selectedOption == "hydrogen" ? (
            <>
              <img
                className="sr-only sr-image"
                alt={
                  animationState
                    ? data.animationEndHydrogen
                    : data.hydrogenDiagramAlt
                }
              />
              <div
                className={`animation ${
                  on == 1
                    ? "animate"
                    : on == 2
                    ? `animateback${randomAnimation}`
                    : ""
                }`}
                onAnimationStart={(e) => animationStart()}
              ></div>
              <div
                className={`radiationAnimation ${
                  waveOne && randomAnimation == 0 && on == 2 ? "blueWave" : ""
                }`}
                onAnimationEnd={(e) => animationEnd()}
              >
                <div
                  className={`waveLabel ${
                    waveOne && randomAnimation == 0 && on == 2 ? "show" : "hide"
                  }`}
                  aria-hidden={true}
                >
                  {data.blueArrowOne}
                </div>
              </div>
              <div
                className={`radiationAnimation ${
                  waveTwo && randomAnimation == 1 && on == 2 ? `redWave` : ""
                }`}
                onAnimationEnd={(e) => animationEnd()}
              >
                <div
                  className={`waveLabel ${
                    waveTwo && randomAnimation == 1 && on == 2 ? "show" : "hide"
                  }`}
                  aria-hidden={true}
                >
                  {data.redArrowOne}
                </div>
              </div>
              <div
                className={`arrow-forward ${forwardArrow ? "show" : "hide"}`}
                dangerouslySetInnerHTML={{
                  __html: data.arrow,
                }}
              ></div>
              <div
                className={`arrow-reverse-one ${
                  randomAnimation == 0 && on == 2 && reverseArrowOne
                    ? "show"
                    : "hide"
                }`}
                dangerouslySetInnerHTML={{
                  __html: data.arrow,
                }}
              ></div>
              <div
                className={`arrow-reverse-two ${
                  randomAnimation == 1 && on == 2 && reverseArrowOne
                    ? "show"
                    : "hide"
                }`}
                dangerouslySetInnerHTML={{
                  __html: data.arrow,
                }}
              ></div>
              <div
                className={`arrow-reverse-three ${
                  randomAnimation == 1 && on == 2 && reverseArrowTwo
                    ? "show"
                    : "hide"
                }`}
                dangerouslySetInnerHTML={{
                  __html: data.arrow,
                }}
              ></div>
            </>
          ) : (
            <>
              <img
                className="sr-only sr-image"
                alt={
                  animationState
                    ? data.animationEndHelium
                    : data.heliumDiagramAlt
                }
              />
              <div
                className={`helium-animation electron${randomHeliumElectron}`}
              >
                <div
                  className={`animation electron0 ${
                    on == 1 ? "animate" : on == 2 ? "animateback" : ""
                  }`}
                  onAnimationStart={(e) => animationStart()}
                ></div>
                <div
                  className={`animation electron1 ${
                    on == 1 ? "animate1" : on == 2 ? "animateback1" : ""
                  }`}
                  onAnimationStart={(e) => animationStart()}
                ></div>
              </div>
              <div
                className={`heliumRaditions  ${
                  animateRadiations && blueWave
                    ? `blue wave${randomHeliumElectron}`
                    : ""
                }`}
                onAnimationEnd={(e) => animationEnd()}
              >
                <div
                  className={`waveLabel ${
                    animateRadiations && blueWave && on == 2 ? "show" : "hide"
                  }`}
                  aria-hidden={true}
                >
                  {data.blueArrowTwo}
                </div>
              </div>
              <div
                className={`heliumRaditions  ${
                  animateRadiations && redWave
                    ? `red wave${randomHeliumElectron}`
                    : ""
                }`}
              >
                <div
                  className={`waveLabel ${
                    animateRadiations && redWave && on == 2 ? "show" : "hide"
                  }`}
                  aria-hidden={true}
                >
                  {data.redArrowTwo}
                </div>
              </div>
              <div
                className={`heliumRaditions  ${
                  animateRadiations && yellowWave
                    ? `yellow wave${randomHeliumElectron}`
                    : ""
                }`}
              >
                <div
                  className={`waveLabel ${
                    animateRadiations && yellowWave && on == 2 ? "show" : "hide"
                  }`}
                  aria-hidden={true}
                >
                  {data.yellowArrow}
                </div>
              </div>
              <div
                className={`arrow-forward-two ${
                  randomAnimation == 0 && forwardArrow ? "show" : "hide"
                }`}
                dangerouslySetInnerHTML={{
                  __html: data.arrow,
                }}
              ></div>
              <div
                className={`arrow-one ${
                  randomAnimation == 0 && on == 2 && reverseArrowOne
                    ? "show"
                    : "hide"
                }`}
                dangerouslySetInnerHTML={{
                  __html: data.arrow,
                }}
              ></div>
              <div
                className={`arrow-two ${
                  randomAnimation == 0 && on == 2 && reverseArrowTwo
                    ? "show"
                    : "hide"
                }`}
                dangerouslySetInnerHTML={{
                  __html: data.arrow,
                }}
              ></div>
              <div
                className={`arrow-three ${
                  randomAnimation == 0 && on == 2 && arrowThree
                    ? "show"
                    : "hide"
                }`}
                dangerouslySetInnerHTML={{
                  __html: data.arrow,
                }}
              ></div>
              <div
                className={`arrow-forward-three ${
                  randomAnimation == 1 && forwardArrow ? "show" : "hide"
                }`}
                dangerouslySetInnerHTML={{
                  __html: data.arrow,
                }}
              ></div>
              <div
                className={`arrow-four ${
                  randomAnimation == 1 && on == 2 && reverseArrowOne
                    ? "show"
                    : "hide"
                }`}
                dangerouslySetInnerHTML={{
                  __html: data.arrow,
                }}
              ></div>
              <div
                className={`arrow-five ${
                  randomAnimation == 1 && on == 2 && reverseArrowTwo
                    ? "show"
                    : "hide"
                }`}
                dangerouslySetInnerHTML={{
                  __html: data.arrow,
                }}
              ></div>
              <div
                className={`arrow-six ${
                  randomAnimation == 1 && on == 2 && arrowThree
                    ? "show"
                    : "hide"
                }`}
                dangerouslySetInnerHTML={{
                  __html: data.arrow,
                }}
              ></div>
            </>
          )}
        </div>
        {/* <div className="referenceLine"></div> */}
        {/* <div className="referenceLine1"></div> */}
        <div className="energyLabels">
          {data.energyLabels.map((label, i) => {
            return (
              <div key={`${label}${i}`} className={`labels label${label.id}`}>
                {label.label}
              </div>
            );
          })}
        </div>
        {selectedOption == "hydrogen" && randomAnimation == "0" && showTable ? (
          <TableOne />
        ) : null}
        {selectedOption == "hydrogen" && randomAnimation == "1" && showTable ? (
          <TableTwo />
        ) : null}
        {selectedOption == "helium" && showTable ? <TableThree /> : null}
      </div>
      <div className={"checkButton"}>
        <div className={"check"}>
          <NextButtonContainer />
        </div>
      </div>
    </div>
  );
};

export default AnimationArea;
