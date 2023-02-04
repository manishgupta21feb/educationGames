import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import DraggableContainer from "../../../containers/DraggableContainer";
import ButtonContinue from "../../../containers/ButtonContinue";

const RightArea = (props) => {
  const { mainHeading, matchedItems, isPopupActive } = props;
  const matchedItemsRef = useRef(matchedItems);
  const [showDraggables, setShowDraggables] = useState(true);

  useEffect(() => {
    if (!matchedItems.length && matchedItemsRef.current.length) {
      setShowDraggables(false);
      setTimeout(() => {
        setShowDraggables(true);
      });
    }
    matchedItemsRef.current = matchedItems;
  }, [matchedItems]);

  return (
    <div>
      <h2
        className="main-heading"
        aria-hidden={isPopupActive}
        dangerouslySetInnerHTML={{ __html: mainHeading }}
      ></h2>
      {showDraggables ? <DraggableContainer /> : null}
      <ButtonContinue />
    </div>
  );
};

export default RightArea;
