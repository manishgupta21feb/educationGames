import React, { useEffect, useRef } from "react";
import { isIOS } from "react-device-detect";
import Draggables from "../../../../containers/DraggableContainer";
import Droppables from "../../../../containers/DroppableContainer";
import AccessibleList from "../../../../containers/AccessibleList";
import "./style.scss";

const FullView = ({
  onLoad,
  feedback,
  screen0Alt,
  headingLevel1,
  draggableItems,
  droppableItems,
  experimentTitle,
  accessibleListVisible,
}) => {
  const ref = useRef(null);
  const feedbackRef = useRef(feedback);
  const accessibleListRef = useRef(accessibleListVisible);
  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    if (accessibleListRef.current && !accessibleListVisible) {
      if (!feedback.id && feedback == feedbackRef.current) {
        const draggable = ref.current.querySelector(".draggable");
        if (draggable) {
          draggable.focus();
        }
      }
    }
    accessibleListRef.current = accessibleListVisible;
  }, [accessibleListVisible]);

  return (
    <div ref={ref} className="full-view">
      <div className="full-view-wrapper">
        <div className="sr-only" aria-level="1" role="heading">
          <p>{headingLevel1}</p>
        </div>
        <div className="bg-image"></div>
        <div className="bg-shadow"></div>
        <>
          <div className="instructions">
            <p dangerouslySetInnerHTML={{ __html: experimentTitle }}></p>
          </div>
          {isIOS ? (
            <div
              className="sr-only-setup"
              aria-label={screen0Alt}
              role="img"
            ></div>
          ) : null}
          <div className="droppable-setup">
            <div
              className="sr-only sr-image"
              aria-label={screen0Alt}
              role="img"
            ></div>
            {droppableItems.map((item, index) => {
              return <Droppables data={item} key={index} index={index} />;
            })}
          </div>
          {draggableItems.map((item, index) => {
            return <Draggables items={item} key={index} index={index} />;
          })}
        </>
        <AccessibleList />
      </div>
    </div>
  );
};

export default FullView;
