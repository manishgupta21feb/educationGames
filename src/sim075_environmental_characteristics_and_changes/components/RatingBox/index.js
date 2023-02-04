import React, { useEffect } from "react";
import RatingStar from "../common/RatingStar";
import data from "../../data";

import "./style.scss";
import { useState } from "react";

export default (props) => {
  const { starRatings, submitted, isPopupActive, qId } = props;
  const [first, setfirst] = useState(false);

  useEffect(() => {
    if (!first) {
      setfirst(true);
    }
  }, [starRatings]);

  useEffect(() => {
    if (first) {
      setfirst(false);
    }
  }, [isPopupActive, submitted]);

  const ratingNames = data.ratings.reduce((result, r) => {
    return { ...result, [r.id]: { text: r.text, altText: r.altText } };
  }, {});

  return (
    <div
      role={first && submitted ? "alert" : null}
      aria-labelledby={
        first && submitted ? "lbl-0 lbl-1 lbl-2 lbl-3 lbl-4" : null
      }
    >
      <ul role="list" className="ratingBox">
        {Object.keys(starRatings).map((sr, index) => {
          const maxRating = Math.abs(starRatings[sr]);
          const actualRating = starRatings[sr];
          const colorClass = `${
            starRatings[sr] ? (starRatings[sr] > 0 ? "blue" : "red") : ""
          } `;

          return (
            <RatingStar
              key={sr}
              index={index}
              text={ratingNames[sr]["text"]}
              maxRating={actualRating}
              showDash={!submitted && qId === 1}
              totalStars={[...Array(5).keys()].map((val, index) => {
                return {
                  colorClass: index < maxRating ? colorClass : "",
                };
              })}
              label={
                ratingNames[sr]["altText"]
                  ? ratingNames[sr]["altText"]
                      .replace(
                        "-1-",
                        starRatings[sr] > 0
                          ? data.textLabels.positive
                          : starRatings[sr] < 0
                          ? data.textLabels.negative
                          : ""
                      )
                      .replace("-2-", Math.abs(starRatings[sr]))
                  : ""
              }
            ></RatingStar>
          );
        })}
      </ul>
    </div>
  );
};
