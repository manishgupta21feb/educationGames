import React from "react";
import Button from "../../../../app/components/Button";
import "./style.scss";

const screenOne = (props) => {
  const { data, onClick, isPopupActive, visitedPage } = props;

  return (
    <div className="screen-one">
      <h2>{data.defaultScreenText}</h2>

      <div className="contents">
        {data.screenOneContent.map((screen) => {
          return (
            <div className="content-container" key={`container${screen.id}`}>
              <div
                className={`img--${screen.id}`}
                key={`img${screen.id}`}
                role="img"
                aria-label={screen.alt}
              >
                <div className="img-only"></div>
              </div>

              <Button
                isPopupActive={isPopupActive}
                classes={
                  visitedPage.includes(screen.id)
                    ? `hot-spot hot-spot--${screen.id} hotspot-btn label visited `
                    : `hotspot-btn label hot-spot hot-spot--${screen.id}`
                }
                text={screen.btnText}
                key={`btn--${screen.id}`}
                onClick={(e) => onClick(screen.id)}
                disabled={visitedPage.includes(screen.id)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default screenOne;
