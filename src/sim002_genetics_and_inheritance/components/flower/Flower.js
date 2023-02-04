import React, { useRef } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Cross from "./Cross";

const Flower = (props) => {
  const {
    plant,
    flowerStyle,
    onFlowerClick,
    onCrossClick,
    unique,
    clicked,
    isPopupActive,
    crossText,
    containStyle,
    group,
    flowerNumber,
    selected: sel,
    notselected,
  } = props;

  const ref = useRef(null);

  const onFlowerClick1 = () => {
    onFlowerClick(clicked, { type: plant.type, unique: unique, group: group });
  };

  const selected = clicked ? "selected" : "";
  const btnState = clicked ? sel : notselected;
  return (
    <div className={`flower-contain ${containStyle}`}>
      <div
        ref={ref}
        aria-hidden={isPopupActive}
        title={plant.name + " " + flowerNumber}
        className={`flower ${flowerStyle} ${selected}`}
      >
        <button
          data-title={plant.type}
          aria-label={plant.name + " " + flowerNumber + " " + btnState}
          onClick={onFlowerClick1}
          tabIndex={isPopupActive ? "-1" : null}
        >
          <span aria-hidden="true"></span>
        </button>
        <Cross
          crossText={crossText}
          visible={props.showCross}
          onCrossClick={onCrossClick}
          isPopupActive={isPopupActive}
        ></Cross>
      </div>
    </div>
  );
};

Flower.defaultProps = {
  // flowerType: "small"
};

Flower.prototype = {
  //flowerType: PropTypes.string,
};

export default Flower;
