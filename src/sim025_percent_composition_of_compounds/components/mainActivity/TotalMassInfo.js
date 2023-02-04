import React, { useEffect } from "react";

const totalMassIInfo = (props) => {
  const { massInfo, elementData, showPercentLabel, itemsDetail } = props;
  useEffect(() => {}, [showPercentLabel]);
  return (
    <div className="total-mass-info">
      <div className="wrapper">
        <div className={`img ${massInfo.type}`}>
          <img className="sr-only sr-image" alt={massInfo.imageAlt} />
        </div>
        <p>{`${massInfo.massLabel}`}</p>
        <p className="totalpercent">
          {elementData && elementData.length == itemsDetail.length
            ? `${massInfo.percentageLabel}`
            : null}
        </p>
      </div>
    </div>
  );
};

export default totalMassIInfo;
