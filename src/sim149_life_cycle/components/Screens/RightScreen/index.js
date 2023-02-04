import React, { useRef, useEffect } from "react";
import Draggable from "../../../containers/DraggableContainer";
import Static from "../../../containers/StaticContainer";
import ContinueButton from "../../../containers/ContinueButtonContainer";
const index = (props) => {
  const { getScreen, matchedItems } = props;
  const btnRef = useRef();
  useEffect(() => {
    if (matchedItems.length == 4) {
      const continueRef = btnRef.current.querySelector(".positive");

      if (continueRef) {
        setTimeout(() => {
          continueRef.focus();
        });
      }
    }
  }, [matchedItems.length]);
  return (
    <div ref={btnRef}>
      {getScreen ? <Static /> : <Draggable />}
      <ContinueButton />
    </div>
  );
};

export default index;
