import "./style.scss";
import React, { useEffect, useRef, useState } from "react";
import _data from "../../data/index";
import { getNumbers } from "../../helper";
// import fibirous_left from "../../assets/images/fibirous_left.png";
// import drip_tip_left from "../../assets/images/drip_tip_left.png";
// import deep_tab_left from "../../assets/images/deep_tab_left.png";
// import buttress_left from "../../assets/images/buttress_left.png";
// import flexible_left from "../../assets/images/flexible_left.png";
// import short_strem_left from "../../assets/images/short_strem_left.png";
// import very_tall_left from "../../assets/images/very_tall_left.png";
// import water_storage_left from "../../assets/images/water_storage_left.png";
// import long_and_thin_leaf_left from "../../assets/images/long_and_thin_leaf_left.png";
// import Thick_hair_left from "../../assets/images/Thick_hair_left.png";
// import Body_Brown_left from "../../assets/images/Body_Brown_left.png";
// import Green_skin_left from "../../assets/images/Green_skin_left.png";
// import Pointed_beak_left from "../../assets/images/Pointed_beak_left.png";
// import Large_teeth_left from "../../assets/images/Large_teeth_left.png";
// import Sharp_teeth_left from "../../assets/images/Sharp_teeth_left.png";
// import Thin_legs_left from "../../assets/images/Thin_legs_left.png";
// import Large_Hooves_left from "../../assets/images/Large_Hooves_left.png";
// import Paws_Claws_left from "../../assets/images/Paws_Claws_left.png";

const LeftArea = (props) => {
  let {
    selectedOptions,
    flowerParts,
    completedImgAlt,
    getLabels,
    getImagePart,
    getCurrentScreenAndEnvironment,
    screenClass,
  } = props;

  const [environmentType, setEnvironmentType] = useState("");

  useEffect(() => {
    let _type = getNumbers(
      _data.centerPageData.find(
        (x) => x.text == getCurrentScreenAndEnvironment.environment
      ).id
    );

    if (_type == 1) {
      setEnvironmentType("rain_forest_bg");
    } else if (_type == 2) {
      setEnvironmentType("arctic_tundra_bg");
    } else {
      setEnvironmentType("grassland_bg");
    }
  }, [getCurrentScreenAndEnvironment.environment]);

  return (
    <div className={`left-area ${environmentType}`}>
      <img
        className="sr-only sr-image "
        alt={getLabels.aria == "" ? completedImgAlt : getLabels.aria}
      />
      {getCurrentScreenAndEnvironment.questionNo > 0 ? (
        <div className="rectangle"></div>
      ) : (
        ""
      )}

      <div className={screenClass}>
        {getImagePart.map((val, index) => {
          return (
            <img
              src={val.path}
              key={index}
              aria-hidden={true}
              alt={val.altText}
              className={`img-drag-stop ${val.classes}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LeftArea;
