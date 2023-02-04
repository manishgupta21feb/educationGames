import React from "react";

export default (props) => {
  const {
    dropdElements,
    data,
    dataAccept,
    disabledList,
    dragList,
    dropAlt,
    ariaHidden,
    dropedAltText,
  } = props;

  return (
    <div className="droppable-region" role="region">
      {data?.map((element, index) => {
        const disabled = disabledList.includes(element.target[0]);
        const dropped = dragList?.filter(
          (d, i) => d.id === dropdElements[`${dataAccept}-${index}`]
        );

        const imgInfoTexts = dropped[0] ? dropped[0].imgInfoText : null;
        const dropableAlt = dropAlt.replace("-1-", index + 1);
        const droppedAltText = dropableAlt + dropedAltText
          .replace("-1-", dropped[0] ? dropped[0].label ? dropped[0].label : dropped[0].name:"");
        return !disabled && !dropdElements[`${dataAccept}-${index}`] ? (
          <div
            key={index}
            className={`droppable-element drop-${index + 1}`}
            data-accept={`${dataAccept}-${index}`}
            // aria-label={dropableAlt}
            aria-hidden={ariaHidden ? ariaHidden : null}
          >
             <div className="sr-only">{`${dropableAlt}`}</div>
          </div>
        ) : (
          <div
            key={index}
            className={`drop-${index + 1} ${
              dropdElements[`${dataAccept}-${index}`]
            } ${
              !dropdElements[`${dataAccept}-${index}`] ? "disabled" : "dropped"
            } `}
          >
             <div className="sr-only">{`${droppedAltText}`}</div>
            {dropdElements[`${dataAccept}-${index}`] && imgInfoTexts ? (
              <span aria-hidden className="label">{imgInfoTexts}</span>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};
