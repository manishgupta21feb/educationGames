import React, { useRef, useEffect } from "react";
import GenotypeBox from "../../containers/GenotypeBox";
import Flower from "./Flower";
import CrossedFlowersList from "../../containers/CrossedFlowerList";
import "./style.scss";

export default (props) => {
  const ref = useRef(null);
  const flowersLength = useRef(props.selectedFlowers.length);
  const {
    performCross,
    showGenotype,
    isPopupActive,
    highlightedFlower,
    setSelectedFlowers,
    selectedFlowers,
    crossText,
    focusedFlower,
    showGenoList,
  } = props;

  const onFlowerClick = (check, p) => {
    setSelectedFlowers(check, p);
  };

  const onCrossClick = (e) => {
    e.stopPropagation();
    performCross();
    if (ref && ref.current) {
      const cross = ref.current.querySelector(".cross-button.visible");
      if (cross) {
        cross.previousSibling.focus();
      }
    }
  };

  useEffect(() => {
    if (selectedFlowers.length == 2) {
      if (ref && ref.current) {
        const crossButton = ref.current.querySelector(".cross-button.visible");
        if (crossButton) {
          crossButton.focus();
        }
      }
    }
    flowersLength.current = selectedFlowers.length;
  }, [selectedFlowers]);

  // useEffect(() => {}, [focusedFlower])

  const afterCrossFlowers = [];
  if (props.crossedFlowers) {
    let i = {};
    for (let crossedFlower of props.crossedFlowers) {
      const val = Object.keys(crossedFlower)[0];
      const fls = crossedFlower[Object.keys(crossedFlower)[0]];
      for (let fl in fls) {
        const f = fls[fl];
        i = { ...i, [f]: i[f] !== undefined ? i[f] + 1 : 1 };

        const sc =
          selectedFlowers.length === 2
            ? selectedFlowers[1].unique === `${f}flower${i[f]}`
            : false;
        let clicked = false;
        for (let j = 0; j < selectedFlowers.length; j++) {
          if (selectedFlowers[j].unique === `${f}flower${i[f]}`) {
            clicked = true;
            break;
          }
        }
        const plant = props.plantTypes[f];
        const highlighted =
          highlightedFlower === plant.type ? "highlighted" : "";
        const showFocusedFlower = focusedFlower.includes(plant.type)
          ? "focused"
          : "";
        const flowerStyle = `${showFocusedFlower} ${highlighted} ${plant.flowerClass}`;
        const containStyle = `${val} flower${i[f]}`;

        afterCrossFlowers.push(
          <Flower
            key={`${f}flower${i[f]}`}
            unique={`${f}flower${i[f]}`}
            group={val}
            selectedFlowers={props.selectedFlowers}
            flowerStyle={flowerStyle}
            plant={plant}
            onFlowerClick={onFlowerClick}
            onCrossClick={onCrossClick}
            showCross={sc}
            clicked={clicked}
            isPopupActive={isPopupActive}
            crossText={crossText}
            containStyle={containStyle}
            flowerNumber={i[f]}
            selected={props.selected}
            notselected={props.notselected}
          ></Flower>
        );
      }
    }
  }

  return (
    <div className="flowers-container">
      <div ref={ref} className="flowers-area">
        {afterCrossFlowers}
      </div>
      {showGenotype ? <GenotypeBox /> : null}
      {showGenoList ? <CrossedFlowersList /> : null}
    </div>
  );
};
