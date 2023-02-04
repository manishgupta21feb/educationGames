import React from "react";

const DataListItem = (props) => {
  const {
    classes,
    item: { label, value },
  } = props;
  return (
    <div className={classes}>
      <div className="marker">
        <span className="line"></span>
        <span className="cube"></span>
      </div>
      <div className="value">
        <span
          className="list-value"
          dangerouslySetInnerHTML={{ __html: value }}
        ></span>
        <span
          className="list-label"
          dangerouslySetInnerHTML={{ __html: label }}
        ></span>
      </div>
    </div>
  );
};

export default DataListItem;
