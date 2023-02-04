import React, { useEffect, useState } from "react";
import Button from "../../../app/components/Button";
import BallButton from "./ballButton";

import "./style.scss";

const FluidButton = (props) => {
  const {
    fluidData,
    makeTestTubeEmpty,
    isPopupActive,
    setFluidPouredCount,
    onClickTestTube,
    animateEnd,
    isBall,
    tubeData,
  } = props;
  const expectedSequence = ["red", "purple", "green", "yellow"];

  const [fluidType, setFluidType] = useState("");
  const [pouredItems, setPouredItems] = useState([]);
  const [pouredItems2, setPouredItems2] = useState([]);
  const [animationIndex, setAnimationIndex] = useState(-1);

  const _onClickTestTube = (id) => {
    setFluidType(id);
    onClickTestTube(id, id, pouredItems.length);
  };

  useEffect(() => {
    if (pouredItems.length == 4) {
      setFluidPouredCount();
    }
  }, [pouredItems]);

  const onAnimationEnd = (e) => {
    if (e.animationName) {
      makeTestTubeEmpty(fluidType);
      const fluid = fluidData.find((d) => d.id == fluidType);
      const _pouredItems = pouredItems.map((m) => ({ ...m }));
      _pouredItems.push({ ...fluid });
      _pouredItems.sort((a, b) => a.densityValue - b.densityValue);
      setPouredItems(_pouredItems);
      setFluidType("");
      setAnimationIndex(-1);
    }
  };

  useEffect(() => {
    if (fluidType) {
      const fluid = fluidData.find((d) => d.id == fluidType);

      const { densityValue } = fluid;
      let index = -1;
      for (let _index in pouredItems) {
        const item = pouredItems[_index];
        if (item.densityValue * 100 > densityValue * 100) {
          index++;
        }
      }
      const index2 = index + 1;
      setAnimationIndex(index2);
      const temp = expectedSequence.indexOf(fluid.id);
      setPouredItems2((p) => [...p, { ...fluid, animationIndex: temp }]);
    }
  }, [fluidType]);

  return (
    <div className="fluid-container">
      <div className="test-tube-animation-container">
        <div
          className={`test-tube test-tube-1 ${
            fluidType == "red" ? "animate" : ""
          }`}
        />
        <div
          className={`test-tube test-tube-2 ${
            fluidType == "green" ? "animate" : ""
          }`}
        />
        <div
          className={`test-tube test-tube-3 ${
            fluidType == "yellow" ? "animate" : ""
          }`}
        />
        <div
          className={`test-tube test-tube-4 ${
            fluidType == "purple" ? "animate" : ""
          }`}
        />
      </div>
      <div className="tube-animation" style={{ zIndex: animateEnd ? 2 : 0 }}>
        <div
          className={`tube ${fluidType} ${fluidType == "red" ? "animate" : ""}`}
        />
        <div
          className={`tube ${fluidType} ${
            fluidType == "green" ? "animate" : ""
          }`}
        />
        <div
          className={`tube ${fluidType} ${
            fluidType == "yellow" ? "animate" : ""
          }`}
        />
        <div
          className={`tube ${fluidType} ${
            fluidType == "purple" ? "animate" : ""
          }`}
        />
      </div>
      <div className="fluid-tubes">
        {fluidData.map((i) => {
          const _class = `tubes tubes-${i.id}`;
          return (
            <React.Fragment key={i.id}>
              <div
                className={`${_class} ${
                  i.show && !i.hideButton ? "" : "hide"
                } `}
              ></div>
            </React.Fragment>
          );
        })}
      </div>
      <div className="fluid-details">
        {fluidData
          .slice(0)
          .reverse()
          .map(
            (i) =>
              i.show &&
              !i.hideButton && (
                <React.Fragment key={i.id}>
                  <div
                    className={`connecting-lines-outside connecting-lines-outside-${i.id}`}
                  >
                    <div className="connecting-lines-inside"></div>
                  </div>
                  <span className={`dot dot-${i.id}`}></span>
                  <Button
                    text={i.density}
                    onClick={() => _onClickTestTube(i.id)}
                    classes={`hotspot-btn label details details-${i.id}`}
                    isPopupActive={isPopupActive}
                    disabled={animateEnd}
                    label={i.label}
                    ariaHidden={isPopupActive || null}
                  ></Button>
                </React.Fragment>
              )
          )}
      </div>
      <div className="fluid-in-tubes">
        {pouredItems2 &&
          pouredItems2
            .sort((a, b) => a.densityValue * 100 - b.densityValue * 100)
            .map((f, i) => {
              const { id, animationIndex } = f;
              const pouring = fluidType && id == fluidType;
              const animate = pouring ? "animateHeight" : "filledToTheTop";
              const classes = `poured-fluid ${animate}`.trim();
              const subClasses =
                `fluid-in-flask fluid-in-flask-${id} ${animate}`.trim();
              return (
                <div
                  key={id}
                  className={classes}
                  style={{ order: animationIndex }}
                >
                  <div className={subClasses}></div>
                  {isBall ? null : (
                    <p>
                      <span className="sr-only">{f.labelInfo}</span>
                      <span aria-hidden="true">{f.densityInfo}</span>
                    </p>
                  )}
                </div>
              );
            })}
      </div>
      <div
        onAnimationEnd={onAnimationEnd}
        className="fluid-pour-animation-container"
      >
        {tubeData.map((m) => {
          return (
            <div
              key={`pouring-animation-for-${m}`}
              className={`fluid-pour ${m} ${
                fluidType == m && animationIndex !== -1
                  ? `animate animate-${animationIndex}`
                  : ""
              }`.trim()}
            />
          );
        })}
      </div>
      <div className="main-cylinder"></div>
      {isBall ? (
        <BallButton {...props} />
      ) : (
        <>
          <div className="fluids-poured"></div>
          <div className="tube-stand"></div>
        </>
      )}
    </div>
  );
};

export default FluidButton;
