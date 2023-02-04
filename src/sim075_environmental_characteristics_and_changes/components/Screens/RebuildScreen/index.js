import React, { useState } from "react";
import Button from "../../../../app/components/Button";
import View from "../../../../app/components/View";
import RadioButtonContainer from "../../../containers/RadioButtonContainer";
import RatingBox from "../../RatingBox";
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
    onFinishClick,
  } = props;

  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const radiobuttons = screenData.options.map((m) => ({
    text: m.text,
    id: m.id,
  }));

  const onChange = (id) => {
    EventManager.broadcast("PRIMARY_CLICK");
    const selected = screenData.options.filter((m) => m.id === id)[0];
    setSelected(selected);
    setSubmitted(false);
  };

  const onSubmit = () => {
    EventManager.broadcast("PRIMARY_CLICK");
    setSubmitted(true);
    setStarRating(selected.ratings);
  };

  const onFinish = () => {
    onFinishClick();
  };

  return (
    <View ariahidden={isPopupActive || null}>
      <div className={`screen2-container ${selectedAnsId}`}>
        <img className="sr-only sr-image" alt={selectedAnsId} />
        <div className={"instructor"}>
          <p id="heading" className="heading">
            {screenData.introText}
          </p>
        </div>
        <RadioButtonContainer
          onChange={onChange}
          labelledby="heading"
          selectedOption={selected ? selected.id : ""}
          radiobuttons={radiobuttons}
        ></RadioButtonContainer>
        {selected ? <InfoBox submitted={submitted} content={selected.content}></InfoBox> : null}
        <RatingBox starRatings={starRatings} />
        <div className="submit-button">
          <Button
            classes="primary"
            text={buttonLabels.submitAnswer}
            onClick={onSubmit}
            disabled={!selected || submitted}
            isPopUpOpen={isPopupActive}
          />
        </div>

        {submitted ? (
          <div className="finish-button">
            <Button
              classes="toast-secondary-button positive"
              text={buttonLabels.finish}
              onClick={onFinish}
              isPopUpOpen={isPopupActive}
            />
          </div>
        ) : null}
      </div>
    </View>
  );
};
