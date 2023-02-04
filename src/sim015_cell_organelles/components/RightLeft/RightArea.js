import React, { useEffect, useRef, useState } from "react";
import Button from "../../../app/components/Button";
import DraggablesContainer from "../../containers/DraggablesContainer";

const RightArea = (props) => {
  const {
    introHeading,
    togglePopup,
    draggableItems = [],
    text,
    isPopupActive,
  } = props;
  const buttonRef = useRef(null);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    const selectedItem = draggableItems.filter((item) => item.isSelected);
    const check = draggableItems.length === selectedItem.length;
    // if all items are selected
    setShowNext(check);
  }, draggableItems);

  useEffect(() => {
    if (showNext) {
    
        if (buttonRef.current) {
          buttonRef.current.focus();
        }
    }
  }, [showNext]);

  return (
    <div className="right-area">
      <h1 className="heading-text">{introHeading}</h1>
      <DraggablesContainer />
      {showNext && (
        <Button
          text={text}
          ref={buttonRef}
          onClick={() => togglePopup()}
          isPopUpOpen={isPopupActive}
          classes={`next-btn toast-secondary-button positive right-arrow`}
        ></Button>
      )}
    </div>
  );
};

export default RightArea;
