import React, { useState } from "react";
import Select from "../../../../app/components/Select";
import "./style.scss";

const LeftStatic = (props) => {
  const { data, questionCount, bottomLabels, heading, labels } = props;

  const itemData = data.filter((q, i) => q.srNo == questionCount)[0];

  return (
    <>
      <div className="sr-only" aria-level="1" role="heading">
        <p>{heading}</p>
      </div>
      <div className={`left-static`}>
        <img className="sr-only sr-image" alt={itemData.altText} />
        <div className={`dotted-box ${questionCount < 3 ? itemData.id : ""}`}>
          <p
            className={`${itemData.class}`}
            aria-hidden="true"
            dangerouslySetInnerHTML={{ __html: itemData.element }}
          ></p>
        </div>
        <div className={`image-footer`}>
          <p>{`${labels[0].name}: ${itemData.neutrons}`}</p>
          <p>
            <span className="sr-only">{itemData.alt}</span>
            <span
              id={itemData.id}
              aria-hidden="true"
              dangerouslySetInnerHTML={{
                __html: `${labels[1].name}: ${itemData.charge}`,
              }}
            ></span>
          </p>
        </div>
        <div className={`left-bottom`}>
          {questionCount < 3 &&
            bottomLabels &&
            bottomLabels.map((label, i) => {
              return (
                <div key={label.id} className={`labels ${label.id}`}>
                  <div></div>
                  <p>{label.value}</p>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default LeftStatic;
