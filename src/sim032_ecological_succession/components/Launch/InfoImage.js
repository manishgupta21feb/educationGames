import React from "react";

const InfoImage = (props) => {
  const { infoImageAltText } = props;

  return (
    <div aria-label={infoImageAltText} className="info-image">
      <img className="sr-only sr-image" alt={infoImageAltText} />
    </div>
  );
};

export default InfoImage;
