import React, { useState, useEffect } from "react";
import Wrapper from "../../containers/WrapperContainer";
import Home from "../../containers/HomeContainer";
import VideoContainer from "../../containers/VideoContainer";
import Button from "../../../app/components/Button";

import Question from "../../containers/QuestionContainer";
import SchoolView from "../../containers/SchoolViewContainer";
import { updateVisitedNodes } from "../../actions/index";
import "./full-area.scss";

const FullArea = (props) => {
  const [view, setView] = useState("");
  const [mcqVisible, setMcqVisible] = useState(false);
  const {
    views,
    videoTitle,
    buttonLabel,
    videoEnd,
    levelOneComplete,
    btnSound,
    viewHandler,
    levelMcq,
    observationMotive,
    isPopupActive,
    getLevel,
  } = props;

  const _viewHandler = (evt) => {
    btnSound();
    const { target } = evt.target.dataset;
    setView(target);
    viewHandler(evt);
  };

  const showMcqHandler = () => {
    btnSound();
    setTimeout(() => {
      setMcqVisible(true);
    }, 100);
  };

  useEffect(() => {
    if (levelOneComplete) {
      setView("");
      setMcqVisible(false);
    }
  }, [levelOneComplete]);


  return (
    <>
      <Wrapper className="wrapper--wrap full-area">
        <Home onClick={(evt) => _viewHandler(evt)} />
      </Wrapper>
    </>
  );
};

export default FullArea;
