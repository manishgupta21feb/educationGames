import React from "react";
import Button from "../../../../app/components/Button";
import "./style.scss";

const screenOne = (props) => {
  const { data, onClick, isPopupActive } = props;
  return (
    <div className="screen-one">
      <h2>{data.screen1HeadingText}</h2>

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
              <div className="btn-flex" key={`flex${screen.id}`}>
                <Button
                  isPopupActive={isPopupActive}
                  classes={`hotspot-btn label hot-spot hot-spot--${screen.id} `}
                  text={screen.btnText}
                  id={screen.id}
                  key={`btn--${screen.id}`}
                  onClick={(e) => onClick(e.target.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default screenOne;
