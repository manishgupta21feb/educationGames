import React from "react";
import "./style.scss";

const Bottom = (data) => {
  return (
    <div className="bottom-area">
      <p
        dangerouslySetInnerHTML={{
          __html: data.value.screen1.text1,
        }}
      ></p>
      <p
        className="p2"
        dangerouslySetInnerHTML={{
          __html: data.value.screen1.text2,
        }}
      ></p>
    </div>
  );
};

export default Bottom;
