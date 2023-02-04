import React, { useEffect, useRef } from "react";
import "./style.scss";

const CrossedFlowersList = (props) => {
  const timeoutRef = useRef(null);
  const accessibleListRef = useRef(null);
  const { setFocusedFlower, plantTypes, setShowGenoList, ariaLiveText } = props;

  useEffect(() => {
    if (accessibleListRef && accessibleListRef.current) {
      const firstATag = accessibleListRef.current.querySelector("a");
      if (firstATag) {
        firstATag.focus();
      }
    }
  }, []);

  const onClick = (e, item) => {
    setShowGenoList(false);
    setFocusedFlower([]);
    ariaLiveText(item.genotypeValue);
    const genotypeButton = document.querySelector("header .genotype-button");
    if (genotypeButton) {
      setShowGenoList(false);
      genotypeButton.focus();
    }
  };

  const onKeyDown = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.which == 9) {
      const resetButton = document.querySelector("header .genotype-button");
      if (resetButton) {
        setShowGenoList(false);
        resetButton.focus();
      }
    } else if (e.which == 39 || e.which == 40) {
      if (
        e.target.parentElement.nextSibling &&
        e.target.parentElement.nextSibling.querySelector("a")
      ) {
        e.target.parentElement.nextSibling.querySelector("a").focus();
      }
    } else if (e.which == 37 || e.which == 38) {
      if (
        e.target.parentElement.previousSibling &&
        e.target.parentElement.previousSibling.querySelector("a")
      ) {
        e.target.parentElement.previousSibling.querySelector("a").focus();
      }
    } else if (e.which == 32 || e.which == 13) {
      setShowGenoList(false);
      setFocusedFlower([]);
      ariaLiveText(item.genotypeValue);
      const genotypeButton = document.querySelector("header .genotype-button");
      if (genotypeButton) {
        setShowGenoList(false);
        genotypeButton.focus();
      }
    }
  };

  const onFocus = (value) => {
    clearTimeout(timeoutRef.current);
    setFocusedFlower(value);
  };

  const onBlur = (e) => {
    timeoutRef.current = setTimeout(() => {
      if (props.showGenoList) {
        props.setShowGenoList(false);
        setFocusedFlower([]);
      }
    }, 100);
  };

  let list = [];
  let allFlowers = [];
  for (let crossedFlower in props.crossedFlowers) {
    const flowersObj = props.crossedFlowers[crossedFlower];
    const flowers = flowersObj[Object.keys(flowersObj)[0]];
    allFlowers.push(...flowers);
  }
  let uniqueFlowersArray = allFlowers.filter(
    (item, i, ar) => ar.indexOf(item) === i
  );
  for (let val of uniqueFlowersArray) {
    const plant = plantTypes[val];
    list.push(
      <li key={val} role="none" className="option">
        <a
          href="#"
          role="option"
          onBlur={onBlur}
          className="sr-only"
          onFocus={(e) => onFocus(val)}
          onClick={(e) => onClick(e, plant)}
          onKeyDown={(e) => onKeyDown(e, plant)}
        >
          {`${plant.name}`}
        </a>
      </li>
    );
  }

  return (
    <ul
      id="dropdown"
      tabIndex="-1"
      role="listbox"
      className="dropdown"
      ref={accessibleListRef}
      aria-labelledby="dropdownMenuButton"
    >
      {list}
    </ul>
  );
};

CrossedFlowersList.defaultProps = {};

CrossedFlowersList.propTypes = {};

export default CrossedFlowersList;
