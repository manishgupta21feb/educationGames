import React from "react";

const InfoContent = (props) => {
  const { infoContent } = props;
  return (
    <div className="infoBoxCl">
      <p>{infoContent.content}</p>
      <img className="infoImg" src={infoContent.img} alt={infoContent.imgAlt} />
      <div className="headingBanner" aria-hidden="true">
        {infoContent.headings.banner}
      </div>
      <div className="headingBoard" aria-hidden="true">
        {infoContent.headings.board}
      </div>
    </div>
  );
};

export default InfoContent;
