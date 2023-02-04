import React, { useState, useEffect } from "react";
import FirstScreenLeftContainer from "../../containers/FirstScreenLeftContainer";
import LastScreenLeftContainer from "../../containers/LastScreenLeftContainer";

import "./style.scss";

export default (props) => {
  const { currentScreen, lastScreenPart } = props;

  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 50);
  }, [lastScreenPart]);

  return (
    <>
      {currentScreen === "fifth" ? (
        show ? (
          <LastScreenLeftContainer />
        ) : null
      ) : (
        <FirstScreenLeftContainer />
      )}
    </>
  );
};
