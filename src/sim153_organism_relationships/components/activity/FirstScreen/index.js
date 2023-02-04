import React from "react";
import "./style.scss";
import ButtonNextQuestion from "../../../containers/ButtonNextQuestion";
import DraggableContainer from "../../../containers/DraggableContainer";
import DoppableContainer from "../../../containers/DoppableContainer";
import DescriptionBoxContainer from "../../../containers/DescriptionBoxContainer";
export default (props) => {
  const {
    mainHeading,
    dndShow,
    descriptionShow,
    matchedItems,
    matchedId,
    getHeading,
    altimage,
  } = props;

  return (
    
    <div className="first-screen">
      <img className="sr-only sr-image"
       alt={altimage}
       ></img> 
       {matchedItems &&
        matchedItems.map((items) => {
          const show = items.id == matchedId;
          return (
            <div
              className={`dropped-objects ${items.id} ${show ? "show" : ""}`}
            />
          );
        })}
      {!dndShow ? (
        <>
          <p
            className="mainHeading"
            dangerouslySetInnerHTML={{ __html: mainHeading }}
          ></p>
        </>
      ) : (
        <>
          <p
            className="dnd-heading"
            dangerouslySetInnerHTML={{ __html: getHeading }}
          ></p>
      
          <DraggableContainer />
          <DoppableContainer />
          {descriptionShow ? <DescriptionBoxContainer /> : null}
        </>
      )}
      {!dndShow || (matchedItems.length == 6 && !descriptionShow) ? (
        <ButtonNextQuestion />
      ) : null}
    </div>
  );
};
