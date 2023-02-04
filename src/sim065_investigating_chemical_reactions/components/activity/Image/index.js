import React from "react";
import data from "../../../data/index";
import "./style.scss";
import { getSimLanguage } from "../../../../app/helpers";
const lang = getSimLanguage();

const Image = (props) => {
  const { equipmentdata } = props;

  return (
    <div className={`top-view ${lang}`}>
      <img className="sr-only sr-image" alt={data.imageAlt} />

      <div className="equipmenttext" aria-hidden>
        {equipmentdata.map((item, index) => {
          return (
           
            <p key={`equipment${index} `} className={`equipment${index} ${lang}`}>
              {item.text}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Image;
