import React, { useEffect, useRef } from "react";
import Button from "../../../../app/components/Button";
import Label from "../../../../app/components/Label";
import Video from "../../../containers/VideoContainer";
import data from "../../../data";

import "./style.scss";
const LeftScreen = (props) => {
  const { ostCount, imageAltText, visitedButton, isPopupActive } = props;

  const video = visitedButton.length == 2;

  return (
    <div className={`left-screen`}>
      {!video ? (
        <>
          <div
            className={`images backgroundImage`}
            style={{ opacity: ostCount < 5 ? "1" : "0" }}
          ></div>
          <img className="sr-only sr-image" alt={imageAltText} />
          {data.magnificationButtonsData.map((item, index) => {
            const show = visitedButton.indexOf("1") != -1;
            return (
              <div key={item.id}>
                <div
                  className={`microscopic-image image1 ${
                    show && (ostCount == 2 || ostCount == 3) ? "show" : "hide"
                  }`}
                />
              </div>
            );
          })}
        </>
      ) : null}
      {video ? <Video /> : null}
      <div className={"microscope-label"}>
        <Label
          text={data.sampleLabel}
          classes={"primary-blue"}
          ariahide={isPopupActive}
        />
      </div>
    </div>
  );
};
export default LeftScreen;
