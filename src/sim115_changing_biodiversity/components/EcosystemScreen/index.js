import React from "react";
import "./ecosystemScreen.scss";

const EcosystemScreen = (props) => {
  const { ecosystemData } = props;

  return (
    <div className="ecosystemScreen">
      <h2 className="ecosystemScreen__title">{ecosystemData.title}</h2>
      <img
        src={ecosystemData.src}
        alt={ecosystemData.alt}
        className="ecosystemScreen__img"
      />
    </div>
  );
};

export default EcosystemScreen;
