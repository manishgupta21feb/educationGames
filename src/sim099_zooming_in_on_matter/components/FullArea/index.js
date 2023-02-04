import React, { useState, useEffect } from "react";
import Home from "../../containers/Home";
import SliderBox from "../../containers/SliderBox";
import ButtonNext from "../../containers/ButtonNext";
import "./fullarea.scss";

const FullArea = (props) => {
  const [view, setView] = useState("");
  const [mcqVisible, setMcqVisible] = useState(false);
  const {
    views,
    levelOneComplete,
    btnSound,
    viewHandler,
    isPopupActive,
    updateSliderValue,
  } = props;

  const _viewHandler = (evt) => {
    btnSound(evt);
    const { target } = evt.target.dataset;
    setView(target);
    viewHandler(evt);
  };

  const showMcqHandler = (evt) => {
    btnSound(evt);
  };

  useEffect(() => {
    if (levelOneComplete) {
      setView("");
    }
  }, [levelOneComplete]);

  const viewFilter = () => {
    if (views == "viewFromSpace") return <SliderBox />;
    else if (views == "viewFromEarth") return <SliderBox />;
    else
      return (
        <div className="slider">
          <Home onClick={(evt) => _viewHandler(evt)} />
        </div>
      );
  };

  return (
    <div className="fullArea">
      <p className="sr-only sr-image" aria-hidden={isPopupActive}></p>
      {viewFilter()}
    </div>
  );
};

export default FullArea;
