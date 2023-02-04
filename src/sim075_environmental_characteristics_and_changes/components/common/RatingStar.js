import React from "react";
import "./_ratingStar.scss";

const RatingStar = (props) => {
  const { totalStars, text, label, index, maxRating, showDash } = props;
  return (
    <li role="listitem">
      <div className="rating">
        <p id={`lbl-${index}`} className="sr-only sr-image">
          {label}
        </p>
        {text ? (
          <p className="label" aria-hidden>
            {text}
          </p>
        ) : null}
        <div aria-hidden className="star-rating">
          {totalStars.map((star, index) => {
            return (
              <div key={index} className={star.colorClass}>
                <label></label>
              </div>
            );
          })}
          {maxRating ? (
            <p>{maxRating > 0 ? "+" + maxRating : maxRating}</p>
          ) : (
            !showDash ? <p>--</p> :
            null
          )}
        </div>
      </div>
    </li>
  );
};

RatingStar.defaultProps = {
  totalStars: [{ colorClass: null }],
  text: "",
  colorClass: "",
};
export default RatingStar;
