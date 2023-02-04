import React from "react";
import data from "../../../data/index";
import "./style.scss";
import { getSimLanguage } from "../../../../app/helpers";
import PointLine from "../../../containers/PointerLineContainer";
const lang = getSimLanguage();

const Image = (props) => {
  const { imageData, imageEquipment } = props;

  return (
    <div className="top-view">
      <img src={imageData.questionImage} alt={imageData.imageText} />
      <div className={`contentHolder ${imageData.id}`}>
        <p className="header" aria-hidden="true">
          {imageData.lensName}
        </p>
        <p className="objA" aria-hidden="true">
          {imageEquipment.contentA}
        </p>
        <p className="objB" aria-hidden="true">
          {imageEquipment.contentB}
        </p>
        <PointLine />
      </div>
    </div>
  );
};

export default Image;
