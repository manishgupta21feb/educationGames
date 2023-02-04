import React, { useState, useEffect } from "react";
import Wrapper from "../Wrapper";
import Home from "../../containers/HomeContainer";

import TugOfWar from "../../containers/TugOfWarContainer";
import BallForce from "../../containers/BallForceContainer";

import "./full-area.scss";

const FullArea = (props) => {
  const [view, setView] = useState("");
  const { views, activityStarted, btnSound, viewHandler, isPopupActive } =
    props;

  const _viewHandler = (evt) => {
    btnSound();
    const { target } = evt.target.dataset;
    setView(target);
    viewHandler(evt);
  };

  useEffect(() => {
    if (activityStarted) {
      setView("");
    }
  }, [activityStarted]);

  const viewFilter = () => {
    switch (view) {
      case views[0]:
        return <TugOfWar />;

      case views[1]:
        return <BallForce />;

      default:
        return (
          <Wrapper className="wrapper--wrap full-area">
            <Home onClick={(evt) => _viewHandler(evt)} />
          </Wrapper>
        );
    }
  };

  return <div>{viewFilter()}</div>;
};

export default FullArea;
