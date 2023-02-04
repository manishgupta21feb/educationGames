import React, { createRef, useEffect } from "react";
import "./style.scss";
import PropTypes from "prop-types";
import { getSimLanguage } from "../../../app/helpers";

const Droppable = (props) => {
  const { data, dropElement, accessibleListVisible, droppableRef } = props;
  const lang = getSimLanguage();
  useEffect(() => {
    // if(droppableRef && droppableRef.current){
    //   droppableRef.current = data.elements.map((element, index) => droppableRef.current[index] ?? createRef())
    // }
  });

  return (
    <div
      className="droppable-stage1"
      role="region"
      // aria-label={data.dropRegionDetail}
    >
      {data.elements?.map((element, index) => {
        return !dropElement[element.name] ? (
          <div
            ref={(ref) => {
              droppableRef.current[index] = ref;
            }}
            key={index}
            className={`target option option-${index + 1}`}
            data-accept={element.name}
            aria-label={`${data.dropRegionDetail} ${data.droppableAltText[index]}`}
            aria-hidden={accessibleListVisible}
          ></div>
        ) : (
          <div
            key={index}
            className={`target option option-${index + 1} dropped ${lang}`}
            aria-label={`${element.name} , ${data.droppableAltText[index]} `}
          >
            <span aria-hidden={true}>{element.name}</span>
          </div>
        );
      })}
    </div>
  );
};

Droppable.propTypes = {
  data: PropTypes.object.isRequired,
  dropElement: PropTypes.object.isRequired,
  accessibleListVisible: PropTypes.bool.isRequired,
};

export default Droppable;
