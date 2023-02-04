import React, { useRef, useEffect } from "react";
import ContinueButtonContainer from "../../containers/ContinueButtonContainer";

const RightStatic = (props) => {
  const ref = useRef(null);
  const { questions, levelSelected, selectedOrganisms, textInfo } = props;
  // useEffect(() => {
  //   if (levelSelected) {
  //     if (ref && ref.current) {
  //       const button = ref.current.querySelector("button");
  //       if (button) {
  //         button.focus();
  //       }
  //     }
  //   }
  // }, [levelSelected]);
  return (
    <div className="right-area">
      <div className="intstruction-area">
        <div>
          <h1 className="heading-text">{textInfo}</h1>
        </div>
      </div>
      <ContinueButtonContainer />
    </div>
  );
};

export default RightStatic;
