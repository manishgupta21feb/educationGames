import React from "react";
import ButtonContainer from "../../containers/ButtonContainerMass";
import "./style.scss";

const MainArea = (props) => {
  const { mainActivityText, headingText, mainScreenButtons, isPopupActive } =
    props;

  return (
    <div className="main-area">
      <h1 className="sr-only">{headingText}</h1>
      <h2>
        <p className="text-info">{mainActivityText}</p>
      </h2>
      <div className="button-container">
        {mainScreenButtons.map((val, index) => {
          return (
            <div className={`${val.type}-container`} key={index}>
              <div
                className={`${val.type}-box`}
                role="img"
                aria-label={val.alt}
              ></div>
              <ButtonContainer
                text={val.text}
                label={val.text}
                id={val.id}
                classes={`hotspot-btn label ${
                  val.visited == true ? "visited" : ""
                }`}
                disabled={val.visited == true ? true : isPopupActive}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MainArea;
