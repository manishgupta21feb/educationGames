import React, { useRef, useEffect, useState } from "react";
import AccessibleList from "../../containers/AccessibleList";
import "./droppable.scss";

const Droppable = (props) => {
  const {
    droppableData,
    lifeName,
    onDropElement,
    getDroppedItems,
    observationMotive,
    accessibleListOpened,
    itemLength,
  } = props;

  const ref = useRef(null);
  const droppedItemsRef = useRef(props.getDroppedItems);

  const droppables = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const [allDropped, setAllDropped] = useState(false);

  useEffect(() => {
    droppableInitializer(droppables);
  }, []);

  const _onDropElement = (accept, label) => {
    onDropElement(accept, label);
  };

  useEffect(() => {
    const prevDroppedElements = Object.keys(droppedItemsRef.current);
    const currentDroppedElements = Object.keys(getDroppedItems);
 
    if (prevDroppedElements.length < currentDroppedElements.length) {
      for (let i in getDroppedItems) {
        const elem = ref.current.querySelector(`.droppable.${i}`);
        if (elem) {
          $(elem).droppable("disable");
        }
      }
    } else {
      const remainingItems = prevDroppedElements.filter(
        (d) => currentDroppedElements.indexOf(d) == -1
      );
      for (let i of remainingItems) {
        const elem = ref.current.querySelector(`.droppable.${i}`);
        if (elem) {
          $(elem).droppable("enable");
        }
      }
    }

    if(currentDroppedElements.length == itemLength){
      setAllDropped(true);
      setTimeout(() => {
        setAllDropped(false);
      }, 2000)
    }

    droppedItemsRef.current = getDroppedItems;
  }, [getDroppedItems]);

  const droppableInitializer = (droppableArea) => {
    droppableArea?.map((area) => {
      $(area.current).droppable({
        drop: function (evt, ui) {
          const {
            dataset: { accept, label },
          } = evt.target;
          _onDropElement(accept, label);
        },
      });
    });
  };

  const droppable = droppableData.map((item, index) => {
    if (lifeName == "cricket") {
      if (index <= 2) {
        return (
          <React.Fragment key={item.id}>
            <div className={`arrow arrow--${index + 1}`}></div>
            <div
              className={`droppable droppable--${index + 1} ${item.accept}`}
              ref={droppables[index]}
              data-accept={item.accept}
              data-label={item.label}
              aria-hidden={(accessibleListOpened && item.hidden || allDropped) ? true : null}
            >
               <div className="sr-only" dangerouslySetInnerHTML={{__html: `${item.hidden ? `${item.label} ${item.droppedText}` : `${item.label + "."}`}`}}/>

              <div
                className={`${lifeName}-one ${
                  item.active == `${lifeName}-one` ? "active" : ""
                }`}
              ></div>
              <div
                className={`${lifeName}-two ${
                  item.active == `${lifeName}-two` ? "active" : ""
                }`}
              ></div>
              <div
                className={`${lifeName}-three ${
                  item.active == `${lifeName}-three` ? "active" : ""
                }`}
              ></div>
              <span aria-hidden className="droppable__count">
                {item.count}
              </span>
            </div>
          </React.Fragment>
        );
      }
    } else {
      return (
        <React.Fragment key={item.id}>
          <div className={`arrow arrow--${index + 1}`}></div>
          <div
            className={`droppable droppable--${index + 1} ${item.accept}`}
            ref={droppables[index]}
            data-accept={item.accept}
            data-label={item.label}
            aria-hidden={(accessibleListOpened && item.hidden || allDropped) ? true : null}
          >
             <div className="sr-only" dangerouslySetInnerHTML={{__html: `${item.hidden ? `${item.label} ${item.droppedText}` : `${item.label + "."}`}`}}/>
            <div
              className={`${lifeName}-one ${
                item.active == `${lifeName}-one` ? "active" : ""
              }`}
            ></div>
            <div
              className={`${lifeName}-two ${
                item.active == `${lifeName}-two` ? "active" : ""
              }`}
            ></div>
            <div
              className={`${lifeName}-three ${
                item.active == `${lifeName}-three` ? "active" : ""
              }`}
            ></div>
            <div
              className={`${lifeName}-four ${
                item.active == `${lifeName}-four` ? "active" : ""
              }`}
            ></div>
            <span aria-hidden className="droppable__count">
              {item.count}
            </span>
          </div>
        </React.Fragment>
      );
    }
  });

  return (
    <div
      ref={ref}
      className={`box ${lifeName == "cricket" ? "box--three" : ""}`}
    >
      <h1 className="sr-only" >{allDropped ?  " " : observationMotive}</h1>
      <AccessibleList />
      {droppable}
    </div>
  );
};

// aria-hidden={allDropped ? true : null}

export default Droppable;
