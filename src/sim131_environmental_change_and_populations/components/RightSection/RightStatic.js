import React from "react";
import "./style.scss";
import NextButtonContainer from '../../containers/NextButtonContainer';

const RightStatic = (props) => {

  const { instructionText } = props;

  return (
    <div className="right-static-section">
      <p className="instruction-text">{instructionText}</p>
      <NextButtonContainer/>
    </div>
  )
}

export default RightStatic;