import React from "react";
import RatingBox from "../../RatingBox";

export default (props) => {
  const { content, starRatings } = props;
  
  return (
    <div className="infoBox" role="alert" aria-labelledby="lbl-0 lbl-1 lbl-2 lbl-3 lbl-4">
      <div className="content" >
        <p id="content">{content}</p>
      </div>
      <RatingBox starRatings={starRatings} />
    </div>
  );
};
