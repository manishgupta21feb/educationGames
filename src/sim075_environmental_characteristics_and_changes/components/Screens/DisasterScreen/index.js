import React, { useState } from "react";
import Button from "../../../../app/components/Button";
import View from "../../../../app/components/View";
import RatingBox from "../../RatingBox";
import DisasterBox from "./DisasterBox";
import InfoBox from "./InfoBox";
import "./style.scss";

export default (props) => {
  const {
    isPopupActive,
    buttonLabels,
    selectedAnsId,
    screenData,
    starRatings,
    setStarRating,
    onNextClick,
  } = props;

  const [selectedDisaster, setSelectedDisaster] = useState(null);

  const onCardClick = (value) => {
    if (!selectedDisaster) {
      setSelectedDisaster(value);
      setStarRating(value.ratings);
    }
  };

  const onNext = () => {
    onNextClick();
  };

  return (
    <View ariahidden={isPopupActive || null}>
      <div className={`screen1-container ${selectedAnsId}`}>
        <img className="sr-only sr-image" alt={selectedAnsId} />
        <div className={"instructor"}>
          <p id="heading" className="heading">
            {screenData.disasterInfo}
          </p>
          <h2 id="subheading" className="heading">
            {screenData.question}
          </h2>
        </div>
        <div className="disasterCards">
          {screenData.cards.map((card) => {
            return (
              <DisasterBox
                disabled={
                  selectedDisaster ? card.id !== selectedDisaster.id : false
                }
                ariaPressed={selectedDisaster ? card.id === selectedDisaster.id : false}
                onCardClick={() => onCardClick(card)}
                key={card.id}
                text={card.text}
                label={card.label}
                labelledby="subheading"
              ></DisasterBox>
            );
          })}
        </div>
        {selectedDisaster ? (
          <InfoBox
            content={selectedDisaster.content}
            starRatings={starRatings}
          ></InfoBox>
        ) : (
          <RatingBox starRatings={starRatings} />
        )}
        {selectedDisaster ? (
          <Button
            classes="right-arrow toast-secondary-button positive"
            text={buttonLabels.next}
            onClick={onNext}
            isPopUpOpen={isPopupActive}
          />
        ) : null}
      </div>
    </View>
  );
};
