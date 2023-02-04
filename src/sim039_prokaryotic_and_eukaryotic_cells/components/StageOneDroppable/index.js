import React, { createRef, useEffect } from "react";
import "./style.scss";
import PropTypes from "prop-types";
import AccessibleList from "../../containers/AccessibleList";
import Label from "../../../app/components/Label";

const Droppable = (props) => {
  const {
    data,
    dropElement,
    accessibleListVisible,
    droppableRef,
    matchedItems,
    isPopupActive,
  } = props;

  return (
    <div className="droppable-stage1" role="region">
      <AccessibleList />
      <div className="images-div">
        <div className={"bg-img left-background"}></div>
        <div className={"bg-img right-background"}></div>
      </div>
      {data.dropZones.map((element, index) => {
        return !dropElement[element.accept] ? (
          <React.Fragment key={index}>
            <div className={`color-strip-header ${element.name}`}>
              <h2 key={index}>{element.text}</h2>
            </div>

            <div
              ref={(ref) => {
                droppableRef.current[index] = ref;
              }}
              className={`target option option-${index + 1}`}
              data-accept={element.name}
              // aria-label={`${data.dropRegionDetail} ${data.droppableAltText[index]}`}
              // aria-hidden={accessibleListVisible}
            >
              <div
                className={`accessibleListScreen dropzone${index + 1}  sr-only`}
              >
                <span>{`${data.dropRegionDetail} ${data.droppableAltText[index]}`}</span>
              </div>
              {matchedItems[element.name].map((item, index) => {
                return (
                  <Label
                    text={item.text}
                    type={"primary-blue"}
                    key={`${element.name}-${index}`}
                  />
                );
              })}
            </div>
          </React.Fragment>
        ) : (
          <div
            key={index}
            // role="img"
            className={`target option option-${index + 1} dropped`}
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
  // dropElement: PropTypes.object.isRequired,
  accessibleListVisible: PropTypes.bool.isRequired,
};

export default Droppable;
