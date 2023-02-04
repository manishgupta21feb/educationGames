import React, { useEffect, useState } from "react";

const LocationAUpper = ({ locationData, currentLocation }) => {
  return (
    <div className="locationAUp bannerContainer">
      {/* <img src={locationData.imgSrc} alt={locationData.imageAlt} /> */}
      <div
        style={{
          backgroundImage: `url(${locationData.imgSrc})`,
          height: "320px",
          backgroundSize: "cover",
        }}
        role="img"
        aria-label={locationData.imageAlt}
      >
        {locationData.imgLabel && (
          <p className="locationLabel">{locationData.imgLabel}</p>
        )}
      </div>
    </div>
  );
};

export default LocationAUpper;
