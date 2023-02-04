import React, { useState } from "react";
import View from "../../../../../app/components/View";
import Button from "../../../../containers/ButtonContinueContainer";

import "./style.scss";
const index = (props) => {
  const { questionScreen1, text, staticImgTxt, topStaticAltTxt } = props;

  return (
    <div>
      <View layout="topbottom">
        <div className={`top${questionScreen1}`}>
          <img className="sr-only sr-image" alt={topStaticAltTxt} />
          {staticImgTxt.length
            ? staticImgTxt.map((txt) => {
                return (
                  <span
                    key={txt.id}
                    className={`static${txt.id}`}
                    dangerouslySetInnerHTML={{
                      __html: txt.name,
                    }}
                  ></span>
                );
              })
            : null}
        </div>
        <div>
          <p
            className="bottom-paraScreen1"
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          ></p>
        </div>
      </View>

      <Button
        text="continue"
        classes="right-arrow toast-secondary-button positive"
      />
    </div>
  );
};

export default index;
