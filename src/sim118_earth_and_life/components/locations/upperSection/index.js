import React, { useEffect, useState } from "react";

const LocationAUpper = ({ locationData, currentLocation }) => {
  return (
    <div className="locationAUp bannerContainer">
      {/* <img src={locationData.imgSrc} alt={locationData.imageAlt} /> */}
      <div
        style={{
          backgroundImage: `url(${locationData.imgSrc})`,
          height: "inherit",
          backgroundSize: "cover",
        }}
        role="img"
        aria-label={locationData.imageAlt}
      ></div>
    </div>
  );
};

export default LocationAUpper;
