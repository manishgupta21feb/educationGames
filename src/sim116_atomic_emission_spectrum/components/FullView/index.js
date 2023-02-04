import React, { useState, useEffect, useRef } from "react";
import Button from "../../../app/components/Button";
import AnimationArea from "../../containers/AnimationArea";
import "./style.scss";

const FullView = (props) => {
  const {
    screen1Heading,
    mainScreenText,
    data,
    mainScreen,
    isPopupActive,
    addVisitedPage,
    setShowMainScreen,
    setShowFirstScreen,
    setSwitchState,
    on,
    setOn,
    setWaveOne,
    setWaveTwo,
    setAnimateRadiations,
    setSwitchCondition,
    onItemClick,
    setSelected,
  } = props;
  const buttonRef = useRef(null);

  const [selectedOption, setSelectedOption] = useState("");

  const onClickBtn = (id) => {
    setOn("0");
    onItemClick();
    setWaveOne(false);
    setWaveTwo(false);
    addVisitedPage(id);
    setSwitchState(false);
    setSelectedOption(id);
    setAnimateRadiations(false);
    setSwitchCondition(false);
    setSelected(id);

    setShowMainScreen(false);
    setShowFirstScreen(true);
    // if (id == "hydrogen") {
    // } else if (id == "helium") {
    //   setShowMainScreen(false);
    //   setShowFirstScreen(true);
    // }
  };

  useEffect(() => {
    console.log("The value of on is :: ", on);
  }, [on]);

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
                return (
                  <div className={"options"} key={i}>
                    <div className={"circuit-box"}>
                      <div className={`images ${item.img}`}>
                        <img className="sr-only sr-image" alt={item.imageAlt} />
                      </div>
                    </div>
                    <div className={"button-option"}>
                      <Button
                        key={item.id}
                        ref={buttonRef}
                        text={item.label}
                        label={item.label}
                        classes="hotspot-btn label"
                        isPopupActive={isPopupActive}
                        onClick={() => onClickBtn(item.id)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <AnimationArea {...props} selectedOption={selectedOption} />
        )}
      </div>
    </div>
  );
};

export default FullView;
