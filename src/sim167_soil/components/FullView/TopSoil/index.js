import React, { useEffect, useState, useRef } from "react";
import Card from "../Card";
import Button from "../../../../app/components/Button";
import "./style.scss";

const TopSoil = (props) => {
  const {
    topSolis,
    topSoilHeading,
    buttonsName,
    isPopupActive,
    onCompletion,
    resetHandler,
    cardAriaLive,
  } = props;

  const [nextEnabler, setNextEnabler] = useState(false);
  const [cardData, setCardData] = useState([0, 0, 0, 0]);
  const nextBtnRef = useRef(null);

  const cardsHandler = (val) => {
    let _cardData = [...cardData];
    _cardData[val] = 1;

    setCardData(_cardData);
    resetHandler(cardAriaLive[val]);
  };

  useEffect(() => {
    const isEnable = cardData?.every((element) => element == 1);
    setNextEnabler(isEnable);
  }, [cardData]);

  return (
    <div className="TopSoilContainer">
      <h2 className="heading">{topSoilHeading}</h2>
      <div className="cardHolder">
        {topSolis.map((element, index) => {
          return (
            <Card
              key={`card${index}`}
              cardData={element}
              CardName={buttonsName[index]}
              index={index}
              cardsHandler={cardsHandler}
              isPopupActive={isPopupActive}
            />
          );
        })}
      </div>
      {nextEnabler && (
        <Button
          ref={nextBtnRef}
          text={"Next"}
          classes={`btn toast-secondary-button positive right-arrow`}
          onClick={() => {
            onCompletion();
          }}
          ariaLable={"Next"}
          ariaHidden={isPopupActive || !nextEnabler}
          hideTooltip={false}
          isPopUpOpen={isPopupActive || !nextEnabler}
          disabled={!nextEnabler || isPopupActive}
          key={`locationBtn_${0}`}
        />
      )}
    </div>
  );
};

export default TopSoil;
