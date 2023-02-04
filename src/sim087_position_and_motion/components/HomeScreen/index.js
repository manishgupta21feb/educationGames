import React from "react";
import Button from "../../../app/components/Button";
import "./style.scss";

const HomeScreen = (props) => {
  const { homeData, handleSelectButton, isPopupActive } = props;
  return (
    <div className="home-screen-container" aria-hidden={isPopupActive}>
      <h2 className="home-screen-heading">{homeData.title}</h2>
      <div className="option-container">
        {homeData.options.map((item, index) => (
          <div className={`option option-${index}`} key={index}>
            <div className={`option-img option-img-${index}`}>
              <img src={item.img} alt={item.altImg} />
            </div>
            <div className={`option-btn option-btn-${index}`}>
              <Button
                classes={"select-btn hotspot-btn label"}
                text={item.buttonTitle}
                title={item.buttonTitle}
                aria-label={item.buttonTitle}
                onClick={() => handleSelectButton(item.id)}
                disabled={isPopupActive}
                tabIndex={isPopupActive ? "-1" : null}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
