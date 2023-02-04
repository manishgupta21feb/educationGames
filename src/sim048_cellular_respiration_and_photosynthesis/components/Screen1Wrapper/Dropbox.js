import React from "react";

export default (props) => {
  const { dropdElements, data, ariaHidden } = props;
  return (
    <div className="droppable-region">
      {data?.drop?.map((element, index) => {
        const dropped = data?.drag?.filter(
          (d, i) => d.id === dropdElements[element.id]
        );
        const imgInfoTexts = dropped[0] ? dropped[0].imgInfoTexts : null;
        return !dropdElements[element.id] ? (
          <div
            key={index}
            className={`droppable-element ${index + 1}`}
            data-accept={element.id}
            aria-hidden={ariaHidden ? ariaHidden : null}
          >
            <div className="sr-only">{`${element.label}`}</div>
          </div>
        ) : (
          <div
            aria-hidden={ariaHidden ? ariaHidden : null}
            key={index}
            className={`${dropdElements[element.id]} dropped`}
          >
            <p className="sr-only">{`${element.label} , ${
              dropdElements[element.id]
            } ${element.dropLabel}`}</p>
            <div className="labels">
              {imgInfoTexts.map((txt, index) => {
                return (
                  <span key={txt} aria-hidden="true">
                    {txt}
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
