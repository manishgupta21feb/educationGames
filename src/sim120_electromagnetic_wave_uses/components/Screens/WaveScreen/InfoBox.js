import React from "react";

export default (props) => {
  const { content } = props;
  return <div className="infoBox">
      <div className="content"><p>{content}</p></div>
     
  </div>;
};
