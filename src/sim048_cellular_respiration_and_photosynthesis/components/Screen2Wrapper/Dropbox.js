import React from "react";

export default (props) => {
  const { dropdElements, data, showDrop, ariaHidden } = props;
  let keys = Object.keys(dropdElements);

  return (
    <div
      aria-hidden={ariaHidden ? ariaHidden : null}
      className="droppable-region"
      role="region"
    >
      {data?.map((element, index) => {
        let altText = element.label;
        if (keys.length && keys.includes(element.id)) {
          const de = dropdElements[element.id];
          if (de.length > 1) {
            altText =
              element.label +
              element.afterDropped.replace("-1-", de[0]).replace("-2-", de[1]);
          } else {
            altText = element.label + element.dropped.replace("-1-", de[0]);
          }
        }
        return (
          <div
            key={index}
            className={`droppable-element option option-${index + 1} ${
              showDrop ? "showDrop" : ""
            }`}
            data-accept={element.id}
          >
            <img className="sr-only sr-image" alt={altText} />
            <div aria-hidden="true" className={`${element.id}`}></div>
          </div>
        );
      })}
      {keys.map((k, i) => {
        return dropdElements[k].map((v, j) => {
          return <div key={i + j} className={`cell ${k} ${v}`}></div>;
        });
      })}
    </div>
  );
};
