import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

const Droppable = (props) => {
  const { data, dropElement, accessibleListVisible } = props;

  return (
    <div
      role="region"
      className="option-container droppable"
      aria-label={data.dropRegionDetail}
    >
      {data.elementData?.map((element, index) => {
        return !dropElement[element.elementName] ? (
          <div
            key={index}
            data-accept={element.elementName}
            aria-hidden={accessibleListVisible}
            className={`target option option-${index + 1}`}
            aria-label={`${data.droppableAltText[index]} ${index + 1}`}
          ></div>
        ) : null;
      })}
    </div>
  );
};

Droppable.propTypes = {
  data: PropTypes.object.isRequired,
  dropElement: PropTypes.object.isRequired,
};

export default Droppable;
