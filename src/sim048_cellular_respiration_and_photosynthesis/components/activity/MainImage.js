import React from "react";

export default (props) => {
  const { altText, imageTitle, imageTexts } = props;
  return (
    <div className="initial-image">
      <img className="sr-only sr-image" alt={altText} />
      <span aria-hidden className="image-title">{imageTitle}</span>
      {imageTexts.map((txt, index) => {
        return (
          <div aria-hidden key={txt.id} className={txt.id} aria-label={txt.label}>
            <span aria-hidden="true">{txt.name}</span>
          </div>
        );
      })}
    </div>
  );
};
