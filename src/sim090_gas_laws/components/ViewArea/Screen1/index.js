import React from "react";
import View from "../../../../app/components/View";
import Bottom from "./Bottom.js";
import "./style.scss";

const Screen1 = (props) => {
  const { data, isPopupActive, imgTxt } = props;
  return (
    <View layout="topbottom" ariahidden={isPopupActive}>
      <div className="top-area-sec">
        <div className="screen1-image">
          <img className="sr-only sr-image" alt={data.screen1ImgTxt} />
        </div>
        {imgTxt.map((i, idx) => {
          return <div className={`line--${i.id}`} key={i.id} aria-hidden></div>;
        })}
        {imgTxt.map((i, idx) => {
          return (
            <p className={`img--${i.id}`} key={i.id} aria-hidden>
              {i.text}
            </p>
          );
        })}
      </div>
      <Bottom value={data} />
    </View>
  );
};

export default Screen1;
