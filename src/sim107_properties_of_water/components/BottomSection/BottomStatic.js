import React from "react";

const BottomStatic = (props) => {
  const { mainScreenHeading } = props;
  return (
    <div className="bottom-static">
      <div className="intstruction-area">
        <p
          className="instruction-text"
          dangerouslySetInnerHTML={{
            __html: mainScreenHeading,
          }}
        ></p>
      </div>
    </div>
  );
};

export default BottomStatic;
