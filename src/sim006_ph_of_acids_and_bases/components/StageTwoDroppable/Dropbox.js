import React, { useEffect } from "react";
import { getSimLanguage } from "../../../app/helpers";
const simLanguage = getSimLanguage();
export default (props) => {
  const { data, element, dropElement, droppableRef, index } = props;
  const values = [];

  for (let drop in dropElement) {
    data.elements.map((val, i) => {
      if (drop === val.name && element.name === val.accept) {
        values.push(
          <div key={i} className={`element ${simLanguage}`}>
            {val.htmlText ? (
              <>
                <p className="sr-only">{val.name}</p>
                <p
                  aria-hidden
                  dangerouslySetInnerHTML={{ __html: val.htmlText }}
                ></p>
              </>
            ) : (
              <p>{val.name}</p>
            )}
          </div>
        );
      }
    });
  }
  return (
    <div className={`dropbox ${simLanguage== "es"? `dropBoxEs${index}`:""}`}>
      <div className="title">
        <p>{element.title}</p>
      </div>
      <div
        ref={(ref) => {
          droppableRef.current[index] = ref;
        }}
        className={`contain target ${simLanguage== "es"? `dropContainerEs${index}`:""}`}
        data-accept={element.name}
      >
        {values}
      </div>
    </div>
  );
};
