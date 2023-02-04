import React, { useEffect, useRef } from "react";
import Button from "../../../app/components/Button";

export default (props) => {
  const { text, onClick, isPopupActive } = props;

  return (
    <div className="next-button">
      <Button
        classes={`right-arrow toast-secondary-button positive`}
        text={text}
        onClick={onClick}
        isPopUpOpen={isPopupActive}
      />
    </div>
  );
};
