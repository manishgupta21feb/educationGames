import React, { useState, useEffect, useRef } from "react";
import anime from "animejs/lib/anime.es";
import { getSimLanguage } from "../../../app/helpers";

const CarComponent = (props) => {
  const lang = getSimLanguage();
  const {
    data,
    time,
    distance,
    acceleration,
    selectedDirection,
    playAnimation,
    animationState,
    tripCount,
    tripValue,
    translateState,
    carCurrentPosition,
    carPositionValue,
    carTimeValue,
    selectedUnit,
    lastTripDistance,
    setLastTripDistance,
    activityReset,
    setLiveText,
    showTripCompleteToast,
    scaleValue,
    currentPopup,
  } = props;

  const animatingCarRef = useRef(null);
  const carContainerRef = useRef(null);
  const currentPositionRef = useRef(carCurrentPosition);
  const animationStateRef = useRef(null);
  const animationRef = useRef(null);
  const currentTimeRef = useRef(0);
  const lastTripTime = useRef(0);
  const lastTripFinalTime = useRef(0);
  const tripCountRef = useRef(tripCount);
  const [initialVelocity, setInitialVelocity] = useState(0);
  const actualDistance = useRef(5);
  const carAnimationRef = useRef(null);
  const lastProgressRef = useRef(0);
  const finalSet = useRef(false);
  const currentPopupRef = useRef(props.currentPopup);

  useEffect(() => {
    if (
      currentPopup.indexOf(1) >= 0 &&
      (currentPopupRef.current.indexOf(3) >= 0 ||
        currentPopupRef.current.indexOf(6) >= 0)
    ) {
      setInitialVelocity(0);

      finalSet.current = false;
      lastTripTime.current = 0;
      actualDistance.current = 5;
      currentTimeRef.current = 0;
      lastProgressRef.current = 0;
      lastTripFinalTime.current = 0;
      tripCountRef.current = tripCount;
      animationStateRef.current = null;
      currentPositionRef.current = carCurrentPosition;
    }
    currentPopupRef.current = currentPopup;
  }, [currentPopup]);

  useEffect(() => {
    if (animatingCarRef && animatingCarRef.current) {
      // this code will reset the car position to its initial position
      animatingCarRef.current.style.transform = translateState;
    }
  }, [selectedDirection]);

  useEffect(() => {
    actualDistance.current = distance;
  }, [distance]);

  useEffect(() => {
    if (animationState) {
      carAnimationRef.current.classList.remove("animate");
      setTimeout(() => {
        carAnimationRef.current.classList.add("animate");
      }, 50);
    }
  }, [scaleValue]);

  useEffect(() => {
    if (tripCount === 1) {
      // this code will reset the car position to its initial position
      animatingCarRef.current.style.transform = translateState;
      lastTripFinalTime.current = 0;
      lastTripTime.current = 0;
      tripCountRef.current = 0;
      lastProgressRef.current = 0;
      currentTimeRef.current = 0;
      setInitialVelocity(0);
    }
  }, [tripCount]);

  let finalVelocity = 0;
  let finalAcceleration = acceleration;
  const getCalculatedTimeForAnimation = () => {
    // units and formulas used in calculation
    // V  = u + at (for velocity calculation)
    // u = initial velocity (for trip 1 it is 0 and for rest all trips, final of previous will be used as initial velocity)
    // V = final velocity
    // a = acceleration
    // t = time
    // S = displacement(distance choosen in meters)

    // BEGIN CALCULATIONS
    // If  selected unit is time then find acceleration using below formula
    // S = ut + ½ at^2 hence acceleration will be ---- a = ((S-ut)*2)/t^2
    if (selectedUnit === "time") {
      finalAcceleration =
        ((distance - initialVelocity * time) * 2) / (time * time);
      // formula used for velocity calculation
      // V  = u + at
      finalVelocity = initialVelocity + finalAcceleration * time;
      if (finalAcceleration > 0) {
        setInitialVelocity(finalVelocity);
      }
      return time;
    } else {
      // If selected unit is acceleration then find time using below formula
      // ((a*(t * t))/2) + (u * t) - s = 0
      // ax^2 + bx + c = 0
      // t = -u +- Math.sqrt(a*a + 2*as)/
      let t1 = 0;
      let t2 = 0;
      if (finalAcceleration !== 0) {
        let b2minus4ac =
          initialVelocity * initialVelocity +
          4 * ((finalAcceleration / 2) * distance);
        let sqrtValue =
          b2minus4ac < 0
            ? Math.sqrt(b2minus4ac * -1) * -1
            : Math.sqrt(b2minus4ac);
        t1 = (-initialVelocity + sqrtValue) / finalAcceleration;
        t2 = (-initialVelocity - sqrtValue) / finalAcceleration;
      }
      let finalTime = 0;
      // Use one which is greater than 0, because if car is moving then it will always take some time to cover a distance.
      // Hence the value of time can never be less than 0
      if (t1 > 0) {
        finalTime = t1;
      } else if (t2 > 0) {
        finalTime = t2;
      }
      finalTime = finalTime.toFixed(2);
      if (finalAcceleration !== 0) {
        lastTripTime.current = finalTime;
      } else {
        finalTime = lastTripTime.current;
      }
      // formula used for velocity calculation
      // V  = u + at
      finalVelocity = initialVelocity + finalAcceleration * finalTime;
      setInitialVelocity(finalVelocity);
      if (finalVelocity < 0) {
        setInitialVelocity(0);
      }
      // if final time is NaN then car should not run.
      return finalTime;
    }
  };

  const calculateVelocity = (currentTime) => {
    let middleAcceleration =
      ((distance - initialVelocity * time) * 2) / (time * time);
    let calculatedVelocity = initialVelocity + middleAcceleration * currentTime;
    return calculatedVelocity;
  };

  const calculateDistance = (calculatedTime) => {
    // formula used = s = ut+1/2at^2
    let distance =
      initialVelocity * calculatedTime +
      (acceleration * (calculatedTime * calculatedTime)) / 2;
    actualDistance.current = Math.abs(distance);
    return distance;
  };

  useEffect(() => {
    currentPositionRef.current = carCurrentPosition;
  }, [carCurrentPosition]);

  useEffect(() => {
    console.log("actual distance: ", actualDistance.current);
  }, [actualDistance.current]);

  useEffect(() => {
    console.log("lastTripDistance is updated: ", lastTripDistance);
  }, [lastTripDistance]);

  const updateGraphData = (progressTime, progress) => {
    if (currentTimeRef.current != progressTime && finalSet.current == false) {
      lastProgressRef.current = progress;
      currentTimeRef.current = progressTime;
      // console.log(
      //   "lastTripFinalTime.current",
      //   lastTripFinalTime.current,
      //   Math.round(progress)
      // );
      if (selectedDirection === "right") {
        console.log(progress, Math.round(progress));
        console.log(
          "qwertyuiop",
          currentPositionRef.current,
          parseFloat(lastTripDistance) +
            parseFloat(((actualDistance.current * progress) / 100).toFixed(1)),
          "lastTripDistance",
          lastTripDistance
        );
        if (
          currentPositionRef.current <=
          parseFloat(lastTripDistance) +
            parseFloat(((actualDistance.current * progress) / 100).toFixed(1))
        ) {
          if (Math.round(progress) > 90) {
            if (parseInt(acceleration) === 1 || parseInt(acceleration) === -1) {
              progress = 100;
            }
          }
          carPositionValue(
            parseFloat(lastTripDistance) +
              parseFloat(
                ((actualDistance.current * progress) / 100).toFixed(1)
              ),
            (
              parseFloat(lastTripFinalTime.current) +
              parseFloat(currentTimeRef.current)
            ).toFixed(2)
          );
          carTimeValue(1);
          if (Math.round(progress) > 90) {
            finalSet.current = true;
            lastTripFinalTime.current =
              parseFloat(lastTripFinalTime.current) +
              parseFloat(currentTimeRef.current);
            setLastTripDistance(
              parseFloat(lastTripDistance) +
                parseFloat(((actualDistance.current * 100) / 100).toFixed(1))
            );
            setLiveText(
              `${data.ariaLabels.distance} ${
                parseFloat(lastTripDistance) +
                parseFloat(((actualDistance.current * 100) / 100).toFixed(2))
              } ${data.ariaLabels.meters}`
            );
          }
        }
      } else if (selectedDirection === "left") {
        if (
          currentPositionRef.current >
          parseInt(lastTripDistance) -
            parseInt(((actualDistance.current * progress) / 100).toFixed(0))
        ) {
          carPositionValue(
            parseInt(lastTripDistance) -
              parseInt(((actualDistance.current * progress) / 100).toFixed(0)),
            (
              parseFloat(lastTripFinalTime.current) +
              parseFloat(currentTimeRef.current)
            ).toFixed(2)
          );
          carTimeValue(1);
          if (Math.round(progress) > 80) {
            lastTripFinalTime.current =
              parseFloat(lastTripFinalTime.current) +
              parseFloat(currentTimeRef.current);
            setLastTripDistance(
              parseInt(lastTripDistance) -
                parseInt(((actualDistance.current * 100) / 100).toFixed(0))
            );
            setLiveText(
              `${data.ariaLabels.distance} ${
                parseInt(lastTripDistance) -
                parseInt(((actualDistance.current * 100) / 100).toFixed(0))
              } ${data.ariaLabels.meters}`
            );
          }
        }
      }
    }
  };

  useEffect(() => {
    animationStateRef.current = animationState;
    finalSet.current = false;
    if (animationState) {
      lastProgressRef.current = 0;
      animatingCarRef.current.style.transform = "translateX(0)";
      // play car animation
      if (animatingCarRef && animatingCarRef.current) {
        if (acceleration || distance || time) {
          // const velocity = distance / getCalculatedTimeForAnimation();
          // const carLeft = animatingCarRef.current.offsetLeft;
          const parentWidth = carContainerRef.current.parentElement.clientWidth;
          const carWidth = animatingCarRef.current.clientWidth;
          // const carRight = carLeft + carWidth;
          const distanceInMeters = 5;
          const totalDisanceInPixels = parentWidth - carWidth;
          const oneMeterDistanceInPixels =
            totalDisanceInPixels / distanceInMeters;
          let totalDisplacementRequired = (
            distance * oneMeterDistanceInPixels +
            17
          ).toFixed(3);
          // setActualDistance(5);
          if (acceleration < 0) {
            let requiredTime = getCalculatedTimeForAnimation();
            let requiredDistance = calculateDistance(requiredTime);
            // setActualDistance(requiredDistance);
            const distanceToTravel = Math.abs(requiredDistance);
            totalDisplacementRequired = (
              distanceToTravel * oneMeterDistanceInPixels +
              17
            ).toFixed(3);
          }
          const finalPositionToRight = totalDisplacementRequired;
          const finalPositionToLeft = -totalDisplacementRequired;
          const timeIntoMilliseconds =
            getCalculatedTimeForAnimation() * 1000 + 10;
          // const timeIntoMilliseconds = time * 1000 + 10;
          const unitDistanceTravelled = timeIntoMilliseconds / distance;

          if (
            unitDistanceTravelled > 0 &&
            getCalculatedTimeForAnimation() > 0
          ) {
            /*
             *easing is linear if time is selected
             *but if acceleration selected then in case of +ve
             *the car should should be shown increasing it's speed and vice versa
             */
            let easing = "easeInQuart";
            if (selectedUnit === "time") {
              easing = "linear";
            } else if (acceleration < 0) {
              easing = "easeOutQuart";
            }
            if (selectedDirection === "right") {
              animationRef.current = anime({
                easing: easing,
                translateX: finalPositionToRight,
                targets: animatingCarRef.current,
                duration: getCalculatedTimeForAnimation() * 1000,
                update: (anim) => {
                  let curTime = (anim.currentTime / 1000).toFixed(1);
                  if (
                    curTime % 1 === 0 &&
                    getCalculatedTimeForAnimation() > 1
                  ) {
                    // console.log('cur time and progress is ', curTime, anim.progress)
                    updateGraphData(curTime, anim.progress);
                  }
                  let vel = calculateVelocity(curTime);
                  if (
                    selectedUnit === "acceleration" &&
                    curTime > 0 &&
                    vel <= 0
                  ) {
                    animationRef.current.pause();
                    showTripCompleteToast();
                    tripValue(tripCount + 1);
                    tripCountRef.current = tripCount + 1;
                    playAnimation(false);
                    currentTimeRef.current = 0;
                  }
                },
                begin: (anim) => {
                  animatingCarRef.current.classList.add("animate");
                },
                complete: (anim) => {
                  // console.log('final call')
                  let curTime = (anim.currentTime / 1000).toFixed(1);
                  updateGraphData(curTime, anim.progress);
                  animatingCarRef.current.classList.remove("animate");
                  playAnimation(false);
                  currentTimeRef.current = 0;
                  showTripCompleteToast();
                  tripValue(tripCount + 1);
                  tripCountRef.current = tripCount + 1;
                },
              });
            } else {
              animationRef.current = anime({
                easing: easing,
                translateX: finalPositionToLeft,
                targets: animatingCarRef.current,
                duration: getCalculatedTimeForAnimation() * 1000,
                update: (anim) => {
                  let curTime = (anim.currentTime / 1000).toFixed(1);
                  if (
                    curTime % 1 === 0 &&
                    getCalculatedTimeForAnimation() > 1
                  ) {
                    updateGraphData(curTime, anim.progress);
                  }
                  let vel = calculateVelocity(curTime);
                  if (
                    selectedUnit === "acceleration" &&
                    curTime > 0 &&
                    vel <= 0
                  ) {
                    animationRef.current.pause();
                    showTripCompleteToast();
                    tripValue(tripCount + 1);
                    tripCountRef.current = tripCount + 1;
                    playAnimation(false);
                    currentTimeRef.current = 0;
                  }
                },
                begin: (anim) => {
                  animatingCarRef.current.classList.add("animate");
                },
                complete: (anim) => {
                  let curTime = (anim.currentTime / 1000).toFixed(1);
                  updateGraphData(curTime, anim.progress);
                  animatingCarRef.current.classList.remove("animate");
                  playAnimation(false);
                  // const currentCarPosition = carCurrentPosition + distance;
                  showTripCompleteToast();
                  currentTimeRef.current = 0;
                  tripValue(tripCount + 1);
                  tripCountRef.current = tripCount + 1;
                },
              });
            }
          } else {
            showTripCompleteToast();
            tripValue(tripCount + 1);
            tripCountRef.current = tripCount + 1;
            playAnimation(false);
            setLiveText(data.ariaLabels.carNotMoved);
          }
        }
      }
    }
  }, [animationState]);

  useEffect(() => {
    if (activityReset === true) {
      if (animationRef.current) {
        animationRef.current.pause();
        animatingCarRef.current.style.transform = translateState;
      }
    }
  }, [activityReset]);

  const getDistance = (d) => {
    if (d < 0) {
      return d.toFixed(0);
    }
    return d.toFixed(0) < 10 ? `0${d.toFixed(0)}` : d.toFixed(0);
  };

  const customClass =
    carCurrentPosition < 0
      ? carCurrentPosition < -9
        ? "expand"
        : "contract"
      : "";

  return (
    <div className="car-animation-container">
      <div className={`car-position ${customClass} `}>
        <p className="sr-only">{`${data.ariaLabels.carAt.replace(
          "-1-",
          getDistance(carCurrentPosition)
        )}`}</p>
        <span className={`car-distance-label ${lang}`} aria-hidden="true">
          {data.carPositionText}
        </span>
        <span aria-hidden="true" className={`car-distance-value ${lang}`}>
          {getDistance(carCurrentPosition)}
        </span>
        <span aria-hidden="true" className={`car-distance-unit ${lang}`}>
          m
        </span>
      </div>
      <div
        role="img"
        ref={carContainerRef}
        className="car-container"
        aria-label={data.ariaLabels.road}
      >
        <div
          ref={animatingCarRef}
          className={`car-image-container car-${selectedDirection}-aligned`}
        >
          <div
            ref={carAnimationRef}
            className={`car-image car-${selectedDirection} ${
              animationState === true ? "animate" : ""
            }`}
            role="img"
            aria-label={`${data.ariaLabels.car} ${selectedDirection}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CarComponent;
