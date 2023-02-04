import React from "react";
import "./style.scss";

const dropZoneTab = (props) => {
  const { heading, items, headingAlt } = props;
  return (
    <div className="drop-zone-tab">
      <div className="heading-section">
        {headingAlt ? <h2 className="sr-only">{headingAlt}</h2> : null}
        <h2 aria-hidden={!!headingAlt}>{heading}</h2>
        <span className="heading-span"></span>
      </div>
      <div className="dropped-items">
        {items
          ? items.map((item) => {
              return <p key={item.id}>{item.text}</p>;
            })
          : null}
      </div>
    </div>
  );
};

export default dropZoneTab;
