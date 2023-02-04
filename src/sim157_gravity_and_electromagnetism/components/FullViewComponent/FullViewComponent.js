import React, { useRef } from "react";

import "./style.scss";
import MCQContainer from "../../containers/MCQContainer";
import RadioButtonContainer from "../../containers/RadioButtonContainer";

import ScaleComponent from "./ScaleComponent";

const FullViewComponent = (props) => {
  const buttonRef = useRef(null);

  return (
    <>
      <div className="full-view-container" ref={buttonRef}>
        <MCQContainer>
          <>
            <RadioButtonContainer />
            <ScaleComponent {...props} />
          </>
        </MCQContainer>
      </div>
    </>
  );
};

export default FullViewComponent;
