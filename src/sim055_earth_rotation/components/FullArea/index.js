import React, { useState, useEffect } from "react";
import Wrapper from "../Wrapper";
import Home from "../../containers/HomeContainer";
import VideoContainer from "../../containers/VideoContainer";
import Button from "../../../app/components/Button";

import Question from "../../containers/QuestionContainer";
import SchoolView from "../../containers/SchoolViewContainer";
import Legend from "../Legend";

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
  } = props;

  const _viewHandler = (evt) => {
    btnSound();
    const { target } = evt.target.dataset;
    setView(target);
    viewHandler(evt);
  };

  const showMcqHandler = () => {
    btnSound();
    levelMcq();
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

  const viewFilter = () => {
    switch (view) {
      case views[0]:
        return (
          <div>
            {!mcqVisible ? (
              <div>
                <Wrapper className="wrapper--wrap full-area">
                  <h2 className="paragraph">{videoTitle}</h2>
                </Wrapper>
                <VideoContainer />
                <Legend />
                {videoEnd ? (
                  <Button
                    text={buttonLabel}
                    classes="toast-secondary-button positive right-arrow"
                    onClick={showMcqHandler}
                  />
                ) : null}
              </div>
            ) : (
              <Wrapper className="wrapper--wrap full-area">
                <Question />
              </Wrapper>
            )}
          </div>
        );

      case views[1]:
        return <SchoolView />;

      default:
        return (
          <Wrapper className="wrapper--wrap full-area">
            <Home onClick={(evt) => _viewHandler(evt)} />
          </Wrapper>
        );
    }
  };

  return (
    <div>
      <h1 className="sr-only" aria-hidden={isPopupActive}>
        {observationMotive}
      </h1>
      {viewFilter()}
    </div>
  );
};

export default FullArea;
