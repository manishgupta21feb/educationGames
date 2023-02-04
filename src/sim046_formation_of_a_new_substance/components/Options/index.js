import React from "react";
import Button from "../../../app/components/Button";
import Wrapper from "../Wrapper";
import Labels from "../../containers/LabelsContainer";
import "./options.scss";

const Options = (props) => {
  const { options, aboutScreen, onHandler, isPopupActive } = props;

  const option = options?.map((item, index) => {
    const _onHandler = (evt, index) => {
      onHandler(evt, index);
    };

    return (
      <Button
        key={item.id}
        id={item.id}
        text={item.title}
        classes={`${
          aboutScreen || item.isDisabled
            ? "hotspot-btn label visited "
            : "hotspot-btn label"
        }`}
        disabled={aboutScreen || item.isDisabled ? "disabled" : ""}
        onClick={(evt) => _onHandler(evt, index)}
        isPopupActive={isPopupActive}
      />
    );
  });

  return (
    <>
      <Labels />
      <Wrapper className="options wrapper--center-hrzn">{option}</Wrapper>
    </>
  );
};

export default Options;
